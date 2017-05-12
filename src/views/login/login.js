'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

define(['jquery', 'vue', 'des', 'swiper'], function ($, Vue, des, url, swiper) {

    var app = new Vue({

        el: '#app',

        data: {
            username: '',
            password: '',
            loadingSign: false,
            tips: ''
        },

        mounted: function mounted() {
            var _ref;

            var swiper = new Swiper('.swiper-container', (_ref = {
                pagination: '.swiper-pagination',
                effect: 'flip',
                grabCursor: true
            }, _defineProperty(_ref, 'pagination', '.swiper-pagination'), _defineProperty(_ref, 'autoplay', 3000), _defineProperty(_ref, 'loop', true), _ref));
        },


        methods: {
            _goLogin: function _goLogin() {
                if (this._vaildate()) {}
            },
            _vaildate: function _vaildate() {
                var flag = true;
                this.loadingSign = false;
                this.tips = '';
                if (this.username.length == 0) {
                    this.loadingSign = true;
                    this.tips = 'please input name ';
                    flag = false;
                } else if (this.password.length == 0) {
                    this.loadingSign = true;
                    this.tips = 'please input password ';
                    flag = false;
                }
                return flag;
            }
        }
    });
});