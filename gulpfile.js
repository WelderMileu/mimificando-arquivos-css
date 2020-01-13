const gulp         = require('gulp'); // gulp 
const cleanCss     = require('gulp-clean-css'); // gulp-clean-css
const autoPrefixer = require('gulp-autoprefixer'); // gulp-autoprefixer
const concat       = require('gulp-concat'); // gulp-contact
const sourceMaps   = require('gulp-sourcemaps'); // gulp-sourcemaps !important

exports.default = async () => {
	await gulp.src('src/css/*')
			  .pipe(sourceMaps.init())
			  .pipe(autoPrefixer())
			  .pipe(concat('build.css'))
			  .pipe(sourceMaps.write('.'))
			  .pipe(gulp.dest('build/css'))
}