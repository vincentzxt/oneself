<<<<<<< HEAD
<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/current-unit/current-unit"],{"297a":function(t,n,e){"use strict";e.r(n);var a=e("f991"),i=e("33fd");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("59bb");var r=e("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"5f7f4a32",null);n["default"]=c.exports},"33fd":function(t,n,e){"use strict";e.r(n);var a=e("d1bb"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a},4641:function(t,n,e){},"4c28":function(t,n,e){"use strict";(function(t){e("5545"),e("921b");a(e("66fd"));var n=a(e("297a"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"59bb":function(t,n,e){"use strict";var a=e("4641"),i=e.n(a);i.a},d1bb:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("0def"));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("components/uni-search-bar/uni-search-bar").then(e.bind(null,"f477"))},r=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"f8ed"))},c=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"3ce5"))},o={components:{uniSearchBar:u,uniList:r,uniListItem:c},data:function(){return{title:"客户&供应商",datas:null,searchDatas:null}},onLoad:function(){},onShow:function(){this.datas=t.getStorageSync("currentUnitList"),this.searchDatas=this.datas},onPullDownRefresh:function(){a.default.getCurrentUnit(),this.datas=t.getStorageSync("currentUnitList"),this.searchDatas=this.datas,t.stopPullDownRefresh()},computed:{headerHeight:function(){return this.$headerIsSearchHeight},mainHeight:function(){return this.$mainIsSearchHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleAdd:function(){t.navigateTo({url:"./add/add"})},handleEdit:function(n){t.navigateTo({url:"./edit/edit?item="+JSON.stringify(n)})},handleSearch:function(t){t.value?this.searchDatas=this.datas.filter(function(n){return-1!==n.contactunitname.indexOf(t.value)||-1!==n.querycode.indexOf(t.value)||-1!==n.bseContactUnitContactModels[0].telephone.indexOf(t.value)}):this.searchDatas=this.datas}}};n.default=o}).call(this,e("543d")["default"])},f991:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})}},[["4c28","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/current-unit/current-unit"],{"00c8":function(t,n,e){"use strict";var a=e("cd2a"),i=e.n(a);i.a},"0574":function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");a(e("66fd"));var n=a(e("8397"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"0868":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("dcb1"));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("components/uni-search-bar/uni-search-bar").then(e.bind(null,"112b"))},r=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},c=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},o={components:{uniSearchBar:u,uniList:r,uniListItem:c},data:function(){return{title:"客户&供应商",datas:null,searchDatas:null}},onLoad:function(){},onShow:function(){this.datas=t.getStorageSync("currentUnitList"),this.searchDatas=this.datas,console.log("-----datas-----"),console.log(this.datas)},onPullDownRefresh:function(){a.default.getCurrentUnit(),this.datas=t.getStorageSync("currentUnitList"),this.searchDatas=this.datas,t.stopPullDownRefresh()},computed:{headerHeight:function(){return this.$headerIsSearchHeight},mainHeight:function(){return this.$mainIsSearchHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleAdd:function(){t.navigateTo({url:"./add/add"})},handleEdit:function(n){t.navigateTo({url:"./edit/edit?item="+JSON.stringify(n)})},handleSearch:function(t){t.value?this.searchDatas=this.datas.filter(function(n){return-1!==n.contactunitname.indexOf(t.value)||-1!==n.querycode.indexOf(t.value)||-1!==n.bseContactUnitContactModels[0].telephone.indexOf(t.value)}):this.searchDatas=this.datas}}};n.default=o}).call(this,e("543d")["default"])},8397:function(t,n,e){"use strict";e.r(n);var a=e("ee86"),i=e("a154");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("00c8");var r,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"42f445fb",null,!1,a["a"],r);n["default"]=o.exports},a154:function(t,n,e){"use strict";e.r(n);var a=e("0868"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a},cd2a:function(t,n,e){},ee86:function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return a})}},[["0574","common/runtime","common/vendor"]]]);
>>>>>>> d9bea62689cb495bf28b81e1ee13c55bbda74e56
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/current-unit/current-unit"],{"0574":function(t,n,e){"use strict";(function(t){e("fdae"),e("921b");a(e("66fd"));var n=a(e("8397"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"0837":function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return a})},"0868":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("dcb1"));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("components/uni-search-bar/uni-search-bar").then(e.bind(null,"112b"))},r=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"3140"))},c=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"d2d2"))},o={components:{uniSearchBar:u,uniList:r,uniListItem:c},data:function(){return{title:"客户&供应商",datas:null,searchDatas:null}},onLoad:function(){},onShow:function(){this.datas=t.getStorageSync("currentUnitList"),this.searchDatas=this.datas,console.log("-----datas-----"),console.log(this.datas)},onPullDownRefresh:function(){a.default.getCurrentUnit(),this.datas=t.getStorageSync("currentUnitList"),this.searchDatas=this.datas,t.stopPullDownRefresh()},computed:{headerHeight:function(){return this.$headerIsSearchHeight},mainHeight:function(){return this.$mainIsSearchHeight}},methods:{handleNavbarClickLeft:function(){t.navigateBack({delta:1})},handleAdd:function(){t.navigateTo({url:"./add/add"})},handleEdit:function(n){t.navigateTo({url:"./edit/edit?item="+JSON.stringify(n)})},handleSearch:function(t){t.value?this.searchDatas=this.datas.filter(function(n){return-1!==n.contactunitname.indexOf(t.value)||-1!==n.querycode.indexOf(t.value)||-1!==n.bseContactUnitContactModels[0].telephone.indexOf(t.value)}):this.searchDatas=this.datas}}};n.default=o}).call(this,e("543d")["default"])},8397:function(t,n,e){"use strict";e.r(n);var a=e("0837"),i=e("a154");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("d701");var r,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"369ac8a1",null,!1,a["a"],r);n["default"]=o.exports},a154:function(t,n,e){"use strict";e.r(n);var a=e("0868"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a},d701:function(t,n,e){"use strict";var a=e("edcd"),i=e.n(a);i.a},edcd:function(t,n,e){}},[["0574","common/runtime","common/vendor"]]]);
>>>>>>> fba5971a0e23fbb7063367a90ce3676ee7a8e720
