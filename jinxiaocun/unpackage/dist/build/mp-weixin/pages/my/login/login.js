(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/login/login"],{"09b4":function(n,t,e){"use strict";var a=e("31d3"),i=e.n(a);i.a},2790:function(n,t,e){"use strict";(function(n){e("fdae"),e("921b");a(e("66fd"));var t=a(e("985e"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"2faa":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("94a7"),i=e("f45c"),o=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"9daa"))},s={data:function(){return{loading:!1,stop:!1,miao:60,loginname:"",mobile:"",code:"",status:0,password:"",new_password:"",re_new_password:"",title:"登录"}},components:{uniIcon:o},methods:{reg_action:function(){n.reLaunch({url:"/pages/my/login/reg"})},forget_action:function(){n.reLaunch({url:"/pages/my/login/forget"})},handleLogin:function(){var t=this,e=this.loginname,o=this.password;if(0!=e.length)if(0!=o.length){var s={loginname:e,password:o};this.loading=!0,(0,a.post)(i.api.login,s).then(function(e){if(200==e.status&&"0000"==e.data.returnCode){var a={token:e.data.data.token,exp:e.data.data.exp};n.setStorage({key:"userInfo",data:a,success:function(){n.switchTab({url:"/pages/index/index"})}})}else t.$api.msg(e.data.returnMessage);t.loading=!1}).catch(function(n){t.loading=!1,t.$api.msg("请求失败fail")})}else this.$api.msg("登录密码不能为空！");else this.$api.msg("登录账号不能为空！")},send:function(){var n=this.mobile;this.settime(60),11==n.length||this.$api.msg("手机号错误")},settime:function(n){var t=this,e=this,a=e.miao;0==a?(e.miao=0,this.stop=!1):setTimeout(function(){n--,t.miao=n,e.settime(n)},1e3)}}};t.default=s}).call(this,e("543d")["default"])},"31d3":function(n,t,e){},"8cc1":function(n,t,e){"use strict";var a,i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return a})},"985e":function(n,t,e){"use strict";e.r(t);var a=e("8cc1"),i=e("dd33");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("09b4");var s,u=e("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=c.exports},dd33:function(n,t,e){"use strict";e.r(t);var a=e("2faa"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=i.a}},[["2790","common/runtime","common/vendor"]]]);