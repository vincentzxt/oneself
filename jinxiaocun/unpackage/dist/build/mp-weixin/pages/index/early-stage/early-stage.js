(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/early-stage/early-stage"],{"235b":function(t,e,i){"use strict";i.r(e);var r=i("37fc"),u=i.n(r);for(var c in r)"default"!==c&&function(t){i.d(e,t,function(){return r[t]})}(c);e["default"]=u.a},"37fc":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("88ed"),u=i("f45c"),c=i("aba6"),n=function(){return i.e("components/custom/cu-search-bar").then(i.bind(null,"c2fa"))},s=function(){return i.e("components/uni-popup/uni-popup").then(i.bind(null,"4395"))},a=function(){return i.e("components/custom/cu-panel").then(i.bind(null,"00f1"))},o=function(){return i.e("components/custom/cu-cell").then(i.bind(null,"52a0"))},d=function(){return i.e("components/uni-list/uni-list").then(i.bind(null,"3140"))},l=function(){return i.e("components/uni-list-item/uni-list-item").then(i.bind(null,"d2d2"))},h=function(){return i.e("components/uni-number-box/uni-number-box").then(i.bind(null,"67c3"))},f={components:{cuSearchBar:n,uniPopup:s,cuPanel:a,cuCell:o,uniList:d,uniListItem:l,uniNumberBox:h},data:function(){return{productDatas:null,productSearchDatas:null,searchProduct:!1,reqData:{order:{isprint:0,status:0},orderlist:[]},showModal:!1,title:"期初",curSelectPruduct:{},checkedUnit:0,verify:{orderList:{okVerify:!1,disVerMessage:!1,message:"至少选择一个产品"}},productListTag:!1}},onShow:function(){this.productDatas=t.getStorageSync("productList"),this.productSearchDatas=this.productDatas},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handlePriceBlur:function(){this.curSelectPruduct.salesunitprice&&(this.curSelectPruduct.salesunitprice=(0,r.floatFormat)(this.curSelectPruduct.salesunitprice))},handleSearchFocusProduct:function(){this.productListTag=!1,this.productSearchDatas=this.productDatas,this.searchProduct=!0},handleSearchClearProduct:function(){this.productListTag=!0,this.searchProduct=!1,this.$refs.sp.cancel()},handleSearchProduct:function(t){t.value?(this.productSearchDatas=this.productDatas.filter(function(e){return e.productname||(e.productname=""),e.querycode||(e.querycode=""),-1!==e.productname.indexOf(t.value)||-1!==e.querycode.toLowerCase().indexOf(t.value.toLowerCase())}),this.searchProduct=!0):this.productListTag?(this.productSearchDatas=[],this.searchProduct=!1):(this.productSearchDatas=this.productDatas,this.searchProduct=!0)},handleSelectProduct:function(t){this.$set(this.curSelectPruduct,"productid",t.productid),this.$set(this.curSelectPruduct,"productname",t.productname),this.$set(this.curSelectPruduct,"unit",t.unit),this.$set(this.curSelectPruduct,"mainUnit",t.unit),this.$set(this.curSelectPruduct,"subUnit",t.subunit),this.$set(this.curSelectPruduct,"purchaseunitprice",t.price),this.$set(this.curSelectPruduct,"qty",1),this.$set(this.curSelectPruduct,"ismainunit",1),this.$set(this.curSelectPruduct,"unitmultiple",t.unitmultiple),this.$set(this.curSelectPruduct,"isMultiUnit",t.isMultiUnit);var e=!1,i=!0,u=!1,c=void 0;try{for(var n,s=this.reqData.orderlist[Symbol.iterator]();!(i=(n=s.next()).done);i=!0){var a=n.value;a.productid==this.curSelectPruduct.productid&&(a.qty++,this.curSelectPruduct.qty=a.qty,e=!0)}}catch(o){u=!0,c=o}finally{try{i||null==s.return||s.return()}finally{if(u)throw c}}e||this.reqData.orderlist.push((0,r.cloneObj)(this.curSelectPruduct)),this.productListTag=!0,this.searchProduct=!1,this.$refs.sp.cancel(),this.handleVerify("orderList"),this.$nextTick(function(){this.$refs.popup.open()})},handleShowPopup:function(t){this.curSelectPruduct=(0,r.cloneObj)(t),this.$nextTick(function(){this.$refs.popup.open()})},handleEdit:function(){var t=!0,e=!1,i=void 0;try{for(var r,u=this.reqData.orderlist[Symbol.iterator]();!(t=(r=u.next()).done);t=!0){var c=r.value;c.productid==this.curSelectPruduct.productid&&(c.qty=this.curSelectPruduct.qty,c.unit=this.curSelectPruduct.unit,c.ismainunit=this.curSelectPruduct.ismainunit,c.purchaseunitprice=this.curSelectPruduct.purchaseunitprice)}}catch(n){e=!0,i=n}finally{try{t||null==u.return||u.return()}finally{if(e)throw i}}this.curSelectPruduct={},this.$nextTick(function(){this.$refs.popup.close()})},handleqtyChange:function(t){this.curSelectPruduct&&(this.curSelectPruduct.qty=t)},handleSelectQty:function(t){this.curSelectPruduct&&(this.curSelectPruduct.qty=t)},handleUnitChange:function(t){1==t.detail.value?(this.curSelectPruduct.unit=this.curSelectPruduct.mainUnit,this.curSelectPruduct.ismainunit=1):(this.curSelectPruduct.unit=this.curSelectPruduct.subUnit,this.curSelectPruduct.ismainunit=0)},handleDelete:function(t){this.reqData.orderlist=this.reqData.orderlist.filter(function(e){return e.productid!==t.productid}),this.handleVerify("orderList")},handleVerify:function(t){switch(t){case"orderList":0==this.reqData.orderlist.length?(this.verify.orderList.okVerify=!1,this.verify.orderList.disVerMessage=!0):(this.verify.orderList.okVerify=!0,this.verify.orderList.disVerMessage=!1);break}},checkVerify:function(){var t=!0;for(var e in this.verify)this.verify[e].okVerify||(this.verify[e].disVerMessage=!0,t=!1);return t},handleSubmit:function(){var e=this;this.checkVerify()&&(this.$refs.loading.open(),(0,c.create)(u.api.stkStock,this.reqData).then(function(i){e.$refs.loading.close(),200==i.status&&"0000"==i.data.returnCode?(t.showToast({icon:"success",title:"提交成功"}),e.reqData={order:{isprint:0,status:0},orderlist:[]}):t.showToast({icon:"none",title:i.data.returnMessage})}).catch(function(i){e.$refs.loading.close(),t.showToast({icon:"none",title:i})}))}},watch:{reqData:{handler:function(t){t.orderlist.length>0?this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=f}).call(this,i("543d")["default"])},"42f8":function(t,e,i){"use strict";var r=i("51b0"),u=i.n(r);u.a},"51b0":function(t,e,i){},"5f1b":function(t,e,i){"use strict";var r,u=function(){var t=this,e=t.$createElement,i=(t._self._c,{type:"c-product",color:"#c4c6cb",size:20}),r={type:"delete",color:"#f4613d",size:"25"};t.$mp.data=Object.assign({},{$root:{a0:i,a1:r}})},c=[];i.d(e,"b",function(){return u}),i.d(e,"c",function(){return c}),i.d(e,"a",function(){return r})},"71e6":function(t,e,i){"use strict";i.r(e);var r=i("5f1b"),u=i("235b");for(var c in u)"default"!==c&&function(t){i.d(e,t,function(){return u[t]})}(c);i("42f8");var n,s=i("f0c5"),a=Object(s["a"])(u["default"],r["b"],r["c"],!1,null,"5bb6ee98",null,!1,r["a"],n);e["default"]=a.exports},"98e3":function(t,e,i){"use strict";(function(t){i("fdae"),i("921b");r(i("66fd"));var e=r(i("71e6"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])}},[["98e3","common/runtime","common/vendor"]]]);