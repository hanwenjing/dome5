/**
 * Created by Administrator on 2017/10/8 0008.
 */
var gulp=require('gulp');
var minifyCss=require('gulp-minify-css');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
gulp.task('minifycss',function(){
    gulp.src(['css/*.css'])
        .pipe(concat('main.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('css/'))
})
gulp.task('uglifyjavascript',function(){
    gulp.src(['js/*.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
})


