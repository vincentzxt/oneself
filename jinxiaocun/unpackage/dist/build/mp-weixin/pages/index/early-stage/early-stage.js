(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/early-stage/early-stage"],{"1ada":function(t,e,u){},"235b":function(t,e,u){"use strict";u.r(e);var n=u("37fc"),i=u.n(n);for(var c in n)"default"!==c&&function(t){u.d(e,t,function(){return n[t]})}(c);e["default"]=i.a},"37fc":function(t,e,u){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u("88ed"),i=u("f45c"),c=u("aba6"),r=function(){return u.e("components/custom/cu-search-bar").then(u.bind(null,"c2fa"))},s=function(){return u.e("components/uni-popup/uni-popup").then(u.bind(null,"4395"))},a=function(){return u.e("components/custom/cu-panel").then(u.bind(null,"00f1"))},o=function(){return u.e("components/custom/cu-cell").then(u.bind(null,"52a0"))},l=function(){return u.e("components/uni-list/uni-list").then(u.bind(null,"3140"))},d=function(){return u.e("components/uni-list-item/uni-list-item").then(u.bind(null,"d2d2"))},h=function(){return u.e("components/uni-number-box/uni-number-box").then(u.bind(null,"67c3"))},f={components:{cuSearchBar:r,uniPopup:s,cuPanel:a,cuCell:o,uniList:l,uniListItem:d,uniNumberBox:h},data:function(){return{productDatas:null,productSearchDatas:null,searchProduct:!1,reqData:{order:{isprint:0,status:0},orderlist:[]},showModal:!1,title:"期初",curSelectPruduct:{},checkedUnit:0,disableSubmit:!0}},onShow:function(){this.productDatas=t.getStorageSync("productList"),this.productSearchDatas=this.productDatas},computed:{headerHeight:function(){return this.$headerHeight},mainHeight:function(){return this.$mainHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleSearchProduct:function(t){t.value?(this.productSearchDatas=this.productDatas.filter(function(e){return-1!==e.productname.indexOf(t.value)||-1!==e.querycode.indexOf(t.value)}),this.searchProduct=!0):(this.productSearchDatas=this.productDatas,this.searchProduct=!1)},handleSelectProduct:function(t){this.$set(this.curSelectPruduct,"productid",t.productid),this.$set(this.curSelectPruduct,"productname",t.productname),this.$set(this.curSelectPruduct,"unit",t.unit),this.$set(this.curSelectPruduct,"mainUnit",t.unit),this.$set(this.curSelectPruduct,"subUnit",t.subunit),this.$set(this.curSelectPruduct,"purchaseunitprice",t.price),this.$set(this.curSelectPruduct,"qty",1),this.$set(this.curSelectPruduct,"ismainunit",1),this.$set(this.curSelectPruduct,"unitmultiple",t.unitmultiple);var e=!1,u=!0,i=!1,c=void 0;try{for(var r,s=this.reqData.orderlist[Symbol.iterator]();!(u=(r=s.next()).done);u=!0){var a=r.value;a.productid==this.curSelectPruduct.productid&&(a.qty++,this.curSelectPruduct.qty=a.qty,e=!0)}}catch(o){i=!0,c=o}finally{try{u||null==s.return||s.return()}finally{if(i)throw c}}e||this.reqData.orderlist.push((0,n.cloneObj)(this.curSelectPruduct)),this.searchProduct=!1,this.$refs.sp.cancel(),this.$nextTick(function(){this.$refs.popup.open()})},handleShowPopup:function(t){this.curSelectPruduct=(0,n.cloneObj)(t),this.$nextTick(function(){this.$refs.popup.open()})},handleEdit:function(){var t=!0,e=!1,u=void 0;try{for(var n,i=this.reqData.orderlist[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var c=n.value;c.productid==this.curSelectPruduct.productid&&(c.qty=this.curSelectPruduct.qty,c.unit=this.curSelectPruduct.unit,c.ismainunit=this.curSelectPruduct.ismainunit,c.purchaseunitprice=this.curSelectPruduct.purchaseunitprice)}}catch(r){e=!0,u=r}finally{try{t||null==i.return||i.return()}finally{if(e)throw u}}this.curSelectPruduct={},this.$nextTick(function(){this.$refs.popup.close()})},handleqtyChange:function(t){this.curSelectPruduct&&(this.curSelectPruduct.qty=t)},handleSelectQty:function(t){this.curSelectPruduct&&(this.curSelectPruduct.qty=t)},handleUnitChange:function(t){1==t.detail.value?(this.curSelectPruduct.unit=this.curSelectPruduct.mainUnit,this.curSelectPruduct.ismainunit=1):(this.curSelectPruduct.unit=this.curSelectPruduct.subUnit,this.curSelectPruduct.ismainunit=0)},handleDelete:function(t){this.reqData.orderlist=this.reqData.orderlist.filter(function(e){return e.productid!==t.productid})},handleSubmit:function(){var e=this;this.$refs.loading.open(),(0,c.create)(i.api.stkStock,this.reqData).then(function(u){e.$refs.loading.close(),200==u.status&&"0000"==u.data.returnCode?(t.showToast({icon:"success",title:"提交成功"}),e.reqData={order:{isprint:0,status:0},orderlist:[]}):t.showToast({icon:"none",title:u.data.returnMessage})}).catch(function(u){e.$refs.loading.close(),t.showToast({icon:"none",title:u})})}},watch:{reqData:{handler:function(t){t.orderlist.length>0?this.disableSubmit=!1:this.disableSubmit=!0},deep:!0}}};e.default=f}).call(this,u("543d")["default"])},"4e2e":function(t,e,u){"use strict";var n,i=function(){var t=this,e=t.$createElement,u=(t._self._c,{type:"c-product",color:"#c4c6cb",size:20}),n={type:"delete",color:"#f4613d",size:"25"};t.$mp.data=Object.assign({},{$root:{a0:u,a1:n}})},c=[];u.d(e,"b",function(){return i}),u.d(e,"c",function(){return c}),u.d(e,"a",function(){return n})},"6e59":function(t,e,u){"use strict";var n=u("1ada"),i=u.n(n);i.a},"71e6":function(t,e,u){"use strict";u.r(e);var n=u("4e2e"),i=u("235b");for(var c in i)"default"!==c&&function(t){u.d(e,t,function(){return i[t]})}(c);u("6e59");var r,s=u("f0c5"),a=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"2a3db8ef",null,!1,n["a"],r);e["default"]=a.exports},"98e3":function(t,e,u){"use strict";(function(t){u("fdae"),u("921b");n(u("66fd"));var e=n(u("71e6"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,u("543d")["createPage"])}},[["98e3","common/runtime","common/vendor"]]]);