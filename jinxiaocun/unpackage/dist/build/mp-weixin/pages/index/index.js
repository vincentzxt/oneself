(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index","components/uni-popup/uni-popup"],{"0a86":function(e,n,t){"use strict";var o=t("caed"),i=t.n(o);i.a},2373:function(e,n,t){"use strict";var o={"uni-transition":()=>t.e("components/uni-transition/uni-transition").then(t.bind(null,"e83d"))},i=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",function(){return i}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return o})},4395:function(e,n,t){"use strict";t.r(n);var o=t("2373"),i=t("4777");for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);t("0a86");var r,c=t("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"3e46c635",null,!1,o["a"],r);n["default"]=u.exports},4777:function(e,n,t){"use strict";t.r(n);var o=t("55ce"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=i.a},"55ce":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return t.e("components/uni-transition/uni-transition").then(t.bind(null,"e83d"))},i={name:"UniPopup",components:{uniTransition:o},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(e){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(e){e.stopPropagation()},open:function(){var e=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){e.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(e){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=i},"657e":function(e,n,t){},"920a":function(e,n,t){"use strict";var o={"uni-grid":()=>t.e("components/uni-grid/uni-grid").then(t.bind(null,"2a50")),"uni-grid-item":()=>t.e("components/uni-grid-item/uni-grid-item").then(t.bind(null,"a0bb")),"uni-icons":()=>Promise.all([t.e("common/vendor"),t.e("components/uni-icons/uni-icons")]).then(t.bind(null,"fe49"))},i=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",function(){return i}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return o})},b3c1:function(e,n,t){"use strict";var o=t("657e"),i=t.n(o);i.a},c972:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("dcb1")),i=t("94a7"),a=(t("88ed"),t("f45c"));function r(e){return e&&e.__esModule?e:{default:e}}var c=function(){return t.e("components/uni-grid/uni-grid").then(t.bind(null,"2a50"))},u=function(){return t.e("components/uni-grid-item/uni-grid-item").then(t.bind(null,"a0bb"))},s=function(){return t.e("components/custom/cu-loading").then(t.bind(null,"a8d7"))},d={components:{uniGrid:c,uniGridItem:u,cuLoading:s},data:function(){return{title:"买卖",promoterid:"",lists:[{id:"1",name:"销售",icon:"sale",color:"#f4613d",size:32},{id:"2",name:"采购",icon:"purchase-fill",color:"#f4613d",size:36},{id:"3",name:"客户&供应商",icon:"customer-fill",color:"#69c0ff",size:36},{id:"4",name:"产品",icon:"product-fill",color:"#69c0ff",size:36},{id:"5",name:"收款单",icon:"receipt",color:"#3dc57a",size:36},{id:"6",name:"付款单",icon:"payment",color:"#3dc57a",size:36},{id:"7",name:"费用单",icon:"cost",color:"#3dc57a",size:36},{id:"8",name:"退货单",icon:"return-order",color:"#3dc57a",size:36},{id:"9",name:"期初",icon:"early-stage",color:"#ffa268",size:32},{id:"10",name:"盘点",icon:"inventory",color:"#ffa268",size:36}]}},onLoad:function(n){var t=this;console.log("option",n),n.scene?(t.promoterid=decodeURIComponent(n.scene),e.setStorage({key:"promoterid",data:t.promoterid,success:function(){t.load(),t.tokenRefresh()}})):(console.log("没有数据"),t.load(),t.tokenRefresh())},onShow:function(){},onUnload:function(){},methods:{load:function(){o.default.getCurrentUnit(),o.default.getBaseProduct(),o.default.getProductCategory()},tokenRefresh:function(){e.getStorageSync("userInfo");(0,i.tokenpost)(a.api.tokenRefresh).then(function(n){if(200==n.status&&"0000"==n.data.returnCode){var t={token:n.data.data.token,exp:n.data.data.exp,userId:n.data.data.userId};e.setStorage({key:"userInfo",data:t,success:function(){}}),e.setStorageSync("islogin","1")}else e.setStorageSync("islogin","0")}).catch(function(e){})},handleRefreshPage:function(){console.log("refreshpage")},handleGridChange:function(n){switch(n.id){case"1":e.navigateTo({url:"./sale/sale"});break;case"2":e.navigateTo({url:"./purchase/purchase"});break;case"3":e.navigateTo({url:"./current-unit/current-unit"});break;case"4":e.navigateTo({url:"./product/product"});break;case"5":e.navigateTo({url:"./receipt/receipt"});break;case"6":e.navigateTo({url:"./payment/payment"});break;case"7":e.navigateTo({url:"./cost/cost"});break;case"8":e.navigateTo({url:"./return-order/return-order"});break;case"9":e.navigateTo({url:"./early-stage/early-stage"});break;case"10":e.navigateTo({url:"./inventory/inventory"});break}}}};n.default=d}).call(this,t("543d")["default"])},caed:function(e,n,t){},dace:function(e,n,t){"use strict";(function(e){t("fdae"),t("921b");o(t("66fd"));var n=o(t("f9e9"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},ee93:function(e,n,t){"use strict";t.r(n);var o=t("c972"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=i.a},f9e9:function(e,n,t){"use strict";t.r(n);var o=t("920a"),i=t("ee93");for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);t("b3c1");var r,c=t("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"4e3e7ef9",null,!1,o["a"],r);n["default"]=u.exports}},[["dace","common/runtime","common/vendor"]]]);