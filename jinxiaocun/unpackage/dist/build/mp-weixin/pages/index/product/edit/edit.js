(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/product/edit/edit"],{"096d":function(t,a,e){"use strict";var n,u=function(){var t=this,a=t.$createElement;t._self._c},c=[];e.d(a,"b",function(){return u}),e.d(a,"c",function(){return c}),e.d(a,"a",function(){return n})},"220c":function(t,a,e){},"32cf":function(t,a,e){"use strict";e.r(a);var n=e("096d"),u=e("5277");for(var c in u)"default"!==c&&function(t){e.d(a,t,function(){return u[t]})}(c);e("84f9");var r,i=e("f0c5"),o=Object(i["a"])(u["default"],n["b"],n["c"],!1,null,"1cada112",null,!1,n["a"],r);a["default"]=o.exports},"421e":function(t,a,e){"use strict";(function(t){e("fdae"),e("921b");n(e("66fd"));var a=n(e("32cf"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},5277:function(t,a,e){"use strict";e.r(a);var n=e("9e5d"),u=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(a,t,function(){return n[t]})}(c);a["default"]=u.a},"84f9":function(t,a,e){"use strict";var n=e("220c"),u=e.n(n);u.a},"9e5d":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e("aba6"),u=e("f45c"),c=r(e("dcb1"));function r(t){return t&&t.__esModule?t:{default:t}}var i=function(){return e.e("components/custom/cu-panel").then(e.bind(null,"00f1"))},o=function(){return e.e("components/custom/cu-cell").then(e.bind(null,"52a0"))},d=function(){return e.e("components/custom/cu-cell-group").then(e.bind(null,"13d0"))},s={components:{cuPanel:i,cuCell:o,cuCellGroup:d},data:function(){return{title:"修改产品",reqData:{productid:0,productname:"",querycode:"",price:0,productcategory:"",unit:"",subunit:"",unitmultiple:0,remarks:""},disableSubmit:!0}},onLoad:function(t){var a=JSON.parse(t.item);this.reqData.productid=a.productid,this.reqData.productname=a.productname,this.reqData.querycode=a.querycode,this.reqData.price=a.price,this.reqData.productcategory=a.productcategory,this.reqData.unit=a.unit,this.reqData.subunit=a.subunit,this.reqData.unitmultiple=a.unitmultiple,this.reqData.remarks=a.remarks},onShow:function(){var t=getCurrentPages(),a=t[t.length-1];a.data.rName&&a.data.datas&&("type"==a.data.rName?this.reqData.productcategory=a.data.datas.name:"unit"==a.data.rName?this.reqData.unit=a.data.datas.name:"subunit"==a.data.rName&&(this.reqData.subunit=a.data.datas.name))},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleSubmit:function(){(0,n.update)(u.api.baseProduct,{model:this.reqData}).then(function(a){200==a.status&&"0000"==a.data.returnCode?c.default.getBaseProduct().then(function(a){c.default.getProductCategory().then(function(a){t.navigateBack({delta:1})}).catch(function(a){t.navigateBack({delta:1})})}).catch(function(a){t.navigateBack({delta:1})}):t.showToast({title:"修改失败"})}).catch(function(a){t.showToast({title:"修改失败"})})}},watch:{reqData:{handler:function(t){t.productname?this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};a.default=s}).call(this,e("543d")["default"])}},[["421e","common/runtime","common/vendor"]]]);