(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/login/login","components/uni-popup/uni-popup"],{"0a86":function(t,n,e){"use strict";var i=e("caed"),o=e.n(i);o.a},2373:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},2790:function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");i(e("66fd"));var n=i(e("985e"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"2faa":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("94a7"),o=e("f45c"),a=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"9daa"))},s={data:function(){return{loading:!1,stop:!1,miao:60,loginname:"",mobile:"",code:"",status:0,password:"",new_password:"",re_new_password:"",title:"登录"}},components:{uniIcon:a},onShow:function(){console.log("2213123123123")},methods:{handleNavbarClickLeft:function(){t.switchTab({url:"/pages/my/my"})},reg_action:function(){t.reLaunch({url:"/pages/my/login/reg"})},forget_action:function(){t.reLaunch({url:"/pages/my/login/forget"})},handleLogin:function(){var n=this,e=this.loginname,a=this.password;if(0!=e.length)if(0!=a.length){var s={loginname:e,password:a};this.loading=!0,(0,i.post)(o.api.login,s).then(function(e){if(200==e.status&&"0000"==e.data.returnCode){var i={token:e.data.data.token,exp:e.data.data.exp,userId:e.data.data.userId};t.setStorage({key:"userInfo",data:i,success:function(){t.switchTab({url:"/pages/index/index"})}})}else n.$api.msg(e.data.returnMessage);n.loading=!1}).catch(function(t){n.loading=!1,n.$api.msg("请求失败fail")})}else this.$api.msg("登录密码不能为空！");else this.$api.msg("登录账号不能为空！")}}};n.default=s}).call(this,e("543d")["default"])},4395:function(t,n,e){"use strict";e.r(n);var i=e("2373"),o=e("4777");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("0a86");var s,u=e("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"3e46c635",null,!1,i["a"],s);n["default"]=r.exports},4777:function(t,n,e){"use strict";e.r(n);var i=e("55ce"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"55ce":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-transition/uni-transition").then(e.bind(null,"e83d"))},o={name:"UniPopup",components:{uniTransition:i},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=o},7627:function(t,n,e){"use strict";var i=e("8cf5"),o=e.n(i);o.a},"78ac":function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},"8cf5":function(t,n,e){},"985e":function(t,n,e){"use strict";e.r(n);var i=e("78ac"),o=e("dd33");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("7627");var s,u=e("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"3b8e1dcf",null,!1,i["a"],s);n["default"]=r.exports},caed:function(t,n,e){},dd33:function(t,n,e){"use strict";e.r(n);var i=e("2faa"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a}},[["2790","common/runtime","common/vendor"]]]);