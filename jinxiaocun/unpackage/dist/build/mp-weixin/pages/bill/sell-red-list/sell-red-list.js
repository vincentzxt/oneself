(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/sell-red-list/sell-red-list","components/custom/cu-loading"],{1226:function(t,e,n){"use strict";var a=n("d551"),o=n.n(a);o.a},2333:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("a544"),o=n("f45c");r(n("a8d7"));function r(t){return t&&t.__esModule?t:{default:t}}var i=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"9daa"))},s=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"3140"))},u=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},c=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"af96"))},l=function(){return n.e("components/xw-date/xw-date").then(n.bind(null,"c73c"))},d={components:{uniLoadMore:c,uniList:s,uniListItem:u,uniIcon:i,xwDate:l},data:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=n<10?"0"+n:n,o=t.getDate(),r=o<10?"0"+o:o,i=e+"-"+a+"-"+r;return{loadmore:"more",pageIndex:0,pageRows:15,title:"销售退货",searchName:"客户名称",billtype:2,totalAmount:"0.00",totalRecords:"0",totalGrossProfit:"0",dataList:[],search_startDate:i,search_endDate:i,order_name:"",order_type:0,search_value:"",orderList:[{name:"销售日期",value:"createtime"},{name:"金额",value:"amount"}]}},onLoad:function(){this.loadData()},onShow:function(){console.log(this.search_startDate)},onPullDownRefresh:function(){this.dataList=[],this.pageIndex=0,this.loadMore="more",this.loadData(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},methods:{handle_data_sub:function(t){console.log(t),this.search_startDate=t.search_startDate,this.search_endDate=t.search_endDate,this.order_name=this.orderList[t.order_index].value,this.order_type=t.order_type,this.dataList=[],this.pageIndex=0,this.loadMore="more",this.loadData()},handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleDetail:function(){t.navigateTo({url:"sell-detail"})},loadData:function(){var t=this;this.loadmore="loading",this.$refs.loading.open();var e={pageIndex:this.pageIndex+1,pageRows:this.pageRows,billtype:this.billtype,orderName:this.order_name,orderType:this.order_type,beginttime:this.search_startDate,endtime:this.search_endDate};console.log(e),(0,a.query)(o.api.salesOrder,e).then(function(e){if(t.$refs.loading.close(),200==e.status&&"0000"==e.data.returnCode){if(0===e.data.data.resultList.length)return void(t.loadmore="noMore");t.dataList=t.dataList.concat(e.data.data.resultList),t.totalAmount=e.data.data.totalAmount,t.totalRecords=e.data.data.pageInfo.totalRecords,t.totalGrossProfit=e.data.data.totalGrossProfit,t.pageIndex=t.pageIndex+1,t.loadmore="more"}else t.loadmore="more",t.$api.msg(e.data.returnMessage)}).catch(function(e){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})}}};e.default=d}).call(this,n("543d")["default"])},"2cc0":function(t,e,n){"use strict";n.r(e);var a=n("e048"),o=n("bdb5");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("4c18");var i,s=n("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"16bd6276",null,!1,a["a"],i);e["default"]=u.exports},"4c18":function(t,e,n){"use strict";var a=n("dfc9"),o=n.n(a);o.a},5088:function(t,e,n){"use strict";n.r(e);var a=n("8287"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},8287:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};e.default=a},a8d7:function(t,e,n){"use strict";n.r(e);var a=n("c925"),o=n("5088");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("1226");var i,s=n("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"48bbf381",null,!1,a["a"],i);e["default"]=u.exports},bdb5:function(t,e,n){"use strict";n.r(e);var a=n("2333"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},c925:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},c94e:function(t,e,n){"use strict";(function(t){n("fdae"),n("921b");a(n("66fd"));var e=a(n("2cc0"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d551:function(t,e,n){},dfc9:function(t,e,n){},e048:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})}},[["c94e","common/runtime","common/vendor"]]]);