(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/wxSet/wxSet","components/custom/cu-loading","components/uni-popup/uni-popup"],{"0a86":function(n,t,e){"use strict";var o=e("caed"),i=e.n(o);i.a},1226:function(n,t,e){"use strict";var o=e("d551"),i=e.n(o);i.a},2373:function(n,t,e){"use strict";var o={"uni-transition":()=>e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},i=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return o})},"2fd3":function(n,t,e){},"3ef4":function(n,t,e){"use strict";var o={"uni-icon":()=>e.e("components/uni-icon/uni-icon").then(e.bind(null,"9daa"))},i=function(){var n=this,t=n.$createElement,o=(n._self._c,e("f7bc"));n.$mp.data=Object.assign({},{$root:{m0:o}})},a=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return o})},4395:function(n,t,e){"use strict";e.r(t);var o=e("2373"),i=e("4777");for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);e("0a86");var c,s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"3e46c635",null,!1,o["a"],c);t["default"]=r.exports},4777:function(n,t,e){"use strict";e.r(t);var o=e("55ce"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=i.a},4983:function(n,t,e){"use strict";(function(n){e("fdae"),e("921b");o(e("66fd"));var t=o(e("e5c7"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},5088:function(n,t,e){"use strict";e.r(t);var o=e("8287"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=i.a},"55ce":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},i={name:"UniPopup",components:{uniTransition:o},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(n){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(n){n.stopPropagation()},open:function(){var n=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){n.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(n){var t=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(t.timer),t.timer=setTimeout(function(){t.$emit("change",{show:!1}),t.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};t.default=i},8287:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};t.default=o},a8d7:function(n,t,e){"use strict";e.r(t);var o=e("c925"),i=e("5088");for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);e("1226");var c,s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"48bbf381",null,!1,o["a"],c);t["default"]=r.exports},c925:function(n,t,e){"use strict";var o,i=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return o})},caed:function(n,t,e){},d3c0:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("94a7"),i=e("f45c");a(e("a8d7"));function a(n){return n&&n.__esModule?n:{default:n}}var c=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"9daa"))},s={components:{uniIcon:c},data:function(){return{loading:!1,loading2:!1,hasRight:!1,ava_url:"",nick_name:"",loginname:"",wxcode:"",title:"微信绑定"}},onShow:function(){},onLoad:function(){this.getwxInfo(),this.loadData()},methods:{handleNavbarClickLeft:function(){n.navigateBack({delta:1})},getwxInfo:function(){var t=this;n.login({provider:"weixin",success:function(e){n.getUserInfo({provider:"weixin",success:function(n){t.ava_url=n.userInfo.avatarUrl,t.nick_name=n.userInfo.nickName,t.hasRight=!0}})}})},loadData:function(){var n=this;this.$refs.loading.open(),(0,o.tokenpost)(i.api.GetUserInfo).then(function(t){200==t.status?(n.$refs.loading.close(),"0000"==t.data.returnCode&&(n.loginname=t.data.data.loginname)):n.$api.msg(t.data.returnMessage)}).catch(function(t){n.$refs.loading.close(),n.$api.msg("请求失败fail")})},bind_action:function(){var t=this;n.login({provider:"weixin",success:function(e){t.$refs.loading.open();var a={code:e.code,sourcetype:1};(0,o.tokenpost)(i.api.BindUserOpenId,a).then(function(e){t.$refs.loading.close(),200==e.status&&"0000"==e.data.returnCode?(t.$api.msg("微信账号绑定成功"),t.handleNavbarClickLeft()):200==e.status&&"203"==e.data.returnCode?n.showModal({title:"绑定提示",content:"当前的微信已经绑定到其他账号("+e.data.returnMessage+")，是否换绑到当前账号("+t.loginname+")",confirmText:"确定",showCancel:!0,success:function(e){if(e.confirm)try{t.$refs.loading.open(),n.login({provider:"weixin",success:function(n){var e={code:n.code,sourcetype:2};console.log("sendData2",e),(0,o.tokenpost)(i.api.BindUserOpenId,e).then(function(n){t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode?(t.$api.msg("微信账号换绑成功"),t.handleNavbarClickLeft()):t.$api.msg(n.data.returnMessage)}).catch(function(n){t.$refs.loading.close(),t.$api.msg("请求失败fail")})}})}catch(e){}}}):t.$api.msg(e.data.returnMessage)}).catch(function(n){t.$refs.loading.close(),t.$api.msg("请求失败fail")})}})},handleLogout:function(){n.showModal({title:"确定要退出登录么？",success:function(t){if(t.confirm)try{n.removeStorage({key:"userInfo",success:function(t){n.removeStorageSync("islogin"),n.removeStorageSync("currentUnitList"),n.removeStorageSync("productList"),n.removeStorageSync("productCategory"),setTimeout(function(){var t=n.getStorageSync("userInfo");t||n.reLaunch({url:"/pages/my/my"})},200)}})}catch(t){}}})}}};t.default=s}).call(this,e("543d")["default"])},d4d4:function(n,t,e){"use strict";e.r(t);var o=e("d3c0"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=i.a},d551:function(n,t,e){},d6a5:function(n,t,e){"use strict";var o=e("2fd3"),i=e.n(o);i.a},e5c7:function(n,t,e){"use strict";e.r(t);var o=e("3ef4"),i=e("d4d4");for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);e("d6a5");var c,s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"2d8e7e9b",null,!1,o["a"],c);t["default"]=r.exports}},[["4983","common/runtime","common/vendor"]]]);