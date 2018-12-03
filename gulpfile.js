var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');

var paths = {
    sass: ['./scss/*.scss']
};

gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./public/css/'));
})

gulp.task('default', function () {
    gulp.watch(paths.sass, ['sass']);
});