(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/recharge/recharge","components/custom/cu-loading","components/uni-popup/uni-popup"],{"0a86":function(t,n,e){"use strict";var o=e("caed"),a=e.n(o);a.a},1226:function(t,n,e){"use strict";var o=e("d551"),a=e.n(o);a.a},2373:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},"30a7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("94a7"),a=e("f45c"),i=(r(e("a8d7")),e("88ed"));function r(t){return t&&t.__esModule?t:{default:t}}var s=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},c=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},u=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"af96"))},l=function(){return e.e("components/wuc-tab/wuc-tab").then(e.bind(null,"4f14"))},d=function(){return e.e("components/helang-checkbox/helang-checkbox").then(e.bind(null,"a523"))},f={components:{uniLoadMore:u,uniList:s,uniListItem:c,WucTab:l,"helang-checkbox":d},data:function(){return{loadmore:"more",loading:!1,pageIndex:0,pageRows:15,title:"续费/订单",pickerIndex:2,TabCur:0,content_show_id:0,dataList:[],ordertype:"1,2",tabList:[{name:"续费"},{name:"我的订单"}],productList:[]}},onLoad:function(){this.pickerIndex=3,this.loadProduct()},onShow:function(){},mounted:function(){},methods:{numberFilter:function(t){return(0,i.numberFormat)(t)},handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){t.switchTab({url:"/pages/my/my"})},tabChange:function(t){switch(console.log(t),t){case 0:this.content_show_id=0,this.pickerIndex=3;break;case 1:this.content_show_id=1,this.pageIndex=0,this.TabCur=1,this.dataList=[],this.loadData();break;default:this.content_show_id=0;break}},handleSubmit:function(){var n=this;console.log("发起支付"),t.login({success:function(e){var i=n.$refs.checkbox.get();if(i){n.$refs.loading.open(),n.loading=!0;var r={productid:i.productid,code:e.code};(0,o.tokenpost)(a.api.Orderypay,r).then(function(e){if(n.loading=!1,200==e.status&&"0000"==e.data.returnCode){console.log("得到接口prepay_id",e.data.data);var o=e.data.data;t.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:"MD5",paySign:o.paySign,success:function(e){t.showToast({title:"支付成功!"}),n.tabChange(1),n.loadData(),t.$emit("changecompany",{msg:"company变化了"})},fail:function(n){t.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){n.$refs.loading.close()}})}else n.$refs.loading.close(),n.$api.msg(e.data.returnMessage)}).catch(function(t){n.loading=!1,n.$refs.loading.close(),n.$api.msg("请求失败fail")})}else n.$api.msg("请选择要购买的产品!")},fail:function(e){n.$refs.loading.close(),console.log("fail",e),n.loading=!1,t.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})}})},loadProduct:function(){var t=this;this.$refs.loading.open();var n={pageIndex:1,pageRows:-1,exchangeintegralbegin:1};(0,o.tokenpost)(a.api.GetProductList,n).then(function(n){t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode?(t.productList=n.data.data.resultList,console.log(t.productList)):t.$api.msg(n.data.returnMessage)}).catch(function(n){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})},loadData:function(){var t=this;this.loadmore="loading",this.$refs.loading.open();var n={pageIndex:this.pageIndex+1,pageRows:this.pageRows,ordertype:this.ordertype};(0,o.tokenpost)(a.api.GetOrderList,n).then(function(n){if(t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode){if(0===n.data.data.resultList.length)return void(t.loadmore="noMore");t.dataList=t.dataList.concat(n.data.data.resultList),t.pageIndex=t.pageIndex+1,t.loadmore="more"}else t.loadmore="more",t.$api.msg(n.data.returnMessage)}).catch(function(n){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})}}};n.default=f}).call(this,e("543d")["default"])},"401c":function(t,n,e){"use strict";e.r(n);var o=e("661b"),a=e("7072");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("54b0");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"565b0f6a",null,!1,o["a"],r);n["default"]=c.exports},4395:function(t,n,e){"use strict";e.r(n);var o=e("2373"),a=e("4777");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("0a86");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"3e46c635",null,!1,o["a"],r);n["default"]=c.exports},4777:function(t,n,e){"use strict";e.r(n);var o=e("55ce"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},5088:function(t,n,e){"use strict";e.r(n);var o=e("8287"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},"54b0":function(t,n,e){"use strict";var o=e("d5fd"),a=e.n(o);a.a},"55ce":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},a={name:"UniPopup",components:{uniTransition:o},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=a},"661b":function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.dataList,function(n,e){var o=t.numberFilter(n.orderamount);return{$orig:t.__get_orig(n),m0:o}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},7072:function(t,n,e){"use strict";e.r(n);var o=e("30a7"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},8287:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};n.default=o},a8d7:function(t,n,e){"use strict";e.r(n);var o=e("c925"),a=e("5088");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("1226");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"48bbf381",null,!1,o["a"],r);n["default"]=c.exports},c925:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},caed:function(t,n,e){},d551:function(t,n,e){},d5fd:function(t,n,e){},e303:function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");o(e("66fd"));var n=o(e("401c"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["e303","common/runtime","common/vendor"]]]);