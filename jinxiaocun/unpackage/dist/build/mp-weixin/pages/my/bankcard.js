(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/bankcard"],{"0cba":function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},"16b0":function(n,t,e){"use strict";(function(n){e("fdae"),e("921b");u(e("66fd"));var t=u(e("31ef"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"31ef":function(n,t,e){"use strict";e.r(t);var u=e("0cba"),a=e("f712");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("f195");var i,o=e("f0c5"),l=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"100bfe8a",null,!1,u["a"],i);t["default"]=l.exports},9053:function(n,t,e){},e7b9:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/custom/cu-panel").then(e.bind(null,"00f1"))},a=function(){return e.e("components/custom/cu-cell").then(e.bind(null,"52a0"))},c=function(){return e.e("components/custom/cu-cell-group").then(e.bind(null,"13d0"))},i=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},o=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},l={components:{cuPanel:u,cuCell:a,cuCellGroup:c,uniList:i,uniListItem:o},data:function(){return{reqData:{company_logo:"",company_name:"湖北吉奥汽车服务有限公司",contact_person:"",contact_tel:"",contact_qq:"",contact_email:"",contact_addr:"",banktype:0,isForbidden:0},bankDict:["微信","支付宝","银行卡","现金"],title:"账户设置"}},onShow:function(){},methods:{handleBankChange:function(n){this.reqData.banktype=this.bankDict[n.detail.value]},handleForbiddenChanage:function(n){this.reqData.isForbidden=n.detail.value},handleNavbarClickLeft:function(){n.navigateBack({delta:1})},handleSubmit:function(){}}};t.default=l}).call(this,e("543d")["default"])},f195:function(n,t,e){"use strict";var u=e("9053"),a=e.n(u);a.a},f712:function(n,t,e){"use strict";e.r(t);var u=e("e7b9"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a}},[["16b0","common/runtime","common/vendor"]]]);