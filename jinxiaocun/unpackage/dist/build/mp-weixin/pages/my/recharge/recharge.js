(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/recharge/recharge","components/custom/cu-loading","components/uni-popup/uni-popup"],{"0a86":function(t,n,e){"use strict";var o=e("caed"),a=e.n(o);a.a},1226:function(t,n,e){"use strict";var o=e("d551"),a=e.n(o);a.a},2373:function(t,n,e){"use strict";var o={"uni-transition":()=>e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},"30a7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("94a7"),a=e("f45c"),i=(s(e("a8d7")),e("88ed"));function s(t){return t&&t.__esModule?t:{default:t}}var c=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},r=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},u=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"af96"))},l=function(){return e.e("components/wuc-tab/wuc-tab").then(e.bind(null,"4f14"))},d=function(){return e.e("components/helang-checkbox/helang-checkbox").then(e.bind(null,"a523"))},f=function(){return e.e("components/shufei-action/action").then(e.bind(null,"4d1c"))},p={components:{uniLoadMore:u,uniList:c,uniListItem:r,WucTab:l,action:f,"helang-checkbox":d},data:function(){return{loadmore:"more",loading:!1,pageIndex:0,pageRows:15,title:"续费/订单",pickerIndex:2,TabCur:0,content_show_id:0,dataList:[],ordertype:"1,2",tabList:[{name:"续费"},{name:"我的订单"}],productList:[],refundList:[],nowId:-1}},onLoad:function(){this.pickerIndex=3,this.loadProduct(),this.loadRefundList()},onShow:function(){},mounted:function(){},methods:{numberFilter:function(t){return(0,i.numberFormat)(t)},handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){t.switchTab({url:"/pages/my/my"})},unpayment:function(n){var e=this;t.showModal({title:"是否确认申请退款？",success:function(t){t.confirm&&(e.nowId=n,e.$refs.action.actionConfig={title:"请选择退款原因",summary:"",list:e.refundList,type:0,isBorderColor:!1,specClass:"show"})}})},itemClick:function(t,n){var e=this;if(console.log("你点击的action-sheet的类型是".concat(n,",list对应的索引值是").concat(t)),console.log(this.refundList[t].dictionaryid),t>-1){var i={orderid:this.nowId,reasoncode:this.refundList[t].code};this.$refs.loading.open(),(0,o.tokenpost)(a.api.RefundApply,i).then(function(t){e.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode?(e.$api.msg("退款操作成功！"),e.pageIndex=0,e.dataList=[],e.loadData()):e.$api.msg(t.data.returnMessage)}).catch(function(t){e.loadmore="more",e.$refs.loading.close(),e.$api.msg("请求失败fail")})}},tabChange:function(t){switch(console.log(t),t){case 0:this.content_show_id=0,this.pickerIndex=3;break;case 1:this.content_show_id=1,this.pageIndex=0,this.TabCur=1,this.dataList=[],console.log("点击了"),this.loadData();break;default:this.content_show_id=0;break}},handlePayment:function(n){var e=this;console.log("发起支付"),t.login({success:function(i){e.$refs.loading.open(),e.loading=!0;var s={orderid:n,code:i.code};(0,o.tokenpost)(a.api.Orderypay,s).then(function(n){if(e.loading=!1,200==n.status&&"0000"==n.data.returnCode){console.log("得到接口prepay_id",n.data.data);var o=n.data.data;t.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:"MD5",paySign:o.paySign,success:function(n){t.showToast({title:"支付成功!"}),e.tabChange(1),t.$emit("changecompany",{msg:"company变化了"})},fail:function(n){t.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){e.$refs.loading.close()}})}else e.$refs.loading.close(),e.$api.msg(n.data.returnMessage)}).catch(function(t){e.loading=!1,e.$refs.loading.close(),e.$api.msg("请求失败fail")})},fail:function(n){e.$refs.loading.close(),console.log("fail",n),e.loading=!1,t.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})},handleSubmit:function(){var n=this;console.log("发起支付"),t.login({success:function(e){var i=n.$refs.checkbox.get();if(i){n.$refs.loading.open(),n.loading=!0;var s={productid:i.productid,code:e.code};(0,o.tokenpost)(a.api.Orderypay,s).then(function(e){if(n.loading=!1,200==e.status&&"0000"==e.data.returnCode){console.log("得到接口prepay_id",e.data.data);var o=e.data.data;t.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:"MD5",paySign:o.paySign,success:function(e){t.showToast({title:"支付成功!"}),n.tabChange(1),t.$emit("changecompany",{msg:"company变化了"})},fail:function(n){t.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){n.$refs.loading.close()}})}else n.$refs.loading.close(),n.$api.msg(e.data.returnMessage)}).catch(function(t){n.loading=!1,n.$refs.loading.close(),n.$api.msg("请求失败fail")})}else n.$api.msg("请选择要购买的产品!")},fail:function(e){n.$refs.loading.close(),console.log("fail",e),n.loading=!1,t.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})}})},loadProduct:function(){var t=this;this.$refs.loading.open();var n={pageIndex:1,pageRows:-1,exchangeintegralbegin:1};(0,o.tokenpost)(a.api.GetProductList,n).then(function(n){t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode?(t.productList=n.data.data.resultList,console.log(t.productList)):t.$api.msg(n.data.returnMessage)}).catch(function(n){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})},loadData:function(){var t=this;this.loadmore="loading",this.$refs.loading.open();var n={pageIndex:this.pageIndex+1,pageRows:this.pageRows,ordertype:this.ordertype};(0,o.tokenpost)(a.api.GetOrderList,n).then(function(n){if(t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode){if(0===n.data.data.resultList.length)return void(t.loadmore="noMore");t.dataList=t.dataList.concat(n.data.data.resultList),t.pageIndex=t.pageIndex+1,t.loadmore="more"}else t.loadmore="more",t.$api.msg(n.data.returnMessage)}).catch(function(n){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})},loadRefundList:function(){var t=this,n={parentid:1e3};(0,o.tokenpost)(a.api.GetRefundList,n).then(function(n){t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode&&(t.refundList=n.data.data.resultList)}).catch(function(n){t.$api.msg("退款原因加载失败!")})}}};n.default=p}).call(this,e("543d")["default"])},"401c":function(t,n,e){"use strict";e.r(n);var o=e("bff1"),a=e("7072");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("a5bb");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"0aacef8a",null,!1,o["a"],s);n["default"]=r.exports},4033:function(t,n,e){},4395:function(t,n,e){"use strict";e.r(n);var o=e("2373"),a=e("4777");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("0a86");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"3e46c635",null,!1,o["a"],s);n["default"]=r.exports},4777:function(t,n,e){"use strict";e.r(n);var o=e("55ce"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},5088:function(t,n,e){"use strict";e.r(n);var o=e("8287"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},"55ce":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},a={name:"UniPopup",components:{uniTransition:o},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=a},7072:function(t,n,e){"use strict";e.r(n);var o=e("30a7"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},8287:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};n.default=o},a5bb:function(t,n,e){"use strict";var o=e("4033"),a=e.n(o);a.a},a8d7:function(t,n,e){"use strict";e.r(n);var o=e("c925"),a=e("5088");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("1226");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"48bbf381",null,!1,o["a"],s);n["default"]=r.exports},bff1:function(t,n,e){"use strict";var o={"wuc-tab":()=>e.e("components/wuc-tab/wuc-tab").then(e.bind(null,"4f14")),"helang-checkbox":()=>e.e("components/helang-checkbox/helang-checkbox").then(e.bind(null,"a523")),"uni-load-more":()=>e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"af96"))},a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.dataList,function(n,e){var o=t.numberFilter(n.orderamount);return{$orig:t.__get_orig(n),m0:o}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},c925:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},caed:function(t,n,e){},d551:function(t,n,e){},e303:function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");o(e("66fd"));var n=o(e("401c"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["e303","common/runtime","common/vendor"]]]);