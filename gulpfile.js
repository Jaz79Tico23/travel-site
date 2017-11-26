var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function() {
    console.log('Congrats! You created a default task');
});

gulp.task('html', function() {
    console.log('Something useful is done here');
});

gulp.task('styles', function() {
    console.log('Sass or postcss runs here');
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});
