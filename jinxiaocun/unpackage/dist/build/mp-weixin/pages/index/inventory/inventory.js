(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/inventory/inventory"],{"1dc5":function(t,e,u){},"4c39":function(t,e,u){"use strict";(function(t){u("fdae"),u("921b");n(u("66fd"));var e=n(u("7bd0"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,u("543d")["createPage"])},"7bd0":function(t,e,u){"use strict";u.r(e);var n=u("caf6"),c=u("af3b");for(var i in c)"default"!==i&&function(t){u.d(e,t,function(){return c[t]})}(i);u("8fb9");var r,s=u("f0c5"),a=Object(s["a"])(c["default"],n["b"],n["c"],!1,null,"3b1411d4",null,!1,n["a"],r);e["default"]=a.exports},"8fb9":function(t,e,u){"use strict";var n=u("1dc5"),c=u.n(n);c.a},af1a:function(t,e,u){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u("88ed"),c=u("f45c"),i=u("2642"),r=function(){return u.e("components/custom/cu-search-bar").then(u.bind(null,"c2fa"))},s=function(){return u.e("components/uni-popup/uni-popup").then(u.bind(null,"4395"))},a=function(){return u.e("components/custom/cu-panel").then(u.bind(null,"00f1"))},o=function(){return u.e("components/custom/cu-cell").then(u.bind(null,"52a0"))},d=function(){return u.e("components/uni-list/uni-list").then(u.bind(null,"3140"))},l=function(){return u.e("components/uni-list-item/uni-list-item").then(u.bind(null,"d2d2"))},h=function(){return u.e("components/uni-number-box/uni-number-box").then(u.bind(null,"67c3"))},f={components:{cuSearchBar:r,uniPopup:s,cuPanel:a,cuCell:o,uniList:d,uniListItem:l,uniNumberBox:h},data:function(){return{productDatas:null,productSearchDatas:null,searchProduct:!1,reqData:{order:{isprint:0,status:0},orderlist:[]},showModal:!1,title:"盘点",curSelectPruduct:{},checkedUnit:0,disableSubmit:!0}},onShow:function(){this.productDatas=t.getStorageSync("productList"),this.productSearchDatas=this.productDatas},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleSearchProduct:function(t){t.value?(this.productSearchDatas=this.productDatas.filter(function(e){return-1!==e.productname.indexOf(t.value)||-1!==e.querycode.indexOf(t.value)}),this.searchProduct=!0):(this.productSearchDatas=this.productDatas,this.searchProduct=!1)},handleSelectProduct:function(t){this.$set(this.curSelectPruduct,"productid",t.productid),this.$set(this.curSelectPruduct,"productname",t.productname),this.$set(this.curSelectPruduct,"unit",t.unit),this.$set(this.curSelectPruduct,"mainUnit",t.unit),this.$set(this.curSelectPruduct,"subUnit",t.subunit),this.$set(this.curSelectPruduct,"purchaseunitprice",t.price),this.$set(this.curSelectPruduct,"qty",1),this.$set(this.curSelectPruduct,"ismainunit",1),this.$set(this.curSelectPruduct,"unitmultiple",t.unitmultiple);var e=!1,u=!0,c=!1,i=void 0;try{for(var r,s=this.reqData.orderlist[Symbol.iterator]();!(u=(r=s.next()).done);u=!0){var a=r.value;a.productid==this.curSelectPruduct.productid&&(a.qty++,this.curSelectPruduct.qty=a.qty,e=!0)}}catch(o){c=!0,i=o}finally{try{u||null==s.return||s.return()}finally{if(c)throw i}}e||this.reqData.orderlist.push((0,n.cloneObj)(this.curSelectPruduct)),this.searchProduct=!1,this.$refs.sp.cancel(),this.$nextTick(function(){this.$refs.popup.open()})},handleShowPopup:function(t){this.curSelectPruduct=(0,n.cloneObj)(t),this.$nextTick(function(){this.$refs.popup.open()})},handleEdit:function(){var t=!0,e=!1,u=void 0;try{for(var n,c=this.reqData.orderlist[Symbol.iterator]();!(t=(n=c.next()).done);t=!0){var i=n.value;i.productid==this.curSelectPruduct.productid&&(i.qty=this.curSelectPruduct.qty,i.unit=this.curSelectPruduct.unit,i.ismainunit=this.curSelectPruduct.ismainunit,i.purchaseunitprice=this.curSelectPruduct.purchaseunitprice)}}catch(r){e=!0,u=r}finally{try{t||null==c.return||c.return()}finally{if(e)throw u}}this.curSelectPruduct={},this.$nextTick(function(){this.$refs.popup.close()})},handleqtyChange:function(t){this.curSelectPruduct&&(this.curSelectPruduct.qty=t)},handleSelectQty:function(t){this.curSelectPruduct&&(this.curSelectPruduct.qty=t)},handleUnitChange:function(t){1==t.detail.value?(this.curSelectPruduct.unit=this.curSelectPruduct.mainUnit,this.curSelectPruduct.ismainunit=1):(this.curSelectPruduct.unit=this.curSelectPruduct.subUnit,this.curSelectPruduct.ismainunit=0)},handleDelete:function(t){this.reqData.orderlist=this.reqData.orderlist.filter(function(e){return e.productid!==t.productid})},handleSubmit:function(){var e=this;this.$refs.loading.open(),(0,i.stockCheck)(c.api.stkStock,this.reqData).then(function(u){e.$refs.loading.close(),200==u.status&&"0000"==u.data.returnCode?(t.showToast({icon:"success",title:"提交成功"}),e.reqData={order:{isprint:0,status:0},orderlist:[]}):t.showToast({icon:"none",title:u.data.returnMessage})}).catch(function(u){e.$refs.loading.close(),t.showToast({icon:"none",title:u})})}},watch:{reqData:{handler:function(t){t.orderlist.length>0?this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=f}).call(this,u("543d")["default"])},af3b:function(t,e,u){"use strict";u.r(e);var n=u("af1a"),c=u.n(n);for(var i in n)"default"!==i&&function(t){u.d(e,t,function(){return n[t]})}(i);e["default"]=c.a},caf6:function(t,e,u){"use strict";var n,c=function(){var t=this,e=t.$createElement,u=(t._self._c,{type:"c-product",color:"#69c0ff",size:20}),n={type:"delete",color:"#f4613d",size:"25"};t.$mp.data=Object.assign({},{$root:{a0:u,a1:n}})},i=[];u.d(e,"b",function(){return c}),u.d(e,"c",function(){return i}),u.d(e,"a",function(){return n})}},[["4c39","common/runtime","common/vendor"]]]);