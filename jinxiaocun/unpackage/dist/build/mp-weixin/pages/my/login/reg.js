(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/login/reg","components/uni-popup/uni-popup"],{"0a86":function(t,n,e){"use strict";var i=e("caed"),o=e.n(i);o.a},"0ede":function(t,n,e){"use strict";e.r(n);var i=e("7151"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=o.a},2373:function(t,n,e){"use strict";var i={"uni-transition":()=>e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},o=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return s}),e.d(n,"a",function(){return i})},"2c8b":function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");i(e("66fd"));var n=i(e("7147"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},4395:function(t,n,e){"use strict";e.r(n);var i=e("2373"),o=e("4777");for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e("0a86");var a,r=e("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"3e46c635",null,!1,i["a"],a);n["default"]=u.exports},4517:function(t,n,e){},4777:function(t,n,e){"use strict";e.r(n);var i=e("55ce"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=o.a},"55ce":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},o={name:"UniPopup",components:{uniTransition:i},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=o},7147:function(t,n,e){"use strict";e.r(n);var i=e("e763"),o=e("0ede");for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e("a4ef");var a,r=e("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0db60773",null,!1,i["a"],a);n["default"]=u.exports},7151:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("94a7"),o=e("f45c"),s=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"9daa"))},a=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"fe49"))},r={data:function(){return{loading:!1,stop:!1,miao:60,codeText:"获取验证码",code_status:!1,loginname:"",telephone:"",verificationCode:"",password:"",re_password:"",title:"注册",promoterid:0}},components:{uniIcon:s,uniIcons:a},onLoad:function(){t.getStorageSync("promoterid")?(this.promoterid=t.getStorageSync("promoterid"),console.log("推荐人"+this.promoterid)):console.log("没有推荐人")},methods:{handleNavbarClickLeft:function(){t.switchTab({url:"/pages/my/my"})},login_action:function(){t.navigateTo({url:"/pages/my/login/login"})},handleReg:function(){var n=this,e=this.loginname,s=this.password,a=this.telephone,r=this.re_password,u=this.promoterid,c=this.verificationCode;if(0!=e.length)if(11==a.length)if(0!=c.length)if(0!=s.length)if(0!=r.length)if(s==r){var l={loginname:e,password:s,telephone:a,verificationCode:c,promoterid:u};this.loading=!0,(0,i.post)(o.api.Regist,l).then(function(e){if(200==e.status&&"0000"==e.data.returnCode){var i={token:e.data.data.token,exp:e.data.data.exp,userId:e.data.data.userId};t.setStorageSync("islogin","1"),t.setStorage({key:"userInfo",data:i,success:function(){t.switchTab({url:"/pages/my/my"})}})}else t.setStorageSync("islogin","0"),n.$api.msg(e.data.returnMessage);n.loading=!1}).catch(function(e){t.setStorageSync("islogin","0"),n.loading=!1,n.$api.msg("请求失败fail")})}else this.$api.msg("两次密码不一致！");else this.$api.msg("重复密码不能为空！");else this.$api.msg("登录密码不能为空！");else this.$api.msg("手机验证码不能为空！");else this.$api.msg("手机号码不正确！");else this.$api.msg("登录账号不能为空！")},send:function(){var t=this,n=this.telephone;if(11==n.length){this.code_status=!0;var e={telephone:this.telephone,sendType:1};(0,i.post)(o.api.GetSmsCode,e).then(function(n){200==n.status&&"0000"==n.data.returnCode?t.settime(60):(t.$api.msg(n.data.returnMessage),t.code_status=!1)}).catch(function(n){t.$api.msg("请求失败fail")})}else this.$api.msg("请输入手机号！")},settime:function(t){var n=this,e=this.miao;0!=e?setTimeout(function(){t--,n.miao=t,n.codeText=n.miao+"秒后重新获取",n.settime(t)},1e3):(this.code_status=!1,this.codeText="获取验证码",this.miao=60)}}};n.default=r}).call(this,e("543d")["default"])},a4ef:function(t,n,e){"use strict";var i=e("4517"),o=e.n(i);o.a},caed:function(t,n,e){},e763:function(t,n,e){"use strict";var i={"uni-icon":()=>e.e("components/uni-icon/uni-icon").then(e.bind(null,"9daa")),"uni-icons":()=>Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"fe49"))},o=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return s}),e.d(n,"a",function(){return i})}},[["2c8b","common/runtime","common/vendor"]]]);