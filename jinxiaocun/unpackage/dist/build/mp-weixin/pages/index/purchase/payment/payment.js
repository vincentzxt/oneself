(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/purchase/payment/payment"],{3420:function(t,n,e){"use strict";e.r(n);var a=e("a79c"),o=e("66e9");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("e225");var i,u=e("f0c5"),r=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"551c5c96",null,!1,a["a"],i);n["default"]=r.exports},"37b7":function(t,n,e){},"66e9":function(t,n,e){"use strict";e.r(n);var a=e("fc21"),o=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=o.a},"9f49":function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");a(e("66fd"));var n=a(e("3420"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a79c:function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return a})},e225:function(t,n,e){"use strict";var a=e("37b7"),o=e.n(a);o.a},fc21:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("f45c"),o=e("aba6"),c=i(e("dcb1"));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("components/custom/cu-panel").then(e.bind(null,"00f1"))},r=function(){return e.e("components/custom/cu-cell").then(e.bind(null,"52a0"))},s=function(){return e.e("components/custom/cu-cell-group").then(e.bind(null,"13d0"))},d=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},l=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},h={components:{cuPanel:u,cuCell:r,cuCellGroup:s,uniList:d,uniListItem:l},data:function(){return{title:"采购付款",reqData:{order:{billtype:1,isOnCredit:0,payaccountid:"",payaccountName:"",contactunitid:"",contactunitname:"",telephone:"",amount:0,isprint:0,discountamount:""},orderlist:[]},tmpAmount:0,cashAccountDict:[],discount:0,showDisCount:""}},onLoad:function(t){if(t){var n=JSON.parse(t.reqData);this.reqData.order.contactunitid=n.contactunitid,this.reqData.order.contactunitname=n.contactunitname,this.reqData.order.telephone=n.telephone,this.reqData.order.amount=parseFloat(n.totalPrice).toFixed(2),this.tmpAmount=this.reqData.order.amount,this.reqData.orderlist=n.productList}this.getCashAccount()},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){var n=getCurrentPages(),e=n[n.length-2];e.setData({commandType:"return"}),t.navigateBack({delta:1})},getCashAccount:function(){var n=this;this.$refs.loading.open(),(0,o.query)(a.api.cashAccount).then(function(e){n.$refs.loading.close(),200==e.status&&"0000"==e.data.returnCode?(n.cashAccountDict=e.data.data.resultList,n.reqData.order.payaccountid=n.cashAccountDict[0].cashaccountid,n.reqData.order.payaccountName=n.cashAccountDict[0].cashaccountname):t.showToast({icon:"none",title:e.data.returnMessage})}).catch(function(e){n.$refs.loading.close(),t.showToast({icon:"none",title:e})})},handleCreditChange:function(t){this.reqData.order.isOnCredit=t.detail.value},handleSelectCashAccount:function(t){this.reqData.order.payaccountid=t.cashaccountid,this.reqData.order.payaccountName=t.cashaccountname},handlePrintChange:function(t){this.reqData.order.isprint=t.detail.value},handleDisCount:function(t){t.detail.value?(this.reqData.order.discountamount="0."+this.tmpAmount.split(".")[1],this.reqData.order.amount=this.tmpAmount.split(".")[0]+".00"):(this.reqData.order.discountamount="0.00",this.reqData.order.amount=this.tmpAmount)},handleSubmit:function(){var n=this;this.$refs.loading.open(),(0,o.create)(a.api.purPurchaseOrder,this.reqData).then(function(e){n.$refs.loading.close(),200==e.status&&"0000"==e.data.returnCode?c.default.getCurrentUnit().then(function(n){t.showToast({icon:"success",title:"提交成功"}),setTimeout(function(){var n=getCurrentPages(),e=n[n.length-2];e.setData({commandType:"success"}),t.navigateBack({delta:1})},500)}).catch(function(n){t.showToast({icon:"success",title:"提交成功"}),setTimeout(function(){var n=getCurrentPages(),e=n[n.length-2];e.setData({commandType:"success"}),t.navigateBack({delta:1})},500)}):t.showToast({icon:"none",title:e.data.returnMessage})}).catch(function(e){n.$refs.loading.close(),t.showToast({icon:"none",title:e})})}},watch:{"reqData.order.discountamount":{handler:function(t){this.showDisCount=t&&"0.00"!==t?"抹零金额：￥"+this.reqData.order.discountamount:""},deep:!0}}};n.default=h}).call(this,e("543d")["default"])}},[["9f49","common/runtime","common/vendor"]]]);