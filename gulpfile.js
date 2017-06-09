// Gulp
// http://gulpjs.com/
// npm install gulp
// npm install --only=dev
var gulp = require('gulp');

// Gulp Util
// https://www.npmjs.com/package/gulp-util
// npm install --save-dev gulp-util
var gutil = require( 'gulp-util' );

// Gulp Vinyl FTP
// https://www.npmjs.com/package/vinyl-ftp
// http://loige.co/gulp-and-ftp-update-a-website-on-the-fly/
// npm install --save-dev vinyl-ftp
var ftp = require( 'vinyl-ftp' );

// FTP Configuration
var user = process.env.FTP_USER;
var password = process.env.FTP_PWD;
var host = 'ftp.giftwrapcreations.com';
var port = 21;
var localFilesGlob = ['./**/*'];
var remoteFolder = '/'

// Helper function to build an FTP
// connection based on our configuration
function getFtpConnection() {
  return ftp.create({
    host: host,
    port: port,
    user: user,
    password: password,
    parallel: 5,
    log: gutil.log
  });
}

// Babel
// https://www.npmjs.com/package/gulp-babel
// npm install --save-dev gulp-babel babel-preset-es2015
const babel = require('gulp-babel');

// Babel - Babili
// https://www.npmjs.com/package/gulp-babili
// npm install gulp-babili --save-dev
const babili = require("gulp-babili");

// Sass
// https://www.npmjs.com/package/gulp-sass
// npm install gulp-sass --save-dev
var sass = require('gulp-sass');

// PostCSS
// https://www.npmjs.com/package/gulp-postcss
// npm install gulp-postcss --save-dev
var postcss = require('gulp-postcss');

// CSSnano
// https://www.npmjs.com/package/gulp-cssnano
// npm install gulp-cssnano --save-dev
var nano = require('gulp-cssnano');

// Source Maps
// https://www.npmjs.com/package/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// Autoprefixer
// https://www.npmjs.com/package/gulp-autoprefixer
// npm install gulp-autoprefixer --save-dev
var autoprefixer = require('autoprefixer');

gulp.task('default', function () {
  var conn = getFtpConnection();
  return gulp.src('assets/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // using gulp-sass
    .pipe(postcss([ autoprefixer() ]))
    .pipe(nano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['default']);
});

gulp.task('babel-global', () => {
  return gulp.src('assets/javascript/dgwc.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('babel-homepage', () => {
  return gulp.src('assets/javascript/homepage.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('babel-anita', () => {
  return gulp.src('assets/javascript/meetAnita.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('babel-services', () => {
  return gulp.src('assets/javascript/services.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('babel-contact', () => {
  return gulp.src('assets/javascript/contact.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .pipe(gulp.dest('assets/js'));
});
