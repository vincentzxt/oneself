(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/purchase-red-list/purchase-red-list","components/custom/cu-loading"],{1226:function(t,e,n){"use strict";var a=n("d551"),o=n.n(a);o.a},"4a70":function(t,e,n){},5088:function(t,e,n){"use strict";n.r(e);var a=n("8287"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"566b":function(t,e,n){"use strict";var a=n("4a70"),o=n.n(a);o.a},8287:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};e.default=a},"9b27":function(t,e,n){"use strict";n.r(e);var a=n("cb77"),o=n("f431");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("566b");var i,u=n("f0c5"),s=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"b5c83ee4",null,!1,a["a"],i);e["default"]=s.exports},a8d7:function(t,e,n){"use strict";n.r(e);var a=n("c925"),o=n("5088");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("1226");var i,u=n("f0c5"),s=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"48bbf381",null,!1,a["a"],i);e["default"]=s.exports},c479:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("a544"),o=n("f45c");r(n("a8d7"));function r(t){return t&&t.__esModule?t:{default:t}}var i=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"9daa"))},u=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"3140"))},s=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},c=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"af96"))},d=function(){return n.e("components/xw-date/xw-date").then(n.bind(null,"c73c"))},l={components:{uniLoadMore:c,uniList:u,uniListItem:s,uniIcon:i,xwDate:d},data:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=n<10?"0"+n:n,o=t.getDate(),r=o<10?"0"+o:o,i=e+"-"+a+"-"+r;return{loadmore:"more",pageIndex:0,pageRows:15,title:"采购退货",searchName:"客户名称",billtype:2,totalAmount:"0.00",totalRecords:"0",dataList:[],search_startDate:i,search_endDate:i,order_name:"",order_type:1,search_value:"",orderList:[{name:"销售日期",value:"createtime"},{name:"金额",value:"amount"}]}},onLoad:function(){this.loadData()},onShow:function(){console.log(this.search_startDate)},onPullDownRefresh:function(){this.dataList=[],this.pageIndex=0,this.loadMore="more",this.loadData(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},methods:{handle_data_sub:function(t){this.search_startDate=t.search_startDate,this.search_endDate=t.search_endDate,this.order_name=this.orderList[t.order_index].value,this.order_type=t.order_type,this.dataList=[],this.pageIndex=0,this.loadMore="more",this.loadData()},handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleDetail:function(e){t.navigateTo({url:"purchase-detail?id="+e})},loadData:function(){var t=this;this.loadmore="loading",this.$refs.loading.open();var e={pageIndex:this.pageIndex+1,pageRows:this.pageRows,billtype:this.billtype,orderName:this.order_name,orderType:this.order_type,beginttime:this.search_startDate,endtime:this.search_endDate};(0,a.query)(o.api.purPurchaseOrder,e).then(function(e){if(t.$refs.loading.close(),200==e.status&&"0000"==e.data.returnCode){if(0===e.data.data.resultList.length)return void(t.loadmore="noMore");t.dataList=t.dataList.concat(e.data.data.resultList),t.totalAmount=e.data.data.totalAmount,t.totalRecords=e.data.data.pageInfo.totalRecords,t.pageIndex=t.pageIndex+1,t.loadmore="more"}else t.loadmore="more",t.$api.msg(e.data.returnMessage)}).catch(function(e){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})}}};e.default=l}).call(this,n("543d")["default"])},c925:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},cb77:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},d551:function(t,e,n){},e42d:function(t,e,n){"use strict";(function(t){n("fdae"),n("921b");a(n("66fd"));var e=a(n("9b27"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f431:function(t,e,n){"use strict";n.r(e);var a=n("c479"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a}},[["e42d","common/runtime","common/vendor"]]]);