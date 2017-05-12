/**
 * @author：puncheung_lai
 * @see: 对ie8，ie9浏览器作出友好处理
 */
define(function() {

    var BANNERBROWER = ['MSIE6.0','MSIE7.0','MSIE8.0','MSIE9.0'];

    var browserName = navigator.appName;

    if ( browserName == "Microsoft Internet Explorer" ){

        var browserVersion = navigator.appVersion.split(";")[1].replace(/[ ]/g,"");

        for(var i in BANNERBROWER){

            if( browserVersion == BANNERBROWER[i]){

                 window.location.href = '../unsupport/unsupport.html';
            }

        }

    }

});