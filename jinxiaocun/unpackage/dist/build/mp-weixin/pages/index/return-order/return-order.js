(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/return-order/return-order"],{"42b5":function(t,e,a){"use strict";a.r(e);var i=a("479b"),n=a("e2c7");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("7b0a");var u,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"4b2007e2",null,!1,i["a"],u);e["default"]=c.exports},"479b":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=(t._self._c,{type:"c-product",color:"#3dc57a",size:20}),i={type:"c-search",color:"#69c0ff",size:20},n={type:"c-right",color:"#ffa268",size:20},s={type:"c-right",color:"#ffa268",size:20},u={type:"delete",color:"#ef5a62",size:"20"},r={type:"delete",color:"#ef5a62",size:"20"};t.$mp.data=Object.assign({},{$root:{a0:a,a1:i,a2:n,a3:s,a4:u,a5:r}})},s=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return i})},"51dd":function(t,e,a){"use strict";(function(t){a("fdae"),a("921b");i(a("66fd"));var e=i(a("42b5"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"638e":function(t,e,a){},"7b0a":function(t,e,a){"use strict";var i=a("638e"),n=a.n(i);n.a},e2c7:function(t,e,a){"use strict";a.r(e);var i=a("e2fc"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},e2fc:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("88ed"),n=function(){return a.e("components/custom/cu-search-bar").then(a.bind(null,"c2fa"))},s=function(){return a.e("components/uni-popup/uni-popup").then(a.bind(null,"4395"))},u=function(){return a.e("components/custom/cu-panel").then(a.bind(null,"00f1"))},r=function(){return a.e("components/custom/cu-cell").then(a.bind(null,"52a0"))},c=function(){return a.e("components/uni-list/uni-list").then(a.bind(null,"3140"))},o=function(){return a.e("components/uni-list-item/uni-list-item").then(a.bind(null,"d2d2"))},l=function(){return a.e("components/uni-number-box/uni-number-box").then(a.bind(null,"67c3"))},h={components:{cuSearchBar:n,uniPopup:s,cuPanel:u,cuCell:r,uniList:c,uniListItem:o,uniNumberBox:l},data:function(){return{currentUnitDatas:null,currentUnitSearchDatas:null,searchCurrentUnit:!1,businessType:0,purchaseReqData:{contactunitid:"",contactunitname:"",productList:[],totalCount:0,totalPrice:0},salesReqData:{contactunitid:"",contactunitname:"",productList:[],totalCount:0,totalPrice:0},showModal:!1,title:"退货单",curSelectPruduct:{},checkedUnit:0,disableSubmit:!0,maxNum:0,submitText:"收款"}},onShow:function(){this.currentUnitDatas=t.getStorageSync("currentUnitList"),this.currentUnitSearchDatas=this.currentUnitDatas;var e=getCurrentPages(),a=e[e.length-1];a.data.commandType&&("success"==a.data.commandType?(this.purchaseReqData={contactunitid:"",contactunitname:"",productList:[],totalPrice:0},this.salesReqData={contactunitid:"",contactunitname:"",productList:[],totalPrice:0}):a.data.productList&&(0==this.businessType?this.purchaseReqData.productList=a.data.productList:this.salesReqData.productList=a.data.productList))},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleTypeChange:function(t){this.businessType=t.detail.value,0==this.businessType?(this.salesReqData={contactunitid:"",contactunitname:"",productList:[],totalCount:0,totalPrice:0},this.submitText="收款"):(this.purchaseReqData={contactunitid:"",contactunitname:"",productList:[],totalCount:0,totalPrice:0},this.submitText="付款")},handleSearchCurrentUnit:function(t){t.value?(this.currentUnitSearchDatas=this.currentUnitDatas.filter(function(e){return-1!==e.contactunitname.indexOf(t.value)||-1!==e.querycode.indexOf(t.value)||-1!==e.bseContactUnitContactModels[0].telephone.indexOf(t.value)}),this.searchCurrentUnit=!0):(this.currentUnitSearchDatas=this.currentUnitDatas,this.searchCurrentUnit=!1)},handleSelectCurrentUnit:function(t){0==this.businessType?(this.purchaseReqData.contactunitname=t.contactunitname,this.purchaseReqData.contactunitid=t.contactunitid):(this.salesReqData.contactunitname=t.contactunitname,this.salesReqData.contactunitid=t.contactunitid),this.searchCurrentUnit=!1,this.$refs.sc.cancel()},handleShowPopup:function(t){this.curSelectPruduct=(0,i.cloneObj)(t),this.$nextTick(function(){0==this.businessType?(this.maxNum=t.qty,this.$refs.purchasePopup.open()):(this.maxNum=t.salesqty,this.$refs.salePopup.open())})},handleEdit:function(){if(0==this.businessType){var t=!0,e=!1,a=void 0;try{for(var i,n=this.purchaseReqData.productList[Symbol.iterator]();!(t=(i=n.next()).done);t=!0){var s=i.value;s.productid==this.curSelectPruduct.productid&&(s.qty=this.curSelectPruduct.qty)}}catch(d){e=!0,a=d}finally{try{t||null==n.return||n.return()}finally{if(e)throw a}}}else{var u=!0,r=!1,c=void 0;try{for(var o,l=this.salesReqData.productList[Symbol.iterator]();!(u=(o=l.next()).done);u=!0){var h=o.value;h.productid==this.curSelectPruduct.productid&&(h.salesqty=this.curSelectPruduct.salesqty)}}catch(d){r=!0,c=d}finally{try{u||null==l.return||l.return()}finally{if(r)throw c}}}this.curSelectPruduct={},this.maxNum=0,this.$nextTick(function(){0==this.businessType?this.$refs.purchasePopup.close():this.$refs.salePopup.close()})},handleQtyChange:function(t){this.curSelectPruduct&&(0==this.businessType?this.curSelectPruduct.qty=t:this.curSelectPruduct.salesqty=t)},handleSelectQty:function(t){this.curSelectPruduct&&(0==this.businessType?this.curSelectPruduct.qty=t:this.curSelectPruduct.salesqty=t)},handleDelete:function(t){0==this.businessType?(this.purchaseReqData.totalPrice=parseFloat(this.purchaseReqData.totalPrice-t.qty*parseFloat(t.purchaseunitprice)).toFixed(2),this.purchaseReqData.productList=this.purchaseReqData.productList.filter(function(e){return e.productid!==t.productid})):(this.salesReqData.totalPrice=parseFloat(this.salesReqData.totalPrice-t.salesqty*parseFloat(t.salesunitprice)).toFixed(2),this.salesReqData.productList=this.salesReqData.productList.filter(function(e){return e.productid!==t.productid}))},handleNext:function(){0==this.businessType?t.navigateTo({url:"./payment/payment?reqData="+JSON.stringify(this.purchaseReqData)+"&businessType="+this.businessType}):t.navigateTo({url:"./payment/payment?reqData="+JSON.stringify(this.salesReqData)+"&businessType="+this.businessType})}},watch:{"purchaseReqData.productList":{handler:function(t){if(this.purchaseReqData.totalPrice=0,this.purchaseReqData.totalCount=0,t&&t.length>0){var e=!0,a=!1,i=void 0;try{for(var n,s=t[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var u=n.value;this.purchaseReqData.totalPrice+=u.qty*parseFloat(u.purchaseunitprice),this.purchaseReqData.totalCount+=u.qty}}catch(r){a=!0,i=r}finally{try{e||null==s.return||s.return()}finally{if(a)throw i}}this.purchaseReqData.totalPrice=parseFloat(this.purchaseReqData.totalPrice).toFixed(2)}},deep:!0},"salesReqData.productList":{handler:function(t){if(this.salesReqData.totalPrice=0,this.salesReqData.totalCount=0,t&&t.length>0){var e=!0,a=!1,i=void 0;try{for(var n,s=t[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var u=n.value;this.salesReqData.totalPrice+=u.salesqty*parseFloat(u.salesunitprice),this.salesReqData.totalCount+=u.salesqty}}catch(r){a=!0,i=r}finally{try{e||null==s.return||s.return()}finally{if(a)throw i}}this.salesReqData.totalPrice=parseFloat(this.salesReqData.totalPrice).toFixed(2)}},deep:!0},purchaseReqData:{handler:function(t){t.contactunitid&&t.productList.length>0&&t.totalPrice?t.productList.some(function(t){return 0==t.purchaseunitprice})?this.disableSubmit=!0:this.disableSubmit=!1:this.disableSubmit=!0},deep:!0},salesReqData:{handler:function(t){t.contactunitid&&t.productList.length>0&&t.totalPrice?t.productList.some(function(t){return 0==t.salesunitprice})?this.disableSubmit=!0:this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=h}).call(this,a("543d")["default"])}},[["51dd","common/runtime","common/vendor"]]]);