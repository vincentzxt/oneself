(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/data/top/hotSelling/hotSelling","components/uni-popup/uni-popup"],{"0636":function(t,n,e){"use strict";var i=e("1c22"),a=e.n(i);a.a},"0a86":function(t,n,e){"use strict";var i=e("caed"),a=e.n(i);a.a},"1c22":function(t,n,e){},2373:function(t,n,e){"use strict";var i={"uni-transition":()=>e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},"3c18":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("f45c"),a=e("255c"),o=e("88ed"),r=function(){return e.e("components/custom/cu-panel").then(e.bind(null,"00f1"))},u=function(){return e.e("components/custom/cu-cell").then(e.bind(null,"52a0"))},s=function(){return e.e("components/custom/cu-date").then(e.bind(null,"93e8"))},c={components:{cuPanel:r,cuCell:u,cuDate:s},data:function(){return{title:"热销商品分析",date:"custom",days:30,startDate:"",endDate:"",datas:[],initSort:[{id:0,name:"数量"},{id:1,name:"金额"}],initFilter:[{id:0,name:"产品分类",checked:!0,condition:!1},{id:1,name:"往来单位",checked:!1,condition:!0}],customerName:""}},onLoad:function(t){var n=new Date,e=new Date;n.setDate(n.getDate()-29),this.startDate=(0,o.dateFormat)("YYYY-mm-dd",n),this.endDate=(0,o.dateFormat)("YYYY-mm-dd",e),this.getData()},computed:{headerHeight:function(){return this.$headerHeight},initDate:function(){return{title:this.title,date:this.date,startDate:this.startDate,endDate:this.endDate}}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleNavTo:function(n,e){t.navigateTo({url:n+"?"+e})},getData:function(){var t=this,n={startDate:this.startDate,endDate:this.endDate,customerName:this.customerName};this.$refs.loading.open(),(0,a.queryHotSellingProduct)(i.api.report,n).then(function(n){t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode&&(t.datas=n.data.data.resultList,t.customerName="")}).catch(function(n){t.$refs.loading.close()})},numberFilter:function(t){return(0,o.numberFormat)(t)},compare:function(t,n){return"up"==n?function(n,e){var i=n[t],a=e[t];return i<a?-1:i>a?1:0}:function(n,e){var i=n[t],a=e[t];return i>a?-1:i<a?1:0}},sortData:function(t,n){this.initSort=this.initSort.map(function(t){return t.id==n?t.checked=!0:t.checked=!1,t}),"up"==t?0==n?this.datas.sort(this.compare("qty","up")):this.datas.sort(this.compare("amount","up")):0==n?this.datas.sort(this.compare("qty","down")):this.datas.sort(this.compare("amount","down"))},handleDateOk:function(t){this.date=t.date,this.startDate=t.startDate,this.endDate=t.endDate,this.getData()},handleSortUp:function(t){this.sortData("up",t)},handleSortDown:function(t){this.sortData("down",t)},handleFilterOk:function(t){this.initFilter=this.initFilter.map(function(n){return n.id==t?n.checked=!0:n.checked=!1,n}),this.getData()},handleFilterCancel:function(){this.customerName=""}}};n.default=c}).call(this,e("543d")["default"])},"3e8b":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.datas,function(n,e){var i=t.numberFilter(n.amount);return{$orig:t.__get_orig(n),m0:i}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},4395:function(t,n,e){"use strict";e.r(n);var i=e("2373"),a=e("4777");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("0a86");var r,u=e("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"3e46c635",null,!1,i["a"],r);n["default"]=s.exports},4777:function(t,n,e){"use strict";e.r(n);var i=e("55ce"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},"55ce":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},a={name:"UniPopup",components:{uniTransition:i},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=a},"8a8d":function(t,n,e){"use strict";e.r(n);var i=e("3c18"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},caed:function(t,n,e){},cf3b:function(t,n,e){"use strict";e.r(n);var i=e("3e8b"),a=e("8a8d");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("0636");var r,u=e("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"9cf2d5a6",null,!1,i["a"],r);n["default"]=s.exports},e905:function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");i(e("66fd"));var n=i(e("cf3b"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["e905","common/runtime","common/vendor"]]]);