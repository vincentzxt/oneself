<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/current-unit/add/add"],{"060a":function(t,e,n){"use strict";n.r(e);var a=n("d904"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},"6b62":function(t,e,n){"use strict";(function(t){n("5545"),n("921b");a(n("66fd"));var e=a(n("af38"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},af38:function(t,e,n){"use strict";n.r(e);var a=n("e95b"),r=n("060a");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("b1a5");var c=n("2877"),u=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,"f0c77b9c",null);e["default"]=u.exports},b1a5:function(t,e,n){"use strict";var a=n("f7ac"),r=n.n(a);r.a},d904:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("e4ad"),r=n("5ac3"),i=c(n("0def"));function c(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/custom/cu-panel").then(n.bind(null,"5d4a"))},o=function(){return n.e("components/custom/cu-cell").then(n.bind(null,"03ed"))},d=function(){return n.e("components/custom/cu-cell-group").then(n.bind(null,"4743"))},s=function(){return Promise.all([n.e("common/vendor"),n.e("components/simple-address/simple-address")]).then(n.bind(null,"8ac5"))},l={components:{cuPanel:u,cuCell:o,cuCellGroup:d,simpleAddress:s},data:function(){return{title:"添加客户&供应商",reqData:{contactunitname:"",contactunittype:3,querycode:"",province:0,city:"",district:"",address:"",bseContactUnitContactModels:[{contactname:"",telephone:"",email:""}],remarks:""},disableSubmit:!0,addressArray:[0,0,0]}},onLoad:function(){},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleTypeChange:function(t){this.reqData.contactunittype=t.detail.value},handleOpenAddress:function(){this.$refs.address.open()},handleAddressChange:function(t){this.addressArray=[];var e=!0,n=!1,a=void 0;try{for(var r,i=t.label.split("-")[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var c=r.value;this.addressArray.push(c)}}catch(u){n=!0,a=u}finally{try{e||null==i.return||i.return()}finally{if(n)throw a}}this.reqData.province=this.addressArray[0],this.reqData.city=this.addressArray[1],this.reqData.district=this.addressArray[2]},handleSubmit:function(){(0,a.create)(r.api.contactUnit,{model:this.reqData}).then(function(e){200==e.status&&"0000"==e.data.returnCode?i.default.getCurrentUnit().then(function(e){t.navigateBack({delta:1})}).catch(function(e){t.navigateBack({delta:1})}):t.showToast({title:"添加失败"})}).catch(function(e){t.showToast({title:"添加失败"})})}},watch:{reqData:{handler:function(t){t.contactunitname?this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=l}).call(this,n("543d")["default"])},e95b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},f7ac:function(t,e,n){}},[["6b62","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/current-unit/add/add"],{"21c2":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"3e79":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("aba6"),r=n("f45c"),i=c(n("dcb1"));function c(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/custom/cu-panel").then(n.bind(null,"00f1"))},o=function(){return n.e("components/custom/cu-cell").then(n.bind(null,"52a0"))},d=function(){return n.e("components/custom/cu-cell-group").then(n.bind(null,"13d0"))},s=function(){return Promise.all([n.e("common/vendor"),n.e("components/simple-address/simple-address")]).then(n.bind(null,"e30b"))},l={components:{cuPanel:u,cuCell:o,cuCellGroup:d,simpleAddress:s},data:function(){return{title:"添加客户&供应商",reqData:{contactunitname:"",contactunittype:3,querycode:"",province:0,city:"",district:"",address:"",bseContactUnitContactModels:[{contactname:"",telephone:"",email:""}],remarks:""},disableSubmit:!0,addressArray:[0,0,0]}},onLoad:function(){},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleTypeChange:function(t){this.reqData.contactunittype=t.detail.value},handleOpenAddress:function(){this.$refs.address.open()},handleAddressChange:function(t){this.addressArray=[];var e=!0,n=!1,a=void 0;try{for(var r,i=t.label.split("-")[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var c=r.value;this.addressArray.push(c)}}catch(u){n=!0,a=u}finally{try{e||null==i.return||i.return()}finally{if(n)throw a}}this.reqData.province=this.addressArray[0],this.reqData.city=this.addressArray[1],this.reqData.district=this.addressArray[2]},handleSubmit:function(){(0,a.create)(r.api.contactUnit,{model:this.reqData}).then(function(e){200==e.status&&"0000"==e.data.returnCode?i.default.getCurrentUnit().then(function(e){t.navigateBack({delta:1})}).catch(function(e){t.navigateBack({delta:1})}):t.showToast({title:"添加失败"})}).catch(function(e){t.showToast({title:"添加失败"})})}},watch:{reqData:{handler:function(t){t.contactunitname?this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=l}).call(this,n("543d")["default"])},"44a2":function(t,e,n){"use strict";(function(t){n("fdae"),n("921b");a(n("66fd"));var e=a(n("541b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"47b8":function(t,e,n){},"541b":function(t,e,n){"use strict";n.r(e);var a=n("21c2"),r=n("93c9");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("ef40");var c,u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"70691ade",null,!1,a["a"],c);e["default"]=o.exports},"93c9":function(t,e,n){"use strict";n.r(e);var a=n("3e79"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},ef40:function(t,e,n){"use strict";var a=n("47b8"),r=n.n(a);r.a}},[["44a2","common/runtime","common/vendor"]]]);
>>>>>>> d9bea62689cb495bf28b81e1ee13c55bbda74e56
