<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/user/useredit"],{1320:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("5b2d"),i=t("5ac3"),l=function(){return t.e("components/custom/cu-panel").then(t.bind(null,"5d4a"))},o=function(){return t.e("components/custom/cu-cell").then(t.bind(null,"03ed"))},s=function(){return t.e("components/custom/cu-cell-group").then(t.bind(null,"4743"))},u=function(){return t.e("components/uni-list/uni-list").then(t.bind(null,"f8ed"))},r=function(){return t.e("components/uni-list-item/uni-list-item").then(t.bind(null,"3ce5"))},c={components:{cuPanel:l,cuCell:o,cuCellGroup:s,uniList:u,uniListItem:r},data:function(){return{reqData:{userid:0,loginname:"",realname:"",telephone:"",email:"",password:"",re_password:"",roleid:0},loading:!1,title:"编辑账号"}},onShow:function(){this.loadRole()},onLoad:function(){},methods:{handleSexChanage:function(e){this.reqData.sex=e.detail.value},handleRoleChanage:function(e){this.reqData.roleid=e.detail.value},handleNavbarClickLeft:function(){e.navigateBack({delta:1})},loadRole:function(){var e=this,n={pageIndex:1,pageRows:-1};(0,a.tokenpost)(i.api.GetRoleList,n).then(function(n){200==n.status&&"0000"==n.data.returnCode?console.log(n.data.data.resultList):e.$api.msg(n.data.returnMessage),e.loading=!1}).catch(function(n){e.loading=!1,e.$api.msg("请求失败fail")})},handleSubmit:function(){var n=this,t=this.reqData,l=t.userid,o=t.loginname,s=t.realname,u=t.telephone,r=t.email,c=t.password,d=t.re_password,f=t.roleid;if(0!=o.length)if(0!=s.length)if(0!=c.length)if(0!=d.length)if(c==d)if(11==u.length)if(0!=r.length){var g={userid:l,loginname:o,realname:s,telephone:u,email:r,password:c,roleid:f};this.loading=!0,(0,a.tokenpost)(i.api.SaveUser,g).then(function(t){200==t.status&&"0000"==t.data.returnCode?(n.$api.msg(t.data.returnMessage),e.navigateBack({delta:1})):200==t.status&&"402"==t.data.returnCode?(n.$api.msg(t.data.returnMessage),e.reLaunch({url:"/pages/my/login/login"})):n.$api.msg(t.data.returnMessage),n.loading=!1}).catch(function(e){n.loading=!1,n.$api.msg("请求失败fail")})}else this.$api.msg("电子邮箱不能为空！");else this.$api.msg("手机号码不正确！");else this.$api.msg("两次密码不一致！");else this.$api.msg("重复密码不能为空！");else this.$api.msg("登录密码不能为空！");else this.$api.msg("姓名不能为空！");else this.$api.msg("登录账号不能为空！")}}};n.default=c}).call(this,t("543d")["default"])},"2cb5":function(e,n,t){"use strict";var a=t("2e1c"),i=t.n(a);i.a},"2e1c":function(e,n,t){},"70b2":function(e,n,t){"use strict";t.r(n);var a=t("cf53"),i=t("bf46");for(var l in i)"default"!==l&&function(e){t.d(n,e,function(){return i[e]})}(l);t("2cb5");var o=t("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"ec281ed6",null);n["default"]=s.exports},"91cd":function(e,n,t){"use strict";(function(e){t("5545"),t("921b");a(t("66fd"));var n=a(t("70b2"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},bf46:function(e,n,t){"use strict";t.r(n);var a=t("1320"),i=t.n(a);for(var l in a)"default"!==l&&function(e){t.d(n,e,function(){return a[e]})}(l);n["default"]=i.a},cf53:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i})}},[["91cd","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/user/useredit"],{"08fc":function(e,n,t){"use strict";var a=t("a502"),i=t.n(a);i.a},"37ab":function(e,n,t){"use strict";(function(e){t("fdae"),t("921b");a(t("66fd"));var n=a(t("d0f2"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a502:function(e,n,t){},c0af:function(e,n,t){"use strict";var a,i=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return i}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return a})},d0f2:function(e,n,t){"use strict";t.r(n);var a=t("c0af"),i=t("d3cb");for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);t("08fc");var u,l=t("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"7d4e0969",null,!1,a["a"],u);n["default"]=s.exports},d3cb:function(e,n,t){"use strict";t.r(n);var a=t("f19f"),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=i.a},f19f:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("94a7"),i=t("f45c"),o=function(){return t.e("components/custom/cu-panel").then(t.bind(null,"00f1"))},u=function(){return t.e("components/custom/cu-cell").then(t.bind(null,"52a0"))},l=function(){return t.e("components/custom/cu-cell-group").then(t.bind(null,"13d0"))},s=function(){return t.e("components/uni-list/uni-list").then(t.bind(null,"3140"))},r=function(){return t.e("components/uni-list-item/uni-list-item").then(t.bind(null,"d2d2"))},c={components:{cuPanel:o,cuCell:u,cuCellGroup:l,uniList:s,uniListItem:r},data:function(){return{reqData:{userid:0,loginname:"",realname:"",telephone:"",email:"",password:"",re_password:"",roleid:0},loading:!1,title:"编辑账号"}},onShow:function(){this.loadRole()},onLoad:function(){},methods:{handleSexChanage:function(e){this.reqData.sex=e.detail.value},handleRoleChanage:function(e){this.reqData.roleid=e.detail.value},handleNavbarClickLeft:function(){e.navigateBack({delta:1})},loadRole:function(){var e=this,n={pageIndex:1,pageRows:-1};(0,a.tokenpost)(i.api.GetRoleList,n).then(function(n){200==n.status&&"0000"==n.data.returnCode?console.log(n.data.data.resultList):e.$api.msg(n.data.returnMessage),e.loading=!1}).catch(function(n){e.loading=!1,e.$api.msg("请求失败fail")})},handleSubmit:function(){var n=this,t=this.reqData,o=t.userid,u=t.loginname,l=t.realname,s=t.telephone,r=t.email,c=t.password,d=t.re_password,f=t.roleid;if(0!=u.length)if(0!=l.length)if(0!=c.length)if(0!=d.length)if(c==d)if(11==s.length)if(0!=r.length){var g={userid:o,loginname:u,realname:l,telephone:s,email:r,password:c,roleid:f};this.loading=!0,(0,a.tokenpost)(i.api.SaveUser,g).then(function(t){200==t.status&&"0000"==t.data.returnCode?(n.$api.msg(t.data.returnMessage),e.navigateBack({delta:1})):200==t.status&&"402"==t.data.returnCode?(n.$api.msg(t.data.returnMessage),e.reLaunch({url:"/pages/my/login/login"})):n.$api.msg(t.data.returnMessage),n.loading=!1}).catch(function(e){n.loading=!1,n.$api.msg("请求失败fail")})}else this.$api.msg("电子邮箱不能为空！");else this.$api.msg("手机号码不正确！");else this.$api.msg("两次密码不一致！");else this.$api.msg("重复密码不能为空！");else this.$api.msg("登录密码不能为空！");else this.$api.msg("姓名不能为空！");else this.$api.msg("登录账号不能为空！")}}};n.default=c}).call(this,t("543d")["default"])}},[["37ab","common/runtime","common/vendor"]]]);
>>>>>>> d9bea62689cb495bf28b81e1ee13c55bbda74e56