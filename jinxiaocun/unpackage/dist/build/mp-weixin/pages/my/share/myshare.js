(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/share/myshare","components/custom/cu-loading","components/uni-popup/uni-popup"],{"0a86":function(t,n,e){"use strict";var o=e("caed"),i=e.n(o);i.a},1226:function(t,n,e){"use strict";var o=e("d551"),i=e.n(o);i.a},"19d5":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("94a7"),i=e("f45c");a(e("a8d7"));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},r=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},s=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"af96"))},c={components:{uniLoadMore:s,uniList:u,uniListItem:r},data:function(){return{loadmore:"more",pageIndex:0,pageRows:15,title:"我的分享",dataList:[]}},onLoad:function(){},onShow:function(){t.getStorageSync("userInfo")||t.reLaunch({url:"/pages/my/login/login"}),this.loadData()},methods:{handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleSet:function(){t.navigateTo({url:"../my/set"})},loadData:function(){var t=this;this.loadmore="loading",this.$refs.loading.open();var n={pageIndex:this.pageIndex+1,pageRows:this.pageRows};(0,o.tokenpost)(i.api.GetMyPromotIntegralList,n).then(function(n){if(t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode){if(0===n.data.data.resultList.length)return void(t.loadmore="noMore");t.dataList=t.dataList.concat(n.data.data.resultList),t.pageIndex=t.pageIndex+1,t.loadmore="more"}else t.loadmore="more",t.$api.msg(n.data.returnMessage)}).catch(function(n){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})}}};n.default=c}).call(this,e("543d")["default"])},2373:function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return o})},4395:function(t,n,e){"use strict";e.r(n);var o=e("2373"),i=e("4777");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("0a86");var u,r=e("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"3e46c635",null,!1,o["a"],u);n["default"]=s.exports},4777:function(t,n,e){"use strict";e.r(n);var o=e("55ce"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=i.a},4783:function(t,n,e){"use strict";var o=e("88b2"),i=e.n(o);i.a},5088:function(t,n,e){"use strict";e.r(n);var o=e("8287"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=i.a},"55ce":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},i={name:"UniPopup",components:{uniTransition:o},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=i},8287:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};n.default=o},"88b2":function(t,n,e){},9787:function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");o(e("66fd"));var n=o(e("b642"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a8d7:function(t,n,e){"use strict";e.r(n);var o=e("c925"),i=e("5088");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("1226");var u,r=e("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"48bbf381",null,!1,o["a"],u);n["default"]=s.exports},b642:function(t,n,e){"use strict";e.r(n);var o=e("f78b"),i=e("c280");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("4783");var u,r=e("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"3673a47d",null,!1,o["a"],u);n["default"]=s.exports},c280:function(t,n,e){"use strict";e.r(n);var o=e("19d5"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=i.a},c925:function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return o})},caed:function(t,n,e){},d551:function(t,n,e){},f78b:function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return o})}},[["9787","common/runtime","common/vendor"]]]);