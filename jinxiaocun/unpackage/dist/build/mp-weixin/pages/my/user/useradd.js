(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/user/useradd"],{"1c99":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("94a7"),i=t("f45c"),u=function(){return t.e("components/custom/cu-panel").then(t.bind(null,"00f1"))},l=function(){return t.e("components/custom/cu-cell").then(t.bind(null,"52a0"))},s=function(){return t.e("components/custom/cu-cell-group").then(t.bind(null,"13d0"))},o=function(){return t.e("components/uni-list/uni-list").then(t.bind(null,"3140"))},r=function(){return t.e("components/uni-list-item/uni-list-item").then(t.bind(null,"d2d2"))},c={components:{cuPanel:u,cuCell:l,cuCellGroup:s,uniList:o,uniListItem:r},data:function(){return{reqData:{userid:0,loginname:"xuewei5",realname:"张三丰",telephone:"15827068282",email:"171720926@qq.com",password:"",re_password:"",roleid:0},loading:!1,title:"增加账号"}},onShow:function(){this.loadRole()},methods:{handleSexChanage:function(e){this.reqData.sex=e.detail.value},handleRoleChanage:function(e){this.reqData.roleid=e.detail.value},handleNavbarClickLeft:function(){e.navigateBack({delta:1})},loadRole:function(){var e=this,n={currentPage:1};(0,a.tokenpost)(i.api.GetRoleList,n).then(function(n){200==n.status&&"0000"==n.data.returnCode?console.log(n.data.data.resultList):e.$api.msg(n.data.returnMessage),e.loading=!1}).catch(function(n){e.loading=!1,e.$api.msg("请求失败fail")})},handleSubmit:function(){var n=this,t=this.reqData,u=t.userid,l=t.loginname,s=t.realname,o=t.telephone,r=t.email,c=t.password,d=t.re_password,f=t.roleid;if(0!=l.length)if(0!=s.length)if(0!=c.length)if(0!=d.length)if(c==d)if(11==o.length)if(0!=r.length){var g={userid:u,loginname:l,realname:s,telephone:o,email:r,password:c,roleid:f};this.loading=!0,(0,a.tokenpost)(i.api.SaveUser,g).then(function(t){200==t.status&&"0000"==t.data.returnCode?(n.$api.msg(t.data.returnMessage),e.navigateBack({delta:1})):200==t.status&&"402"==t.data.returnCode?(n.$api.msg(t.data.returnMessage),e.reLaunch({url:"/pages/my/login/login"})):n.$api.msg(t.data.returnMessage),n.loading=!1}).catch(function(e){n.loading=!1,n.$api.msg("请求失败fail")})}else this.$api.msg("电子邮箱不能为空！");else this.$api.msg("手机号码不正确！");else this.$api.msg("两次密码不一致！");else this.$api.msg("重复密码不能为空！");else this.$api.msg("登录密码不能为空！");else this.$api.msg("姓名不能为空！");else this.$api.msg("登录账号不能为空！")}}};n.default=c}).call(this,t("543d")["default"])},"220a":function(e,n,t){"use strict";t.r(n);var a=t("1c99"),i=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);n["default"]=i.a},"753b":function(e,n,t){},9729:function(e,n,t){"use strict";t.r(n);var a=t("b449"),i=t("220a");for(var u in i)"default"!==u&&function(e){t.d(n,e,function(){return i[e]})}(u);t("d8eb");var l,s=t("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"4efaa8b4",null,!1,a["a"],l);n["default"]=o.exports},b449:function(e,n,t){"use strict";var a,i=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",function(){return i}),t.d(n,"c",function(){return u}),t.d(n,"a",function(){return a})},d8eb:function(e,n,t){"use strict";var a=t("753b"),i=t.n(a);i.a},dbb3:function(e,n,t){"use strict";(function(e){t("fdae"),t("921b");a(t("66fd"));var n=a(t("9729"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["dbb3","common/runtime","common/vendor"]]]);