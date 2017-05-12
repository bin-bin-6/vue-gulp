'use strict';

define(['jquery', 'vue', 'des', 'boom'], function ($, Vue, des, url, Boom) {

    var app = new Vue({

        el: '#app',

        data: {
            curShake: {
                curShakeX: 0,
                curShakeY: 0,
                curShakeZ: 0
            },
            lastShake: {
                lastShakeX: 0,
                lastShakeY: 0,
                lastShakeZ: 0
            },
            //设置临界值,这个值可根据自己的需求进行设定，默认就3000也差不多了
            shakeThreshold: 3000,
            //设置最后更新时间，用于对比
            lastUpdate: 0,
            power: 0,
            totalPower: 10,
            linePrecenter: 0,
            btnActive: false
        },

        mounted: function mounted() {
            this._listen();
        },

        methods: {
            _boom: function _boom() {
                if (this.btnActive) {
                    boom($('#logo'));
                    setTimeout(function () {
                        if (confirm('恭喜您，摇完了10下!请问还要再摇一遍吗?')) {
                            document.location.reload();
                        }
                    }, 2000);
                }
            },

            /**
             * 获取手机重力感应
             */
            _deviceMotionHandler: function _deviceMotionHandler(event) {
                //获得重力加速
                var acceleration = event.accelerationIncludingGravity;
                //获得当前时间戳
                var curTime = new Date().getTime();

                if (curTime - this.lastUpdate > 100) {

                    //时间差
                    var diffTime = curTime - this.lastUpdate;
                    this.lastUpdate = curTime;

                    //x轴加速度
                    this.curShake.curShakeX = acceleration.x;
                    //y轴加速度
                    this.curShake.curShakeY = acceleration.y;
                    //z轴加速度
                    this.curShake.curShakeZ = acceleration.z;

                    var speed = Number(Math.abs(this.curShake.curShakeX + this.curShake.curShakeY + this.curShake.curShakeZ - this.lastShake.lastShakeX - this.lastShake.lastShakeY - this.lastShake.lastShakeZ)) / Number(diffTime) * 10000;

                    // alert(speed > this.shakeThreshold);
                    if (speed > this.shakeThreshold) {
                        //TODO 相关方法
                        if (this.power < this.totalPower) {
                            this.power++;
                            this.linePrecenter = this.power / this.totalPower * 100;
                        } else {
                            this.btnActive = true;
                        }
                    }

                    this.lastShake.lastShakeX = this.curShake.curShakeX;
                    this.lastShake.lastShakeY = this.curShake.curShakeY;
                    this.lastShake.lastShakeZ = this.curShake.curShakeZ;
                }
            },
            _listen: function _listen() {
                //先判断设备是否支持HTML5摇一摇功能
                if (window.DeviceMotionEvent) {
                    //获取移动速度，得到device移动时相对之前某个时间的差值比
                    window.addEventListener('devicemotion', this._deviceMotionHandler, false);
                } else {
                    alert('您好，你目前所用的设置好像不支持重力感应哦！');
                }
            }
        }
    });
});