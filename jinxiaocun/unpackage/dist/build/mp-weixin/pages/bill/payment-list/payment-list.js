(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/payment-list/payment-list","components/custom/cu-loading"],{1226:function(t,e,n){"use strict";var a=n("d551"),o=n.n(a);o.a},"3c21":function(t,e,n){"use strict";n.r(e);var a=n("6446"),o=n("ef76");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("ada5");var r,u=n("f0c5"),s=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"8f600794",null,!1,a["a"],r);e["default"]=s.exports},5088:function(t,e,n){"use strict";n.r(e);var a=n("8287"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},6446:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},8287:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};e.default=a},a8d7:function(t,e,n){"use strict";n.r(e);var a=n("c925"),o=n("5088");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("1226");var r,u=n("f0c5"),s=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"48bbf381",null,!1,a["a"],r);e["default"]=s.exports},ada5:function(t,e,n){"use strict";var a=n("c0c9"),o=n.n(a);o.a},bde8:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("a544"),o=n("f45c");i(n("a8d7"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"9daa"))},u=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"3140"))},s=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},c=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"af96"))},l=function(){return n.e("components/xw-date/xw-date").then(n.bind(null,"c73c"))},d={components:{uniLoadMore:c,uniList:u,uniListItem:s,uniIcon:r,xwDate:l},data:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=n<10?"0"+n:n,o=t.getDate(),i=o<10?"0"+o:o,r=e+"-"+a+"-"+i;return{loadmore:"more",pageIndex:0,pageRows:15,title:"付款单据",searchName:"客户名称",billtype:1,totalAmount:"0.00",totalRecords:"0",dataList:[],search_startDate:r,search_endDate:r,order_name:"",order_type:0,search_value:"",orderList:[{name:"销售日期",value:"createtime"},{name:"金额",value:"amount"}]}},onLoad:function(){this.loadData()},onShow:function(){console.log(this.search_startDate)},onPullDownRefresh:function(){this.dataList=[],this.pageIndex=0,this.loadMore="more",this.loadData(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},methods:{handle_data_sub:function(t){this.search_startDate=t.search_startDate,this.search_endDate=t.search_endDate,this.order_name=this.orderList[t.order_index].value,this.search_value=t.search_value,this.order_type=t.order_type,this.dataList=[],this.pageIndex=0,this.loadMore="more",this.loadData()},handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleDetail:function(){t.navigateTo({url:"sell-detail"})},loadData:function(){var t=this;this.loadmore="loading",this.$refs.loading.open();var e={pageIndex:this.pageIndex+1,pageRows:this.pageRows,billtype:this.billtype,orderName:this.order_name,orderType:this.order_type,beginttime:this.search_startDate,contactunitname:this.search_value,endtime:this.search_endDate};(0,a.query)(o.api.capPayment,e).then(function(e){if(t.$refs.loading.close(),200==e.status&&"0000"==e.data.returnCode){if(0===e.data.data.resultList.length)return void(t.loadmore="noMore");t.dataList=t.dataList.concat(e.data.data.resultList),t.totalAmount=e.data.data.totalAmount,t.totalRecords=e.data.data.pageInfo.totalRecords,t.pageIndex=t.pageIndex+1,t.loadmore="more"}else t.loadmore="more",t.$api.msg(e.data.returnMessage)}).catch(function(e){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})}}};e.default=d}).call(this,n("543d")["default"])},c0c9:function(t,e,n){},c925:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},d551:function(t,e,n){},d7f1:function(t,e,n){"use strict";(function(t){n("fdae"),n("921b");a(n("66fd"));var e=a(n("3c21"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ef76:function(t,e,n){"use strict";n.r(e);var a=n("bde8"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a}},[["d7f1","common/runtime","common/vendor"]]]);