(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/sale/sale"],{"07dd":function(t,e,n){"use strict";n.r(e);var i=n("aca6"),u=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=u.a},"2d64":function(t,e,n){"use strict";var i=n("b70c"),u=n.n(i);u.a},"502c":function(t,e,n){"use strict";n.r(e);var i=n("a06a"),u=n("07dd");for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);n("2d64");var r,a=n("f0c5"),s=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"74ba9bfc",null,!1,i["a"],r);e["default"]=s.exports},"924b":function(t,e,n){"use strict";(function(t){n("fdae"),n("921b");i(n("66fd"));var e=i(n("502c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},a06a:function(t,e,n){"use strict";var i,u=function(){var t=this,e=t.$createElement,n=(t._self._c,{type:"c-search",color:"#69c0ff",size:20}),i={type:"c-product",color:"#ffa268",size:20},u={type:"delete",color:"#f4613d",size:"25"};t.$mp.data=Object.assign({},{$root:{a0:n,a1:i,a2:u}})},c=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return i})},aca6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("88ed"),u=function(){return n.e("components/custom/cu-search-bar").then(n.bind(null,"c2fa"))},c=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"4395"))},r=function(){return n.e("components/custom/cu-panel").then(n.bind(null,"00f1"))},a=function(){return n.e("components/custom/cu-cell").then(n.bind(null,"52a0"))},s=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"3140"))},o=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"d2d2"))},l=function(){return n.e("components/uni-number-box/uni-number-box").then(n.bind(null,"67c3"))},d={components:{cuSearchBar:u,uniPopup:c,cuPanel:r,cuCell:a,uniList:s,uniListItem:o,uniNumberBox:l},data:function(){return{currentUnitDatas:null,currentUnitSearchDatas:null,productDatas:null,productSearchDatas:null,searchCurrentUnit:!1,searchProduct:!1,reqData:{contactunitid:"",contactunitname:"",telephone:"",productList:[],totalPrice:0},showModal:!1,title:"销售",curSelectPruduct:{},checkedUnit:0,disableSubmit:!0}},onShow:function(){this.currentUnitDatas=t.getStorageSync("currentUnitList"),this.productDatas=t.getStorageSync("productList"),this.currentUnitSearchDatas=this.currentUnitDatas,this.productSearchDatas=this.productDatas,this.reqData={contactunitid:"",contactunitname:"",telephone:"",productList:[],totalPrice:0}},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleSearchCurrentUnit:function(t){t.value?(this.currentUnitSearchDatas=this.currentUnitDatas.filter(function(e){return-1!==e.contactunitname.indexOf(t.value)||-1!==e.querycode.indexOf(t.value)||-1!==e.bseContactUnitContactModels[0].telephone.indexOf(t.value)}),this.searchCurrentUnit=!0):(this.currentUnitSearchDatas=this.currentUnitDatas,this.searchCurrentUnit=!1)},handleSearchProduct:function(t){t.value?(this.productSearchDatas=this.productDatas.filter(function(e){return-1!==e.productname.indexOf(t.value)||-1!==e.querycode.indexOf(t.value)}),this.searchProduct=!0):(this.productSearchDatas=this.productDatas,this.searchProduct=!1)},handleSelectCurrentUnit:function(t){this.reqData.contactunitname=t.contactunitname,this.reqData.contactunitid=t.contactunitid,this.reqData.telephone=t.bseContactUnitContactModels[0].telephone,this.searchCurrentUnit=!1,this.$refs.sc.cancel(),console.log(this.$refs.contactUnitName)},handleSelectProduct:function(t){this.$set(this.curSelectPruduct,"productid",t.productid),this.$set(this.curSelectPruduct,"productname",t.productname),this.$set(this.curSelectPruduct,"unit",t.unit),this.$set(this.curSelectPruduct,"mainUnit",t.unit),this.$set(this.curSelectPruduct,"subUnit",t.subunit),this.$set(this.curSelectPruduct,"price",t.price),this.$set(this.curSelectPruduct,"salesunitprice",""),this.$set(this.curSelectPruduct,"salesqty",1),this.$set(this.curSelectPruduct,"ismainunit",1),this.$set(this.curSelectPruduct,"unitmultiple",t.unitmultiple);var e=!1,n=!0,u=!1,c=void 0;try{for(var r,a=this.reqData.productList[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var s=r.value;s.productid==this.curSelectPruduct.productid&&(s.salesqty++,this.curSelectPruduct.salesqty=s.salesqty,e=!0)}}catch(o){u=!0,c=o}finally{try{n||null==a.return||a.return()}finally{if(u)throw c}}e||this.reqData.productList.push((0,i.cloneObj)(this.curSelectPruduct)),this.searchProduct=!1,this.$refs.sp.cancel(),this.$nextTick(function(){this.$refs.popup.open()})},handleShowPopup:function(t){this.curSelectPruduct=(0,i.cloneObj)(t),this.$nextTick(function(){this.$refs.popup.open()})},handleEdit:function(){var t=!0,e=!1,n=void 0;try{for(var i,u=this.reqData.productList[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var c=i.value;c.productid==this.curSelectPruduct.productid&&(c.salesqty=this.curSelectPruduct.salesqty,c.unit=this.curSelectPruduct.unit,c.ismainunit=this.curSelectPruduct.ismainunit,c.salesunitprice=this.curSelectPruduct.salesunitprice)}}catch(r){e=!0,n=r}finally{try{t||null==u.return||u.return()}finally{if(e)throw n}}this.curSelectPruduct={},this.$nextTick(function(){this.$refs.popup.close()})},handleSalesqtyChange:function(t){this.curSelectPruduct&&(this.curSelectPruduct.salesqty=t)},handleSelectQty:function(t){this.curSelectPruduct&&(this.curSelectPruduct.salesqty=t)},handleUnitChange:function(t){1==t.detail.value?(this.curSelectPruduct.unit=this.curSelectPruduct.mainUnit,this.curSelectPruduct.ismainunit=1):(this.curSelectPruduct.unit=this.curSelectPruduct.subUnit,this.curSelectPruduct.ismainunit=0)},handleDelete:function(t){this.reqData.totalPrice=parseFloat(this.reqData.totalPrice-t.salesqty*parseFloat(t.salesunitprice)).toFixed(2),this.reqData.productList=this.reqData.productList.filter(function(e){return e.productid!==t.productid})},handleNext:function(){t.navigateTo({url:"./payment/payment?reqData="+JSON.stringify(this.reqData)})}},watch:{"reqData.productList":{handler:function(t){if(this.reqData.totalPrice=0,t&&t.length>0){var e=!0,n=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(e=(u=c.next()).done);e=!0){var r=u.value;r.salesunitprice?this.reqData.totalPrice+=r.salesqty*parseFloat(r.salesunitprice):this.reqData.totalPrice+=0*r.salesqty}}catch(a){n=!0,i=a}finally{try{e||null==c.return||c.return()}finally{if(n)throw i}}this.reqData.totalPrice=parseFloat(this.reqData.totalPrice).toFixed(2)}},deep:!0},reqData:{handler:function(t){t.contactunitid&&t.productList.length>0&&t.totalPrice?t.productList.some(function(t){return 0==t.salesunitprice})?this.disableSubmit=!0:this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=d}).call(this,n("543d")["default"])},b70c:function(t,e,n){}},[["924b","common/runtime","common/vendor"]]]);