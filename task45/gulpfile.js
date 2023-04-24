const { src, dest, series, parallel, watch } = require("gulp");
const concat = require("gulp-concat");
const del = require("del");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const prefix = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");

const destination = "build";
const origin = "src";

async function clean(cb) {
  await del(destination);
  cb();
}

function watcher(cb) {
  watch(`${origin}/**/*.html`).on("change", series(html, browserSync.reload));
  watch(`${origin}/scss/*.scss`, css);
  watch(`${origin}/js/*.js`).on("change", series(js, browserSync.reload));
  cb();
}

function server(cb) {
  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: destination,
    },
  });
  cb();
}

function html(cb) {
  src(`${origin}/**/*.html`).pipe(dest(destination));
  cb();
}

function css(cb) {
  src(`${origin}/scss/*.scss`)
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(
      prefix(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: false })
    )
    .pipe(dest(`${origin}/css`))
    .pipe(cleanCSS())
    .pipe(dest(`${destination}/css`))
    .pipe(browserSync.stream());
  cb();
}

function js(cb) {
  src(`${origin}/js/*.js`)
    .pipe(concat("script.js"))
    .pipe(dest(origin))
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(dest(destination));
  cb();
}
exports.clean = clean;
exports.default = series(series(css), parallel(html, js), server, watcher);
