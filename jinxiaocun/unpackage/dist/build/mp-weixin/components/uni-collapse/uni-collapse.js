(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"2e49e":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(t,e){t.isOpen&&n.push(t.nameSync)}),this.$emit("change",n)}}};t.default=u},"2f1f":function(n,t,e){"use strict";e.r(t);var u=e("2e49e"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=c.a},3867:function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})},8535:function(n,t,e){"use strict";e.r(t);var u=e("3867"),c=e("2f1f");for(var r in c)"default"!==r&&function(n){e.d(t,n,function(){return c[n]})}(r);e("92df");var o,a=e("f0c5"),i=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,"23e4956e",null,!1,u["a"],o);t["default"]=i.exports},"92df":function(n,t,e){"use strict";var u=e("b6bd"),c=e.n(u);c.a},b6bd:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8535"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);
