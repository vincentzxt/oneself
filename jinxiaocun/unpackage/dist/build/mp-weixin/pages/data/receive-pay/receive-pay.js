(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/data/receive-pay/receive-pay","components/uni-popup/uni-popup"],{"0772":function(t,e,n){"use strict";(function(t){n("fdae"),n("921b");i(n("66fd"));var e=i(n("e496"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"0a86":function(t,e,n){"use strict";var i=n("caed"),a=n.n(i);a.a},"203e":function(t,e,n){"use strict";var i=n("992b"),a=n.n(i);a.a},2373:function(t,e,n){"use strict";var i={"uni-transition":()=>n.e("components/uni-transition/uni-transition").then(n.bind(null,"e83d"))},a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"316c":function(t,e,n){"use strict";n.r(e);var i=n("3384"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},3384:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("f45c"),a=n("255c"),o=n("88ed"),r=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"3140"))},s=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},u=function(){return n.e("components/custom/cu-panel").then(n.bind(null,"00f1"))},c=function(){return n.e("components/custom/cu-cell").then(n.bind(null,"52a0"))},l=function(){return n.e("components/custom/cu-date").then(n.bind(null,"93e8"))},d={components:{uniList:r,uniListItem:s,cuPanel:u,cuCell:c,cuDate:l},data:function(){return{pageType:1,title:"",totalTitle1:"",totalTitle2:"",tableHeader1:"",tableHeader2:"",datas:{},initSort:[{id:0,name:"金额"},{id:1,name:"帐龄"}],initFilter:[{id:0,name:"所有",checked:!0,condition:!1},{id:1,name:"客户",checked:!1,condition:!0}],filter:0,customerName:"",orderBy:0}},onLoad:function(t){switch(this.pageType=parseInt(t.pageType),this.pageType){case 1:this.title="应收分析",this.totalTitle1="欠款客户数",this.totalTitle2="应收金额",this.tableHeader1="账龄",this.tableHeader2="应收总金额";break;case 2:this.title="应付分析",this.totalTitle1="供应商欠款",this.totalTitle2="总应付",this.tableHeader1="账龄",this.tableHeader2="应付总金额";break}this.getData()},computed:{headerHeight:function(){return this.$headerHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleNavTo:function(e,n){t.navigateTo({url:e+"?"+n})},getData:function(){var t=this,e={customerName:this.customerName,orderBy:this.orderBy};switch(this.$refs.loading.open(),this.pageType){case 1:(0,a.queryReceive)(i.api.report,e).then(function(e){t.$refs.loading.close(),200==e.status&&"0000"==e.data.returnCode&&(t.datas=e.data.data,t.customerName="")}).catch(function(e){t.$refs.loading.close()});break;case 2:(0,a.queryPay)(i.api.report,e).then(function(e){t.$refs.loading.close(),200==e.status&&"0000"==e.data.returnCode&&(t.datas=e.data.data,t.customerName="")}).catch(function(e){t.$refs.loading.close()});break}},numberFilter:function(t){return console.log(t),(0,o.numberFormat)(t)},compare:function(t,e){return"up"==e?function(e,n){var i=e[t],a=n[t];return i<a?-1:i>a?1:0}:function(e,n){var i=e[t],a=n[t];return i>a?-1:i<a?1:0}},sortData:function(t,e){this.initSort=this.initSort.map(function(t){return t.id==e?t.checked=!0:t.checked=!1,t}),"up"==t?0==e?this.datas.reportDetailQueries.reportReceiveAddPayCustomer.sort(this.compare("totalReceivableY","up")):this.datas.reportDetailQueries.reportReceiveAddPayCustomer.sort(this.compare("maxReceiveAge","up")):0==e?this.datas.reportDetailQueries.reportReceiveAddPayCustomer.sort(this.compare("totalReceivableY","down")):this.datas.reportDetailQueries.reportReceiveAddPayCustomer.sort(this.compare("maxReceiveAge","down"))},handleSortUp:function(t){this.sortData("up",t)},handleSortDown:function(t){this.sortData("down",t)},handleFilterOk:function(t){this.initFilter=this.initFilter.map(function(e){return e.id==t?e.checked=!0:e.checked=!1,e}),this.filter=t,this.getData()},handleFilterCancel:function(){this.cutomerName=""}}};e.default=d}).call(this,n("543d")["default"])},4395:function(t,e,n){"use strict";n.r(e);var i=n("2373"),a=n("4777");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("0a86");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3e46c635",null,!1,i["a"],r);e["default"]=u.exports},4777:function(t,e,n){"use strict";n.r(e);var i=n("55ce"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"55ce":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/uni-transition/uni-transition").then(n.bind(null,"e83d"))},a={name:"UniPopup",components:{uniTransition:i},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var e=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(e.timer),e.timer=setTimeout(function(){e.$emit("change",{show:!1}),e.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};e.default=a},"7e71":function(t,e,n){"use strict";var i={"uni-list":()=>n.e("components/uni-list/uni-list").then(n.bind(null,"3140")),"uni-list-item":()=>n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.numberFilter(t.datas.reportDetailQueries.debitCustomerCount)),i=t.numberFilter(t.datas.reportDetailQueries.totalReceivableX),a=t.__map(t.datas.reportDetailQueries.reportReceiveAddPayCustomer,function(e,n){var i=t.numberFilter(e.totalReceivableY);return{$orig:t.__get_orig(e),m2:i}});t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,l0:a}})},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"992b":function(t,e,n){},caed:function(t,e,n){},e496:function(t,e,n){"use strict";n.r(e);var i=n("7e71"),a=n("316c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("203e");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"e050d600",null,!1,i["a"],r);e["default"]=u.exports}},[["0772","common/runtime","common/vendor"]]]);