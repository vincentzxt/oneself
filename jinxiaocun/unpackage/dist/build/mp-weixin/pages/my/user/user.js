(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/user/user"],{"0557":function(n,t,e){"use strict";e.r(t);var a=e("2077"),u=e("a89c");for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);e("9e00");var o,c=e("f0c5"),r=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"fabeeea4",null,!1,a["a"],o);t["default"]=r.exports},2077:function(n,t,e){"use strict";var a,u=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return i}),e.d(t,"a",function(){return a})},"5d5c":function(n,t,e){"use strict";(function(n){e("fdae"),e("921b");a(e("66fd"));var t=a(e("0557"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"933b":function(n,t,e){},"9e00":function(n,t,e){"use strict";var a=e("933b"),u=e.n(a);u.a},a89c:function(n,t,e){"use strict";e.r(t);var a=e("f835"),u=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);t["default"]=u.a},f835:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("94a7"),u=e("f45c"),i=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},o=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},c=function(){return e.e("components/custom/cu-panel").then(e.bind(null,"00f1"))},r=function(){return e.e("components/custom/cu-cell").then(e.bind(null,"52a0"))},s=function(){return e.e("components/custom/cu-cell-group").then(e.bind(null,"13d0"))},l={components:{cuPanel:c,cuCell:r,cuCellGroup:s,uniList:i,uniListItem:o},data:function(){return{title:"员工管理",dataList:[]}},onLoad:function(){},onShow:function(){n.getStorageSync("userInfo")||n.reLaunch({url:"/pages/my/login/login"}),this.loadData()},methods:{handleAdd:function(){n.navigateTo({url:"/pages/my/user/useradd"})},handleEdit:function(t){n.navigateTo({url:"/pages/my/user/useredit"})},handleNavbarClickLeft:function(){n.navigateBack({delta:1})},handleForbiddenChanage:function(n){this.setUserLock(n.currentTarget.id,n.detail.value)},loadData:function(){var n=this;(0,a.tokenpost)(u.api.GetUserList).then(function(t){200==t.status&&"0000"==t.data.returnCode?n.dataList=t.data.data.resultList:n.$api.msg(t.data.returnMessage),n.loading=!1}).catch(function(t){n.loading=!1,n.$api.msg("请求失败fail")})},setUserLock:function(n,t){var e=this,i={userid:n,isdelete:t};(0,a.tokenpost)(u.api.SaveUserStatus,i).then(function(n){200==n.status&&"0000"==n.data.returnCode?e.$api.msg("操作成功！"):e.$api.msg(n.data.returnMessage),e.loading=!1}).catch(function(n){e.loading=!1,e.$api.msg("请求失败fail")})}}};t.default=l}).call(this,e("543d")["default"])}},[["5d5c","common/runtime","common/vendor"]]]);