define([
    'jquery',
    'vue',
    'des',
    'swiper'
], function($, Vue, des, url, swiper) {

    let app = new Vue({

         el: '#app',

         data:{
            username:'',
            password:'',
            loadingSign:false,
            tips:''
         },

         mounted(){

            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                effect: 'flip',
                grabCursor: true,
                pagination: '.swiper-pagination',
                autoplay:3000,
                loop:true
            });
         },

         methods:{

            _goLogin(){
                if(this._vaildate()){
                    
                }
            },

            _vaildate(){
                let flag = true;
                this.loadingSign = false;
                this.tips = '';
                if(this.username.length == 0){
                    this.loadingSign = true;
                    this.tips = 'please input name ';
                    flag = false;
                }else if(this.password.length == 0){
                    this.loadingSign = true;
                    this.tips = 'please input password ';
                    flag = false;
                }
                return flag;
            }
            
         }
    })


});