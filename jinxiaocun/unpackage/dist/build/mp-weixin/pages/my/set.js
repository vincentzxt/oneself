(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/set","components/custom/cu-loading"],{1226:function(n,t,e){"use strict";var a=e("d551"),o=e.n(a);o.a},"364a":function(n,t,e){"use strict";(function(n){e("fdae"),e("921b");a(e("66fd"));var t=a(e("6733"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},5088:function(n,t,e){"use strict";e.r(t);var a=e("8287"),o=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);t["default"]=o.a},6733:function(n,t,e){"use strict";e.r(t);var a=e("9283"),o=e("b914");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("ef5b");var i,c=e("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"78a0107f",null,!1,a["a"],i);t["default"]=r.exports},"7a27":function(n,t,e){},8287:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"cu-loading",data:function(){return{show:!1,text:"加载中...",mask:!0,click:!0}},methods:{preventTouchMove:function(){console.log("stop user scroll it!")},Mclose:function(){"false"!=this.click&&0!=this.click||(this.show=!1)},open:function(){this.show=!0},close:function(){this.show=!1}}};t.default=a},"871a":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("94a7"),o=e("f45c");u(e("a8d7"));function u(n){return n&&n.__esModule?n:{default:n}}var i=function(){return e.e("components/custom/cu-panel").then(e.bind(null,"00f1"))},c=function(){return e.e("components/custom/cu-cell").then(e.bind(null,"52a0"))},r=function(){return e.e("components/custom/cu-cell-group").then(e.bind(null,"13d0"))},l=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},s=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},f=function(){return e.e("components/invinbg-image-cropper/invinbg-image-cropper").then(e.bind(null,"8026"))},d={components:{cuPanel:i,cuCell:c,cuCellGroup:r,uniList:l,uniListItem:s,ImageCropper:f},data:function(){return{tempFilePath:"",cropFilePath:"",loading:!1,reqData:{companylogourl:"",companyname:"",contact:"",telephone:"",cusemail:"",email:"",address:""},title:"设置"}},onShow:function(){},onLoad:function(){this.loadData()},methods:{handleNavbarClickLeft:function(){n.navigateBack({delta:1})},upload:function(){var t=this;n.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(n){t.tempFilePath=n.tempFilePaths.shift()}})},confirm:function(t){var e=this,a=n.getStorageSync("userInfo").token,u={"content-type":"multipart/form-data",Authorization:"Bearer "+a};n.uploadFile({url:o.api.baseUrl+o.api.UploadImg,filePath:t.detail.tempFilePath,name:"file",header:u,formData:{},success:function(n){var t=JSON.parse(n.data);200==n.statusCode&&"0000"==t.returnCode?e.reqData.companylogourl=o.api.baseUrl+t.data.linkUrl:e.$api.msg(t.returnMessage)}})},cancel:function(){console.log("canceled")},loadData:function(){var n=this;console.log("kkk"),this.$refs.loading.open(),(0,a.tokenpost)(o.api.GetUserInfo).then(function(t){n.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode?(console.log(t.data.data),n.reqData=t.data.data):n.$api.msg(t.data.returnMessage)}).catch(function(t){n.$refs.loading.close(),n.$api.msg("请求失败fail")})},handleSubmit:function(){var t=this,e=this.reqData,u=e.companylogourl,i=e.companyname,c=e.contact,r=e.telephone,l=(e.email,e.cusemail),s=e.address,f={companylogourl:u,companyname:i,contact:c,telephone:r,email:l,address:s};this.loading=!0,(0,a.tokenpost)(o.api.CustomerSave,f).then(function(e){200==e.status&&"0000"==e.data.returnCode?(t.$api.msg("保存成功！"),n.$emit("changecompany",{msg:"company变化了"}),n.navigateBack({delta:1})):200==e.status&&"402"==e.data.returnCode?(t.$api.msg(e.data.returnMessage),n.reLaunch({url:"/pages/my/login/login"})):t.$api.msg(e.data.returnMessage),t.loading=!1}).catch(function(n){t.loading=!1,t.$api.msg("请求失败fail")})}}};t.default=d}).call(this,e("543d")["default"])},9283:function(n,t,e){"use strict";var a,o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return a})},a8d7:function(n,t,e){"use strict";e.r(t);var a=e("c925"),o=e("5088");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("1226");var i,c=e("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"48bbf381",null,!1,a["a"],i);t["default"]=r.exports},b914:function(n,t,e){"use strict";e.r(t);var a=e("871a"),o=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);t["default"]=o.a},c925:function(n,t,e){"use strict";var a,o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return a})},d551:function(n,t,e){},ef5b:function(n,t,e){"use strict";var a=e("7a27"),o=e.n(a);o.a}},[["364a","common/runtime","common/vendor"]]]);