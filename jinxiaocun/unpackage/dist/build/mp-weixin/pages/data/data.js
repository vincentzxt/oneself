(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/data/data"],{"0778":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.numberFilter(t.datas.salesAmount)),i=t.numberFilter(t.datas.salesReturnAmount),n=t.numberFilter(t.datas.grossProfit),r=t.numberFilter(t.datas.receivableAmount),o=t.numberFilter(t.datas.payableAmount),s=t.numberFilter(t.datas.receivedAmount),l=t.numberFilter(t.datas.paymentAmount),d=t.__map(t.receivableRingArr,function(e,a){var i=t.numberFilter(e.data);return{$orig:t.__get_orig(e),m7:i}}),c=t.__map(t.paymentRingArr,function(e,a){var i=t.numberFilter(e.data);return{$orig:t.__get_orig(e),m8:i}}),u=t.__map(t.hotSellingProduct,function(e,a){var i=t.numberFilter(e.amount);return{$orig:t.__get_orig(e),m9:i}});t.$mp.data=Object.assign({},{$root:{m0:a,m1:i,m2:n,m3:r,m4:o,m5:s,m6:l,l0:d,l1:c,l2:u}})},r=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return r}),a.d(e,"a",function(){return i})},"095c":function(t,e,a){},7086:function(t,e,a){"use strict";var i=a("095c"),n=a.n(i);n.a},bb8b:function(t,e,a){"use strict";a.r(e);var i=a("eabe"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=n.a},c6cb:function(t,e,a){"use strict";(function(t){a("fdae"),a("921b");i(a("66fd"));var e=i(a("f182"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},eabe:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(a("16c5")),n=a("f45c"),r=a("aba6"),o=a("255c"),s=a("88ed");function l(t){return t&&t.__esModule?t:{default:t}}var d=function(){return a.e("components/uni-list/uni-list").then(a.bind(null,"3140"))},c=function(){return a.e("components/uni-list-item/uni-list-item").then(a.bind(null,"d2d2"))},u=null,h=null,f={components:{uniList:d,uniListItem:c},data:function(){return{datas:{},title:"报表",cWidth:"",cHeight:"",rWidth:"",rHeight:"",pixelRation:1,date:"day",startDate:"",endDate:"",receivableRingArr:[],paymentRingArr:[],receivableRingTotal:0,paymentRingTotal:0,hotSellingProduct:[],slowSellingProduct:[],hotDate:30,slowDate:30}},onShow:function(){this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(400),this.rWidth=t.upx2px(550),this.rHeight=t.upx2px(400),this.datas={},this.receivableRingArr=[],this.paymentRingArr=[],this.receivableRingTotal=0,this.paymentRingTotal=0,this.hotSellingProduct=[],this.slowSellingProduct=[],this.date="day",this.startDate=(0,s.dateFormat)("YYYY-mm-dd",new Date)+" 00:00:00",this.endDate=(0,s.dateFormat)("YYYY-mm-dd",new Date)+" 23:59:59",this.getData(this.startDate,this.endDate)},computed:{headerHeight:function(){return this.$headerHeight}},methods:{numberFilter:function(t){return(0,s.numberFormat)(t)},handleNavTo:function(e,a){t.navigateTo({url:e+"?"+a})},getData:function(t,e){var a=this;this.$refs.loading.open();var i={startDate:t,endDate:e};(0,r.query)(n.api.report,i).then(function(t){a.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode&&(a.datas=t.data.data,a.hotSellingProduct=a.datas.hotSellingProduct,a.slowSellingProduct=a.datas.slowSellingProduct,a.getDayData(),a.getAccountData())}).catch(function(t){a.$refs.loading.close()})},handleDateChange:function(t){this.date=t;var e=new Date,a=new Date;switch(t){case"day":this.startDate=(0,s.dateFormat)("YYYY-mm-dd",e)+" 00:00:00",this.endDate=(0,s.dateFormat)("YYYY-mm-dd",a)+" 23:59:59";break;case"yesterday":e.setDate(e.getDate()-1),this.startDate=(0,s.dateFormat)("YYYY-mm-dd",e)+" 00:00:00",a.setDate(a.getDate()-1),this.endDate=(0,s.dateFormat)("YYYY-mm-dd",a)+" 23:59:59";break;case"week":var i=e.getDay();i=0==i?6:i-1,e.setDate(e.getDate()-i),this.startDate=(0,s.dateFormat)("YYYY-mm-dd",e)+" 00:00:00",this.endDate=(0,s.dateFormat)("YYYY-mm-dd",a)+" 23:59:59";break;case"month":e.setDate(1),this.startDate=(0,s.dateFormat)("YYYY-mm-dd",e)+" 00:00:00",this.endDate=(0,s.dateFormat)("YYYY-mm-dd",a)+" 23:59:59";break;case"year":e.setMonth(0),e.setDate(1),this.startDate=(0,s.dateFormat)("YYYY-mm-dd",e)+" 00:00:00",this.endDate=(0,s.dateFormat)("YYYY-mm-dd",a)+" 23:59:59";break}this.getData(this.startDate,this.endDate)},showSaleLine:function(t,e){new i.default({canvasId:t,type:"line",colors:["#51a9f3","#ef5a62","#90dc5d","#f7d767","#5cdbd3","#f29d6e","#b37fec"],fontSize:11,padding:[15,15,0,15],legend:{show:!0,lineHeight:11,margin:15,fontColor:"#808695"},dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:this.pixelRatio,categories:e.categories,series:e.series,animation:!0,xAxis:{disableGrid:!0,axisLineColor:"#808695",fontColor:"#808695",rotateLabel:!0},yAxis:{gridType:"solid",gridColor:"#f3f3f3",axisLineColor:"#808695",fontColor:"#808695",format:function(t){return(0,s.numberFormat)(t)}},width:this.cWidth*this.pixelRation,height:this.cHeight*this.pixelRation,extra:{line:{type:"straight"}}})},showReceivableRing:function(t,e){u=new i.default({canvasId:t,type:"ring",fontSize:11,colors:["#51a9f3","#ef5a62","#90dc5d","#f7d767","#5cdbd3","#f29d6e","#b37fec"],legend:{show:!0,position:"right",float:"center",itemGap:10,padding:5,lineHeight:26,margin:5,borderWidth:1,fontSize:14},title:{name:(0,s.numberFormat)(this.receivableRingTotal),color:"#1c2438",fontSize:20,offsetY:-8},subtitle:{name:"收款金额(元)",color:"#808695",fontSize:12,offsetY:-3},extra:{pie:{offsetAngle:-45,ringWidth:10,labelWidth:15}},background:"#FFFFFF",pixelRatio:1,series:e.series,animation:!0,width:this.rWidth*this.pixelRation,height:this.rHeight*this.pixelRation,dataLabel:!1}),this.receivableRingArr=u.opts.series},showPaymentRing:function(t,e){h=new i.default({canvasId:t,type:"ring",fontSize:11,colors:["#51a9f3","#ef5a62","#90dc5d","#f7d767","#5cdbd3","#f29d6e","#b37fec"],legend:{show:!0,position:"right",float:"center",itemGap:10,padding:5,lineHeight:26,margin:5,borderWidth:1,fontSize:14},title:{name:(0,s.numberFormat)(this.paymentRingTotal),color:"#1c2438",fontSize:20,offsetY:-8},subtitle:{name:"付款金额(元)",color:"#808695",fontSize:12,offsetY:-3},extra:{pie:{offsetAngle:-45,ringWidth:10,labelWidth:15}},background:"#FFFFFF",pixelRatio:1,series:e.series,animation:!0,width:this.rWidth*this.pixelRation,height:this.rHeight*this.pixelRation,dataLabel:!1}),this.paymentRingArr=h.opts.series},getDayData:function(){var t={categories:[],series:[]};t.series=[{name:"销售额",data:[],color:"#facc14"},{name:"利润",data:[],color:"#2fc25b"}];var e=!0,a=!1,i=void 0;try{for(var n,r=this.datas.last7DaySalesList[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){var o=n.value,s=o.dateDisplay.split("-");t.categories.push(s[1]+"."+s[2]),t.series[0].data.push(parseInt(o.salesAmount)),t.series[1].data.push(parseInt(o.grossProfit))}}catch(l){a=!0,i=l}finally{try{e||null==r.return||r.return()}finally{if(a)throw i}}this.showSaleLine("saleLine",t)},getAccountData:function(){var t={series:[]},e={series:[]},a=!0,i=!1,n=void 0;try{for(var r,o=this.datas.receivedList[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var s=r.value;t.series.push({name:s.cashaccounttypedisplay,data:s.amount}),this.receivableRingTotal+=s.amount}}catch(m){i=!0,n=m}finally{try{a||null==o.return||o.return()}finally{if(i)throw n}}var l=!0,d=!1,c=void 0;try{for(var u,h=this.datas.paymentList[Symbol.iterator]();!(l=(u=h.next()).done);l=!0){var f=u.value;e.series.push({name:f.cashaccounttypedisplay,data:f.amount}),this.paymentRingTotal+=f.amount}}catch(m){d=!0,c=m}finally{try{l||null==h.return||h.return()}finally{if(d)throw c}}this.showReceivableRing("receivableRing",t),this.showPaymentRing("paymentRing",e)},handleClickHotDate:function(t){var e=this;this.hotDate=t;var a={sellingStatisticalDays:this.hotDate};this.$refs.loading.open(),(0,o.queryHotSellingProduct)(n.api.report,a).then(function(t){e.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode&&(e.hotSellingProduct=t.data.data.resultList)}).catch(function(t){e.$refs.loading.close()})},handleClickSlowDate:function(t){var e=this;this.slowDate=t;var a={sellingStatisticalDays:this.slowDate};this.$refs.loading.open(),(0,o.querySlowSellingProduct)(n.api.report,a).then(function(t){e.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode&&(e.slowSellingProduct=t.data.data.resultList)}).catch(function(t){e.$refs.loading.close()})}}};e.default=f}).call(this,a("543d")["default"])},f182:function(t,e,a){"use strict";a.r(e);var i=a("0778"),n=a("bb8b");for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);a("7086");var o,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1a6af6fa",null,!1,i["a"],o);e["default"]=l.exports}},[["c6cb","common/runtime","common/vendor"]]]);