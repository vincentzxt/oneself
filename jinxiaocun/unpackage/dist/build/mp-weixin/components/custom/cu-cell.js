(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom/cu-cell"],{"52a0":function(t,e,n){"use strict";n.r(e);var a=n("d49e"),u=n("9364");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("d5be");var l,r=n("f0c5"),o=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"b7fdb440",null,!1,a["a"],l);e["default"]=o.exports},9364:function(t,e,n){"use strict";n.r(e);var a=n("9468"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},9468:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cu-cell",props:{height:{type:Number,default:70},title:{type:String,default:""},isIcon:{type:Boolean,default:!1},icon:{type:Object,default:function(){return{type:"",color:"",size:0}}},isLink:{type:Boolean,default:!1},url:{type:String,default:""},params:{type:String,default:""},isLastCell:{type:Boolean,default:!1}},data:function(){return{}},methods:{navigateTo:function(){var e=this.url;this.params&&(e+="?"+this.params),t.navigateTo({url:e})},handleCell:function(){this.isLink?this.navigateTo():this.$emit("clickCell")}}};e.default=n}).call(this,n("543d")["default"])},d49e:function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},d5be:function(t,e,n){"use strict";var a=n("e70f"),u=n.n(a);u.a},e70f:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom/cu-cell-create-component',
    {
        'components/custom/cu-cell-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("52a0"))
        })
    },
    [['components/custom/cu-cell-create-component']]
]);
