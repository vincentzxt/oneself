<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-load-more/uni-load-more"],{1964:function(t,n,e){"use strict";e.r(n);var o=e("3f22"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},"3f22":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=t.getSystemInfoSync().platform,o={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},iconSize:{type:Number,default:24},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{webviewHide:!1,platform:e}},computed:{iconSnowWidth:function(){return console.log(2*(Math.floor(this.iconSize/24)||1)),2*(Math.floor(this.iconSize/24)||1)}},mounted:function(){},methods:{onClick:function(){this.$emit("clickLoadMore",{detail:{status:this.status}})}}};n.default=o}).call(this,e("543d")["default"])},"48b7":function(t,n,e){"use strict";e.r(n);var o=e("91ca"),u=e("1964");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("6bd7");var i=e("2877"),r=Object(i["a"])(u["default"],o["a"],o["b"],!1,null,"1c4b408b",null);n["default"]=r.exports},"6bd7":function(t,n,e){"use strict";var o=e("84a0"),u=e.n(o);u.a},"84a0":function(t,n,e){},"91ca":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})}}]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-load-more/uni-load-more"],{"0b17":function(t,n,e){"use strict";var o=e("4de9"),u=e.n(o);u.a},"4de9":function(t,n,e){},"7e4e":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=t.getSystemInfoSync().platform,o={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},iconSize:{type:Number,default:24},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{webviewHide:!1,platform:e}},computed:{iconSnowWidth:function(){return console.log(2*(Math.floor(this.iconSize/24)||1)),2*(Math.floor(this.iconSize/24)||1)}},mounted:function(){},methods:{onClick:function(){this.$emit("clickLoadMore",{detail:{status:this.status}})}}};n.default=o}).call(this,e("543d")["default"])},a22c:function(t,n,e){"use strict";var o,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return o})},af94:function(t,n,e){"use strict";e.r(n);var o=e("7e4e"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},af96:function(t,n,e){"use strict";e.r(n);var o=e("a22c"),u=e("af94");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("0b17");var c,i=e("f0c5"),r=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,"44030742",null,!1,o["a"],c);n["default"]=r.exports}}]);
>>>>>>> d9bea62689cb495bf28b81e1ee13c55bbda74e56
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-load-more/uni-load-more-create-component',
    {
        'components/uni-load-more/uni-load-more-create-component':(function(module, exports, __webpack_require__){
<<<<<<< HEAD
            __webpack_require__('543d')['createComponent'](__webpack_require__("48b7"))
=======
            __webpack_require__('543d')['createComponent'](__webpack_require__("af96"))
>>>>>>> d9bea62689cb495bf28b81e1ee13c55bbda74e56
        })
    },
    [['components/uni-load-more/uni-load-more-create-component']]
]);