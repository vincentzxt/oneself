<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/return-order/return-order"],{1556:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"42c3":function(t,e,n){"use strict";n.r(e);var a=n("1556"),i=n("ffa7");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("8e8e");var s=n("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"160d9b46",null);e["default"]=r.exports},"80b6":function(t,e,n){},"8e8e":function(t,e,n){"use strict";var a=n("80b6"),i=n.n(a);i.a},edf8:function(t,e,n){"use strict";(function(t){n("5545"),n("921b");a(n("66fd"));var e=a(n("42c3"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f979:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("ee05"),i=function(){return n.e("components/custom/cu-search-bar").then(n.bind(null,"ab63"))},u=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"d403"))},s=function(){return n.e("components/custom/cu-panel").then(n.bind(null,"5d4a"))},r=function(){return n.e("components/custom/cu-cell").then(n.bind(null,"03ed"))},c=function(){return n.e("components/custom/cu-cell-group").then(n.bind(null,"4743"))},o=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"f8ed"))},l=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"3ce5"))},h=function(){return n.e("components/uni-number-box/uni-number-box").then(n.bind(null,"1485"))},d={components:{cuSearchBar:i,uniPopup:u,cuPanel:s,cuCell:r,cuCellGroup:c,uniList:o,uniListItem:l,uniNumberBox:h},data:function(){return{currentUnitDatas:null,currentUnitSearchDatas:null,searchCurrentUnit:!1,businessType:0,purchaseReqData:{contactunitid:"",contactunitname:"",productList:[],totalPrice:0},salesReqData:{contactunitid:"",contactunitname:"",productList:[],totalPrice:0},showModal:!1,title:"退货单",curSelectPruduct:{},checkedUnit:0,disableSubmit:!0,maxNum:0}},onShow:function(){this.currentUnitDatas=t.getStorageSync("currentUnitList"),this.currentUnitSearchDatas=this.currentUnitDatas;var e=getCurrentPages(),n=e[e.length-1];n.data.productList&&(0==this.businessType?this.purchaseReqData.productList=n.data.productList:this.salesReqData.productList=n.data.productList),console.log(this.salesReqData)},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleTypeChange:function(t){this.businessType=t.detail.value,0==this.businessType?this.salesReqData={contactunitid:"",contactunitname:"",productList:[],totalPrice:0}:this.purchaseReqData={contactunitid:"",contactunitname:"",productList:[],totalPrice:0}},handleSearchCurrentUnit:function(t){t.value?(this.currentUnitSearchDatas=this.currentUnitDatas.filter(function(e){return-1!==e.contactunitname.indexOf(t.value)||-1!==e.querycode.indexOf(t.value)||-1!==e.bseContactUnitContactModels[0].telephone.indexOf(t.value)}),this.searchCurrentUnit=!0):(this.currentUnitSearchDatas=this.currentUnitDatas,this.searchCurrentUnit=!1)},handleSelectCurrentUnit:function(t){0==this.businessType?(this.purchaseReqData.contactunitname=t.contactunitname,this.purchaseReqData.contactunitid=t.contactunitid):(this.salesReqData.contactunitname=t.contactunitname,this.salesReqData.contactunitid=t.contactunitid),this.searchCurrentUnit=!1,this.$refs.sc.cancel()},handleShowPopup:function(t){this.curSelectPruduct=(0,a.cloneObj)(t),this.$nextTick(function(){0==this.businessType?(this.maxNum=t.qty,this.$refs.purchasePopup.open()):(this.maxNum=t.salesqty,this.$refs.salePopup.open())})},handleEdit:function(){if(0==this.businessType){var t=!0,e=!1,n=void 0;try{for(var a,i=this.purchaseReqData.productList[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var u=a.value;u.productid==this.curSelectPruduct.productid&&(u.qty=this.curSelectPruduct.qty)}}catch(d){e=!0,n=d}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}}else{var s=!0,r=!1,c=void 0;try{for(var o,l=this.salesReqData.productList[Symbol.iterator]();!(s=(o=l.next()).done);s=!0){var h=o.value;h.productid==this.curSelectPruduct.productid&&(h.salesqty=this.curSelectPruduct.salesqty)}}catch(d){r=!0,c=d}finally{try{s||null==l.return||l.return()}finally{if(r)throw c}}}this.curSelectPruduct={},this.maxNum=0,this.$nextTick(function(){0==this.businessType?this.$refs.purchasePopup.close():this.$refs.salePopup.close()})},handleQtyChange:function(t){this.curSelectPruduct&&(0==this.businessType?this.curSelectPruduct.qty=t:this.curSelectPruduct.salesqty=t)},handleDelete:function(t){0==this.businessType?(this.purchaseReqData.totalPrice=parseFloat(this.purchaseReqData.totalPrice-t.qty*parseFloat(t.purchaseunitprice)).toFixed(2),this.purchaseReqData.productList=this.purchaseReqData.productList.filter(function(e){return e.productid!==t.productid})):(this.salesReqData.totalPrice=parseFloat(this.salesReqData.totalPrice-t.salesqty*parseFloat(t.salesunitprice)).toFixed(2),this.salesReqData.productList=this.salesReqData.productList.filter(function(e){return e.productid!==t.productid}))},handleNext:function(){0==this.businessType?t.navigateTo({url:"./payment/payment?reqData="+JSON.stringify(this.purchaseReqData)+"&businessType="+this.businessType}):t.navigateTo({url:"./payment/payment?reqData="+JSON.stringify(this.salesReqData)+"&businessType="+this.businessType})}},watch:{"purchaseReqData.productList":{handler:function(t){if(this.purchaseReqData.totalPrice=0,t&&t.length>0){var e=!0,n=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done);e=!0){var s=i.value;this.purchaseReqData.totalPrice+=s.qty*parseFloat(s.purchaseunitprice)}}catch(r){n=!0,a=r}finally{try{e||null==u.return||u.return()}finally{if(n)throw a}}this.purchaseReqData.totalPrice=parseFloat(this.purchaseReqData.totalPrice).toFixed(2)}},deep:!0},"salesReqData.productList":{handler:function(t){if(console.log(t),console.log("n"),this.salesReqData.totalPrice=0,t&&t.length>0){var e=!0,n=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done);e=!0){var s=i.value;this.salesReqData.totalPrice+=s.salesqty*parseFloat(s.salesunitprice)}}catch(r){n=!0,a=r}finally{try{e||null==u.return||u.return()}finally{if(n)throw a}}this.salesReqData.totalPrice=parseFloat(this.salesReqData.totalPrice).toFixed(2)}},deep:!0},purchaseReqData:{handler:function(t){t.contactunitid&&t.productList.length>0&&t.totalPrice?t.productList.some(function(t){return 0==t.purchaseunitprice})?this.disableSubmit=!0:this.disableSubmit=!1:this.disableSubmit=!0},deep:!0},salesReqData:{handler:function(t){t.contactunitid&&t.productList.length>0&&t.totalPrice?t.productList.some(function(t){return 0==t.salesunitprice})?this.disableSubmit=!0:this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=d}).call(this,n("543d")["default"])},ffa7:function(t,e,n){"use strict";n.r(e);var a=n("f979"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a}},[["edf8","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/return-order/return-order"],{"2f49":function(t,e,n){},"42b5":function(t,e,n){"use strict";n.r(e);var i=n("c88f"),a=n("e2c7");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("f062");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"581bf99e",null,!1,i["a"],s);e["default"]=c.exports},"51dd":function(t,e,n){"use strict";(function(t){n("fdae"),n("921b");i(n("66fd"));var e=i(n("42b5"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c88f:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return i})},e2c7:function(t,e,n){"use strict";n.r(e);var i=n("e2fc"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=a.a},e2fc:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("88ed"),a=function(){return n.e("components/custom/cu-search-bar").then(n.bind(null,"c2fa"))},u=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"4395"))},s=function(){return n.e("components/custom/cu-panel").then(n.bind(null,"00f1"))},r=function(){return n.e("components/custom/cu-cell").then(n.bind(null,"52a0"))},c=function(){return n.e("components/custom/cu-cell-group").then(n.bind(null,"13d0"))},o=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"3140"))},l=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},h=function(){return n.e("components/uni-number-box/uni-number-box").then(n.bind(null,"67c3"))},d={components:{cuSearchBar:a,uniPopup:u,cuPanel:s,cuCell:r,cuCellGroup:c,uniList:o,uniListItem:l,uniNumberBox:h},data:function(){return{currentUnitDatas:null,currentUnitSearchDatas:null,searchCurrentUnit:!1,businessType:0,purchaseReqData:{contactunitid:"",contactunitname:"",productList:[],totalPrice:0},salesReqData:{contactunitid:"",contactunitname:"",productList:[],totalPrice:0},showModal:!1,title:"退货单",curSelectPruduct:{},checkedUnit:0,disableSubmit:!0,maxNum:0}},onShow:function(){this.currentUnitDatas=t.getStorageSync("currentUnitList"),this.currentUnitSearchDatas=this.currentUnitDatas;var e=getCurrentPages(),n=e[e.length-1];n.data.productList&&(0==this.businessType?this.purchaseReqData.productList=n.data.productList:this.salesReqData.productList=n.data.productList),console.log(this.salesReqData)},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleTypeChange:function(t){this.businessType=t.detail.value,0==this.businessType?this.salesReqData={contactunitid:"",contactunitname:"",productList:[],totalPrice:0}:this.purchaseReqData={contactunitid:"",contactunitname:"",productList:[],totalPrice:0}},handleSearchCurrentUnit:function(t){t.value?(this.currentUnitSearchDatas=this.currentUnitDatas.filter(function(e){return-1!==e.contactunitname.indexOf(t.value)||-1!==e.querycode.indexOf(t.value)||-1!==e.bseContactUnitContactModels[0].telephone.indexOf(t.value)}),this.searchCurrentUnit=!0):(this.currentUnitSearchDatas=this.currentUnitDatas,this.searchCurrentUnit=!1)},handleSelectCurrentUnit:function(t){0==this.businessType?(this.purchaseReqData.contactunitname=t.contactunitname,this.purchaseReqData.contactunitid=t.contactunitid):(this.salesReqData.contactunitname=t.contactunitname,this.salesReqData.contactunitid=t.contactunitid),this.searchCurrentUnit=!1,this.$refs.sc.cancel()},handleShowPopup:function(t){this.curSelectPruduct=(0,i.cloneObj)(t),this.$nextTick(function(){0==this.businessType?(this.maxNum=t.qty,this.$refs.purchasePopup.open()):(this.maxNum=t.salesqty,this.$refs.salePopup.open())})},handleEdit:function(){if(0==this.businessType){var t=!0,e=!1,n=void 0;try{for(var i,a=this.purchaseReqData.productList[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var u=i.value;u.productid==this.curSelectPruduct.productid&&(u.qty=this.curSelectPruduct.qty)}}catch(d){e=!0,n=d}finally{try{t||null==a.return||a.return()}finally{if(e)throw n}}}else{var s=!0,r=!1,c=void 0;try{for(var o,l=this.salesReqData.productList[Symbol.iterator]();!(s=(o=l.next()).done);s=!0){var h=o.value;h.productid==this.curSelectPruduct.productid&&(h.salesqty=this.curSelectPruduct.salesqty)}}catch(d){r=!0,c=d}finally{try{s||null==l.return||l.return()}finally{if(r)throw c}}}this.curSelectPruduct={},this.maxNum=0,this.$nextTick(function(){0==this.businessType?this.$refs.purchasePopup.close():this.$refs.salePopup.close()})},handleQtyChange:function(t){this.curSelectPruduct&&(0==this.businessType?this.curSelectPruduct.qty=t:this.curSelectPruduct.salesqty=t)},handleDelete:function(t){0==this.businessType?(this.purchaseReqData.totalPrice=parseFloat(this.purchaseReqData.totalPrice-t.qty*parseFloat(t.purchaseunitprice)).toFixed(2),this.purchaseReqData.productList=this.purchaseReqData.productList.filter(function(e){return e.productid!==t.productid})):(this.salesReqData.totalPrice=parseFloat(this.salesReqData.totalPrice-t.salesqty*parseFloat(t.salesunitprice)).toFixed(2),this.salesReqData.productList=this.salesReqData.productList.filter(function(e){return e.productid!==t.productid}))},handleNext:function(){0==this.businessType?t.navigateTo({url:"./payment/payment?reqData="+JSON.stringify(this.purchaseReqData)+"&businessType="+this.businessType}):t.navigateTo({url:"./payment/payment?reqData="+JSON.stringify(this.salesReqData)+"&businessType="+this.businessType})}},watch:{"purchaseReqData.productList":{handler:function(t){if(this.purchaseReqData.totalPrice=0,t&&t.length>0){var e=!0,n=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done);e=!0){var s=a.value;this.purchaseReqData.totalPrice+=s.qty*parseFloat(s.purchaseunitprice)}}catch(r){n=!0,i=r}finally{try{e||null==u.return||u.return()}finally{if(n)throw i}}this.purchaseReqData.totalPrice=parseFloat(this.purchaseReqData.totalPrice).toFixed(2)}},deep:!0},"salesReqData.productList":{handler:function(t){if(console.log(t),console.log("n"),this.salesReqData.totalPrice=0,t&&t.length>0){var e=!0,n=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done);e=!0){var s=a.value;this.salesReqData.totalPrice+=s.salesqty*parseFloat(s.salesunitprice)}}catch(r){n=!0,i=r}finally{try{e||null==u.return||u.return()}finally{if(n)throw i}}this.salesReqData.totalPrice=parseFloat(this.salesReqData.totalPrice).toFixed(2)}},deep:!0},purchaseReqData:{handler:function(t){t.contactunitid&&t.productList.length>0&&t.totalPrice?t.productList.some(function(t){return 0==t.purchaseunitprice})?this.disableSubmit=!0:this.disableSubmit=!1:this.disableSubmit=!0},deep:!0},salesReqData:{handler:function(t){t.contactunitid&&t.productList.length>0&&t.totalPrice?t.productList.some(function(t){return 0==t.salesunitprice})?this.disableSubmit=!0:this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=d}).call(this,n("543d")["default"])},f062:function(t,e,n){"use strict";var i=n("2f49"),a=n.n(i);a.a}},[["51dd","common/runtime","common/vendor"]]]);
>>>>>>> d9bea62689cb495bf28b81e1ee13c55bbda74e56
