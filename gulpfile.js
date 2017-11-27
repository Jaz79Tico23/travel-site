var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
browserSync = require('browser-sync');


gulp.task('default', function() {
    console.log('Congrats! You created a default task');
});

gulp.task('html', function() {
    console.log('Something useful is done here');
});

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});
