var gulp = require('gulp');
// подключаем gulp-less
var less = require('gulp-less');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var csso = require('gulp-csso');
var uncss = require('gulp-uncss');
jade = require('gulp-jade');

// чтобы запустить эту задачу, наберите в командной строке gulp jade
gulp.task('jade', function() {
return gulp.src('app/jade/**/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.reload({
     stream: true
}))
// указываем gulp куда положить скомпилированные HTML файлы
});


gulp.task('uncss', function () {
    return gulp.src('dist/styles.min.css')
        .pipe(uncss({
            html: ['dist/**/*.html']
        }))
        .pipe(gulp.dest('dist/'));
});


gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});


gulp.task('less', function() {
  return gulp.src('app/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});




gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'jade', 'less'], function (){
  gulp.watch('app/less/**/*.less', ['less']);
  gulp.watch('app/jade/**/*.jade', ['jade']);
  // Обновляем браузер при любых изменениях в HTML или JS
  gulp.watch('app/jade/**/*.jade', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);   
  gulp.watch('app/less/**/*.less', browserSync.reload);
  
});


gulp.task('imagemin', () =>
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})





gulp.task('autoprefixer', function () {
    return gulp.src('dist/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});


// Cleaning

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});



gulp.task('build', [`less`, `useref`, `imagemin`, `fonts`], function (){
  console.log('Building files');
})

gulp.task('cssmin', function () {
    return gulp.src('dist/css/styles.min.css')
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));
});
