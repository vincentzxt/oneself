(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/sell-list/sell-detail"],{1597:function(n,t,e){"use strict";e.r(t);var a=e("edc5"),i=e("5305");for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);e("6f50");var o,c=e("f0c5"),d=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"078bdc96",null,!1,a["a"],o);t["default"]=d.exports},5305:function(n,t,e){"use strict";e.r(t);var a=e("6e8b"),i=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);t["default"]=i.a},"6e8b":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("a544"),i=e("f45c"),u=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},o=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},c=function(){return e.e("components/custom/cu-loading").then(e.bind(null,"a8d7"))},d={components:{uniList:u,uniListItem:o,cuLoading:c},data:function(){return{title:"销售详情",id:0,dataList:{}}},onShow:function(){},onLoad:function(n){this.id=n.id,this.loadData()},methods:{handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){n.navigateBack({delta:1})},loadData:function(){var n=this;this.loadmore="loading",this.$refs.loading.open();var t={id:this.id};(0,a.get)(i.api.salesOrder,t).then(function(t){n.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode?n.dataList=t.data.data:n.$api.msg(t.data.returnMessage)}).catch(function(t){n.$refs.loading.close(),n.$api.msg("请求失败fail")})}}};t.default=d}).call(this,e("543d")["default"])},"6f50":function(n,t,e){"use strict";var a=e("fcb0"),i=e.n(a);i.a},d78a:function(n,t,e){"use strict";(function(n){e("fdae"),e("921b");a(e("66fd"));var t=a(e("1597"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},edc5:function(n,t,e){"use strict";var a,i=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return a})},fcb0:function(n,t,e){}},[["d78a","common/runtime","common/vendor"]]]);