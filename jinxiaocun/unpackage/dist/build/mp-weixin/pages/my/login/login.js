(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/login/login"],{2790:function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");a(e("66fd"));var n=a(e("985e"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"2faa":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("94a7"),i=e("f45c"),o=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"9daa"))},s={data:function(){return{loading:!1,stop:!1,miao:60,loginname:"",mobile:"",code:"",status:0,password:"",new_password:"",re_new_password:"",title:"登录"}},components:{uniIcon:o},methods:{reg_action:function(){t.reLaunch({url:"/pages/my/login/reg"})},forget_action:function(){t.reLaunch({url:"/pages/my/login/forget"})},handleLogin:function(){var n=this,e=this.loginname,o=this.password;if(0!=e.length)if(0!=o.length){var s={loginname:e,password:o};this.loading=!0,(0,a.post)(i.api.login,s).then(function(e){if(200==e.status&&"0000"==e.data.returnCode){var a={token:e.data.data.token,exp:e.data.data.exp,userId:e.data.data.userId};t.setStorage({key:"userInfo",data:a,success:function(){t.switchTab({url:"/pages/index/index"})}})}else n.$api.msg(e.data.returnMessage);n.loading=!1}).catch(function(t){n.loading=!1,n.$api.msg("请求失败fail")})}else this.$api.msg("登录密码不能为空！");else this.$api.msg("登录账号不能为空！")},send:function(){var t=this.mobile;this.settime(60),11==t.length||this.$api.msg("手机号错误")},settime:function(t){var n=this,e=this,a=e.miao;0==a?(e.miao=0,this.stop=!1):setTimeout(function(){t--,n.miao=t,e.settime(t)},1e3)}}};n.default=s}).call(this,e("543d")["default"])},"985e":function(t,n,e){"use strict";e.r(n);var a=e("de2e"),i=e("dd33");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("c546");var s,u=e("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"be0e08a4",null,!1,a["a"],s);n["default"]=r.exports},a6b0:function(t,n,e){},c546:function(t,n,e){"use strict";var a=e("a6b0"),i=e.n(a);i.a},dd33:function(t,n,e){"use strict";e.r(n);var a=e("2faa"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},de2e:function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return a})}},[["2790","common/runtime","common/vendor"]]]);