(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/current-unit/edit/edit"],{"0a4b":function(t,e,a){"use strict";(function(t){a("fdae"),a("921b");n(a("66fd"));var e=n(a("51ee"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"28cd":function(t,e,a){"use strict";var n=a("3a41"),i=a.n(n);i.a},3078:function(t,e,a){"use strict";a.r(e);var n=a("846c"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},"3a41":function(t,e,a){},"51ee":function(t,e,a){"use strict";a.r(e);var n=a("881c"),i=a("3078");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("28cd");var r,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"83b057fa",null,!1,n["a"],r);e["default"]=o.exports},"846c":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("ca68"),i=a("f45c"),s=r(a("dcb1"));function r(t){return t&&t.__esModule?t:{default:t}}var c=function(){return a.e("components/custom/cu-panel").then(a.bind(null,"00f1"))},o=function(){return a.e("components/custom/cu-cell").then(a.bind(null,"52a0"))},d=function(){return Promise.all([a.e("common/vendor"),a.e("components/simple-address/simple-address")]).then(a.bind(null,"e30b"))},u={components:{cuPanel:c,cuCell:o,simpleAddress:d},data:function(){return{title:"修改客户&供应商",reqData:{contactunitid:0,contactunitname:"",contactunittype:3,querycode:"",province:"",city:"",district:"",address:"",bseContactUnitContactModels:[{contactunitid:"",contactid:"",contactname:"",telephone:"",email:""}],remark:""},verify:{contactunitname:{okVerify:!1,disVerMessage:!1,message:"往来单位名称不能为空"},telephone:{okVerify:!0,disVerMessage:!1,message:"号码长度不能超过11位"},email:{okVerify:!0,disVerMessage:!1,message:"请输入正确的邮箱地址"}},addressArray:[0,0,0],showArea:!0}},onLoad:function(t){var e=JSON.parse(t.item);this.reqData.contactunitid=e.contactunitid,this.reqData.contactunitname=e.contactunitname,this.reqData.contactunittype=e.contactunittype,this.reqData.querycode=e.querycode,this.reqData.province=e.province,this.reqData.city=e.city,this.reqData.district=e.district,this.reqData.address=e.address,this.reqData.bseContactUnitContactModels[0].contactunitid=this.reqData.contactunitid,this.reqData.bseContactUnitContactModels[0].contactid=e.bseContactUnitContactModels[0].contactid,this.reqData.bseContactUnitContactModels[0].contactname=e.bseContactUnitContactModels[0].contactname,this.reqData.bseContactUnitContactModels[0].telephone=e.bseContactUnitContactModels[0].telephone,this.reqData.bseContactUnitContactModels[0].email=e.bseContactUnitContactModels[0].email,this.reqData.remark=e.remark,this.addressArray.push(this.reqData.province),this.addressArray.push(this.reqData.city),this.addressArray.push(this.reqData.district),this.verify.contactunitname.okVerify=!0},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleTypeChange:function(t){this.reqData.contactunittype=t.detail.value},handleOpenAddress:function(){this.showArea=!1,this.$refs.address.open()},handleAddressChange:function(t){this.addressArray=[];var e=!0,a=!1,n=void 0;try{for(var i,s=t.label.split("-")[Symbol.iterator]();!(e=(i=s.next()).done);e=!0){var r=i.value;this.addressArray.push(r)}}catch(c){a=!0,n=c}finally{try{e||null==s.return||s.return()}finally{if(a)throw n}}this.reqData.province=this.addressArray[0],this.reqData.city=this.addressArray[1],this.reqData.district=this.addressArray[2],this.showArea=!0},handleAddressCancel:function(){this.showArea=!0},handleVerify:function(t){switch(t){case"contactunitname":this.reqData.contactunitname?(this.verify.contactunitname.okVerify=!0,this.verify.contactunitname.disVerMessage=!1):(this.verify.contactunitname.okVerify=!1,this.verify.contactunitname.disVerMessage=!0);break;case"telephone":this.reqData.bseContactUnitContactModels[0].telephone&&this.reqData.bseContactUnitContactModels[0].telephone.length>11?(this.verify.telephone.okVerify=!1,this.verify.telephone.disVerMessage=!0):(this.verify.telephone.okVerify=!0,this.verify.telephone.disVerMessage=!1);break;case"email":if(this.reqData.bseContactUnitContactModels[0].email){var e=/.+@.+\..+/;e.test(this.reqData.bseContactUnitContactModels[0].email)?(this.verify.email.okVerify=!0,this.verify.email.disVerMessage=!1):(this.verify.email.okVerify=!1,this.verify.email.disVerMessage=!0)}else this.verify.email.okVerify=!0,this.verify.email.disVerMessage=!1;break}},checkVerify:function(){var t=!0;for(var e in this.verify)this.verify[e].okVerify||(this.verify[e].disVerMessage=!0,t=!1);return t},handleSubmit:function(){var e=this;this.checkVerify()&&(this.$refs.loading.open(),(0,n.updateAll)(i.api.contactUnit,{model:this.reqData}).then(function(a){e.$refs.loading.close(),200==a.status&&"0000"==a.data.returnCode?s.default.getCurrentUnit().then(function(e){t.navigateBack({delta:1})}).catch(function(e){t.navigateBack({delta:1})}):t.showToast({icon:"none",title:a.data.returnMessage})}).catch(function(a){e.$refs.loading.close(),t.showToast({icon:"none",title:a})}))}}};e.default=u}).call(this,a("543d")["default"])},"881c":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})}},[["0a4b","common/runtime","common/vendor"]]]);