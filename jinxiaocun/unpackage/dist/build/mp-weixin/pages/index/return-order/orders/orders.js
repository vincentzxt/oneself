(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/return-order/orders/orders"],{"054c":function(t,n,e){},"155c":function(t,n,e){"use strict";e.r(n);var a=e("358e"),r=e("5647");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("4af6");var c,s=e("f0c5"),o=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"50ba1c17",null,!1,a["a"],c);n["default"]=o.exports},"205c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("f45c"),r=e("aba6"),u=function(){return e.e("components/uni-search-bar/uni-search-bar").then(e.bind(null,"112b"))},c=function(){return e.e("components/custom/cu-panel").then(e.bind(null,"00f1"))},s=function(){return e.e("components/custom/cu-cell").then(e.bind(null,"52a0"))},o=function(){return e.e("components/custom/cu-cell-group").then(e.bind(null,"13d0"))},i={components:{uniSearchBar:u,cuPanel:c,cuCell:s,cuCellGroup:o},data:function(){return{businessType:"",currentUnitId:"",title:"订单列表",datas:null,searchDatas:null}},onLoad:function(t){var n=this;console.log(t),this.businessType=t.businessType,this.currentUnitId=t.currentUnitId,this.currentUnitId&&(console.log("1"),this.$refs.loading.open(),"0"==this.businessType?(console.log("2"),(0,r.query)(a.api.purPurchaseOrder,{contactunitid:this.currentUnitId}).then(function(t){n.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode&&(n.datas=t.data.data.resultList,n.searchDatas=n.datas)}).catch(function(t){n.$refs.loading.close()})):(console.log("3"),get(a.api.salesOrder,this.currentUnitId).then(function(t){n.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode&&(n.datas=t.data.data.resultList,n.searchDatas=n.datas)}).catch(function(t){n.$refs.loading.close()})),console.log(this.datas))},onShow:function(){},computed:{headerHeight:function(){return this.$headerIsSearchHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},filterItem:function(t){return{name:t}},handleSearch:function(t){t.value?this.searchDatas=this.datas.filter(function(n){return-1!==n.indexOf(t.value)}):this.searchDatas=this.datas}}};n.default=i}).call(this,e("543d")["default"])},3384:function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");a(e("66fd"));var n=a(e("155c"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"358e":function(t,n,e){"use strict";var a,r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.searchDatas,function(n,e){var a=t.filterItem(n);return{$orig:t.__get_orig(n),m0:a}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},u=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return a})},"4af6":function(t,n,e){"use strict";var a=e("054c"),r=e.n(a);r.a},5647:function(t,n,e){"use strict";e.r(n);var a=e("205c"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=r.a}},[["3384","common/runtime","common/vendor"]]]);