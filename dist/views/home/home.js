/** 
* nhxzfw V1.0.0 
* Fri May 19 2017 08:40:57 GMT+0800 (中国标准时间)
*/
"use strict";define(["jquery","vue","swiper"],function(e,i,a){new i({el:"#app",data:{searchShow:!1,isFocus:!1,listData:[{imageUrl:"http://m.qiyipic.com/image/20170516/d6/80/a_100049767_m_601_m2_195_260.jpg",name:"熊熊乐园"},{imageUrl:"http://m.qiyipic.com/image/20170206/70/ce/v_111755990_m_601_m2_195_260.jpg",name:"火影忍者 青鸟"},{imageUrl:"http://m.qiyipic.com/image/20161228/be/23/a_100040408_m_601_195_260.jpg",name:"赛罗奥特曼 英雄传"},{imageUrl:"http://m.qiyipic.com/image/20170204/b2/09/v_111747012_m_601_m1_195_260.jpg",name:"精灵梦叶罗丽 主题曲"},{imageUrl:"http://m.qiyipic.com/image/20170401/d3/93/a_100047949_m_601_m1_195_260.jpg",name:"鸣人VS佩恩 火影20大经典战役"},{imageUrl:"http://m.qiyipic.com/image/20161201/ea/96/a_100037985_m_601_195_260.jpg",name:"迪迦与戴拿奥特曼 剧场版 中文版"}]},mounted:function(){this.isWeiXin()&&alert("请使用非微信浏览器打开该页面!"),new Swiper("#headerNav",{freeMode:!0,slidesPerView:8}),new Swiper("#bannerBar",{pagination:".swiper-pagination",paginationClickable:!0,slidesPerView:1,autoplay:5e3,autoplayDisableOnInteraction:!1}),new Swiper("#mainNav",{freeMode:!0,slidesPerView:5})},methods:{startSearch:function(){this.searchShow=!0},endSearch:function(){this.searchShow=!1},focusInput:function(){this.isFocus=!0},isWeiXin:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}}})});