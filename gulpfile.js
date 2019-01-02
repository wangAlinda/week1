var gulp = require('gulp');
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var webserver = require('gulp-webserver'); //服务
var clean = require('gulp-clean-css'); //压缩css
var uglify = require('gulp-uglify'); //压缩js
gulp.task('scss', function() {
    return gulp.src('./src/css/*.css')
        //编译css
        .pipe(clean())
        .pipe(sass())
        .pipe(gulp.dest('./build/list/css'))
});
//压缩js
gulp.task('js', function() {
    return gulp.src('./src/js/common/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/list/js'))
});
//gulp起服务
gulp.task('webserver', function() {
    return gulp.src('./src')
        .pipe(webserver({
            port: 3000,
            open: true, //自动打开浏览器
            livereload: true, //自动更新

        }));
});

//监听文件变化
gulp.task('watch', function() {
    return gulp.watch('./src/css/index.css', gulp.series('css'));
});