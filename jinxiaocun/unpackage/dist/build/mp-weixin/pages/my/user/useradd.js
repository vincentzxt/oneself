(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/user/useradd"],{"1c99":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("94a7"),i=n("f45c"),l=function(){return n.e("components/custom/cu-panel").then(n.bind(null,"00f1"))},s=function(){return n.e("components/custom/cu-cell").then(n.bind(null,"52a0"))},o=function(){return n.e("components/custom/cu-cell-group").then(n.bind(null,"13d0"))},u=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"3140"))},r=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},c={components:{cuPanel:l,cuCell:s,cuCellGroup:o,uniList:u,uniListItem:r},data:function(){return{reqData:{userid:0,loginname:"",realname:"",telephone:"",email:"",password:"",re_password:"",roleid:0},rolelist:[],loading:!1,title:"增加账号"}},onShow:function(){this.loadRole()},methods:{handleSexChanage:function(e){this.reqData.sex=e.detail.value},handleRoleChanage:function(e){this.reqData.roleid=e.detail.value,console.log(this.reqData.roleid)},handleNavbarClickLeft:function(){e.navigateBack({delta:1})},loadRole:function(){var e=this,t={pageIndex:1,pageRows:-1};(0,a.tokenpost)(i.api.GetRoleList,t).then(function(t){200==t.status&&"0000"==t.data.returnCode?e.rolelist=t.data.data.resultList:e.$api.msg(t.data.returnMessage),e.loading=!1}).catch(function(t){e.loading=!1,e.$api.msg("请求失败fail")})},handleSubmit:function(){var t=this,n=this.reqData,l=n.userid,s=n.loginname,o=n.realname,u=n.telephone,r=n.email,c=n.password,d=n.re_password,f=n.roleid;if(0!=s.length)if(0!=o.length)if(0!=c.length)if(0!=d.length)if(c==d)if(11==u.length)if(0!=r.length)if(0!=f){var g={userid:l,loginname:s,realname:o,telephone:u,email:r,password:c,roleid:f};this.loading=!0,(0,a.tokenpost)(i.api.SaveUser,g).then(function(n){200==n.status&&"0000"==n.data.returnCode?(t.$api.msg(n.data.returnMessage),e.navigateBack({delta:1})):200==n.status&&"402"==n.data.returnCode?(t.$api.msg(n.data.returnMessage),e.reLaunch({url:"/pages/my/login/login"})):t.$api.msg(n.data.returnMessage),t.loading=!1}).catch(function(e){t.loading=!1,t.$api.msg("请求失败fail")})}else this.$api.msg("角色不能为空！");else this.$api.msg("电子邮箱不能为空！");else this.$api.msg("手机号码不正确！");else this.$api.msg("两次密码不一致！");else this.$api.msg("重复密码不能为空！");else this.$api.msg("登录密码不能为空！");else this.$api.msg("姓名不能为空！");else this.$api.msg("用户名不能为空！")}}};t.default=c}).call(this,n("543d")["default"])},"220a":function(e,t,n){"use strict";n.r(t);var a=n("1c99"),i=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);t["default"]=i.a},"737c":function(e,t,n){"use strict";var a=n("9cbd"),i=n.n(a);i.a},9729:function(e,t,n){"use strict";n.r(t);var a=n("a9f7"),i=n("220a");for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);n("737c");var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"921b4be8",null,!1,a["a"],s);t["default"]=u.exports},"9cbd":function(e,t,n){},a9f7:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},l=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return a})},dbb3:function(e,t,n){"use strict";(function(e){n("fdae"),n("921b");a(n("66fd"));var t=a(n("9729"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["dbb3","common/runtime","common/vendor"]]]);