(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/integral/integral","components/custom/cu-loading"],{1226:function(t,n,e){"use strict";var o=e("d551"),a=e.n(o);a.a},"2cc1":function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},"30c5":function(t,n,e){"use strict";e.r(n);var o=e("6cdd"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},5088:function(t,n,e){"use strict";e.r(n);var o=e("8287"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},"6cdd":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("94a7"),a=e("f45c");i(e("a8d7"));function i(t){return t&&t.__esModule?t:{default:t}}var c=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},r=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},u=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"af96"))},s=function(){return e.e("components/wuc-tab/wuc-tab").then(e.bind(null,"4f14"))},d=function(){return e.e("components/helang-checkbox/helang-checkbox-jf").then(e.bind(null,"f0b2"))},l={components:{uniLoadMore:u,uniList:c,uniListItem:r,WucTab:s,"helang-checkbox":d},data:function(){return{loadmore:"more",pageIndex:0,pageRows:15,title:"积分兑换",pickerIndex:2,TabCur:0,content_show_id:0,dataList:[],tabList:[{name:"兑换"},{name:"我的兑换"}],OrderStatusList:["待支付","已支付"],ordertype:3,PayTypeList:{0:"",1:"银行账号",2:"微信",3:"支付宝",4:"现金"},productList:[]}},onLoad:function(){this.pickerIndex=3,this.loadData(),this.loadProduct()},onShow:function(){},mounted:function(){},methods:{handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){t.navigateBack({delta:1})},tabChange:function(t){switch(console.log(t),t){case 0:this.content_show_id=0,this.$refs.checkbox.set({type:"radio",column:2,list:this.list}),this.pickerIndex=3;break;case 1:this.content_show_id=1;break;default:this.content_show_id=0;break}},handleSubmit:function(){var n=this,e=this.$refs.checkbox.get();if(e){var i={productid:e.productid};(0,o.tokenpost)(a.api.IntegralExchange,i).then(function(e){200==e.status&&"0000"==e.data.returnCode?(n.$api.msg("兑换成功！"),n.pageIndex=0,n.loadData(),n.TabCur=1,t.$emit("changecompany",{msg:"company变化了"})):n.$api.msg(e.data.returnMessage)}).catch(function(t){n.$api.msg("请求失败fail")})}else this.$api.msg("请选择要兑换的产品!")},loadProduct:function(){var t=this;this.$refs.loading.open();var n={pageIndex:1,pageRows:-1,ordertype:this.ordertype};(0,o.tokenpost)(a.api.GetProductList,n).then(function(n){t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode?(t.productList=n.data.data.resultList,console.log(t.productList)):t.$api.msg(n.data.returnMessage)}).catch(function(n){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})},loadData:function(){var t=this;this.loadmore="loading",this.$refs.loading.open();var n={pageIndex:this.pageIndex+1,pageRows:this.pageRows};(0,o.tokenpost)(a.api.GetOrderList,n).then(function(n){if(t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode){if(0===n.data.data.resultList.length)return void(t.loadmore="noMore");t.dataList=t.dataList.concat(n.data.data.resultList),t.pageIndex=t.pageIndex+1,t.loadmore="more"}else t.loadmore="more",t.$api.msg(n.data.returnMessage)}).catch(function(n){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})}}};n.default=l}).call(this,e("543d")["default"])},8287:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};n.default=o},9661:function(t,n,e){"use strict";e.r(n);var o=e("2cc1"),a=e("30c5");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("c4f2");var c,r=e("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"d768bb38",null,!1,o["a"],c);n["default"]=u.exports},a8d7:function(t,n,e){"use strict";e.r(n);var o=e("c925"),a=e("5088");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("1226");var c,r=e("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"48bbf381",null,!1,o["a"],c);n["default"]=u.exports},bdb3:function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");o(e("66fd"));var n=o(e("9661"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},c4f2:function(t,n,e){"use strict";var o=e("cc8d"),a=e.n(o);a.a},c925:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},cc8d:function(t,n,e){},d551:function(t,n,e){}},[["bdb3","common/runtime","common/vendor"]]]);