<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/account/accountlist","components/custom/cu-loading"],{"06e5":function(t,n,e){"use strict";e.r(n);var a=e("a154"),o=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=o.a},"214e":function(t,n,e){"use strict";var a=e("3dd7"),o=e.n(a);o.a},"3dd7":function(t,n,e){},a154:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};n.default=a},ad8c:function(t,n,e){"use strict";e.r(n);var a=e("eeac"),o=e("d264");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("214e");var u=e("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,"6fa00758",null);n["default"]=i.exports},af69:function(t,n,e){"use strict";var a=e("b160"),o=e.n(a);o.a},b160:function(t,n,e){},c9a9:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("5b2d"),o=e("5ac3");c(e("e970"));function c(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"f8ed"))},i=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"3ce5"))},s={components:{uniList:u,uniListItem:i},data:function(){return{title:"账户设置 ",dataList:[],isdeleteDict:["正常","禁用"],accounTypeList2:["","银行账号","微信","支付宝","现金"],accounTypeList:{0:"",1:"银行账号",2:"微信",3:"支付宝",4:"现金"}}},onLoad:function(){},onShow:function(){t.getStorageSync("userInfo")||t.reLaunch({url:"/pages/my/login/login"}),this.loadData()},methods:{handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleAdd:function(){console.log("-----"),t.navigateTo({url:"/pages/my/account/accountadd"}),console.log("-----")},handleDetail:function(n){console.log("---222--"),t.navigateTo({url:"/pages/my/account/accountdetail?id="+n})},handleEdit:function(n){console.log("-----"),t.navigateTo({url:"/pages/my/account/accountedit?id="+n})},loadData:function(){var t=this;this.$refs.loading.open(),(0,a.tokenpost)(o.api.MyCashAccount).then(function(n){t.$refs.loading.close(),200==n.status&&"0000"==n.data.returnCode?t.dataList=n.data.data.resultList:t.$api.msg(n.data.returnMessage)}).catch(function(n){t.$refs.loading.close(),t.$api.msg("请求失败fail")})}}};n.default=s}).call(this,e("543d")["default"])},d264:function(t,n,e){"use strict";e.r(n);var a=e("c9a9"),o=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=o.a},e0cb:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},e176:function(t,n,e){"use strict";(function(t){e("5545"),e("921b");a(e("66fd"));var n=a(e("ad8c"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e970:function(t,n,e){"use strict";e.r(n);var a=e("e0cb"),o=e("06e5");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("af69");var u=e("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,"61d748ad",null);n["default"]=i.exports},eeac:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})}},[["e176","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/account/accountlist","components/custom/cu-loading"],{1226:function(n,t,e){"use strict";var o=e("d551"),c=e.n(o);c.a},"18cf":function(n,t,e){"use strict";var o=e("4532"),c=e.n(o);c.a},"36e7":function(n,t,e){"use strict";e.r(t);var o=e("c690"),c=e("9ff5");for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);e("18cf");var u,i=e("f0c5"),r=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,"2383cbb0",null,!1,o["a"],u);t["default"]=r.exports},4532:function(n,t,e){},5088:function(n,t,e){"use strict";e.r(t);var o=e("8287"),c=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=c.a},"68d0":function(n,t,e){"use strict";(function(n){e("fdae"),e("921b");o(e("66fd"));var t=o(e("36e7"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},8287:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};t.default=o},9109:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("94a7"),c=e("f45c");a(e("a8d7"));function a(n){return n&&n.__esModule?n:{default:n}}var u=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},i=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},r={components:{uniList:u,uniListItem:i},data:function(){return{title:"账户设置 ",dataList:[],isdeleteDict:["正常","禁用"],accounTypeList2:["","银行账号","微信","支付宝","现金"],accounTypeList:{0:"",1:"银行账号",2:"微信",3:"支付宝",4:"现金"}}},onLoad:function(){},onShow:function(){n.getStorageSync("userInfo")||n.reLaunch({url:"/pages/my/login/login"}),this.loadData()},methods:{handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){n.navigateBack({delta:1})},handleAdd:function(){console.log("-----"),n.navigateTo({url:"/pages/my/account/accountadd"}),console.log("-----")},handleDetail:function(t){console.log("---222--"),n.navigateTo({url:"/pages/my/account/accountdetail?id="+t})},handleEdit:function(t){console.log("-----"),n.navigateTo({url:"/pages/my/account/accountedit?id="+t})},loadData:function(){var n=this;this.$refs.loading.open(),(0,o.tokenpost)(c.api.MyCashAccount).then(function(t){n.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode?n.dataList=t.data.data.resultList:n.$api.msg(t.data.returnMessage)}).catch(function(t){n.$refs.loading.close(),n.$api.msg("请求失败fail")})}}};t.default=r}).call(this,e("543d")["default"])},"9ff5":function(n,t,e){"use strict";e.r(t);var o=e("9109"),c=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=c.a},a8d7:function(n,t,e){"use strict";e.r(t);var o=e("c925"),c=e("5088");for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);e("1226");var u,i=e("f0c5"),r=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,"48bbf381",null,!1,o["a"],u);t["default"]=r.exports},c690:function(n,t,e){"use strict";var o,c=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return o})},c925:function(n,t,e){"use strict";var o,c=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return o})},d551:function(n,t,e){}},[["68d0","common/runtime","common/vendor"]]]);
>>>>>>> d9bea62689cb495bf28b81e1ee13c55bbda74e56
