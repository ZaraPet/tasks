'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var tildeImporter = require('node-sass-tilde-importer');

gulp.task('sass', function () {
	gulp.src(['app/**/*.scss','assets/theme.scss'], { base: "./" })

		.pipe(sass({importer: tildeImporter},{includePaths: ["node_modules/"]}).on('error', sass.logError))
		.pipe(gulp.dest("."));
});


gulp.task('sass:watch', function(){
	gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('get-icons', () => {
	return gulp.src(["icons/core.svg"])
		.pipe(gulp.dest("icons"))
});
