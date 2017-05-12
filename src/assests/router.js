// ----------requireJS配置------------ //
require.config({
    paths:{
        // 公共资源路径
        jquery:'tools/jquery-2.1.4.min',
        app:'fun/app',
        des:'fun/des',
        vue:'tools/vue.min',
        swiper:'lib/swiper/js/swiper.min',
        boom:'lib/boom/boom'
    },
}); 


// 加载和页面同名的js文件
require(['jquery','app'],function($,app){   


  var myRouter = {
	    thePageModule : '',//当前页面的模块(AMD规范模块,暴露出来的接口)
	  }

    var request = app.getRequest();//获取url参数,组装为对象
    var path = window.location.pathname.substr(0,window.location.pathname.lastIndexOf('/')+1);
    var pageName = window.location.href.split("/")[(window.location.href.split("/").length)-1];
    var pageId = pageName.substr(0,pageName.indexOf("."));
 
    //使用requireJS的require加载与[pageId]同名的[pageId.js]

    //新页面中的组件初始化完毕
    $(document).ready(function(e, $page) {
        var pageModuleName = path + pageId +".js";
        require([pageModuleName],function (pageModuleName) {
          myRouter.thePageModule = pageModuleName;
        }); 
    });

});