'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const bro = require('gulp-bro');

gulp.task('build-css', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('_public/css'));
});

gulp.task('build-js', () => {
    return gulp.src('src/js/**/*js')
        .pipe(bro())
        .pipe(gulp.dest('_public/js'))
});

gulp.task('default',
    gulp.series('build-css', 'build-js', () => {
        gulp.watch('src/scss/**/*.scss', (done) => {
            gulp.series(['build-css'])(done);
        });

        gulp.watch('src/js/**/*.js', (done) => {
            gulp.series(['build-js'])(done);
        });
    })
);

gulp.task('dev',
  gulp.series('build-css', 'build-js', () => {
    gulp.watch('src/scss/**/*.scss', (done) => {
        gulp.series(['build-css'])(done);
    });
    
    gulp.watch('src/js/**/*.js', (done) => {
        gulp.series(['build-js'])(done);
    });
  })
);

gulp.task('build',
    gulp.series(['build-css', 'build-js'])
);

