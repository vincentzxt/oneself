(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/user/useredit","components/custom/cu-loading"],{1226:function(e,t,n){"use strict";var a=n("d551"),i=n.n(a);i.a},"37ab":function(e,t,n){"use strict";(function(e){n("fdae"),n("921b");a(n("66fd"));var t=a(n("d0f2"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},5088:function(e,t,n){"use strict";n.r(t);var a=n("8287"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},"80af":function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a})},8287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};t.default=a},"9e90":function(e,t,n){},a8d7:function(e,t,n){"use strict";n.r(t);var a=n("c925"),i=n("5088");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("1226");var u,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"48bbf381",null,!1,a["a"],u);t["default"]=s.exports},c925:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a})},d0f2:function(e,t,n){"use strict";n.r(t);var a=n("80af"),i=n("d3cb");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("f1b3");var u,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"68c0888d",null,!1,a["a"],u);t["default"]=s.exports},d3cb:function(e,t,n){"use strict";n.r(t);var a=n("f19f"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},d551:function(e,t,n){},f19f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("94a7"),i=(o(n("a8d7")),n("f45c"));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(){return n.e("components/custom/cu-panel").then(n.bind(null,"00f1"))},r=function(){return n.e("components/custom/cu-cell").then(n.bind(null,"52a0"))},s=function(){return n.e("components/custom/cu-cell-group").then(n.bind(null,"13d0"))},l=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"3140"))},c=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},d={components:{cuPanel:u,cuCell:r,cuCellGroup:s,uniList:l,uniListItem:c},data:function(){return{reqData:{userid:0,loginname:"",realname:"",telephone:"",email:"",password:"",roleid:0},rolelist:[],userId:0,loading:!1,title:"编辑账号"}},onShow:function(){this.loadRole()},onLoad:function(e){this.userId=e.userid,this.loadData()},methods:{handleSexChanage:function(e){this.reqData.sex=e.detail.value},handleRoleChanage:function(e){this.reqData.roleid=e.detail.value,console.log(this.reqData.roleid)},handleNavbarClickLeft:function(){e.navigateBack({delta:1})},loadRole:function(){var e=this,t={pageIndex:1,pageRows:-1};(0,a.tokenpost)(i.api.GetRoleList,t).then(function(t){200==t.status&&"0000"==t.data.returnCode?e.rolelist=t.data.data.resultList:e.$api.msg(t.data.returnMessage)}).catch(function(t){e.$api.msg("请求失败fail")})},loadData:function(){var e=this;this.$refs.loading.open();var t={userId:this.userId};(0,a.tokenpost)(i.api.GetUserInfoByUserId+"?userId="+this.userId,t).then(function(t){200==t.status?"0000"==t.data.returnCode?e.reqData={userid:t.data.data.userid,loginname:t.data.data.loginname,realname:t.data.data.realname,telephone:t.data.data.telephone,email:t.data.data.email,roleid:t.data.data.roleid}:(e.$api.msg(t.data.returnMessage),e.reqData={loginname:"",realname:"",telephone:"",companyname:"",expiredate:"",daycount:0,ordercount:"0"}):e.$api.msg(t.data.returnMessage),e.$refs.loading.close()}).catch(function(t){e.$refs.loading.close(),e.$api.msg("请求失败fail")})},handleSubmit:function(){var t=this,n=this.reqData,o=n.userid,u=n.loginname,r=n.realname,s=n.telephone,l=n.email,c=n.password,d=n.roleid;if(0!=u.length)if(0!=r.length)if(11==s.length)if(0!=l.length){var f={};f=""==c?{userid:o,loginname:u,realname:r,telephone:s,email:l,roleid:d}:{userid:o,loginname:u,realname:r,telephone:s,email:l,password:c,roleid:d},this.loading=!0,(0,a.tokenpost)(i.api.SaveUser,f).then(function(n){200==n.status&&"0000"==n.data.returnCode?(t.$api.msg(n.data.returnMessage),e.navigateBack({delta:1})):200==n.status&&"402"==n.data.returnCode?(t.$api.msg(n.data.returnMessage),e.reLaunch({url:"/pages/my/login/login"})):t.$api.msg(n.data.returnMessage),t.loading=!1}).catch(function(e){t.loading=!1,t.$api.msg("请求失败fail")})}else this.$api.msg("电子邮箱不能为空！");else this.$api.msg("手机号码不正确！");else this.$api.msg("姓名不能为空！");else this.$api.msg("登录账号不能为空！")}}};t.default=d}).call(this,n("543d")["default"])},f1b3:function(e,t,n){"use strict";var a=n("9e90"),i=n.n(a);i.a}},[["37ab","common/runtime","common/vendor"]]]);