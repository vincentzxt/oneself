(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/sell-red-list/sell-detail","components/uni-popup/uni-popup"],{"0a86":function(t,n,e){"use strict";var i=e("caed"),o=e.n(i);o.a},"0c5a":function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");i(e("66fd"));var n=i(e("f875"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},2373:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},3304:function(t,n,e){"use strict";e.r(n);var i=e("7703"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},3944:function(t,n,e){},4395:function(t,n,e){"use strict";e.r(n);var i=e("2373"),o=e("4777");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("0a86");var u,s=e("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"3e46c635",null,!1,i["a"],u);n["default"]=r.exports},4777:function(t,n,e){"use strict";e.r(n);var i=e("55ce"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"55ce":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},o={name:"UniPopup",components:{uniTransition:i},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=o},"724a":function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.numberFilter(t.dataList.amount)),i=t.numberFilter(t.dataList.discountamount),o=t.__map(t.dataList.detailModels,function(n,e){var i=t.numberFilter(n.salesamount);return{$orig:t.__get_orig(n),m2:i}});t.$mp.data=Object.assign({},{$root:{m0:e,m1:i,l0:o}})},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},7703:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("a544"),o=e("f45c"),a=e("88ed"),u=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},s=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},r=function(){return e.e("components/custom/cu-loading").then(e.bind(null,"a8d7"))},c={components:{uniList:u,uniListItem:s,cuLoading:r},data:function(){return{title:"销售退货详情",id:0,dataList:{}}},onShow:function(){},onLoad:function(t){this.id=t.id,this.loadData()},methods:{numberFilter:function(t){return(0,a.numberFormat)(t)},handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){t.navigateBack({delta:1})},loadData:function(){var t=this;this.loadmore="loading",this.$refs.loading.open();var n={id:this.id};(0,i.get)(o.api.salesOrder,n).then(function(n){t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode?t.dataList=n.data.data:t.$api.msg(n.data.returnMessage)}).catch(function(n){t.$refs.loading.close(),t.$api.msg("请求失败fail")})}}};n.default=c}).call(this,e("543d")["default"])},caed:function(t,n,e){},d25c:function(t,n,e){"use strict";var i=e("3944"),o=e.n(i);o.a},f875:function(t,n,e){"use strict";e.r(n);var i=e("724a"),o=e("3304");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("d25c");var u,s=e("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"476ec0c0",null,!1,i["a"],u);n["default"]=r.exports}},[["0c5a","common/runtime","common/vendor"]]]);