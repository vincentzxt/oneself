(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/account/accountlist"],{"262c":function(n,t,e){"use strict";var a=e("8404"),o=e.n(a);o.a},"36e7":function(n,t,e){"use strict";e.r(t);var a=e("450e"),o=e("9ff5");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("262c");var c,i=e("f0c5"),r=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=r.exports},"450e":function(n,t,e){"use strict";var a,o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return a})},"68d0":function(n,t,e){"use strict";(function(n){e("fdae"),e("921b");a(e("66fd"));var t=a(e("36e7"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},8404:function(n,t,e){},9109:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("94a7"),o=e("f45c"),u=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},c=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},i={components:{uniList:u,uniListItem:c},data:function(){return{title:"账户设置 ",dataList:[{accountName:"湖北吉奥汽车服务有限公司",money:"600",bankType:"微信"},{accountName:"湖北吉奥汽车服务有限公司",money:"600",bankType:"微信"}]}},onLoad:function(){},onShow:function(){n.getStorageSync("userInfo")||n.reLaunch({url:"/pages/my/login/login"})},methods:{handleRefreshPage:function(){console.log("refreshpage")},handleNavbarClickLeft:function(){n.navigateBack({delta:1})},handleAdd:function(){console.log("-----"),n.navigateTo({url:"/pages/my/account/accountadd"}),console.log("-----")},handleLogout:function(){n.showModal({title:"确定要退出登录么？",success:function(t){if(t.confirm)try{n.clearStorageSync(),setTimeout(function(){var t=n.getStorageSync("userInfo");t||n.reLaunch({url:"/pages/my/login/login"})},200)}catch(t){}}})},handleSet:function(){n.navigateTo({url:"../my/set"})},loadData:function(){var n=this;(0,a.tokenpost)(o.api.GetUserInfo).then(function(t){200==t.status&&"0000"==t.data.returnCode?n.dataList=t.data.data:n.$api.msg(t.data.returnMessage),n.loading=!1}).catch(function(t){n.loading=!1,n.$api.msg("请求失败fail")})}}};t.default=i}).call(this,e("543d")["default"])},"9ff5":function(n,t,e){"use strict";e.r(t);var a=e("9109"),o=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);t["default"]=o.a}},[["68d0","common/runtime","common/vendor"]]]);