(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/login/reg"],{"0ede":function(t,e,n){"use strict";n.r(e);var i=n("7151"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},1599:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},"2c8b":function(t,e,n){"use strict";(function(t){n("fdae"),n("921b");i(n("66fd"));var e=i(n("7147"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},7147:function(t,e,n){"use strict";n.r(e);var i=n("1599"),o=n("0ede");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("d1ea");var s,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"387f23ad",null,!1,i["a"],s);e["default"]=u.exports},7151:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("94a7"),o=n("f45c"),a=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"9daa"))},s={data:function(){return{loading:!1,stop:!1,miao:60,loginname:"",telephone:"",code:"",password:"",re_password:"",title:"注册",promoterid:0}},components:{uniIcon:a},onLoad:function(){t.getStorageSync("promoterid")?(this.promoterid=t.getStorageSync("promoterid"),console.log(this.promoterid)):console.log("没有推荐人")},methods:{handleNavbarClickLeft:function(){t.switchTab({url:"/pages/my/my"})},login_action:function(){t.reLaunch({url:"/pages/my/login/login"})},handleReg:function(){var e=this,n=this.loginname,a=this.password,s=this.telephone,r=this.re_password,u=this.promoterid;if(0!=n.length)if(0!=a.length)if(0!=r.length)if(a==r)if(11==s.length){var c={loginname:n,password:a,telephone:s,promoterid:u};this.loading=!0,(0,i.post)(o.api.Regist,c).then(function(n){if(200==n.status&&"0000"==n.data.returnCode){var i={token:n.data.data.token,exp:n.data.data.exp,userId:n.data.data.userId};t.setStorage({key:"userInfo",data:i,success:function(){t.switchTab({url:"/pages/index/index"})}})}else e.$api.msg(n.data.returnMessage);e.loading=!1}).catch(function(t){e.loading=!1,e.$api.msg("请求失败fail")})}else this.$api.msg("手机号码不正确！");else this.$api.msg("两次密码不一致！");else this.$api.msg("重复密码不能为空！");else this.$api.msg("登录密码不能为空！");else this.$api.msg("登录账号不能为空！")},send:function(){var t=this.mobile;this.settime(60),11==t.length||this.$api.msg("手机号错误")},settime:function(t){var e=this,n=this,i=n.miao;0==i?(n.miao=0,this.stop=!1):setTimeout(function(){t--,e.miao=t,n.settime(t)},1e3)}}};e.default=s}).call(this,n("543d")["default"])},ce36:function(t,e,n){},d1ea:function(t,e,n){"use strict";var i=n("ce36"),o=n.n(i);o.a}},[["2c8b","common/runtime","common/vendor"]]]);