(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/sale/sale"],{"07dd":function(t,e,n){"use strict";n.r(e);var u=n("aca6"),r=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=r.a},"3a22":function(t,e,n){},"4f20":function(t,e,n){"use strict";var u,r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return u})},"502c":function(t,e,n){"use strict";n.r(e);var u=n("4f20"),r=n("07dd");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("70f7");var c,a=n("f0c5"),o=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,"27d54d38",null,!1,u["a"],c);e["default"]=o.exports},"70f7":function(t,e,n){"use strict";var u=n("3a22"),r=n.n(u);r.a},"924b":function(t,e,n){"use strict";(function(t){n("fdae"),n("921b");u(n("66fd"));var e=u(n("502c"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},aca6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return n.e("components/uni-search-bar/uni-search-bar").then(n.bind(null,"112b"))},r=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"4395"))},i=function(){return n.e("components/custom/cu-panel").then(n.bind(null,"00f1"))},c=function(){return n.e("components/custom/cu-cell").then(n.bind(null,"52a0"))},a=function(){return n.e("components/custom/cu-cell-group").then(n.bind(null,"13d0"))},o=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"3140"))},s=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},l=function(){return n.e("components/uni-number-box/uni-number-box").then(n.bind(null,"67c3"))},h={components:{uniSearchBar:u,uniPopup:r,cuPanel:i,cuCell:c,cuCellGroup:a,uniList:o,uniListItem:s,uniNumberBox:l},data:function(){return{currentUnitDatas:null,currentUnitSearchDatas:null,productDatas:null,productSearchDatas:null,searchCurrentUnit:!1,searchProduct:!1,reqData:{contactunitid:"",contactunitname:"",telephone:"",productList:[],totalPrice:0},showModal:!1,title:"销售",curUnit:"",curSelectPruduct:null,checkedUnit:0,disableSubmit:!0}},onShow:function(){this.currentUnitDatas=t.getStorageSync("currentUnitList"),this.productDatas=t.getStorageSync("productList"),this.currentUnitSearchDatas=this.currentUnitDatas,this.productSearchDatas=this.productDatas},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleSearchCurrentUnit:function(t){t.value?(this.currentUnitSearchDatas=this.currentUnitDatas.filter(function(e){return-1!==e.contactunitname.indexOf(t.value)||-1!==e.querycode.indexOf(t.value)||-1!==e.bseContactUnitContactModels[0].telephone.indexOf(t.value)}),this.searchCurrentUnit=!0):(this.currentUnitSearchDatas=this.currentUnitDatas,this.searchCurrentUnit=!1)},handleSearchProduct:function(t){t.value?(this.productSearchDatas=this.productDatas.filter(function(e){return-1!==e.productname.indexOf(t.value)||-1!==e.querycode.indexOf(t.value)}),this.searchProduct=!0):(this.productSearchDatas=this.productDatas,this.searchProduct=!1)},handleSelectCurrentUnit:function(t){this.reqData.contactunitname=t.contactunitname,this.reqData.contactunitid=t.contactunitid,this.reqData.telephone=t.bseContactUnitContactModels[0].telephone,this.searchCurrentUnit=!1,this.$refs.sc.clear()},handleSelectProduct:function(t){var e=!1,n=!0,u=!1,r=void 0;try{for(var i,c=this.reqData.productList[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var a=i.value;a.querycode==t.querycode&&(a.num++,e=!0)}}catch(o){u=!0,r=o}finally{try{n||null==c.return||c.return()}finally{if(u)throw r}}e||(this.$set(t,"num",1),this.curUnit=t.unit,this.reqData.productList.push(t)),this.searchProduct=!1,this.$refs.sp.clear(),this.curSelectPruduct=t,this.$nextTick(function(){this.$refs.popup.open()})},handleShowPopup:function(t){this.curSelectPruduct=t,this.$nextTick(function(){this.$refs.popup.open()})},handleEdit:function(){var t=!0,e=!1,n=void 0;try{for(var u,r=this.reqData.productList[Symbol.iterator]();!(t=(u=r.next()).done);t=!0){var i=u.value;i.code==this.curSelectPruduct.code&&(i.price=this.curSelectPruduct.price,i.num=this.curSelectPruduct.num,i.unit=this.curSelectPruduct.unit)}}catch(c){e=!0,n=c}finally{try{t||null==r.return||r.return()}finally{if(e)throw n}}this.curSelectPruduct=null,this.$nextTick(function(){this.$refs.popup.close()})},handleNumChange:function(t){this.curSelectPruduct&&(this.curSelectPruduct.num=t)},handleUnitChange:function(t){console.log(t),console.log(this.curSelectPruduct),this.checkedUnit=t.detail.value,0==this.checkedUnit?this.curSelectPruduct.unit=this.curSelectPruduct.unit:this.curSelectPruduct.subunit=this.curSelectPruduct.subunit},handleDelete:function(t){this.reqData.totalPrice=parseFloat(this.reqData.totalPrice-t.num*parseFloat(t.price)).toFixed(2),this.reqData.productList=this.reqData.productList.filter(function(e){return e.id!==t.id})},handleNext:function(){t.navigateTo({url:"./payment/payment?reqData="+JSON.stringify(this.reqData)})}},watch:{"reqData.productList":{handler:function(t){if(this.reqData.totalPrice=0,t&&t.length>0){var e=!0,n=!1,u=void 0;try{for(var r,i=t[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var c=r.value;this.reqData.totalPrice+=c.num*parseFloat(c.price)}}catch(a){n=!0,u=a}finally{try{e||null==i.return||i.return()}finally{if(n)throw u}}this.reqData.totalPrice=parseFloat(this.reqData.totalPrice).toFixed(2)}},deep:!0},reqData:{handler:function(t){t.contactunitname&&t.productList.length>0&&t.totalPrice?this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=h}).call(this,n("543d")["default"])}},[["924b","common/runtime","common/vendor"]]]);