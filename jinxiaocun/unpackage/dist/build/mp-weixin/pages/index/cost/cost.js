(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/cost/cost","components/uni-popup/uni-popup"],{"0a86":function(t,e,n){"use strict";var a=n("caed"),i=n.n(a);i.a},2373:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return a})},4395:function(t,e,n){"use strict";n.r(e);var a=n("2373"),i=n("4777");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("0a86");var r,o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"3e46c635",null,!1,a["a"],r);e["default"]=s.exports},4777:function(t,e,n){"use strict";n.r(e);var a=n("55ce"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},"55ce":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/uni-transition/uni-transition").then(n.bind(null,"e83d"))},i={name:"UniPopup",components:{uniTransition:a},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var e=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(e.timer),e.timer=setTimeout(function(){e.$emit("change",{show:!1}),e.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};e.default=i},"7c37":function(t,e,n){"use strict";n.r(e);var a=n("960f"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},8206:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=(t._self._c,{type:"c-type",color:"#c4c6cb",size:20}),a={type:"c-search",color:"#c4c6cb",size:20},i={type:"c-contacts",color:"#c4c6cb",size:20},c={type:"c-amount",color:"#c4c6cb",size:20};t.$mp.data=Object.assign({},{$root:{a0:n,a1:a,a2:i,a3:c}})},c=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return a})},"960f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("f45c"),i=n("aba6"),c=n("88ed"),r=function(){return n.e("components/custom/cu-search-bar").then(n.bind(null,"c2fa"))},o=function(){return n.e("components/custom/cu-panel").then(n.bind(null,"00f1"))},s=function(){return n.e("components/custom/cu-cell").then(n.bind(null,"52a0"))},u=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"3140"))},f=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},h={components:{cuSearchBar:r,cuPanel:o,cuCell:s,uniList:u,uniListItem:f},data:function(){return{title:"费用单",currentUnitDatas:null,currentUnitSearchDatas:null,searchCurrentUnit:!1,reqData:{feecategory:"",contactunitid:"",contactunitname:"",payaccountid:"",payaccountName:"",amount:"",remark:""},cashAccountDict:[],verify:{feecategory:{okVerify:!1,disVerMessage:!1,message:"费用类型不能为空"},amount:{okVerify:!1,disVerMessage:!1,message:"费用金额不能为空，且不能为零"}},currentUnitTag:!1}},onShow:function(){this.currentUnitDatas=t.getStorageSync("currentUnitList"),this.currentUnitSearchDatas=this.currentUnitDatas,this.getCashAccount();var e=getCurrentPages(),n=e[e.length-1];n.data.rData&&(this.reqData.feecategory=n.data.rData,this.handleVerify("feecategory"))},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},initData:function(){this.reqData={feecategory:"",contactunitid:"",contactunitname:"",payaccountid:"",payaccountName:"",amount:"",remark:""},this.verify={feecategory:{okVerify:!1,disVerMessage:!1,message:"费用类型不能为空"},contactunitname:{okVerify:!1,disVerMessage:!1,message:"往来单位名称不能为空"},amount:{okVerify:!1,disVerMessage:!1,message:"费用金额不能为空，且不能为零"}}},getCashAccount:function(){var e=this;this.$refs.loading.open(),(0,i.query)(a.api.cashAccount).then(function(n){e.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode?(e.cashAccountDict=n.data.data.resultList,e.reqData.payaccountid=e.cashAccountDict[0].cashaccountid,e.reqData.payaccountName=e.cashAccountDict[0].cashaccountname):t.showToast({icon:"none",title:n.data.returnMessage})}).catch(function(n){e.$refs.loading.close(),t.showToast({icon:"none",title:n})})},handlePriceBlur:function(){this.reqData.amount&&(this.reqData.amount=(0,c.floatFormat)(this.reqData.amount)),this.handleVerify("amount")},handleSelectCashAccount:function(t){this.reqData.payaccountid=t.cashaccountid,this.reqData.payaccountName=t.cashaccountname},handleSearchFocusCurrentUnit:function(){this.currentUnitTag=!1,this.currentUnitSearchDatas=this.currentUnitDatas,this.searchCurrentUnit=!0},handleSearchClearCurrentUnit:function(){this.currentUnitTag=!0,this.searchCurrentUnit=!1,this.$refs.sc.cancel()},handleSearchCurrentUnit:function(t){t.value?(this.currentUnitSearchDatas=this.currentUnitDatas.filter(function(e){return e.contactunitname||(e.contactunitname=""),e.querycode||(e.querycode=""),e.bseContactUnitContactModels[0].telephone||(e.bseContactUnitContactModels[0].telephone=""),-1!==e.contactunitname.indexOf(t.value)||-1!==e.querycode.toLowerCase().indexOf(t.value.toLowerCase())||-1!==e.bseContactUnitContactModels[0].telephone.indexOf(t.value)}),this.searchCurrentUnit=!0):this.currentUnitTag?(this.currentUnitSearchDatas=[],this.searchCurrentUnit=!1):(this.currentUnitSearchDatas=this.currentUnitDatas,this.searchCurrentUnit=!0)},handleSelectCurrentUnit:function(t){this.reqData.contactunitid=t.contactunitid,this.reqData.contactunitname=t.contactunitname,this.currentUnitTag=!0,this.searchCurrentUnit=!1,this.$refs.sc.cancel()},handleVerify:function(t){switch(t){case"feecategory":this.reqData.feecategory?(this.verify.feecategory.okVerify=!0,this.verify.feecategory.disVerMessage=!1):(this.verify.feecategory.okVerify=!1,this.verify.feecategory.disVerMessage=!0);break;case"amount":this.reqData.amount&&"0.00"!=this.reqData.amount?(this.verify.amount.okVerify=!0,this.verify.amount.disVerMessage=!1):(this.verify.amount.okVerify=!1,this.verify.amount.disVerMessage=!0);break}},checkVerify:function(){var t=!0;for(var e in this.verify)this.verify[e].okVerify||(this.verify[e].disVerMessage=!0,t=!1);return t},handleSubmit:function(){var e=this;this.checkVerify()&&(this.$refs.loading.open(),(0,i.create)(a.api.capFee,this.reqData).then(function(n){e.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode?(t.showToast({icon:"success",title:"提交成功"}),e.initData()):t.showToast({icon:"none",title:n.data.returnMessage})}).catch(function(n){e.$refs.loading.close(),t.showToast({icon:"none",title:n})}))}},watch:{reqData:{handler:function(t){t.feecategory&&t.payaccountid&&t.amount?this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=h}).call(this,n("543d")["default"])},a29d:function(t,e,n){},a33e:function(t,e,n){"use strict";n.r(e);var a=n("8206"),i=n("7c37");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("f3b3");var r,o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"179d2c63",null,!1,a["a"],r);e["default"]=s.exports},caed:function(t,e,n){},f3b3:function(t,e,n){"use strict";var a=n("a29d"),i=n.n(a);i.a},f9a7:function(t,e,n){"use strict";(function(t){n("fdae"),n("921b");a(n("66fd"));var e=a(n("a33e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["f9a7","common/runtime","common/vendor"]]]);