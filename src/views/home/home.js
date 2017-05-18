'use strict';

define(['jquery', 'vue', 'swiper'], function ($, Vue, swiper) {

    var app = new Vue({

        el: '#app',

        data: {
            searchShow: false,
            isFocus: false,
            listData: [{
                imageUrl: 'http://m.qiyipic.com/image/20170516/d6/80/a_100049767_m_601_m2_195_260.jpg',
                name: '熊熊乐园'
            }, {
                imageUrl: 'http://m.qiyipic.com/image/20170206/70/ce/v_111755990_m_601_m2_195_260.jpg',
                name: '火影忍者 青鸟'
            }, {
                imageUrl: 'http://m.qiyipic.com/image/20161228/be/23/a_100040408_m_601_195_260.jpg',
                name: '赛罗奥特曼 英雄传'
            }, {
                imageUrl: 'http://m.qiyipic.com/image/20170204/b2/09/v_111747012_m_601_m1_195_260.jpg',
                name: '精灵梦叶罗丽 主题曲'
            }, {
                imageUrl: 'http://m.qiyipic.com/image/20170401/d3/93/a_100047949_m_601_m1_195_260.jpg',
                name: '鸣人VS佩恩 火影20大经典战役'
            }, {
                imageUrl: 'http://m.qiyipic.com/image/20161201/ea/96/a_100037985_m_601_195_260.jpg',
                name: '迪迦与戴拿奥特曼 剧场版 中文版'
            }]
        },
        mounted: function mounted() {

            if (this.isWeiXin()) {
                alert('请使用非微信浏览器打开该页面!');
            }

            new Swiper('#headerNav', {
                freeMode: true,
                slidesPerView: 8
            });

            new Swiper('#bannerBar', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                slidesPerView: 1,
                autoplay: 5000,
                autoplayDisableOnInteraction: false
            });

            new Swiper('#mainNav', {
                freeMode: true,
                slidesPerView: 5
            });
        },


        methods: {
            startSearch: function startSearch() {
                this.searchShow = true;
            },
            endSearch: function endSearch() {
                this.searchShow = false;
            },
            focusInput: function focusInput() {
                this.isFocus = true;
            },
            isWeiXin: function isWeiXin() {
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                    return true;
                } else {
                    return false;
                }
            }
        }
    });
});