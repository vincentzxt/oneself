(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/integral/integral","components/custom/cu-loading","components/uni-popup/uni-popup"],{"045b":function(t,n,e){"use strict";var o=e("235f"),a=e.n(o);a.a},"0a86":function(t,n,e){"use strict";var o=e("caed"),a=e.n(o);a.a},1226:function(t,n,e){"use strict";var o=e("d551"),a=e.n(o);a.a},"235f":function(t,n,e){},2373:function(t,n,e){"use strict";var o={"uni-transition":()=>e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},"30c5":function(t,n,e){"use strict";e.r(n);var o=e("6cdd"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},4395:function(t,n,e){"use strict";e.r(n);var o=e("2373"),a=e("4777");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("0a86");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"3e46c635",null,!1,o["a"],s);n["default"]=r.exports},4777:function(t,n,e){"use strict";e.r(n);var o=e("55ce"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},5088:function(t,n,e){"use strict";e.r(n);var o=e("8287"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},"530a":function(t,n,e){"use strict";var o={"wuc-tab":()=>e.e("components/wuc-tab/wuc-tab").then(e.bind(null,"4f14")),"helang-checkbox":()=>e.e("components/helang-checkbox/helang-checkbox").then(e.bind(null,"a523")),"uni-load-more":()=>e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"af96"))},a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},"55ce":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},a={name:"UniPopup",components:{uniTransition:o},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=a},"6cdd":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("94a7"),a=e("f45c");i(e("a8d7"));function i(t){return t&&t.__esModule?t:{default:t}}var s=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"af96"))},c=function(){return e.e("components/wuc-tab/wuc-tab").then(e.bind(null,"4f14"))},r=function(){return e.e("components/helang-checkbox/helang-checkbox-jf").then(e.bind(null,"f0b2"))},u={components:{uniLoadMore:s,WucTab:c,"helang-checkbox":r},data:function(){return{loadmore:"more",loading:!1,pageIndex:0,pageRows:15,title:"积分兑换",pickerIndex:2,TabCur:0,content_show_id:0,dataList:[],tabList:[{name:"兑换"},{name:"我的兑换"}],OrderStatusList:["待支付","已支付"],ordertype:3,PayTypeList:{0:"",1:"银行账号",2:"微信",3:"支付宝",4:"现金"},productList:[]}},onLoad:function(){this.pickerIndex=3,this.loadProduct()},onShow:function(){},mounted:function(){},methods:{handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){t.switchTab({url:"/pages/my/my"})},tabChange:function(t){switch(console.log(t),t){case 0:this.content_show_id=0,this.pickerIndex=3;break;case 1:this.content_show_id=1,this.pageIndex=0,this.TabCur=1,this.dataList=[],this.loadData();break;default:this.content_show_id=0;break}},handleSubmit:function(){var n=this,e=this.$refs.checkbox.get();if(e){this.$refs.loading.open(),this.loading=!0;var i={productid:e.productid};(0,o.tokenpost)(a.api.IntegralExchange,i).then(function(e){n.loading=!1,n.$refs.loading.close(),200==e.status&&"0000"==e.data.returnCode?(n.$api.msg("兑换成功！"),n.tabChange(1),t.$emit("changecompany",{msg:"company变化了"})):n.$api.msg(e.data.returnMessage)}).catch(function(t){n.loading=!1,n.$refs.loading.close(),n.$api.msg("请求失败fail")})}else this.$api.msg("请选择要兑换的产品!")},loadProduct:function(){var t=this;this.$refs.loading.open();var n={pageIndex:1,pageRows:-1,exchangeintegralbegin:1};(0,o.tokenpost)(a.api.GetProductList,n).then(function(n){t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode?(t.productList=n.data.data.resultList,console.log(t.productList)):t.$api.msg(n.data.returnMessage)}).catch(function(n){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})},loadData:function(){var t=this;this.loadmore="loading",this.$refs.loading.open();var n={pageIndex:this.pageIndex+1,pageRows:this.pageRows,ordertype:this.ordertype};(0,o.tokenpost)(a.api.GetOrderList,n).then(function(n){if(t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode){if(0===n.data.data.resultList.length)return void(t.loadmore="noMore");t.dataList=t.dataList.concat(n.data.data.resultList),t.pageIndex=t.pageIndex+1,t.loadmore="more"}else t.loadmore="more",t.$api.msg(n.data.returnMessage)}).catch(function(n){t.loadmore="more",t.$refs.loading.close(),t.$api.msg("请求失败fail")})}}};n.default=u}).call(this,e("543d")["default"])},8287:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};n.default=o},9661:function(t,n,e){"use strict";e.r(n);var o=e("530a"),a=e("30c5");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("045b");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"4e3afba0",null,!1,o["a"],s);n["default"]=r.exports},a8d7:function(t,n,e){"use strict";e.r(n);var o=e("c925"),a=e("5088");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("1226");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"48bbf381",null,!1,o["a"],s);n["default"]=r.exports},bdb3:function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");o(e("66fd"));var n=o(e("9661"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},c925:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},caed:function(t,n,e){},d551:function(t,n,e){}},[["bdb3","common/runtime","common/vendor"]]]);