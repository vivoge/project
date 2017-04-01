var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpConcat = require('gulp-concat');
var gulpFileInclude = require('gulp-file-include');
var gulpSequence = require('gulp-sequence');


gulp.task('server',function () {
    return gulpConnect.server({
        root:'dist',
        port:'6060',
        livereload:true
    })
});

gulp.task('copy_other_css',function () {
    return gulp.src('./public/www/3rdLibs/css/**')
        .pipe(gulp.dest('./public/www/3rdLibs/css'))
});

gulp.task('dist_copy',function () {
   return gulp.src([
      './src/public/**',
      '!./src/public/www/css/*'
   ])
       .pipe(gulp.dest('./dist/public'))
       .pipe(gulpConnect.reload())
});

gulp.task('dist_copy_css',function () {
    return gulp.src('./src/public/www/css/_*.css')
               .pipe(gulpConcat('all.css'))
               .pipe(gulp.dest('./dist/public/www/css'))
               .pipe(gulpConnect.reload())
});

gulp.task('dist_fileinclude_cn',function () {
    return gulp.src('./src/*.html')
        .pipe(gulpFileInclude({
            perfix:'@@',
            basepath:'@file'
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(gulpConnect.reload())
});

gulp.task('dist_copy_js',function () {
   return gulp.src('./src/public/www/js')
       .pipe('./public/www/js')
       .pipe(gulpConnect.reload())
});



gulp.task('watch',function () {
    gulp.watch(['./src/*.html','./src/include/*.html'],function () {
        gulp.run('dist_fileinclude_cn')
    });

    gulp.watch('./src/public/www/css/*.css',function () {
        gulp.run('dist_copy_css')
    });

    gulp.watch('./src/public/www/js/*.js',function () {
        gulp.run('dist_copy_js')
    });
});


gulp.task('dist',['dist_copy','dist_copy_css','dist_fileinclude_cn','copy_other_css']);

gulp.task('serlook',gulpSequence(['watch','server']));
