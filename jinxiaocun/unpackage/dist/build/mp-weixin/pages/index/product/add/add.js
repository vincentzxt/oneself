(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/product/add/add"],{2301:function(t,a,e){},"30bb":function(t,a,e){"use strict";e.r(a);var n=e("5cd7"),u=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(a,t,function(){return n[t]})}(c);a["default"]=u.a},"33cc":function(t,a,e){"use strict";e.r(a);var n=e("a0d3"),u=e("30bb");for(var c in u)"default"!==c&&function(t){e.d(a,t,function(){return u[t]})}(c);e("e2ad");var i,r=e("f0c5"),o=Object(r["a"])(u["default"],n["b"],n["c"],!1,null,"18036746",null,!1,n["a"],i);a["default"]=o.exports},"5cd7":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e("aba6"),u=e("f45c"),c=i(e("dcb1"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return e.e("components/custom/cu-panel").then(e.bind(null,"00f1"))},o=function(){return e.e("components/custom/cu-cell").then(e.bind(null,"52a0"))},d=function(){return e.e("components/custom/cu-cell-group").then(e.bind(null,"13d0"))},l={components:{cuPanel:r,cuCell:o,cuCellGroup:d},data:function(){return{title:"添加产品",reqData:{productname:"",querycode:"",price:"",productcategory:"",unit:"",subunit:"",unitmultiple:"",warningStockQty:0,remarks:""},disableSubmit:!0}},onShow:function(){var t=getCurrentPages(),a=t[t.length-1];a.data.rName&&a.data.datas&&("type"==a.data.rName?this.reqData.productcategory=a.data.datas.name:"unit"==a.data.rName?this.reqData.unit=a.data.datas.name:"subunit"==a.data.rName&&(this.reqData.subunit=a.data.datas.name))},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleSubmit:function(){(0,n.create)(u.api.baseProduct,this.reqData).then(function(a){200==a.status&&"0000"==a.data.returnCode?c.default.getBaseProduct().then(function(a){c.default.getProductCategory().then(function(a){t.navigateBack({delta:1})}).catch(function(a){t.navigateBack({delta:1})})}).catch(function(a){t.navigateBack({delta:1})}):t.showToast({title:"添加失败"})}).catch(function(a){t.showToast({title:"添加失败"})})}},watch:{reqData:{handler:function(t){t.productname?this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};a.default=l}).call(this,e("543d")["default"])},a0d3:function(t,a,e){"use strict";var n,u=function(){var t=this,a=t.$createElement;t._self._c},c=[];e.d(a,"b",function(){return u}),e.d(a,"c",function(){return c}),e.d(a,"a",function(){return n})},bfbd:function(t,a,e){"use strict";(function(t){e("fdae"),e("921b");n(e("66fd"));var a=n(e("33cc"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},e2ad:function(t,a,e){"use strict";var n=e("2301"),u=e.n(n);u.a}},[["bfbd","common/runtime","common/vendor"]]]);