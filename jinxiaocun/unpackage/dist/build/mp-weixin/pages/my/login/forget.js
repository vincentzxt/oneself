(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/login/forget"],{"175b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"9daa"))},a={data:function(){return{loading:!1,stop:!1,miao:60,loginname:"",mobile:"",code:"",status:0,password:"",new_password:"",re_new_password:"",title:"忘记密码"}},components:{uniIcon:i},methods:{login_action:function(){t.reLaunch({url:"/pages/my/login/login"})},handleLForget:function(){var n=this,e=this.loginname,i=this.password;if(0!=e.length)if(0!=i.length){var a={loginname:e,password:i};this.loading=!0;var o="http://120.210.132.94:5599/api/BseUser/Login";t.request({url:o,data:a,header:{"Content-Type":"application/json"},method:"POST",success:function(e){if(200==e.statusCode&&"0000"===e.data.returnCode){var i={token:e.data.data.token,exp:e.data.data.exp};t.setStorage({key:"userinfo",data:i,success:function(){setTimeout(function(){t.switchTab({url:"/pages/index/index"})},2e3)}})}else n.$api.msg(e.data.returnMessage)},fail:function(){n.$api.msg("请求失败fail")},complete:function(){n.loading=!1}})}else this.$api.msg("登录密码不能为空！");else this.$api.msg("登录账号不能为空！")},send:function(){var t=this.mobile;this.settime(60),11==t.length||this.$api.msg("手机号错误")},settime:function(t){var n=this,e=this,i=e.miao;0==i?(e.miao=0,this.stop=!1):setTimeout(function(){t--,n.miao=t,e.settime(t)},1e3)}}};n.default=a}).call(this,e("543d")["default"])},"3a8d":function(t,n,e){},"53f0":function(t,n,e){"use strict";e.r(n);var i=e("7751"),a=e("f860");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("5f13");var s,u=e("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=r.exports},"5f13":function(t,n,e){"use strict";var i=e("3a8d"),a=e.n(i);a.a},7751:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},"795b":function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");i(e("66fd"));var n=i(e("53f0"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},f860:function(t,n,e){"use strict";e.r(n);var i=e("175b"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a}},[["795b","common/runtime","common/vendor"]]]);