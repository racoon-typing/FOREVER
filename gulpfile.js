"use strict"
const { src, dest } = require("gulp")
const gulp = require("gulp")
const autoprefixer = require("gulp-autoprefixer")
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const rigger = require("gulp-rigger")
const sass = require("gulp-sass")(require('sass'));
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const del = require("del");
const notify = require("gulp-notify")
const imagewebp = require("gulp-webp")
const browserSync = require("browser-sync").create();
// Мои
const webpHtml = require("gulp-webp-html");
const gulpif = require("gulp-if");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const beautify = require("gulp-html-beautify");
const hash = require('gulp-hash-filename');



/* Paths */
const srcPath = "src/"
const distPath = "dist/"

const isProd = process.argv.includes("--production");
const isDev = !isProd;


const path = {
    build: {
        html: distPath,
        css: distPath + "assets/css/",
        js: distPath + "assets/js/",
        images: distPath + "assets/img/",
        fonts: distPath + "assets/fonts/",
        php: distPath + "assets/php/"
    },
    src: {
        html: srcPath + "*.html",
        css: srcPath + "assets/scss/*.scss",
        js: srcPath + "assets/js/*.js",
        images: srcPath + "assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts: srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}",
        php: srcPath + "assets/php/**/*.*"
    },
    watch: {
        html: srcPath + "**/*.html",
        js: srcPath + "assets/js/**/*.js",
        css: srcPath + "assets/scss/**/*.scss",
        images: srcPath + "assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts: srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}",
        php: srcPath + "assets/php/**/*.*",
    },
    clean: "./" + distPath
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./" + distPath
        },
    });
}


function html() {
    return src(path.src.html, { base: srcPath })
        .pipe(plumber())
        .pipe(fileInclude())
        .pipe(size({ title: "До сжатия" }))
        .pipe(gulpif(isProd, htmlmin({
            collapseWhitespace: true
        })))
        .pipe(size({ title: "После сжатия" }))
        .pipe(gulpif(isProd, webpHtml()))
        .pipe(gulpif(isDev, beautify()))
        .pipe(dest(path.build.html))
        .pipe(browserSync.reload({ stream: true }));
}

function css() {
    return src(path.src.css, { base: srcPath + "assets/scss/", sourcemaps: true })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "SCSS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssbeautify())
        // .pipe(hash()) // хеширование
        .pipe(dest(path.build.css, { sourcemaps: true }))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css, { sourcemaps: true }))
        .pipe(browserSync.reload({ stream: true }));
}

function js() {
    return src(path.src.js, { base: srcPath + "assets/js/", sourcemaps: true })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "JS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(rigger())
        // .pipe(hash()) // хеширование
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(dest(path.build.js, { sourcemaps: true }))
        .pipe(browserSync.reload({ stream: true }));
}

function images() {
    return src(path.src.images, { base: srcPath + "assets/img/" })
        .pipe(gulpif(isProd, imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 3 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ])))
        .pipe(dest(path.build.images))
        .pipe(browserSync.reload({ stream: true }));
}

function webpImages() {
    return src(path.src.images, { base: srcPath + "assets/img/" })
        .pipe(gulpif(isProd, imagewebp()))
        .pipe(dest(path.build.images))
}

function fonts() {
    return src(path.src.fonts, { base: srcPath + "assets/fonts/" })
        .pipe(dest(path.build.fonts))
        .pipe(browserSync.reload({ stream: true }));
}

function clean() {
    return del(path.clean)
}

function php() {
    return src(path.src.php)
        .pipe(dest(path.build.php))
}

function watchFiles() {
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.images], images)
    gulp.watch([path.watch.fonts], fonts)
    gulp.watch([path.watch.php], php)
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, webpImages, fonts, php))
const watch = gulp.parallel(build, watchFiles, serve)


exports.html = html
exports.css = css
exports.js = js
exports.images = images
exports.webpImages = webpImages
exports.fonts = fonts
exports.clean = clean
exports.build = build
exports.watch = watch
exports.default = watch
