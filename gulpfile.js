var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
    sass: ['./scss/style.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
    gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css/'))
        .on('end', done);
})

gulp.task('watch', ['sass'], function () {
    gulp.watch(paths.sass, ['sass']);
});