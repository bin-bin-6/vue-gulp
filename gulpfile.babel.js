'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';//处理出现异常并不终止watch事件
import notify from 'gulp-notify';//提示出现的错误信息
import autoprefixer from 'gulp-autoprefixer';//补全浏览器前缀
import cssnano from 'gulp-cssnano';//引入css压缩模块
import cssver from 'gulp-make-css-url-version'; 
import uglify from 'gulp-uglify';//引入js压缩模块
import htmlMin from 'gulp-htmlmin';//引入html压缩模块
import assetRev from 'gulp-asset-rev-edit';//引入修改版本号模块
import header from 'gulp-header';
import babel from "gulp-babel"; //es6解析器
import es2015 from "babel-preset-es2015";//es6语法
import del from 'del';//删除文件/文件夹模块
import sequence from 'gulp-sequence';//同步执行任务
import webserver from 'gulp-webserver';//gulp本地服务器
import pkg from './package.json';

const opts={
    dev:'./src',
    prod:'./dist'
};

const watchObj = {
	sass:`${opts.dev}/**/**/*.scss`,
	jsx:`${opts.dev}/{views,componments}/**/*.jsx`,
	js:`${opts.dev}/{views,componments}/**/*.js`,
	html:`${opts.dev}/{views,componments}/**/*.html`
};

const AUTOPREFIXER_BROWSERS = {//前缀对象
	browsers : [
		'ie >= 9',//添加ie9前缀
		'ie_mob >= 10',
		'ff >= 30',//firefox版本大于30
		'chrome >= 34',//chrome版本大于34
		'safari >= 7',
		'opera >= 23',
		'ios >= 7',
		'android >= 2.3',
		'bb >= 10'
	],
	cascade : false,//是否美化属性值
	remove : true,//是否去掉不必要的前缀
};

//===文件头-注释===//
const banner = 
"/** \n\
* nhxzfw V" + pkg.version + " \n\
* "+ (new Date())+"\n\
*/\n";


const HTML_MIN = {//压缩html对象
	 removeComments: true,//清除HTML注释
     collapseWhitespace: true,//压缩HTML
     collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
     removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
     removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
     removeStyleLinkTypeAttributes: false,//删除<style>和<link>的type="text/css"
     minifyJS: true,//压缩页面JS
     minifyCSS: true//压缩页面CSS
}
// css任务
gulp.task('goCss',function(){
    return gulp.src(watchObj.sass)
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(sass())
		.pipe(cssver())
		.pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
		.pipe(cssnano())
		.pipe(gulp.dest(opts.prod));
});
// js任务
gulp.task('goJs',()=>{
	return gulp.src(watchObj.js)
		.pipe(babel({
			presets: [es2015]
		}))
		.pipe(uglify())
		.pipe(header(banner))
		.pipe(gulp.dest(opts.prod));
});
// html任务
gulp.task('goHtml',()=>{
	return gulp.src(watchObj.html)
		.pipe(assetRev())
		.pipe(htmlMin(HTML_MIN))
		.pipe(gulp.dest(opts.prod));
});
// copy任务
gulp.task('copyFile',()=>{
	return gulp.src(`${opts.dev}/{assests,componments,images,views}/**`)
		.pipe(gulp.dest(opts.prod));
});
// clean任务
gulp.task('cleanFile',()=>{
	return del(opts.prod);
});
// 同步任务链
gulp.task('sequenceTask',()=>{
	sequence('cleanFile','copyFile','goHtml','goCss','goJs',()=>{
		console.log('同步任务链执行完成');
	})
});
// 默认任务
gulp.task('default', ['sequenceTask']);

/*========================监听任务==========================*/


// jsx编译成js
gulp.task('goJsxToJs',()=>{
	return gulp.src(`${opts.dev}/**/**/*.jsx`)
		.pipe(babel({
			presets: [es2015]
		}))
		.pipe(gulp.dest(opts.dev));
});
// scss编译css
gulp.task('goScssToCss',()=>{
	return gulp.src(`${opts.dev}/**/**/*.scss`)
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(sass())
		.pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
		.pipe(gulp.dest(opts.dev))
});
// watch任务总链
gulp.task('watch',()=>{
	gulp.watch(watchObj.sass,['goScssToCss']);
	gulp.watch(watchObj.jsx,['goJsxToJs']);
});
// gulp-webserver
gulp.task('webserver',()=>{
	gulp.src('./')
		.pipe(webserver({
			livereload:true,
			directoryListing:true,
			open:true,
			port:'6060'
		}));
});
// 启动gulp-server任务
gulp.task('goServer',()=>{
	sequence('webserver','watch',()=>{
		console.log('开启gulp-webserver成功');
	})
});