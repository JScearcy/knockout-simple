var b = require('browserify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function(){
  return b('./client/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadmaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./knockout-work/Scripts'))
})
