(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/login/reg"],{"0ede":function(t,n,e){"use strict";e.r(n);var i=e("7151"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"2c8b":function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");i(e("66fd"));var n=i(e("7147"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},7147:function(t,n,e){"use strict";e.r(n);var i=e("dbb7"),o=e("0ede");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("f3af");var s,u=e("f0c5"),l=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=l.exports},7151:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"9daa"))},o={data:function(){return{loading:!1,stop:!1,miao:60,loginname:"",telephone:"",code:"",password:"",re_password:"",title:"注册"}},components:{uniIcon:i},methods:{login_action:function(){t.reLaunch({url:"/pages/my/login/login"})},handleReg:function(){var n=this,e=this.loginname,i=this.password,o=this.telephone,a=this.re_password;if(0!=e.length)if(0!=i.length)if(0!=a.length)if(11==o.length){var s={loginname:e,password:i,telephone:o};this.loading=!0;var u="http://120.210.132.94:5599/api/BseUser/Regist";t.request({url:u,data:s,header:{"Content-Type":"application/json"},method:"POST",success:function(t){200==t.statusCode&&"0000"===t.data.returnCode?(console.log(t.data.data),n.login_action()):n.$api.msg("登录失败")},fail:function(){n.$api.msg("请求失败fail")},complete:function(){n.loading=!1}})}else this.$api.msg("手机号码不正确！");else this.$api.msg("重复密码不能为空！");else this.$api.msg("登录密码不能为空！");else this.$api.msg("登录账号不能为空！")},send:function(){var t=this.mobile;this.settime(60),11==t.length||this.$api.msg("手机号错误")},settime:function(t){var n=this,e=this,i=e.miao;0==i?(e.miao=0,this.stop=!1):setTimeout(function(){t--,n.miao=t,e.settime(t)},1e3)}}};n.default=o}).call(this,e("543d")["default"])},dbb7:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},f3af:function(t,n,e){"use strict";var i=e("fe73"),o=e.n(i);o.a},fe73:function(t,n,e){}},[["2c8b","common/runtime","common/vendor"]]]);