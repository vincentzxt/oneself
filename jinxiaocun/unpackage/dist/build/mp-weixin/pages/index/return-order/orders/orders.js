(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/return-order/orders/orders"],{"155c":function(t,e,a){"use strict";a.r(e);var r=a("5cbe"),n=a("5647");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("b1ed");var s,d=a("f0c5"),o=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"4adfa295",null,!1,r["a"],s);e["default"]=o.exports},"205c":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("f45c"),n=a("aba6"),i=a("88ed"),s=function(){return a.e("components/uni-search-bar/uni-search-bar").then(a.bind(null,"112b"))},d=function(){return a.e("components/uni-collapse/uni-collapse").then(a.bind(null,"8535"))},o=function(){return a.e("components/uni-collapse-item/uni-collapse-item").then(a.bind(null,"89dc"))},u={components:{uniSearchBar:s,uniCollapse:d,uniCollapseItem:o},data:function(){return{businessType:"",currentUnitId:"",title:"订单列表",datas:[],searchDatas:[]}},onLoad:function(t){var e=this;if(this.businessType=t.businessType,this.currentUnitId=t.currentUnitId,this.currentUnitId)if(this.$refs.loading.open(),"0"==this.businessType){var a={contactunitid:this.currentUnitId,billtype:1,pageIndex:1,pageRows:-1};(0,n.query)(r.api.purPurchaseOrder,a).then(function(t){e.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode&&(e.datas=(0,i.cloneObj)(t.data.data.resultList),e.searchDatas=e.datas)}).catch(function(t){e.$refs.loading.close()})}else{var s={contactunitid:this.currentUnitId,billtype:1,pageIndex:1,pageRows:-1};(0,n.query)(r.api.salesOrder,s).then(function(t){e.$refs.loading.close(),200==t.status&&"0000"==t.data.returnCode&&(e.datas=(0,i.cloneObj)(t.data.data.resultList),e.searchDatas=e.datas)}).catch(function(t){e.$refs.loading.close()})}},onShow:function(){},computed:{headerHeight:function(){return this.$headerIsSearchHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},getPurchaseOrderById:function(e,a){var i=this;this.$refs.loading.open(),(0,n.getForReturn)(r.api.purPurchaseOrder,e).then(function(r){if(i.$refs.loading.close(),200==r.status&&"0000"==r.data.returnCode&&(i.searchDatas=i.searchDatas.map(function(t){if(t.purchaseorderid==e&&!t.productList){var a=!0,n=!1,s=void 0;try{for(var d,o=r.data.data.detailModels[Symbol.iterator]();!(a=(d=o.next()).done);a=!0){var u=d.value;u.billid=u.purchaseorderdetailid,u.purchaseorderdetailid=0}}catch(c){n=!0,s=c}finally{try{a||null==o.return||o.return()}finally{if(n)throw s}}i.$set(t,"productList",r.data.data.detailModels)}return t}),i.datas=i.datas.map(function(t){return t.purchaseorderid!=e||t.productList||i.$set(t,"productList",r.data.data.detailModels),t}),"return"==a)){var n=getCurrentPages(),s=n[n.length-2];s.setData({commandType:"return",productList:r.data.data.detailModels}),t.navigateBack({delta:1})}}).catch(function(t){i.$refs.loading.close()})},getSaleOrderById:function(e,a){var i=this;this.$refs.loading.open(),(0,n.getForReturn)(r.api.salesOrder,e).then(function(r){if(i.$refs.loading.close(),200==r.status&&"0000"==r.data.returnCode&&(i.searchDatas=i.searchDatas.map(function(t){if(t.salesorderid==e&&!t.productList){var a=!0,n=!1,s=void 0;try{for(var d,o=r.data.data.detailModels[Symbol.iterator]();!(a=(d=o.next()).done);a=!0){var u=d.value;u.billid=u.salesorderdetailid,u.salesorderdetailid=0}}catch(c){n=!0,s=c}finally{try{a||null==o.return||o.return()}finally{if(n)throw s}}i.$set(t,"productList",r.data.data.detailModels)}return t}),i.datas=i.datas.map(function(t){return t.salesorderid!=e||t.productList||i.$set(t,"productList",r.data.data.detailModels),t}),"return"==a)){var n=getCurrentPages(),s=n[n.length-2];s.setData({commandType:"return",productList:r.data.data.detailModels}),t.navigateBack({delta:1})}}).catch(function(t){i.$refs.loading.close()})},handleOnArrow:function(t){t.productList||(0==this.businessType?this.getPurchaseOrderById(t.purchaseorderid,"load"):this.getSaleOrderById(t.salesorderid,"load"))},handleOnReturn:function(e){if(e.productList){var a=getCurrentPages(),r=a[a.length-2];r.setData({commandType:"return",productList:e.productList}),t.navigateBack({delta:1})}else 0==this.businessType?this.getPurchaseOrderById(e.purchaseorderid,"return"):this.getSaleOrderById(e.salesorderid,"return")},filterItem:function(t){return{name:t}},handleSearch:function(t){t.value?this.searchDatas=this.datas.filter(function(e){return-1!==String(e.amount).indexOf(t.value)||-1!==e.createtime.indexOf(t.value)}):this.searchDatas=this.datas}}};e.default=u}).call(this,a("543d")["default"])},3384:function(t,e,a){"use strict";(function(t){a("fdae"),a("921b");r(a("66fd"));var e=r(a("155c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},5647:function(t,e,a){"use strict";a.r(e);var r=a("205c"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);e["default"]=n.a},"5cbe":function(t,e,a){"use strict";var r,n=function(){var t=this,e=t.$createElement,a=(t._self._c,{type:"payment",color:"#ff9900",size:15}),r={type:"payment",color:"#ff9900",size:15};t.$mp.data=Object.assign({},{$root:{a0:a,a1:r}})},i=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return i}),a.d(e,"a",function(){return r})},b1ed:function(t,e,a){"use strict";var r=a("d062"),n=a.n(r);n.a},d062:function(t,e,a){}},[["3384","common/runtime","common/vendor"]]]);