(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/share/share"],{"01d9":function(e,t,n){"use strict";(function(e){n("5545"),n("921b");a(n("66fd"));var t=a(n("9c92"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"3d04":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("5b2d"),i=n("5ac3"),o={data:function(){return{title:"分享",userId:0,shareText:"微账通，邀请你一起体验！",href:"",image:"http://allchain.oss-cn-shanghai.aliyuncs.com/uploads/20190521/f57ebce8a72b823912904fe76eda0909.png",shareType:1,providerList:[],dataList:{}}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText,path:"/pages/index/index?promoterid="+e.getStorageSync("userInfo").userId,imageUrl:this.image,complete:this.shareSuccess}},onUnload:function(){},onLoad:function(){var t=this;this.loadData(),this.userId=e.getStorageSync("userInfo").userId,console.log(this.userId),e.getProvider({service:"share",success:function(e){console.log("success",e);for(var n=[],a=0;a<e.provider.length;a++)switch(e.provider[a]){case"weixin":n.push({name:"分享到微信好友",id:"weixin",sort:0}),n.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":n.push({name:"分享到新浪微博",id:"sinaweibo",sort:2});break;case"qq":n.push({name:"分享到QQ",id:"qq",sort:3});break;default:break}t.providerList=n.sort(function(e,t){return e.sort-t.sort})},fail:function(t){console.log("获取分享通道失败",t),e.showModal({content:"获取分享通道失败",showCancel:!1})}})},onShow:function(){},methods:{handleNavbarClickLeft:function(){e.navigateBack({delta:1})},loadData:function(){var e=this;(0,a.tokenpost)(i.api.GetCurrentActivity).then(function(t){200==t.status&&"0000"==t.data.returnCode?(e.shareText=t.data.data.activityexplain,e.image=t.data.data.imgurl):e.$api.msg(t.data.returnMessage),e.loading=!1}).catch(function(t){e.loading=!1,e.$api.msg("请求失败fail")})},shareSuccess:function(){console.log("成功2222222")}}};t.default=o}).call(this,n("543d")["default"])},"6d84":function(e,t,n){},"9b34":function(e,t,n){"use strict";n.r(t);var a=n("3d04"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},"9c92":function(e,t,n){"use strict";n.r(t);var a=n("c661"),i=n("9b34");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("ca01");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"351e310d",null);t["default"]=s.exports},c661:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},ca01:function(e,t,n){"use strict";var a=n("6d84"),i=n.n(a);i.a}},[["01d9","common/runtime","common/vendor"]]]);