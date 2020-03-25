(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
<<<<<<< HEAD
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=Dt,e.createComponent=Ft,e.createPage=Lt,e.default=void 0;var o,i=(o=n(/*! vue */2))&&o.__esModule?o:{default:o};function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=Object.prototype.toString,u=Object.prototype.hasOwnProperty;function l(t){return"function"==typeof t}function c(t){return"[object Object]"===s.call(t)}function p(t,e){return u.call(t,e)}function d(){}function h(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var f=/-(\w)/g,g=h(function(t){return t.replace(f,function(t,e){return e?e.toUpperCase():""})}),m=["invoke","success","fail","complete","returnValue"],v={},y={};function x(t,e){Object.keys(e).forEach(function(n){var o,i,r;-1!==m.indexOf(n)&&l(e[n])&&(t[n]=(o=t[n],i=e[n],(r=i?o?o.concat(i):Array.isArray(i)?i:[i]:o)?function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(r):r))})}function b(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==m.indexOf(n)&&l(e[n])&&function(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}(t[n],e[n])})}function A(t){return function(e){return t(e)||e}}function _(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}function w(t,e){for(var n=!1,o=0;o<t.length;o++){var i=t[o];if(n)n=Promise.then(A(i));else{var r=i(e);if(_(r)&&(n=Promise.resolve(r)),!1===r)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var o=e[n];e[n]=function(e){w(t[n],e).then(function(t){return l(o)&&o(t)||t})}}}),e}function P(t,e){var n=[];Array.isArray(v.returnValue)&&n.push.apply(n,a(v.returnValue));var o=y[t];return o&&Array.isArray(o.returnValue)&&n.push.apply(n,a(o.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function C(t,e,n){for(var o=arguments.length,i=new Array(o>3?o-3:0),r=3;r<o;r++)i[r-3]=arguments[r];var a=function(t){var e=Object.create(null);Object.keys(v).forEach(function(t){"returnValue"!==t&&(e[t]=v[t].slice())});var n=y[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}(t);return a&&Object.keys(a).length?Array.isArray(a.invoke)?w(a.invoke,n).then(function(t){return e.apply(void 0,[S(a,t)].concat(i))}):e.apply(void 0,[S(a,n)].concat(i)):e.apply(void 0,[n].concat(i))}var T=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,D=/^create|Manager$/,k=/^on/;function O(t){return D.test(t)}function R(t){return T.test(t)}function I(t){return!(O(t)||R(t)||function(t){return k.test(t)&&"onPush"!==t}(t))}function L(t,e){return I(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length,i=new Array(o>1?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];return l(n.success)||l(n.fail)||l(n.complete)?P(t,C.apply(void 0,[t,e,n].concat(i))):P(t,new Promise(function(o,r){C.apply(void 0,[t,e,Object.assign({},n,{success:o,fail:r})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})}).then(function(t){return[null,t]}).catch(function(t){return[t]}))}:e}var F=1e-4,j=750,M=!1,E=0,z=0;var B={promiseInterceptor:{returnValue:function(t){return _(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}}},$=Object.freeze({__proto__:null,upx2px:function(t,e){var n,o,i,r;if(0===E&&(n=wx.getSystemInfoSync(),o=n.platform,i=n.pixelRatio,r=n.windowWidth,E=r,z=i,M="ios"===o),0===(t=Number(t)))return 0;var a=t/j*(e||E);return a<0&&(a=-a),0===(a=Math.floor(a+F))?1!==z&&M?.5:1:t<0?-a:a},interceptors:B,addInterceptor:function(t,e){"string"==typeof t&&c(e)?x(y[t]||(y[t]={}),e):c(t)&&x(v,t)},removeInterceptor:function(t,e){"string"==typeof t?c(e)?b(y[t],e):delete y[t]:c(t)&&b(v,t)}});function q(t){if(t.safeArea){var e=t.safeArea;t.safeAreaInsets={top:e.top,left:e.left,right:t.windowWidth-e.right,bottom:t.windowHeight-e.bottom}}}var N={previewImage:{args:function(t){var e=parseInt(t.current);if(!isNaN(e)){var n=t.urls;if(Array.isArray(n)){var o=n.length;if(o)return e<0?e=0:e>=o&&(e=o-1),e>0?(t.current=n[e],t.urls=n.filter(function(t,o){return!(o<e)||t!==n[e]})):t.current=n[0],{indicator:!1,loop:!1}}}}},getSystemInfo:{returnValue:q},getSystemInfoSync:{returnValue:q}},U=["success","fail","cancel","complete"];function H(t,e,n){return function(o){return e(V(t,o,n))}}function W(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(c(e)){var r=!0===i?e:{};for(var a in l(n)&&(n=n(e,r)||{}),e)if(p(n,a)){var s=n[a];l(s)&&(s=s(e[a],e,r)),s?"string"==typeof s?r[s]=e[a]:c(s)&&(r[s.name?s.name:a]=s.value):console.warn("微信小程序 ".concat(t,"暂不支持").concat(a))}else-1!==U.indexOf(a)?r[a]=H(t,e[a],o):i||(r[a]=e[a]);return r}return l(e)&&(e=H(t,e,o)),e}function V(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return l(N.returnValue)&&(e=N.returnValue(t,e)),W(t,e,n,{},o)}function G(t,e){if(p(N,t)){var n=N[t];return n?function(e,o){var i=n;l(n)&&(i=n(e));var r=[e=W(t,e,i.args,i.returnValue)];void 0!==o&&r.push(o);var a=wx[i.name||t].apply(wx,r);return R(t)?V(t,a,i.returnValue,O(t)):a}:function(){console.error("微信小程序 暂不支持".concat(t))}}return e}var X=Object.create(null);["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"].forEach(function(t){X[t]=function(t){return function(e){var n=e.fail,o=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};l(n)&&n(i),l(o)&&o(i)}}(t)});var Q={oauth:["weixin"],share:["weixin"],payment:["wxpay"],push:["weixin"]};var J,K=Object.freeze({__proto__:null,getProvider:function(t){var e=t.service,n=t.success,o=t.fail,i=t.complete,r=!1;Q[e]?(r={errMsg:"getProvider:ok",service:e,provider:Q[e]},l(n)&&n(r)):(r={errMsg:"getProvider:fail:服务["+e+"]不存在"},l(o)&&o(r)),l(i)&&i(r)}}),Y="function"==typeof getUniEmitter?getUniEmitter:function(){return J||(J=new i.default),J};function Z(t,e,n){return t[e].apply(t,n)}var tt=Object.freeze({__proto__:null,$on:function(){return Z(Y(),"$on",Array.prototype.slice.call(arguments))},$off:function(){return Z(Y(),"$off",Array.prototype.slice.call(arguments))},$once:function(){return Z(Y(),"$once",Array.prototype.slice.call(arguments))},$emit:function(){return Z(Y(),"$emit",Array.prototype.slice.call(arguments))}}),et=Object.freeze({__proto__:null}),nt=Page,ot=Component,it=/:/g,rt=h(function(t){return g(t.replace(it,"-"))});function at(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];return e.apply(t,[rt(n)].concat(i))}}}function st(t,e){var n=e[t];e[t]=n?function(){at(this);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return n.apply(this,e)}:function(){at(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return st("onLoad",t),nt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return st("created",t),ot(t)};function ut(t,e,n){e.forEach(function(e){(function t(e,n){if(!n)return!0;if(i.default.options&&Array.isArray(i.default.options[e]))return!0;if(l(n=n.default||n))return!!l(n.extendOptions[e])||!!(n.super&&n.super.options&&Array.isArray(n.super.options[e]));if(l(n[e]))return!0;var o=n.mixins;return Array.isArray(o)?!!o.find(function(n){return t(e,n)}):void 0})(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function lt(t,e){var n=t.data||{},o=t.methods||{};if("function"==typeof n)try{n=n.call(e)}catch(t){Object({NODE_ENV:"development",VUE_APP_PLATFORM:"mp-weixin",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(t){}return c(n)||(n={}),Object.keys(o).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||p(n,t)||(n[t]=o[t])}),n}var ct=[String,Number,Boolean,Object,Array,null];function pt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function dt(t,e){var n=t.behaviors,o=t.extends,i=t.mixins,r=t.props;r||(t.props=r=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(r)?(r.push("name"),r.push("value")):(r.name={type:String,default:""},r.value={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),c(o)&&o.props&&a.push(e({properties:ft(o.props,!0)})),Array.isArray(i)&&i.forEach(function(t){c(t)&&t.props&&a.push(e({properties:ft(t.props,!0)}))}),a}function ht(t,e,n,o){return Array.isArray(e)&&1===e.length?e[0]:e}function ft(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:pt(t)}}):c(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(c(o)){var i=o.default;l(i)&&(i=i()),o.type=ht(0,o.type),n[e]={type:-1!==ct.indexOf(o.type)?o.type:null,value:i,observer:pt(e)}}else{var r=ht(0,o);n[e]={type:-1!==ct.indexOf(r)?r:null,observer:pt(e)}}}),n}function gt(t,e,n){var o={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"==typeof e?e?"$event"===e?o["$"+i]=n:0===e.indexOf("$event.")?o["$"+i]=t.__get_value(e.replace("$event.",""),n):o["$"+i]=t.__get_value(e):o["$"+i]=t:o["$"+i]=function(t,e){var n=t;return e.forEach(function(e){var o=e[0],i=e[2];if(o||void 0!==i){var r=e[1],a=e[3],s=o?t.__get_value(o,n):n;Number.isInteger(s)?n=i:r?Array.isArray(s)?n=s.find(function(e){return t.__get_value(r,e)===i}):c(s)?n=Object.keys(s).find(function(e){return t.__get_value(r,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],a&&(n=t.__get_value(a,n))}}),n}(t,e)}),o}function mt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=gt(t,o,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==r||i?i&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(function(t){for(var e={},n=1;n<t.length;n++){var o=t[n];e[o[0]]=o[1]}return e}(t)):"string"==typeof t&&p(s,t)?u.push(s[t]):u.push(t)}),u}var vt="~",yt="^";function xt(t){var e=this,n=((t=function(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(t){}return t.stopPropagation=d,t.preventDefault=d,t.target=t.target||{},p(t,"detail")||(t.detail={}),c(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}(t)).currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var o=n.eventOpts||n["event-opts"];if(!o)return console.warn("事件信息不存在");var i=t.type,r=[];return o.forEach(function(n){var o=n[0],a=n[1],s=o.charAt(0)===yt,u=(o=s?o.slice(1):o).charAt(0)===vt;o=u?o.slice(1):o,a&&function(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}(i,o)&&a.forEach(function(n){var o=n[0];if(o){var i=e.$vm;if(i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent),"$emit"===o)return void i.$emit.apply(i,mt(e.$vm,t,n[1],n[2],s,o));var a=i[o];if(!l(a))throw new Error(" _vm.".concat(o," is not a function"));if(u){if(a.once)return;a.once=!0}r.push(a.apply(i,mt(e.$vm,t,n[1],n[2],s,o)))}})}),"input"===i&&1===r.length&&void 0!==r[0]?r[0]:void 0}var bt=["onShow","onHide","onError","onPageNotFound"];function At(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="mp-weixin",i.default.mixin({beforeCreate:function(){var t,e,i;this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=(t={data:{}},e=this.mpType,i=this.$options.mpInstance,e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),function(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){p(n,e)&&(t[e]=n[e])})}(this,n)))}});var r={onLaunch:function(e){this.$vm||(wx.canIUse("nextTick")||console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"),this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};r.globalData=t.$options.globalData||{};var a=t.$options.methods;return a&&Object.keys(a).forEach(function(t){r[t]=a[t]}),ut(r,bt),r}var _t=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function wt(t){return Behavior(t)}function St(){return!!this.route}function Pt(t){this.triggerEvent("__l",t)}function Ct(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={};return e.selectAllComponents(".vue-ref").forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e}),e.selectAllComponents(".vue-ref-in-for").forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function Tt(t){var e,n=t.detail||t.value,o=n.vuePid,i=n.vueOptions;o&&(e=function t(e,n){for(var o,i=e.$children,r=i.length-1;r>=0;r--){var a=i[r];if(a.$scope._$vueId===n)return a}for(var s=i.length-1;s>=0;s--)if(o=t(i[s],n))return o}(this.$vm,o)),e||(e=this.$vm),i.parent=e}function Dt(t){return App(function(t){return At(t,{mocks:_t,initRefs:Ct})}(t)),t}function kt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=r(function(t,e){var n;return l(e=e.default||e)?e=(n=e).extendOptions:n=t.extend(e),[n,e]}(i.default,t),2),s=a[0],u=a[1],c={multipleSlots:!0,addGlobalClass:!0};u["mp-weixin"]&&u["mp-weixin"].options&&Object.assign(c,u["mp-weixin"].options);var p={options:c,data:lt(u,i.default.prototype),behaviors:dt(u,wt),properties:ft(u.props,!1,u.__file),lifetimes:{attached:function(){var t,e,i,r=this.properties,a={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:r};t=r.vueId,e=this,1===(i=(t=(t||"").split(",")).length)?e._$vueId=t[0]:2===i&&(e._$vueId=t[0],e._$vuePid=t[1]),o.call(this,{vuePid:this._$vuePid,vueOptions:a}),this.$vm=new s(a),function(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}(this.$vm,r.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:Tt,__e:xt}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){p.methods[t]=function(e){return this.$vm[t](e)}}),n?p:[p,s]}function Ot(t){return kt(t,{isPage:St,initRelation:Pt})}var Rt=["onShow","onHide","onUnload"];function It(t){return function(t,e){e.isPage,e.initRelation;var n=Ot(t);return ut(n.methods,Rt,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}(t,{isPage:St,initRelation:Pt})}function Lt(t){return Component(It(t))}function Ft(t){return Component(Ot(t))}Rt.push.apply(Rt,["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"]),["vibrate"].forEach(function(t){N[t]=!1}),[].forEach(function(t){var e=N[t]&&N[t].name?N[t].name:t;wx.canIUse(e)||(N[t]=!1)});var jt={};"undefined"!=typeof Proxy?jt=new Proxy({},{get:function(t,e){return t[e]?t[e]:$[e]?$[e]:et[e]?L(e,et[e]):K[e]?L(e,K[e]):X[e]?L(e,X[e]):tt[e]?tt[e]:p(wx,e)||p(N,e)?L(e,G(e,wx[e])):void 0},set:function(t,e,n){return t[e]=n,!0}}):(Object.keys($).forEach(function(t){jt[t]=$[t]}),Object.keys(X).forEach(function(t){jt[t]=L(t,X[t])}),Object.keys(K).forEach(function(t){jt[t]=L(t,X[t])}),Object.keys(tt).forEach(function(t){jt[t]=tt[t]}),Object.keys(et).forEach(function(t){jt[t]=L(t,et[t])}),Object.keys(wx).forEach(function(t){(p(wx,t)||p(N,t))&&(jt[t]=L(t,G(t,wx[t])))})),wx.createApp=Dt,wx.createPage=Lt,wx.createComponent=Ft;var Mt=jt;e.default=Mt},123:
/*!************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/api/current-unit.js ***!
  \************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.updateAll=void 0;var o,i=(o=n(/*! @/utils/http.js */23))&&o.__esModule?o:{default:o};e.updateAll=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/UpdateAll",data:e,method:"post"})}},14:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */function(t,e,n){"use strict";function o(t,e,n,o,i,r,a,s,u,l){var c,p="function"==typeof t?t.options:t;if(u&&(p.components=Object.assign(u,p.components||{})),l&&((l.beforeCreate||(l.beforeCreate=[])).unshift(function(){this[l.__module]=this}),(p.mixins||(p.mixins=[])).push(l)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),o&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(p.functional){p._injectStyles=c;var d=p.render;p.render=function(t,e){return c.call(e),d(t,e)}}else{var h=p.beforeCreate;p.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:p}}n.r(e),n.d(e,"default",function(){return o})},2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */function(t,e,n){"use strict";n.r(e),function(t){
/*!
=======
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [
'vibrate'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = {
    multipleSlots: true,
    addGlobalClass: true };


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin']['options']) {
      Object.assign(options, vueOptions['mp-weixin']['options']);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 123:
/*!******************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/api/current-unit.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.updateAll = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var updateAll = function updateAll(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/UpdateAll',
    data: data,
    method: 'post' });

};exports.updateAll = updateAll;

/***/ }),

/***/ 14:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
>>>>>>> 3bb87a1fbc54a27008b2419f8403b991e2a840fe
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
<<<<<<< HEAD
var n=Object.freeze({});function o(t){return null==t}function i(t){return null!=t}function r(t){return!0===t}function a(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function s(t){return null!==t&&"object"==typeof t}var u=Object.prototype.toString;function l(t){return u.call(t).slice(8,-1)}function c(t){return"[object Object]"===u.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return i(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function h(t){return null==t?"":Array.isArray(t)||c(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function f(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),o=t.split(","),i=0;i<o.length;i++)n[o[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var m=g("slot,component",!0),v=g("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var x=Object.prototype.hasOwnProperty;function b(t,e){return x.call(t,e)}function A(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var _=/-(\w)/g,w=A(function(t){return t.replace(_,function(t,e){return e?e.toUpperCase():""})}),S=A(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),P=/\B([A-Z])/g,C=A(function(t){return t.replace(P,"-$1").toLowerCase()});var T=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){var o=arguments.length;return o?o>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function D(t,e){e=e||0;for(var n=t.length-e,o=new Array(n);n--;)o[n]=t[n+e];return o}function k(t,e){for(var n in e)t[n]=e[n];return t}function O(t){for(var e={},n=0;n<t.length;n++)t[n]&&k(e,t[n]);return e}function R(t,e,n){}var I=function(t,e,n){return!1},L=function(t){return t};function F(t,e){if(t===e)return!0;var n=s(t),o=s(e);if(!n||!o)return!n&&!o&&String(t)===String(e);try{var i=Array.isArray(t),r=Array.isArray(e);if(i&&r)return t.length===e.length&&t.every(function(t,n){return F(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||r)return!1;var a=Object.keys(t),u=Object.keys(e);return a.length===u.length&&a.every(function(n){return F(t[n],e[n])})}catch(t){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var E=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!0,devtools:!0,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:R,parsePlatformTagName:L,mustUseProp:I,async:!0,_lifecycleHooks:z},$=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function N(t,e,n,o){Object.defineProperty(t,e,{value:n,enumerable:!!o,writable:!0,configurable:!0})}var U=new RegExp("[^"+$.source+".$_\\d]");var H,W="__proto__"in{},V="undefined"!=typeof window,G="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,X=G&&WXEnvironment.platform.toLowerCase(),Q=V&&window.navigator.userAgent.toLowerCase(),J=Q&&/msie|trident/.test(Q),K=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),Y=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===X),Z=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(V)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,tt)}catch(t){}var et=function(){return void 0===H&&(H=!V&&!G&&void 0!==t&&(t.process&&"server"===t.process.env.VUE_ENV)),H},nt=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"==typeof t&&/native code/.test(t.toString())}var it,rt="undefined"!=typeof Symbol&&ot(Symbol)&&"undefined"!=typeof Reflect&&ot(Reflect.ownKeys);it="undefined"!=typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var at=R,st=R,ut=R,lt=R,ct="undefined"!=typeof console,pt=/(?:^|[-_])(\w)/g;at=function(t,e){var n=e?ut(e):"";B.warnHandler?B.warnHandler.call(null,t,e,n):ct&&!B.silent&&console.error("[Vue warn]: "+t+n)},st=function(t,e){ct&&!B.silent&&console.warn("[Vue tip]: "+t+(e?ut(e):""))},lt=function(t,e){if(t.$scope&&t.$scope.is)return t.$scope.is;if(t.$root===t)return"<Root>";var n="function"==typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t,o=n.name||n._componentTag,i=n.__file;if(!o&&i){var r=i.match(/([^\/\\]+)\.vue$/);o=r&&r[1]}return(o?"<"+o.replace(pt,function(t){return t.toUpperCase()}).replace(/[-_]/g,"")+">":"<Anonymous>")+(i&&!1!==e?" at "+i:"")};ut=function(t){if(t._isVue&&t.$parent){for(var e=[],n=0;t;){if(e.length>0){var o=e[e.length-1];if(o.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[o,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(function(t,e){return""+(0===e?"---\x3e ":function(t,e){for(var n="";e;)e%2==1&&(n+=t),e>1&&(t+=t),e>>=1;return n}(" ",5+2*e))+(Array.isArray(t)?lt(t[0])+"... ("+t[1]+" recursive calls)":lt(t))}).join("\n")}return"\n\n(found in "+lt(t)+")"};var dt=0,ht=function(){"undefined"!=typeof SharedObject?this.id=SharedObject.uid++:this.id=dt++,this.subs=[]};function ft(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function gt(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){y(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();B.async||t.sort(function(t,e){return t.id-e.id});for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!=typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var mt=function(t,e,n,o,i,r,a,s){this.tag=t,this.data=e,this.children=n,this.text=o,this.elm=i,this.ns=void 0,this.context=r,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(mt.prototype,vt);var yt=function(t){void 0===t&&(t="");var e=new mt;return e.text=t,e.isComment=!0,e};function xt(t){return new mt(void 0,void 0,void 0,String(t))}var bt=Array.prototype,At=Object.create(bt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=bt[t];N(At,t,function(){for(var n=[],o=arguments.length;o--;)n[o]=arguments[o];var i,r=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),r})});var _t=Object.getOwnPropertyNames(At),wt=!0;function St(t){wt=t}var Pt=function(t){var e;this.value=t,this.dep=new ht,this.vmCount=0,N(t,"__ob__",this),Array.isArray(t)?(W?t.push!==t.__proto__.push?Ct(t,At,_t):(e=At,t.__proto__=e):Ct(t,At,_t),this.observeArray(t)):this.walk(t)};function Ct(t,e,n){for(var o=0,i=n.length;o<i;o++){var r=n[o];N(t,r,e[r])}}function Tt(t,e){var n;if(s(t)&&!(t instanceof mt))return b(t,"__ob__")&&t.__ob__ instanceof Pt?n=t.__ob__:wt&&!et()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Pt(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,o,i){var r=new ht,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var l=!i&&Tt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(r.depend(),l&&(l.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,o=0,i=e.length;o<i;o++)(n=e[o])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e))),e},set:function(e){var a=s?s.call(t):n;e===a||e!=e&&a!=a||(o&&o(),s&&!u||(u?u.call(t,e):n=e,l=!i&&Tt(e),r.notify()))}})}}function kt(t,e,n){if((o(t)||a(t))&&at("Cannot set reactive property on undefined, null, or primitive value: "+t),Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?(at("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."),n):i?(Dt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Ot(t,e){if((o(t)||a(t))&&at("Cannot delete reactive property on undefined, null, or primitive value: "+t),Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount?at("Avoid deleting properties on a Vue instance or its root $data - just set it to null."):b(t,e)&&(delete t[e],n&&n.dep.notify())}}Pt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},Pt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Tt(t[e])};var Rt=B.optionMergeStrategies;function It(t,e){if(!e)return t;for(var n,o,i,r=rt?Reflect.ownKeys(e):Object.keys(e),a=0;a<r.length;a++)"__ob__"!==(n=r[a])&&(o=t[n],i=e[n],b(t,n)?o!==i&&c(o)&&c(i)&&It(o,i):kt(t,n,i));return t}function Lt(t,e,n){return n?function(){var o="function"==typeof e?e.call(n,n):e,i="function"==typeof t?t.call(n,n):t;return o?It(o,i):i}:e?t?function(){return It("function"==typeof e?e.call(this,this):e,"function"==typeof t?t.call(this,this):t)}:e:t}function Ft(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(n):n}function jt(t,e,n,o){var i=Object.create(t||null);return e?(zt(o,e,n),k(i,e)):i}Rt.el=Rt.propsData=function(t,e,n,o){return n||at('option "'+o+'" can only be used during instance creation with the `new` keyword.'),Mt(t,e)},Rt.data=function(t,e,n){return n?Lt(t,e,n):e&&"function"!=typeof e?(at('The "data" option should be a function that returns a per-instance value in component definitions.',n),t):Lt(t,e)},z.forEach(function(t){Rt[t]=Ft}),E.forEach(function(t){Rt[t+"s"]=jt}),Rt.watch=function(t,e,n,o){if(t===Z&&(t=void 0),e===Z&&(e=void 0),!e)return Object.create(t||null);if(zt(o,e,n),!t)return e;var i={};for(var r in k(i,t),e){var a=i[r],s=e[r];a&&!Array.isArray(a)&&(a=[a]),i[r]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Rt.props=Rt.methods=Rt.inject=Rt.computed=function(t,e,n,o){if(e&&zt(o,e,n),!t)return e;var i=Object.create(null);return k(i,t),e&&k(i,e),i},Rt.provide=Lt;var Mt=function(t,e){return void 0===e?t:e};function Et(t){new RegExp("^[a-zA-Z][\\-\\.0-9_"+$.source+"]*$").test(t)||at('Invalid component name: "'+t+'". Component names should conform to valid custom element name in html5 specification.'),(m(t)||B.isReservedTag(t))&&at("Do not use built-in or reserved HTML elements as component id: "+t)}function zt(t,e,n){c(e)||at('Invalid value for option "'+t+'": expected an Object, but got '+l(e)+".",n)}function Bt(t,e,n){if(function(t){for(var e in t.components)Et(e)}(e),"function"==typeof e&&(e=e.options),function(t,e){var n=t.props;if(n){var o,i,r={};if(Array.isArray(n))for(o=n.length;o--;)"string"==typeof(i=n[o])?r[w(i)]={type:null}:at("props must be strings when using array syntax.");else if(c(n))for(var a in n)i=n[a],r[w(a)]=c(i)?i:{type:i};else at('Invalid value for option "props": expected an Array or an Object, but got '+l(n)+".",e);t.props=r}}(e,n),function(t,e){var n=t.inject;if(n){var o=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)o[n[i]]={from:n[i]};else if(c(n))for(var r in n){var a=n[r];o[r]=c(a)?k({from:r},a):{from:a}}else at('Invalid value for option "inject": expected an Array or an Object, but got '+l(n)+".",e)}}(e,n),function(t){var e=t.directives;if(e)for(var n in e){var o=e[n];"function"==typeof o&&(e[n]={bind:o,update:o})}}(e),!e._base&&(e.extends&&(t=Bt(t,e.extends,n)),e.mixins))for(var o=0,i=e.mixins.length;o<i;o++)t=Bt(t,e.mixins[o],n);var r,a={};for(r in t)s(r);for(r in e)b(t,r)||s(r);function s(o){var i=Rt[o]||Mt;a[o]=i(t[o],e[o],n,o)}return a}function $t(t,e,n,o){if("string"==typeof n){var i=t[e];if(b(i,n))return i[n];var r=w(n);if(b(i,r))return i[r];var a=S(r);if(b(i,a))return i[a];var s=i[n]||i[r]||i[a];return o&&!s&&at("Failed to resolve "+e.slice(0,-1)+": "+n,t),s}}function qt(t,e,n,o){var i=e[t],r=!b(n,t),a=n[t],u=Vt(Boolean,i.type);if(u>-1)if(r&&!b(i,"default"))a=!1;else if(""===a||a===C(t)){var c=Vt(String,i.type);(c<0||u<c)&&(a=!0)}if(void 0===a){a=function(t,e,n){if(!b(e,"default"))return;var o=e.default;s(o)&&at('Invalid default value for prop "'+n+'": Props with type Object/Array must use a factory function to return the default value.',t);if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof o&&"Function"!==Ht(e.type)?o.call(t):o}(o,i,t);var p=wt;St(!0),Tt(a),St(p)}return function(t,e,n,o,i){if(t.required&&i)return void at('Missing required prop: "'+e+'"',o);if(null==n&&!t.required)return;var r=t.type,a=!r||!0===r,s=[];if(r){Array.isArray(r)||(r=[r]);for(var u=0;u<r.length&&!a;u++){var c=Ut(n,r[u]);s.push(c.expectedType||""),a=c.valid}}if(!a)return void at(function(t,e,n){var o='Invalid prop: type check failed for prop "'+t+'". Expected '+n.map(S).join(", "),i=n[0],r=l(e),a=Gt(e,i),s=Gt(e,r);1===n.length&&Xt(i)&&!function(){var t=[],e=arguments.length;for(;e--;)t[e]=arguments[e];return t.some(function(t){return"boolean"===t.toLowerCase()})}(i,r)&&(o+=" with value "+a);o+=", got "+r+" ",Xt(r)&&(o+="with value "+s+".");return o}(e,n,s),o);var p=t.validator;p&&(p(n)||at('Invalid prop: custom validator check failed for prop "'+e+'".',o))}(i,t,a,o,r),a}var Nt=/^(String|Number|Boolean|Function|Symbol)$/;function Ut(t,e){var n,o=Ht(e);if(Nt.test(o)){var i=typeof t;(n=i===o.toLowerCase())||"object"!==i||(n=t instanceof e)}else n="Object"===o?c(t):"Array"===o?Array.isArray(t):t instanceof e;return{valid:n,expectedType:o}}function Ht(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Wt(t,e){return Ht(t)===Ht(e)}function Vt(t,e){if(!Array.isArray(e))return Wt(e,t)?0:-1;for(var n=0,o=e.length;n<o;n++)if(Wt(e[n],t))return n;return-1}function Gt(t,e){return"String"===e?'"'+t+'"':"Number"===e?""+Number(t):""+t}function Xt(t){return["string","number","boolean"].some(function(e){return t.toLowerCase()===e})}function Qt(t,e,n){ft();try{if(e)for(var o=e;o=o.$parent;){var i=o.$options.errorCaptured;if(i)for(var r=0;r<i.length;r++)try{if(!1===i[r].call(o,t,e,n))return}catch(t){Kt(t,o,"errorCaptured hook")}}Kt(t,e,n)}finally{gt()}}function Jt(t,e,n,o,i){var r;try{(r=n?t.apply(e,n):t.call(e))&&!r._isVue&&d(r)&&!r._handled&&(r.catch(function(t){return Qt(t,o,i+" (Promise/async)")}),r._handled=!0)}catch(t){Qt(t,o,i)}return r}function Kt(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(e){e!==t&&Yt(e,null,"config.errorHandler")}Yt(t,e,n)}function Yt(t,e,n){if(at("Error in "+n+': "'+t.toString()+'"',e),!V&&!G||"undefined"==typeof console)throw t;console.error(t)}var Zt,te,ee=[],ne=!1;function oe(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!=typeof Promise&&ot(Promise)){var ie=Promise.resolve();Zt=function(){ie.then(oe),Y&&setTimeout(R)}}else if(J||"undefined"==typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Zt="undefined"!=typeof setImmediate&&ot(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var re=1,ae=new MutationObserver(oe),se=document.createTextNode(String(re));ae.observe(se,{characterData:!0}),Zt=function(){re=(re+1)%2,se.data=String(re)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(t){Qt(t,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,Zt()),!t&&"undefined"!=typeof Promise)return new Promise(function(t){n=t})}var le=g("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),ce=function(t,e){at('Property or method "'+e+'" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',t)},pe=function(t,e){at('Property "'+e+'" must be accessed with "$data.'+e+'" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data',t)},de="undefined"!=typeof Proxy&&ot(Proxy);if(de){var he=g("stop,prevent,self,ctrl,shift,alt,meta,exact");B.keyCodes=new Proxy(B.keyCodes,{set:function(t,e,n){return he(e)?(at("Avoid overwriting built-in modifier in config.keyCodes: ."+e),!1):(t[e]=n,!0)}})}var fe={has:function(t,e){var n=e in t,o=le(e)||"string"==typeof e&&"_"===e.charAt(0)&&!(e in t.$data);return n||o||(e in t.$data?pe(t,e):ce(t,e)),n||!o}},ge={get:function(t,e){return"string"!=typeof e||e in t||(e in t.$data?pe(t,e):ce(t,e)),t[e]}};te=function(t){if(de){var e=t.$options,n=e.render&&e.render._withStripped?ge:fe;t._renderProxy=new Proxy(t,n)}else t._renderProxy=t};var me,ve,ye=new it;function xe(t){!function t(e,n){var o,i;var r=Array.isArray(e);if(!r&&!s(e)||Object.isFrozen(e)||e instanceof mt)return;if(e.__ob__){var a=e.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(r)for(o=e.length;o--;)t(e[o],n);else for(i=Object.keys(e),o=i.length;o--;)t(e[i[o]],n)}(t,ye),ye.clear()}var be=V&&window.performance;be&&be.mark&&be.measure&&be.clearMarks&&be.clearMeasures&&(me=function(t){return be.mark(t)},ve=function(t,e,n){be.measure(t,e,n),be.clearMarks(e),be.clearMarks(n)});var Ae=A(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),o="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=o?t.slice(1):t,once:n,capture:o,passive:e}});function _e(t,e){function n(){var t=arguments,o=n.fns;if(!Array.isArray(o))return Jt(o,null,arguments,e,"v-on handler");for(var i=o.slice(),r=0;r<i.length;r++)Jt(i[r],null,t,e,"v-on handler")}return n.fns=t,n}function we(t,e,n,r){var a=e.options.mpOptions&&e.options.mpOptions.properties;if(o(a))return n;var s=e.options.mpOptions.externalClasses||[],u=t.attrs,l=t.props;if(i(u)||i(l))for(var c in a){var p=C(c);(Se(n,l,c,p,!0)||Se(n,u,c,p,!1))&&n[c]&&-1!==s.indexOf(p)&&r[w(n[c])]&&(n[c]=r[w(n[c])])}return n}function Se(t,e,n,o,r){if(i(e)){if(b(e,n))return t[n]=e[n],r||delete e[n],!0;if(b(e,o))return t[n]=e[o],r||delete e[o],!0}return!1}function Pe(t){return a(t)?[xt(t)]:Array.isArray(t)?function t(e,n){var s=[];var u,l,c,p;for(u=0;u<e.length;u++)o(l=e[u])||"boolean"==typeof l||(c=s.length-1,p=s[c],Array.isArray(l)?l.length>0&&(Ce((l=t(l,(n||"")+"_"+u))[0])&&Ce(p)&&(s[c]=xt(p.text+l[0].text),l.shift()),s.push.apply(s,l)):a(l)?Ce(p)?s[c]=xt(p.text+l):""!==l&&s.push(xt(l)):Ce(l)&&Ce(p)?s[c]=xt(p.text+l.text):(r(e._isVList)&&i(l.tag)&&o(l.key)&&i(n)&&(l.key="__vlist"+n+"_"+u+"__"),s.push(l)));return s}(t):void 0}function Ce(t){return i(t)&&i(t.text)&&!1===t.isComment}function Te(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}function De(t){var e=ke(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n],function(){at('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "'+n+'"',t)})}),St(!0))}function ke(t,e){if(t){for(var n=Object.create(null),o=rt?Reflect.ownKeys(t):Object.keys(t),i=0;i<o.length;i++){var r=o[i];if("__ob__"!==r){for(var a=t[r].from,s=e;s;){if(s._provided&&b(s._provided,a)){n[r]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[r]){var u=t[r].default;n[r]="function"==typeof u?u.call(e):u}else at('Injection "'+r+'" not found',e)}}return n}}function Oe(t,e){if(!t||!t.length)return{};for(var n={},o=0,i=t.length;o<i;o++){var r=t[o],a=r.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,r.context!==e&&r.fnContext!==e||!a||null==a.slot)r.asyncMeta&&r.asyncMeta.data&&"page"===r.asyncMeta.data.slot?(n.page||(n.page=[])).push(r):(n.default||(n.default=[])).push(r);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===r.tag?u.push.apply(u,r.children||[]):u.push(r)}}for(var l in n)n[l].every(Re)&&delete n[l];return n}function Re(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ie(t,e,o){var i,r=Object.keys(e).length>0,a=t?!!t.$stable:!r,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&o&&o!==n&&s===o.$key&&!r&&!o.$hasNormal)return o;for(var u in i={},t)t[u]&&"$"!==u[0]&&(i[u]=Le(e,u,t[u]))}else i={};for(var l in e)l in i||(i[l]=Fe(e,l));return t&&Object.isExtensible(t)&&(t._normalized=i),N(i,"$stable",a),N(i,"$key",s),N(i,"$hasNormal",r),i}function Le(t,e,n){var o=function(){var t=arguments.length?n.apply(null,arguments):n({});return(t=t&&"object"==typeof t&&!Array.isArray(t)?[t]:Pe(t))&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:o,enumerable:!0,configurable:!0}),o}function Fe(t,e){return function(){return t[e]}}function je(t,e){var n,o,r,a,u;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),o=0,r=t.length;o<r;o++)n[o]=e(t[o],o,o,o);else if("number"==typeof t)for(n=new Array(t),o=0;o<t;o++)n[o]=e(o+1,o,o,o);else if(s(t))if(rt&&t[Symbol.iterator]){n=[];for(var l=t[Symbol.iterator](),c=l.next();!c.done;)n.push(e(c.value,n.length,o++,o)),c=l.next()}else for(a=Object.keys(t),n=new Array(a.length),o=0,r=a.length;o<r;o++)u=a[o],n[o]=e(t[u],u,o,o);return i(n)||(n=[]),n._isVList=!0,n}function Me(t,e,n,o){var i,r=this.$scopedSlots[t];r?(n=n||{},o&&(s(o)||at("slot v-bind without argument expects an Object",this),n=k(k({},o),n)),i=r(n,this,n._i)||e):i=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Ee(t){return $t(this.$options,"filters",t,!0)||L}function ze(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Be(t,e,n,o,i){var r=B.keyCodes[e]||n;return i&&o&&!B.keyCodes[e]?ze(i,o):r?ze(r,t):o?C(o)!==e:void 0}function $e(t,e,n,o,i){if(n)if(s(n)){var r;Array.isArray(n)&&(n=O(n));var a=function(a){if("class"===a||"style"===a||v(a))r=t;else{var s=t.attrs&&t.attrs.type;r=o||B.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=w(a),l=C(a);u in r||l in r||(r[a]=n[a],i&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))};for(var u in n)a(u)}else at("v-bind without argument expects an Object or Array value",this);return t}function qe(t,e){var n=this._staticTrees||(this._staticTrees=[]),o=n[t];return o&&!e?o:(Ue(o=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),"__static__"+t,!1),o)}function Ne(t,e,n){return Ue(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ue(t,e,n){if(Array.isArray(t))for(var o=0;o<t.length;o++)t[o]&&"string"!=typeof t[o]&&He(t[o],e+"_"+o,n);else He(t,e,n)}function He(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function We(t,e){if(e)if(c(e)){var n=t.on=t.on?k({},t.on):{};for(var o in e){var i=n[o],r=e[o];n[o]=i?[].concat(i,r):r}}else at("v-on without argument expects an Object value",this);return t}function Ve(t,e,n,o){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var r=t[i];Array.isArray(r)?Ve(r,e,n):r&&(r.proxy&&(r.fn.proxy=!0),e[r.key]=r.fn)}return o&&(e.$key=o),e}function Ge(t,e){for(var n=0;n<e.length;n+=2){var o=e[n];"string"==typeof o&&o?t[e[n]]=e[n+1]:""!==o&&null!==o&&at("Invalid value for dynamic directive argument (expected string or null): "+o,this)}return t}function Xe(t,e){return"string"==typeof t?e+t:t}function Qe(t){t._o=Ne,t._n=f,t._s=h,t._l=je,t._t=Me,t._q=F,t._i=j,t._m=qe,t._f=Ee,t._k=Be,t._b=$e,t._v=xt,t._e=yt,t._u=Ve,t._g=We,t._d=Ge,t._p=Xe}function Je(t,e,o,i,a){var s,u=this,l=a.options;b(i,"_uid")?(s=Object.create(i))._original=i:(s=i,i=i._original);var c=r(l._compiled),p=!c;this.data=t,this.props=e,this.children=o,this.parent=i,this.listeners=t.on||n,this.injections=ke(l.inject,i),this.slots=function(){return u.$slots||Ie(t.scopedSlots,u.$slots=Oe(o,i)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ie(t.scopedSlots,this.slots())}}),c&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ie(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,o){var r=an(s,t,e,n,o,p);return r&&!Array.isArray(r)&&(r.fnScopeId=l._scopeId,r.fnContext=i),r}:this._c=function(t,e,n,o){return an(s,t,e,n,o,p)}}function Ke(t,e,n,o,i){var r=function(t){var e=new mt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}(t);return r.fnContext=n,r.fnOptions=o,(r.devtoolsMeta=r.devtoolsMeta||{}).renderContext=i,e.slot&&((r.data||(r.data={})).slot=e.slot),r}function Ye(t,e){for(var n in e)t[w(n)]=e[n]}Qe(Je.prototype);var Ze={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ze.prepatch(n,n)}else{(t.componentInstance=function(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},o=t.data.inlineTemplate;i(o)&&(n.render=o.render,n.staticRenderFns=o.staticRenderFns);return new t.componentOptions.Ctor(n)}(t,fn)).$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var o=e.componentOptions;!function(t,e,o,i,r){gn=!0;var a=i.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),l=!!(r||t.$options._renderChildren||u);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=r,t.$attrs=i.data.attrs||n,t.$listeners=o||n,e&&t.$options.props){St(!1);for(var c=t._props,p=t.$options._propKeys||[],d=0;d<p.length;d++){var h=p[d],f=t.$options.props;c[h]=qt(h,f,e,t)}St(!0),t.$options.propsData=e}t._$updateProperties&&t._$updateProperties(t),o=o||n;var g=t.$options._parentListeners;t.$options._parentListeners=o,hn(t,o,g),l&&(t.$slots=Oe(r,i.context),t.$forceUpdate());gn=!1}(e.componentInstance=t.componentInstance,o.propsData,o.listeners,e,o.children)},insert:function(t){var e,n=t.context,o=t.componentInstance;o._isMounted||(yn(o,"onServiceCreated"),yn(o,"onServiceAttached"),o._isMounted=!0,yn(o,"mounted")),t.data.keepAlive&&(n._isMounted?((e=o)._inactive=!1,An.push(e)):vn(o,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(n&&(e._directInactive=!0,mn(e)))return;if(!e._inactive){e._inactive=!0;for(var o=0;o<e.$children.length;o++)t(e.$children[o]);yn(e,"deactivated")}}(e,!0):e.$destroy())}},tn=Object.keys(Ze);function en(t,e,a,u,l){if(!o(t)){var c=a.$options._base;if(s(t)&&(t=c.extend(t)),"function"==typeof t){var p;if(o(t.cid)&&void 0===(t=function(t,e){if(r(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=un;n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n);if(r(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],u=!0,l=null,c=null;n.$on("hook:destroyed",function(){return y(a,n)});var p=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==l&&(clearTimeout(l),l=null),null!==c&&(clearTimeout(c),c=null))},h=M(function(n){t.resolved=ln(n,e),u?a.length=0:p(!0)}),f=M(function(e){at("Failed to resolve async component: "+String(t)+(e?"\nReason: "+e:"")),i(t.errorComp)&&(t.error=!0,p(!0))}),g=t(h,f);return s(g)&&(d(g)?o(t.resolved)&&g.then(h,f):d(g.component)&&(g.component.then(h,f),i(g.error)&&(t.errorComp=ln(g.error,e)),i(g.loading)&&(t.loadingComp=ln(g.loading,e),0===g.delay?t.loading=!0:l=setTimeout(function(){l=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,p(!1))},g.delay||200)),i(g.timeout)&&(c=setTimeout(function(){c=null,o(t.resolved)&&f("timeout ("+g.timeout+"ms)")},g.timeout)))),u=!1,t.loading?t.loadingComp:t.resolved}}(p=t,c)))return function(t,e,n,o,i){var r=yt();return r.asyncFactory=t,r.asyncMeta={data:e,context:n,children:o,tag:i},r}(p,e,a,u,l);e=e||{},qn(t),i(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var r=e.on||(e.on={}),a=r[o],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(r[o]=[s].concat(a)):r[o]=s}(t.options,e);var h=function(t,e,n,r){var a=e.options.props;if(o(a))return we(t,e,{},r);var s={},u=t.attrs,l=t.props;if(i(u)||i(l))for(var c in a){var p=C(c),d=c.toLowerCase();c!==d&&u&&b(u,d)&&st('Prop "'+d+'" is passed to component '+lt(n||e)+', but the declared prop name is "'+c+'". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "'+p+'" instead of "'+c+'".'),Se(s,l,c,p,!0)||Se(s,u,c,p,!1)}return we(t,e,s,r)}(e,t,l,a);if(r(t.options.functional))return function(t,e,o,r,a){var s=t.options,u={},l=s.props;if(i(l))for(var c in l)u[c]=qt(c,l,e||n);else i(o.attrs)&&Ye(u,o.attrs),i(o.props)&&Ye(u,o.props);var p=new Je(o,u,a,r,t),d=s.render.call(null,p._c,p);if(d instanceof mt)return Ke(d,o,p.parent,s,p);if(Array.isArray(d)){for(var h=Pe(d)||[],f=new Array(h.length),g=0;g<h.length;g++)f[g]=Ke(h[g],o,p.parent,s,p);return f}}(t,h,e,a,u);var f=e.on;if(e.on=e.nativeOn,r(t.options.abstract)){var g=e.slot;e={},g&&(e.slot=g)}!function(t){for(var e=t.hook||(t.hook={}),n=0;n<tn.length;n++){var o=tn[n],i=e[o],r=Ze[o];i===r||i&&i._merged||(e[o]=i?nn(r,i):r)}}(e);var m=t.options.name||l;return new mt("vue-component-"+t.cid+(m?"-"+m:""),e,void 0,void 0,void 0,a,{Ctor:t,propsData:h,listeners:f,tag:l,children:u},p)}at("Invalid Component definition: "+String(t),a)}}function nn(t,e){var n=function(n,o){t(n,o),e(n,o)};return n._merged=!0,n}var on=1,rn=2;function an(t,e,n,u,l,c){return(Array.isArray(n)||a(n))&&(l=u,u=n,n=void 0),r(c)&&(l=rn),function(t,e,n,u,l){if(i(n)&&i(n.__ob__))return at("Avoid using observed data object as vnode data: "+JSON.stringify(n)+"\nAlways create fresh vnode data objects in each render!",t),yt();i(n)&&i(n.is)&&(e=n.is);if(!e)return yt();i(n)&&i(n.key)&&!a(n.key)&&at("Avoid using non-primitive value as key, use string/number value instead.",t);Array.isArray(u)&&"function"==typeof u[0]&&((n=n||{}).scopedSlots={default:u[0]},u.length=0);l===rn?u=Pe(u):l===on&&(u=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(u));var c,p;if("string"==typeof e){var d;p=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),B.isReservedTag(e)?(i(n)&&i(n.nativeOn)&&at("The .native modifier for v-on is only valid on components but it was used on <"+e+">.",t),c=new mt(B.parsePlatformTagName(e),n,u,void 0,void 0,t)):c=n&&n.pre||!i(d=$t(t.$options,"components",e))?new mt(e,n,u,void 0,void 0,t):en(d,n,t,u,e)}else c=en(e,n,t,u);return Array.isArray(c)?c:i(c)?(i(p)&&function t(e,n,a){e.ns=n;"foreignObject"===e.tag&&(n=void 0,a=!0);if(i(e.children))for(var s=0,u=e.children.length;s<u;s++){var l=e.children[s];i(l.tag)&&(o(l.ns)||r(a)&&"svg"!==l.tag)&&t(l,n,a)}}(c,p),i(n)&&function(t){s(t.style)&&xe(t.style);s(t.class)&&xe(t.class)}(n),c):yt()}(t,e,n,u,l)}var sn,un=null;function ln(t,e){return(t.__esModule||rt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),s(t)?e.extend(t):t}function cn(t,e){sn.$on(t,e)}function pn(t,e){sn.$off(t,e)}function dn(t,e){var n=sn;return function o(){null!==e.apply(null,arguments)&&n.$off(t,o)}}function hn(t,e,n){sn=t,function(t,e,n,i,a,s){var u,l,c,p;for(u in t)l=t[u],c=e[u],p=Ae(u),o(l)?at('Invalid handler for event "'+p.name+'": got '+String(l),s):o(c)?(o(l.fns)&&(l=t[u]=_e(l,s)),r(p.once)&&(l=t[u]=a(p.name,l,p.capture)),n(p.name,l,p.capture,p.passive,p.params)):l!==c&&(c.fns=l,t[u]=c);for(u in e)o(t[u])&&i((p=Ae(u)).name,e[u],p.capture)}(e,n||{},cn,pn,dn,t),sn=void 0}var fn=null,gn=!1;function mn(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function vn(t,e){if(e){if(t._directInactive=!1,mn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)vn(t.$children[n]);yn(t,"activated")}}function yn(t,e){ft();var n=t.$options[e],o=e+" hook";if(n)for(var i=0,r=n.length;i<r;i++)Jt(n[i],t,null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),gt()}var xn=100,bn=[],An=[],_n={},wn={},Sn=!1,Pn=!1,Cn=0;var Tn=Date.now;if(V&&!J){var Dn=window.performance;Dn&&"function"==typeof Dn.now&&Tn()>document.createEvent("Event").timeStamp&&(Tn=function(){return Dn.now()})}function kn(){var t,e;for(Tn(),Pn=!0,bn.sort(function(t,e){return t.id-e.id}),Cn=0;Cn<bn.length;Cn++)if((t=bn[Cn]).before&&t.before(),e=t.id,_n[e]=null,t.run(),null!=_n[e]&&(wn[e]=(wn[e]||0)+1,wn[e]>xn)){at("You may have an infinite update loop "+(t.user?'in watcher with expression "'+t.expression+'"':"in a component render function."),t.vm);break}var n=An.slice(),o=bn.slice();Cn=bn.length=An.length=0,_n={},wn={},Sn=Pn=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,vn(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],o=n.vm;o._watcher===n&&o._isMounted&&!o._isDestroyed&&yn(o,"updated")}}(o),nt&&B.devtools&&nt.emit("flush")}var On=0,Rn=function(t,e,n,o,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.before=o.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++On,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression=e.toString(),"function"==typeof e?this.getter=e:(this.getter=function(t){if(!U.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=R,at('Failed watching path: "'+e+'" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.',t))),this.value=this.lazy?void 0:this.get()};Rn.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;Qt(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&xe(t),gt(),this.cleanupDeps()}return t},Rn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Rn.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Rn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==_n[e]){if(_n[e]=!0,Pn){for(var n=bn.length-1;n>Cn&&bn[n].id>t.id;)n--;bn.splice(n+1,0,t)}else bn.push(t);if(!Sn){if(Sn=!0,!B.async)return void kn();ue(kn)}}}(this)},Rn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||s(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){Qt(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Rn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Rn.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},Rn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var In={enumerable:!0,configurable:!0,get:R,set:R};function Ln(t,e,n){In.get=function(){return this[e][n]},In.set=function(t){this[e][n]=t},Object.defineProperty(t,n,In)}function Fn(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},o=t._props={},i=t.$options._propKeys=[],r=!t.$parent;r||St(!1);var a=function(a){i.push(a);var s=qt(a,e,n,t),u=C(a);(v(u)||B.isReservedAttr(u))&&at('"'+u+'" is a reserved attribute and cannot be used as component prop.',t),Dt(o,a,s,function(){if(!r&&!gn){if("mp-baidu"===t.mpHost)return;if("value"===a&&Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field"))return;if(t._getFormData)return;for(var e=t.$parent;e;){if(e.__next_tick_pending)return;e=e.$parent}at("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \""+a+'"',t)}}),a in t||Ln(t,"_props",a)};for(var s in e)a(s);St(!0)}(t,e.props),e.methods&&function(t,e){var n=t.$options.props;for(var o in e)"function"!=typeof e[o]&&at('Method "'+o+'" has type "'+typeof e[o]+'" in the component definition. Did you reference the function correctly?',t),n&&b(n,o)&&at('Method "'+o+'" has already been defined as a prop.',t),o in t&&q(o)&&at('Method "'+o+'" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'),t[o]="function"!=typeof e[o]?R:T(e[o],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;c(e=t._data="function"==typeof e?function(t,e){ft();try{return t.call(e,e)}catch(t){return Qt(t,e,"data()"),{}}finally{gt()}}(e,t):e||{})||(e={},at("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",t));var n=Object.keys(e),o=t.$options.props,i=t.$options.methods,r=n.length;for(;r--;){var a=n[r];i&&b(i,a)&&at('Method "'+a+'" has already been defined as a data property.',t),o&&b(o,a)?at('The data property "'+a+'" is already declared as a prop. Use prop default value instead.',t):q(a)||Ln(t,"_data",a)}Tt(e,!0)}(t):Tt(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),o=et();for(var i in e){var r=e[i],a="function"==typeof r?r:r.get;null==a&&at('Getter is missing for computed property "'+i+'".',t),o||(n[i]=new Rn(t,a||R,R,jn)),i in t?i in t.$data?at('The computed property "'+i+'" is already defined in data.',t):t.$options.props&&i in t.$options.props&&at('The computed property "'+i+'" is already defined as a prop.',t):Mn(t,i,r)}}(t,e.computed),e.watch&&e.watch!==Z&&function(t,e){for(var n in e){var o=e[n];if(Array.isArray(o))for(var i=0;i<o.length;i++)Bn(t,n,o[i]);else Bn(t,n,o)}}(t,e.watch)}var jn={lazy:!0};function Mn(t,e,n){var o=!et();"function"==typeof n?(In.get=o?En(e):zn(n),In.set=R):(In.get=n.get?o&&!1!==n.cache?En(e):zn(n.get):R,In.set=n.set||R),In.set===R&&(In.set=function(){at('Computed property "'+e+'" was assigned to but it has no setter.',this)}),Object.defineProperty(t,e,In)}function En(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function zn(t){return function(){return t.call(this,this)}}function Bn(t,e,n,o){return c(n)&&(o=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,o)}var $n=0;function qn(t){var e=t.options;if(t.super){var n=qn(t.super);if(n!==t.superOptions){t.superOptions=n;var o=function(t){var e,n=t.options,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=n[i]);return e}(t);o&&k(t.extendOptions,o),(e=t.options=Bt(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function Nn(t){this instanceof Nn||at("Vue is a constructor and should be called with the `new` keyword"),this._init(t)}function Un(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,o=n.cid,i=t._Ctor||(t._Ctor={});if(i[o])return i[o];var r=t.name||n.options.name;r&&Et(r);var a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=Bt(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)Ln(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)Mn(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,E.forEach(function(t){a[t]=n[t]}),r&&(a.options.components[r]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=k({},a.options),i[o]=a,a}}function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function Wn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:(n=t,"[object RegExp]"===u.call(n)&&t.test(e));var n}function Vn(t,e){var n=t.cache,o=t.keys,i=t._vnode;for(var r in n){var a=n[r];if(a){var s=Hn(a.componentOptions);s&&!e(s)&&Gn(n,r,o,i)}}}function Gn(t,e,n,o){var i=t[e];!i||o&&i.tag===o.tag||i.componentInstance.$destroy(),t[e]=null,y(n,e)}!function(t){t.prototype._init=function(t){var e,o,i=this;i._uid=$n++,B.performance&&me&&(e="vue-perf-start:"+i._uid,o="vue-perf-end:"+i._uid,me(e)),i._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),o=e._parentVnode;n.parent=e.parent,n._parentVnode=o;var i=o.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(i,t):i.$options=Bt(qn(i.constructor),t||{},i),te(i),i._self=i,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(i),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&hn(t,e)}(i),function(t){t._vnode=null,t._staticTrees=null;var e=t.$options,o=t.$vnode=e._parentVnode,i=o&&o.context;t.$slots=Oe(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,o,i){return an(t,e,n,o,i,!1)},t.$createElement=function(e,n,o,i){return an(t,e,n,o,i,!0)};var r=o&&o.data;Dt(t,"$attrs",r&&r.attrs||n,function(){!gn&&at("$attrs is readonly.",t)},!0),Dt(t,"$listeners",e._parentListeners||n,function(){!gn&&at("$listeners is readonly.",t)},!0)}(i),yn(i,"beforeCreate"),"mp-toutiao"!==i.mpHost&&De(i),Fn(i),"mp-toutiao"!==i.mpHost&&Te(i),"mp-toutiao"!==i.mpHost&&yn(i,"created"),B.performance&&me&&(i._name=lt(i,!1),me(o),ve("vue "+i._name+" init",e,o)),i.$options.el&&i.$mount(i.$options.el)}}(Nn),function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};e.set=function(){at("Avoid replacing instance root $data. Use nested data properties instead.",this)},n.set=function(){at("$props is readonly.",this)},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=kt,t.prototype.$delete=Ot,t.prototype.$watch=function(t,e,n){if(c(e))return Bn(this,t,e,n);(n=n||{}).user=!0;var o=new Rn(this,t,e,n);if(n.immediate)try{e.call(this,o.value)}catch(t){Qt(t,this,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}(Nn),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var o=this;if(Array.isArray(t))for(var i=0,r=t.length;i<r;i++)o.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function o(){n.$off(t,o),e.apply(n,arguments)}return o.fn=e,n.$on(t,o),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return n}var r,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;for(var s=a.length;s--;)if((r=a[s])===e||r.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=t.toLowerCase();n!==t&&e._events[n]&&st('Event "'+n+'" is emitted in component '+lt(e)+' but the handler is registered for "'+t+'". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "'+C(t)+'" instead of "'+t+'".');var o=e._events[t];if(o){o=o.length>1?D(o):o;for(var i=D(arguments,1),r='event handler for "'+t+'"',a=0,s=o.length;a<s;a++)Jt(o[a],e,i,e,r)}return e}}(Nn),function(t){t.prototype._update=function(t,e){var n=this,o=n.$el,i=n._vnode,r=function(t){var e=fn;return fn=t,function(){fn=e}}(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),r(),o&&(o.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){yn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),yn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}(Nn),function(t){Qe(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,o=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Ie(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{un=e,t=o.call(e._renderProxy,e.$createElement)}catch(n){if(Qt(n,e,"render"),e.$options.renderError)try{t=e.$options.renderError.call(e._renderProxy,e.$createElement,n)}catch(n){Qt(n,e,"renderError"),t=e._vnode}else t=e._vnode}finally{un=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof mt||(Array.isArray(t)&&at("Multiple root nodes returned from render function. Render function should return a single root node.",e),t=yt()),t.parent=i,t}}(Nn);var Xn=[String,RegExp,Array],Qn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Xn,exclude:Xn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Gn(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Vn(t,function(t){return Wn(e,t)})}),this.$watch("exclude",function(e){Vn(t,function(t){return!Wn(e,t)})})},render:function(){var t=this.$slots.default,e=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||(o=n).isComment&&o.asyncFactory))return n}var o}(t),n=e&&e.componentOptions;if(n){var o=Hn(n),r=this.include,a=this.exclude;if(r&&(!o||!Wn(r,o))||a&&o&&Wn(a,o))return e;var s=this.cache,u=this.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;s[l]?(e.componentInstance=s[l].componentInstance,y(u,l),u.push(l)):(s[l]=e,u.push(l),this.max&&u.length>parseInt(this.max)&&Gn(s,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}}};!function(t){var e={get:function(){return B},set:function(){at("Do not replace the Vue.config object, set individual fields instead.")}};Object.defineProperty(t,"config",e),t.util={warn:at,extend:k,mergeOptions:Bt,defineReactive:Dt},t.set=kt,t.delete=Ot,t.nextTick=ue,t.observable=function(t){return Tt(t),t},t.options=Object.create(null),E.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,k(t.options.components,Qn),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=Bt(this.options,t),this}}(t),Un(t),function(t){E.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&Et(t),"component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(Nn),Object.defineProperty(Nn.prototype,"$isServer",{get:et}),Object.defineProperty(Nn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Nn,"FunctionalRenderContext",{value:Je}),Nn.version="2.6.11";var Jn="[object Array]",Kn="[object Object]";function Yn(t,e){var n={};return function t(e,n){if(e===n)return;var o=to(e);var i=to(n);if(o==Kn&&i==Kn){if(Object.keys(e).length>=Object.keys(n).length)for(var r in n){var a=e[r];void 0===a?e[r]=null:t(a,n[r])}}else o==Jn&&i==Jn&&e.length>=n.length&&n.forEach(function(n,o){t(e[o],n)})}(t,e),function t(e,n,o,i){if(e===n)return;var r=to(e);var a=to(n);if(r==Kn)if(a!=Kn||Object.keys(e).length<Object.keys(n).length)Zn(i,o,e);else{var s=function(r){var a=e[r],s=n[r],u=to(a),l=to(s);if(u!=Jn&&u!=Kn)a!=n[r]&&Zn(i,(""==o?"":o+".")+r,a);else if(u==Jn)l!=Jn?Zn(i,(""==o?"":o+".")+r,a):a.length<s.length?Zn(i,(""==o?"":o+".")+r,a):a.forEach(function(e,n){t(e,s[n],(""==o?"":o+".")+r+"["+n+"]",i)});else if(u==Kn)if(l!=Kn||Object.keys(a).length<Object.keys(s).length)Zn(i,(""==o?"":o+".")+r,a);else for(var c in a)t(a[c],s[c],(""==o?"":o+".")+r+"."+c,i)};for(var u in e)s(u)}else r==Jn?a!=Jn?Zn(i,o,e):e.length<n.length?Zn(i,o,e):e.forEach(function(e,r){t(e,n[r],o+"["+r+"]",i)}):Zn(i,o,e)}(t,e,"",n),n}function Zn(t,e,n){t[e]=n}function to(t){return Object.prototype.toString.call(t)}function eo(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"development",VUE_APP_PLATFORM:"mp-weixin",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var o=0;o<n.length;o++)n[o]()}}function no(t,e){if(!t.__next_tick_pending&&!function(t){return bn.find(function(e){return t._watcher===e})}(t)){if(Object({NODE_ENV:"development",VUE_APP_PLATFORM:"mp-weixin",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"development",VUE_APP_PLATFORM:"mp-weixin",BASE_URL:"/"}).VUE_APP_DEBUG){var o=t.$scope;console.log("["+ +new Date+"]["+(o.is||o.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(e){Qt(e,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!=typeof Promise)return new Promise(function(t){i=t})}function oo(){}function io(t){return Array.isArray(t)?function(t){for(var e,n="",o=0,r=t.length;o<r;o++)i(e=io(t[o]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):s(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var ro=A(function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){var o=t.split(n);o.length>1&&(e[o[0].trim()]=o[1].trim())}}),e});var ao=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];var so=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];Nn.prototype.__patch__=function(t,e){var n,o,i=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,a=Object.create(null);try{n=this,o=Object.create(null),[].concat(Object.keys(n._data||{}),Object.keys(n._computedWatchers||{})).reduce(function(t,e){return t[e]=n[e],t},o),Object.assign(o,n.$mp.data||{}),Array.isArray(n.$options.behaviors)&&-1!==n.$options.behaviors.indexOf("uni://form-field")&&(o.name=n.name,o.value=n.value),a=JSON.parse(JSON.stringify(o))}catch(t){console.error(t)}a.__webviewId__=r.data.__webviewId__;var s=Object.create(null);Object.keys(a).forEach(function(t){s[t]=r.data[t]});var u=Yn(a,s);Object.keys(u).length?(Object({NODE_ENV:"development",VUE_APP_PLATFORM:"mp-weixin",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(u)),this.__next_tick_pending=!0,r.setData(u,function(){i.__next_tick_pending=!1,eo(i)})):eo(this)}},Nn.prototype.$mount=function(t,e){return function(t,e,n){return t.mpType?("app"===t.mpType&&(t.$options.render=oo),t.$options.render||(t.$options.render=oo,t.$options.template&&"#"!==t.$options.template.charAt(0)||t.$options.el||e?at("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",t):at("Failed to mount component: template or render function not defined.",t)),"mp-toutiao"!==t.mpHost&&yn(t,"beforeMount"),new Rn(t,function(){t._update(t._render(),n)},R,{before:function(){t._isMounted&&!t._isDestroyed&&yn(t,"beforeUpdate")}},!0),n=!1,t):t}(this,t,e)},function(t){var e=t.extend;t.extend=function(t){var n=(t=t||{}).methods;return n&&Object.keys(n).forEach(function(e){-1!==so.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,o=n.created;so.forEach(function(t){n[t]=o}),t.prototype.__lifecycle_hooks__=so}(Nn),function(t){t.config.errorHandler=function(t){var e=getApp();e&&e.onError?e.onError(t):console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope.triggerEvent(t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return no(this,t)},ao.forEach(function(e){t.prototype[e]=function(t){return this.$scope&&this.$scope[e]?this.$scope[e](t):"undefined"!=typeof my?"createSelectorQuery"===e?my.createSelectorQuery(t):"createIntersectionObserver"===e?my.createIntersectionObserver(t):void 0:void 0}}),t.prototype.__init_provide=Te,t.prototype.__init_injections=De,t.prototype.__call_hook=function(t,e){var n=this;ft();var o,i=n.$options[t],r=t+" hook";if(i)for(var a=0,s=i.length;a<s;a++)o=Jt(i[a],n,e?[e]:null,n,r);return n._hasHookEvent&&n.$emit("hook:"+t,e),gt(),o},t.prototype.__set_model=function(t,e,n,o){Array.isArray(o)&&(-1!==o.indexOf("trim")&&(n=n.trim()),-1!==o.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return c(t)&&t.$orig||t},t.prototype.__get_value=function(t,e){return function t(e,n){var o=n.split("."),i=o[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===o.length?e[i]:t(e[i],o.slice(1).join("."))}(e||this,t)},t.prototype.__get_class=function(t,e){return function(t,e){return i(t)||i(e)?(n=t,o=io(e),n?o?n+" "+o:n:o||""):"";var n,o}(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n,o=(n=t,Array.isArray(n)?O(n):"string"==typeof n?ro(n):n),i=e?k(e,o):o;return Object.keys(i).map(function(t){return C(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,o,i,r,a;if(Array.isArray(t)){for(n=new Array(t.length),o=0,i=t.length;o<i;o++)n[o]=e(t[o],o);return n}if(s(t)){for(r=Object.keys(t),n=Object.create(null),o=0,i=r.length;o<i;o++)n[a=r[o]]=e(t[a],a,o);return n}return[]}}(Nn),e.default=Nn}.call(this,n(/*! ./../../../../../webpack/buildin/global.js */3))},204:
/*!******************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/api/capfee.js ***!
  \******************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.disableFeeCategory=e.enableFeeCategory=e.createFeeCategory=e.queryFeeCategory=void 0;var o,i=(o=n(/*! @/utils/http.js */23))&&o.__esModule?o:{default:o};e.queryFeeCategory=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{pageIndex:1,pageRows:-1};return i.default.request({url:t+"/QueryFeeCategory",data:e,method:"post"})};e.createFeeCategory=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/CreateFeeCategory",data:e,method:"post"})};e.enableFeeCategory=function(t,e){return i.default.request({url:t+"/EnableFeeCategory/"+e,method:"post"})};e.disableFeeCategory=function(t,e){return i.default.request({url:t+"/DisableFeeCategory/"+e,method:"post"})}},21:
/*!**********************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/utils/business.js ***!
  \**********************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(/*! @/api/common.js */22),i=n(/*! @/api/product.js */64),r=n(/*! @/config/common.js */56),a={curPage:"",getCurrentPage:function(){var t=getCurrentPages();this.curPage=t[t.length-1]},getCurrentUnit:function(){var e=this;return this.getCurrentPage(),this.curPage.$vm.$refs.loading.open(),new Promise(function(n,i){(0,o.query)(r.api.contactUnit).then(function(o){console.log("#currentUnit#"),console.log(o),e.curPage.$vm.$refs.loading.close(),200==o.status&&"0000"==o.data.returnCode?t.setStorageSync("currentUnitList",o.data.data.resultList):t.setStorageSync("currentUnitList",[]),n("success")}).catch(function(n){e.curPage.$vm.$refs.loading.close(),t.setStorageSync("currentUnitList",[]),i("error")})})},getBaseProduct:function(){var e=this;return this.getCurrentPage(),this.curPage.$vm.$refs.loading.open(),new Promise(function(n,i){(0,o.query)(r.api.baseProduct).then(function(o){e.curPage.$vm.$refs.loading.close(),console.log("#baseProduct#"),console.log(o),200==o.status&&"0000"==o.data.returnCode?t.setStorageSync("productList",o.data.data.resultList):t.setStorageSync("productList",[]),n("success")}).catch(function(n){e.curPage.$vm.$refs.loading.close(),t.setStorageSync("productList",[]),i("error")})})},getProductCategory:function(){var e=this;return this.getCurrentPage(),this.curPage.$vm.$refs.loading.open(),new Promise(function(n,o){(0,i.queryProductCategory)(r.api.baseProduct).then(function(o){e.curPage.$vm.$refs.loading.close(),console.log("#ProductCategory#"),console.log(o),200==o.status&&"0000"==o.data.returnCode?t.setStorageSync("productCategory",o.data.data):t.setStorageSync("productCategory",[]),n("success")}).catch(function(n){e.curPage.$vm.$refs.loading.close(),t.setStorageSync("productCategory",[]),o("error")})})}};e.default=a}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},22:
/*!******************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/api/common.js ***!
  \******************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.update=e.getForReturn=e.get=e.query=void 0;var o,i=(o=n(/*! @/utils/http.js */23))&&o.__esModule?o:{default:o};e.query=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{pageIndex:1,pageRows:-1};return i.default.request({url:t+"/Query",data:e,method:"post"})};e.get=function(t,e){return i.default.request({url:t+"/Get/"+e,method:"post"})};e.getForReturn=function(t,e){return i.default.request({url:t+"/GetForReturn/"+e,method:"post"})};e.update=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/Update",data:e,method:"post"})};e.create=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/Create",data:e,method:"post"})}},23:
/*!******************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/utils/http.js ***!
  \******************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=(o=n(/*! @/js-sdk/uni-axios */24))&&o.__esModule?o:{default:o},r=n(/*! @/config/common.js */56);n(/*! @/components/uni-popup/uni-popup.vue */57);var a=i.default.create({baseURL:r.api.baseUrl,timeout:6e3,headers:{"Content-Type":"application/json"}});a.interceptors.request.use(function(e){var n=t.getStorageSync("userInfo");return n.token&&(e.headers.Authorization="Bearer "+n.token),e}),a.interceptors.response.use(function(e){var n=e.config.url;return 0==n.includes("GetUserInfo")&&0==n.includes("RefreshToken")&&0==n.includes("ContactUnit/Query")&&0==n.includes("BseProduct/Query")&&0==n.includes("QueryProductCategory")&&200==e.status&&("401"==e.data.returnCode&&t.reLaunch({url:"/pages/my/login/login"}),"402"==e.data.returnCode&&t.reLaunch({url:"/pages/my/login/login"}),"403"==e.data.returnCode&&t.showModal({title:"续费提醒",content:"您的服务已到期，购买继续使用!",confirmText:"续费",showCancel:!1,success:function(e){if(e.confirm)try{setTimeout(function(){t.reLaunch({url:"/pages/my/recharge/recharge"})},300)}catch(e){}}})),e},function(t){return Promise.reject(t.message)});var s=a;e.default=s}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},24:
=======
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    } else {
      console.error(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 204:
/*!************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/api/capfee.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.disableFeeCategory = exports.enableFeeCategory = exports.createFeeCategory = exports.queryFeeCategory = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var queryFeeCategory = function queryFeeCategory(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { "pageIndex": 1, "pageRows": -1 };
  return _http.default.request({
    url: url + '/QueryFeeCategory',
    data: data,
    method: 'post' });

};exports.queryFeeCategory = queryFeeCategory;

var createFeeCategory = function createFeeCategory(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/CreateFeeCategory',
    data: data,
    method: 'post' });

};exports.createFeeCategory = createFeeCategory;

var enableFeeCategory = function enableFeeCategory(url, id) {
  return _http.default.request({
    url: url + '/EnableFeeCategory/' + id,
    method: 'post' });

};exports.enableFeeCategory = enableFeeCategory;

var disableFeeCategory = function disableFeeCategory(url, id) {
  return _http.default.request({
    url: url + '/DisableFeeCategory/' + id,
    method: 'post' });

};exports.disableFeeCategory = disableFeeCategory;

/***/ }),

/***/ 21:
/*!****************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/utils/business.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _common = __webpack_require__(/*! @/api/common.js */ 22);
var _product = __webpack_require__(/*! @/api/product.js */ 64);
var _common2 = __webpack_require__(/*! @/config/common.js */ 56);var _default =

{
  curPage: '',
  getCurrentPage: function getCurrentPage() {
    var pages = getCurrentPages();
    this.curPage = pages[pages.length - 1];
  },
  getCurrentUnit: function getCurrentUnit() {var _this = this;
    this.getCurrentPage();
    this.curPage.$vm.$refs.loading.open();
    return new Promise(function (resolve, reject) {
      (0, _common.query)(_common2.api.contactUnit).then(function (res) {
        console.log("#currentUnit#");
        console.log(res);
        _this.curPage.$vm.$refs.loading.close();
        if (res.status == 200 && res.data.returnCode == '0000') {
          uni.setStorageSync('currentUnitList', res.data.data.resultList);
        } else {
          uni.setStorageSync('currentUnitList', []);
        }
        resolve('success');
      }).catch(function (error) {
        _this.curPage.$vm.$refs.loading.close();
        uni.setStorageSync('currentUnitList', []);
        reject('error');
      });
    });
  },
  getBaseProduct: function getBaseProduct() {var _this2 = this;
    this.getCurrentPage();
    this.curPage.$vm.$refs.loading.open();
    return new Promise(function (resolve, reject) {
      (0, _common.query)(_common2.api.baseProduct).then(function (res) {
        _this2.curPage.$vm.$refs.loading.close();
        console.log("#baseProduct#");
        console.log(res);
        if (res.status == 200 && res.data.returnCode == '0000') {
          uni.setStorageSync('productList', res.data.data.resultList);
        } else {
          uni.setStorageSync('productList', []);
        }
        resolve('success');
      }).catch(function (error) {
        _this2.curPage.$vm.$refs.loading.close();
        uni.setStorageSync('productList', []);
        reject('error');
      });
    });
  },
  getProductCategory: function getProductCategory() {var _this3 = this;
    this.getCurrentPage();
    this.curPage.$vm.$refs.loading.open();
    return new Promise(function (resolve, reject) {
      (0, _product.queryProductCategory)(_common2.api.baseProduct).then(function (res) {
        _this3.curPage.$vm.$refs.loading.close();
        console.log("#ProductCategory#");
        console.log(res);
        if (res.status == 200 && res.data.returnCode == '0000') {
          uni.setStorageSync('productCategory', res.data.data);
        } else {
          uni.setStorageSync('productCategory', []);
        }
        resolve('success');
      }).catch(function (error) {
        _this3.curPage.$vm.$refs.loading.close();
        uni.setStorageSync('productCategory', []);
        reject('error');
      });
    });
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 22:
/*!************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/api/common.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.create = exports.update = exports.getForReturn = exports.get = exports.query = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var query = function query(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { "pageIndex": 1, "pageRows": -1 };
  return _http.default.request({
    url: url + '/Query',
    data: data,
    method: 'post' });

};exports.query = query;

var get = function get(url, id) {
  return _http.default.request({
    url: url + '/Get/' + id,
    method: 'post' });

};exports.get = get;

var getForReturn = function getForReturn(url, id) {
  return _http.default.request({
    url: url + '/GetForReturn/' + id,
    method: 'post' });

};exports.getForReturn = getForReturn;

var update = function update(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/Update',
    data: data,
    method: 'post' });

};exports.update = update;

var create = function create(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/Create',
    data: data,
    method: 'post' });

};exports.create = create;

/***/ }),

/***/ 23:
/*!************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/utils/http.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _uniAxios = _interopRequireDefault(__webpack_require__(/*! @/js-sdk/uni-axios */ 24));
var _common = __webpack_require__(/*! @/config/common.js */ 56);
var _uniPopup = __webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 57);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 创建自定义接口服务实例
var http = _uniAxios.default.create({
  baseURL: _common.api.baseUrl,
  timeout: 6000,



  headers: {
    'Content-Type': 'application/json'
    //'X-Requested-With': 'XMLHttpRequest',
  } });


// 拦截器 在请求之前拦截
http.interceptors.request.use(function (config) {
  var userInfo = uni.getStorageSync('userInfo');
  if (userInfo.token) {
    config.headers.Authorization = 'Bearer ' + userInfo.token;
  }
  // code...
  // 获取本地存储的Cookie
  // const cookie = uni.getStorageSync('cookie')
  // 设置Cookie
  // config.headers.Cookie = cookie
  return config;
});

// 拦截器 在请求之后拦截
http.interceptors.response.use(function (response) {
  // code...
  // 获取cookie
  // let headerStr = JSON.stringify(response.headers)
  // let cookie = (/(?:Set-Cookie).+;/.exec(headerStr)[0]).replace(/Set-Cookie|:|"/g, "")
  // if (cookie) {
  // uni.setStorage({
  // key: 'cookie',
  // data: cookie.split(';')[0]
  // })
  // }
  // 
  var url = response.config.url;

  if (url.includes("GetUserInfo") == false && url.includes("RefreshToken") == false && url.includes("ContactUnit/Query") == false && url.includes("BseProduct/Query") == false && url.includes("QueryProductCategory") == false) {
    if (response.status == 200) {
      if (response.data.returnCode == '401') {
        uni.reLaunch({
          url: '/pages/my/login/login' });

      }
      if (response.data.returnCode == '402') {
        uni.reLaunch({
          url: '/pages/my/login/login' });

      }

      if (response.data.returnCode == '403') {
        // console.log("检测"); 
        // uni.reLaunch({
        // 	url: '/pages/my/recharge/recharge'
        // });
        // this.$refs.popup.open();
        uni.showModal({
          title: '续费提醒',
          content: '您的服务已到期，购买继续使用!',
          confirmText: '续费',
          showCancel: false,
          success: function success(e) {
            if (e.confirm) {
              try {
                setTimeout(function () {
                  uni.reLaunch({
                    url: '/pages/my/recharge/recharge' });

                }, 300);
              } catch (e) {}
            }
          } });

      }
    }
  }
  return response;
}, function (error) {
  return Promise.reject(error.message);
});var _default =

http;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 24:
/*!************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/js-sdk/uni-axios/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _uniAxios = __webpack_require__(/*! ./uni-axios */ 25);var _default =
_uniAxios.axios;exports.default = _default;

/***/ }),

/***/ 25:
/*!****************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/js-sdk/uni-axios/uni-axios.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _exportNames = { axios: true };Object.defineProperty(exports, "axios", { enumerable: true, get: function get() {return _axios.default;} });var _axios = _interopRequireWildcard(__webpack_require__(/*! axios */ 26));









































Object.keys(_axios).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _axios[key];} });});var _utils = _interopRequireDefault(__webpack_require__(/*! axios/lib/utils */ 28));var _adapter = __webpack_require__(/*! ./adapter */ 54);var _normalizeHeaderName = _interopRequireDefault(__webpack_require__(/*! axios/lib/helpers/normalizeHeaderName */ 40));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}function setContentTypeIfUnset(headers, value) {if (!_utils.default.isUndefined(headers) && _utils.default.isUndefined(headers['Content-Type'])) {headers['Content-Type'] = value;}}_axios.default.defaults.transformRequest = [function transformRequest(data, headers) {(0, _normalizeHeaderName.default)(headers, 'Accept');(0, _normalizeHeaderName.default)(headers, 'Content-Type');if (_utils.default.isFormData(data) || _utils.default.isArrayBuffer(data) || _utils.default.isBuffer(data) || _utils.default.isStream(data) || _utils.default.isFile(data) || _utils.default.isBlob(data)) {return data;}if (_utils.default.isArrayBufferView(data)) {return data.buffer;}if (_utils.default.isURLSearchParams(data)) {setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');return data.toString();}if (_utils.default.isObject(data)) {setContentTypeIfUnset(headers, 'application/json;charset=utf-8');return JSON.stringify(data);}return data;}];_axios.default.defaults.adapter = _adapter.adapter;

/***/ }),

/***/ 253:
/*!**************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/api/stkstock.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.stockQuery = exports.stockCheck = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var stockCheck = function stockCheck(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/StockCheck',
    data: data,
    method: 'post' });

};exports.stockCheck = stockCheck;
var stockQuery = function stockQuery(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/Query',
    data: data,
    method: 'post' });

};exports.stockQuery = stockQuery;

/***/ }),

/***/ 26:
/*!**************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__(/*! ./lib/axios */ 27);

/***/ }),

/***/ 27:
>>>>>>> 3bb87a1fbc54a27008b2419f8403b991e2a840fe
/*!******************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/axios.js ***!
  \******************************************************************************************/
<<<<<<< HEAD
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(/*! ./uni-axios */25).axios;e.default=o},25:
=======
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 28);
var bind = __webpack_require__(/*! ./helpers/bind */ 29);
var Axios = __webpack_require__(/*! ./core/Axios */ 31);
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ 50);
var defaults = __webpack_require__(/*! ./defaults */ 37);

/**
                                       * Create an instance of Axios
                                       *
                                       * @param {Object} defaultConfig The default config for the instance
                                       * @return {Axios} A new instance of Axios
                                       */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 51);
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 52);
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 36);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ 53);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),

/***/ 270:
/*!***********************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/api/bills.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getinventory = exports.getinit = exports.get = exports.tokenpost = exports.query = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var query = function query(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/Query',
    data: data,
    method: 'post' });

};exports.query = query;
var tokenpost = function tokenpost(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url,
    data: data,
    method: 'post' });

};exports.tokenpost = tokenpost;
var get = function get(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/Get/' + data.id,
    data: data,
    method: 'post' });

};exports.get = get;
var getinit = function getinit(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/GetInit/' + data.id,
    data: data,
    method: 'post' });

};exports.getinit = getinit;
var getinventory = function getinventory(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/GetInventory/' + data.id,
    data: data,
    method: 'post' });

};exports.getinventory = getinventory;

/***/ }),

/***/ 28:
/*!******************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/utils.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ 29);
var isBuffer = __webpack_require__(/*! is-buffer */ 30);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
                                           * Determine if a value is an Array
                                           *
                                           * @param {Object} val The value to test
                                           * @returns {boolean} True if value is an Array, otherwise false
                                           */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
function isString(val) {
  return typeof val === 'string';
}

/**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
function isNumber(val) {
  return typeof val === 'number';
}

/**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
  navigator.product === 'NativeScript' ||
  navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined');

}

/**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function deepMerge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim };

/***/ }),

/***/ 286:
>>>>>>> 3bb87a1fbc54a27008b2419f8403b991e2a840fe
/*!**********************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/components/u-charts/u-charts.min.js ***!
  \**********************************************************************************************/
<<<<<<< HEAD
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={axios:!0};Object.defineProperty(e,"axios",{enumerable:!0,get:function(){return i.default}});var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}(n(/*! axios */26));Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(o,t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}}))});var r=u(n(/*! axios/lib/utils */28)),a=n(/*! ./adapter */54),s=u(n(/*! axios/lib/helpers/normalizeHeaderName */40));function u(t){return t&&t.__esModule?t:{default:t}}function l(t,e){!r.default.isUndefined(t)&&r.default.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}i.default.defaults.transformRequest=[function(t,e){return(0,s.default)(e,"Accept"),(0,s.default)(e,"Content-Type"),r.default.isFormData(t)||r.default.isArrayBuffer(t)||r.default.isBuffer(t)||r.default.isStream(t)||r.default.isFile(t)||r.default.isBlob(t)?t:r.default.isArrayBufferView(t)?t.buffer:r.default.isURLSearchParams(t)?(l(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.default.isObject(t)?(l(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],i.default.defaults.adapter=a.adapter},253:
/*!********************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/api/stkstock.js ***!
  \********************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.stockQuery=e.stockCheck=void 0;var o,i=(o=n(/*! @/utils/http.js */23))&&o.__esModule?o:{default:o};e.stockCheck=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/StockCheck",data:e,method:"post"})};e.stockQuery=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/Query",data:e,method:"post"})}},26:
/*!********************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/index.js ***!
  \********************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";t.exports=n(/*! ./lib/axios */27)},27:
/*!************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/axios.js ***!
  \************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./utils */28),i=n(/*! ./helpers/bind */29),r=n(/*! ./core/Axios */31),a=n(/*! ./core/mergeConfig */50);function s(t){var e=new r(t),n=i(r.prototype.request,e);return o.extend(n,r.prototype,e),o.extend(n,e),n}var u=s(n(/*! ./defaults */37));u.Axios=r,u.create=function(t){return s(a(u.defaults,t))},u.Cancel=n(/*! ./cancel/Cancel */51),u.CancelToken=n(/*! ./cancel/CancelToken */52),u.isCancel=n(/*! ./cancel/isCancel */36),u.all=function(t){return Promise.all(t)},u.spread=n(/*! ./helpers/spread */53),t.exports=u,t.exports.default=u},276:
/*!*****************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/api/bills.js ***!
  \*****************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getinventory=e.getinit=e.get=e.tokenpost=e.query=void 0;var o,i=(o=n(/*! @/utils/http.js */23))&&o.__esModule?o:{default:o};e.query=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/Query",data:e,method:"post"})};e.tokenpost=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t,data:e,method:"post"})};e.get=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/Get/"+e.id,data:e,method:"post"})};e.getinit=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/GetInit/"+e.id,data:e,method:"post"})};e.getinventory=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/GetInventory/"+e.id,data:e,method:"post"})}},28:
/*!************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/utils.js ***!
  \************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./helpers/bind */29),i=n(/*! is-buffer */30),r=Object.prototype.toString;function a(t){return"[object Array]"===r.call(t)}function s(t){return null!==t&&"object"==typeof t}function u(t){return"[object Function]"===r.call(t)}function l(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),a(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===r.call(t)},isBuffer:i,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===r.call(t)},isFile:function(t){return"[object File]"===r.call(t)},isBlob:function(t){return"[object Blob]"===r.call(t)},isFunction:u,isStream:function(t){return s(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function t(){var e={};function n(n,o){"object"==typeof e[o]&&"object"==typeof n?e[o]=t(e[o],n):e[o]=n}for(var o=0,i=arguments.length;o<i;o++)l(arguments[o],n);return e},deepMerge:function t(){var e={};function n(n,o){"object"==typeof e[o]&&"object"==typeof n?e[o]=t(e[o],n):e[o]="object"==typeof n?t({},n):n}for(var o=0,i=arguments.length;o<i;o++)l(arguments[o],n);return e},extend:function(t,e,n){return l(e,function(e,i){t[i]=n&&"function"==typeof e?o(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},29:
/*!*******************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/helpers/bind.js ***!
  \*******************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return t.apply(e,n)}}},292:
/*!****************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/components/u-charts/u-charts.min.js ***!
  \****************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(e){var n={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},o=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];if(null==t)throw new TypeError("Cannot convert undefined or null to object");return!n||0>=n.length?t:(n.forEach(function(e){t=function t(e,n){for(var o in n)e[o]=e[o]&&"[object Object]"===e[o].toString()?t(e[o],n[o]):e[o]=n[o];return e}(t,e)}),t)},i={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return 0!=t%1},approximatelyEqual:function(t,e){return 1e-10>Math.abs(t-e)},isSameSign:function(t,e){var n=Math.abs;return n(t)===t&&n(e)===e||n(t)!==t&&n(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){return t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,!(e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y)}};function r(t,e){var n=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,o){return e+e+n+n+o+o}),o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(o[1],16)+","+parseInt(o[2],16)+","+parseInt(o[3],16)+","+e+")"}function a(t,e,n){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");n=n||10,e=e||"upper";for(var o=1;1>n;)n*=10,o*=10;for(t="upper"===e?Math.ceil(t*o):Math.floor(t*o);0!=t%n;)"upper"===e?t++:t--;return t/o}function s(t,e,n){function o(t){for(;0>t;)t+=2*i;for(;t>2*i;)t-=2*i;return t}var i=Math.PI;return t=o(t),(e=o(e))>(n=o(n))&&(n+=2*i,t<e&&(t+=2*i)),t>=e&&t<=n}function u(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=i(t[e-1].y,t[e+1].y)||t[e].y<=o(t[e-1].y,t[e+1].y))}var o=Math.min,i=Math.max,r=null,a=null,s=null,u=null;if(1>e?(r=t[0].x+.2*(t[1].x-t[0].x),a=t[0].y+.2*(t[1].y-t[0].y)):(r=t[e].x+.2*(t[e+1].x-t[e-1].x),a=t[e].y+.2*(t[e+1].y-t[e-1].y)),e>t.length-3){var l=t.length-1;s=t[l].x-.2*(t[l].x-t[l-1].x),u=t[l].y-.2*(t[l].y-t[l-1].y)}else s=t[e+1].x-.2*(t[e+2].x-t[e].x),u=t[e+1].y-.2*(t[e+2].y-t[e].y);return n(t,e+1)&&(u=t[e+1].y),n(t,e)&&(a=t[e].y),(a>=i(t[e].y,t[e+1].y)||a<=o(t[e].y,t[e+1].y))&&(a=t[e].y),(u>=i(t[e].y,t[e+1].y)||u<=o(t[e].y,t[e+1].y))&&(u=t[e+1].y),{ctrA:{x:r,y:a},ctrB:{x:s,y:u}}}function l(t,e,n){return{x:n.x+t,y:n.y-e}}function c(t,e){if(e)for(;i.isCollision(t,e);)0<t.start.x?t.start.y--:0>t.start.x?t.start.y++:0<t.start.y?t.start.y++:t.start.y--;return t}function p(t,e,n){var o=0;return t.map(function(t){if(t.color||(t.color=n.colors[o],o=(o+1)%n.colors.length),t.index||(t.index=0),t.type||(t.type=e.type),void 0===t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function d(t,e){var n,o=e-t;return{minRange:a(t,"lower",n=1e4<=o?1e3:1e3<=o?100:100<=o?10:10<=o?5:1<=o?1:.1<=o?.1:.01<=o?.01:.001<=o?.001:1e-4<=o?1e-4:1e-5<=o?1e-5:1e-6),maxRange:a(e,"upper",n)}}function h(t){for(var e,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:n.fontSize,i=(t=(t+="").split(""),0),r=0;r<t.length;r++)e=t[r],i+=/[a-zA-Z]/.test(e)?7:/[0-9]/.test(e)?5.5:/\./.test(e)?2.7:/-/.test(e)?3.25:/[\u4e00-\u9fa5]/.test(e)?10:/\(|\)/.test(e)?3.73:/\s/.test(e)?2.5:/%/.test(e)?8:10;return i*o/10}function f(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function g(t,e,n){var o,i;return t.clientX?e.rotate?(i=e.height-t.clientX*e.pixelRatio,o=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(o=t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(i=e.height-t.x*e.pixelRatio,o=t.y*e.pixelRatio):(o=t.x*e.pixelRatio,i=t.y*e.pixelRatio),{x:o,y:i}}function m(t,e){for(var n,o=[],i=0;i<t.length;i++)if(null!==(n=t[i]).data[e]&&void 0!==n.data[e]&&n.show){var r={};r.color=n.color,r.type=n.type,r.style=n.style,r.pointShape=n.pointShape,r.disableLegend=n.disableLegend,r.name=n.name,r.show=n.show,r.data=n.format?n.format(n.data[e]):n.data[e],o.push(r)}return o}function v(t,e,n){var o=Math.pow;return o(t.x-e.x,2)+o(t.y-e.y,2)<=o(n,2)}function y(t){var e=[],n=[];return t.forEach(function(t){null===t?(n.length&&e.push(n),n=[]):n.push(t)}),n.length&&e.push(n),e}function x(t,e,n,o){var i={angle:0,xAxisHeight:n.xAxisHeight},r=t.map(function(t){return h(t,e.xAxis.fontSize||n.fontSize)}),a=Math.max.apply(this,r);return 1==e.xAxis.rotateLabel&&a+2*n.xAxisTextPadding>o&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*n.xAxisTextPadding+a*Math.sin(i.angle)),i}function b(t,e,n){var o={angle:0,xAxisHeight:n.xAxisHeight};o.ranges=function(t,e){var n=Math.min,o=Math.max,i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:-1,r=f(t),a=[];(r=r.filter(function(t){return"object"==typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t})).map(function(t){"object"==typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){a.push(t)}):a.push(t[0]):a.push(t.value):a.push(t)});var s=0,u=0;0<a.length&&(s=n.apply(this,a),u=o.apply(this,a)),-1<i?("number"==typeof e.xAxis.data[i].min&&(s=n(e.xAxis.data[i].min,s)),"number"==typeof e.xAxis.data[i].max&&(u=o(e.xAxis.data[i].max,u))):("number"==typeof e.xAxis.min&&(s=n(e.xAxis.min,s)),"number"==typeof e.xAxis.max&&(u=o(e.xAxis.max,u))),s===u&&(u+=u||10);for(var l=d(s,u),c=l.minRange,p=[],h=(l.maxRange-c)/e.xAxis.splitNumber,g=0;g<=e.xAxis.splitNumber;g++)p.push(c+h*g);return p}(t,e,n),o.rangesFormat=o.ranges.map(function(t){return t=e.xAxis.format?e.xAxis.format(t):i.toFixed(t,2)});var r=o.ranges.map(function(t){return t=i.toFixed(t,2),t=e.xAxis.format?e.xAxis.format(+t):t}),a=(o=Object.assign(o,S(r,e))).eachSpacing,s=r.map(function(t){return h(t)}),u=Math.max.apply(this,s);return u+2*n.xAxisTextPadding>a&&(o.angle=45*Math.PI/180,o.xAxisHeight=2*n.xAxisTextPadding+u*Math.sin(o.angle)),!0===e.xAxis.disabled&&(o.xAxisHeight=0),o}function A(t,e){for(var n,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,i=0,r=0,a=0;a<t.length;a++)(n=t[a]).data=null===n.data?0:n.data,i+=n.data;for(var s,u=0;u<t.length;u++)(s=t[u]).data=null===s.data?0:s.data,s._proportion_=0===i?1/t.length*o:s.data/i*o,s._radius_=e;for(var l,c=0;c<t.length;c++)(l=t[c])._start_=r,r+=2*l._proportion_*Math.PI;return t}function _(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var o,i=0;i<t.length;i++){(o=t[i]).data=null===o.data?0:o.data;var r;r="circle"==e.type?2:e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle,o._proportion_=r*o.data*n+e.startAngle,2<=o._proportion_&&(o._proportion_%=2)}return t}function w(t,e,n,o,i,r){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/n),r.extra.column&&r.extra.column.width&&0<+r.extra.column.width&&(t.width=Math.min(t.width,+r.extra.column.width)),0>=t.width&&(t.width=1),t.x+=(o+.5-n/2)*t.width,t)})}function S(t,e){var n=e.width-e.area[1]-e.area[3],o=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&1<o&&"justify"==e.xAxis.boundaryGap&&(o-=1);var i=n/o,r=[],a=e.area[3],s=e.width-e.area[1];return t.forEach(function(t,e){r.push(a+e*i)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?r.push(a+t.length*i):r.push(s)),{xAxisPoints:r,startX:a,endX:s,eachSpacing:i}}function P(t,e,n,o,i,r){var a=Math.round,s=7<arguments.length&&void 0!==arguments[7]?arguments[7]:1,u="center";("line"==r.type||"area"==r.type)&&(u=r.xAxis.boundaryGap);var l=[],c=r.height-r.area[0]-r.area[2],p=r.width-r.area[1]-r.area[3];return t.forEach(function(t,d){if(null===t)l.push(null);else{var h={color:t.color,x:o[d]},f=t;if("object"==typeof t&&null!==t)if(t.constructor==Array){var g,m,v;m=(g=[].concat(r.chartData.xAxisData.ranges)).shift(),v=g.pop(),f=t[1],h.x=r.area[3]+p*(t[0]-m)/(v-m)}else f=t.value;"center"==u&&(h.x+=a(i/2));var y=c*(f-e)/(n-e);y*=s,h.y=r.height-a(y)-r.area[2],l.push(h)}}),l}function C(t,e,n,o,i,r,a,s,u){var l=Math.round,c=9<arguments.length&&void 0!==arguments[9]?arguments[9]:1,p=[],d=r.height-r.area[0]-r.area[2];return t.forEach(function(t,a){if(null===t)p.push(null);else{var h={color:t.color,x:o[a]+l(i/2)};if(0<s){for(var f=0,g=0;g<=s;g++)f+=u[g].data[a];var m=d*(f-e)/(n-e),v=d*(f-t-e)/(n-e)}else m=d*((f=t)-e)/(n-e),v=0;var y=v;m*=c,y*=c,h.y=r.height-l(m)-r.area[2],h.y0=r.height-l(y)-r.area[2],p.push(h)}}),p}function T(t,e,n,o){var i,r=Math.min,a=Math.max,s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:-1;i="stack"==o?function(t,e){for(var n=Array(e),o=0;o<n.length;o++)n[o]=0;for(var i=0;i<t.length;i++)for(o=0;o<n.length;o++)n[o]+=t[i].data[o];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(n)},[])}(t,e.categories.length):f(t);var u=[];(i=i.filter(function(t){return"object"==typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t})).map(function(t){"object"==typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){u.push(t)}):u.push(t[1]):u.push(t.value):u.push(t)});var l=0,c=0;(0<u.length&&(l=r.apply(this,u),c=a.apply(this,u)),-1<s?("number"==typeof e.yAxis.data[s].min&&(l=r(e.yAxis.data[s].min,l)),"number"==typeof e.yAxis.data[s].max&&(c=a(e.yAxis.data[s].max,c))):("number"==typeof e.yAxis.min&&(l=r(e.yAxis.min,l)),"number"==typeof e.yAxis.max&&(c=a(e.yAxis.max,c))),l===c)&&(c+=c||10);for(var p=d(l,c),h=p.minRange,g=[],m=(p.maxRange-h)/e.yAxis.splitNumber,v=0;v<=e.yAxis.splitNumber;v++)g.push(h+m*v);return g.reverse()}function D(t,e,n){var r=Math.max,a=o({},{type:""},e.extra.column),s=e.yAxis.data.length,u=Array(s);if(0<s){for(var l=0;l<s;l++){u[l]=[];for(var c=0;c<t.length;c++)t[c].index==l&&u[l].push(t[c])}for(var p,d=Array(s),f=Array(s),g=Array(s),m=function(t,o){o=e.yAxis.data[t],1==e.yAxis.disabled&&(o.disabled=!0),d[t]=T(u[t],e,n,a.type,t);var s=o.fontSize||n.fontSize;g[t]={position:o.position?o.position:"left",width:0},f[t]=d[t].map(function(e){return p=o,e=i.toFixed(e,6),e=o.format?o.format(+e):e,g[t].width=r(g[t].width,h(e,s)+5),e});var l=o.calibration?4*e.pixelRatio:0;g[t].width+=l+3*e.pixelRatio,!0===o.disabled&&(g[t].width=0),p=o},v=0;v<s;v++)m(v,p)}else{f=[,],g=[,];(d=[,])[0]=T(t,e,n,a.type),g[0]={position:"left",width:0};var y=e.yAxis.fontSize||n.fontSize;f[0]=d[0].map(function(t){return t=i.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(+t):t,g[0].width=r(g[0].width,h(t,y)+5),t}),g[0].width+=3*e.pixelRatio,!0===e.yAxis.disabled?(g[0]={position:"left",width:0},e.yAxis.data[0]={disabled:!0}):e.yAxis.data[0]={disabled:!1,position:"left",max:e.yAxis.max,min:e.yAxis.min,format:e.yAxis.format}}return{rangesFormat:f,ranges:d,yAxisWidth:g}}function k(t,e){var n=Math.PI;!0===e.rotateLock?!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*n/180),e._rotate_=!0):(t.translate(e.height,0),t.rotate(90*n/180))}function O(t,e,n,o,i){o.beginPath(),"hollow"==i.dataPointShapeType?(o.setStrokeStyle(e),o.setFillStyle(i.background),o.setLineWidth(2*i.pixelRatio)):(o.setStrokeStyle("#ffffff"),o.setFillStyle(e),o.setLineWidth(1*i.pixelRatio)),"diamond"===n?t.forEach(function(t){null!==t&&(o.moveTo(t.x,t.y-4.5),o.lineTo(t.x-4.5,t.y),o.lineTo(t.x,t.y+4.5),o.lineTo(t.x+4.5,t.y),o.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t){null!==t&&(o.moveTo(t.x+2.5*i.pixelRatio,t.y),o.arc(t.x,t.y,3*i.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t){null!==t&&(o.moveTo(t.x-3.5,t.y-3.5),o.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"==n&&t.forEach(function(t){null!==t&&(o.moveTo(t.x,t.y-4.5),o.lineTo(t.x-4.5,t.y+4.5),o.lineTo(t.x+4.5,t.y+4.5),o.lineTo(t.x,t.y-4.5))}),o.closePath(),o.fill(),o.stroke()}function R(t,e,n,o){var i=t.title.fontSize||e.titleFontSize,r=t.subtitle.fontSize||e.subtitleFontSize,a=t.title.name||"",s=t.subtitle.name||"",u=t.title.color||e.titleColor,l=t.subtitle.color||e.subtitleColor,c=a?i:0,p=s?r:0;if(s){var d=h(s,r),f=o.x-d/2+(t.subtitle.offsetX||0),g=o.y+r/2+(t.subtitle.offsetY||0);a&&(g+=(c+5)/2),n.beginPath(),n.setFontSize(r),n.setFillStyle(l),n.fillText(s,f,g),n.closePath(),n.stroke()}if(a){var m=h(a,i),v=o.x-m/2+(t.title.offsetX||0),y=o.y+i/2+(t.title.offsetY||0);s&&(y-=(p+5)/2),n.beginPath(),n.setFontSize(i),n.setFillStyle(u),n.fillText(a,v,y),n.closePath(),n.stroke()}}function I(t,e,n,o){var i=e.data;t.forEach(function(t,r){if(null!==t){o.beginPath(),o.setFontSize(e.textSize||n.fontSize),o.setFillStyle(e.textColor||"#666666");var a=i[r];"object"==typeof i[r]&&null!==i[r]&&(a=i[r].constructor==Array?i[r][1]:i[r].value);var s=e.format?e.format(a):a;o.fillText(s+"",t.x-h(s,e.textSize||n.fontSize)/2,t.y-4),o.closePath(),o.stroke()}})}function L(t,e,n,o,r,a){for(var s=Math.cos,u=Math.sin,p=Math.min,d=Math.max,f=Math.PI,g=n.pieChartLinePadding,m=[],v=null,y=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):i.toFixed(100*t._proportion_.toFixed(4))+"%";return t._rose_proportion_&&(t._proportion_=t._rose_proportion_),{arc:2*f-(t._start_+2*f*t._proportion_/2),text:e,color:t.color,radius:t._radius_,textColor:t.textColor,textSize:t.textSize}}),x=0;x<y.length;x++){var b=y[x],A=s(b.arc)*(b.radius+g),_=u(b.arc)*(b.radius+g),w=s(b.arc)*b.radius,S=u(b.arc)*b.radius,P=0<=A?A+n.pieChartTextPadding:A-n.pieChartTextPadding,C=_,T=h(b.text,b.textSize||n.fontSize),D=C;v&&i.isSameXCoordinateArea(v.start,{x:P})&&(D=0<P?p(C,v.start.y):0>A?d(C,v.start.y):0<C?d(C,v.start.y):p(C,v.start.y)),0>P&&(P-=T),v=c({lineStart:{x:w,y:S},lineEnd:{x:A,y:_},start:{x:P,y:D},width:T,height:n.fontSize,text:b.text,color:b.color,textColor:b.textColor,textSize:b.textSize},v),m.push(v)}for(var k=0;k<m.length;k++){var O=m[k],R=l(O.lineStart.x,O.lineStart.y,a),I=l(O.lineEnd.x,O.lineEnd.y,a),L=l(O.start.x,O.start.y,a);o.setLineWidth(1*e.pixelRatio),o.setFontSize(n.fontSize),o.beginPath(),o.setStrokeStyle(O.color),o.setFillStyle(O.color),o.moveTo(R.x,R.y);var F=0>O.start.x?L.x+O.width:L.x,j=0>O.start.x?L.x-5:L.x+5;o.quadraticCurveTo(I.x,I.y,F,L.y),o.moveTo(R.x,R.y),o.stroke(),o.closePath(),o.beginPath(),o.moveTo(L.x+O.width,L.y),o.arc(F,L.y,2,0,2*f),o.closePath(),o.fill(),o.beginPath(),o.setFontSize(O.textSize||n.fontSize),o.setFillStyle(O.textColor||"#666666"),o.fillText(O.text,j,L.y+3),o.closePath(),o.stroke(),o.closePath()}}function F(t,e,n){for(var i,a=o({},{type:"solid",dashLength:4,data:[]},t.extra.markLine),s=t.area[3],u=t.width-t.area[1],l=function(t,e){for(var n,o,i=e.height-e.area[0]-e.area[2],r=0;r<t.length;r++){t[r].yAxisIndex=t[r].yAxisIndex?t[r].yAxisIndex:0;var a=[].concat(e.chartData.yAxisData.ranges[t[r].yAxisIndex]);n=a.pop(),o=a.shift();var s=i*(t[r].value-n)/(o-n);t[r].y=e.height-Math.round(s)-e.area[2]}return t}(a.data,t),c=0;c<l.length;c++)if(i=o({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},l[c]),"dash"==a.type&&n.setLineDash([a.dashLength,a.dashLength]),n.setStrokeStyle(i.lineColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(s,i.y),n.lineTo(u,i.y),n.stroke(),n.setLineDash([]),i.showLabel){var p=t.yAxis.format?t.yAxis.format(+i.value):i.value;n.setFontSize(e.fontSize);var d=h(p,e.fontSize),f=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,g=Math.max(t.area[3],d+2*e.toolTipPadding)-f,m=i.y;n.setFillStyle(r(i.labelBgColor,i.labelBgOpacity)),n.setStrokeStyle(i.labelBgColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.rect(f,m-.5*e.fontSize-e.toolTipPadding,g,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(i.labelFontColor),n.fillText(p+"",f+(g-d)/2,m+.5*e.fontSize),n.stroke()}}function j(t,e,n,i,a){var s=Math.round,u=o({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},n.extra.tooltip),l=4*n.pixelRatio,c=5*n.pixelRatio,p=8*n.pixelRatio,d=!1;("line"==n.type||"area"==n.type||"candle"==n.type||"mix"==n.type)&&function(t,e,n,o){var i=e.extra.tooltip||{};i.gridType=null==i.gridType?"solid":i.gridType,i.dashLength=null==i.dashLength?4:i.dashLength;var a=e.area[0],s=e.height-e.area[2];if("dash"==i.gridType&&o.setLineDash([i.dashLength,i.dashLength]),o.setStrokeStyle(i.gridColor||"#cccccc"),o.setLineWidth(1*e.pixelRatio),o.beginPath(),o.moveTo(t,a),o.lineTo(t,s),o.stroke(),o.setLineDash([]),i.xAxisLabel){var u=e.categories[e.tooltip.index];o.setFontSize(n.fontSize);var l=h(u,n.fontSize),c=t-.5*l,p=s;o.beginPath(),o.setFillStyle(r(i.labelBgColor||n.toolTipBackground,i.labelBgOpacity||n.toolTipOpacity)),o.setStrokeStyle(i.labelBgColor||n.toolTipBackground),o.setLineWidth(1*e.pixelRatio),o.rect(c-n.toolTipPadding,p,l+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),o.closePath(),o.stroke(),o.fill(),o.beginPath(),o.setFontSize(n.fontSize),o.setFillStyle(i.labelFontColor||n.fontColor),o.fillText(u+"",c,p+n.toolTipPadding+n.fontSize),o.closePath(),o.stroke()}}(n.tooltip.offset.x,n,i,a),(e=o({x:0,y:0},e)).y-=8*n.pixelRatio;var f=t.map(function(t){return h(t.text,i.fontSize)}),g=l+c+4*i.toolTipPadding+Math.max.apply(null,f),m=2*i.toolTipPadding+t.length*i.toolTipLineHeight;0==u.showBox||(e.x-Math.abs(n._scrollDistance_)+p+g>n.width&&(d=!0),m+e.y>n.height&&(e.y=n.height-m),a.beginPath(),a.setFillStyle(r(u.bgColor||i.toolTipBackground,u.bgOpacity||i.toolTipOpacity)),d?(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x-p,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x-p,e.y),a.lineTo(e.x-p-s(g),e.y),a.lineTo(e.x-p-s(g),e.y+m),a.lineTo(e.x-p,e.y+m),a.lineTo(e.x-p,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)):(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x+p,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x+p,e.y),a.lineTo(e.x+p+s(g),e.y),a.lineTo(e.x+p+s(g),e.y+m),a.lineTo(e.x+p,e.y+m),a.lineTo(e.x+p,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)),a.closePath(),a.fill(),t.forEach(function(t,n){if(null!==t.color){a.beginPath(),a.setFillStyle(t.color);var o=e.x+p+2*i.toolTipPadding,r=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding+1;d&&(o=e.x-g-p+2*i.toolTipPadding),a.fillRect(o,r,l,i.fontSize),a.closePath()}}),t.forEach(function(t,n){var o=e.x+p+2*i.toolTipPadding+l+c;d&&(o=e.x-g-p+2*i.toolTipPadding+ +l+c);var r=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding;a.beginPath(),a.setFontSize(i.fontSize),a.setFillStyle(u.fontColor),a.fillText(t.text,o,r+i.fontSize),a.closePath(),a.stroke()}))}function M(t,e,n,i){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,s=e.chartData.xAxisData,u=s.xAxisPoints,l=s.eachSpacing,c=o({},{type:"group",width:l/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),p=[];i.save();var d=-2,h=u.length+2;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),d=Math.floor(-e._scrollDistance_/l)-2,h=d+e.xAxis.itemCount+4),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&function(t,e,n,i,a){var s=o({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),u=e.area[0],l=e.height-e.area[2];i.beginPath(),i.setFillStyle(r(s.activeBgColor,s.activeBgOpacity)),i.rect(t-a/2,u,a,l-u),i.closePath(),i.fill()}(e.tooltip.offset.x,e,0,i,l),t.forEach(function(o,r){var s,f,g;f=(s=[].concat(e.chartData.yAxisData.ranges[o.index])).pop(),g=s.shift();var m=o.data;switch(c.type){case"group":var v=P(m,f,g,u,l,e,n,a),y=C(m,f,g,u,l,e,n,r,t,a);p.push(y),v=w(v,l,t.length,r,n,e);for(var x,b=0;b<v.length;b++)if(null!==(x=v[b])&&b>d&&b<h){i.beginPath(),i.setStrokeStyle(x.color||o.color),i.setLineWidth(1),i.setFillStyle(x.color||o.color);var A=x.x-x.width/2,_=e.height-x.y-e.area[2];i.moveTo(A-1,x.y),i.lineTo(A+x.width-2,x.y),i.lineTo(A+x.width-2,e.height-e.area[2]),i.lineTo(A,e.height-e.area[2]),i.lineTo(A,x.y),i.closePath(),i.stroke(),i.fill()}break;case"stack":v=C(m,f,g,u,l,e,n,r,t,a);p.push(v),v=function(t,e,n,o,i,r){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/2),r.extra.column&&r.extra.column.width&&0<+r.extra.column.width&&(t.width=Math.min(t.width,+r.extra.column.width)),t)})}(v,l,t.length,0,n,e);for(var S,T=0;T<v.length;T++)if(null!==(S=v[T])&&T>d&&T<h){i.beginPath(),i.setFillStyle(S.color||o.color);A=S.x-S.width/2+1,_=e.height-S.y-e.area[2];var D=e.height-S.y0-e.area[2];0<r&&(_-=D),i.moveTo(A,S.y),i.fillRect(A,S.y,S.width-2,_),i.closePath(),i.fill()}break;case"meter":v=P(m,f,g,u,l,e,n,a);if(p.push(v),v=function(t,e,n,o,i,r,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/2),r.extra.column&&r.extra.column.width&&0<+r.extra.column.width&&(t.width=Math.min(t.width,+r.extra.column.width)),0<o&&(t.width-=2*a),t)})}(v,l,t.length,r,n,e,c.meter.border),0==r){for(var k,O=0;O<v.length;O++)if(null!==(k=v[O])&&O>d&&O<h){i.beginPath(),i.setFillStyle(c.meter.fillColor);A=k.x-k.width/2,_=e.height-k.y-e.area[2];i.moveTo(A,k.y),i.fillRect(A,k.y,k.width,_),i.closePath(),i.fill(),0<c.meter.border&&(i.beginPath(),i.setStrokeStyle(o.color),i.setLineWidth(c.meter.border*e.pixelRatio),i.moveTo(A+.5*c.meter.border,k.y+_),i.lineTo(A+.5*c.meter.border,k.y+.5*c.meter.border),i.lineTo(A+k.width-.5*c.meter.border,k.y+.5*c.meter.border),i.lineTo(A+k.width-.5*c.meter.border,k.y+_),i.stroke())}}else for(var R,I=0;I<v.length;I++)if(null!==(R=v[I])&&I>d&&I<h){i.beginPath(),i.setFillStyle(R.color||o.color);A=R.x-R.width/2,_=e.height-R.y-e.area[2];i.moveTo(A,R.y),i.fillRect(A,R.y,R.width,_),i.closePath(),i.fill()}}}),!1!==e.dataLabel&&1===a&&t.forEach(function(o,r){var s,p,d;p=(s=[].concat(e.chartData.yAxisData.ranges[o.index])).pop(),d=s.shift();var h=o.data;switch(c.type){case"group":I(w(P(h,p,d,u,l,e,n,a),l,t.length,r,n,e),o,n,i);break;case"stack":I(C(h,p,d,u,l,e,n,r,t,a),o,n,i);break;case"meter":I(P(h,p,d,u,l,e,n,a),o,n,i)}}),i.restore(),{xAxisPoints:u,calPoints:p,eachSpacing:l}}function E(t,e,n,i,r){var a=5<arguments.length&&void 0!==arguments[5]?arguments[5]:1,s=o({},{color:{},average:{}},n.extra.candle);s.color=o({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=o({},{show:!1,name:[],day:[],color:i.colors},s.average),n.extra.candle=s;var l=n.chartData.xAxisData,c=l.xAxisPoints,p=l.eachSpacing,d=[];r.save();var h=-2,f=c.length+2,g=0,m=n.width+p;return n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&(r.translate(n._scrollDistance_,0),h=Math.floor(-n._scrollDistance_/p)-2,f=h+n.xAxis.itemCount+4,g=-n._scrollDistance_-p+n.area[3],m=g+(n.xAxis.itemCount+4)*p),s.average.show&&e.forEach(function(t){var e,o,s;o=(e=[].concat(n.chartData.yAxisData.ranges[t.index])).pop(),s=e.shift();for(var l,d=y(P(t.data,o,s,c,p,n,i,a)),h=0;h<d.length;h++){if(l=d[h],r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(1),1===l.length)r.moveTo(l[0].x,l[0].y),r.arc(l[0].x,l[0].y,1,0,2*Math.PI);else{r.moveTo(l[0].x,l[0].y);for(var f,v=0,x=0;x<l.length;x++)if(f=l[x],0==v&&f.x>g&&(r.moveTo(f.x,f.y),v=1),0<x&&f.x>g&&f.x<m){var b=u(l,x-1);r.bezierCurveTo(b.ctrA.x,b.ctrA.y,b.ctrB.x,b.ctrB.y,f.x,f.y)}r.moveTo(l[0].x,l[0].y)}r.closePath(),r.stroke()}}),t.forEach(function(t){var e,o,u;o=(e=[].concat(n.chartData.yAxisData.ranges[t.index])).pop(),u=e.shift();var l=t.data,g=function(t,e,n,o,i,r){var a=Math.round,s=7<arguments.length&&void 0!==arguments[7]?arguments[7]:1,u=[],l=r.height-r.area[0]-r.area[2];return t.forEach(function(t,c){if(null===t)u.push(null);else{var p=[];t.forEach(function(t){var u={x:o[c]+a(i/2)},d=t.value||t,h=l*(d-e)/(n-e);h*=s,u.y=r.height-a(h)-r.area[2],p.push(u)}),u.push(p)}}),u}(l,o,u,c,p,n,i,a);d.push(g);for(var m=y(g),v=0;v<m[0].length;v++)if(v>h&&v<f){var x=m[0][v];r.beginPath(),0<l[v][1]-l[v][0]?(r.setStrokeStyle(s.color.upLine),r.setFillStyle(s.color.upFill),r.setLineWidth(1*n.pixelRatio),r.moveTo(x[3].x,x[3].y),r.lineTo(x[1].x,x[1].y),r.lineTo(x[1].x-p/4,x[1].y),r.lineTo(x[0].x-p/4,x[0].y),r.lineTo(x[0].x,x[0].y),r.lineTo(x[2].x,x[2].y),r.lineTo(x[0].x,x[0].y),r.lineTo(x[0].x+p/4,x[0].y),r.lineTo(x[1].x+p/4,x[1].y),r.lineTo(x[1].x,x[1].y),r.moveTo(x[3].x,x[3].y)):(r.setStrokeStyle(s.color.downLine),r.setFillStyle(s.color.downFill),r.setLineWidth(1*n.pixelRatio),r.moveTo(x[3].x,x[3].y),r.lineTo(x[0].x,x[0].y),r.lineTo(x[0].x-p/4,x[0].y),r.lineTo(x[1].x-p/4,x[1].y),r.lineTo(x[1].x,x[1].y),r.lineTo(x[2].x,x[2].y),r.lineTo(x[1].x,x[1].y),r.lineTo(x[1].x+p/4,x[1].y),r.lineTo(x[0].x+p/4,x[0].y),r.lineTo(x[0].x,x[0].y),r.moveTo(x[3].x,x[3].y)),r.closePath(),r.fill(),r.stroke()}}),r.restore(),{xAxisPoints:c,calPoints:d,eachSpacing:p}}function z(t,e,n,i,a,s){(t.extra.tooltip||{}).horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&function(t,e,n,i){var a=Math.max,s=o({},{gridType:"solid",dashLength:4},t.extra.tooltip),u=t.area[3],l=t.width-t.area[1];if("dash"==s.gridType&&n.setLineDash([s.dashLength,s.dashLength]),n.setStrokeStyle(s.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(u,t.tooltip.offset.y),n.lineTo(l,t.tooltip.offset.y),n.stroke(),n.setLineDash([]),s.yAxisLabel)for(var c=function(t,e,n){for(var o=[].concat(n.chartData.yAxisData.ranges),i=n.height-n.area[0]-n.area[2],r=n.area[0],a=[],s=0;s<o.length;s++){var u=o[s].shift(),l=u-(u-o[s].pop())*(t-r)/i;l=n.yAxis.data[s].format?n.yAxis.data[s].format(+l):l.toFixed(0),a.push(l+"")}return a}(t.tooltip.offset.y,t.series,t),p=t.chartData.yAxisData.yAxisWidth,d=t.area[3],f=t.width-t.area[1],g=0;g<c.length;g++){n.setFontSize(e.fontSize);var m,v=void 0,y=void 0,x=h(c[g],e.fontSize);y="left"==p[g].position?a(v=d-p[g].width,v+x+2*e.toolTipPadding):a((v=f)+p[g].width,v+x+2*e.toolTipPadding);var b=v+((m=y-v)-x)/2,A=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(r(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(s.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(v,A-.5*e.fontSize-e.toolTipPadding,m,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(s.labelFontColor||e.fontColor),n.fillText(c[g],b,A+.5*e.fontSize),n.closePath(),n.stroke(),"left"==p[g].position?d-=p[g].width+t.yAxis.padding:f+=p[g].width+t.yAxis.padding}}(t,e,n),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&j(t.tooltip.textList,t.tooltip.offset,t,e,n),n.restore()}function B(t,e,n,o){var i=Math.ceil,r=e.chartData.xAxisData,a=r.xAxisPoints,s=r.startX,u=r.endX,l=r.eachSpacing,c="center";("line"==e.type||"area"==e.type)&&(c=e.xAxis.boundaryGap);var p=e.height-e.area[2],d=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var f=e.height-e.area[2]+n.xAxisHeight,g=u-s,m=l*(a.length-1),v=0;e._scrollDistance_&&(v=-e._scrollDistance_*g/m),o.beginPath(),o.setLineCap("round"),o.setLineWidth(6*e.pixelRatio),o.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),o.moveTo(s,f),o.lineTo(u,f),o.stroke(),o.closePath(),o.beginPath(),o.setLineCap("round"),o.setLineWidth(6*e.pixelRatio),o.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),o.moveTo(s+v,f),o.lineTo(s+v+g*g/m,f),o.stroke(),o.closePath(),o.setLineCap("butt")}if(o.save(),e._scrollDistance_&&0!==e._scrollDistance_&&o.translate(e._scrollDistance_,0),!0===e.xAxis.calibration&&(o.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),o.setLineCap("butt"),o.setLineWidth(1*e.pixelRatio),a.forEach(function(t,n){0<n&&(o.beginPath(),o.moveTo(t-l/2,p),o.lineTo(t-l/2,p+3*e.pixelRatio),o.closePath(),o.stroke())})),!0!==e.xAxis.disableGrid&&(o.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),o.setLineCap("butt"),o.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&o.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),e.xAxis.gridEval=e.xAxis.gridEval||1,a.forEach(function(t,n){0==n%e.xAxis.gridEval&&(o.beginPath(),o.moveTo(t,p),o.lineTo(t,d),o.stroke())}),o.setLineDash([])),!0!==e.xAxis.disabled){var y=t.length;e.xAxis.labelCount&&(y=e.xAxis.itemCount?i(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,y-=1);for(var x=i(t.length/y),b=[],A=t.length,_=0;_<A;_++)0==_%x?b.push(t[_]):b.push("");b[A-1]=t[A-1];var w=e.xAxis.fontSize||n.fontSize;0===n._xAxisTextAngle_?b.forEach(function(t,i){var r=-h(t+"",w)/2;"center"==c&&(r+=l/2);var s=0;e.xAxis.scrollShow&&(s=6*e.pixelRatio),o.beginPath(),o.setFontSize(w),o.setFillStyle(e.xAxis.fontColor||"#666666"),o.fillText(t+"",a[i]+r,p+w+(n.xAxisHeight-s-w)/2),o.closePath(),o.stroke()}):b.forEach(function(t,i){o.save(),o.beginPath(),o.setFontSize(w),o.setFillStyle(e.xAxis.fontColor||"#666666");var r=-h(t+"",w);"center"==c&&(r+=l/2);var s=function(t,e,n){var o=n-e,i=t+(n-o-t)/1.4142135623730951;return{transX:i*=-1,transY:.41421356237309515*(n-o)-(n-o-t)/1.4142135623730951}}(a[i]+l/2,p+w/2+5,e.height),u=s.transX,d=s.transY;o.rotate(-1*n._xAxisTextAngle_),o.translate(u,d),o.fillText(t+"",a[i]+r,p+w+5),o.closePath(),o.stroke(),o.restore()})}o.restore(),e.xAxis.axisLine&&(o.beginPath(),o.setStrokeStyle(e.xAxis.axisLineColor),o.setLineWidth(1*e.pixelRatio),o.moveTo(s,e.height-e.area[2]),o.lineTo(u,e.height-e.area[2]),o.stroke())}function $(t,e,n,o){if(!0!==e.yAxis.disableGrid){for(var i=(e.height-e.area[0]-e.area[2])/e.yAxis.splitNumber,r=e.area[3],a=e.chartData.xAxisData.xAxisPoints,s=e.chartData.xAxisData.eachSpacing*(a.length-1),u=[],l=0;l<e.yAxis.splitNumber+1;l++)u.push(e.height-e.area[2]-i*l);o.save(),e._scrollDistance_&&0!==e._scrollDistance_&&o.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&o.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),o.setStrokeStyle(e.yAxis.gridColor),o.setLineWidth(1*e.pixelRatio),u.forEach(function(t){o.beginPath(),o.moveTo(r,t),o.lineTo(r+s,t),o.stroke()}),o.setLineDash([]),o.restore()}}function q(t,e,n,o){if(!0!==e.yAxis.disabled){var i=(e.height-e.area[0]-e.area[2])/e.yAxis.splitNumber,r=e.area[3],a=e.width-e.area[1],s=e.height-e.area[2],u=s+n.xAxisHeight;e.xAxis.scrollShow&&(u-=3*e.pixelRatio),e.xAxis.rotateLabel&&(u=e.height-e.area[2]+3),o.beginPath(),o.setFillStyle(e.background||"#ffffff"),0>e._scrollDistance_&&o.fillRect(0,0,r,u),1==e.enableScroll&&o.fillRect(a,0,e.width,u),o.closePath(),o.stroke();for(var l=[],c=0;c<=e.yAxis.splitNumber;c++)l.push(e.area[0]+i*c);for(var p,d=e.area[3],f=e.width-e.area[1],g=function(t,i){if(!0!==(t=e.yAxis.data[i]).disabled){var r=e.chartData.yAxisData.rangesFormat[i],a=t.fontSize||n.fontSize,u=e.chartData.yAxisData.yAxisWidth[i];if(r.forEach(function(n,i){var r=l[i]?l[i]:s;o.beginPath(),o.setFontSize(a),o.setLineWidth(1*e.pixelRatio),o.setStrokeStyle(t.axisLineColor||"#cccccc"),o.setFillStyle(t.fontColor||"#666666"),"left"==u.position?(o.fillText(n+"",d-u.width,r+a/2),1==t.calibration&&(o.moveTo(d,r),o.lineTo(d-3*e.pixelRatio,r))):(o.fillText(n+"",f+4*e.pixelRatio,r+a/2),1==t.calibration&&(o.moveTo(f,r),o.lineTo(f+3*e.pixelRatio,r))),o.closePath(),o.stroke()}),!1!==t.axisLine&&(o.beginPath(),o.setStrokeStyle(t.axisLineColor||"#cccccc"),o.setLineWidth(1*e.pixelRatio),"left"==u.position?(o.moveTo(d,e.height-e.area[2]),o.lineTo(d,e.area[0])):(o.moveTo(f,e.height-e.area[2]),o.lineTo(f,e.area[0])),o.stroke()),e.yAxis.showTitle){var c=t.titleFontSize||n.fontSize,g=t.title;o.beginPath(),o.setFontSize(c),o.setFillStyle(t.titleFontColor||"#666666"),"left"==u.position?o.fillText(g,d-h(g,c)/2,e.area[0]-10*e.pixelRatio):o.fillText(g,f-h(g,c)/2,e.area[0]-10*e.pixelRatio),o.closePath(),o.stroke()}"left"==u.position?d-=u.width+e.yAxis.padding:f+=u.width+e.yAxis.padding}p=t},m=0;m<e.yAxis.data.length;m++)g(p,m)}}function N(t,e,n,o,i){if(!1!==e.legend.show){var r=i.legendData,a=r.points,s=r.area,u=e.legend.padding,l=e.legend.fontSize,c=15*e.pixelRatio,p=5*e.pixelRatio,d=e.legend.itemGap,f=Math.max(e.legend.lineHeight*e.pixelRatio,l);o.beginPath(),o.setLineWidth(e.legend.borderWidth),o.setStrokeStyle(e.legend.borderColor),o.setFillStyle(e.legend.backgroundColor),o.moveTo(s.start.x,s.start.y),o.rect(s.start.x,s.start.y,s.width,s.height),o.closePath(),o.fill(),o.stroke(),a.forEach(function(t,i){var a,g=0;g=r.widthArr[i],a=r.heightArr[i];var m=0,v=0;"top"==e.legend.position||"bottom"==e.legend.position?(m=s.start.x+(s.width-g)/2,v=s.start.y+u+i*f):(g=0==i?0:r.widthArr[i-1],m=s.start.x+u+g,v=s.start.y+u+(s.height-a)/2),o.setFontSize(n.fontSize);for(var y,x=0;x<t.length;x++){switch((y=t[x]).area=[0,0,0,0],y.area[0]=m,y.area[1]=v,y.area[3]=v+f,o.beginPath(),o.setLineWidth(1*e.pixelRatio),o.setStrokeStyle(y.show?y.color:e.legend.hiddenColor),o.setFillStyle(y.show?y.color:e.legend.hiddenColor),y.legendShape){case"line":o.moveTo(m,v+.5*f-2*e.pixelRatio),o.fillRect(m,v+.5*f-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":o.moveTo(m+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio),o.lineTo(m+2.5*e.pixelRatio,v+.5*f+5*e.pixelRatio),o.lineTo(m+12.5*e.pixelRatio,v+.5*f+5*e.pixelRatio),o.lineTo(m+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio);break;case"diamond":o.moveTo(m+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio),o.lineTo(m+2.5*e.pixelRatio,v+.5*f),o.lineTo(m+7.5*e.pixelRatio,v+.5*f+5*e.pixelRatio),o.lineTo(m+12.5*e.pixelRatio,v+.5*f),o.lineTo(m+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio);break;case"circle":o.moveTo(m+7.5*e.pixelRatio,v+.5*f),o.arc(m+7.5*e.pixelRatio,v+.5*f,5*e.pixelRatio,0,2*Math.PI);break;case"rect":o.moveTo(m,v+.5*f-5*e.pixelRatio),o.fillRect(m,v+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:o.moveTo(m,v+.5*f-5*e.pixelRatio),o.fillRect(m,v+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}o.closePath(),o.fill(),o.stroke(),m+=c+p,o.beginPath(),o.setFontSize(l),o.setFillStyle(y.show?e.legend.fontColor:e.legend.hiddenColor),o.fillText(y.name,m,v+(.5*f+.5*l-2)),o.closePath(),o.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(m+=h(y.name,l)+d,y.area[2]=m):(y.area[2]=m+h(y.name,l)+d,m-=c+p,v+=f)}})}}function U(t,e,n,i){var a=Math.PI,s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,u=o({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==n.pieChartLinePadding&&(n.pieChartLinePadding=u.activeRadius);var l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding),p=u.minRadius||.5*c;t=function(t,e,n,o){for(var i,r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,a=0,s=0,u=[],l=0;l<t.length;l++)(i=t[l]).data=null===i.data?0:i.data,a+=i.data,u.push(i.data);for(var c,p=Math.min.apply(null,u),d=Math.max.apply(null,u),h=0;h<t.length;h++)(c=t[h]).data=null===c.data?0:c.data,0===a||"area"==e?(c._proportion_=c.data/a*r,c._rose_proportion_=1/t.length*r):(c._proportion_=c.data/a*r,c._rose_proportion_=c.data/a*r),c._radius_=n+(o-n)*((c.data-p)/(d-p));for(var f,g=0;g<t.length;g++)(f=t[g])._start_=s,s+=2*f._rose_proportion_*Math.PI;return t}(t,u.type,p,c,s);var d=u.activeRadius;if((t=t.map(function(t){return t._start_+=(u.offsetAngle||0)*a/180,t})).forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(r(t.color,u.activeOpacity||.5)),i.moveTo(l.x,l.y),i.arc(l.x,l.y,d+t._radius_,t._start_,t._start_+2*t._rose_proportion_*a),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(u.borderWidth*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle(u.borderColor),i.setFillStyle(t.color),i.moveTo(l.x,l.y),i.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*a),i.closePath(),i.fill(),1==u.border&&i.stroke()}),!1!==e.dataLabel&&1===s){for(var h=!1,f=0,g=t.length;f<g;f++)if(0<t[f].data){h=!0;break}h&&L(t,e,n,i,0,l)}return{center:l,radius:c,series:t}}function H(t,e,n,i,a){var s=Math.PI,u=5<arguments.length&&void 0!==arguments[5]?arguments[5]:1,l=o({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},n.extra.gauge);null==l.oldAngle&&(l.oldAngle=l.startAngle),null==l.oldData&&(l.oldData=0),t=function(t,e,n){for(var o=e,i=0;i<t.length;i++)t[i].value=null===t[i].value?0:t[i].value,t[i]._startAngle_=o,t[i]._endAngle_=(e-n+1)*t[i].value+e,2<=t[i]._endAngle_&&(t[i]._endAngle_%=2),o=t[i]._endAngle_;return t}(t,l.startAngle,l.endAngle);var c={x:n.width/2,y:n.height/2},p=Math.min(c.x,c.y);p-=5*n.pixelRatio;var d=(p-=l.width/2)-l.width,f=0;if("progress"==l.type){var g=p-3*l.width;a.beginPath();var m=a.createLinearGradient(c.x,c.y-g,c.x,c.y+g);m.addColorStop("0",r(e[0].color,.3)),m.addColorStop("1.0",r("#FFFFFF",.1)),a.setFillStyle(m),a.arc(c.x,c.y,g,0,2*s,!1),a.fill(),a.setLineWidth(l.width),a.setStrokeStyle(r(e[0].color,.3)),a.setLineCap("round"),a.beginPath(),a.arc(c.x,c.y,d,l.startAngle*s,l.endAngle*s,!1),a.stroke();f=l.startAngle-l.endAngle+1,l.splitLine.splitNumber;var v=f/l.splitLine.splitNumber/l.splitLine.childNumber,y=-p-.5*l.width-l.splitLine.fixRadius,x=-p-l.width-l.splitLine.fixRadius+l.splitLine.width;a.save(),a.translate(c.x,c.y),a.rotate((l.startAngle-1)*s);for(var b=l.splitLine.splitNumber*l.splitLine.childNumber+1,A=e[0].data*u,w=0;w<b;w++)a.beginPath(),A>w/b?a.setStrokeStyle(r(e[0].color,1)):a.setStrokeStyle(r(e[0].color,.3)),a.setLineWidth(3*n.pixelRatio),a.moveTo(y,0),a.lineTo(x,0),a.stroke(),a.rotate(v*s);a.restore(),e=_(e,l,u),a.setLineWidth(l.width),a.setStrokeStyle(e[0].color),a.setLineCap("round"),a.beginPath(),a.arc(c.x,c.y,d,l.startAngle*s,e[0]._proportion_*s,!1),a.stroke();var S=p-2.5*l.width;a.save(),a.translate(c.x,c.y),a.rotate((e[0]._proportion_-1)*s),a.beginPath(),a.setLineWidth(l.width/3);var P=a.createLinearGradient(0,.6*-S,0,.6*S);P.addColorStop("0",r("#FFFFFF",0)),P.addColorStop("0.5",r(e[0].color,1)),P.addColorStop("1.0",r("#FFFFFF",0)),a.setStrokeStyle(P),a.arc(0,0,S,.85*s,1.15*s,!1),a.stroke(),a.beginPath(),a.setLineWidth(1),a.setStrokeStyle(e[0].color),a.setFillStyle(e[0].color),a.moveTo(-S-l.width/3/2,-4),a.lineTo(-S-l.width/3/2-4,0),a.lineTo(-S-l.width/3/2,4),a.lineTo(-S-l.width/3/2,-4),a.stroke(),a.fill(),a.restore()}else{a.setLineWidth(l.width),a.setLineCap("butt");for(var C,T=0;T<t.length;T++)C=t[T],a.beginPath(),a.setStrokeStyle(C.color),a.arc(c.x,c.y,p,C._startAngle_*s,C._endAngle_*s,!1),a.stroke();a.save();var D=(f=l.startAngle-l.endAngle+1)/l.splitLine.splitNumber,k=f/l.splitLine.splitNumber/l.splitLine.childNumber,O=-p-.5*l.width-l.splitLine.fixRadius,I=-p-.5*l.width-l.splitLine.fixRadius+l.splitLine.width,L=-p-.5*l.width-l.splitLine.fixRadius+l.splitLine.childWidth;a.translate(c.x,c.y),a.rotate((l.startAngle-1)*s);for(var F=0;F<l.splitLine.splitNumber+1;F++)a.beginPath(),a.setStrokeStyle(l.splitLine.color),a.setLineWidth(2*n.pixelRatio),a.moveTo(O,0),a.lineTo(I,0),a.stroke(),a.rotate(D*s);a.restore(),a.save(),a.translate(c.x,c.y),a.rotate((l.startAngle-1)*s);for(var j=0;j<l.splitLine.splitNumber*l.splitLine.childNumber+1;j++)a.beginPath(),a.setStrokeStyle(l.splitLine.color),a.setLineWidth(1*n.pixelRatio),a.moveTo(O,0),a.lineTo(L,0),a.stroke(),a.rotate(k*s);a.restore(),e=function(t,e,n){for(var o,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:1,r=0;r<t.length;r++){if((o=t[r]).data=null===o.data?0:o.data,"auto"==n.pointer.color){for(var a=0;a<e.length;a++)if(o.data<=e[a].value){o.color=e[a].color;break}}else o.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;o._endAngle_=s*o.data+n.startAngle,o._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(o._oldAngle_+=2),o._proportion_=o.data>=n.oldData?(o._endAngle_-o._oldAngle_)*i+n.oldAngle:o._oldAngle_-(o._oldAngle_-o._endAngle_)*i,2<=o._proportion_&&(o._proportion_%=2)}return t}(e,t,l,u);for(var M,E=0;E<e.length;E++)M=e[E],a.save(),a.translate(c.x,c.y),a.rotate((M._proportion_-1)*s),a.beginPath(),a.setFillStyle(M.color),a.moveTo(l.pointer.width,0),a.lineTo(0,-l.pointer.width/2),a.lineTo(-d,0),a.lineTo(0,l.pointer.width/2),a.lineTo(l.pointer.width,0),a.closePath(),a.fill(),a.beginPath(),a.setFillStyle("#FFFFFF"),a.arc(0,0,l.pointer.width/6,0,2*s,!1),a.fill(),a.restore();!1!==n.dataLabel&&function(t,e,n,o,i,r){var a=Math.PI;e-=t.width/2+i.gaugeLabelTextMargin;for(var s=(t.startAngle-t.endAngle+1)/t.splitLine.splitNumber,u=(t.endNumber-t.startNumber)/t.splitLine.splitNumber,l=t.startAngle,c=t.startNumber,p=0;p<t.splitLine.splitNumber+1;p++){var d={x:e*Math.cos(l*a),y:e*Math.sin(l*a)},f=t.labelFormat?t.labelFormat(c):c;d.x+=n.x-h(f)/2,d.y+=n.y;var g=d.x,m=d.y;r.beginPath(),r.setFontSize(i.fontSize),r.setFillStyle(t.labelColor||"#666666"),r.fillText(f,g,m+i.fontSize/2),r.closePath(),r.stroke(),2<=(l+=s)&&(l%=2),c+=u}}(l,p,c,0,i,a)}return R(n,i,a,c),1===u&&"gauge"===n.type&&(n.extra.gauge.oldAngle=e[0]._proportion_,n.extra.gauge.oldData=e[0].data),{center:c,radius:p,innerRadius:d,categories:t,totalAngle:f}}function W(t,e,n,a){var s=Math.cos,u=Math.sin,c=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,p=o({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},e.extra.radar),d=function(t){for(var e=Math.PI,n=[],o=0;o<t;o++)n.push(2*e/t*o);return n.map(function(t){return-1*t+e/2})}(e.categories.length),g={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},m=Math.min(g.x-(function(t){var e=t.map(function(t){return h(t)});return Math.max.apply(null,e)}(e.categories)+n.radarLabelTextMargin),g.y-n.radarLabelTextMargin);m-=e.padding[1],a.beginPath(),a.setLineWidth(1*e.pixelRatio),a.setStrokeStyle(p.gridColor),d.forEach(function(t){var e=l(m*s(t),m*u(t),g);a.moveTo(g.x,g.y),a.lineTo(e.x,e.y)}),a.stroke(),a.closePath();for(var v=function(t){var n={};a.beginPath(),a.setLineWidth(1*e.pixelRatio),a.setStrokeStyle(p.gridColor),d.forEach(function(e,o){var i=l(m/p.gridCount*t*s(e),m/p.gridCount*t*u(e),g);0===o?(n=i,a.moveTo(i.x,i.y)):a.lineTo(i.x,i.y)}),a.lineTo(n.x,n.y),a.stroke(),a.closePath()},y=1;y<=p.gridCount;y++)v(y);return function(t,e,n,o,i){var r=Math.max,a=5<arguments.length&&void 0!==arguments[5]?arguments[5]:1,s=i.extra.radar||{};s.max=s.max||0;for(var u=r(s.max,r.apply(null,f(o))),c=[],p=function(i){var r=o[i],s={};s.color=r.color,s.legendShape=r.legendShape,s.pointShape=r.pointShape,s.data=[],r.data.forEach(function(o,i){var r={};r.angle=t[i],r.proportion=o/u,r.position=l(n*r.proportion*a*Math.cos(r.angle),n*r.proportion*a*Math.sin(r.angle),e),s.data.push(r)}),c.push(s)},d=0;d<o.length;d++)p(d);return c}(d,g,m,t,e,c).forEach(function(t){(a.beginPath(),a.setFillStyle(r(t.color,p.opacity)),t.data.forEach(function(t,e){0===e?a.moveTo(t.position.x,t.position.y):a.lineTo(t.position.x,t.position.y)}),a.closePath(),a.fill(),!1!==e.dataPointShape)&&O(t.data.map(function(t){return t.position}),t.color,t.pointShape,a,e)}),function(t,e,n,o,r,a){var s=o.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,u){var c={x:e*Math.cos(t),y:e*Math.sin(t)},p=l(c.x,c.y,n),d=p.x,f=p.y;i.approximatelyEqual(c.x,0)?d-=h(o.categories[u]||"")/2:0>c.x&&(d-=h(o.categories[u]||"")),a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(s.labelColor||"#666666"),a.fillText(o.categories[u]||"",d,f+r.fontSize/2),a.closePath(),a.stroke()})}(d,m,g,e,n,a),{center:g,radius:m,angleList:d}}function V(t,e,n){n=0==n?1:n;for(var o=[],i=0;i<n;i++)o[i]=Math.random();return Math.floor(o.reduce(function(t,e){return t+e})/n*(e-t))+t}function G(t,e,n,o){for(var i=!1,r=0;r<e.length;r++)if(e[r].area){if(!(t[3]<e[r].area[1]||t[0]>e[r].area[2]||t[1]>e[r].area[3]||t[2]<e[r].area[0])){i=!0;break}if(0>t[0]||0>t[1]||t[2]>n||t[3]>o){i=!0;break}i=!1}return i}function X(t,e,n,o,i,r){return{x:(e-n.xMin)*o+i,y:(n.yMax-t)*o+r}}function Q(t,e,n){return e[1]!=n[1]&&(!(e[1]>t[1]&&n[1]>t[1])&&(!(e[1]<t[1]&&n[1]<t[1])&&(!(e[1]==t[1]&&n[1]>t[1])&&(!(n[1]==t[1]&&e[1]>t[1])&&(!(e[0]<t[0]&&n[1]<t[1])&&!(n[0]-(n[0]-e[0])*(n[1]-t[1])/(n[1]-e[1])<t[0]))))))}function J(t,e){for(var n,o=0,i=0;i<e.length;i++){n=e[i][0],1==e.length&&(n=e[i][0]);for(var r=0;r<n.length-1;r++){Q(t,n[r],n[r+1])&&(o+=1)}}return!(1!=o%2)}function K(t,e,n,a){var s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,u=o({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),l=(e.height-e.area[0]-e.area[2])/t.length,c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},p=u.activeWidth,d=Math.min((e.width-e.area[1]-e.area[3])/2-p,(e.height-e.area[0]-e.area[2])/2-p);t=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var o=0;o<t.length;o++)t[o].radius=t[o].data/t[0].data*e*n,t[o]._proportion_=t[o].data/t[0].data;return t.reverse()}(t,d,s),a.save(),a.translate(c.x,c.y);for(var f=0;f<t.length;f++)0==f?(e.tooltip&&e.tooltip.index==f&&(a.beginPath(),a.setFillStyle(r(t[f].color,u.activeOpacity)),a.moveTo(-p,0),a.lineTo(-t[f].radius-p,-l),a.lineTo(t[f].radius+p,-l),a.lineTo(p,0),a.lineTo(-p,0),a.closePath(),a.fill()),t[f].funnelArea=[c.x-t[f].radius,c.y-l,c.x+t[f].radius,c.y],a.beginPath(),a.setLineWidth(u.borderWidth*e.pixelRatio),a.setStrokeStyle(u.borderColor),a.setFillStyle(r(t[f].color,u.fillOpacity)),a.moveTo(0,0),a.lineTo(-t[f].radius,-l),a.lineTo(t[f].radius,-l),a.lineTo(0,0),a.closePath(),a.fill(),1==u.border&&a.stroke()):(e.tooltip&&e.tooltip.index==f&&(a.beginPath(),a.setFillStyle(r(t[f].color,u.activeOpacity)),a.moveTo(0,0),a.lineTo(-t[f-1].radius-p,0),a.lineTo(-t[f].radius-p,-l),a.lineTo(t[f].radius+p,-l),a.lineTo(t[f-1].radius+p,0),a.lineTo(0,0),a.closePath(),a.fill()),t[f].funnelArea=[c.x-t[f].radius,c.y-l*(f+1),c.x+t[f].radius,c.y-l*f],a.beginPath(),a.setLineWidth(u.borderWidth*e.pixelRatio),a.setStrokeStyle(u.borderColor),a.setFillStyle(r(t[f].color,u.fillOpacity)),a.moveTo(0,0),a.lineTo(-t[f-1].radius,0),a.lineTo(-t[f].radius,-l),a.lineTo(t[f].radius,-l),a.lineTo(t[f-1].radius,0),a.lineTo(0,0),a.closePath(),a.fill(),1==u.border&&a.stroke()),a.translate(0,-l);return a.restore(),!1!==e.dataLabel&&1===s&&function(t,e,n,o,r,a,s){for(var u=Math.PI,l=0;l<t.length;l++){var c=void 0,p=void 0,d=void 0,f=void 0,g=t[l],m=g.format?g.format(+g._proportion_.toFixed(2)):i.toFixed(100*g._proportion_)+"%";"right"==r?(c=0==l?(g.funnelArea[2]+s.x)/2:(g.funnelArea[2]+t[l-1].funnelArea[2])/2,p=c+2*a,d=g.funnelArea[1]+o/2,f=g.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(g.color),n.setFillStyle(g.color),n.beginPath(),n.moveTo(c,d),n.lineTo(p,d),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(p,d),n.arc(p,d,2,0,2*u),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(f),n.setFillStyle(g.textColor||"#666666"),n.fillText(m,p+5,d+f/2-2),n.closePath(),n.stroke(),n.closePath()):(c=0==l?(g.funnelArea[0]+s.x)/2:(g.funnelArea[0]+t[l-1].funnelArea[0])/2,p=c-2*a,d=g.funnelArea[1]+o/2,f=g.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(g.color),n.setFillStyle(g.color),n.beginPath(),n.moveTo(c,d),n.lineTo(p,d),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(p,d),n.arc(p,d,2,0,2*u),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(f),n.setFillStyle(g.textColor||"#666666"),n.fillText(m,p-5-h(m),d+f/2-2),n.closePath(),n.stroke(),n.closePath())}}(t,e,a,l,u.labelAlign,p,c),{center:c,radius:d,series:t}}function Y(t,e){e.draw()}var Z={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){var e=Math.pow;return 1>(t/=.5)?.5*e(t,3):.5*(e(t-2,3)+2)},linear:function(t){return t}};function tt(t){this.isStop=!1,t.duration=void 0===t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e="undefined"==typeof setTimeout?"undefined"==typeof requestAnimationFrame?function(t){t(null)}:requestAnimationFrame:function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)},n=null,o=function(i){if(null===i||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===n&&(n=i),i-n<t.duration){var r=(i-n)/t.duration;r=(0,Z[t.timing])(r),t.onProcess&&t.onProcess(r),e(o,17)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};o=o.bind(this),e(o,17)}function et(t,e,n,a){var s=this,l=e.series,c=e.categories;l=p(l,e,n);var d=e.animation?e.duration:0;s.animationInstance&&s.animationInstance.stop();var f=null;if("candle"==t){var g=o({},e.extra.candle.average);g.show?(f=p(f=function(t,e,n,o){for(var i,r=[],a=0;a<t.length;a++){i={data:[],name:e[a],color:n[a]};for(var s=0,u=o.length;s<u;s++)if(s<t[a])i.data.push(null);else{for(var l=0,c=0;c<t[a];c++)l+=o[s-c][1];i.data.push(+(l/t[a]).toFixed(3))}r.push(i)}return r}(g.day,g.name,g.color,l[0].data),e,n),e.seriesMA=f):f=e.seriesMA?e.seriesMA=p(e.seriesMA,e,n):l}else f=l;e._series_=l=function(t){for(var e=[],n=0;n<t.length;n++)1==t[n].show&&e.push(t[n]);return e}(l),e.area=[,,,,];for(var m=0;4>m;m++)e.area[m]=e.padding[m];var v=function(t,e,n,o){var i=Math.max,r=Math.floor,a={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return o.legendData=a,a;var s=e.legend.padding,u=e.legend.margin,l=e.legend.fontSize,c=15*e.pixelRatio,p=5*e.pixelRatio,d=i(e.legend.lineHeight*e.pixelRatio,l);if("top"==e.legend.position||"bottom"==e.legend.position){for(var f=[],g=0,m=[],v=[],y=0;y<t.length;y++){var x=t[y],b=c+p+h(x.name||"undefined",l)+e.legend.itemGap;g+b>e.width-e.padding[1]-e.padding[3]?(f.push(v),m.push(g-e.legend.itemGap),g=b,v=[x]):(g+=b,v.push(x))}if(v.length){f.push(v),m.push(g-e.legend.itemGap),a.widthArr=m;var A=i.apply(null,m);switch(e.legend.float){case"left":a.area.start.x=e.padding[3],a.area.end.x=e.padding[3]+2*s;break;case"right":a.area.start.x=e.width-e.padding[1]-A-2*s,a.area.end.x=e.width-e.padding[1];break;default:a.area.start.x=(e.width-A)/2-s,a.area.end.x=(e.width+A)/2+s}a.area.width=A+2*s,a.area.wholeWidth=A+2*s,a.area.height=f.length*d+2*s,a.area.wholeHeight=f.length*d+2*s+2*u,a.points=f}}else{var _=t.length,w=e.height-e.padding[0]-e.padding[2]-2*u-2*s,S=Math.min(r(w/d),_);switch(a.area.height=S*d+2*s,a.area.wholeHeight=S*d+2*s,e.legend.float){case"top":a.area.start.y=e.padding[0]+u,a.area.end.y=e.padding[0]+u+a.area.height;break;case"bottom":a.area.start.y=e.height-e.padding[2]-u-a.area.height,a.area.end.y=e.height-e.padding[2]-u;break;default:a.area.start.y=(e.height-a.area.height)/2,a.area.end.y=(e.height+a.area.height)/2}for(var P,C=0==_%S?_/S:r(_/S+1),T=[],D=0;D<C;D++)P=t.slice(D*S,D*S+S),T.push(P);if(a.points=T,T.length){for(var k=0;k<T.length;k++){for(var O,R=T[k],I=0,L=0;L<R.length;L++)(O=c+p+h(R[L].name||"undefined",l)+e.legend.itemGap)>I&&(I=O);a.widthArr.push(I),a.heightArr.push(R.length*d+2*s)}for(var F=0,j=0;j<a.widthArr.length;j++)F+=a.widthArr[j];a.area.width=F-e.legend.itemGap+2*s,a.area.wholeWidth=a.area.width+s}}switch(e.legend.position){case"top":a.area.start.y=e.padding[0]+u,a.area.end.y=e.padding[0]+u+a.area.height;break;case"bottom":a.area.start.y=e.height-e.padding[2]-a.area.height-u,a.area.end.y=e.height-e.padding[2]-u;break;case"left":a.area.start.x=e.padding[3],a.area.end.x=e.padding[3]+a.area.width;break;case"right":a.area.start.x=e.width-e.padding[1]-a.area.width,a.area.end.x=e.width-e.padding[1]}return o.legendData=a,a}(f,e,0,e.chartData),C=v.area.wholeHeight,T=v.area.wholeWidth;switch(e.legend.position){case"top":e.area[0]+=C;break;case"bottom":e.area[2]+=C;break;case"left":e.area[3]+=T;break;case"right":e.area[1]+=T}var j={},Q=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type){if(Q=(j=D(l,e,n)).yAxisWidth,e.yAxis.showTitle){for(var J=0,Z=0;Z<e.yAxis.data.length;Z++)J=Math.max(J,e.yAxis.data[Z].titleFontSize?e.yAxis.data[Z].titleFontSize:n.fontSize);e.area[0]+=(J+6)*e.pixelRatio}for(var et=0,nt=0,ot=0;ot<Q.length;ot++)"left"==Q[ot].position?(e.area[3]+=0<nt?Q[ot].width+e.yAxis.padding:Q[ot].width,nt+=1):(e.area[1]+=0<et?Q[ot].width+e.yAxis.padding:Q[ot].width,et+=1)}else n.yAxisWidth=Q;if(e.chartData.yAxisData=j,e.categories&&e.categories.length){e.chartData.xAxisData=S(e.categories,e);var it=x(e.categories,e,n,e.chartData.xAxisData.eachSpacing),rt=it.xAxisHeight,at=it.angle;n.xAxisHeight=rt,n._xAxisTextAngle_=at,e.area[2]+=rt,e.chartData.categoriesData=it}else if("line"===e.type||"area"===e.type||"points"===e.type){e.chartData.xAxisData=b(l,e,n);var st=x(c=e.chartData.xAxisData.rangesFormat,e,n,e.chartData.xAxisData.eachSpacing),ut=st.xAxisHeight,lt=st.angle;n.xAxisHeight=ut,n._xAxisTextAngle_=lt,e.area[2]+=ut,e.chartData.categoriesData=st}else e.chartData.xAxisData={xAxisPoints:[]};if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var ct,pt=e.chartData.xAxisData.xAxisPoints,dt=e.chartData.xAxisData.startX;ct=e.chartData.xAxisData.endX-dt-e.chartData.xAxisData.eachSpacing*(pt.length-1),s.scrollOption={currentOffset:ct,startTouchX:ct,distance:0,lastMoveTime:0},e._scrollDistance_=ct}switch(("pie"===t||"ring"===t||"rose"===t)&&(n._pieTextMaxLength_=!1===e.dataLabel?0:function(t){t=A(t);for(var e=0,n=0;n<t.length;n++){var o=t[n],r=o.format?o.format(+o._proportion_.toFixed(2)):i.toFixed(100*o._proportion_)+"%";e=Math.max(e,h(r))}return e}(f)),t){case"word":var ht=o({},{type:"normal",autoColors:!0},e.extra.word);(1==e.updateData||null==e.updateData)&&(e.chartData.wordCloudData=function(t,e){var n=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var o=0;o<n.length;o++){for(var i=void 0,r=void 0,a=void 0,s=n[o].name,u=n[o].textSize,l=h(s,u),c=0;c++,i=V(-t.width/2,t.width/2,5)-l/2,r=V(-t.height/2,t.height/2,5)+u/2,G(a=[i-5+t.width/2,r-5-u+t.height/2,i+l+5+t.width/2,r+5+t.height/2],n,t.width,t.height);)if(1e3==c){a=[-100,-100,-100,-100];break}n[o].area=a}break;case"vertical":for(var p=0;p<n.length;p++){for(var d=void 0,f=void 0,g=void 0,m=void 0,v=n[p].name,y=n[p].textSize,x=h(v,y),b=!!(.7<Math.random()),A=0;;){A++;var _=void 0;if(b?(d=V(-t.width/2,t.width/2,5)-x/2,g=[(f=V(-t.height/2,t.height/2,5)+y/2)-5-x+t.width/2,-d-5+t.height/2,f+5+t.width/2,-d+y+5+t.height/2],_=G(m=[t.width-(t.width/2-t.height/2)-(-d+y+5+t.height/2)-5,t.height/2-t.width/2+(f-5-x+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-d+y+5+t.height/2)+y,t.height/2-t.width/2+(f-5-x+t.width/2)+x+5],n,t.height,t.width)):(d=V(-t.width/2,t.width/2,5)-x/2,f=V(-t.height/2,t.height/2,5)+y/2,_=G(g=[d-5+t.width/2,f-5-y+t.height/2,d+x+5+t.width/2,f+5+t.height/2],n,t.width,t.height)),!_)break;if(1e3==A){g=[-1e3,-1e3,-1e3,-1e3];break}}b?(n[p].area=m,n[p].areav=g):n[p].area=g,n[p].rotate=b}}return n}(e,ht.type)),this.animationInstance=new tt({timing:"easeInOut",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),function(t,e,n,i){var r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1;o({},{type:"normal",autoColors:!0},e.extra.word),i.beginPath(),i.setFillStyle(e.background||"#FFFFFF"),i.rect(0,0,e.width,e.height),i.fill(),i.save();var a=e.chartData.wordCloudData;i.translate(e.width/2,e.height/2);for(var s=0;s<a.length;s++){i.save(),a[s].rotate&&i.rotate(90*Math.PI/180);var u=a[s].name,l=a[s].textSize,c=h(u,l);i.beginPath(),i.setStrokeStyle(a[s].color),i.setFillStyle(a[s].color),i.setFontSize(l),a[s].rotate?0<a[s].areav[0]&&(e.tooltip&&e.tooltip.index==s?i.strokeText(u,(a[s].areav[0]+5-e.width/2)*r-c*(1-r)/2,(a[s].areav[1]+5+l-e.height/2)*r):i.fillText(u,(a[s].areav[0]+5-e.width/2)*r-c*(1-r)/2,(a[s].areav[1]+5+l-e.height/2)*r)):0<a[s].area[0]&&(e.tooltip&&e.tooltip.index==s?i.strokeText(u,(a[s].area[0]+5-e.width/2)*r-c*(1-r)/2,(a[s].area[1]+5+l-e.height/2)*r):i.fillText(u,(a[s].area[0]+5-e.width/2)*r-c*(1-r)/2,(a[s].area[1]+5+l-e.height/2)*r)),i.stroke(),i.restore()}i.restore()}(l,e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"map":a.clearRect(0,0,e.width,e.height),function(t,e,n,i){var a,s,u=Math.abs,l=o({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),c=t,p=function(t){for(var e,n,o={xMin:180,xMax:0,yMin:90,yMax:0},i=0;i<t.length;i++){n=t[i].geometry.coordinates;for(var r=0;r<n.length;r++){1==(e=n[r]).length&&(e=e[0]);for(var a=0;a<e.length;a++){var s={x:e[a][0],y:e[a][1]};o.xMin=o.xMin<s.x?o.xMin:s.x,o.xMax=o.xMax>s.x?o.xMax:s.x,o.yMin=o.yMin<s.y?o.yMin:s.y,o.yMax=o.yMax>s.y?o.yMax:s.y}}}return o}(c),d=e.width/u(p.xMax-p.xMin),f=e.height/u(p.yMax-p.yMin),g=d<f?d:f,m=e.width/2-u(p.xMax-p.xMin)/2*g,v=e.height/2-u(p.yMax-p.yMin)/2*g;i.beginPath(),i.clearRect(0,0,e.width,e.height),i.setFillStyle(e.background||"#FFFFFF"),i.rect(0,0,e.width,e.height),i.fill();for(var y=0;y<c.length;y++){i.beginPath(),i.setLineWidth(l.borderWidth*e.pixelRatio),i.setStrokeStyle(l.borderColor),i.setFillStyle(r(t[y].color,l.fillOpacity)),e.tooltip&&e.tooltip.index==y&&(i.setStrokeStyle(l.activeBorderColor),i.setFillStyle(r(l.activeFillColor,l.activeFillOpacity)));for(var x=c[y].geometry.coordinates,b=0;b<x.length;b++){1==(a=x[b]).length&&(a=a[0]);for(var A=0;A<a.length;A++)s=X(a[A][1],a[A][0],p,g,m,v),0==A?(i.beginPath(),i.moveTo(s.x,s.y)):i.lineTo(s.x,s.y);i.fill(),1==l.border&&i.stroke()}if(1==e.dataLabel){var _=c[y].properties.centroid;if(_){s=X(_[1],_[0],p,g,m,v);var w=c[y].textSize||n.fontSize,S=c[y].properties.name;i.beginPath(),i.setFontSize(w),i.setFillStyle(c[y].textColor||"#666666"),i.fillText(S,s.x-h(S,w)/2,s.y+w/2),i.closePath(),i.stroke()}}}e.chartData.mapData={bounds:p,scale:g,xoffset:m,yoffset:v},z(e,n,i,1),i.draw()}(l,e,n,a);break;case"funnel":this.animationInstance=new tt({timing:"easeInOut",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),e.chartData.funnelData=K(l,e,n,a,t),N(e.series,e,n,a,e.chartData),z(e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new tt({timing:"easeIn",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),$(0,e,0,a),B(c,e,n,a);var i=function(t,e,n,i){var r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,a=o({},{type:"straight",width:2},e.extra.line);a.width*=e.pixelRatio;var s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,p=[];i.save();var d=0,h=e.width+c;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),d=-e._scrollDistance_-c+e.area[3],h=d+(e.xAxis.itemCount+4)*c),t.forEach(function(t){var o,s,f;s=(o=[].concat(e.chartData.yAxisData.ranges[t.index])).pop(),f=o.shift();var g=P(t.data,s,f,l,c,e,n,r);p.push(g);var m=y(g);if("dash"==t.lineType){var v=t.dashLength?t.dashLength:8;v*=e.pixelRatio,i.setLineDash([v,v])}i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(a.width),m.forEach(function(t){if(1===t.length)i.moveTo(t[0].x,t[0].y),i.arc(t[0].x,t[0].y,1,0,2*Math.PI);else{i.moveTo(t[0].x,t[0].y);var e=0;if("curve"===a.type){for(var n,o=0;o<t.length;o++)if(n=t[o],0==e&&n.x>d&&(i.moveTo(n.x,n.y),e=1),0<o&&n.x>d&&n.x<h){var r=u(t,o-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,n.x,n.y)}}else for(var s,l=0;l<t.length;l++)s=t[l],0==e&&s.x>d&&(i.moveTo(s.x,s.y),e=1),0<l&&s.x>d&&s.x<h&&i.lineTo(s.x,s.y);i.moveTo(t[0].x,t[0].y)}}),i.stroke(),i.setLineDash([]),!1!==e.dataPointShape&&O(g,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===r&&t.forEach(function(t){var o,a,s;a=(o=[].concat(e.chartData.yAxisData.ranges[t.index])).pop(),s=o.shift(),I(P(t.data,a,s,l,c,e,n,r),t,n,i)}),i.restore(),{xAxisPoints:l,calPoints:p,eachSpacing:c}}(l,e,n,a,t),r=i.xAxisPoints,s=i.calPoints,p=i.eachSpacing;e.chartData.xAxisPoints=r,e.chartData.calPoints=s,e.chartData.eachSpacing=p,q(0,e,n,a),!1!==e.enableMarkLine&&1===t&&F(e,n,a),N(e.series,e,n,a,e.chartData),z(e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new tt({timing:"easeIn",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),$(0,e,0,a),B(c,e,n,a);var o=function(t,e,n,o){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,a=e.chartData.xAxisData,s=a.xAxisPoints,l=a.eachSpacing,c=e.height-e.area[2],p=[],d=0,h=0;t.forEach(function(t){"column"==t.type&&(h+=1)}),o.save();var f=-2,g=s.length+2,m=0,v=e.width+l;e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(o.translate(e._scrollDistance_,0),f=Math.floor(-e._scrollDistance_/l)-2,g=f+e.xAxis.itemCount+4,m=-e._scrollDistance_-l+e.area[3],v=m+(e.xAxis.itemCount+4)*l),t.forEach(function(t){var a,x,b;x=(a=[].concat(e.chartData.yAxisData.ranges[t.index])).pop(),b=a.shift();var A=P(t.data,x,b,s,l,e,n,i);if(p.push(A),"column"==t.type){A=w(A,l,h,d,n,e);for(var _,S=0;S<A.length;S++)if(null!==(_=A[S])&&S>f&&S<g){o.beginPath(),o.setStrokeStyle(_.color||t.color),o.setLineWidth(1),o.setFillStyle(_.color||t.color);var C=_.x-_.width/2;e.height,_.y,e.area[2],o.moveTo(C,_.y),o.moveTo(C-1,_.y),o.lineTo(C+_.width-2,_.y),o.lineTo(C+_.width-2,e.height-e.area[2]),o.lineTo(C,e.height-e.area[2]),o.lineTo(C,_.y),o.closePath(),o.stroke(),o.fill(),o.closePath(),o.fill()}d+=1}if("area"==t.type)for(var T,D=y(A),k=0;k<D.length;k++){if(T=D[k],o.beginPath(),o.setStrokeStyle(t.color),o.setFillStyle(r(t.color,.2)),o.setLineWidth(2*e.pixelRatio),1<T.length){var R=T[0],I=T[T.length-1];o.moveTo(R.x,R.y);var L=0;if("curve"===t.style){for(var F,j=0;j<T.length;j++)if(F=T[j],0==L&&F.x>m&&(o.moveTo(F.x,F.y),L=1),0<j&&F.x>m&&F.x<v){var M=u(T,j-1);o.bezierCurveTo(M.ctrA.x,M.ctrA.y,M.ctrB.x,M.ctrB.y,F.x,F.y)}}else for(var E,z=0;z<T.length;z++)E=T[z],0==L&&E.x>m&&(o.moveTo(E.x,E.y),L=1),0<z&&E.x>m&&E.x<v&&o.lineTo(E.x,E.y);o.lineTo(I.x,c),o.lineTo(R.x,c),o.lineTo(R.x,R.y)}else{var B=T[0];o.moveTo(B.x-l/2,B.y),o.lineTo(B.x+l/2,B.y),o.lineTo(B.x+l/2,c),o.lineTo(B.x-l/2,c),o.moveTo(B.x-l/2,B.y)}o.closePath(),o.fill()}"line"==t.type&&y(A).forEach(function(n){if("dash"==t.lineType){var i=t.dashLength?t.dashLength:8;i*=e.pixelRatio,o.setLineDash([i,i])}if(o.beginPath(),o.setStrokeStyle(t.color),o.setLineWidth(2*e.pixelRatio),1===n.length)o.moveTo(n[0].x,n[0].y),o.arc(n[0].x,n[0].y,1,0,2*Math.PI);else{o.moveTo(n[0].x,n[0].y);var r=0;if("curve"==t.style){for(var a,s=0;s<n.length;s++)if(a=n[s],0==r&&a.x>m&&(o.moveTo(a.x,a.y),r=1),0<s&&a.x>m&&a.x<v){var l=u(n,s-1);o.bezierCurveTo(l.ctrA.x,l.ctrA.y,l.ctrB.x,l.ctrB.y,a.x,a.y)}}else for(var c,p=0;p<n.length;p++)c=n[p],0==r&&c.x>m&&(o.moveTo(c.x,c.y),r=1),0<p&&c.x>m&&c.x<v&&o.lineTo(c.x,c.y);o.moveTo(n[0].x,n[0].y)}o.stroke(),o.setLineDash([])}),"point"==t.type&&(t.addPoint=!0),1==t.addPoint&&"column"!==t.type&&O(A,t.color,t.pointShape,o,e)}),!1!==e.dataLabel&&1===i&&(d=0,t.forEach(function(t){var r,a,u;a=(r=[].concat(e.chartData.yAxisData.ranges[t.index])).pop(),u=r.shift();var c=P(t.data,a,u,s,l,e,n,i);"column"===t.type?(I(c=w(c,l,h,d,n,e),t,n,o),d+=1):I(c,t,n,o)}));return o.restore(),{xAxisPoints:s,calPoints:p,eachSpacing:l}}(l,e,n,a,t),i=o.xAxisPoints,s=o.calPoints,p=o.eachSpacing;e.chartData.xAxisPoints=i,e.chartData.calPoints=s,e.chartData.eachSpacing=p,q(0,e,n,a),!1!==e.enableMarkLine&&1===t&&F(e,n,a),N(e.series,e,n,a,e.chartData),z(e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new tt({timing:"easeIn",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),$(0,e,0,a),B(c,e,n,a);var o=M(l,e,n,a,t),i=o.xAxisPoints,r=o.calPoints,s=o.eachSpacing;e.chartData.xAxisPoints=i,e.chartData.calPoints=r,e.chartData.eachSpacing=s,q(0,e,n,a),!1!==e.enableMarkLine&&1===t&&F(e,n,a),N(e.series,e,n,a,e.chartData),z(e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new tt({timing:"easeIn",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),$(0,e,0,a),B(c,e,n,a);var i=function(t,e,n,i){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,s=o({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},e.extra.area),l=e.chartData.xAxisData,c=l.xAxisPoints,p=l.eachSpacing,d=e.height-e.area[2],h=[];i.save();var f=0,g=e.width+p;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),f=-e._scrollDistance_-p+e.area[3],g=f+(e.xAxis.itemCount+4)*p),t.forEach(function(t){var o,l,m;l=(o=[].concat(e.chartData.yAxisData.ranges[t.index])).pop(),m=o.shift();var v=P(t.data,l,m,c,p,e,n,a);h.push(v);for(var x,b=y(v),A=0;A<b.length;A++){if(x=b[A],i.beginPath(),i.setStrokeStyle(r(t.color,s.opacity)),s.gradient){var _=i.createLinearGradient(0,e.area[0],0,e.height-e.area[2]);_.addColorStop("0",r(t.color,s.opacity)),_.addColorStop("1.0",r("#FFFFFF",.1)),i.setFillStyle(_)}else i.setFillStyle(r(t.color,s.opacity));if(i.setLineWidth(s.width*e.pixelRatio),1<x.length){var w=x[0],S=x[x.length-1];i.moveTo(w.x,w.y);var C=0;if("curve"===s.type){for(var T,D=0;D<x.length;D++)if(T=x[D],0==C&&T.x>f&&(i.moveTo(T.x,T.y),C=1),0<D&&T.x>f&&T.x<g){var k=u(x,D-1);i.bezierCurveTo(k.ctrA.x,k.ctrA.y,k.ctrB.x,k.ctrB.y,T.x,T.y)}}else for(var R,I=0;I<x.length;I++)R=x[I],0==C&&R.x>f&&(i.moveTo(R.x,R.y),C=1),0<I&&R.x>f&&R.x<g&&i.lineTo(R.x,R.y);i.lineTo(S.x,d),i.lineTo(w.x,d),i.lineTo(w.x,w.y)}else{var L=x[0];i.moveTo(L.x-p/2,L.y),i.lineTo(L.x+p/2,L.y),i.lineTo(L.x+p/2,d),i.lineTo(L.x-p/2,d),i.moveTo(L.x-p/2,L.y)}if(i.closePath(),i.fill(),s.addLine){if("dash"==t.lineType){var F=t.dashLength?t.dashLength:8;F*=e.pixelRatio,i.setLineDash([F,F])}if(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(s.width*e.pixelRatio),1===x.length)i.moveTo(x[0].x,x[0].y),i.arc(x[0].x,x[0].y,1,0,2*Math.PI);else{i.moveTo(x[0].x,x[0].y);var j=0;if("curve"===s.type){for(var M,E=0;E<x.length;E++)if(M=x[E],0==j&&M.x>f&&(i.moveTo(M.x,M.y),j=1),0<E&&M.x>f&&M.x<g){var z=u(x,E-1);i.bezierCurveTo(z.ctrA.x,z.ctrA.y,z.ctrB.x,z.ctrB.y,M.x,M.y)}}else for(var B,$=0;$<x.length;$++)B=x[$],0==j&&B.x>f&&(i.moveTo(B.x,B.y),j=1),0<$&&B.x>f&&B.x<g&&i.lineTo(B.x,B.y);i.moveTo(x[0].x,x[0].y)}i.stroke(),i.setLineDash([])}}!1!==e.dataPointShape&&O(v,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t){var o,r,s;r=(o=[].concat(e.chartData.yAxisData.ranges[t.index])).pop(),s=o.shift(),I(P(t.data,r,s,c,p,e,n,a),t,n,i)}),i.restore(),{xAxisPoints:c,calPoints:h,eachSpacing:p}}(l,e,n,a,t),s=i.xAxisPoints,p=i.calPoints,d=i.eachSpacing;e.chartData.xAxisPoints=s,e.chartData.calPoints=p,e.chartData.eachSpacing=d,q(0,e,n,a),!1!==e.enableMarkLine&&1===t&&F(e,n,a),N(e.series,e,n,a,e.chartData),z(e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new tt({timing:"easeInOut",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),e.chartData.pieData=function(t,e,n,i){var a=Math.PI,s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,u=o({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==n.pieChartLinePadding&&(n.pieChartLinePadding=u.activeRadius);var c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding);t=A(t,c,s);var p=u.activeRadius;if((t=t.map(function(t){return t._start_+=u.offsetAngle*a/180,t})).forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(r(t.color,e.extra.pie.activeOpacity||.5)),i.moveTo(l.x,l.y),i.arc(l.x,l.y,t._radius_+p,t._start_,t._start_+2*t._proportion_*a),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(u.borderWidth*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle(u.borderColor),i.setFillStyle(t.color),i.moveTo(l.x,l.y),i.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._proportion_*a),i.closePath(),i.fill(),1==u.border&&i.stroke()}),"ring"===e.type){var d=.6*c;"number"==typeof e.extra.pie.ringWidth&&0<e.extra.pie.ringWidth&&(d=Math.max(0,c-e.extra.pie.ringWidth)),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),i.moveTo(l.x,l.y),i.arc(l.x,l.y,d,0,2*a),i.closePath(),i.fill()}if(!1!==e.dataLabel&&1===s){for(var h=!1,f=0,g=t.length;f<g;f++)if(0<t[f].data){h=!0;break}h&&L(t,e,n,i,0,l)}return 1===s&&"ring"===e.type&&R(e,n,i,l),{center:l,radius:c,series:t}}(l,e,n,a,t),N(e.series,e,n,a,e.chartData),z(e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new tt({timing:"easeInOut",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),e.chartData.pieData=U(l,e,n,a,t),N(e.series,e,n,a,e.chartData),z(e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new tt({timing:"easeInOut",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),e.chartData.radarData=W(l,e,n,a,t),N(e.series,e,n,a,e.chartData),z(e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new tt({timing:"easeInOut",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),e.chartData.arcbarData=function(t,e,n,i){var r=Math.PI,a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,s=o({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio,gap:2*e.pixelRatio},e.extra.arcbar);t=_(t,s,a);var u,l=s.center?s.center:{x:e.width/2,y:e.height/2};s.radius?u=s.radius:(u=Math.min(l.x,l.y),u-=5*e.pixelRatio,u-=s.width/2);for(var c,p=0;p<t.length;p++)c=t[p],i.setLineWidth(s.width),i.setStrokeStyle(s.backgroundColor||"#E9E9E9"),i.setLineCap("round"),i.beginPath(),"default"==s.type?i.arc(l.x,l.y,u-(s.width+s.gap)*p,s.startAngle*r,s.endAngle*r,!1):i.arc(l.x,l.y,u-(s.width+s.gap)*p,0,2*r,!1),i.stroke(),i.setLineWidth(s.width),i.setStrokeStyle(c.color),i.setLineCap("round"),i.beginPath(),i.arc(l.x,l.y,u-(s.width+s.gap)*p,s.startAngle*r,c._proportion_*r,!1),i.stroke();return R(e,n,i,l),{center:l,radius:u,series:t}}(l,e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new tt({timing:"easeInOut",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),e.chartData.gaugeData=H(c,l,e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new tt({timing:"easeIn",duration:d,onProcess:function(t){a.clearRect(0,0,e.width,e.height),e.rotate&&k(a,e),$(0,e,0,a),B(c,e,n,a);var o=E(l,f,e,n,a,t),i=o.xAxisPoints,r=o.calPoints,s=o.eachSpacing;e.chartData.xAxisPoints=i,e.chartData.calPoints=r,e.chartData.eachSpacing=s,q(0,e,n,a),!1!==e.enableMarkLine&&1===t&&F(e,n,a),N(f?0:e.series,e,n,a,e.chartData),z(e,n,a,t),Y(0,a)},onAnimationFinish:function(){s.event.trigger("renderComplete")}})}}function nt(){this.events={}}tt.prototype.stop=function(){this.isStop=!0},nt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},nt.prototype.trigger=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e[0],i=e.slice(1);!this.events[o]||this.events[o].forEach(function(t){try{t.apply(null,i)}catch(t){console.error(t)}})};var ot=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=o({},t.title),t.subtitle=o({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=o({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*t.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},t.yAxis),t.yAxis.dashLength*=t.pixelRatio,t.yAxis.padding*=t.pixelRatio,t.xAxis=o({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},t.xAxis),t.xAxis.dashLength*=t.pixelRatio,t.legend=o({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth*=t.pixelRatio,t.legend.itemGap*=t.pixelRatio,t.legend.padding*=t.pixelRatio,t.legend.margin*=t.pixelRatio,t.extra=o({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation,t.rotate=!!t.rotate;var i=JSON.parse(JSON.stringify(n));if(i.colors=t.colors?t.colors:i.colors,i.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?i.yAxisTitleWidth:0,("pie"==t.type||"ring"==t.type)&&(i.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||i.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(i.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||i.pieChartLinePadding*t.pixelRatio),i.pieChartTextPadding=!1===t.dataLabel?0:i.pieChartTextPadding*t.pixelRatio,i.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:n.yAxisSplit,i.rotate=t.rotate,t.rotate){var r=t.width,a=t.height;t.width=a,t.height=r}t.padding=t.padding?t.padding:i.padding;for(var s=0;4>s;s++)t.padding[s]*=t.pixelRatio;i.yAxisWidth=n.yAxisWidth*t.pixelRatio,i.xAxisHeight=n.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(i.xAxisHeight+=6*t.pixelRatio),i.xAxisLineHeight=n.xAxisLineHeight*t.pixelRatio,i.fontSize=t.fontSize,i.titleFontSize=n.titleFontSize*t.pixelRatio,i.subtitleFontSize=n.subtitleFontSize*t.pixelRatio,i.toolTipPadding=n.toolTipPadding*t.pixelRatio,i.toolTipLineHeight=n.toolTipLineHeight*t.pixelRatio,i.columePadding=n.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=e.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new nt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=i,et.call(this,t.type,t,i,this.context)};ot.prototype.updateData=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};switch(this.opts=o({},this.opts,t),this.opts.updateData=!0,t.scrollPosition||"current"){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var e=D(this.opts.series,this.opts,this.config).yAxisWidth;this.config.yAxisWidth=e;var n,i=S(this.opts.categories,this.opts,this.config),r=i.xAxisPoints,a=i.startX;n=i.endX-a-i.eachSpacing*(r.length-1),this.scrollOption={currentOffset:n,startTouchX:n,distance:0,lastMoveTime:0},this.opts._scrollDistance_=n}et.call(this,this.opts.type,this.opts,this.config,this.context)},ot.prototype.zoom=function(){var t=Math.round,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=t(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+t(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=e.itemCount;var o=D(this.opts.series,this.opts,this.config).yAxisWidth;this.config.yAxisWidth=o;var i=0,r=S(this.opts.categories,this.opts,this.config),a=r.xAxisPoints,s=r.startX,u=r.endX,l=r.eachSpacing,c=u-s,p=c-l*(a.length-1);0<(i=c/2-l*n)&&(i=0),i<p&&(i=p),this.scrollOption={currentOffset:i,startTouchX:i,distance:0,lastMoveTime:0},this.opts._scrollDistance_=i,et.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log("请启用滚动条后使用！")},ot.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},ot.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},ot.prototype.getCurrentDataIndex=function(t){var e;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0]){var n=g(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?function(t,e){var n=-1;if(v(t,e.center,e.radius)){var o=Math.atan2(e.center.y-t.y,t.x-e.center.x);o=-o;for(var i,r=0,a=e.series.length;r<a;r++)if(s(o,(i=e.series[r])._start_,i._start_+2*i._proportion_*Math.PI)){n=r;break}}return n}({x:n.x,y:n.y},this.opts.chartData.pieData):"radar"===this.opts.type?function(t,e,n){var o=Math.PI,i=2*o/n,r=-1;if(v(t,e.center,e.radius)){var a=function(t){return 0>t&&(t+=2*o),t>2*o&&(t-=2*o),t},s=Math.atan2(e.center.y-t.y,t.x-e.center.x);0>(s*=-1)&&(s+=2*o),e.angleList.map(function(t){return t=a(-1*t)}).forEach(function(t,e){var n=a(t-i/2),u=a(t+i/2);u<n&&(u+=2*o),(s>=n&&s<=u||s+2*o>=n&&s+2*o<=u)&&(r=e)})}return r}({x:n.x,y:n.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?function(t,e){for(var n,o=-1,i=0,r=e.series.length;i<r;i++)if(n=e.series[i],t.x>n.funnelArea[0]&&t.x<n.funnelArea[2]&&t.y>n.funnelArea[1]&&t.y<n.funnelArea[3]){o=i;break}return o}({x:n.x,y:n.y},this.opts.chartData.funnelData):"map"===this.opts.type?function(t,e){for(var n=-1,o=e.chartData.mapData,i=e.series,r=function(t,e,n,o,i,r){return{x:(e-i)/o+n.xMin,y:n.yMax-(t-r)/o}}(t.y,t.x,o.bounds,o.scale,o.xoffset,o.yoffset),a=[r.x,r.y],s=0,u=i.length;s<u;s++)if(J(a,i[s].geometry.coordinates)){n=s;break}return n}({x:n.x,y:n.y},this.opts):"word"===this.opts.type?function(t,e){for(var n,o=-1,i=0,r=e.length;i<r;i++)if(n=e[i],t.x>n.area[0]&&t.x<n.area[2]&&t.y>n.area[1]&&t.y<n.area[3]){o=i;break}return o}({x:n.x,y:n.y},this.opts.chartData.wordCloudData):function(t,e,n,o){for(var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,r=-1,a=0,s=[],u=0;u<e[0].length;u++)s.push(e[0][u].x);return("line"==n.type||"area"==n.type)&&"justify"==n.xAxis.boundaryGap&&(a=n.chartData.eachSpacing/2),n.categories||(a=0),function(t,e){return t.x<=e.width-e.area[1]+10&&t.x>=e.area[3]-10&&t.y>=e.area[0]&&t.y<=e.height-e.area[2]}(t,n)&&s.forEach(function(e,n){t.x+i+a>e&&(r=n)}),r}({x:n.x,y:n.y},this.opts.chartData.calPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},ot.prototype.getLegendDataIndex=function(t){var e;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0]){var n=g(e,this.opts,t);return function(t,e){var n=-1;if(function(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}(t,e.area)){for(var o,i=e.points,r=-1,a=0,s=i.length;a<s;a++){o=i[a];for(var u=0;u<o.length;u++){r+=1;var l=o[u].area;if(t.x>l[0]&&t.x<l[2]&&t.y>l[1]&&t.y<l[3]){n=r;break}}}return n}return n}({x:n.x,y:n.y},this.opts.chartData.legendData)}return-1},ot.prototype.touchLegend=function(t){var e,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0]){g(e,this.opts,t);var o=this.getLegendDataIndex(t);0<=o&&(this.opts.series[o].show=!this.opts.series[o].show,this.opts.animation=!!n.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,et.call(this,this.opts.type,this.opts,this.config,this.context))}},ot.prototype.showToolTip=function(t){var e,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0])||console.log("touchError");var i=g(e,this.opts,t),r=this.scrollOption.currentOffset,a=o({},this.opts,{_scrollDistance_:r,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){if(-1<(d=this.getCurrentDataIndex(t)))if(0!==(c=m(this.opts.series,d)).length){var s=(l=function(t,e,n,o){for(var i,r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){var e;return e=o||t.data,{text:r.format?r.format(t,e[n]):t.name+": "+t.data,color:t.color}}),s=[],u={x:0,y:0},l=0;l<e.length;l++)void 0!==(i=e[l])[n]&&null!==i[n]&&s.push(i[n]);for(var c,p=0;p<s.length;p++)c=s[p],u.x=Math.round(c.x),u.y+=c.y;return u.y/=s.length,{textList:a,offset:u}}(c,this.opts.chartData.calPoints,d,this.opts.categories,n)).textList;(p=l.offset).y=i.y,a.tooltip={textList:s,offset:p,option:n,index:d}}et.call(this,a.type,a,this.config,this.context)}if("mix"===this.opts.type){if(-1<(d=this.getCurrentDataIndex(t))){r=this.scrollOption.currentOffset,a=o({},this.opts,{_scrollDistance_:r,animation:!1});if(0!==(c=m(this.opts.series,d)).length){var u=function(t,e,n,o){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.map(function(t){return{text:i.format?i.format(t,o[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});r=r.filter(function(t){if(!0!==t.disableLegend)return t});for(var a,s=[],u={x:0,y:0},l=0;l<e.length;l++)void 0!==(a=e[l])[n]&&null!==a[n]&&s.push(a[n]);for(var c,p=0;p<s.length;p++)c=s[p],u.x=Math.round(c.x),u.y+=c.y;return u.y/=s.length,{textList:r,offset:u}}(c,this.opts.chartData.calPoints,d,this.opts.categories,n);s=u.textList;(p=u.offset).y=i.y,a.tooltip={textList:s,offset:p,option:n,index:d}}}et.call(this,a.type,a,this.config,this.context)}if("candle"===this.opts.type){if(-1<(d=this.getCurrentDataIndex(t))){r=this.scrollOption.currentOffset,a=o({},this.opts,{_scrollDistance_:r,animation:!1});if(0!==(c=m(this.opts.series,d)).length){var l;s=(l=function(t,e,n,o,i,r){!(6<arguments.length&&void 0!==arguments[6])||arguments[6];var a=r.color.upFill,s=r.color.downFill,u=[a,a,s,a],l=[],c={text:i[o],color:null};l.push(c),e.map(function(e){0==o&&0>e.data[1]-e.data[0]?u[1]=s:(e.data[0]<t[o-1][1]&&(u[0]=s),e.data[1]<e.data[0]&&(u[1]=s),e.data[2]>t[o-1][1]&&(u[2]=a),e.data[3]<t[o-1][1]&&(u[3]=s));var n={text:"开盘："+e.data[0],color:u[0]},i={text:"收盘："+e.data[1],color:u[1]},r={text:"最低："+e.data[2],color:u[2]},c={text:"最高："+e.data[3],color:u[3]};l.push(n,i,r,c)});for(var p,d=[],h={x:0,y:0},f=0;f<n.length;f++)void 0!==(p=n[f])[o]&&null!==p[o]&&d.push(p[o]);return h.x=Math.round(d[0][0].x),{textList:l,offset:h}}(this.opts.series[0].data,c,this.opts.chartData.calPoints,d,this.opts.categories,this.opts.extra.candle,n)).textList;(p=l.offset).y=i.y,a.tooltip={textList:s,offset:p,option:n,index:d}}}et.call(this,a.type,a,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){if(-1<(d=this.getCurrentDataIndex(t))){r=this.scrollOption.currentOffset,a=o({},this.opts,{_scrollDistance_:r,animation:!1});var c=this.opts._series_[d],p=(s=[{text:n.format?n.format(c):c.name+": "+c.data,color:c.color}],{x:i.x,y:i.y});a.tooltip={textList:s,offset:p,option:n,index:d}}et.call(this,a.type,a,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){if(-1<(d=this.getCurrentDataIndex(t))){r=this.scrollOption.currentOffset,a=o({},this.opts,{_scrollDistance_:r,animation:!1}),c=this.opts._series_[d],s=[{text:n.format?n.format(c):c.properties.name,color:c.color}],p={x:i.x,y:i.y};a.tooltip={textList:s,offset:p,option:n,index:d}}a.updateData=!1,et.call(this,a.type,a,this.config,this.context)}if("radar"===this.opts.type){var d;if(-1<(d=this.getCurrentDataIndex(t))){r=this.scrollOption.currentOffset,a=o({},this.opts,{_scrollDistance_:r,animation:!1});if(0!==(c=m(this.opts.series,d)).length){s=c.map(function(t){return{text:n.format?n.format(t):t.name+": "+t.data,color:t.color}}),p={x:i.x,y:i.y};a.tooltip={textList:s,offset:p,option:n,index:d}}}et.call(this,a.type,a,this.config,this.context)}},ot.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=o({},this.opts,{_scrollDistance_:t,animation:!1});et.call(this,this.opts.type,e,this.config,this.context)},ot.prototype.scrollStart=function(t){var e,n=g(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=n.x)},ot.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now();if(!(n-this.scrollOption.lastMoveTime<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var i;if((i=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0])&&!0===this.opts.enableScroll){var r;r=g(i,this.opts,t).x-this.scrollOption.startTouchX;var a=this.scrollOption.currentOffset,s=function(t,e,n,o,i){var r=i.width-i.area[1]-i.area[3],a=n.eachSpacing*(i.chartData.xAxisData.xAxisPoints.length-1),s=e;return 0<=e?(s=0,t.event.trigger("scrollLeft")):Math.abs(e)>=a-r&&(s=r-a,t.event.trigger("scrollRight")),s}(this,a+r,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=r=s-a;var u=o({},this.opts,{_scrollDistance_:a+r,animation:!1});return et.call(this,u.type,u,this.config,this.context),a+r}}},ot.prototype.scrollEnd=function(){if(!0===this.opts.enableScroll){var t=this.scrollOption,e=t.currentOffset,n=t.distance;this.scrollOption.currentOffset=e+n,this.scrollOption.distance=0}},"object"==typeof t.exports&&(t.exports=ot)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},293:
/*!****************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/api/data.js ***!
  \****************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.queryFeeReport=e.queryWarningCustomer=e.queryCashAccountDetailReport=e.queryCashAccountReport=e.queryPayDetail=e.queryPay=e.queryReceiveDetail=e.queryReceive=e.queryPurchaseReturnDetail=e.queryPurchaseDetail=e.querySalesReturnDetail=e.querySalesDetail=e.querySlowSellingProduct=e.queryHotSellingProduct=void 0;var o,i=(o=n(/*! @/utils/http.js */23))&&o.__esModule?o:{default:o};e.queryHotSellingProduct=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QueryHotSellingProduct",data:e,method:"post"})};e.querySlowSellingProduct=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QuerySlowSellingProduct",data:e,method:"post"})};e.querySalesDetail=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QuerySalesDetail",data:e,method:"post"})};e.querySalesReturnDetail=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QuerySalesReturnDetail",data:e,method:"post"})};e.queryPurchaseDetail=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QueryPurchaseDetail",data:e,method:"post"})};e.queryPurchaseReturnDetail=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QueryPurchaseReturnDetail",data:e,method:"post"})};e.queryReceive=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log(e),i.default.request({url:t+"/QueryReceive",data:e,method:"post"})};e.queryReceiveDetail=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QueryReceiveDetail",data:e,method:"post"})};e.queryPay=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QueryPay",data:e,method:"post"})};e.queryPayDetail=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QueryPayDetail",data:e,method:"post"})};e.queryCashAccountReport=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QueryCashAccountReport",data:e,method:"post"})};e.queryCashAccountDetailReport=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QueryCashAccountDetailReport",data:e,method:"post"})};e.queryWarningCustomer=function(t,e){return i.default.request({url:t+"/QueryWarningCustomer?warningDays="+e,method:"post"})};e.queryFeeReport=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QueryFeeReport",data:e,method:"post"})}},3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},30:
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
=======
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var config = { yAxisWidth: 15, yAxisSplit: 5, xAxisHeight: 15, xAxisLineHeight: 15, legendHeight: 15, yAxisTitleWidth: 15, padding: [10, 10, 10, 10], pixelRatio: 1, rotate: !1, columePadding: 3, fontSize: 13, dataPointShape: ["circle", "circle", "circle", "circle"], colors: ["#1890ff", "#2fc25b", "#facc14", "#f04864", "#8543e0", "#90ed7d"], pieChartLinePadding: 15, pieChartTextPadding: 5, xAxisTextPadding: 3, titleColor: "#333333", titleFontSize: 20, subtitleColor: "#999999", subtitleFontSize: 15, toolTipPadding: 3, toolTipBackground: "#000000", toolTipOpacity: .7, toolTipLineHeight: 20, radarLabelTextMargin: 15, gaugeLabelTextMargin: 15 };var assign = function assign(e) {for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {t[_key - 1] = arguments[_key];}function i(e, t) {for (var a in t) {e[a] = e[a] && "[object Object]" === e[a].toString() ? i(e[a], t[a]) : e[a] = t[a];}return e;}if (null == e) throw new TypeError("Cannot convert undefined or null to object");return !t || 0 >= t.length ? e : (t.forEach(function (t) {e = i(e, t);}), e);};var util = { toFixed: function toFixed(e, t) {return t = t || 2, this.isFloat(e) && (e = e.toFixed(t)), e;}, isFloat: function isFloat(e) {return 0 != e % 1;}, approximatelyEqual: function approximatelyEqual(e, t) {return 1e-10 > Math.abs(e - t);}, isSameSign: function isSameSign(e, t) {var i = Math.abs;return i(e) === e && i(t) === t || i(e) !== e && i(t) !== t;}, isSameXCoordinateArea: function isSameXCoordinateArea(e, t) {return this.isSameSign(e.x, t.x);}, isCollision: function isCollision(e, t) {e.end = {}, e.end.x = e.start.x + e.width, e.end.y = e.start.y - e.height, t.end = {}, t.end.x = t.start.x + t.width, t.end.y = t.start.y - t.height;var i = t.start.x > e.end.x || t.end.x < e.start.x || t.end.y > e.start.y || t.start.y < e.end.y;return !i;} };function getH5Offset(t) {return t.mp = { changedTouches: [] }, t.mp.changedTouches.push({ x: t.offsetX, y: t.offsetY }), t;}function hexToRgb(e, t) {var i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,a = e.replace(i, function (e, t, i, a) {return t + t + i + i + a + a;}),o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a),n = parseInt(o[1], 16),l = parseInt(o[2], 16),r = parseInt(o[3], 16);return "rgba(" + n + "," + l + "," + r + "," + t + ")";}function findRange(e, t, i) {if (isNaN(e)) throw new Error("[uCharts] unvalid series data!");i = i || 10, t = t ? t : "upper";for (var a = 1; 1 > i;) {i *= 10, a *= 10;}for (e = "upper" === t ? Math.ceil(e * a) : Math.floor(e * a); 0 != e % i;) {"upper" === t ? e++ : e--;}return e / a;}function calCandleMA(e, t, i, a) {var o = [];for (var n, l = 0; l < e.length; l++) {n = { data: [], name: t[l], color: i[l] };for (var _t = 0, _i = a.length; _t < _i; _t++) {if (_t < e[l]) {n.data.push(null);continue;}var _i2 = 0;for (var _o = 0; _o < e[l]; _o++) {_i2 += a[_t - _o][1];}n.data.push(+(_i2 / e[l]).toFixed(3));}o.push(n);}return o;}function calValidDistance(e, t, i, a, o) {var n = o.width - o.area[1] - o.area[3],l = i.eachSpacing * (o.chartData.xAxisData.xAxisPoints.length - 1),r = t;return 0 <= t ? (r = 0, e.event.trigger("scrollLeft")) : Math.abs(t) >= l - n && (r = n - l, e.event.trigger("scrollRight")), r;}function isInAngleRange(e, t, i) {function a(e) {for (; 0 > e;) {e += 2 * o;}for (; e > 2 * o;) {e -= 2 * o;}return e;}var o = Math.PI;return e = a(e), t = a(t), i = a(i), t > i && (i += 2 * o, e < t && (e += 2 * o)), e >= t && e <= i;}function calRotateTranslate(e, t, i) {var a = e,o = i - t,n = a + (i - o - a) / 1.4142135623730951;n *= -1;return { transX: n, transY: (i - o) * (1.4142135623730951 - 1) - (i - o - a) / 1.4142135623730951 };}function createCurveControlPoints(e, t) {function i(e, t) {return !!(e[t - 1] && e[t + 1]) && (e[t].y >= n(e[t - 1].y, e[t + 1].y) || e[t].y <= o(e[t - 1].y, e[t + 1].y));}var o = Math.min,n = Math.max,l = .2,a = .2,r = null,s = null,d = null,h = null;if (1 > t ? (r = e[0].x + (e[1].x - e[0].x) * l, s = e[0].y + (e[1].y - e[0].y) * l) : (r = e[t].x + (e[t + 1].x - e[t - 1].x) * l, s = e[t].y + (e[t + 1].y - e[t - 1].y) * l), t > e.length - 3) {var x = e.length - 1;d = e[x].x - (e[x].x - e[x - 1].x) * a, h = e[x].y - (e[x].y - e[x - 1].y) * a;} else d = e[t + 1].x - (e[t + 2].x - e[t].x) * a, h = e[t + 1].y - (e[t + 2].y - e[t].y) * a;return i(e, t + 1) && (h = e[t + 1].y), i(e, t) && (s = e[t].y), (s >= n(e[t].y, e[t + 1].y) || s <= o(e[t].y, e[t + 1].y)) && (s = e[t].y), (h >= n(e[t].y, e[t + 1].y) || h <= o(e[t].y, e[t + 1].y)) && (h = e[t + 1].y), { ctrA: { x: r, y: s }, ctrB: { x: d, y: h } };}function convertCoordinateOrigin(e, t, i) {return { x: i.x + e, y: i.y - t };}function avoidCollision(e, t) {if (t) for (; util.isCollision(e, t);) {0 < e.start.x ? e.start.y-- : 0 > e.start.x ? e.start.y++ : 0 < e.start.y ? e.start.y++ : e.start.y--;}return e;}function fillSeries(e, t, i) {var a = 0;return e.map(function (e) {if (e.color || (e.color = i.colors[a], a = (a + 1) % i.colors.length), e.index || (e.index = 0), e.type || (e.type = t.type), "undefined" == typeof e.show && (e.show = !0), e.type || (e.type = t.type), e.pointShape || (e.pointShape = "circle"), !e.legendShape) switch (e.type) {case "line":e.legendShape = "line";break;case "column":e.legendShape = "rect";break;case "area":e.legendShape = "triangle";break;default:e.legendShape = "circle";}return e;});}function getDataRange(e, t) {var i = 0,a = t - e;return i = 1e4 <= a ? 1e3 : 1e3 <= a ? 100 : 100 <= a ? 10 : 10 <= a ? 5 : 1 <= a ? 1 : .1 <= a ? .1 : .01 <= a ? .01 : .001 <= a ? .001 : 1e-4 <= a ? 1e-4 : 1e-5 <= a ? 1e-5 : 1e-6, { minRange: findRange(e, "lower", i), maxRange: findRange(t, "upper", i) };}function measureText(e) {var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : config.fontSize;e = e + "";var e = e.split(""),a = 0;for (var _t2, o = 0; o < e.length; o++) {_t2 = e[o], a += /[a-zA-Z]/.test(_t2) ? 7 : /[0-9]/.test(_t2) ? 5.5 : /\./.test(_t2) ? 2.7 : /-/.test(_t2) ? 3.25 : /[\u4e00-\u9fa5]/.test(_t2) ? 10 : /\(|\)/.test(_t2) ? 3.73 : /\s/.test(_t2) ? 2.5 : /%/.test(_t2) ? 8 : 10;}return a * t / 10;}function dataCombine(e) {return e.reduce(function (e, t) {return (e.data ? e.data : e).concat(t.data);}, []);}function dataCombineStack(e, t) {for (var o = Array(t), a = 0; a < o.length; a++) {o[a] = 0;}for (var n = 0; n < e.length; n++) {for (var a = 0; a < o.length; a++) {o[a] += e[n].data[a];}}return e.reduce(function (e, t) {return (e.data ? e.data : e).concat(t.data).concat(o);}, []);}function getTouches(t, i, a) {var e, o;return t.clientX ? i.rotate ? (o = i.height - t.clientX * i.pixelRatio, e = (t.pageY - a.currentTarget.offsetTop - i.height / i.pixelRatio / 2 * (i.pixelRatio - 1)) * i.pixelRatio) : (e = t.clientX * i.pixelRatio, o = (t.pageY - a.currentTarget.offsetTop - i.height / i.pixelRatio / 2 * (i.pixelRatio - 1)) * i.pixelRatio) : i.rotate ? (o = i.height - t.x * i.pixelRatio, e = t.y * i.pixelRatio) : (e = t.x * i.pixelRatio, o = t.y * i.pixelRatio), { x: e, y: o };}function getSeriesDataItem(e, t) {var i = [];for (var a, o = 0; o < e.length; o++) {if (a = e[o], null !== a.data[t] && "undefined" != typeof a.data[t] && a.show) {var _e = {};_e.color = a.color, _e.type = a.type, _e.style = a.style, _e.pointShape = a.pointShape, _e.disableLegend = a.disableLegend, _e.name = a.name, _e.show = a.show, _e.data = a.format ? a.format(a.data[t]) : a.data[t], i.push(_e);}}return i;}function getMaxTextListLength(e) {var t = e.map(function (e) {return measureText(e);});return Math.max.apply(null, t);}function getRadarCoordinateSeries(e) {for (var t = Math.PI, a = [], o = 0; o < e; o++) {a.push(2 * t / e * o);}return a.map(function (e) {return -1 * e + t / 2;});}function getToolTipData(e, t, a, i) {var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},n = e.map(function (e) {var t = [];return t = i ? i : e.data, { text: o.format ? o.format(e, t[a]) : e.name + ": " + e.data, color: e.color };}),l = [],r = { x: 0, y: 0 };for (var _o2, _n = 0; _n < t.length; _n++) {_o2 = t[_n], "undefined" != typeof _o2[a] && null !== _o2[a] && l.push(_o2[a]);}for (var _o3, _n2 = 0; _n2 < l.length; _n2++) {_o3 = l[_n2], r.x = Math.round(_o3.x), r.y += _o3.y;}return r.y /= l.length, { textList: n, offset: r };}function getMixToolTipData(e, t, a, i) {var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},n = e.map(function (e) {return { text: o.format ? o.format(e, i[a]) : e.name + ": " + e.data, color: e.color, disableLegend: !!e.disableLegend };});n = n.filter(function (e) {if (!0 !== e.disableLegend) return e;});var l = [],r = { x: 0, y: 0 };for (var _o4, _n3 = 0; _n3 < t.length; _n3++) {_o4 = t[_n3], "undefined" != typeof _o4[a] && null !== _o4[a] && l.push(_o4[a]);}for (var _o5, _n4 = 0; _n4 < l.length; _n4++) {_o5 = l[_n4], r.x = Math.round(_o5.x), r.y += _o5.y;}return r.y /= l.length, { textList: n, offset: r };}function getCandleToolTipData(e, t, a, o, i, n) {6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : {};var l = n.color.upFill,r = n.color.downFill,s = [l, l, r, l];var d = [];var h = { text: i[o], color: null };d.push(h), t.map(function (t) {0 == o && 0 > t.data[1] - t.data[0] ? s[1] = r : (t.data[0] < e[o - 1][1] && (s[0] = r), t.data[1] < t.data[0] && (s[1] = r), t.data[2] > e[o - 1][1] && (s[2] = l), t.data[3] < e[o - 1][1] && (s[3] = r));var i = { text: "\u5F00\u76D8\uFF1A" + t.data[0], color: s[0] },a = { text: "\u6536\u76D8\uFF1A" + t.data[1], color: s[1] },n = { text: "\u6700\u4F4E\uFF1A" + t.data[2], color: s[2] },h = { text: "\u6700\u9AD8\uFF1A" + t.data[3], color: s[3] };d.push(i, a, n, h);});var x = [],c = { x: 0, y: 0 };for (var _l, _r = 0; _r < a.length; _r++) {_l = a[_r], "undefined" != typeof _l[o] && null !== _l[o] && x.push(_l[o]);}return c.x = Math.round(x[0][0].x), { textList: d, offset: c };}function filterSeries(e) {var t = [];for (var a = 0; a < e.length; a++) {!0 == e[a].show && t.push(e[a]);}return t;}function findCurrentIndex(e, t, i, a) {var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,n = -1,l = 0;var r = [];for (var _o6 = 0; _o6 < t[0].length; _o6++) {r.push(t[0][_o6].x);}return ("line" == i.type || "area" == i.type) && "justify" == i.xAxis.boundaryGap && (l = i.chartData.eachSpacing / 2), i.categories || (l = 0), isInExactChartArea(e, i, a) && r.forEach(function (t, i) {e.x + o + l > t && (n = i);}), n;}function findLegendIndex(e, t) {var i = -1;if (isInExactLegendArea(e, t.area)) {var a = t.points,o = -1;for (var _t3, n = 0, l = a.length; n < l; n++) {_t3 = a[n];for (var _a = 0; _a < _t3.length; _a++) {o += 1;var _n5 = _t3[_a].area;if (e.x > _n5[0] && e.x < _n5[2] && e.y > _n5[1] && e.y < _n5[3]) {i = o;break;}}}return i;}return i;}function isInExactLegendArea(e, t) {return e.x > t.start.x && e.x < t.end.x && e.y > t.start.y && e.y < t.end.y;}function isInExactChartArea(e, t) {return e.x <= t.width - t.area[1] + 10 && e.x >= t.area[3] - 10 && e.y >= t.area[0] && e.y <= t.height - t.area[2];}function findRadarChartCurrentIndex(e, t, i) {var a = Math.PI,o = 2 * a / i,n = -1;if (isInExactPieChartArea(e, t.center, t.radius)) {var l = function l(e) {return 0 > e && (e += 2 * a), e > 2 * a && (e -= 2 * a), e;},r = Math.atan2(t.center.y - e.y, e.x - t.center.x);r = -1 * r, 0 > r && (r += 2 * a);var s = t.angleList.map(function (e) {return e = l(-1 * e), e;});s.forEach(function (e, t) {var i = l(e - o / 2),s = l(e + o / 2);s < i && (s += 2 * a), (r >= i && r <= s || r + 2 * a >= i && r + 2 * a <= s) && (n = t);});}return n;}function findFunnelChartCurrentIndex(e, t) {for (var a, o = -1, n = 0, l = t.series.length; n < l; n++) {if (a = t.series[n], e.x > a.funnelArea[0] && e.x < a.funnelArea[2] && e.y > a.funnelArea[1] && e.y < a.funnelArea[3]) {o = n;break;}}return o;}function findWordChartCurrentIndex(e, t) {for (var a, o = -1, n = 0, l = t.length; n < l; n++) {if (a = t[n], e.x > a.area[0] && e.x < a.area[2] && e.y > a.area[1] && e.y < a.area[3]) {o = n;break;}}return o;}function findMapChartCurrentIndex(e, t) {for (var a, o = -1, n = t.chartData.mapData, l = t.series, r = pointToCoordinate(e.y, e.x, n.bounds, n.scale, n.xoffset, n.yoffset), s = [r.x, r.y], d = 0, h = l.length; d < h; d++) {if (a = l[d].geometry.coordinates, isPoiWithinPoly(s, a)) {o = d;break;}}return o;}function findPieChartCurrentIndex(e, t) {var a = -1;if (isInExactPieChartArea(e, t.center, t.radius)) {var o = Math.atan2(t.center.y - e.y, e.x - t.center.x);o = -o;for (var n, l = 0, r = t.series.length; l < r; l++) {if (n = t.series[l], isInAngleRange(o, n._start_, n._start_ + 2 * n._proportion_ * Math.PI)) {a = l;break;}}}return a;}function isInExactPieChartArea(e, t, i) {var a = Math.pow;return a(e.x - t.x, 2) + a(e.y - t.y, 2) <= a(i, 2);}function splitPoints(e) {var t = [],i = [];return e.forEach(function (e) {null === e ? (i.length && t.push(i), i = []) : i.push(e);}), i.length && t.push(i), t;}function calLegendData(e, t, i, a) {var o = Math.max,n = Math.floor;var l = { area: { start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, width: 0, height: 0, wholeWidth: 0, wholeHeight: 0 }, points: [], widthArr: [], heightArr: [] };if (!1 === t.legend.show) return a.legendData = l, l;var r = t.legend.padding,s = t.legend.margin,d = t.legend.fontSize,h = 15 * t.pixelRatio,x = 5 * t.pixelRatio,c = o(t.legend.lineHeight * t.pixelRatio, d);if ("top" == t.legend.position || "bottom" == t.legend.position) {var _a2 = [],_n6 = 0,p = [],g = [];for (var _o7 = 0; _o7 < e.length; _o7++) {var _i3 = e[_o7],_l2 = h + x + measureText(_i3.name || "undefined", d) + t.legend.itemGap;_n6 + _l2 > t.width - t.padding[1] - t.padding[3] ? (_a2.push(g), p.push(_n6 - t.legend.itemGap), _n6 = _l2, g = [_i3]) : (_n6 += _l2, g.push(_i3));}if (g.length) {_a2.push(g), p.push(_n6 - t.legend.itemGap), l.widthArr = p;var _e2 = o.apply(null, p);switch (t.legend.float) {case "left":l.area.start.x = t.padding[3], l.area.end.x = t.padding[3] + 2 * r;break;case "right":l.area.start.x = t.width - t.padding[1] - _e2 - 2 * r, l.area.end.x = t.width - t.padding[1];break;default:l.area.start.x = (t.width - _e2) / 2 - r, l.area.end.x = (t.width + _e2) / 2 + r;}l.area.width = _e2 + 2 * r, l.area.wholeWidth = _e2 + 2 * r, l.area.height = _a2.length * c + 2 * r, l.area.wholeHeight = _a2.length * c + 2 * r + 2 * s, l.points = _a2;}} else {var _i4 = e.length,_a3 = t.height - t.padding[0] - t.padding[2] - 2 * s - 2 * r,_o8 = Math.min(n(_a3 / c), _i4);switch (l.area.height = _o8 * c + 2 * r, l.area.wholeHeight = _o8 * c + 2 * r, t.legend.float) {case "top":l.area.start.y = t.padding[0] + s, l.area.end.y = t.padding[0] + s + l.area.height;break;case "bottom":l.area.start.y = t.height - t.padding[2] - s - l.area.height, l.area.end.y = t.height - t.padding[2] - s;break;default:l.area.start.y = (t.height - l.area.height) / 2, l.area.end.y = (t.height + l.area.height) / 2;}var _p = 0 == _i4 % _o8 ? _i4 / _o8 : n(_i4 / _o8 + 1),_g = [];for (var _t4, _a4 = 0; _a4 < _p; _a4++) {_t4 = e.slice(_a4 * _o8, _a4 * _o8 + _o8), _g.push(_t4);}if (l.points = _g, _g.length) {for (var _e4 = 0; _e4 < _g.length; _e4++) {var _i5 = _g[_e4],_a5 = 0;for (var _e5, _o9 = 0; _o9 < _i5.length; _o9++) {_e5 = h + x + measureText(_i5[_o9].name || "undefined", d) + t.legend.itemGap, _e5 > _a5 && (_a5 = _e5);}l.widthArr.push(_a5), l.heightArr.push(_i5.length * c + 2 * r);}var _e3 = 0;for (var _t5 = 0; _t5 < l.widthArr.length; _t5++) {_e3 += l.widthArr[_t5];}l.area.width = _e3 - t.legend.itemGap + 2 * r, l.area.wholeWidth = l.area.width + r;}}switch (t.legend.position) {case "top":l.area.start.y = t.padding[0] + s, l.area.end.y = t.padding[0] + s + l.area.height;break;case "bottom":l.area.start.y = t.height - t.padding[2] - l.area.height - s, l.area.end.y = t.height - t.padding[2] - s;break;case "left":l.area.start.x = t.padding[3], l.area.end.x = t.padding[3] + l.area.width;break;case "right":l.area.start.x = t.width - t.padding[1] - l.area.width, l.area.end.x = t.width - t.padding[1];}return a.legendData = l, l;}function calCategoriesData(e, t, i, a) {var o = { angle: 0, xAxisHeight: i.xAxisHeight },n = e.map(function (e) {return measureText(e, t.xAxis.fontSize || i.fontSize);}),l = Math.max.apply(this, n);return !0 == t.xAxis.rotateLabel && l + 2 * i.xAxisTextPadding > a && (o.angle = 45 * Math.PI / 180, o.xAxisHeight = 2 * i.xAxisTextPadding + l * Math.sin(o.angle)), o;}function getXAxisTextList(e, t) {var a = Math.min,o = Math.max,n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : -1,l = dataCombine(e),r = [];l = l.filter(function (e) {return "object" == typeof e && null !== e ? e.constructor == Array ? null !== e : null !== e.value : null !== e;}), l.map(function (e) {"object" == typeof e ? e.constructor == Array ? "candle" == t.type ? e.map(function (e) {r.push(e);}) : r.push(e[0]) : r.push(e.value) : r.push(e);});var s = 0,d = 0;if (0 < r.length && (s = a.apply(this, r), d = o.apply(this, r)), -1 < n ? ("number" == typeof t.xAxis.data[n].min && (s = a(t.xAxis.data[n].min, s)), "number" == typeof t.xAxis.data[n].max && (d = o(t.xAxis.data[n].max, d))) : ("number" == typeof t.xAxis.min && (s = a(t.xAxis.min, s)), "number" == typeof t.xAxis.max && (d = o(t.xAxis.max, d))), s === d) {var h = d || 10;d += h;}for (var x = getDataRange(s, d), c = x.minRange, p = x.maxRange, g = [], y = (p - c) / t.xAxis.splitNumber, f = 0; f <= t.xAxis.splitNumber; f++) {g.push(c + y * f);}return g;}function calXAxisData(e, t, i) {var a = { angle: 0, xAxisHeight: i.xAxisHeight };a.ranges = getXAxisTextList(e, t, i), a.rangesFormat = a.ranges.map(function (e) {return e = t.xAxis.format ? t.xAxis.format(e) : util.toFixed(e, 2), e;});var o = a.ranges.map(function (e) {return e = util.toFixed(e, 2), e = t.xAxis.format ? t.xAxis.format(+e) : e, e;});a = Object.assign(a, getXAxisPoints(o, t, i));var n = a.eachSpacing,l = o.map(function (e) {return measureText(e);}),r = Math.max.apply(this, l);return r + 2 * i.xAxisTextPadding > n && (a.angle = 45 * Math.PI / 180, a.xAxisHeight = 2 * i.xAxisTextPadding + r * Math.sin(a.angle)), !0 === t.xAxis.disabled && (a.xAxisHeight = 0), a;}function getRadarDataPoints(e, t, i, a, o) {var n = Math.max,l = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1,r = o.extra.radar || {};r.max = r.max || 0;var s = n(r.max, n.apply(null, dataCombine(a))),d = [];var _loop = function _loop(_n7) {var o = a[_n7],r = {};r.color = o.color, r.legendShape = o.legendShape, r.pointShape = o.pointShape, r.data = [], o.data.forEach(function (a, o) {var n = {};n.angle = e[o], n.proportion = a / s, n.position = convertCoordinateOrigin(i * n.proportion * l * Math.cos(n.angle), i * n.proportion * l * Math.sin(n.angle), t), r.data.push(n);}), d.push(r);};for (var _n7 = 0; _n7 < a.length; _n7++) {_loop(_n7);}return d;}function getPieDataPoints(e, t) {var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 1,o = 0,n = 0;for (var _a6, _n8 = 0; _n8 < e.length; _n8++) {_a6 = e[_n8], _a6.data = null === _a6.data ? 0 : _a6.data, o += _a6.data;}for (var _n9, l = 0; l < e.length; l++) {_n9 = e[l], _n9.data = null === _n9.data ? 0 : _n9.data, _n9._proportion_ = 0 === o ? 1 / e.length * a : _n9.data / o * a, _n9._radius_ = t;}for (var _a7, _o10 = 0; _o10 < e.length; _o10++) {_a7 = e[_o10], _a7._start_ = n, n += 2 * _a7._proportion_ * Math.PI;}return e;}function getFunnelDataPoints(e, t) {var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 1;e = e.sort(function (e, t) {return parseInt(t.data) - parseInt(e.data);});for (var o = 0; o < e.length; o++) {e[o].radius = e[o].data / e[0].data * t * a, e[o]._proportion_ = e[o].data / e[0].data;}return e.reverse();}function getRoseDataPoints(e, t, a, o) {var n = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 1,l = 0,r = 0,s = [];for (var _n10, _r2 = 0; _r2 < e.length; _r2++) {_n10 = e[_r2], _n10.data = null === _n10.data ? 0 : _n10.data, l += _n10.data, s.push(_n10.data);}var d = Math.min.apply(null, s),h = Math.max.apply(null, s);for (var _r3, _s = 0; _s < e.length; _s++) {_r3 = e[_s], _r3.data = null === _r3.data ? 0 : _r3.data, 0 === l || "area" == t ? (_r3._proportion_ = _r3.data / l * n, _r3._rose_proportion_ = 1 / e.length * n) : (_r3._proportion_ = _r3.data / l * n, _r3._rose_proportion_ = _r3.data / l * n), _r3._radius_ = a + (o - a) * ((_r3.data - d) / (h - d));}for (var _n11, _l3 = 0; _l3 < e.length; _l3++) {_n11 = e[_l3], _n11._start_ = r, r += 2 * _n11._rose_proportion_ * Math.PI;}return e;}function getArcbarDataPoints(e, t) {var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 1;1 == a && (a = .999999);for (var o, n = 0; n < e.length; n++) {o = e[n], o.data = null === o.data ? 0 : o.data;var i = void 0;i = "circle" == t.type ? 2 : t.endAngle < t.startAngle ? 2 + t.endAngle - t.startAngle : t.startAngle - t.endAngle, o._proportion_ = i * o.data * a + t.startAngle, 2 <= o._proportion_ && (o._proportion_ %= 2);}return e;}function getGaugeAxisPoints(e, t, a) {var o = t;for (var n = 0; n < e.length; n++) {e[n].value = null === e[n].value ? 0 : e[n].value, e[n]._startAngle_ = o, e[n]._endAngle_ = (t - a + 1) * e[n].value + t, 2 <= e[n]._endAngle_ && (e[n]._endAngle_ %= 2), o = e[n]._endAngle_;}return e;}function getGaugeDataPoints(e, t, a) {var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : 1;for (var n, l = 0; l < e.length; l++) {if (n = e[l], n.data = null === n.data ? 0 : n.data, "auto" == a.pointer.color) {for (var _e6 = 0; _e6 < t.length; _e6++) {if (n.data <= t[_e6].value) {n.color = t[_e6].color;break;}}} else n.color = a.pointer.color;var i = a.startAngle - a.endAngle + 1;n._endAngle_ = i * n.data + a.startAngle, n._oldAngle_ = a.oldAngle, a.oldAngle < a.endAngle && (n._oldAngle_ += 2), n._proportion_ = n.data >= a.oldData ? (n._endAngle_ - n._oldAngle_) * o + a.oldAngle : n._oldAngle_ - (n._oldAngle_ - n._endAngle_) * o, 2 <= n._proportion_ && (n._proportion_ %= 2);}return e;}function getPieTextMaxLength(e) {e = getPieDataPoints(e);var t = 0;for (var a = 0; a < e.length; a++) {var i = e[a],o = i.format ? i.format(+i._proportion_.toFixed(2)) : util.toFixed(100 * i._proportion_) + "%";t = Math.max(t, measureText(o));}return t;}function fixColumeData(e, t, i, a, o, n) {return e.map(function (e) {return null === e ? null : (e.width = Math.ceil((t - 2 * o.columePadding) / i), n.extra.column && n.extra.column.width && 0 < +n.extra.column.width && (e.width = Math.min(e.width, +n.extra.column.width)), 0 >= e.width && (e.width = 1), e.x += (a + .5 - i / 2) * e.width, e);});}function fixColumeMeterData(e, t, i, a, o, n, l) {return e.map(function (e) {return null === e ? null : (e.width = Math.ceil((t - 2 * o.columePadding) / 2), n.extra.column && n.extra.column.width && 0 < +n.extra.column.width && (e.width = Math.min(e.width, +n.extra.column.width)), 0 < a && (e.width -= 2 * l), e);});}function fixColumeStackData(e, t, i, a, o, n) {return e.map(function (e) {return null === e ? null : (e.width = Math.ceil((t - 2 * o.columePadding) / 2), n.extra.column && n.extra.column.width && 0 < +n.extra.column.width && (e.width = Math.min(e.width, +n.extra.column.width)), e);});}function getXAxisPoints(e, t) {var i = t.width - t.area[1] - t.area[3],a = t.enableScroll ? Math.min(t.xAxis.itemCount, e.length) : e.length;("line" == t.type || "area" == t.type) && 1 < a && "justify" == t.xAxis.boundaryGap && (a -= 1);var o = i / a,n = [],l = t.area[3],r = t.width - t.area[1];return e.forEach(function (e, t) {n.push(l + t * o);}), "justify" !== t.xAxis.boundaryGap && (!0 === t.enableScroll ? n.push(l + e.length * o) : n.push(r)), { xAxisPoints: n, startX: l, endX: r, eachSpacing: o };}function getCandleDataPoints(e, t, i, a, o, n) {var l = Math.round,r = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : 1,s = [],d = n.height - n.area[0] - n.area[2];return e.forEach(function (e, h) {if (null === e) s.push(null);else {var x = [];e.forEach(function (e) {var s = { x: a[h] + l(o / 2) },c = e.value || e,p = d * (c - t) / (i - t);p *= r, s.y = n.height - l(p) - n.area[2], x.push(s);}), s.push(x);}}), s;}function getDataPoints(e, t, i, a, o, n) {var l = Math.round,r = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : 1,s = "center";("line" == n.type || "area" == n.type) && (s = n.xAxis.boundaryGap);var d = [],h = n.height - n.area[0] - n.area[2],x = n.width - n.area[1] - n.area[3];return e.forEach(function (e, c) {if (null === e) d.push(null);else {var p = { color: e.color, x: a[c] },g = e;if ("object" == typeof e && null !== e) if (e.constructor == Array) {var _t6, _i6, _a8;_t6 = [].concat(n.chartData.xAxisData.ranges), _i6 = _t6.shift(), _a8 = _t6.pop(), g = e[1], p.x = n.area[3] + x * (e[0] - _i6) / (_a8 - _i6);} else g = e.value;"center" == s && (p.x += l(o / 2));var y = h * (g - t) / (i - t);y *= r, p.y = n.height - l(y) - n.area[2], d.push(p);}}), d;}function getStackDataPoints(e, t, i, a, o, n, l, r, s) {var d = Math.round,h = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : 1,x = [],c = n.height - n.area[0] - n.area[2];return e.forEach(function (e, l) {if (null === e) x.push(null);else {var p = { color: e.color, x: a[l] + d(o / 2) };if (0 < r) {var g = 0;for (var _e7 = 0; _e7 <= r; _e7++) {g += s[_e7].data[l];}var y = g - e,f = c * (g - t) / (i - t),u = c * (y - t) / (i - t);} else var g = e,f = c * (g - t) / (i - t),u = 0;var m = u;f *= h, m *= h, p.y = n.height - d(f) - n.area[2], p.y0 = n.height - d(m) - n.area[2], x.push(p);}}), x;}function getYAxisTextList(e, t, a, o) {var n,l = Math.min,r = Math.max,s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : -1;n = "stack" == o ? dataCombineStack(e, t.categories.length) : dataCombine(e);var d = [];n = n.filter(function (e) {return "object" == typeof e && null !== e ? e.constructor == Array ? null !== e : null !== e.value : null !== e;}), n.map(function (e) {"object" == typeof e ? e.constructor == Array ? "candle" == t.type ? e.map(function (e) {d.push(e);}) : d.push(e[1]) : d.push(e.value) : d.push(e);});var h = 0,x = 0;if (0 < d.length && (h = l.apply(this, d), x = r.apply(this, d)), -1 < s ? ("number" == typeof t.yAxis.data[s].min && (h = l(t.yAxis.data[s].min, h)), "number" == typeof t.yAxis.data[s].max && (x = r(t.yAxis.data[s].max, x))) : ("number" == typeof t.yAxis.min && (h = l(t.yAxis.min, h)), "number" == typeof t.yAxis.max && (x = r(t.yAxis.max, x))), h === x) {var c = x || 10;x += c;}for (var p = getDataRange(h, x), g = p.minRange, y = p.maxRange, f = [], u = (y - g) / t.yAxis.splitNumber, m = 0; m <= t.yAxis.splitNumber; m++) {f.push(g + u * m);}return f.reverse();}function calYAxisData(e, t, a) {var o = Math.max,n = assign({}, { type: "" }, t.extra.column),l = t.yAxis.data.length,r = Array(l);if (0 < l) {for (var _t7 = 0; _t7 < l; _t7++) {r[_t7] = [];for (var _i7 = 0; _i7 < e.length; _i7++) {e[_i7].index == _t7 && r[_t7].push(e[_i7]);}}var s = Array(l),d = Array(l),h = Array(l);var _loop2 = function _loop2(x, _e9) {_e9 = t.yAxis.data[x], !0 == t.yAxis.disabled && (_e9.disabled = !0), s[x] = getYAxisTextList(r[x], t, a, n.type, x);var i = _e9.fontSize || a.fontSize;h[x] = { position: _e9.position ? _e9.position : "left", width: 0 }, d[x] = s[x].map(function (t) {_e8 = _e9;return t = util.toFixed(t, 6), t = _e9.format ? _e9.format(+t) : t, h[x].width = o(h[x].width, measureText(t, i) + 5), t;});var l = _e9.calibration ? 4 * t.pixelRatio : 0;h[x].width += l + 3 * t.pixelRatio, !0 === _e9.disabled && (h[x].width = 0);_e8 = _e9;};for (var _e8, x = 0; x < l; x++) {_loop2(x, _e8);}} else {var s = [,],d = [,],h = [,];s[0] = getYAxisTextList(e, t, a, n.type), h[0] = { position: "left", width: 0 };var i = t.yAxis.fontSize || a.fontSize;d[0] = s[0].map(function (e) {return e = util.toFixed(e, 6), e = t.yAxis.format ? t.yAxis.format(+e) : e, h[0].width = o(h[0].width, measureText(e, i) + 5), e;}), h[0].width += 3 * t.pixelRatio, !0 === t.yAxis.disabled ? (h[0] = { position: "left", width: 0 }, t.yAxis.data[0] = { disabled: !0 }) : t.yAxis.data[0] = { disabled: !1, position: "left", max: t.yAxis.max, min: t.yAxis.min, format: t.yAxis.format };}return { rangesFormat: d, ranges: s, yAxisWidth: h };}function calTooltipYAxisData(e, t, a) {var o = [].concat(a.chartData.yAxisData.ranges),n = a.height - a.area[0] - a.area[2],l = a.area[0],r = [];for (var s = 0; s < o.length; s++) {var _t8 = o[s].shift(),i = o[s].pop(),d = _t8 - (_t8 - i) * (e - l) / n;d = a.yAxis.data[s].format ? a.yAxis.data[s].format(+d) : d.toFixed(0), r.push(d + "");}return r;}function calMarkLineData(e, t) {var a,o,n = t.height - t.area[0] - t.area[2];for (var l = 0; l < e.length; l++) {e[l].yAxisIndex = e[l].yAxisIndex ? e[l].yAxisIndex : 0;var i = [].concat(t.chartData.yAxisData.ranges[e[l].yAxisIndex]);a = i.pop(), o = i.shift();var r = n * (e[l].value - a) / (o - a);e[l].y = t.height - Math.round(r) - t.area[2];}return e;}function contextRotate(e, t) {var i = Math.PI;!0 === t.rotateLock ? !0 !== t._rotate_ && (e.translate(t.height, 0), e.rotate(90 * i / 180), t._rotate_ = !0) : (e.translate(t.height, 0), e.rotate(90 * i / 180));}function drawPointShape(e, t, i, a, o) {a.beginPath(), "hollow" == o.dataPointShapeType ? (a.setStrokeStyle(t), a.setFillStyle(o.background), a.setLineWidth(2 * o.pixelRatio)) : (a.setStrokeStyle("#ffffff"), a.setFillStyle(t), a.setLineWidth(1 * o.pixelRatio)), "diamond" === i ? e.forEach(function (e) {null !== e && (a.moveTo(e.x, e.y - 4.5), a.lineTo(e.x - 4.5, e.y), a.lineTo(e.x, e.y + 4.5), a.lineTo(e.x + 4.5, e.y), a.lineTo(e.x, e.y - 4.5));}) : "circle" === i ? e.forEach(function (e) {null !== e && (a.moveTo(e.x + 2.5 * o.pixelRatio, e.y), a.arc(e.x, e.y, 3 * o.pixelRatio, 0, 2 * Math.PI, !1));}) : "rect" === i ? e.forEach(function (e) {null !== e && (a.moveTo(e.x - 3.5, e.y - 3.5), a.rect(e.x - 3.5, e.y - 3.5, 7, 7));}) : "triangle" == i && e.forEach(function (e) {null !== e && (a.moveTo(e.x, e.y - 4.5), a.lineTo(e.x - 4.5, e.y + 4.5), a.lineTo(e.x + 4.5, e.y + 4.5), a.lineTo(e.x, e.y - 4.5));}), a.closePath(), a.fill(), a.stroke();}function drawRingTitle(e, t, i, a) {var o = e.title.fontSize || t.titleFontSize,n = e.subtitle.fontSize || t.subtitleFontSize,l = e.title.name || "",r = e.subtitle.name || "",s = e.title.color || t.titleColor,d = e.subtitle.color || t.subtitleColor,h = l ? o : 0,x = r ? n : 0,c = 5;if (r) {var p = measureText(r, n),g = a.x - p / 2 + (e.subtitle.offsetX || 0),y = a.y + n / 2 + (e.subtitle.offsetY || 0);l && (y += (h + c) / 2), i.beginPath(), i.setFontSize(n), i.setFillStyle(d), i.fillText(r, g, y), i.closePath(), i.stroke();}if (l) {var f = measureText(l, o),u = a.x - f / 2 + (e.title.offsetX || 0),m = a.y + o / 2 + (e.title.offsetY || 0);r && (m -= (x + c) / 2), i.beginPath(), i.setFontSize(o), i.setFillStyle(s), i.fillText(l, u, m), i.closePath(), i.stroke();}}function drawPointText(e, t, i, a) {var o = t.data;e.forEach(function (e, n) {if (null !== e) {a.beginPath(), a.setFontSize(t.textSize || i.fontSize), a.setFillStyle(t.textColor || "#666666");var l = o[n];"object" == typeof o[n] && null !== o[n] && (o[n].constructor == Array ? l = o[n][1] : l = o[n].value);var r = t.format ? t.format(l) : l;a.fillText(r + "", e.x - measureText(r, t.textSize || i.fontSize) / 2, e.y - 4), a.closePath(), a.stroke();}});}function drawGaugeLabel(e, t, i, a, o, n) {var l = Math.PI;t -= e.width / 2 + o.gaugeLabelTextMargin;var r = e.startAngle - e.endAngle + 1,s = r / e.splitLine.splitNumber,d = e.endNumber - e.startNumber,h = d / e.splitLine.splitNumber,x = e.startAngle,c = e.startNumber;for (var _r4 = 0; _r4 < e.splitLine.splitNumber + 1; _r4++) {var p = { x: t * Math.cos(x * l), y: t * Math.sin(x * l) },g = e.labelFormat ? e.labelFormat(c) : c;p.x += i.x - measureText(g) / 2, p.y += i.y;var y = p.x,f = p.y;n.beginPath(), n.setFontSize(o.fontSize), n.setFillStyle(e.labelColor || "#666666"), n.fillText(g, y, f + o.fontSize / 2), n.closePath(), n.stroke(), x += s, 2 <= x && (x %= 2), c += h;}}function drawRadarLabel(e, t, i, a, o, n) {var l = a.extra.radar || {};t += o.radarLabelTextMargin, e.forEach(function (e, r) {var s = { x: t * Math.cos(e), y: t * Math.sin(e) },d = convertCoordinateOrigin(s.x, s.y, i),h = d.x,x = d.y;util.approximatelyEqual(s.x, 0) ? h -= measureText(a.categories[r] || "") / 2 : 0 > s.x && (h -= measureText(a.categories[r] || "")), n.beginPath(), n.setFontSize(o.fontSize), n.setFillStyle(l.labelColor || "#666666"), n.fillText(a.categories[r] || "", h, x + o.fontSize / 2), n.closePath(), n.stroke();});}function drawPieText(e, t, a, o, i, n) {var l = Math.cos,r = Math.sin,s = Math.min,d = Math.max,h = Math.PI,x = a.pieChartLinePadding,c = [],p = null,g = e.map(function (e) {var t = e.format ? e.format(+e._proportion_.toFixed(2)) : util.toFixed(100 * e._proportion_.toFixed(4)) + "%";e._rose_proportion_ && (e._proportion_ = e._rose_proportion_);var i = 2 * h - (e._start_ + 2 * h * e._proportion_ / 2),a = e.color,o = e._radius_;return { arc: i, text: t, color: a, radius: o, textColor: e.textColor, textSize: e.textSize };});for (var _h = 0; _h < g.length; _h++) {var _e10 = g[_h],_t9 = l(_e10.arc) * (_e10.radius + x),_i8 = r(_e10.arc) * (_e10.radius + x),_o11 = l(_e10.arc) * _e10.radius,_n12 = r(_e10.arc) * _e10.radius,y = 0 <= _t9 ? _t9 + a.pieChartTextPadding : _t9 - a.pieChartTextPadding,f = _i8,u = measureText(_e10.text, _e10.textSize || a.fontSize),m = f;p && util.isSameXCoordinateArea(p.start, { x: y }) && (0 < y ? m = s(f, p.start.y) : 0 > _t9 ? m = d(f, p.start.y) : 0 < f ? m = d(f, p.start.y) : m = s(f, p.start.y)), 0 > y && (y -= u);var S = { lineStart: { x: _o11, y: _n12 }, lineEnd: { x: _t9, y: _i8 }, start: { x: y, y: m }, width: u, height: a.fontSize, text: _e10.text, color: _e10.color, textColor: _e10.textColor, textSize: _e10.textSize };p = avoidCollision(S, p), c.push(p);}for (var _l4 = 0; _l4 < c.length; _l4++) {var _e11 = c[_l4],_i9 = convertCoordinateOrigin(_e11.lineStart.x, _e11.lineStart.y, n),_r5 = convertCoordinateOrigin(_e11.lineEnd.x, _e11.lineEnd.y, n),_s2 = convertCoordinateOrigin(_e11.start.x, _e11.start.y, n);o.setLineWidth(1 * t.pixelRatio), o.setFontSize(a.fontSize), o.beginPath(), o.setStrokeStyle(_e11.color), o.setFillStyle(_e11.color), o.moveTo(_i9.x, _i9.y);var _d = 0 > _e11.start.x ? _s2.x + _e11.width : _s2.x,_x = 0 > _e11.start.x ? _s2.x - 5 : _s2.x + 5;o.quadraticCurveTo(_r5.x, _r5.y, _d, _s2.y), o.moveTo(_i9.x, _i9.y), o.stroke(), o.closePath(), o.beginPath(), o.moveTo(_s2.x + _e11.width, _s2.y), o.arc(_d, _s2.y, 2, 0, 2 * h), o.closePath(), o.fill(), o.beginPath(), o.setFontSize(_e11.textSize || a.fontSize), o.setFillStyle(_e11.textColor || "#666666"), o.fillText(_e11.text, _x, _s2.y + 3), o.closePath(), o.stroke(), o.closePath();}}function drawToolTipSplitLine(e, t, i, a) {var o = t.extra.tooltip || {};o.gridType = null == o.gridType ? "solid" : o.gridType, o.dashLength = null == o.dashLength ? 4 : o.dashLength;var n = t.area[0],l = t.height - t.area[2];if ("dash" == o.gridType && a.setLineDash([o.dashLength, o.dashLength]), a.setStrokeStyle(o.gridColor || "#cccccc"), a.setLineWidth(1 * t.pixelRatio), a.beginPath(), a.moveTo(e, n), a.lineTo(e, l), a.stroke(), a.setLineDash([]), o.xAxisLabel) {var _n13 = t.categories[t.tooltip.index];a.setFontSize(i.fontSize);var r = measureText(_n13, i.fontSize),s = e - .5 * r,d = l;a.beginPath(), a.setFillStyle(hexToRgb(o.labelBgColor || i.toolTipBackground, o.labelBgOpacity || i.toolTipOpacity)), a.setStrokeStyle(o.labelBgColor || i.toolTipBackground), a.setLineWidth(1 * t.pixelRatio), a.rect(s - i.toolTipPadding, d, r + 2 * i.toolTipPadding, i.fontSize + 2 * i.toolTipPadding), a.closePath(), a.stroke(), a.fill(), a.beginPath(), a.setFontSize(i.fontSize), a.setFillStyle(o.labelFontColor || i.fontColor), a.fillText(_n13 + "", s, d + i.toolTipPadding + i.fontSize), a.closePath(), a.stroke();}}function drawMarkLine(e, t, a) {var o = assign({}, { type: "solid", dashLength: 4, data: [] }, e.extra.markLine),n = e.area[3],l = e.width - e.area[1],r = calMarkLineData(o.data, e);for (var s, d = 0; d < r.length; d++) {if (s = assign({}, { lineColor: "#DE4A42", showLabel: !1, labelFontColor: "#666666", labelBgColor: "#DFE8FF", labelBgOpacity: .8, yAxisIndex: 0 }, r[d]), "dash" == o.type && a.setLineDash([o.dashLength, o.dashLength]), a.setStrokeStyle(s.lineColor), a.setLineWidth(1 * e.pixelRatio), a.beginPath(), a.moveTo(n, s.y), a.lineTo(l, s.y), a.stroke(), a.setLineDash([]), s.showLabel) {var i = e.yAxis.format ? e.yAxis.format(+s.value) : s.value;a.setFontSize(t.fontSize);var _o12 = measureText(i, t.fontSize),_n14 = e.padding[3] + t.yAxisTitleWidth - t.toolTipPadding,_l5 = Math.max(e.area[3], _o12 + 2 * t.toolTipPadding),_r6 = _l5 - _n14,_d2 = s.y;a.setFillStyle(hexToRgb(s.labelBgColor, s.labelBgOpacity)), a.setStrokeStyle(s.labelBgColor), a.setLineWidth(1 * e.pixelRatio), a.beginPath(), a.rect(_n14, _d2 - .5 * t.fontSize - t.toolTipPadding, _r6, t.fontSize + 2 * t.toolTipPadding), a.closePath(), a.stroke(), a.fill(), a.beginPath(), a.setFontSize(t.fontSize), a.setFillStyle(s.labelFontColor), a.fillText(i + "", _n14 + (_r6 - _o12) / 2, _d2 + .5 * t.fontSize), a.stroke();}}}function drawToolTipHorizentalLine(e, t, a, i) {var o = Math.max,n = assign({}, { gridType: "solid", dashLength: 4 }, e.extra.tooltip),l = e.area[3],r = e.width - e.area[1];if ("dash" == n.gridType && a.setLineDash([n.dashLength, n.dashLength]), a.setStrokeStyle(n.gridColor || "#cccccc"), a.setLineWidth(1 * e.pixelRatio), a.beginPath(), a.moveTo(l, e.tooltip.offset.y), a.lineTo(r, e.tooltip.offset.y), a.stroke(), a.setLineDash([]), n.yAxisLabel) {var _l6 = calTooltipYAxisData(e.tooltip.offset.y, e.series, e, t, i),_r7 = e.chartData.yAxisData.yAxisWidth,s = e.area[3],d = e.width - e.area[1];for (var h = 0; h < _l6.length; h++) {a.setFontSize(t.fontSize);var _i10 = void 0,x = void 0,c = void 0,p = measureText(_l6[h], t.fontSize);"left" == _r7[h].position ? (_i10 = s - _r7[h].width, x = o(_i10, _i10 + p + 2 * t.toolTipPadding)) : (_i10 = d, x = o(_i10 + _r7[h].width, _i10 + p + 2 * t.toolTipPadding)), c = x - _i10;var g = _i10 + (c - p) / 2,y = e.tooltip.offset.y;a.beginPath(), a.setFillStyle(hexToRgb(n.labelBgColor || t.toolTipBackground, n.labelBgOpacity || t.toolTipOpacity)), a.setStrokeStyle(n.labelBgColor || t.toolTipBackground), a.setLineWidth(1 * e.pixelRatio), a.rect(_i10, y - .5 * t.fontSize - t.toolTipPadding, c, t.fontSize + 2 * t.toolTipPadding), a.closePath(), a.stroke(), a.fill(), a.beginPath(), a.setFontSize(t.fontSize), a.setFillStyle(n.labelFontColor || t.fontColor), a.fillText(_l6[h], g, y + .5 * t.fontSize), a.closePath(), a.stroke(), "left" == _r7[h].position ? s -= _r7[h].width + e.yAxis.padding : d += _r7[h].width + e.yAxis.padding;}}}function drawToolTipSplitArea(e, t, i, a, o) {var n = assign({}, { activeBgColor: "#000000", activeBgOpacity: .08 }, t.extra.tooltip),l = t.area[0],r = t.height - t.area[2];a.beginPath(), a.setFillStyle(hexToRgb(n.activeBgColor, n.activeBgOpacity)), a.rect(e - o / 2, l, o, r - l), a.closePath(), a.fill();}function drawToolTip(e, t, i, a, o) {var n = Math.round,l = assign({}, { showBox: !0, bgColor: "#000000", bgOpacity: .7, fontColor: "#FFFFFF" }, i.extra.tooltip),r = 4 * i.pixelRatio,s = 5 * i.pixelRatio,d = 8 * i.pixelRatio,h = !1;("line" == i.type || "area" == i.type || "candle" == i.type || "mix" == i.type) && drawToolTipSplitLine(i.tooltip.offset.x, i, a, o), t = assign({ x: 0, y: 0 }, t), t.y -= 8 * i.pixelRatio;var x = e.map(function (e) {return measureText(e.text, a.fontSize);}),c = r + s + 4 * a.toolTipPadding + Math.max.apply(null, x),p = 2 * a.toolTipPadding + e.length * a.toolTipLineHeight;!1 == l.showBox || (t.x - Math.abs(i._scrollDistance_) + d + c > i.width && (h = !0), p + t.y > i.height && (t.y = i.height - p), o.beginPath(), o.setFillStyle(hexToRgb(l.bgColor || a.toolTipBackground, l.bgOpacity || a.toolTipOpacity)), h ? (o.moveTo(t.x, t.y + 10 * i.pixelRatio), o.lineTo(t.x - d, t.y + 10 * i.pixelRatio - 5 * i.pixelRatio), o.lineTo(t.x - d, t.y), o.lineTo(t.x - d - n(c), t.y), o.lineTo(t.x - d - n(c), t.y + p), o.lineTo(t.x - d, t.y + p), o.lineTo(t.x - d, t.y + 10 * i.pixelRatio + 5 * i.pixelRatio), o.lineTo(t.x, t.y + 10 * i.pixelRatio)) : (o.moveTo(t.x, t.y + 10 * i.pixelRatio), o.lineTo(t.x + d, t.y + 10 * i.pixelRatio - 5 * i.pixelRatio), o.lineTo(t.x + d, t.y), o.lineTo(t.x + d + n(c), t.y), o.lineTo(t.x + d + n(c), t.y + p), o.lineTo(t.x + d, t.y + p), o.lineTo(t.x + d, t.y + 10 * i.pixelRatio + 5 * i.pixelRatio), o.lineTo(t.x, t.y + 10 * i.pixelRatio)), o.closePath(), o.fill(), e.forEach(function (e, i) {if (null !== e.color) {o.beginPath(), o.setFillStyle(e.color);var n = t.x + d + 2 * a.toolTipPadding,l = t.y + (a.toolTipLineHeight - a.fontSize) / 2 + a.toolTipLineHeight * i + a.toolTipPadding + 1;h && (n = t.x - c - d + 2 * a.toolTipPadding), o.fillRect(n, l, r, a.fontSize), o.closePath();}}), e.forEach(function (e, i) {var n = t.x + d + 2 * a.toolTipPadding + r + s;h && (n = t.x - c - d + 2 * a.toolTipPadding + +r + s);var x = t.y + (a.toolTipLineHeight - a.fontSize) / 2 + a.toolTipLineHeight * i + a.toolTipPadding;o.beginPath(), o.setFontSize(a.fontSize), o.setFillStyle(l.fontColor), o.fillText(e.text, n, x + a.fontSize), o.closePath(), o.stroke();}));}function drawYAxisTitle(e, t, i, a) {var o = i.xAxisHeight + (t.height - i.xAxisHeight - measureText(e)) / 2;a.save(), a.beginPath(), a.setFontSize(i.fontSize), a.setFillStyle(t.yAxis.titleFontColor || "#333333"), a.translate(0, t.height), a.rotate(-90 * Math.PI / 180), a.fillText(e, o, t.padding[3] + .5 * i.fontSize), a.closePath(), a.stroke(), a.restore();}function drawColumnDataPoints(e, t, i, a) {var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,n = t.chartData.xAxisData,l = n.xAxisPoints,r = n.eachSpacing,s = assign({}, { type: "group", width: r / 2, meter: { border: 4, fillColor: "#FFFFFF" } }, t.extra.column),d = [];a.save();var h = -2,x = l.length + 2;return t._scrollDistance_ && 0 !== t._scrollDistance_ && !0 === t.enableScroll && (a.translate(t._scrollDistance_, 0), h = Math.floor(-t._scrollDistance_ / r) - 2, x = h + t.xAxis.itemCount + 4), t.tooltip && t.tooltip.textList && t.tooltip.textList.length && 1 === o && drawToolTipSplitArea(t.tooltip.offset.x, t, i, a, r), e.forEach(function (n, c) {var p, g, y;p = [].concat(t.chartData.yAxisData.ranges[n.index]), g = p.pop(), y = p.shift();var f = n.data;switch (s.type) {case "group":var u = getDataPoints(f, g, y, l, r, t, i, o),m = getStackDataPoints(f, g, y, l, r, t, i, c, e, o);d.push(m), u = fixColumeData(u, r, e.length, c, i, t);for (var _e12, _o13 = 0; _o13 < u.length; _o13++) {if (_e12 = u[_o13], null !== _e12 && _o13 > h && _o13 < x) {a.beginPath(), a.setStrokeStyle(_e12.color || n.color), a.setLineWidth(1), a.setFillStyle(_e12.color || n.color);var S = _e12.x - _e12.width / 2,T = t.height - _e12.y - t.area[2];a.moveTo(S - 1, _e12.y), a.lineTo(S + _e12.width - 2, _e12.y), a.lineTo(S + _e12.width - 2, t.height - t.area[2]), a.lineTo(S, t.height - t.area[2]), a.lineTo(S, _e12.y), a.closePath(), a.stroke(), a.fill();}};break;case "stack":var u = getStackDataPoints(f, g, y, l, r, t, i, c, e, o);d.push(u), u = fixColumeStackData(u, r, e.length, c, i, t, e);for (var _e13, _o14 = 0; _o14 < u.length; _o14++) {if (_e13 = u[_o14], null !== _e13 && _o14 > h && _o14 < x) {a.beginPath(), a.setFillStyle(_e13.color || n.color);var S = _e13.x - _e13.width / 2 + 1,T = t.height - _e13.y - t.area[2],A = t.height - _e13.y0 - t.area[2];0 < c && (T -= A), a.moveTo(S, _e13.y), a.fillRect(S, _e13.y, _e13.width - 2, T), a.closePath(), a.fill();}};break;case "meter":var u = getDataPoints(f, g, y, l, r, t, i, o);if (d.push(u), u = fixColumeMeterData(u, r, e.length, c, i, t, s.meter.border), 0 == c) {for (var _e14, _o15 = 0; _o15 < u.length; _o15++) {if (_e14 = u[_o15], null !== _e14 && _o15 > h && _o15 < x) {a.beginPath(), a.setFillStyle(s.meter.fillColor);var S = _e14.x - _e14.width / 2,T = t.height - _e14.y - t.area[2];a.moveTo(S, _e14.y), a.fillRect(S, _e14.y, _e14.width, T), a.closePath(), a.fill(), 0 < s.meter.border && (a.beginPath(), a.setStrokeStyle(n.color), a.setLineWidth(s.meter.border * t.pixelRatio), a.moveTo(S + .5 * s.meter.border, _e14.y + T), a.lineTo(S + .5 * s.meter.border, _e14.y + .5 * s.meter.border), a.lineTo(S + _e14.width - .5 * s.meter.border, _e14.y + .5 * s.meter.border), a.lineTo(S + _e14.width - .5 * s.meter.border, _e14.y + T), a.stroke());}}} else for (var _e15, _o16 = 0; _o16 < u.length; _o16++) {if (_e15 = u[_o16], null !== _e15 && _o16 > h && _o16 < x) {a.beginPath(), a.setFillStyle(_e15.color || n.color);var S = _e15.x - _e15.width / 2,T = t.height - _e15.y - t.area[2];a.moveTo(S, _e15.y), a.fillRect(S, _e15.y, _e15.width, T), a.closePath(), a.fill();}}}}), !1 !== t.dataLabel && 1 === o && e.forEach(function (n, d) {var h, x, c;h = [].concat(t.chartData.yAxisData.ranges[n.index]), x = h.pop(), c = h.shift();var p = n.data;switch (s.type) {case "group":var g = getDataPoints(p, x, c, l, r, t, i, o);g = fixColumeData(g, r, e.length, d, i, t), drawPointText(g, n, i, a);break;case "stack":var g = getStackDataPoints(p, x, c, l, r, t, i, d, e, o);drawPointText(g, n, i, a);break;case "meter":var g = getDataPoints(p, x, c, l, r, t, i, o);drawPointText(g, n, i, a);}}), a.restore(), { xAxisPoints: l, calPoints: d, eachSpacing: r };}function drawCandleDataPoints(e, t, a, i, o) {var n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1,l = assign({}, { color: {}, average: {} }, a.extra.candle);l.color = assign({}, { upLine: "#f04864", upFill: "#f04864", downLine: "#2fc25b", downFill: "#2fc25b" }, l.color), l.average = assign({}, { show: !1, name: [], day: [], color: i.colors }, l.average), a.extra.candle = l;var r = a.chartData.xAxisData,s = r.xAxisPoints,d = r.eachSpacing,h = [];o.save();var x = -2,c = s.length + 2,p = 0,g = a.width + d;return a._scrollDistance_ && 0 !== a._scrollDistance_ && !0 === a.enableScroll && (o.translate(a._scrollDistance_, 0), x = Math.floor(-a._scrollDistance_ / d) - 2, c = x + a.xAxis.itemCount + 4, p = -a._scrollDistance_ - d + a.area[3], g = p + (a.xAxis.itemCount + 4) * d), l.average.show && t.forEach(function (e) {var t, l, r;t = [].concat(a.chartData.yAxisData.ranges[e.index]), l = t.pop(), r = t.shift();var h = e.data,x = getDataPoints(h, l, r, s, d, a, i, n),c = splitPoints(x);for (var _t10, _a9 = 0; _a9 < c.length; _a9++) {if (_t10 = c[_a9], o.beginPath(), o.setStrokeStyle(e.color), o.setLineWidth(1), 1 === _t10.length) o.moveTo(_t10[0].x, _t10[0].y), o.arc(_t10[0].x, _t10[0].y, 1, 0, 2 * Math.PI);else {o.moveTo(_t10[0].x, _t10[0].y);var _e16 = 0;for (var _i11, _a10 = 0; _a10 < _t10.length; _a10++) {if (_i11 = _t10[_a10], 0 == _e16 && _i11.x > p && (o.moveTo(_i11.x, _i11.y), _e16 = 1), 0 < _a10 && _i11.x > p && _i11.x < g) {var y = createCurveControlPoints(_t10, _a10 - 1);o.bezierCurveTo(y.ctrA.x, y.ctrA.y, y.ctrB.x, y.ctrB.y, _i11.x, _i11.y);}}o.moveTo(_t10[0].x, _t10[0].y);}o.closePath(), o.stroke();}}), e.forEach(function (e) {var t, r, p;t = [].concat(a.chartData.yAxisData.ranges[e.index]), r = t.pop(), p = t.shift();var g = e.data,y = getCandleDataPoints(g, r, p, s, d, a, i, n);h.push(y);var f = splitPoints(y);for (var _t11 = 0; _t11 < f[0].length; _t11++) {if (_t11 > x && _t11 < c) {var _e17 = f[0][_t11];o.beginPath(), 0 < g[_t11][1] - g[_t11][0] ? (o.setStrokeStyle(l.color.upLine), o.setFillStyle(l.color.upFill), o.setLineWidth(1 * a.pixelRatio), o.moveTo(_e17[3].x, _e17[3].y), o.lineTo(_e17[1].x, _e17[1].y), o.lineTo(_e17[1].x - d / 4, _e17[1].y), o.lineTo(_e17[0].x - d / 4, _e17[0].y), o.lineTo(_e17[0].x, _e17[0].y), o.lineTo(_e17[2].x, _e17[2].y), o.lineTo(_e17[0].x, _e17[0].y), o.lineTo(_e17[0].x + d / 4, _e17[0].y), o.lineTo(_e17[1].x + d / 4, _e17[1].y), o.lineTo(_e17[1].x, _e17[1].y), o.moveTo(_e17[3].x, _e17[3].y)) : (o.setStrokeStyle(l.color.downLine), o.setFillStyle(l.color.downFill), o.setLineWidth(1 * a.pixelRatio), o.moveTo(_e17[3].x, _e17[3].y), o.lineTo(_e17[0].x, _e17[0].y), o.lineTo(_e17[0].x - d / 4, _e17[0].y), o.lineTo(_e17[1].x - d / 4, _e17[1].y), o.lineTo(_e17[1].x, _e17[1].y), o.lineTo(_e17[2].x, _e17[2].y), o.lineTo(_e17[1].x, _e17[1].y), o.lineTo(_e17[1].x + d / 4, _e17[1].y), o.lineTo(_e17[0].x + d / 4, _e17[0].y), o.lineTo(_e17[0].x, _e17[0].y), o.moveTo(_e17[3].x, _e17[3].y)), o.closePath(), o.fill(), o.stroke();}}}), o.restore(), { xAxisPoints: s, calPoints: h, eachSpacing: d };}function drawAreaDataPoints(e, t, i, a) {var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,n = assign({}, { type: "straight", opacity: .2, addLine: !1, width: 2, gradient: !1 }, t.extra.area);var l = t.chartData.xAxisData,r = l.xAxisPoints,s = l.eachSpacing,d = t.height - t.area[2],h = [];a.save();var x = 0,c = t.width + s;return t._scrollDistance_ && 0 !== t._scrollDistance_ && !0 === t.enableScroll && (a.translate(t._scrollDistance_, 0), x = -t._scrollDistance_ - s + t.area[3], c = x + (t.xAxis.itemCount + 4) * s), e.forEach(function (e) {var l, p, g;l = [].concat(t.chartData.yAxisData.ranges[e.index]), p = l.pop(), g = l.shift();var y = e.data,f = getDataPoints(y, p, g, r, s, t, i, o);h.push(f);var u = splitPoints(f);for (var _o17, _l7 = 0; _l7 < u.length; _l7++) {if (_o17 = u[_l7], a.beginPath(), a.setStrokeStyle(hexToRgb(e.color, n.opacity)), n.gradient) {var _i12 = a.createLinearGradient(0, t.area[0], 0, t.height - t.area[2]);_i12.addColorStop("0", hexToRgb(e.color, n.opacity)), _i12.addColorStop("1.0", hexToRgb("#FFFFFF", .1)), a.setFillStyle(_i12);} else a.setFillStyle(hexToRgb(e.color, n.opacity));if (a.setLineWidth(n.width * t.pixelRatio), 1 < _o17.length) {var _e18 = _o17[0],_t12 = _o17[_o17.length - 1];a.moveTo(_e18.x, _e18.y);var _i13 = 0;if ("curve" === n.type) {for (var _e19, _t13 = 0; _t13 < _o17.length; _t13++) {if (_e19 = _o17[_t13], 0 == _i13 && _e19.x > x && (a.moveTo(_e19.x, _e19.y), _i13 = 1), 0 < _t13 && _e19.x > x && _e19.x < c) {var _i14 = createCurveControlPoints(_o17, _t13 - 1);a.bezierCurveTo(_i14.ctrA.x, _i14.ctrA.y, _i14.ctrB.x, _i14.ctrB.y, _e19.x, _e19.y);}}} else for (var _e20, _t14 = 0; _t14 < _o17.length; _t14++) {_e20 = _o17[_t14], 0 == _i13 && _e20.x > x && (a.moveTo(_e20.x, _e20.y), _i13 = 1), 0 < _t14 && _e20.x > x && _e20.x < c && a.lineTo(_e20.x, _e20.y);}a.lineTo(_t12.x, d), a.lineTo(_e18.x, d), a.lineTo(_e18.x, _e18.y);} else {var _e21 = _o17[0];a.moveTo(_e21.x - s / 2, _e21.y), a.lineTo(_e21.x + s / 2, _e21.y), a.lineTo(_e21.x + s / 2, d), a.lineTo(_e21.x - s / 2, d), a.moveTo(_e21.x - s / 2, _e21.y);}if (a.closePath(), a.fill(), n.addLine) {if ("dash" == e.lineType) {var _i15 = e.dashLength ? e.dashLength : 8;_i15 *= t.pixelRatio, a.setLineDash([_i15, _i15]);}if (a.beginPath(), a.setStrokeStyle(e.color), a.setLineWidth(n.width * t.pixelRatio), 1 === _o17.length) a.moveTo(_o17[0].x, _o17[0].y), a.arc(_o17[0].x, _o17[0].y, 1, 0, 2 * Math.PI);else {a.moveTo(_o17[0].x, _o17[0].y);var _e22 = 0;if ("curve" === n.type) {for (var _t15, _i16 = 0; _i16 < _o17.length; _i16++) {if (_t15 = _o17[_i16], 0 == _e22 && _t15.x > x && (a.moveTo(_t15.x, _t15.y), _e22 = 1), 0 < _i16 && _t15.x > x && _t15.x < c) {var _e23 = createCurveControlPoints(_o17, _i16 - 1);a.bezierCurveTo(_e23.ctrA.x, _e23.ctrA.y, _e23.ctrB.x, _e23.ctrB.y, _t15.x, _t15.y);}}} else for (var _t16, _i17 = 0; _i17 < _o17.length; _i17++) {_t16 = _o17[_i17], 0 == _e22 && _t16.x > x && (a.moveTo(_t16.x, _t16.y), _e22 = 1), 0 < _i17 && _t16.x > x && _t16.x < c && a.lineTo(_t16.x, _t16.y);}a.moveTo(_o17[0].x, _o17[0].y);}a.stroke(), a.setLineDash([]);}}!1 !== t.dataPointShape && drawPointShape(f, e.color, e.pointShape, a, t);}), !1 !== t.dataLabel && 1 === o && e.forEach(function (e) {var n, l, d;n = [].concat(t.chartData.yAxisData.ranges[e.index]), l = n.pop(), d = n.shift();var h = e.data,x = getDataPoints(h, l, d, r, s, t, i, o);drawPointText(x, e, i, a);}), a.restore(), { xAxisPoints: r, calPoints: h, eachSpacing: s };}function drawLineDataPoints(e, t, i, a) {var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,n = assign({}, { type: "straight", width: 2 }, t.extra.line);n.width *= t.pixelRatio;var l = t.chartData.xAxisData,r = l.xAxisPoints,s = l.eachSpacing;var d = [];a.save();var h = 0,x = t.width + s;return t._scrollDistance_ && 0 !== t._scrollDistance_ && !0 === t.enableScroll && (a.translate(t._scrollDistance_, 0), h = -t._scrollDistance_ - s + t.area[3], x = h + (t.xAxis.itemCount + 4) * s), e.forEach(function (e) {var l, c, p;l = [].concat(t.chartData.yAxisData.ranges[e.index]), c = l.pop(), p = l.shift();var g = e.data,y = getDataPoints(g, c, p, r, s, t, i, o);d.push(y);var f = splitPoints(y);if ("dash" == e.lineType) {var _i18 = e.dashLength ? e.dashLength : 8;_i18 *= t.pixelRatio, a.setLineDash([_i18, _i18]);}a.beginPath(), a.setStrokeStyle(e.color), a.setLineWidth(n.width), f.forEach(function (e) {if (1 === e.length) a.moveTo(e[0].x, e[0].y), a.arc(e[0].x, e[0].y, 1, 0, 2 * Math.PI);else {a.moveTo(e[0].x, e[0].y);var _i19 = 0;if ("curve" === n.type) {for (var _o18, _n15 = 0; _n15 < e.length; _n15++) {if (_o18 = e[_n15], 0 == _i19 && _o18.x > h && (a.moveTo(_o18.x, _o18.y), _i19 = 1), 0 < _n15 && _o18.x > h && _o18.x < x) {var t = createCurveControlPoints(e, _n15 - 1);a.bezierCurveTo(t.ctrA.x, t.ctrA.y, t.ctrB.x, t.ctrB.y, _o18.x, _o18.y);}}} else for (var _t17, _o19 = 0; _o19 < e.length; _o19++) {_t17 = e[_o19], 0 == _i19 && _t17.x > h && (a.moveTo(_t17.x, _t17.y), _i19 = 1), 0 < _o19 && _t17.x > h && _t17.x < x && a.lineTo(_t17.x, _t17.y);}a.moveTo(e[0].x, e[0].y);}}), a.stroke(), a.setLineDash([]), !1 !== t.dataPointShape && drawPointShape(y, e.color, e.pointShape, a, t);}), !1 !== t.dataLabel && 1 === o && e.forEach(function (e) {var n, l, d;n = [].concat(t.chartData.yAxisData.ranges[e.index]), l = n.pop(), d = n.shift();var h = e.data,x = getDataPoints(h, l, d, r, s, t, i, o);drawPointText(x, e, i, a);}), a.restore(), { xAxisPoints: r, calPoints: d, eachSpacing: s };}function drawMixDataPoints(e, t, i, a) {var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,n = t.chartData.xAxisData,l = n.xAxisPoints,r = n.eachSpacing,s = t.height - t.area[2],d = [];var h = 0,x = 0;e.forEach(function (e) {"column" == e.type && (x += 1);}), a.save();var c = -2,p = l.length + 2,g = 0,y = t.width + r;if (t._scrollDistance_ && 0 !== t._scrollDistance_ && !0 === t.enableScroll && (a.translate(t._scrollDistance_, 0), c = Math.floor(-t._scrollDistance_ / r) - 2, p = c + t.xAxis.itemCount + 4, g = -t._scrollDistance_ - r + t.area[3], y = g + (t.xAxis.itemCount + 4) * r), e.forEach(function (e) {var n, f, u;n = [].concat(t.chartData.yAxisData.ranges[e.index]), f = n.pop(), u = n.shift();var m = e.data,S = getDataPoints(m, f, u, l, r, t, i, o);if (d.push(S), "column" == e.type) {S = fixColumeData(S, r, x, h, i, t);for (var _o20, _n16 = 0; _n16 < S.length; _n16++) {if (_o20 = S[_n16], null !== _o20 && _n16 > c && _n16 < p) {a.beginPath(), a.setStrokeStyle(_o20.color || e.color), a.setLineWidth(1), a.setFillStyle(_o20.color || e.color);var T = _o20.x - _o20.width / 2,A = t.height - _o20.y - t.area[2];a.moveTo(T, _o20.y), a.moveTo(T - 1, _o20.y), a.lineTo(T + _o20.width - 2, _o20.y), a.lineTo(T + _o20.width - 2, t.height - t.area[2]), a.lineTo(T, t.height - t.area[2]), a.lineTo(T, _o20.y), a.closePath(), a.stroke(), a.fill(), a.closePath(), a.fill();}}h += 1;}if ("area" == e.type) {var _o21 = splitPoints(S);for (var _n17, _l8 = 0; _l8 < _o21.length; _l8++) {if (_n17 = _o21[_l8], a.beginPath(), a.setStrokeStyle(e.color), a.setFillStyle(hexToRgb(e.color, .2)), a.setLineWidth(2 * t.pixelRatio), 1 < _n17.length) {var b = _n17[0];var _t18 = _n17[_n17.length - 1];a.moveTo(b.x, b.y);var _i20 = 0;if ("curve" === e.style) {for (var _e24, _t19 = 0; _t19 < _n17.length; _t19++) {if (_e24 = _n17[_t19], 0 == _i20 && _e24.x > g && (a.moveTo(_e24.x, _e24.y), _i20 = 1), 0 < _t19 && _e24.x > g && _e24.x < y) {var P = createCurveControlPoints(_n17, _t19 - 1);a.bezierCurveTo(P.ctrA.x, P.ctrA.y, P.ctrB.x, P.ctrB.y, _e24.x, _e24.y);}}} else for (var _e25, _t20 = 0; _t20 < _n17.length; _t20++) {_e25 = _n17[_t20], 0 == _i20 && _e25.x > g && (a.moveTo(_e25.x, _e25.y), _i20 = 1), 0 < _t20 && _e25.x > g && _e25.x < y && a.lineTo(_e25.x, _e25.y);}a.lineTo(_t18.x, s), a.lineTo(b.x, s), a.lineTo(b.x, b.y);} else {var _e26 = _n17[0];a.moveTo(_e26.x - r / 2, _e26.y), a.lineTo(_e26.x + r / 2, _e26.y), a.lineTo(_e26.x + r / 2, s), a.lineTo(_e26.x - r / 2, s), a.moveTo(_e26.x - r / 2, _e26.y);}a.closePath(), a.fill();}}if ("line" == e.type) {var _ = splitPoints(S);_.forEach(function (i) {if ("dash" == e.lineType) {var _i21 = e.dashLength ? e.dashLength : 8;_i21 *= t.pixelRatio, a.setLineDash([_i21, _i21]);}if (a.beginPath(), a.setStrokeStyle(e.color), a.setLineWidth(2 * t.pixelRatio), 1 === i.length) a.moveTo(i[0].x, i[0].y), a.arc(i[0].x, i[0].y, 1, 0, 2 * Math.PI);else {a.moveTo(i[0].x, i[0].y);var _t21 = 0;if ("curve" == e.style) {for (var _e27, _n18 = 0; _n18 < i.length; _n18++) {if (_e27 = i[_n18], 0 == _t21 && _e27.x > g && (a.moveTo(_e27.x, _e27.y), _t21 = 1), 0 < _n18 && _e27.x > g && _e27.x < y) {var o = createCurveControlPoints(i, _n18 - 1);a.bezierCurveTo(o.ctrA.x, o.ctrA.y, o.ctrB.x, o.ctrB.y, _e27.x, _e27.y);}}} else for (var _e28, _o22 = 0; _o22 < i.length; _o22++) {_e28 = i[_o22], 0 == _t21 && _e28.x > g && (a.moveTo(_e28.x, _e28.y), _t21 = 1), 0 < _o22 && _e28.x > g && _e28.x < y && a.lineTo(_e28.x, _e28.y);}a.moveTo(i[0].x, i[0].y);}a.stroke(), a.setLineDash([]);});}"point" == e.type && (e.addPoint = !0), !0 == e.addPoint && "column" !== e.type && drawPointShape(S, e.color, e.pointShape, a, t);}), !1 !== t.dataLabel && 1 === o) {var h = 0;e.forEach(function (e) {var n, s, d;n = [].concat(t.chartData.yAxisData.ranges[e.index]), s = n.pop(), d = n.shift();var c = e.data,p = getDataPoints(c, s, d, l, r, t, i, o);"column" === e.type ? (p = fixColumeData(p, r, x, h, i, t), drawPointText(p, e, i, a), h += 1) : drawPointText(p, e, i, a);});}return a.restore(), { xAxisPoints: l, calPoints: d, eachSpacing: r };}function drawToolTipBridge(e, t, i, a, o, n) {var l = e.extra.tooltip || {};l.horizentalLine && e.tooltip && 1 === a && ("line" == e.type || "area" == e.type || "column" == e.type || "candle" == e.type || "mix" == e.type) && drawToolTipHorizentalLine(e, t, i, o, n), i.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && i.translate(e._scrollDistance_, 0), e.tooltip && e.tooltip.textList && e.tooltip.textList.length && 1 === a && drawToolTip(e.tooltip.textList, e.tooltip.offset, e, t, i, o, n), i.restore();}function drawXAxis(e, t, i, a) {var o = Math.ceil;var n = t.chartData.xAxisData,l = n.xAxisPoints,r = n.startX,s = n.endX,d = n.eachSpacing;var h = "center";("line" == t.type || "area" == t.type) && (h = t.xAxis.boundaryGap);var x = t.height - t.area[2],c = t.area[0];if (t.enableScroll && t.xAxis.scrollShow) {var p = t.height - t.area[2] + i.xAxisHeight,g = s - r,y = d * (l.length - 1),f = 0;t._scrollDistance_ && (f = -t._scrollDistance_ * g / y), a.beginPath(), a.setLineCap("round"), a.setLineWidth(6 * t.pixelRatio), a.setStrokeStyle(t.xAxis.scrollBackgroundColor || "#EFEBEF"), a.moveTo(r, p), a.lineTo(s, p), a.stroke(), a.closePath(), a.beginPath(), a.setLineCap("round"), a.setLineWidth(6 * t.pixelRatio), a.setStrokeStyle(t.xAxis.scrollColor || "#A6A6A6"), a.moveTo(r + f, p), a.lineTo(r + f + g * g / y, p), a.stroke(), a.closePath(), a.setLineCap("butt");}if (a.save(), t._scrollDistance_ && 0 !== t._scrollDistance_ && a.translate(t._scrollDistance_, 0), !0 === t.xAxis.calibration && (a.setStrokeStyle(t.xAxis.gridColor || "#cccccc"), a.setLineCap("butt"), a.setLineWidth(1 * t.pixelRatio), l.forEach(function (e, i) {0 < i && (a.beginPath(), a.moveTo(e - d / 2, x), a.lineTo(e - d / 2, x + 3 * t.pixelRatio), a.closePath(), a.stroke());})), !0 !== t.xAxis.disableGrid && (a.setStrokeStyle(t.xAxis.gridColor || "#cccccc"), a.setLineCap("butt"), a.setLineWidth(1 * t.pixelRatio), "dash" == t.xAxis.gridType && a.setLineDash([t.xAxis.dashLength, t.xAxis.dashLength]), t.xAxis.gridEval = t.xAxis.gridEval || 1, l.forEach(function (e, i) {0 == i % t.xAxis.gridEval && (a.beginPath(), a.moveTo(e, x), a.lineTo(e, c), a.stroke());}), a.setLineDash([])), !0 !== t.xAxis.disabled) {var _n19 = e.length;t.xAxis.labelCount && (_n19 = t.xAxis.itemCount ? o(e.length / t.xAxis.itemCount * t.xAxis.labelCount) : t.xAxis.labelCount, _n19 -= 1);var _r8 = o(e.length / _n19),_s3 = [],_c = e.length;for (var _t22 = 0; _t22 < _c; _t22++) {0 == _t22 % _r8 ? _s3.push(e[_t22]) : _s3.push("");}_s3[_c - 1] = e[_c - 1];var u = t.xAxis.fontSize || i.fontSize;0 === i._xAxisTextAngle_ ? _s3.forEach(function (e, o) {var n = -measureText(e + "", u) / 2;"center" == h && (n += d / 2);var r = 0;t.xAxis.scrollShow && (r = 6 * t.pixelRatio), a.beginPath(), a.setFontSize(u), a.setFillStyle(t.xAxis.fontColor || "#666666"), a.fillText(e + "", l[o] + n, x + u + (i.xAxisHeight - r - u) / 2), a.closePath(), a.stroke();}) : _s3.forEach(function (e, o) {a.save(), a.beginPath(), a.setFontSize(u), a.setFillStyle(t.xAxis.fontColor || "#666666");var n = measureText(e + "", u),r = -n;"center" == h && (r += d / 2);var s = calRotateTranslate(l[o] + d / 2, x + u / 2 + 5, t.height),c = s.transX,p = s.transY;a.rotate(-1 * i._xAxisTextAngle_), a.translate(c, p), a.fillText(e + "", l[o] + r, x + u + 5), a.closePath(), a.stroke(), a.restore();});}a.restore(), t.xAxis.axisLine && (a.beginPath(), a.setStrokeStyle(t.xAxis.axisLineColor), a.setLineWidth(1 * t.pixelRatio), a.moveTo(r, t.height - t.area[2]), a.lineTo(s, t.height - t.area[2]), a.stroke());}function drawYAxisGrid(e, t, i, a) {if (!0 === t.yAxis.disableGrid) return;var o = t.height - t.area[0] - t.area[2],n = o / t.yAxis.splitNumber,l = t.area[3],r = t.chartData.xAxisData.xAxisPoints,s = t.chartData.xAxisData.eachSpacing,d = s * (r.length - 1),h = [];for (var _o23 = 0; _o23 < t.yAxis.splitNumber + 1; _o23++) {h.push(t.height - t.area[2] - n * _o23);}a.save(), t._scrollDistance_ && 0 !== t._scrollDistance_ && a.translate(t._scrollDistance_, 0), "dash" == t.yAxis.gridType && a.setLineDash([t.yAxis.dashLength, t.yAxis.dashLength]), a.setStrokeStyle(t.yAxis.gridColor), a.setLineWidth(1 * t.pixelRatio), h.forEach(function (e) {a.beginPath(), a.moveTo(l, e), a.lineTo(l + d, e), a.stroke();}), a.setLineDash([]), a.restore();}function drawYAxis(e, t, a, o) {if (!0 === t.yAxis.disabled) return;var i = t.height - t.area[0] - t.area[2],n = i / t.yAxis.splitNumber,l = t.area[3],r = t.width - t.area[1],s = t.height - t.area[2],d = s + a.xAxisHeight;t.xAxis.scrollShow && (d -= 3 * t.pixelRatio), t.xAxis.rotateLabel && (d = t.height - t.area[2] + 3), o.beginPath(), o.setFillStyle(t.background || "#ffffff"), 0 > t._scrollDistance_ && o.fillRect(0, 0, l, d), !0 == t.enableScroll && o.fillRect(r, 0, t.width, d), o.closePath(), o.stroke();var h = [];for (var _l9 = 0; _l9 <= t.yAxis.splitNumber; _l9++) {h.push(t.area[0] + n * _l9);}var x = t.area[3],c = t.width - t.area[1];var _loop3 = function _loop3(_n21, _l10) {if (_n21 = t.yAxis.data[_l10], !0 !== _n21.disabled) {var _e29 = t.chartData.yAxisData.rangesFormat[_l10],_i22 = _n21.fontSize || a.fontSize,_r9 = t.chartData.yAxisData.yAxisWidth[_l10];if (_e29.forEach(function (e, a) {var l = h[a] ? h[a] : s;o.beginPath(), o.setFontSize(_i22), o.setLineWidth(1 * t.pixelRatio), o.setStrokeStyle(_n21.axisLineColor || "#cccccc"), o.setFillStyle(_n21.fontColor || "#666666"), "left" == _r9.position ? (o.fillText(e + "", x - _r9.width, l + _i22 / 2), !0 == _n21.calibration && (o.moveTo(x, l), o.lineTo(x - 3 * t.pixelRatio, l))) : (o.fillText(e + "", c + 4 * t.pixelRatio, l + _i22 / 2), !0 == _n21.calibration && (o.moveTo(c, l), o.lineTo(c + 3 * t.pixelRatio, l))), o.closePath(), o.stroke();}), !1 !== _n21.axisLine && (o.beginPath(), o.setStrokeStyle(_n21.axisLineColor || "#cccccc"), o.setLineWidth(1 * t.pixelRatio), "left" == _r9.position ? (o.moveTo(x, t.height - t.area[2]), o.lineTo(x, t.area[0])) : (o.moveTo(c, t.height - t.area[2]), o.lineTo(c, t.area[0])), o.stroke()), t.yAxis.showTitle) {var _e30 = _n21.titleFontSize || a.fontSize,_i23 = _n21.title;o.beginPath(), o.setFontSize(_e30), o.setFillStyle(_n21.titleFontColor || "#666666"), "left" == _r9.position ? o.fillText(_i23, x - measureText(_i23, _e30) / 2, t.area[0] - 10 * t.pixelRatio) : o.fillText(_i23, c - measureText(_i23, _e30) / 2, t.area[0] - 10 * t.pixelRatio), o.closePath(), o.stroke();}"left" == _r9.position ? x -= _r9.width + t.yAxis.padding : c += _r9.width + t.yAxis.padding;}_n20 = _n21;};for (var _n20, _l10 = 0; _l10 < t.yAxis.data.length; _l10++) {_loop3(_n20, _l10);}}function drawLegend(e, t, i, a, o) {if (!1 === t.legend.show) return;var n = o.legendData,l = n.points,r = n.area,s = t.legend.padding,d = t.legend.fontSize,h = 15 * t.pixelRatio,x = 5 * t.pixelRatio,c = t.legend.itemGap,p = Math.max(t.legend.lineHeight * t.pixelRatio, d);a.beginPath(), a.setLineWidth(t.legend.borderWidth), a.setStrokeStyle(t.legend.borderColor), a.setFillStyle(t.legend.backgroundColor), a.moveTo(r.start.x, r.start.y), a.rect(r.start.x, r.start.y, r.width, r.height), a.closePath(), a.fill(), a.stroke(), l.forEach(function (e, o) {var l = 0,g = 0;l = n.widthArr[o], g = n.heightArr[o];var y = 0,f = 0;"top" == t.legend.position || "bottom" == t.legend.position ? (y = r.start.x + (r.width - l) / 2, f = r.start.y + s + o * p) : (l = 0 == o ? 0 : n.widthArr[o - 1], y = r.start.x + s + l, f = r.start.y + s + (r.height - g) / 2), a.setFontSize(i.fontSize);for (var _n22, _l11 = 0; _l11 < e.length; _l11++) {switch (_n22 = e[_l11], _n22.area = [0, 0, 0, 0], _n22.area[0] = y, _n22.area[1] = f, _n22.area[3] = f + p, a.beginPath(), a.setLineWidth(1 * t.pixelRatio), a.setStrokeStyle(_n22.show ? _n22.color : t.legend.hiddenColor), a.setFillStyle(_n22.show ? _n22.color : t.legend.hiddenColor), _n22.legendShape) {case "line":a.moveTo(y, f + .5 * p - 2 * t.pixelRatio), a.fillRect(y, f + .5 * p - 2 * t.pixelRatio, 15 * t.pixelRatio, 4 * t.pixelRatio);break;case "triangle":a.moveTo(y + 7.5 * t.pixelRatio, f + .5 * p - 5 * t.pixelRatio), a.lineTo(y + 2.5 * t.pixelRatio, f + .5 * p + 5 * t.pixelRatio), a.lineTo(y + 12.5 * t.pixelRatio, f + .5 * p + 5 * t.pixelRatio), a.lineTo(y + 7.5 * t.pixelRatio, f + .5 * p - 5 * t.pixelRatio);break;case "diamond":a.moveTo(y + 7.5 * t.pixelRatio, f + .5 * p - 5 * t.pixelRatio), a.lineTo(y + 2.5 * t.pixelRatio, f + .5 * p), a.lineTo(y + 7.5 * t.pixelRatio, f + .5 * p + 5 * t.pixelRatio), a.lineTo(y + 12.5 * t.pixelRatio, f + .5 * p), a.lineTo(y + 7.5 * t.pixelRatio, f + .5 * p - 5 * t.pixelRatio);break;case "circle":a.moveTo(y + 7.5 * t.pixelRatio, f + .5 * p), a.arc(y + 7.5 * t.pixelRatio, f + .5 * p, 5 * t.pixelRatio, 0, 2 * Math.PI);break;case "rect":a.moveTo(y, f + .5 * p - 5 * t.pixelRatio), a.fillRect(y, f + .5 * p - 5 * t.pixelRatio, 15 * t.pixelRatio, 10 * t.pixelRatio);break;default:a.moveTo(y, f + .5 * p - 5 * t.pixelRatio), a.fillRect(y, f + .5 * p - 5 * t.pixelRatio, 15 * t.pixelRatio, 10 * t.pixelRatio);}a.closePath(), a.fill(), a.stroke(), y += h + x;a.beginPath(), a.setFontSize(d), a.setFillStyle(_n22.show ? t.legend.fontColor : t.legend.hiddenColor), a.fillText(_n22.name, y, f + (.5 * p + .5 * d - 2)), a.closePath(), a.stroke(), "top" == t.legend.position || "bottom" == t.legend.position ? (y += measureText(_n22.name, d) + c, _n22.area[2] = y) : (_n22.area[2] = y + measureText(_n22.name, d) + c, y -= h + x, f += p);}});}function drawPieDataPoints(e, t, a, o) {var n = Math.PI,l = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,r = assign({}, { activeOpacity: .5, activeRadius: 10 * t.pixelRatio, offsetAngle: 0, labelWidth: 15 * t.pixelRatio, ringWidth: 0, border: !1, borderWidth: 2, borderColor: "#FFFFFF" }, t.extra.pie),s = { x: t.area[3] + (t.width - t.area[1] - t.area[3]) / 2, y: t.area[0] + (t.height - t.area[0] - t.area[2]) / 2 };0 == a.pieChartLinePadding && (a.pieChartLinePadding = r.activeRadius);var d = Math.min((t.width - t.area[1] - t.area[3]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding - a._pieTextMaxLength_, (t.height - t.area[0] - t.area[2]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding);e = getPieDataPoints(e, d, l);var h = r.activeRadius;if (e = e.map(function (e) {return e._start_ += r.offsetAngle * n / 180, e;}), e.forEach(function (e, i) {t.tooltip && t.tooltip.index == i && (o.beginPath(), o.setFillStyle(hexToRgb(e.color, t.extra.pie.activeOpacity || .5)), o.moveTo(s.x, s.y), o.arc(s.x, s.y, e._radius_ + h, e._start_, e._start_ + 2 * e._proportion_ * n), o.closePath(), o.fill()), o.beginPath(), o.setLineWidth(r.borderWidth * t.pixelRatio), o.lineJoin = "round", o.setStrokeStyle(r.borderColor), o.setFillStyle(e.color), o.moveTo(s.x, s.y), o.arc(s.x, s.y, e._radius_, e._start_, e._start_ + 2 * e._proportion_ * n), o.closePath(), o.fill(), !0 == r.border && o.stroke();}), "ring" === t.type) {var x = .6 * d;"number" == typeof t.extra.pie.ringWidth && 0 < t.extra.pie.ringWidth && (x = Math.max(0, d - t.extra.pie.ringWidth)), o.beginPath(), o.setFillStyle(t.background || "#ffffff"), o.moveTo(s.x, s.y), o.arc(s.x, s.y, x, 0, 2 * n), o.closePath(), o.fill();}if (!1 !== t.dataLabel && 1 === l) {for (var c = !1, p = 0, g = e.length; p < g; p++) {if (0 < e[p].data) {c = !0;break;}}c && drawPieText(e, t, a, o, d, s);}return 1 === l && "ring" === t.type && drawRingTitle(t, a, o, s), { center: s, radius: d, series: e };}function drawRoseDataPoints(e, t, a, o) {var n = Math.PI,l = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,r = assign({}, { type: "area", activeOpacity: .5, activeRadius: 10 * t.pixelRatio, offsetAngle: 0, labelWidth: 15 * t.pixelRatio, border: !1, borderWidth: 2, borderColor: "#FFFFFF" }, t.extra.rose);0 == a.pieChartLinePadding && (a.pieChartLinePadding = r.activeRadius);var s = { x: t.area[3] + (t.width - t.area[1] - t.area[3]) / 2, y: t.area[0] + (t.height - t.area[0] - t.area[2]) / 2 },d = Math.min((t.width - t.area[1] - t.area[3]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding - a._pieTextMaxLength_, (t.height - t.area[0] - t.area[2]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding),h = r.minRadius || .5 * d;e = getRoseDataPoints(e, r.type, h, d, l);var x = r.activeRadius;if (e = e.map(function (e) {return e._start_ += (r.offsetAngle || 0) * n / 180, e;}), e.forEach(function (e, i) {t.tooltip && t.tooltip.index == i && (o.beginPath(), o.setFillStyle(hexToRgb(e.color, r.activeOpacity || .5)), o.moveTo(s.x, s.y), o.arc(s.x, s.y, x + e._radius_, e._start_, e._start_ + 2 * e._rose_proportion_ * n), o.closePath(), o.fill()), o.beginPath(), o.setLineWidth(r.borderWidth * t.pixelRatio), o.lineJoin = "round", o.setStrokeStyle(r.borderColor), o.setFillStyle(e.color), o.moveTo(s.x, s.y), o.arc(s.x, s.y, e._radius_, e._start_, e._start_ + 2 * e._rose_proportion_ * n), o.closePath(), o.fill(), !0 == r.border && o.stroke();}), !1 !== t.dataLabel && 1 === l) {for (var c = !1, p = 0, g = e.length; p < g; p++) {if (0 < e[p].data) {c = !0;break;}}c && drawPieText(e, t, a, o, d, s);}return { center: s, radius: d, series: e };}function drawArcbarDataPoints(e, t, i, a) {var o = Math.PI,n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,l = assign({}, { startAngle: .75, endAngle: .25, type: "default", width: 12 * t.pixelRatio, gap: 2 * t.pixelRatio }, t.extra.arcbar);e = getArcbarDataPoints(e, l, n);var r = l.center ? l.center : { x: t.width / 2, y: t.height / 2 };var s;l.radius ? s = l.radius : (s = Math.min(r.x, r.y), s -= 5 * t.pixelRatio, s -= l.width / 2);for (var _n23, d = 0; d < e.length; d++) {_n23 = e[d], a.setLineWidth(l.width), a.setStrokeStyle(l.backgroundColor || "#E9E9E9"), a.setLineCap("round"), a.beginPath(), "default" == l.type ? a.arc(r.x, r.y, s - (l.width + l.gap) * d, l.startAngle * o, l.endAngle * o, !1) : a.arc(r.x, r.y, s - (l.width + l.gap) * d, 0, 2 * o, !1), a.stroke(), a.setLineWidth(l.width), a.setStrokeStyle(_n23.color), a.setLineCap("round"), a.beginPath(), a.arc(r.x, r.y, s - (l.width + l.gap) * d, l.startAngle * o, _n23._proportion_ * o, !1), a.stroke();}return drawRingTitle(t, i, a, r), { center: r, radius: s, series: e };}function drawGaugeDataPoints(e, t, a, i, o) {var n = Math.PI,l = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1,r = assign({}, { type: "default", startAngle: .75, endAngle: .25, width: 15, splitLine: { fixRadius: 0, splitNumber: 10, width: 15, color: "#FFFFFF", childNumber: 5, childWidth: 5 }, pointer: { width: 15, color: "auto" } }, a.extra.gauge);null == r.oldAngle && (r.oldAngle = r.startAngle), null == r.oldData && (r.oldData = 0), e = getGaugeAxisPoints(e, r.startAngle, r.endAngle);var s = { x: a.width / 2, y: a.height / 2 },d = Math.min(s.x, s.y);d -= 5 * a.pixelRatio, d -= r.width / 2;var h = d - r.width,x = 0;if ("progress" == r.type) {var c = d - 3 * r.width;o.beginPath();var _e31 = o.createLinearGradient(s.x, s.y - c, s.x, s.y + c);_e31.addColorStop("0", hexToRgb(t[0].color, .3)), _e31.addColorStop("1.0", hexToRgb("#FFFFFF", .1)), o.setFillStyle(_e31), o.arc(s.x, s.y, c, 0, 2 * n, !1), o.fill(), o.setLineWidth(r.width), o.setStrokeStyle(hexToRgb(t[0].color, .3)), o.setLineCap("round"), o.beginPath(), o.arc(s.x, s.y, h, r.startAngle * n, r.endAngle * n, !1), o.stroke(), x = r.startAngle - r.endAngle + 1;var _i24 = x / r.splitLine.splitNumber,p = x / r.splitLine.splitNumber / r.splitLine.childNumber,g = -d - .5 * r.width - r.splitLine.fixRadius,y = -d - r.width - r.splitLine.fixRadius + r.splitLine.width;o.save(), o.translate(s.x, s.y), o.rotate((r.startAngle - 1) * n);var f = r.splitLine.splitNumber * r.splitLine.childNumber + 1,u = t[0].data * l;for (var _e32 = 0; _e32 < f; _e32++) {o.beginPath(), u > _e32 / f ? o.setStrokeStyle(hexToRgb(t[0].color, 1)) : o.setStrokeStyle(hexToRgb(t[0].color, .3)), o.setLineWidth(3 * a.pixelRatio), o.moveTo(g, 0), o.lineTo(y, 0), o.stroke(), o.rotate(p * n);}o.restore(), t = getArcbarDataPoints(t, r, l), o.setLineWidth(r.width), o.setStrokeStyle(t[0].color), o.setLineCap("round"), o.beginPath(), o.arc(s.x, s.y, h, r.startAngle * n, t[0]._proportion_ * n, !1), o.stroke();var m = d - 2.5 * r.width;o.save(), o.translate(s.x, s.y), o.rotate((t[0]._proportion_ - 1) * n), o.beginPath(), o.setLineWidth(r.width / 3);var S = o.createLinearGradient(0, .6 * -m, 0, .6 * m);S.addColorStop("0", hexToRgb("#FFFFFF", 0)), S.addColorStop("0.5", hexToRgb(t[0].color, 1)), S.addColorStop("1.0", hexToRgb("#FFFFFF", 0)), o.setStrokeStyle(S), o.arc(0, 0, m, .85 * n, 1.15 * n, !1), o.stroke(), o.beginPath(), o.setLineWidth(1), o.setStrokeStyle(t[0].color), o.setFillStyle(t[0].color), o.moveTo(-m - r.width / 3 / 2, -4), o.lineTo(-m - r.width / 3 / 2 - 4, 0), o.lineTo(-m - r.width / 3 / 2, 4), o.lineTo(-m - r.width / 3 / 2, -4), o.stroke(), o.fill(), o.restore();} else {o.setLineWidth(r.width), o.setLineCap("butt");for (var _t23, _a11 = 0; _a11 < e.length; _a11++) {_t23 = e[_a11], o.beginPath(), o.setStrokeStyle(_t23.color), o.arc(s.x, s.y, d, _t23._startAngle_ * n, _t23._endAngle_ * n, !1), o.stroke();}o.save(), x = r.startAngle - r.endAngle + 1;var _c2 = x / r.splitLine.splitNumber,_p2 = x / r.splitLine.splitNumber / r.splitLine.childNumber,_g2 = -d - .5 * r.width - r.splitLine.fixRadius,_y = -d - .5 * r.width - r.splitLine.fixRadius + r.splitLine.width,_f = -d - .5 * r.width - r.splitLine.fixRadius + r.splitLine.childWidth;o.translate(s.x, s.y), o.rotate((r.startAngle - 1) * n);for (var _e33 = 0; _e33 < r.splitLine.splitNumber + 1; _e33++) {o.beginPath(), o.setStrokeStyle(r.splitLine.color), o.setLineWidth(2 * a.pixelRatio), o.moveTo(_g2, 0), o.lineTo(_y, 0), o.stroke(), o.rotate(_c2 * n);}o.restore(), o.save(), o.translate(s.x, s.y), o.rotate((r.startAngle - 1) * n);for (var _e34 = 0; _e34 < r.splitLine.splitNumber * r.splitLine.childNumber + 1; _e34++) {o.beginPath(), o.setStrokeStyle(r.splitLine.color), o.setLineWidth(1 * a.pixelRatio), o.moveTo(_g2, 0), o.lineTo(_f, 0), o.stroke(), o.rotate(_p2 * n);}o.restore(), t = getGaugeDataPoints(t, e, r, l);for (var _e35, _a12 = 0; _a12 < t.length; _a12++) {_e35 = t[_a12], o.save(), o.translate(s.x, s.y), o.rotate((_e35._proportion_ - 1) * n), o.beginPath(), o.setFillStyle(_e35.color), o.moveTo(r.pointer.width, 0), o.lineTo(0, -r.pointer.width / 2), o.lineTo(-h, 0), o.lineTo(0, r.pointer.width / 2), o.lineTo(r.pointer.width, 0), o.closePath(), o.fill(), o.beginPath(), o.setFillStyle("#FFFFFF"), o.arc(0, 0, r.pointer.width / 6, 0, 2 * n, !1), o.fill(), o.restore();}!1 !== a.dataLabel && drawGaugeLabel(r, d, s, a, i, o);}return drawRingTitle(a, i, o, s), 1 === l && "gauge" === a.type && (a.extra.gauge.oldAngle = t[0]._proportion_, a.extra.gauge.oldData = t[0].data), { center: s, radius: d, innerRadius: h, categories: e, totalAngle: x };}function drawRadarDataPoints(e, t, a, o) {var n = Math.cos,l = Math.sin,r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,s = assign({}, { gridColor: "#cccccc", labelColor: "#666666", opacity: .2, gridCount: 3 }, t.extra.radar),d = getRadarCoordinateSeries(t.categories.length),h = { x: t.area[3] + (t.width - t.area[1] - t.area[3]) / 2, y: t.area[0] + (t.height - t.area[0] - t.area[2]) / 2 },x = Math.min(h.x - (getMaxTextListLength(t.categories) + a.radarLabelTextMargin), h.y - a.radarLabelTextMargin);x -= t.padding[1], o.beginPath(), o.setLineWidth(1 * t.pixelRatio), o.setStrokeStyle(s.gridColor), d.forEach(function (e) {var t = convertCoordinateOrigin(x * n(e), x * l(e), h);o.moveTo(h.x, h.y), o.lineTo(t.x, t.y);}), o.stroke(), o.closePath();for (var c = function c(e) {var i = {};o.beginPath(), o.setLineWidth(1 * t.pixelRatio), o.setStrokeStyle(s.gridColor), d.forEach(function (t, a) {var r = convertCoordinateOrigin(x / s.gridCount * e * n(t), x / s.gridCount * e * l(t), h);0 === a ? (i = r, o.moveTo(r.x, r.y)) : o.lineTo(r.x, r.y);}), o.lineTo(i.x, i.y), o.stroke(), o.closePath();}, p = 1; p <= s.gridCount; p++) {c(p);}var g = getRadarDataPoints(d, h, x, e, t, r);return g.forEach(function (e) {if (o.beginPath(), o.setFillStyle(hexToRgb(e.color, s.opacity)), e.data.forEach(function (e, t) {0 === t ? o.moveTo(e.position.x, e.position.y) : o.lineTo(e.position.x, e.position.y);}), o.closePath(), o.fill(), !1 !== t.dataPointShape) {var i = e.data.map(function (e) {return e.position;});drawPointShape(i, e.color, e.pointShape, o, t);}}), drawRadarLabel(d, x, h, t, a, o), { center: h, radius: x, angleList: d };}function normalInt(e, t, a) {a = 0 == a ? 1 : a;for (var o = [], n = 0; n < a; n++) {o[n] = Math.random();}return Math.floor(o.reduce(function (e, t) {return e + t;}) / a * (t - e)) + e;}function collisionNew(e, t, a, o) {var n = !1;for (var l = 0; l < t.length; l++) {if (t[l].area) if (!(e[3] < t[l].area[1] || e[0] > t[l].area[2] || e[1] > t[l].area[3] || e[2] < t[l].area[0])) {n = !0;break;} else if (0 > e[0] || 0 > e[1] || e[2] > a || e[3] > o) {n = !0;break;} else n = !1;}return n;}function getBoundingBox(e) {var t,a = {};a.xMin = 180, a.xMax = 0, a.yMin = 90, a.yMax = 0;for (var o, n = 0; n < e.length; n++) {o = e[n].geometry.coordinates;for (var l = 0; l < o.length; l++) {t = o[l], 1 == t.length && (t = t[0]);for (var r = 0; r < t.length; r++) {var s = t[r][0],d = t[r][1],h = { x: s, y: d };a.xMin = a.xMin < h.x ? a.xMin : h.x, a.xMax = a.xMax > h.x ? a.xMax : h.x, a.yMin = a.yMin < h.y ? a.yMin : h.y, a.yMax = a.yMax > h.y ? a.yMax : h.y;}}}return a;}function coordinateToPoint(e, t, i, a, o, n) {return { x: (t - i.xMin) * a + o, y: (i.yMax - e) * a + n };}function pointToCoordinate(e, t, i, a, o, n) {return { x: (t - o) / a + i.xMin, y: i.yMax - (e - n) / a };}function isRayIntersectsSegment(e, t, i) {if (t[1] == i[1]) return !1;if (t[1] > e[1] && i[1] > e[1]) return !1;if (t[1] < e[1] && i[1] < e[1]) return !1;if (t[1] == e[1] && i[1] > e[1]) return !1;if (i[1] == e[1] && t[1] > e[1]) return !1;if (t[0] < e[0] && i[1] < e[1]) return !1;var a = i[0] - (i[0] - t[0]) * (i[1] - e[1]) / (i[1] - t[1]);return !(a < e[0]);}function isPoiWithinPoly(e, t) {var i = 0;for (var a, o = 0; o < t.length; o++) {a = t[o][0], 1 == t.length && (a = t[o][0]);for (var _t24 = 0; _t24 < a.length - 1; _t24++) {var _o24 = a[_t24],n = a[_t24 + 1];isRayIntersectsSegment(e, _o24, n) && (i += 1);}}return !(1 != i % 2);}function drawMapDataPoints(e, t, a, o) {var n,l,r = Math.abs,s = assign({}, { border: !0, borderWidth: 1, borderColor: "#666666", fillOpacity: .6, activeBorderColor: "#f04864", activeFillColor: "#facc14", activeFillOpacity: 1 }, t.extra.map),d = e,h = getBoundingBox(d),x = t.width / r(h.xMax - h.xMin),c = t.height / r(h.yMax - h.yMin),p = x < c ? x : c,g = t.width / 2 - r(h.xMax - h.xMin) / 2 * p,y = t.height / 2 - r(h.yMax - h.yMin) / 2 * p;o.beginPath(), o.clearRect(0, 0, t.width, t.height), o.setFillStyle(t.background || "#FFFFFF"), o.rect(0, 0, t.width, t.height), o.fill();for (var f = 0; f < d.length; f++) {o.beginPath(), o.setLineWidth(s.borderWidth * t.pixelRatio), o.setStrokeStyle(s.borderColor), o.setFillStyle(hexToRgb(e[f].color, s.fillOpacity)), t.tooltip && t.tooltip.index == f && (o.setStrokeStyle(s.activeBorderColor), o.setFillStyle(hexToRgb(s.activeFillColor, s.activeFillOpacity)));for (var u = d[f].geometry.coordinates, m = 0; m < u.length; m++) {n = u[m], 1 == n.length && (n = n[0]);for (var S = 0; S < n.length; S++) {l = coordinateToPoint(n[S][1], n[S][0], h, p, g, y), 0 == S ? (o.beginPath(), o.moveTo(l.x, l.y)) : o.lineTo(l.x, l.y);}o.fill(), !0 == s.border && o.stroke();}if (!0 == t.dataLabel) {var T = d[f].properties.centroid;if (T) {l = coordinateToPoint(T[1], T[0], h, p, g, y);var _e36 = d[f].textSize || a.fontSize,_t25 = d[f].properties.name;o.beginPath(), o.setFontSize(_e36), o.setFillStyle(d[f].textColor || "#666666"), o.fillText(_t25, l.x - measureText(_t25, _e36) / 2, l.y + _e36 / 2), o.closePath(), o.stroke();}}}t.chartData.mapData = { bounds: h, scale: p, xoffset: g, yoffset: y }, drawToolTipBridge(t, a, o, 1), o.draw();}function getWordCloudPoint(e, t) {var a = e.series.sort(function (e, t) {return parseInt(t.textSize) - parseInt(e.textSize);});switch (t) {case "normal":for (var _t26 = 0; _t26 < a.length; _t26++) {var i = void 0,_o25 = void 0,n = void 0,l = a[_t26].name,r = a[_t26].textSize,s = measureText(l, r),d = 0;for (;;) {d++, i = normalInt(-e.width / 2, e.width / 2, 5) - s / 2, _o25 = normalInt(-e.height / 2, e.height / 2, 5) + r / 2, n = [i - 5 + e.width / 2, _o25 - 5 - r + e.height / 2, i + s + 5 + e.width / 2, _o25 + 5 + e.height / 2];var _t27 = collisionNew(n, a, e.width, e.height);if (!_t27) break;if (1e3 == d) {n = [-100, -100, -100, -100];break;}}a[_t26].area = n;}break;case "vertical":var o = function o() {return !!(.7 < Math.random());};;for (var _t28 = 0; _t28 < a.length; _t28++) {var _i25 = void 0,_n24 = void 0,_l12 = void 0,_r10 = void 0,_s4 = a[_t28].name,_d3 = a[_t28].textSize,h = measureText(_s4, _d3),x = o(),c = 0;for (;;) {c++;var _t29 = void 0;if (x ? (_i25 = normalInt(-e.width / 2, e.width / 2, 5) - h / 2, _n24 = normalInt(-e.height / 2, e.height / 2, 5) + _d3 / 2, _l12 = [_n24 - 5 - h + e.width / 2, -_i25 - 5 + e.height / 2, _n24 + 5 + e.width / 2, -_i25 + _d3 + 5 + e.height / 2], _r10 = [e.width - (e.width / 2 - e.height / 2) - (-_i25 + _d3 + 5 + e.height / 2) - 5, e.height / 2 - e.width / 2 + (_n24 - 5 - h + e.width / 2) - 5, e.width - (e.width / 2 - e.height / 2) - (-_i25 + _d3 + 5 + e.height / 2) + _d3, e.height / 2 - e.width / 2 + (_n24 - 5 - h + e.width / 2) + h + 5], _t29 = collisionNew(_r10, a, e.height, e.width)) : (_i25 = normalInt(-e.width / 2, e.width / 2, 5) - h / 2, _n24 = normalInt(-e.height / 2, e.height / 2, 5) + _d3 / 2, _l12 = [_i25 - 5 + e.width / 2, _n24 - 5 - _d3 + e.height / 2, _i25 + h + 5 + e.width / 2, _n24 + 5 + e.height / 2], _t29 = collisionNew(_l12, a, e.width, e.height)), !_t29) break;if (1e3 == c) {_l12 = [-1e3, -1e3, -1e3, -1e3];break;}}x ? (a[_t28].area = _r10, a[_t28].areav = _l12) : a[_t28].area = _l12, a[_t28].rotate = x;};}return a;}function drawWordCloudDataPoints(e, t, i, a) {var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 1,n = assign({}, { type: "normal", autoColors: !0 }, t.extra.word);a.beginPath(), a.setFillStyle(t.background || "#FFFFFF"), a.rect(0, 0, t.width, t.height), a.fill(), a.save();var l = t.chartData.wordCloudData;a.translate(t.width / 2, t.height / 2);for (var _n25 = 0; _n25 < l.length; _n25++) {a.save(), l[_n25].rotate && a.rotate(90 * Math.PI / 180);var _e37 = l[_n25].name,_i26 = l[_n25].textSize,r = measureText(_e37, _i26);a.beginPath(), a.setStrokeStyle(l[_n25].color), a.setFillStyle(l[_n25].color), a.setFontSize(_i26), l[_n25].rotate ? 0 < l[_n25].areav[0] && (t.tooltip ? t.tooltip.index == _n25 ? a.strokeText(_e37, (l[_n25].areav[0] + 5 - t.width / 2) * o - r * (1 - o) / 2, (l[_n25].areav[1] + 5 + _i26 - t.height / 2) * o) : a.fillText(_e37, (l[_n25].areav[0] + 5 - t.width / 2) * o - r * (1 - o) / 2, (l[_n25].areav[1] + 5 + _i26 - t.height / 2) * o) : a.fillText(_e37, (l[_n25].areav[0] + 5 - t.width / 2) * o - r * (1 - o) / 2, (l[_n25].areav[1] + 5 + _i26 - t.height / 2) * o)) : 0 < l[_n25].area[0] && (t.tooltip ? t.tooltip.index == _n25 ? a.strokeText(_e37, (l[_n25].area[0] + 5 - t.width / 2) * o - r * (1 - o) / 2, (l[_n25].area[1] + 5 + _i26 - t.height / 2) * o) : a.fillText(_e37, (l[_n25].area[0] + 5 - t.width / 2) * o - r * (1 - o) / 2, (l[_n25].area[1] + 5 + _i26 - t.height / 2) * o) : a.fillText(_e37, (l[_n25].area[0] + 5 - t.width / 2) * o - r * (1 - o) / 2, (l[_n25].area[1] + 5 + _i26 - t.height / 2) * o)), a.stroke(), a.restore();}a.restore();}function drawFunnelDataPoints(e, t, i, a) {var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,n = assign({}, { activeWidth: 10, activeOpacity: .3, border: !1, borderWidth: 2, borderColor: "#FFFFFF", fillOpacity: 1, labelAlign: "right" }, t.extra.funnel),l = (t.height - t.area[0] - t.area[2]) / e.length,r = { x: t.area[3] + (t.width - t.area[1] - t.area[3]) / 2, y: t.height - t.area[2] },s = n.activeWidth,d = Math.min((t.width - t.area[1] - t.area[3]) / 2 - s, (t.height - t.area[0] - t.area[2]) / 2 - s);e = getFunnelDataPoints(e, d, o), a.save(), a.translate(r.x, r.y);for (var _o26 = 0; _o26 < e.length; _o26++) {0 == _o26 ? (t.tooltip && t.tooltip.index == _o26 && (a.beginPath(), a.setFillStyle(hexToRgb(e[_o26].color, n.activeOpacity)), a.moveTo(-s, 0), a.lineTo(-e[_o26].radius - s, -l), a.lineTo(e[_o26].radius + s, -l), a.lineTo(s, 0), a.lineTo(-s, 0), a.closePath(), a.fill()), e[_o26].funnelArea = [r.x - e[_o26].radius, r.y - l, r.x + e[_o26].radius, r.y], a.beginPath(), a.setLineWidth(n.borderWidth * t.pixelRatio), a.setStrokeStyle(n.borderColor), a.setFillStyle(hexToRgb(e[_o26].color, n.fillOpacity)), a.moveTo(0, 0), a.lineTo(-e[_o26].radius, -l), a.lineTo(e[_o26].radius, -l), a.lineTo(0, 0), a.closePath(), a.fill(), !0 == n.border && a.stroke()) : (t.tooltip && t.tooltip.index == _o26 && (a.beginPath(), a.setFillStyle(hexToRgb(e[_o26].color, n.activeOpacity)), a.moveTo(0, 0), a.lineTo(-e[_o26 - 1].radius - s, 0), a.lineTo(-e[_o26].radius - s, -l), a.lineTo(e[_o26].radius + s, -l), a.lineTo(e[_o26 - 1].radius + s, 0), a.lineTo(0, 0), a.closePath(), a.fill()), e[_o26].funnelArea = [r.x - e[_o26].radius, r.y - l * (_o26 + 1), r.x + e[_o26].radius, r.y - l * _o26], a.beginPath(), a.setLineWidth(n.borderWidth * t.pixelRatio), a.setStrokeStyle(n.borderColor), a.setFillStyle(hexToRgb(e[_o26].color, n.fillOpacity)), a.moveTo(0, 0), a.lineTo(-e[_o26 - 1].radius, 0), a.lineTo(-e[_o26].radius, -l), a.lineTo(e[_o26].radius, -l), a.lineTo(e[_o26 - 1].radius, 0), a.lineTo(0, 0), a.closePath(), a.fill(), !0 == n.border && a.stroke()), a.translate(0, -l);}return a.restore(), !1 !== t.dataLabel && 1 === o && drawFunnelText(e, t, a, l, n.labelAlign, s, r), { center: r, radius: d, series: e };}function drawFunnelText(e, t, a, o, n, l, r) {var s = Math.PI;for (var d = 0; d < e.length; d++) {var i = void 0,h = void 0,x = void 0,c = void 0,p = e[d],g = p.format ? p.format(+p._proportion_.toFixed(2)) : util.toFixed(100 * p._proportion_) + "%";"right" == n ? (i = 0 == d ? (p.funnelArea[2] + r.x) / 2 : (p.funnelArea[2] + e[d - 1].funnelArea[2]) / 2, h = i + 2 * l, x = p.funnelArea[1] + o / 2, c = p.textSize || t.fontSize, a.setLineWidth(1 * t.pixelRatio), a.setStrokeStyle(p.color), a.setFillStyle(p.color), a.beginPath(), a.moveTo(i, x), a.lineTo(h, x), a.stroke(), a.closePath(), a.beginPath(), a.moveTo(h, x), a.arc(h, x, 2, 0, 2 * s), a.closePath(), a.fill(), a.beginPath(), a.setFontSize(c), a.setFillStyle(p.textColor || "#666666"), a.fillText(g, h + 5, x + c / 2 - 2), a.closePath(), a.stroke(), a.closePath()) : (i = 0 == d ? (p.funnelArea[0] + r.x) / 2 : (p.funnelArea[0] + e[d - 1].funnelArea[0]) / 2, h = i - 2 * l, x = p.funnelArea[1] + o / 2, c = p.textSize || t.fontSize, a.setLineWidth(1 * t.pixelRatio), a.setStrokeStyle(p.color), a.setFillStyle(p.color), a.beginPath(), a.moveTo(i, x), a.lineTo(h, x), a.stroke(), a.closePath(), a.beginPath(), a.moveTo(h, x), a.arc(h, x, 2, 0, 2 * s), a.closePath(), a.fill(), a.beginPath(), a.setFontSize(c), a.setFillStyle(p.textColor || "#666666"), a.fillText(g, h - 5 - measureText(g), x + c / 2 - 2), a.closePath(), a.stroke(), a.closePath());}}function drawCanvas(e, t) {t.draw();}var Timing = { easeIn: function easeIn(e) {return Math.pow(e, 3);}, easeOut: function easeOut(e) {return Math.pow(e - 1, 3) + 1;}, easeInOut: function easeInOut(e) {var t = Math.pow;return 1 > (e /= .5) ? .5 * t(e, 3) : .5 * (t(e - 2, 3) + 2);}, linear: function linear(e) {return e;} };function Animation(e) {this.isStop = !1, e.duration = "undefined" == typeof e.duration ? 1e3 : e.duration, e.timing = e.timing || "linear";var t = function () {return "undefined" == typeof setTimeout ? "undefined" == typeof requestAnimationFrame ? function (e) {e(null);} : requestAnimationFrame : function (e, t) {setTimeout(function () {var t = +new Date();e(t);}, t);};}(),i = null,_a13 = function a(o) {if (null === o || !0 === this.isStop) return e.onProcess && e.onProcess(1), void (e.onAnimationFinish && e.onAnimationFinish());if (null === i && (i = o), o - i < e.duration) {var n = (o - i) / e.duration,l = Timing[e.timing];n = l(n), e.onProcess && e.onProcess(n), t(_a13, 17);} else e.onProcess && e.onProcess(1), e.onAnimationFinish && e.onAnimationFinish();};_a13 = _a13.bind(this), t(_a13, 17);}Animation.prototype.stop = function () {this.isStop = !0;};function drawCharts(e, t, a, i) {var o = this,n = t.series,l = t.categories;n = fillSeries(n, t, a);var r = t.animation ? t.duration : 0;o.animationInstance && o.animationInstance.stop();var s = null;if ("candle" == e) {var _e38 = assign({}, t.extra.candle.average);_e38.show ? (s = calCandleMA(_e38.day, _e38.name, _e38.color, n[0].data), s = fillSeries(s, t, a), t.seriesMA = s) : t.seriesMA ? s = t.seriesMA = fillSeries(t.seriesMA, t, a) : s = n;} else s = n;t._series_ = n = filterSeries(n), t.area = [,,,,];for (var _o27 = 0; 4 > _o27; _o27++) {t.area[_o27] = t.padding[_o27];}var d = calLegendData(s, t, a, t.chartData),h = d.area.wholeHeight,x = d.area.wholeWidth;switch (t.legend.position) {case "top":t.area[0] += h;break;case "bottom":t.area[2] += h;break;case "left":t.area[3] += x;break;case "right":t.area[1] += x;}var c = {},p = 0;if ("line" === t.type || "column" === t.type || "area" === t.type || "mix" === t.type || "candle" === t.type) {if (c = calYAxisData(n, t, a), p = c.yAxisWidth, t.yAxis.showTitle) {var _e40 = 0;for (var _o29 = 0; _o29 < t.yAxis.data.length; _o29++) {_e40 = Math.max(_e40, t.yAxis.data[_o29].titleFontSize ? t.yAxis.data[_o29].titleFontSize : a.fontSize);}t.area[0] += (_e40 + 6) * t.pixelRatio;}var _e39 = 0,_o28 = 0;for (var _a14 = 0; _a14 < p.length; _a14++) {"left" == p[_a14].position ? (t.area[3] += 0 < _o28 ? p[_a14].width + t.yAxis.padding : p[_a14].width, _o28 += 1) : (t.area[1] += 0 < _e39 ? p[_a14].width + t.yAxis.padding : p[_a14].width, _e39 += 1);}} else a.yAxisWidth = p;if (t.chartData.yAxisData = c, t.categories && t.categories.length) {t.chartData.xAxisData = getXAxisPoints(t.categories, t, a);var _e41 = calCategoriesData(t.categories, t, a, t.chartData.xAxisData.eachSpacing),_i27 = _e41.xAxisHeight,_o30 = _e41.angle;a.xAxisHeight = _i27, a._xAxisTextAngle_ = _o30, t.area[2] += _i27, t.chartData.categoriesData = _e41;} else if ("line" === t.type || "area" === t.type || "points" === t.type) {t.chartData.xAxisData = calXAxisData(n, t, a), l = t.chartData.xAxisData.rangesFormat;var _e42 = calCategoriesData(l, t, a, t.chartData.xAxisData.eachSpacing),_i28 = _e42.xAxisHeight,_o31 = _e42.angle;a.xAxisHeight = _i28, a._xAxisTextAngle_ = _o31, t.area[2] += _i28, t.chartData.categoriesData = _e42;} else t.chartData.xAxisData = { xAxisPoints: [] };if (t.enableScroll && "right" == t.xAxis.scrollAlign && void 0 === t._scrollDistance_) {var _e43 = 0,_i29 = t.chartData.xAxisData.xAxisPoints,_a15 = t.chartData.xAxisData.startX,_n26 = t.chartData.xAxisData.endX,_l13 = t.chartData.xAxisData.eachSpacing,_r11 = _l13 * (_i29.length - 1);_e43 = _n26 - _a15 - _r11, o.scrollOption = { currentOffset: _e43, startTouchX: _e43, distance: 0, lastMoveTime: 0 }, t._scrollDistance_ = _e43;}switch (("pie" === e || "ring" === e || "rose" === e) && (a._pieTextMaxLength_ = !1 === t.dataLabel ? 0 : getPieTextMaxLength(s)), e) {case "word":var _d4 = assign({}, { type: "normal", autoColors: !0 }, t.extra.word);(!0 == t.updateData || null == t.updateData) && (t.chartData.wordCloudData = getWordCloudPoint(t, _d4.type)), this.animationInstance = new Animation({ timing: "easeInOut", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), drawWordCloudDataPoints(n, t, a, i, e), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "map":i.clearRect(0, 0, t.width, t.height), drawMapDataPoints(n, t, a, i);break;case "funnel":this.animationInstance = new Animation({ timing: "easeInOut", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), t.chartData.funnelData = drawFunnelDataPoints(n, t, a, i, e), drawLegend(t.series, t, a, i, t.chartData), drawToolTipBridge(t, a, i, e), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "line":this.animationInstance = new Animation({ timing: "easeIn", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), drawYAxisGrid(l, t, a, i), drawXAxis(l, t, a, i);var o = drawLineDataPoints(n, t, a, i, e),r = o.xAxisPoints,s = o.calPoints,d = o.eachSpacing;t.chartData.xAxisPoints = r, t.chartData.calPoints = s, t.chartData.eachSpacing = d, drawYAxis(n, t, a, i), !1 !== t.enableMarkLine && 1 === e && drawMarkLine(t, a, i), drawLegend(t.series, t, a, i, t.chartData), drawToolTipBridge(t, a, i, e, d, r), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "mix":this.animationInstance = new Animation({ timing: "easeIn", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), drawYAxisGrid(l, t, a, i), drawXAxis(l, t, a, i);var o = drawMixDataPoints(n, t, a, i, e),r = o.xAxisPoints,s = o.calPoints,d = o.eachSpacing;t.chartData.xAxisPoints = r, t.chartData.calPoints = s, t.chartData.eachSpacing = d, drawYAxis(n, t, a, i), !1 !== t.enableMarkLine && 1 === e && drawMarkLine(t, a, i), drawLegend(t.series, t, a, i, t.chartData), drawToolTipBridge(t, a, i, e, d, r), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "column":this.animationInstance = new Animation({ timing: "easeIn", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), drawYAxisGrid(l, t, a, i), drawXAxis(l, t, a, i);var o = drawColumnDataPoints(n, t, a, i, e),r = o.xAxisPoints,s = o.calPoints,d = o.eachSpacing;t.chartData.xAxisPoints = r, t.chartData.calPoints = s, t.chartData.eachSpacing = d, drawYAxis(n, t, a, i), !1 !== t.enableMarkLine && 1 === e && drawMarkLine(t, a, i), drawLegend(t.series, t, a, i, t.chartData), drawToolTipBridge(t, a, i, e, d, r), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "area":this.animationInstance = new Animation({ timing: "easeIn", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), drawYAxisGrid(l, t, a, i), drawXAxis(l, t, a, i);var o = drawAreaDataPoints(n, t, a, i, e),r = o.xAxisPoints,s = o.calPoints,d = o.eachSpacing;t.chartData.xAxisPoints = r, t.chartData.calPoints = s, t.chartData.eachSpacing = d, drawYAxis(n, t, a, i), !1 !== t.enableMarkLine && 1 === e && drawMarkLine(t, a, i), drawLegend(t.series, t, a, i, t.chartData), drawToolTipBridge(t, a, i, e, d, r), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "ring":case "pie":this.animationInstance = new Animation({ timing: "easeInOut", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), t.chartData.pieData = drawPieDataPoints(n, t, a, i, e), drawLegend(t.series, t, a, i, t.chartData), drawToolTipBridge(t, a, i, e), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "rose":this.animationInstance = new Animation({ timing: "easeInOut", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), t.chartData.pieData = drawRoseDataPoints(n, t, a, i, e), drawLegend(t.series, t, a, i, t.chartData), drawToolTipBridge(t, a, i, e), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "radar":this.animationInstance = new Animation({ timing: "easeInOut", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), t.chartData.radarData = drawRadarDataPoints(n, t, a, i, e), drawLegend(t.series, t, a, i, t.chartData), drawToolTipBridge(t, a, i, e), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "arcbar":this.animationInstance = new Animation({ timing: "easeInOut", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), t.chartData.arcbarData = drawArcbarDataPoints(n, t, a, i, e), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "gauge":this.animationInstance = new Animation({ timing: "easeInOut", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), t.chartData.gaugeData = drawGaugeDataPoints(l, n, t, a, i, e), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });break;case "candle":this.animationInstance = new Animation({ timing: "easeIn", duration: r, onProcess: function onProcess(e) {i.clearRect(0, 0, t.width, t.height), t.rotate && contextRotate(i, t), drawYAxisGrid(l, t, a, i), drawXAxis(l, t, a, i);var o = drawCandleDataPoints(n, s, t, a, i, e),r = o.xAxisPoints,d = o.calPoints,h = o.eachSpacing;t.chartData.xAxisPoints = r, t.chartData.calPoints = d, t.chartData.eachSpacing = h, drawYAxis(n, t, a, i), !1 !== t.enableMarkLine && 1 === e && drawMarkLine(t, a, i), s ? drawLegend(s, t, a, i, t.chartData) : drawLegend(t.series, t, a, i, t.chartData), drawToolTipBridge(t, a, i, e, h, r), drawCanvas(t, i);}, onAnimationFinish: function onAnimationFinish() {o.event.trigger("renderComplete");} });}}function Event() {this.events = {};}Event.prototype.addEventListener = function (e, t) {this.events[e] = this.events[e] || [], this.events[e].push(t);}, Event.prototype.trigger = function () {for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) {t[i] = arguments[i];}var a = t[0],o = t.slice(1);!this.events[a] || this.events[a].forEach(function (e) {try {e.apply(null, o);} catch (t) {console.error(t);}});};var Charts = function Charts(e) {e.pixelRatio = e.pixelRatio ? e.pixelRatio : 1, e.fontSize = e.fontSize ? e.fontSize * e.pixelRatio : 13 * e.pixelRatio, e.title = assign({}, e.title), e.subtitle = assign({}, e.subtitle), e.duration = e.duration ? e.duration : 1e3, e.yAxis = assign({}, { data: [], showTitle: !1, disabled: !1, disableGrid: !1, splitNumber: 5, gridType: "solid", dashLength: 4 * e.pixelRatio, gridColor: "#cccccc", padding: 10, fontColor: "#666666" }, e.yAxis), e.yAxis.dashLength *= e.pixelRatio, e.yAxis.padding *= e.pixelRatio, e.xAxis = assign({}, { rotateLabel: !1, type: "calibration", gridType: "solid", dashLength: 4, scrollAlign: "left", boundaryGap: "center", axisLine: !0, axisLineColor: "#cccccc" }, e.xAxis), e.xAxis.dashLength *= e.pixelRatio, e.legend = assign({}, { show: !0, position: "bottom", float: "center", backgroundColor: "rgba(0,0,0,0)", borderColor: "rgba(0,0,0,0)", borderWidth: 0, padding: 5, margin: 5, itemGap: 10, fontSize: e.fontSize, lineHeight: e.fontSize, fontColor: "#333333", format: {}, hiddenColor: "#CECECE" }, e.legend), e.legend.borderWidth *= e.pixelRatio, e.legend.itemGap *= e.pixelRatio, e.legend.padding *= e.pixelRatio, e.legend.margin *= e.pixelRatio, e.extra = assign({}, e.extra), e.rotate = !!e.rotate, e.animation = !!e.animation, e.rotate = !!e.rotate;var t = JSON.parse(JSON.stringify(config));if (t.colors = e.colors ? e.colors : t.colors, t.yAxisTitleWidth = !0 !== e.yAxis.disabled && e.yAxis.title ? t.yAxisTitleWidth : 0, ("pie" == e.type || "ring" == e.type) && (t.pieChartLinePadding = !1 === e.dataLabel ? 0 : e.extra.pie.labelWidth * e.pixelRatio || t.pieChartLinePadding * e.pixelRatio), "rose" == e.type && (t.pieChartLinePadding = !1 === e.dataLabel ? 0 : e.extra.rose.labelWidth * e.pixelRatio || t.pieChartLinePadding * e.pixelRatio), t.pieChartTextPadding = !1 === e.dataLabel ? 0 : t.pieChartTextPadding * e.pixelRatio, t.yAxisSplit = e.yAxis.splitNumber ? e.yAxis.splitNumber : config.yAxisSplit, t.rotate = e.rotate, e.rotate) {var _t30 = e.width,i = e.height;e.width = i, e.height = _t30;}e.padding = e.padding ? e.padding : t.padding;for (var _t31 = 0; 4 > _t31; _t31++) {e.padding[_t31] *= e.pixelRatio;}t.yAxisWidth = config.yAxisWidth * e.pixelRatio, t.xAxisHeight = config.xAxisHeight * e.pixelRatio, e.enableScroll && e.xAxis.scrollShow && (t.xAxisHeight += 6 * e.pixelRatio), t.xAxisLineHeight = config.xAxisLineHeight * e.pixelRatio, t.fontSize = e.fontSize, t.titleFontSize = config.titleFontSize * e.pixelRatio, t.subtitleFontSize = config.subtitleFontSize * e.pixelRatio, t.toolTipPadding = config.toolTipPadding * e.pixelRatio, t.toolTipLineHeight = config.toolTipLineHeight * e.pixelRatio, t.columePadding = config.columePadding * e.pixelRatio, e.$this = e.$this ? e.$this : this, this.context = uni.createCanvasContext(e.canvasId, e.$this), e.chartData = {}, this.event = new Event(), this.scrollOption = { currentOffset: 0, startTouchX: 0, distance: 0, lastMoveTime: 0 }, this.opts = e, this.config = t, drawCharts.call(this, e.type, e, t, this.context);};Charts.prototype.updateData = function () {var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};this.opts = assign({}, this.opts, e), this.opts.updateData = !0;var t = e.scrollPosition || "current";switch (t) {case "current":this.opts._scrollDistance_ = this.scrollOption.currentOffset;break;case "left":this.opts._scrollDistance_ = 0, this.scrollOption = { currentOffset: 0, startTouchX: 0, distance: 0, lastMoveTime: 0 };break;case "right":var _e44 = calYAxisData(this.opts.series, this.opts, this.config),i = _e44.yAxisWidth;this.config.yAxisWidth = i;var a = 0,o = getXAxisPoints(this.opts.categories, this.opts, this.config),n = o.xAxisPoints,l = o.startX,r = o.endX,s = o.eachSpacing,d = s * (n.length - 1);a = r - l - d, this.scrollOption = { currentOffset: a, startTouchX: a, distance: 0, lastMoveTime: 0 }, this.opts._scrollDistance_ = a;}drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);}, Charts.prototype.zoom = function () {var e = Math.round,t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.opts.xAxis.itemCount;if (!0 !== this.opts.enableScroll) return void console.log("\u8BF7\u542F\u7528\u6EDA\u52A8\u6761\u540E\u4F7F\u7528\uFF01");var i = e(Math.abs(this.scrollOption.currentOffset) / this.opts.chartData.eachSpacing) + e(this.opts.xAxis.itemCount / 2);this.opts.animation = !1, this.opts.xAxis.itemCount = t.itemCount;var a = calYAxisData(this.opts.series, this.opts, this.config),o = a.yAxisWidth;this.config.yAxisWidth = o;var n = 0,l = getXAxisPoints(this.opts.categories, this.opts, this.config),r = l.xAxisPoints,s = l.startX,d = l.endX,h = l.eachSpacing,x = d - s,c = x - h * (r.length - 1);n = x / 2 - h * i, 0 < n && (n = 0), n < c && (n = c), this.scrollOption = { currentOffset: n, startTouchX: n, distance: 0, lastMoveTime: 0 }, this.opts._scrollDistance_ = n, drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);}, Charts.prototype.stopAnimation = function () {this.animationInstance && this.animationInstance.stop();}, Charts.prototype.addEventListener = function (e, t) {this.event.addEventListener(e, t);}, Charts.prototype.getCurrentDataIndex = function (t) {var e = null;if (e = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0], e) {var i = getTouches(e, this.opts, t);return "pie" === this.opts.type || "ring" === this.opts.type || "rose" === this.opts.type ? findPieChartCurrentIndex({ x: i.x, y: i.y }, this.opts.chartData.pieData) : "radar" === this.opts.type ? findRadarChartCurrentIndex({ x: i.x, y: i.y }, this.opts.chartData.radarData, this.opts.categories.length) : "funnel" === this.opts.type ? findFunnelChartCurrentIndex({ x: i.x, y: i.y }, this.opts.chartData.funnelData) : "map" === this.opts.type ? findMapChartCurrentIndex({ x: i.x, y: i.y }, this.opts) : "word" === this.opts.type ? findWordChartCurrentIndex({ x: i.x, y: i.y }, this.opts.chartData.wordCloudData) : findCurrentIndex({ x: i.x, y: i.y }, this.opts.chartData.calPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));}return -1;}, Charts.prototype.getLegendDataIndex = function (t) {var e = null;if (e = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0], e) {var i = getTouches(e, this.opts, t);return findLegendIndex({ x: i.x, y: i.y }, this.opts.chartData.legendData);}return -1;}, Charts.prototype.touchLegend = function (t) {var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},i = null;if (i = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0], i) {var a = getTouches(i, this.opts, t),o = this.getLegendDataIndex(t);0 <= o && (this.opts.series[o].show = !this.opts.series[o].show, this.opts.animation = !!e.animation, this.opts._scrollDistance_ = this.scrollOption.currentOffset, drawCharts.call(this, this.opts.type, this.opts, this.config, this.context));}}, Charts.prototype.showToolTip = function (t) {var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},i = null;i = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0], i || console.log("touchError");var a = getTouches(i, this.opts, t),o = this.scrollOption.currentOffset,n = assign({}, this.opts, { _scrollDistance_: o, animation: !1 });if ("line" === this.opts.type || "area" === this.opts.type || "column" === this.opts.type) {var l = this.getCurrentDataIndex(t);if (-1 < l) {var r = getSeriesDataItem(this.opts.series, l);if (0 !== r.length) {var s = getToolTipData(r, this.opts.chartData.calPoints, l, this.opts.categories, e),d = s.textList,h = s.offset;h.y = a.y, n.tooltip = { textList: d, offset: h, option: e, index: l };}}drawCharts.call(this, n.type, n, this.config, this.context);}if ("mix" === this.opts.type) {var l = this.getCurrentDataIndex(t);if (-1 < l) {var o = this.scrollOption.currentOffset,n = assign({}, this.opts, { _scrollDistance_: o, animation: !1 }),r = getSeriesDataItem(this.opts.series, l);if (0 !== r.length) {var x = getMixToolTipData(r, this.opts.chartData.calPoints, l, this.opts.categories, e),d = x.textList,h = x.offset;h.y = a.y, n.tooltip = { textList: d, offset: h, option: e, index: l };}}drawCharts.call(this, n.type, n, this.config, this.context);}if ("candle" === this.opts.type) {var l = this.getCurrentDataIndex(t);if (-1 < l) {var o = this.scrollOption.currentOffset,n = assign({}, this.opts, { _scrollDistance_: o, animation: !1 }),r = getSeriesDataItem(this.opts.series, l);if (0 !== r.length) {var s = getCandleToolTipData(this.opts.series[0].data, r, this.opts.chartData.calPoints, l, this.opts.categories, this.opts.extra.candle, e),d = s.textList,h = s.offset;h.y = a.y, n.tooltip = { textList: d, offset: h, option: e, index: l };}}drawCharts.call(this, n.type, n, this.config, this.context);}if ("pie" === this.opts.type || "ring" === this.opts.type || "rose" === this.opts.type || "funnel" === this.opts.type) {var l = this.getCurrentDataIndex(t);if (-1 < l) {var o = this.scrollOption.currentOffset,n = assign({}, this.opts, { _scrollDistance_: o, animation: !1 }),r = this.opts._series_[l],d = [{ text: e.format ? e.format(r) : r.name + ": " + r.data, color: r.color }],h = { x: a.x, y: a.y };n.tooltip = { textList: d, offset: h, option: e, index: l };}drawCharts.call(this, n.type, n, this.config, this.context);}if ("map" === this.opts.type || "word" === this.opts.type) {var l = this.getCurrentDataIndex(t);if (-1 < l) {var o = this.scrollOption.currentOffset,n = assign({}, this.opts, { _scrollDistance_: o, animation: !1 }),r = this.opts._series_[l],d = [{ text: e.format ? e.format(r) : r.properties.name, color: r.color }],h = { x: a.x, y: a.y };n.tooltip = { textList: d, offset: h, option: e, index: l };}n.updateData = !1, drawCharts.call(this, n.type, n, this.config, this.context);}if ("radar" === this.opts.type) {var l = this.getCurrentDataIndex(t);if (-1 < l) {var o = this.scrollOption.currentOffset,n = assign({}, this.opts, { _scrollDistance_: o, animation: !1 }),r = getSeriesDataItem(this.opts.series, l);if (0 !== r.length) {var d = r.map(function (t) {return { text: e.format ? e.format(t) : t.name + ": " + t.data, color: t.color };}),h = { x: a.x, y: a.y };n.tooltip = { textList: d, offset: h, option: e, index: l };}}drawCharts.call(this, n.type, n, this.config, this.context);}}, Charts.prototype.translate = function (e) {this.scrollOption = { currentOffset: e, startTouchX: e, distance: 0, lastMoveTime: 0 };var t = assign({}, this.opts, { _scrollDistance_: e, animation: !1 });drawCharts.call(this, this.opts.type, t, this.config, this.context);}, Charts.prototype.scrollStart = function (t) {var e = null;e = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0];var i = getTouches(e, this.opts, t);e && !0 === this.opts.enableScroll && (this.scrollOption.startTouchX = i.x);}, Charts.prototype.scroll = function (t) {0 === this.scrollOption.lastMoveTime && (this.scrollOption.lastMoveTime = Date.now());var e = this.opts.extra.touchMoveLimit || 20,i = Date.now(),a = i - this.scrollOption.lastMoveTime;if (!(a < Math.floor(1e3 / e))) {this.scrollOption.lastMoveTime = i;var o = null;if (o = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0], o && !0 === this.opts.enableScroll) {var n,l = getTouches(o, this.opts, t);n = l.x - this.scrollOption.startTouchX;var r = this.scrollOption.currentOffset,s = calValidDistance(this, r + n, this.opts.chartData, this.config, this.opts);this.scrollOption.distance = n = s - r;var d = assign({}, this.opts, { _scrollDistance_: r + n, animation: !1 });return drawCharts.call(this, d.type, d, this.config, this.context), r + n;}}}, Charts.prototype.scrollEnd = function () {if (!0 === this.opts.enableScroll) {var e = this.scrollOption,t = e.currentOffset,i = e.distance;this.scrollOption.currentOffset = t + i, this.scrollOption.distance = 0;}},  true && "object" == typeof module.exports && (module.exports = Charts);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 287:
/*!**********************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/api/data.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.queryFeeReport = exports.queryWarningCustomer = exports.queryCashAccountDetailReport = exports.queryCashAccountReport = exports.queryPayDetail = exports.queryPay = exports.queryReceiveDetail = exports.queryReceive = exports.queryPurchaseReturnDetail = exports.queryPurchaseDetail = exports.querySalesReturnDetail = exports.querySalesDetail = exports.querySlowSellingProduct = exports.queryHotSellingProduct = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var queryHotSellingProduct = function queryHotSellingProduct(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QueryHotSellingProduct',
    data: data,
    method: 'post' });

};exports.queryHotSellingProduct = queryHotSellingProduct;

var querySlowSellingProduct = function querySlowSellingProduct(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QuerySlowSellingProduct',
    data: data,
    method: 'post' });

};exports.querySlowSellingProduct = querySlowSellingProduct;

var querySalesDetail = function querySalesDetail(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QuerySalesDetail',
    data: data,
    method: 'post' });

};exports.querySalesDetail = querySalesDetail;

var querySalesReturnDetail = function querySalesReturnDetail(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QuerySalesReturnDetail',
    data: data,
    method: 'post' });

};exports.querySalesReturnDetail = querySalesReturnDetail;

var queryPurchaseDetail = function queryPurchaseDetail(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QueryPurchaseDetail',
    data: data,
    method: 'post' });

};exports.queryPurchaseDetail = queryPurchaseDetail;

var queryPurchaseReturnDetail = function queryPurchaseReturnDetail(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QueryPurchaseReturnDetail',
    data: data,
    method: 'post' });

};exports.queryPurchaseReturnDetail = queryPurchaseReturnDetail;

var queryReceive = function queryReceive(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  console.log(data);
  return _http.default.request({
    url: url + '/QueryReceive',
    data: data,
    method: 'post' });

};exports.queryReceive = queryReceive;

var queryReceiveDetail = function queryReceiveDetail(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QueryReceiveDetail',
    data: data,
    method: 'post' });

};exports.queryReceiveDetail = queryReceiveDetail;

var queryPay = function queryPay(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QueryPay',
    data: data,
    method: 'post' });

};exports.queryPay = queryPay;

var queryPayDetail = function queryPayDetail(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QueryPayDetail',
    data: data,
    method: 'post' });

};exports.queryPayDetail = queryPayDetail;

var queryCashAccountReport = function queryCashAccountReport(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QueryCashAccountReport',
    data: data,
    method: 'post' });

};exports.queryCashAccountReport = queryCashAccountReport;

var queryCashAccountDetailReport = function queryCashAccountDetailReport(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QueryCashAccountDetailReport',
    data: data,
    method: 'post' });

};exports.queryCashAccountDetailReport = queryCashAccountDetailReport;

var queryWarningCustomer = function queryWarningCustomer(url, date) {
  return _http.default.request({
    url: url + '/QueryWarningCustomer?warningDays=' + date,
    method: 'post' });

};exports.queryWarningCustomer = queryWarningCustomer;

var queryFeeReport = function queryFeeReport(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QueryFeeReport',
    data: data,
    method: 'post' });

};exports.queryFeeReport = queryFeeReport;

/***/ }),

/***/ 29:
/*!*************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/helpers/bind.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

>>>>>>> 3bb87a1fbc54a27008b2419f8403b991e2a840fe
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
<<<<<<< HEAD
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},31:
=======

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 31:
/*!***********************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/core/Axios.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 28);
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ 32);
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 33);
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 34);
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ 50);

/**
                                             * Create a new instance of Axios
                                             *
                                             * @param {Object} instanceConfig The default config for the instance
                                             */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager() };

}

/**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url }));

  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data }));

  };
});

module.exports = Axios;

/***/ }),

/***/ 32:
>>>>>>> 3bb87a1fbc54a27008b2419f8403b991e2a840fe
/*!*****************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/helpers/buildURL.js ***!
  \*****************************************************************************************************/
<<<<<<< HEAD
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./../utils */28),i=n(/*! ../helpers/buildURL */32),r=n(/*! ./InterceptorManager */33),a=n(/*! ./dispatchRequest */34),s=n(/*! ./mergeConfig */50);function u(t){this.defaults=t,this.interceptors={request:new r,response:new r}}u.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=s(this.defaults,t)).method=t.method?t.method.toLowerCase():"get";var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},u.prototype.getUri=function(t){return t=s(this.defaults,t),i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(t){u.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){u.prototype[t]=function(e,n,i){return this.request(o.merge(i||{},{method:t,url:e,data:n}))}}),t.exports=u},32:
/*!***********************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/helpers/buildURL.js ***!
  \***********************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./../utils */28);function i(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var r;if(n)r=n(e);else if(o.isURLSearchParams(e))r=e.toString();else{var a=[];o.forEach(e,function(t,e){null!=t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(i(e)+"="+i(t))}))}),r=a.join("&")}if(r){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t}},33:
/*!******************************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/core/InterceptorManager.js ***!
  \******************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./../utils */28);function i(){this.handlers=[]}i.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=i},34:
/*!***************************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/core/dispatchRequest.js ***!
  \***************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./../utils */28),i=n(/*! ./transformData */35),r=n(/*! ../cancel/isCancel */36),a=n(/*! ../defaults */37),s=n(/*! ./../helpers/isAbsoluteURL */48),u=n(/*! ./../helpers/combineURLs */49);function l(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return l(t),t.baseURL&&!s(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return l(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return r(e)||(l(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},35:
/*!*************************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/core/transformData.js ***!
  \*************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./../utils */28);t.exports=function(t,e,n){return o.forEach(n,function(n){t=n(t,e)}),t}},36:
/*!**********************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/cancel/isCancel.js ***!
  \**********************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},37:
/*!***************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/defaults.js ***!
  \***************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(e){var o=n(/*! ./utils */28),i=n(/*! ./helpers/normalizeHeaderName */40),r={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s,u={adapter:(void 0!==e&&"[object process]"===Object.prototype.toString.call(e)?s=n(/*! ./adapters/http */41):"undefined"!=typeof XMLHttpRequest&&(s=n(/*! ./adapters/xhr */41)),s),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){u.headers[t]={}}),o.forEach(["post","put","patch"],function(t){u.headers[t]=o.merge(r)}),t.exports=u}).call(this,n(/*! ./../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */38))},38:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */function(t,e,n){var o,i;e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},i="/",e.cwd=function(){return i},e.chdir=function(t){o||(o=n(/*! path */39)),i=o.resolve(t,i)},e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},39:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */function(t,e,n){(function(t){function n(t,e){for(var n=0,o=t.length-1;o>=0;o--){var i=t[o];"."===i?t.splice(o,1):".."===i?(t.splice(o,1),n++):n&&(t.splice(o,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return o.exec(t).slice(1)};function r(t,e){if(t.filter)return t.filter(e);for(var n=[],o=0;o<t.length;o++)e(t[o],o,t)&&n.push(t[o]);return n}e.resolve=function(){for(var e="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,o="/"===a.charAt(0))}return(o?"/":"")+(e=n(r(e.split("/"),function(t){return!!t}),!o).join("/"))||"."},e.normalize=function(t){var o=e.isAbsolute(t),i="/"===a(t,-1);return(t=n(r(t.split("/"),function(t){return!!t}),!o).join("/"))||o||(t="."),t&&i&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function o(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=o(t.split("/")),r=o(n.split("/")),a=Math.min(i.length,r.length),s=a,u=0;u<a;u++)if(i[u]!==r[u]){s=u;break}var l=[];for(u=s;u<i.length;u++)l.push("..");return(l=l.concat(r.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),n=e[0],o=e[1];return n||o?(o&&(o=o.substr(0,o.length-1)),n+o):"."},e.basename=function(t,e){var n=i(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return i(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n(/*! ./../node-libs-browser/mock/process.js */38))},4:
/*!***************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/pages.json ***!
  \***************************************************************************/
/*! no static exports found */function(t,e,n){},40:
/*!**********************************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ../utils */28);t.exports=function(t,e){o.forEach(t,function(n,o){o!==e&&o.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[o])})}},41:
/*!*******************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/adapters/xhr.js ***!
  \*******************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./../utils */28),i=n(/*! ./../core/settle */42),r=n(/*! ./../helpers/buildURL */32),a=n(/*! ./../helpers/parseHeaders */45),s=n(/*! ./../helpers/isURLSameOrigin */46),u=n(/*! ../core/createError */43);t.exports=function(t){return new Promise(function(e,l){var c=t.data,p=t.headers;o.isFormData(c)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",f=t.auth.password||"";p.Authorization="Basic "+btoa(h+":"+f)}if(d.open(t.method.toUpperCase(),r(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,o={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:t,request:d};i(e,l,o),d=null}},d.onabort=function(){d&&(l(u("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){l(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){l(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},o.isStandardBrowserEnv()){var g=n(/*! ./../helpers/cookies */47),m=(t.withCredentials||s(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;m&&(p[t.xsrfHeaderName]=m)}if("setRequestHeader"in d&&o.forEach(p,function(t,e){void 0===c&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),l(t),d=null)}),void 0===c&&(c=null),d.send(c)})}},411:
/*!**********************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/components/uni-icons/icons.js ***!
  \**********************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o;function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(i(o={home_xiaoshou:"",home_caigou:"",home_khgys:"",home_chanpin:"",home_skd:"",home_fkd:"",home_fyd:"",home_thd:"",home_qichu:"",home_pandian:"",sale:"",cost:"",purchase:"","purchase-fill":"","early-stage":"",inventory:"",stock:"","stock-fill":"",customer:"","customer-fill":"",multiple:"","multiple-fill":"",search:"",home:"","home-fill":"",user:"","user-fill":"",profile:"",add:"",back:"",arrow:"","arrow-down":"","arrow-up":"","sort-up":"","sort-down":"",print:"",location:"","location-fill":"",data:"","data-fill":"",phone:"",kefu:"",mobile:"",product:"","product-fill":"",finance:"","finance-fill":"",edit:"","edit-fill":"",refresh:"",delete:"",email:"",company:"",contacts:"",classify:"","classify-fill":"",unit:"","unit-fill":"","identifying-code":"",clear:"",receipt:"",payment:"","return-order":"","chart-line":"","chart-column":"",yujing:"","yujing-fill":"",rexiao:"",zhixiao:"",circle:"",type:"",shoukuan:"",fukuan:""},"yujing",""),i(o,"fenxi",""),i(o,"fenxi2",""),i(o,"lr-change",""),i(o,"filter",""),i(o,"right",""),i(o,"calendar",""),i(o,"c-phone",""),i(o,"c-position",""),i(o,"c-search",""),i(o,"c-search-log",""),i(o,"c-home",""),i(o,"c-email",""),i(o,"c-right",""),i(o,"c-type",""),i(o,"c-unit",""),i(o,"c-print",""),i(o,"c-contacts",""),i(o,"c-discount",""),i(o,"c-amount",""),i(o,"c-product",""),i(o,"c-success",""),i(o,"weixin",""),i(o,"zhifubao",""),i(o,"xianjin",""),i(o,"yinhang",""),i(o,"stock-info",""),i(o,"tips",""),o);e.default=r},42:
=======
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 28);

function encode(val) {
  return encodeURIComponent(val).
  replace(/%40/gi, '@').
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ 33:
/*!************************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/core/InterceptorManager.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 28);

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ 34:
/*!*********************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/core/dispatchRequest.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 28);
var transformData = __webpack_require__(/*! ./transformData */ 35);
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 36);
var defaults = __webpack_require__(/*! ../defaults */ 37);
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ 48);
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ 49);

/**
                                                        * Throws a `Cancel` if cancellation has been requested.
                                                        */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
  config.data,
  config.headers,
  config.transformRequest);


  // Flatten headers
  config.headers = utils.merge(
  config.headers.common || {},
  config.headers[config.method] || {},
  config.headers || {});


  utils.forEach(
  ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
  function cleanHeaderConfig(method) {
    delete config.headers[method];
  });


  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
    response.data,
    response.headers,
    config.transformResponse);


    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
        reason.response.data,
        reason.response.headers,
        config.transformResponse);

      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ 35:
/*!*******************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/core/transformData.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 28);

/**
                                    * Transform the data for a request or a response
                                    *
                                    * @param {Object|String} data The data to be transformed
                                    * @param {Array} headers The headers for the request or response
                                    * @param {Array|Function} fns A single function or Array of functions
                                    * @returns {*} The resulting transformed data
                                    */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),

/***/ 36:
/*!****************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/cancel/isCancel.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ 37:
/*!*********************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/defaults.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ 28);
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 40);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded' };


function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ 41);
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ 41);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
    utils.isArrayBuffer(data) ||
    utils.isBuffer(data) ||
    utils.isStream(data) ||
    utils.isFile(data) ||
    utils.isBlob(data))
    {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  } };


defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*' } };



utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 38)))

/***/ }),

/***/ 38:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 39);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 39:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 38)))

/***/ }),

/***/ 4:
/*!*********************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/pages.json ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 40:
/*!****************************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 28);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ 405:
/*!****************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/components/uni-icons/icons.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _home_xiaoshou$home_c;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = (_home_xiaoshou$home_c = {
  'home_xiaoshou': "\uE603",
  'home_caigou': "\uE608",
  'home_khgys': "\uE609",
  'home_chanpin': "\uE60A",
  'home_skd': "\uE60B",
  'home_fkd': "\uE60C",
  'home_fyd': "\uE60D",
  'home_thd': "\uE60E",
  'home_qichu': "\uE615",
  'home_pandian': "\uE616",
  'sale': "\uE622",
  'cost': "\uE604",
  'purchase': "\uE887",
  'purchase-fill': "\uE888",
  'early-stage': "\uE640",
  'inventory': "\uE67F",
  'stock': "\uE88F",
  'stock-fill': "\uE890",
  'customer': "\uE8A8",
  'customer-fill': "\uE8A9",
  'multiple': "\uE8B5",
  'multiple-fill': "\uE8B4",
  'search': "\uE8B8",
  'home': "\uE8BA",
  'home-fill': "\uE8B9",
  'user': "\uE8C8",
  'user-fill': "\uE8C9",
  'profile': "\uE8CA",
  'add': "\uE8E1",
  'back': "\uE8EF",
  'arrow': "\uE8F1",
  'arrow-down': "\uE6AA",
  'arrow-up': "\uE632",
  'sort-up': "\uE79D",
  'sort-down': "\uE689",
  'print': "\uE63D",
  'location': "\uE8FE",
  'location-fill': "\uE8FF",
  'data': "\uE902",
  'data-fill': "\uE905",
  'phone': "\uE8BD",
  'kefu': "\uE617",
  'mobile': "\uE8DC",
  'product': "\uE8A1",
  'product-fill': "\uE8A0",
  'finance': "\uE8AF",
  'finance-fill': "\uE8AE",
  'edit': "\uE8CC",
  'edit-fill': "\uE8CD",
  'refresh': "\uE8FC",
  'delete': "\uE775",
  'email': "\uE60F",
  'company': "\uEDB4",
  'contacts': "\uE605",
  'classify': "\uE898",
  'classify-fill': "\uE897",
  'unit': "\uE8A3",
  'unit-fill': "\uE8A2",
  'identifying-code': "\uE6BA",
  'clear': "\uE713",
  'receipt': "\uE668",
  'payment': "\uE691",
  'return-order': "\uE6FE",
  'chart-line': "\uE906",
  'chart-column': "\uE904",
  'yujing': "\uE8ED",
  'yujing-fill': "\uE8EC",
  'rexiao': "\uE606",
  'zhixiao': "\uE607",
  'circle': "\uE601",
  'type': "\uE625",
  'shoukuan': "\uE62D",
  'fukuan': "\uE602" }, _defineProperty(_home_xiaoshou$home_c, "yujing",
"\uE639"), _defineProperty(_home_xiaoshou$home_c,
'fenxi', "\uE623"), _defineProperty(_home_xiaoshou$home_c,
'fenxi2', "\uE61D"), _defineProperty(_home_xiaoshou$home_c,
'lr-change', "\uE613"), _defineProperty(_home_xiaoshou$home_c,
'filter', "\uE612"), _defineProperty(_home_xiaoshou$home_c,
'right', "\uE7A3"), _defineProperty(_home_xiaoshou$home_c,
'calendar', "\uE8CF"), _defineProperty(_home_xiaoshou$home_c,
'c-phone', "\uE6CB"), _defineProperty(_home_xiaoshou$home_c,
'c-position', "\uE611"), _defineProperty(_home_xiaoshou$home_c,
'c-search', "\uE736"), _defineProperty(_home_xiaoshou$home_c,
'c-search-log', "\uE631"), _defineProperty(_home_xiaoshou$home_c,
'c-home', "\uE610"), _defineProperty(_home_xiaoshou$home_c,
'c-email', "\uE626"), _defineProperty(_home_xiaoshou$home_c,
'c-right', "\uE69E"), _defineProperty(_home_xiaoshou$home_c,
'c-type', "\uE655"), _defineProperty(_home_xiaoshou$home_c,
'c-unit', "\uE630"), _defineProperty(_home_xiaoshou$home_c,
'c-print', "\uE68B"), _defineProperty(_home_xiaoshou$home_c,
'c-contacts', "\uE61C"), _defineProperty(_home_xiaoshou$home_c,
'c-discount', "\uE62F"), _defineProperty(_home_xiaoshou$home_c,
'c-amount', "\uE621"), _defineProperty(_home_xiaoshou$home_c,
'c-product', "\uE7A6"), _defineProperty(_home_xiaoshou$home_c,
'weixin', "\uE65D"), _defineProperty(_home_xiaoshou$home_c,
'zhifubao', "\uE663"), _defineProperty(_home_xiaoshou$home_c,
'xianjin', "\uE637"), _defineProperty(_home_xiaoshou$home_c,
'yinhang', "\uE614"), _defineProperty(_home_xiaoshou$home_c,
'stock-info', "\uE67A"), _home_xiaoshou$home_c);exports.default = _default;

/***/ }),

/***/ 41:
/*!*************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/adapters/xhr.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 28);
var settle = __webpack_require__(/*! ./../core/settle */ 42);
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 32);
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 45);
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 46);
var createError = __webpack_require__(/*! ../core/createError */ 43);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request };


      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
      request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ 47);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
      cookies.read(config.xsrfCookieName) :
      undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),

/***/ 42:
/*!************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/core/settle.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ 43);

/**
                                             * Resolve or reject a Promise based on response status.
                                             *
                                             * @param {Function} resolve A function that resolves the promise.
                                             * @param {Function} reject A function that rejects the promise.
                                             * @param {object} response The response.
                                             */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
    'Request failed with status code ' + response.status,
    response.config,
    null,
    response.request,
    response));

  }
};

/***/ }),

/***/ 43:
/*!*****************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/core/createError.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ 44);

/**
                                               * Create an Error with the specified message, config, error code, request and response.
                                               *
                                               * @param {string} message The error message.
                                               * @param {Object} config The config.
                                               * @param {string} [code] The error code (for example, 'ECONNABORTED').
                                               * @param {Object} [request] The request.
                                               * @param {Object} [response] The response.
                                               * @returns {Error} The created error.
                                               */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ 44:
>>>>>>> 3bb87a1fbc54a27008b2419f8403b991e2a840fe
/*!******************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/core/enhanceError.js ***!
  \******************************************************************************************************/
<<<<<<< HEAD
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./createError */43);t.exports=function(t,e,n){var i=n.config.validateStatus;!i||i(n.status)?t(n):e(o("Request failed with status code "+n.status,n.config,null,n.request,n))}},43:
/*!***********************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/core/createError.js ***!
  \***********************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./enhanceError */44);t.exports=function(t,e,n,i,r){var a=new Error(t);return o(a,e,n,i,r)}},44:
=======
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Update an Error with the specified config, error code, and response.
               *
               * @param {Error} error The error to update.
               * @param {Object} config The config.
               * @param {string} [code] The error code (for example, 'ECONNABORTED').
               * @param {Object} [request] The request.
               * @param {Object} [response] The response.
               * @returns {Error} The error.
               */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code };

  };
  return error;
};

/***/ }),

/***/ 45:
/*!*********************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 28);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
'age', 'authorization', 'content-length', 'content-type', 'etag',
'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
'last-modified', 'location', 'max-forwards', 'proxy-authorization',
'referer', 'retry-after', 'user-agent'];


/**
                                          * Parse headers into an object
                                          *
                                          * ```
                                          * Date: Wed, 27 Aug 2014 08:58:49 GMT
                                          * Content-Type: application/json
                                          * Connection: keep-alive
                                          * Transfer-Encoding: chunked
                                          * ```
                                          *
                                          * @param {String} headers Headers needing to be parsed
                                          * @returns {Object} Headers parsed into an object
                                          */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {return parsed;}

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),

/***/ 46:
>>>>>>> 3bb87a1fbc54a27008b2419f8403b991e2a840fe
/*!************************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \************************************************************************************************************/
<<<<<<< HEAD
/*! no static exports found */function(t,e,n){"use strict";t.exports=function(t,e,n,o,i){return t.config=e,n&&(t.code=n),t.request=o,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},45:
/*!***************************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \***************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./../utils */28),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,r,a={};return t?(o.forEach(t.split("\n"),function(t){if(r=t.indexOf(":"),e=o.trim(t.substr(0,r)).toLowerCase(),n=o.trim(t.substr(r+1)),e){if(a[e]&&i.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},46:
/*!******************************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./../utils */28);t.exports=o.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var o=t;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=o.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},47:
=======
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 28);

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
                 * Parse a URL to discover it's components
                 *
                 * @param {String} url The URL to be parsed
                 * @returns {Object}
                 */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ?
      urlParsingNode.pathname :
      '/' + urlParsingNode.pathname };

  }

  originURL = resolveURL(window.location.href);

  /**
                                                * Determine if a URL shares the same origin as the current location
                                                *
                                                * @param {String} requestURL The URL to test
                                                * @returns {boolean} True if URL shares the same origin, otherwise false
                                                */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol &&
    parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ 47:
/*!****************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/helpers/cookies.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 28);

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    } };

}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {return null;},
    remove: function remove() {} };

}();

/***/ }),

/***/ 48:
>>>>>>> 3bb87a1fbc54a27008b2419f8403b991e2a840fe
/*!**********************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \**********************************************************************************************************/
<<<<<<< HEAD
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./../utils */28);t.exports=o.isStandardBrowserEnv()?{write:function(t,e,n,i,r,a){var s=[];s.push(t+"="+encodeURIComponent(e)),o.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),o.isString(i)&&s.push("path="+i),o.isString(r)&&s.push("domain="+r),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},48:
/*!****************************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \****************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},49:
/*!**************************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/helpers/combineURLs.js ***!
  \**************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},5:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){function e(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var u=n(/*! ../package.json */6).version,l="__DC_STAT_UUID",c="__DC_UUID_VALUE";function p(){var e="";if("n"===h()){try{e=plus.runtime.getDCloudId()}catch(t){e=""}return e}try{e=t.getStorageSync(l)}catch(t){e=c}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(l,e)}catch(e){t.setStorageSync(l,c)}}return e}var d=function(){return parseInt((new Date).getTime()/1e3)},h=function(){return"wx"},f=function(){var e="";return"wx"!==h()&&"qq"!==h()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},g=function(){return"n"===h()?plus.runtime.version:""},m=function(){var t="";return"n"===h()&&(t=plus.runtime.channel),t},v=0,y=0,x=function(){return v=d(),"n"===h()&&t.setStorageSync("__page__residence__time",d()),v},b=0,A=0,_=function(){var t=(new Date).getTime();return b=t,A=0,t},w=function(){var t=(new Date).getTime();return A=t,t},S=function(t){var e=0;return 0!==b&&(e=A-b),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},P=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===h()?n.$mp&&n.$mp.page.is+i:n.$scope&&n.$scope.route+i||n.$mp&&n.$mp.page.route+i},C=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},T=n(/*! uni-pages?{"type":"style"} */7).default,D=n(/*! uni-stat-config */8).default||n(/*! uni-stat-config */8),k=t.getSystemInfoSync(),O=function(){function e(){r(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:p(),ut:h(),mpn:f(),ak:D.appid,usv:u,v:g(),ch:m(),cn:"",pn:"",ct:"",t:d(),tt:"",p:"android"===k.platform?"a":"i",brand:k.brand||"",md:k.model,sv:k.system.replace(/(Android|iOS)\s/,""),mpsdk:k.SDKVersion||"",mpv:k.version||"",lang:k.language,pr:k.pixelRatio,ww:k.windowWidth,wh:k.windowHeight,sw:k.screenWidth,sh:k.screenHeight}}return s(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(w(),S("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,w();var n=S();_();var o=P(this);this._sendHideRequest({urlref:o,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=P(this),o=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===h()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=T&&T.pages[o]&&T.pages[o].titleNView&&T.pages[o].titleNView.titleText||T&&T.pages[o]&&T.pages[o].navigationBarTitleText||"",this.__licationShow)return _(),this.__licationShow=!1,void(this._lastPageRoute=n);if(w(),this._lastPageRoute=n,S("page").overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}_()}},{key:"_pageHide",value:function(){if(!this.__licationHide){w();var t=S("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var n,o,i=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+i||"",this.statData.t=d(),this.statData.sc=function(e){var n=h(),o="";return e||("wx"===n&&(o=t.getLaunchOptionsSync().scene),o)}(e.scene),this.statData.fvts=(n=t.getStorageSync("First__Visit__Time"),o=0,n?o=n:(o=d(),t.setStorageSync("First__Visit__Time",o),t.removeStorageSync("Last__Visit__Time")),o),this.statData.lvts=function(){var e=t.getStorageSync("Last__Visit__Time"),n=0;return n=e||"",t.setStorageSync("Last__Visit__Time",d()),n}(),this.statData.tvc=function(){var e=t.getStorageSync("Total__Visit__Count"),n=1;return e&&(n=e,n++),t.setStorageSync("Total__Visit__Count",n),n}(),"n"===h()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,o=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:d(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,o=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:d(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,o=t.value,i=void 0===o?"":o,r=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:r,ch:this.statData.ch,e_n:n,e_v:"object"==typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:d(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;D.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var o=this,i=d(),r=this._navigationBarTitle;e.ttn=r.page,e.ttpj=r.config,e.ttc=r.report;var a=this._reportingRequestData;if("n"===h()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===h()&&t.setStorageSync("__UNI__STAT__DATA",a),y=d(),"n"===h()&&(v=t.getStorageSync("__page__residence__time")),!(y-v<10)||n){var s=this._reportingRequestData;"n"===h()&&(s=t.getStorageSync("__UNI__STAT__DATA")),x();var l=[],c=[],p=[],f=function(t){s[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?l.push(n):3===t?p.push(n):c.push(n)})};for(var g in s)f(g);l.push.apply(l,c.concat(p));var m={usv:u,t:i,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===h()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==h()||"a"!==this.statData.p?this._sendRequest(m):setTimeout(function(){o._sendRequest(m)},200):this.imageRequest(m)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},o="";for(var i in e)n[e[i]]=t[e[i]],o+=e[i]+"="+t[e[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,o;(o=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof o&&"object"!=typeof o?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof o&&o.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof o?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}();(function(n){function a(){var n;return r(this,a),(n=e(this,o(a).call(this))).instance=null,t.addInterceptor,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(a,O),s(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),s(a,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,x(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,C(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,C(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){"devtools"===this._platform&&console.info("当前运行环境为开发者工具，不上报数据。");var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:d(),p:this.statData.p};this.request(n)}}]),a})().getInstance();t.report=function(t,e){}}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},50:
/*!***********************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/core/mergeConfig.js ***!
  \***********************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ../utils */28);t.exports=function(t,e){e=e||{};var n={};return o.forEach(["url","method","params","data"],function(t){void 0!==e[t]&&(n[t]=e[t])}),o.forEach(["headers","auth","proxy"],function(i){o.isObject(e[i])?n[i]=o.deepMerge(t[i],e[i]):void 0!==e[i]?n[i]=e[i]:o.isObject(t[i])?n[i]=o.deepMerge(t[i]):void 0!==t[i]&&(n[i]=t[i])}),o.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(o){void 0!==e[o]?n[o]=e[o]:void 0!==t[o]&&(n[o]=t[o])}),n}},51:
/*!********************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/cancel/Cancel.js ***!
  \********************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";function o(t){this.message=t}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,t.exports=o},52:
/*!*************************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/cancel/CancelToken.js ***!
  \*************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o=n(/*! ./Cancel */51);function i(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t;return{token:new i(function(e){t=e}),cancel:t}},t.exports=i},53:
/*!*********************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/node_modules/axios/lib/helpers/spread.js ***!
  \*********************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},54:
/*!********************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/js-sdk/uni-axios/adapter.js ***!
  \********************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.adapter=void 0;var o=n(/*! axios/lib/utils */28),i=s(n(/*! axios/lib/core/createError */43)),r=s(n(/*! axios/lib/helpers/buildURL */32)),a=s(n(/*! axios/lib/core/settle */42));function s(t){return t&&t.__esModule?t:{default:t}}var u=new(s(n(/*! ./await-timeout */55)).default);e.adapter=function(e){return new Promise(function(n,s){var l=((0,o.isString)(e.method)?e.method:"GET").toUpperCase(),c=(0,r.default)(e.url,e.params,e.paramsSerializer),p=(0,o.isObject)(e.headers)?e.headers:{},d=e.data,h=t.request({method:l,url:c,header:p,data:"POST"===l||"PUT"===l||"PATCH"===l?d:"",responseType:"arraybuffer"===e.responseType?"arraybuffer":"text",dataType:"json"===e.responseType?"json":e.responseType,success:function(t){(0,a.default)(n,s,{data:t.data,status:t.statusCode,statusText:"",headers:t.header,config:e,request:h})},fail:function(){var t=(0,i.default)("网络错误",e,void 0,h);s(t)},complete:function(){u.clear()}});e.timeout&&u.set(e.timeout).then(function(){s(new Error("请求超时")),h.abort()})})}}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},55:
=======
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ 49:
/*!********************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/helpers/combineURLs.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ?
  baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') :
  baseURL;
};

/***/ }),

/***/ 5:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _package = __webpack_require__(/*! ../package.json */ 6);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["mp-weixin"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 7).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 8).default || __webpack_require__(/*! uni-stat-config */ 8);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 50:
/*!*****************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/core/mergeConfig.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 28);

/**
                                  * Config-specific merge-function which creates a new config-object
                                  * by merging two configuration objects together.
                                  *
                                  * @param {Object} config1
                                  * @param {Object} config2
                                  * @returns {Object} New object resulting from merging config2 to config1
                                  */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
  'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
  'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
  'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
  'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
  'socketPath'],
  function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};

/***/ }),

/***/ 51:
>>>>>>> 3bb87a1fbc54a27008b2419f8403b991e2a840fe
/*!**************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/cancel/Cancel.js ***!
  \**************************************************************************************************/
<<<<<<< HEAD
/*! no static exports found */function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i;t.exports=((i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=null,this._delay=null}var e,n,i;return e=t,(n=[{key:"set",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise(function(o,i){e.clear();var r=n?function(){return i("string"==typeof(t="function"==typeof(t=n)?t():t)?new Error(t):t);var t}:o;e._id=setTimeout(r,t),e._delay=t})}},{key:"wrap",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=function(t,e){return Promise.resolve(t).then(function(t){return e(),t},function(t){return e(),Promise.reject(t)})}(t,function(){return n.clear()}),r=this.set(e,o);return Promise.race([i,r])}},{key:"clear",value:function(){this._id&&clearTimeout(this._id)}},{key:"id",get:function(){return this._id}},{key:"delay",get:function(){return this._delay}}])&&o(e.prototype,n),i&&o(e,i),t}()).set=function(t,e){return(new i).set(t,e)},i.wrap=function(t,e,n){return(new i).wrap(t,e,n)},i)},56:
/*!*********************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/config/common.js ***!
  \*********************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";var o;function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.api=void 0;var r=(i(o={baseUrl:"https://test.saas.yunmengzhu.com",contactUnit:"/api/ContactUnit",baseArea:"/api/BseArea",baseProduct:"/api/BseProduct",baseUser:"/api/BaseUser",capFee:"/api/CapFee",capPayment:"/api/CapPayment",capreceipt:"/api/Capreceipt",cashAccount:"/api/CashAccount",dept:"/api/Dept",purPurchaseOrder:"/api/PurPurchaseOrder",report:"/api/Report",salesOrder:"/api/SalesOrder",stkStock:"/api/StkStock",QueryWarningStock:"/api/StkStock/QueryWarningStock",QueryInit:"/api/StkStock/QueryInit",QueryInventory:"/api/StkStock/QueryInventory",token:"/api/Token",tokenRefresh:"/api/BseUser/RefreshToken",login:"/api/BseUser/Login",BindUserOpenId:"/api/BseUser/BindUserOpenId",UnbindUserOpenId:"/api/BseUser/UnbindUserOpenId ",ChangePassword:"/api/BseUser/ChangePassword",ResetPassword:"/api/BseUser/ResetPassword",Regist:"/api/BseUser/Regist",GetUserInfo:"/api/BseUser/GetUserInfo",GetUserInfoByUserId:"/api/BseUser/GetUserInfoByUserId",SaveUserInfo:"/api/BseUser/SaveUserInfo",SaveUserStatus:"/api/BseUser/SaveUserStatus",GetUserList:"/api/BseUser/GetUserList",GetRoleList:"api/BseRole/GetRoleList",SaveUser:"/api/BseUser/SaveUser",CustomerSave:"/api/Customer/SaveCustomer",MyCashAccount:"/api/CashAccount/Query",MyCashAccountCreate:"/api/CashAccount/Create",MyCashAccountGet:"/api/CashAccount/Get/",MyCashAccountUpdate:"/api/CashAccount/Update",UploadImg:"/api/BseUser/UploadImg",GetMyDayLogList:"/api/BseUser/GetMyDayLogList",GetOrderList:"/api/SysOrder/GetMyOrderList",RefundApply:"/api/SysRefund/RefundApply",IntegralExchange:"/api/BseUser/IntegralExchange",AddOrder:"/api/SysOrder/AddOrder",GetCurrentActivity:"/api/SysActivity/GetCurrentActivity",GetMyPromotIntegralList:"/api/BseUser/GetMyPromotIntegralList",GetSmsCode:"/api/SysMessage/SendVerificationCode",GetProductList:"/api/SysProduct/GetProductList",Orderypay:"/api/WeChartPay/OrderPay",GetSharePic:"/api/BseUser/GetSharePic/",GetRefundList:"/api/SysDictionary/GetSysDictionaryList"},"RefundApply","/api/SysRefund/RefundApply"),i(o,"GetFirstActivePrinter","/api/Print/GetFirstActivePrinter"),i(o,"UnBindPrint","api/Print/UnBind"),i(o,"BindPrint","api/Print/Bind"),i(o,"GetWSYLPrinterList","/api/Print/GetWSYLPrinterList"),i(o,"Print","/api/Print"),o);e.api=r},6:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25720200116005",_inBundle:!1,_integrity:"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz",_shasum:"08bb17aba91c84a981f33d74153aa3dd07b578ad",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a129bde60de35f7ef497f43d5a45b4556231995c",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25720200116005"}},620:
/*!***************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/static/image/logo.jpeg ***!
  \***************************************************************************************/
/*! no static exports found */function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBYRXhpZgAATU0AKgAAAAgABAExAAIAAAARAAAAPlEQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAABBZG9iZSBJbWFnZVJlYWR5AAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACQAJADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAoorJ1zxDY6Db77p90rD93Cn3n/AMB71UISnLlirsmc4wXNJ2RqkgAknAHUmua1Xx1o+mlo45DdzD+GHlR9W6flmvPNd8WalrjMkknk2ueIIzgfif4qwq9vD5QrXrP5I8evmj2pL5s7C/8AiNq9wSLRIbRO2F3t+Z4/SsG48Qavdk+dqV0wPYSkD8hxWbRXq08NRp/DFHmzxFWfxSY95ZJDl5GY+5zQkskZykjKfY4plFbWRldmlb+INXtCPJ1K6UDsZSR+R4resPiNq9uQLtIbtO+V2N+Y4/SuPorGphqNT4oo1hiKsPhkz2DSvHWj6kVjkkNpMf4ZuFP0bp+eK6UEEAg5B6EV89Vu6F4s1LQ2VI5POtc8wSHI/A/w15eIyhWvRfyZ6VDNHtVXzPaaKydD8Q2OvW++1fbKo/eQv95P8R71rV4c4ShLlkrM9iE4zXNF3QUUUVJQUUVk+Idch0HS3unw0rfLDHn7zf4DvVQhKclGO7JnNQi5S2RS8VeKodAtvLj2y30g/dx9lH95vb+deR3d5cX909zdStLM5yzMaLy7nv7uS6uZDJNI25mNQV9Xg8HHDw/vdWfNYrFSry8uiCiiiuw5AooooAKKKKACiug8IaHa6/qstpdvMiJAZAYmAOQyjuD61n63YxaZrV3ZQuzxwybVZiCfxxWSrRdR0uq1NXSkqaqdHoZ9FdfpHgyPUfDL6pcXhtWyzIWXKbF6k9+oP5VyFFOtCo5Ri9twqUZ00nJbk9peXFhdJc2srRTIcqymvXPCviqHX7by5NsV9GP3kfZh/eX2/lXjlT2d3PYXcd1bSGOaNtysKwxmDjiI+fRm2FxUqEvLqj3+isnw9rkOvaWl0mFlX5Zo8/db/A9q1q+UnCUJOMt0fSwmpxUo7MQkAEk4A6k14v4s1xtc1l5EY/ZYcxwD27n8f8K9D8daqdN8PSRxtia6PlL6hf4j+XH414/Xt5Rh9HWfojx80r6qkvVhRRXp9n8PtGutNtpWku1kkiV2KyDqQCeq16eIxVPDpOfU8+hhp121DoeYUV6p/wAK00b/AJ+b/wD7+J/8TR/wrTRv+fm//wC/if8AxNc39q4fu/uOj+za/l955XRXqn/CtNG/5+b/AP7+J/8AE02f4d6NBZzOJLtnVGYM0i9cey0f2rh/P7g/s2v5HltT2UKXF/bwSNsjklVGb0BIBNQUV6L1RwJ2Z7D4d8Labot9Jd2V5JO7RmNgzKQASD2H+zWfq3gWx1O+uLmC+k+0yTB5E3KQoLDdxjPTOPer3gPSzp3hyOWRcS3Z8457L/D+nP40zxDpt1ar/a3h5Sl8JCsyxLu84E85Hcg/lz6V8yqtRYlpVNdr/wCZ9F7ODw6bhpvb/I2LyR9J0V/7NtVnNqgUQBsHaAOOh5xzVXw7rs+s6bLqFzaLaW6k7GMmdwHU9BwP8azPCel61ps15qGr3SJHcfvJInYEhv7xPReP88VoazbN4i8PNBot9brG5wSvKsB/DkdOfaspQppum2nqve107mkZza50mtH7uh5Vr+pf2vrt3ej7kj4Tj+EcD9AKza1tU8Nato6GS8tSsIOPNVgyn8v61k19RRcHBKm7pHzlVT525qzZu+E9cbQ9ZSR2P2WbEc49ux/Dr+de0AggEHIPQivnqvYPAuqnUvDyRyNma1PlN6lf4T+XH4V4+b4fRVl6M9TK6+rpP1Rx/wARr83HiBLQH5LWIAj/AGm5P6ba4+tLxBcG78Q6hNnIadwPoDgfoKza9XDU/Z0Yx8jzcRPnqyl5hUv2m4AAE8mAMAbzwKiorZpMyTa2JftVx/z3l/77NH2q4/57y/8AfZqKijlQ+Z9yX7Vcf895f++zR9quMEefLyMH5z0qKijlXYOZ9wrS0C0tr7XLS3vJlit3f5yxxnvtz79PxrNopTTlFpOwQajJNq57ZFqyS+LTpEBHl29ozyBegYsgA/AfzrjT4rvNE8U6naqongluSFR2OIzu5I/wqv8ADT/kY7j/AK9G/wDQ0rL19CvjW7Uck3QIx7kGvHo4WnGtKjLVcqPWqYmpKjGqtHzHpXie70W2t4V1pZHikJCopYgkeoBqh4bu/DE+otFo0MkU+wu2N6ggevOD1q54p0rStUhtl1TUBZrGzFCZVTcTjP3qpeGtC0LTdUafTdXW7nMRUxiZH+XIycLz6VwQ9n9Wd3K/4HZP2n1hWUbficx4+1y5utVl0ohVtrZwRtzlyVB5+mTj61x1b/jUEeL9QBH8Sn/xxawK+gwkIxoQUeyPDxUpSrSb7sK7D4c35t/ED2hPyXURAH+0vI/TdXH1o6Bcm08Q6fNnAWdAfoTg/oarE0/aUZR8icPPkqxl5lGVzJM7nqzE0ynyoY5nQ9VYimVstjJ7hRRRTEFFFFABRRRQAUUUUAXdN1W90e5a4sJvJlZNhbYrZGQccg+gqK4vrm6vmvZpS1wz7y+AOfXiq9FTyR5ua2pXPK3LfQ0NS1zUtXWNb+6aYRklAVAxnr0FQ6fqV3pdz9ospzDLtK7gAeD25qrRSVOCjyJadhupNy5m9Se8vLjULuS6upTLPJjc5A5wMDp7CoKKKpJJWRLbbuwp8TmOZHHVWBplPiQyTIg6swFD2Bbl/X7c2niHUIcYCzuR9Ccj9DWbXYfEawNv4gS7A+S6iBJ/2l4P6ba4+scNU9pRjLyNcRDkqyj5hRRU0VrcXClobeWQA4JRCcflWzaW5kk3sdnF8NbmaCOVdShG9A2DGeMj60//AIVjd/8AQSh/79muaE/iIKqiXVMKMAbpOB6Uef4i/wCeuqf99SV5/Jiv+fq+5HfzYb/n0/vZ0v8AwrG7/wCglD/37NY3iPwlL4dtYJpLtJvNcphUIxxmqfn+Iv8Anrqn/fUlRXC63eIqXK6hOqHKrKHYL9M1VOOIU051E16EVHQcWoU2mZtFKQVYqwIIOCD2pK7ziCvQfD2gaPr3hCWOCMJqCnDyscsrjp/wE/49xWL4CghuPEypPEkqeS52uoYZ49a7e88TaToOoz2S6XciRdu97a3Ta2QCOcjPWvKx1eo5eypJ8ys9D08FRgo+1qNWeh5bbabcXOrR6aFKztN5RGM7TnB/Ln8q7Tx3pWh6XptuILcRXrELH5ZxlR1LD+vXJrq5L3TLHSI9bXTSFZVcCOBfNG7j8+eearadruk+I7/yP7Lm81Yywe6t0xgHpnJ9a5p42rUmqqi1GO+vU6IYSnCLp8y5pbaHjtFb3jSGK38W30UMaRxjZhUUADKKelYNe3Tn7SCn3Vzx6kOSbj2YVo6BbG78Q6fDjIadCfoDk/oKzq7D4c2JuPED3RHyWsRIP+03A/TdWeJqezoyl5F4eHPVjHzOw8daUdS8PSSRrma1Pmr6lf4h+XP4V4/X0KQCCCMg9Qa8X8WaG2h6y8aKfss2ZID7dx+HT8q8vKMRo6L9UelmlDVVV8zCrp/DXjBvDtjNbLZCfzJPMDGXbjgDGMH0rmKK9erShVjyzV0eXTqzpS5oOzPQoviXcTSpFHo6vI7BVUTHJJ6D7tdfresf2LorX0qx+auAIi5AZj2Bx9e3auN8A+HwpOu3wCRRg+Rv4Hu59h2/GsDxd4hOvaoTEx+xw5WFT39W/H+WK8Z4SjVxHs6StGO7/Q9ZYqrToc9R6y2/zOg/4WhL/wBApP8Av+f/AImgfFCTPOkoR7T/AP2NT+DRo2s+HptGlt0W4ALS9Nz88OD6jj6fjXFa5otzoWpPaTjK9Y5AOHX1ralh8JOrKk4Wa83qu+5lUr4qFONRTun5LQq3919u1G6uymzz5Xl25zt3EnGfxqvRRXrJJKyPLbbd2dX8PP8AkaV/64v/AErt9V17WbLUpre08Py3cCY2zKxAbIBPbsSR+FcroXhfxHpksOp2IsmaSLIWRycKwzz/APrrovM8c/8APHS/zP8AjXg4v2dSvzpxatbV2PbwqqU6PI00730Rr3Oo30WgJfRaa8t4yqTaAnIJxkdO30qroutatqF8Yb3RJbKIIWErMSCeOOg/yKuXDax/YaG3S2OqbV3Bs+Xnjd/WsbzPHP8Azx0v8z/jXDThGUGvdvfq2dk5SjJPX7kcN45/5HK//wC2f/ota56uy1/wtr9y15rV/wDYwwTfIsbnoqgcDHoPWuNr6TCTi6UYxd7JL8D5/FQkqrcla7bCvYPAulHTfDySyLia6Pmt6hf4R+XP41554T0Ntc1lI3U/ZYcSTn27D8en517QAAAAMAdAK83N8RoqK9WehldDV1X6IWsnxDocOvaW9q+FlX5oZMfdb/A961qK8OE5QkpR3R7E4KcXGWzPALy0nsLuS1uYzHNG21lNS6U1ourWpvkD2vmASqTj5f8APNer+KvCsOv23mR7Yr6Mfu5OzD+63t/KvI7uzuLC6ktrqJopkOGVhX1WFxUMVTts+v8AwD5vE4aWGnfddD2DUNZ8MtZtZXN/bG3ACmKKQ4wO3ydvasA6p4Bt/wDV2sUuP+ndj/6FXm9FY08shBW55ffY1nmMpO/IvuPSIvGnhawlD2WkOkgGA8dtGh/POam8QapoXiHwibuWYRSqT5KnBkWQfw4HY/yINeY0Vf8AZ1NSU4tprzJ+v1HFxklZhRRRXoHAbkXi/XoYUij1F1RFCqNi8ADA7U7/AITTxD/0En/79p/hWDRWP1aj/IvuRt9Yq/zP72et6rql/bfD6DUY7greNDC5lAHJbbnjGO9cF/wmniH/AKCT/wDftP8ACsp9SvpbUWsl7cPbqABE0rFAB04zjiq1c+HwMKcWppO7vsbV8ZObTg2tO5tXHizXLq2kt579nilUo6lF5B/CsyztJ7+7jtbaMyTSNtVRRaWdxf3UdtaxNLM5wqqK9c8K+FYdAtvMk2y30g/eSdlH91fb+dLE4ilg4e6ld9EPD0KuKn7zdl1Lvh7Q4dB0tLVMNK3zTSY+83+A7VrUUV8vOcpycpbs+jhBQiox2QUUUVJQVk654esdet9l0m2VR+7mT7yf4j2rWoqoTlCXNF2ZM4RmuWSujxbXPCepaGzPJH51rnieMZH4j+GsKvoUgEEEZB6g1zWq+BdH1ItJHGbSY/xQ8KfqvT8sV7eHzdWtWXzR49fK3vSfyZ4/RXYX/wAOdXtyTaPDdp2AbY35Hj9awLjQNXtCfO026UDuIiR+Y4r1aeJo1PhkjzZ4erD4oszqKe8UkZw8bKfcYoSKSQ4SNmPsM1tdGVmMorRt9A1e7I8nTbpge5iIH5nit+w+HOr3BBu3htE7gtvb8hx+tY1MTRp/FJGsMPVn8MWcfW7ofhPUtcZXjj8m1zzPIMD8B/FXoeleBdH00rJJGbuYfxTcqPovT8810oAAAAwB0Ary8Rm6taivmz0qGVveq/kZWh+HrHQbfZapulYfvJn+8/8AgPataiivDnOU5c0ndnsQhGC5YqyCiiipKP/Z"},629:
/*!******************************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/static/image/mine_def_touxiang_3x.png ***!
  \******************************************************************************************************/
/*! no static exports found */function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAMAAAAJixmgAAABmFBMVEX///8AAAD8/Pzc4/u9vb36+vr6+vrl5eXz9PXq6ur9/v719fb////6+vr////6+vrv7+/7+/zt7e3x8fH5+fv6+vr6+vr29/f////6+vr6+vv7+/v6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vry8vPJycn6+vr6+vr5+fr////9/f36+vr6+vr6+vr////+/v79/f36+vr6+vr6+vrn5+e/v7/6+vr6+vrv8/3j5eri4uLR0dHe5fv////+/v79/f36+vr6+vr6+vvj6fv////d4/n4+Pj+/v7+/v79/f36+vv6+vr6+vr////6+vr6+vr4+v7d4/vZ2dnExMTBwcHi6Pz////+/v79/f3d3d3n7Pz+/v7+/v7+/v79/f78/P38/Pz6+vr6+vrz9v3p7vzf5fvg5PTi5O7T09Pv8vz8/P38/Pz6+vv6+vrV1dXNzc3p7f3m6/zk5ejm6/z9/f3g5vvk6vvh6Pvo7Pzp7fvr7/v6+vr6+vrp7vzx8/zv8v3q7vzw8/3r7/319/z09v3y+LxSAAAAiHRSTlPrAOvr61mA6+vr6+vqW+c86+vr63gLMuvhBGp+X1ZVOAJKTSo/FQnr61At69aVZkNB08GhNR4a6+tiEuvr6+vp5KqCIQjr6tvr68u3mnEQBt5dKOvr6+vr5di7kevOxbOwpoZ0Fw7r6+vr6+uXi3luJOvr3evr2Izr6+vksKVGDcSD0r6w65m4uzcA5wAAEddJREFUeNrk2tlPGkEcwPGB7AECC3KVS8HKVRQPBKQmkCoaUrGKJkC0pPXqk+mhL31r//VSZmSAArLzm1lN+n1aHz/ZneOnItN/lrHgmC9ROMv4/VFnt6jfnzkrJHwxk3EZBd4vZuJvTkNeZWzekGMpulzcN4nPAHAi8+v0gzJTH05/ZRImoYkFn1TjDq+iM68jXj0xiUocOFbYWAsrjIXX1gtiVrYgsM+/6FWAeRf9PhP3RICT+UhY4VI4kk+auMYfvO8/JVpO5lM/t81bAPg2uiBPbE3J7tZzh5u1gKbZUTe7pgVqm4e5+m5WWZMnthC9NXGIPzh4tiSP7yZ7+ammoalptU+X2Rt5fEtnQRMo7uDePiWPKfSxvqmhmdM26x9D8phAO5gA8I5z3Dd8lKshhmq5o3FfuHPHBIgrOLEuj+bYu1y1I+bsq5d7Dnm09YQJHhy8s/GP9voigMAFLq7/MW9A3zIcfByXRwrXqRZqroflkeLHJkBgcDI6um6vzhHXzrdG13MUcBkBgmNnIzvzXk5D3NNyeyM79hngng0BF18Pr9yPm0hQmx+HV/ProokhIDg5fBJFthpIYLWtyPAZxfBdw8A/Foe4VwEkuMDVEHnxh0lHYLBv6OR1bInkUvKWY+hU1nH3goKrQ68320AG1cgOveSqSUcA8MnQ6lU2kYFthodW8olpJBHg2zcyLZSzI0Oz50Iy7c3I5CgCnBlavBoyPG1oKWdM04KDg3GZ5t1Ez9KmV6bF6agsAHz8euD1XtrRM2W/dAzcQsjtWgS4sDDwelfRM7Z6I/dbKJhw3MHLMg26euErWaYtm0wCwLH8wOZ8iJ69w4HtOh/jDw5uDExFAfQCCgxMURtB3uD9pYHP2Y5eRPaBz3ppny84Sb2RHHox5SJUnOQJ9tHj6PsqekGtfqfHk48f+Au9TX57EcuXFvhG75lfAOBJ3q8aemFpX0fEcLDvzYvbriZsXW98PMBJun53kWGZ0ezt0nWcBIFHz6NLZEjzrvJ9WkI6uhw4naDgIPXWkfDm3eW7tNQL6alOxUEYOEbvVxdIZCtutfnQkmhIVxf0zhUDgfPC3+9Kylq+f2hTKQWzveM8BLzMf/3OvXJZ1XK502k27yv0nQLAo+t4mR1c4Ls/r1g7lbQ0QxTMtFcXWMHHC/3zF/5i3U1sFQZG/fN44ZgNHOwfwD/tQK6niRepULD9Z/84DjKB4/37swZ7udv43YoGI61/r46zgDP9+Qg2L1gJVzwYBfqzU0Y/+FYmRc4hXMuDxBZi6Twik271gk/6EwNo3ldLkpFglOvPESc6wU4eG/TcnSSBwICt2qkPXJVJe3bAxPMgGQ6278mkqh6wb1HGhVg3LJtVLaclQDbEViAk4xZ9OsDrMukQMXSgVkoSuFJFPUAMHcqk9dnBPyALOHVHtVDzXQqyjH/MCk4uyjivpv9Trkhcq+j/tDWvjFtIzgSmO/Tpue5tuVOSOFfqzOk+jU8JwDkbuMg8Er5KSwJKv2IeFYuzgGOPM8M3vSeSuy0Jqe3WezZ9I4TXsSfBdOh3rCJ9WSVhWZG+Vh0TfxmAJu5YVy/Hq198RRCLySfB+ccZSdP5PUtC0/lVa98JI/8UeIdxZrC1JaG1bYxTxM4T4DjbHXouLQkuPcd2p45PB+8w7lgdSXgdxn1rZyp4Q8YdIV2lJAOyIF0dEcrGNHBCxkUaSFcVyYAqSFeNCMEkpoDX2Y4kl2RILrajaX0SmK7giM4p+E4ypDudk3GEruIJYCfb3xlWJINaYftbhHMS2Cfj3r5DulIlg1KRrt69JaAvE8D+/gp+gVsW3rbYVrF/PDi4QM7gBtJXSzKoFtJXg5zFC8Gx4DMZl0V8l3C6NPOwn+a7iFGWkM7GgpdknN6x0DOd6zHbOq2Z3l/HZvY8SNNK6R0TCWlpHDgh464R4jcnlcrmv81b70pP/b7OOm/+W7kEn5lo1wSVGAOOyrhPiN8gnE6ZHzuY8gfidNN9YH4slQaPxbRPBBX9F3xCtqw1jR/4Hr80inaVm5V0e2DoS1eaZVcPS5u/5wfW1si2dULBk84kOLhsHt+8zeJxuTwW27x5fOUpYODJRMERGVfjBS5ZzcxZS7zANcKKjIJ/h8ngjziB224zIHcbBqbtYVf49wg4qjD/+5mVu5eK4eAL7FKiI+C3GOwI8AG3UmZg7hIfcMCBwW+Hwb4wBn9FXMAlj80MbRsEpn3F4PDvIbBfweALPmC3BYNBdfiALzBY8Q+BFzHY8Y4LuGzBYGAVLuB3DgxeHATHvBh8jXiAKxY+4PctAJh2jcHe2AC4oGDwZx7gdgqD4bm5gD9jsFIYAG8Q8DkPsNVCwPDueYDPCXhjALyGwSE7B3DFwg+80uIAtocweI2Cg2EMPkIcwB4KhqeCwKQjDA4H++CqgsE5DuCmhYD5lOYAzmGwUu2D4wTc4ABO8QVbOYAbBBzvgx0YHEJw8L2FgrmUhoNRCIMdfbAXg7McwB7eYJUDOIvB3kdwQsHgCzj4wcIbPN+Cgy8wWEkQcIaAV+FgKwXzqgkHrxJwhoB/YbBDg4Mt/MEpOFhzYPAvAj7F4BsEBt/xA9PSYDC6weBTAv6AwVk42CoC3IGDsxj8AYP3FQz+DAenRIBdcPBnGRv3e+AiAR+CwS0LRzCtDQYfEnCxB14m4BoY3BQDroDBNQJe7oGdBKyBwVYx4A4YrBFwtAdewj+EEBjsEQO2gsEohI1LPbAD/7AHB1vEgG1w8B42Onpgoj8Cg0t8wbQSGHxEvuIe2It/2AWDH0SBW2DwLjZ6/4KDCq4OALce7u6b92VR4O2yWi43Ky12cJ0gg13wMXnOMYMrZbWXSxTYreI623OIrRxBHnfBRfLMeO+Y86g4sWCS9T3jzYMgi11wlTyzDYcHVrWfRxyYlmIbEAmy2gUvk+cGYuiVqhoAdqkDuRBDDYJc7oIz5DmA9PdeNQoMfMcBgsx0wXnyrCHdzW8bCKa9QrrTCDLfBUfZwW71WcDbc8zgaBfsJM92pDebahwY+FHbCdI5AGY4gI0Dg18xD/CKajCYZnsWsOv5wH+YO4OXxqEgjH80hJqXuDYpGFmFZZGlhypsYUGKPcRDW7qsIKuXWrCg0IKHenT1r9/FSj9ja9q8mWz7O3n018mbJC8z86K1CHsLhEmhwifWwoIsbcr/XZgY2ywtuA+H6xQOBffh3de/E+SjvU7hOvKRvEruph4tVSMcblSE+WjJl4cu8lHKFm5v1Bruzl4e+HrYQE6yhesblaUbfD203wDwsoU36j7MDQDBFk8tUzjeqCctbvEINvHC9QkbwSaeYJs2yhL2CxSuCrZpuRF/LH57qGwVdCOOxC9Lx7ONeH5q2UduKlnC7cKEfeRmf/aphR/TmsiN8dK5MyXc0xP2ytJdvCY/pvFzaYLclFKbWl5KOC5IOEJ+En4u5Qdxq9rh1P9yslXQIj4Rxhd9fhAHSx5uYIGJyoSyqk/T4ZvfNIYNNyx5AItazmBF7FG4mEXcm+nWDKw4Y1ELWLY0gCVxdELhAhaxP80QldjAkgHLlsDCtAfYE8b+lh/3irmmDYwxkPDAwjSw9NBNICRMC9fVhIUkLksP3xaXNiDEFHNNQ0qDxaWp8uEhpPhFXNMGUoYsH04ViD9CSu9dnt4Q4UcWiKdaAJqBziImKsKQEjTZApBu8uhDypZ+2jKQ0meTx7s2nmvtazreCOFrtvG8a9QaQIrRDzHEDNiolWrF01jEiLVDbFSWMFvx0s2WDUgpaYcYYhpstpxrpz2Ddoh9oa+BmDO20841TE+waasYciZsmJ5riXcvoJmo5Y9bBmIuXLbEzw89GEJM4OvlLQM5Qw49WDDWYgKo5632eoUnHGuxYHCJ24X6Re2v1bfrcnDJotE0Q0A9U/fW6IshR9MsHD50F0CO8VUuaigQ3HH40OLxUg0oUBJkat0ANzhe6oMBYr+gQVuQqRV9OYN498MRcQcJNKgLlrGib3LAEXEfDQG8BtFL1fV1+PIAyC8ZYx7vgkKM2wJfccpyv2UN8vwJFHFVh0Jfyck8XzNHtd5CidDCWNOXczx/Zw7jdY+gRMlPPXGtaGzUfI/crGG8vDMdQwsT5zdW0+Us3h9LBmpvd6FGO6exUfTtbi8eqE12GOKCghxahFcc4J2lQ/G3+1Ck9Fa5XbQu6W/znrTs2IMBVAnjFZ5AQgNdBhnHHvDhg4lakeAyqi15ro4j7zKAJkcuA7z86JJbveiOxp0rp1Uuz5zjcM624pXLLeeqMx6VoH0P/r7S4TTuDRQwo/Gz80JrWrVQnVvIYVx7LZhoOS88j0cGCtzw/KGVjh86/wQhl6dPzowW63C8qFqt1v5RqUTe1JXCU55OLyHk0/lqxw8xxEOh7TS0FM6AwuRZ6DxkgFc8Qqy5B1vMacchOYVJ59TAlr0m3wtXPSRuYBvc8ZXjSITJ1dg2zIOlh8SRQ0neCkYdh5D75cL3DiGdUSDJWId5Dnr8nOS/lv84RCRM/pZ3d61pBFEAhvcwnF6EGCm4Uo1bjV+gULVUA2kKG1IRaaM2wQuheNHGNjEYGjCxSRMhn+3fbmh3c4yrcXdmNFv6/AJfZuaMezXHznf2WpAeenTylOeGw9ybXTZOe3Jwm42z6zR5w9ZTnsSLhneOVpdyrcqTg8uMiCW/Q2ePtUJSw78ytif1PG3m0d44mllWx/bP8rMM/qWpjh9c3p+3OZl/sAnanDualGxO7Pl9NBxwPKn93tb33w6b7Ojh3iM22Y6tP9rv0ZDleTR908ZnEx3eh7QFFpiOso2PpE16NJ3nWfzK2qTdfMLs2eO4kyxOJu3rtYqjZ/GJ1+YxXq0zm8pHD2zoMrOpvmrzAHvBWXAthTbeBHx6yAhHMfXad/jUxst/mKo5DIYWTv6L+ZVOL1cx9Tqx+3XyX0psgdNgSKMh9HLM9rlhDpXfjLyBy8yhmzHH7GUIDWlwHgxxNAQ/jLyMTphzbZ75bHUy8oL6EERDHHiCA1E0bK+NmM7HjEd5b2g8lxmP4xHTem0bDdEAVzBUNTSsL1iOb53xau+9MfbyXpvxqlsO8sI6GrQq8AVDAU3fh4pXmZjyLSZmdaj3O5oKwBsMMTS9uDcndpgL7NyboC/QFAP+YMijaYOK5w+ZKxwO/KQNNOVBJDiSsxbPuaT3tnjO2puLCAVDYGl4V8+VmGuU5ob381IAxIKhSMUfF1zWaxQvfKTeIogGQzI6MKtd1vuneGA+R5MgHgxqCk3rz1xzfk2Hz9bRlFJBIJh8oeIOc50O9X4B0WBr8RlzmTObvRT8bxdbeoWCiRqlXa0z9+jTvFJBZjAk6Xa6aDCX0Dt0HyVBbjAEcmjKNJkr9HxoygVAdjBE8nin74Ztfb6CpnwE5AWTGBX7euyR6X20fB/JDoaChibP2eMucrOCJq0ARG4wVKN4p/KIi6z3PTSeq0BkB0MgjqTzWOO6+Q3vxANA5AWTNJLQlc5mr9FBkgYLycHQSiEJ9upstvSzEN5JtcBCejDUvDjgostm6SqIxFsDxxTgcPAcB3RO2aw0fUieHwAHBXioWRz0c9rJlEuyKnDgC6ZFpuRpn+U65XIsr3gwJL14z353l02Pfv4NB3mTwEkBbstRvMd3+YNNR+N6BQdFl4GbAvwiWxres/LrVGey1XsdDw7SYhHgp4CIZBiHfL4syV1c4x4i4SSIUEBMNY5DQq+6JVm1zQscEq+CGAVEvc7hsJVPEpr15mcPDsm9BlEKiEtk0SL08/KUf2zXG+cXaJFNgDgFZHjtxRG2f3VLdZ6N3F9BK6/46lKwONX/HEepXF+eHjO79G6zk8ERNL8KciggS2ArimP4rpvdhv5waqN33qngaNGtAMiigEStsIbjZfavz5u9bqOh62al3mh0e82r/kUQx9LCLZBIAamK/s3FJxItbvqLIJUCsqn50KKk2lBeBdkUmALVr/lEa300p6RSYDoihWxmkXtpM9lCBKZDgempvY17fI5X1hN/W4PpUWDKErEsVuy1VjAbS8CUKTALxeWYd8kT9I1Z1KBnyRtbLsIsKDBLETVR2Er7/WHvrbDfn94qJNQIzJIC/5nf3qVhEfYHyNcAAAAASUVORK5CYII="},64:
/*!*******************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/api/product.js ***!
  \*******************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createProductUnit=e.disableProductCategory=e.enableProductCategory=e.createProductCategory=e.queryProductCategory=void 0;var o,i=(o=n(/*! @/utils/http.js */23))&&o.__esModule?o:{default:o};e.queryProductCategory=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/QueryProductCategory",data:e,method:"post"})};e.createProductCategory=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/CreateProductCategory",data:e,method:"post"})};e.enableProductCategory=function(t,e){return i.default.request({url:t+"/EnableProductCategory/"+e,method:"post"})};e.disableProductCategory=function(t,e){return i.default.request({url:t+"/DisableProductCategory/"+e,method:"post"})};e.createProductUnit=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/CreateProductUnit",data:e,method:"post"})}},65:
/*!****************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/api/user.js ***!
  \****************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.tokenpost=e.tokenget=e.post=void 0;var o,i=(o=n(/*! @/utils/http.js */23))&&o.__esModule?o:{default:o};e.post=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t,data:e,method:"post"})};e.tokenget=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.default.request({url:t+e,data:n,method:"post"})};e.tokenpost=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t,data:e,method:"post"})};e.get=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.default.request({url:t+e,data:n,method:"get"})}},66:
/*!*******************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/utils/tools.js ***!
  \*******************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.floatFormat=e.numberFormat=e.dateFormat=e.cloneObj=void 0;e.cloneObj=function(t){return JSON.parse(JSON.stringify(t))};e.dateFormat=function(t,e){var n,o={"Y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString(),"H+":e.getHours().toString(),"M+":e.getMinutes().toString(),"S+":e.getSeconds().toString()};for(var i in o)(n=new RegExp("("+i+")").exec(t))&&(t=t.replace(n[1],1==n[1].length?o[i]:o[i].padStart(n[1].length,"0")));return t};e.numberFormat=function(t){return(Number(t).toFixed(2)+"").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,")};e.floatFormat=function(t){if(/^\./.test(t)&&(t="0"+t),/.+\./.test(t)){var e=t.split(".");0==e[1].length?t+="00":1==e[1].length?t+="0":t=String(t.match(/^\d+(?:\.\d{0,2})?/))}else t+=".00";return t}},7:
/*!********************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/pages.json?{"type":"style"} ***!
  \********************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={pages:{"pages/index/index":{usingComponents:{"uni-grid":"/components/uni-grid/uni-grid","uni-grid-item":"/components/uni-grid-item/uni-grid-item","cu-loading":"/components/custom/cu-loading"},usingAutoImportComponents:{"uni-grid":"/components/uni-grid/uni-grid","uni-grid-item":"/components/uni-grid-item/uni-grid-item","uni-icons":"/components/uni-icons/uni-icons"}},"pages/index/sale/sale":{usingComponents:{"cu-search-bar":"/components/custom/cu-search-bar","uni-popup":"/components/uni-popup/uni-popup","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-number-box":"/components/uni-number-box/uni-number-box"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-popup":"/components/uni-popup/uni-popup","uni-number-box":"/components/uni-number-box/uni-number-box"}},"pages/index/sale/payment/payment":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{}},"pages/index/purchase/purchase":{usingComponents:{"cu-search-bar":"/components/custom/cu-search-bar","uni-popup":"/components/uni-popup/uni-popup","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-number-box":"/components/uni-number-box/uni-number-box"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-popup":"/components/uni-popup/uni-popup","uni-number-box":"/components/uni-number-box/uni-number-box"}},"pages/index/purchase/payment/payment":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-cell-group":"/components/custom/cu-cell-group","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{}},"pages/index/current-unit/current-unit":{enablePullDownRefresh:!0,usingComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-icons":"/components/uni-icons/uni-icons","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/index/current-unit/add/add":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell"},usingAutoImportComponents:{}},"pages/index/current-unit/edit/edit":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell"},usingAutoImportComponents:{}},"pages/index/product/product":{usingComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-drawer":"/components/uni-drawer/uni-drawer"},usingAutoImportComponents:{"uni-icons":"/components/uni-icons/uni-icons","uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-drawer":"/components/uni-drawer/uni-drawer","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/index/product/add/add":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-cell-group":"/components/custom/cu-cell-group"},usingAutoImportComponents:{}},"pages/index/product/edit/edit0":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-cell-group":"/components/custom/cu-cell-group"},usingAutoImportComponents:{}},"pages/index/product/edit/edit1":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-cell-group":"/components/custom/cu-cell-group"},usingAutoImportComponents:{}},"pages/index/product/type/type":{usingComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-popup":"/components/uni-popup/uni-popup"},usingAutoImportComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-popup":"/components/uni-popup/uni-popup"}},"pages/index/product/unit/unit":{usingComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-popup":"/components/uni-popup/uni-popup"},usingAutoImportComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-popup":"/components/uni-popup/uni-popup"}},"pages/index/receipt/receipt":{usingComponents:{"cu-search-bar":"/components/custom/cu-search-bar","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/index/payment/payment":{usingComponents:{"cu-search-bar":"/components/custom/cu-search-bar","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/index/cost/cost":{usingComponents:{"cu-search-bar":"/components/custom/cu-search-bar","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/index/cost/type/type":{usingComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-popup":"/components/uni-popup/uni-popup"},usingAutoImportComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-popup":"/components/uni-popup/uni-popup"}},"pages/index/return-order/return-order":{usingComponents:{"cu-search-bar":"/components/custom/cu-search-bar","uni-popup":"/components/uni-popup/uni-popup","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-number-box":"/components/uni-number-box/uni-number-box"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-popup":"/components/uni-popup/uni-popup","uni-number-box":"/components/uni-number-box/uni-number-box"}},"pages/index/return-order/payment/payment":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{}},"pages/index/return-order/orders/orders":{usingComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-collapse":"/components/uni-collapse/uni-collapse","uni-collapse-item":"/components/uni-collapse-item/uni-collapse-item"},usingAutoImportComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-collapse":"/components/uni-collapse/uni-collapse","uni-collapse-item":"/components/uni-collapse-item/uni-collapse-item"}},"pages/index/early-stage/early-stage":{usingComponents:{"cu-search-bar":"/components/custom/cu-search-bar","uni-popup":"/components/uni-popup/uni-popup","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-number-box":"/components/uni-number-box/uni-number-box"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-popup":"/components/uni-popup/uni-popup","uni-number-box":"/components/uni-number-box/uni-number-box"}},"pages/index/inventory/inventory":{usingComponents:{"uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-drawer":"/components/uni-drawer/uni-drawer"},usingAutoImportComponents:{"uni-icons":"/components/uni-icons/uni-icons","uni-search-bar":"/components/uni-search-bar/uni-search-bar","uni-drawer":"/components/uni-drawer/uni-drawer","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/index/inventory/add/add":{usingComponents:{"uni-number-box":"/components/uni-number-box/uni-number-box"},usingAutoImportComponents:{"uni-number-box":"/components/uni-number-box/uni-number-box"}},"pages/index/print-order/print-order":{usingComponents:{},usingAutoImportComponents:{}},"pages/bill/bill":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell"},usingAutoImportComponents:{}},"pages/bill/stock-list/stock-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/data/data":{usingComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{"uni-icons":"/components/uni-icons/uni-icons"}},"pages/data/sale/sale":{usingComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-date":"/components/custom/cu-date"},usingAutoImportComponents:{"uni-icons":"/components/uni-icons/uni-icons","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/data/sale/sale-return":{usingComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-date":"/components/custom/cu-date"},usingAutoImportComponents:{"uni-icons":"/components/uni-icons/uni-icons","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/data/receive-pay/receive-pay":{usingComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-date":"/components/custom/cu-date"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/data/receive-pay/receive-pay-detail":{usingComponents:{"cu-date":"/components/custom/cu-date"},usingAutoImportComponents:{"uni-icons":"/components/uni-icons/uni-icons"}},"pages/data/receipt-payment/receipt-payment":{usingComponents:{"cu-date":"/components/custom/cu-date"},usingAutoImportComponents:{"uni-icons":"/components/uni-icons/uni-icons"}},"pages/data/receipt-payment/receipt-payment-detail":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-date":"/components/custom/cu-date"},usingAutoImportComponents:{"uni-icons":"/components/uni-icons/uni-icons"}},"pages/data/warning/customer/customer":{usingComponents:{},usingAutoImportComponents:{}},"pages/data/top/hotSelling/hotSelling":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-date":"/components/custom/cu-date"},usingAutoImportComponents:{}},"pages/data/fee/fee":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-date":"/components/custom/cu-date"},usingAutoImportComponents:{"uni-icons":"/components/uni-icons/uni-icons"}},"pages/my/my":{usingComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/my/login/login":{backgroundColor:"#FFFFFF",usingComponents:{"uni-icon":"/components/uni-icon/uni-icon","tui-nomore":"/components/nomore/nomore"},usingAutoImportComponents:{"uni-icon":"/components/uni-icon/uni-icon"}},"pages/my/set":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-cell-group":"/components/custom/cu-cell-group","kps-image-cutter":"/components/ksp-image-cutter/ksp-image-cutter"},usingAutoImportComponents:{}},"pages/my/login/reg":{usingComponents:{"uni-icon":"/components/uni-icon/uni-icon","uni-icons":"/components/uni-icons/uni-icons"},usingAutoImportComponents:{"uni-icon":"/components/uni-icon/uni-icon","uni-icons":"/components/uni-icons/uni-icons"}},"pages/my/login/forget":{usingComponents:{"uni-icon":"/components/uni-icon/uni-icon"},usingAutoImportComponents:{"uni-icon":"/components/uni-icon/uni-icon","uni-icons":"/components/uni-icons/uni-icons"}},"pages/my/user/user":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-cell-group":"/components/custom/cu-cell-group","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{}},"pages/my/user/useradd":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-cell-group":"/components/custom/cu-cell-group","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{}},"pages/my/user/useredit":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-cell-group":"/components/custom/cu-cell-group","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{}},"pages/my/account/accountlist":{usingComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/my/login/editPassword":{usingComponents:{"uni-icon":"/components/uni-icon/uni-icon"},usingAutoImportComponents:{"uni-icon":"/components/uni-icon/uni-icon"}},"pages/my/share/share":{usingComponents:{},usingAutoImportComponents:{}},"pages/bill/sell-list/sell-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/bill/sell-list/sell-detail":{usingComponents:{"cu-loading":"/components/custom/cu-loading","t-table":"/components/t-table/t-table","t-th":"/components/t-table/t-th","t-tr":"/components/t-table/t-tr","t-td":"/components/t-table/t-td"},usingAutoImportComponents:{"t-table":"/components/t-table/t-table"}},"pages/bill/purchase-list/purchase-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/bill/purchase-list/purchase-detail":{usingComponents:{"cu-loading":"/components/custom/cu-loading","t-table":"/components/t-table/t-table","t-th":"/components/t-table/t-th","t-tr":"/components/t-table/t-tr","t-td":"/components/t-table/t-td"},usingAutoImportComponents:{"t-table":"/components/t-table/t-table"}},"pages/bill/payment-list/payment-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/bill/receipt-list/receipt-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/bill/fee-list/fee-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/bill/sell-red-list/sell-red-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/bill/sell-red-list/sell-detail":{usingComponents:{"cu-loading":"/components/custom/cu-loading","t-table":"/components/t-table/t-table","t-th":"/components/t-table/t-th","t-tr":"/components/t-table/t-tr","t-td":"/components/t-table/t-td"},usingAutoImportComponents:{"t-table":"/components/t-table/t-table"}},"pages/bill/purchase-red-list/purchase-red-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/bill/purchase-red-list/purchase-detail":{usingComponents:{"cu-loading":"/components/custom/cu-loading","t-table":"/components/t-table/t-table","t-th":"/components/t-table/t-th","t-tr":"/components/t-table/t-tr","t-td":"/components/t-table/t-td"},usingAutoImportComponents:{"t-table":"/components/t-table/t-table"}},"pages/bill/inventory-list/inventory-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/bill/begin-list/begin-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/bill/begin-list/begin-detail":{usingComponents:{"cu-loading":"/components/custom/cu-loading","t-table":"/components/t-table/t-table","t-th":"/components/t-table/t-th","t-tr":"/components/t-table/t-tr","t-td":"/components/t-table/t-td"},usingAutoImportComponents:{"t-table":"/components/t-table/t-table"}},"pages/bill/earlywarn-list/earlywarn-list":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-icon":"/components/uni-icon/uni-icon","xw-date":"/components/xw-date/xw-date"},usingAutoImportComponents:{"xw-date":"/components/xw-date/xw-date","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/my/integral/integral":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","wuc-tab":"/components/wuc-tab/wuc-tab","helang-checkbox":"/components/helang-checkbox/helang-checkbox-jf"},usingAutoImportComponents:{"wuc-tab":"/components/wuc-tab/wuc-tab","helang-checkbox":"/components/helang-checkbox/helang-checkbox","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/my/recharge/recharge":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","wuc-tab":"/components/wuc-tab/wuc-tab",action:"/components/shufei-action/action","helang-checkbox":"/components/helang-checkbox/helang-checkbox"},usingAutoImportComponents:{"wuc-tab":"/components/wuc-tab/wuc-tab","helang-checkbox":"/components/helang-checkbox/helang-checkbox","uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/my/share/myshare":{usingComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{"uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/bill/inventory-list/inventory-detail":{usingComponents:{"cu-loading":"/components/custom/cu-loading","t-table":"/components/t-table/t-table","t-th":"/components/t-table/t-th","t-tr":"/components/t-table/t-tr","t-td":"/components/t-table/t-td"},usingAutoImportComponents:{"t-table":"/components/t-table/t-table"}},"pages/my/about/about":{usingComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/my/wxSet/wxSet":{usingComponents:{"uni-icon":"/components/uni-icon/uni-icon"},usingAutoImportComponents:{"uni-icon":"/components/uni-icon/uni-icon"}},"pages/my/print/print":{usingComponents:{"cu-panel":"/components/custom/cu-panel","cu-cell":"/components/custom/cu-cell","cu-cell-group":"/components/custom/cu-cell-group","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"},usingAutoImportComponents:{}},"pages/my/print/printlist":{usingComponents:{"sort-picker-list":"/components/nickro-sortPickerList/nickro-sortPickerList","cu-loading":"/components/custom/cu-loading"},usingAutoImportComponents:{}}},globalStyle:{navigationStyle:"custom"}}},8:
/*!*******************************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/pages.json?{"type":"stat"} ***!
  \*******************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={appid:"__UNI__BDBA323"}},977:
/*!*****************************************************************************!*\
  !*** /Users/vincent/Documents/project/code/oneself/jinxiaocun/api/print.js ***!
  \*****************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.printSalesOrder=void 0;var o,i=(o=n(/*! @/utils/http.js */23))&&o.__esModule?o:{default:o};e.printSalesOrder=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.default.request({url:t+"/PrintSalesOrder",data:e,method:"post"})}}}]);
=======
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * A `Cancel` is an object that is thrown when an operation is canceled.
               *
               * @class
               * @param {string=} message The message.
               */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),

/***/ 52:
/*!*******************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/cancel/CancelToken.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ 51);

/**
                                   * A `CancelToken` is an object that can be used to request cancellation of an operation.
                                   *
                                   * @class
                                   * @param {Function} executor The executor function.
                                   */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
   * Throws a `Cancel` if cancellation has been requested.
   */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
    * Returns an object that contains a new `CancelToken` and a function that, when called,
    * cancels the `CancelToken`.
    */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel };

};

module.exports = CancelToken;

/***/ }),

/***/ 53:
/*!***************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/node_modules/axios/lib/helpers/spread.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Syntactic sugar for invoking a function and expanding an array for arguments.
               *
               * Common use case would be to use `Function.prototype.apply`.
               *
               *  ```js
               *  function f(x, y, z) {}
               *  var args = [1, 2, 3];
               *  f.apply(null, args);
               *  ```
               *
               * With `spread` this example can be re-written.
               *
               *  ```js
               *  spread(function(x, y, z) {})([1, 2, 3]);
               *  ```
               *
               * @param {Function} callback
               * @returns {Function}
               */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ 54:
/*!**************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/js-sdk/uni-axios/adapter.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.adapter = void 0;var _utils = __webpack_require__(/*! axios/lib/utils */ 28);




var _createError = _interopRequireDefault(__webpack_require__(/*! axios/lib/core/createError */ 43));
var _buildURL = _interopRequireDefault(__webpack_require__(/*! axios/lib/helpers/buildURL */ 32));
var _settle = _interopRequireDefault(__webpack_require__(/*! axios/lib/core/settle */ 42));
var _awaitTimeout = _interopRequireDefault(__webpack_require__(/*! ./await-timeout */ 55));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var timer = new _awaitTimeout.default();

var adapter = function adapter(config) {
  return new Promise(function (resolve, reject) {
    var requestMethod = ((0, _utils.isString)(config.method) ? config.method : 'GET').toUpperCase();
    var requestUrl = (0, _buildURL.default)(config.url, config.params, config.paramsSerializer);
    var requestHeaders = (0, _utils.isObject)(config.headers) ? config.headers : {};

    // 请求数据
    var requestData = config.data;

    var request = uni.request({
      method: requestMethod,
      url: requestUrl,
      header: requestHeaders,
      data: requestMethod === 'POST' || requestMethod === 'PUT' || requestMethod === 'PATCH' ? requestData : '',
      responseType: config.responseType === 'arraybuffer' ? 'arraybuffer' : 'text',
      dataType: config.responseType === 'json' ? 'json' : config.responseType,
      success: function success(res) {
        (0, _settle.default)(resolve, reject, {
          data: res.data,
          status: res.statusCode,
          statusText: '',
          headers: res.header,
          config: config,
          request: request });

      },
      fail: function fail() {
        var error = (0, _createError.default)('网络错误', config, undefined, request);
        reject(error);
      },
      complete: function complete() {
        timer.clear();
      } });


    // 支持超时处理
    if (config.timeout) {
      timer.set(config.timeout).then(function () {
        reject(new Error('请求超时'));
        request.abort();
      });
    }
  });
};exports.adapter = adapter;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 55:
/*!********************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/js-sdk/uni-axios/await-timeout.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} // await-timeout v0.5.0 by Vitaliy Potapov
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(void 0, function () {'use strict';

  function promiseFinally(promise, fn) {
    var success = function success(result) {
      fn();
      return result;
    };
    var error = function error(e) {
      fn();
      return Promise.reject(e);
    };
    return Promise.resolve(promise).then(success, error);
  }

  /**
     * Converts any value to Error.
     * @param {*} value
     * @returns {Error}
     */
  function toError(value) {
    value = typeof value === 'function' ? value() : value;
    return typeof value === 'string' ? new Error(value) : value;
  }

  /**
     * Promise-based replacement for setTimeout / clearTimeout.
     */var

  Timeout = /*#__PURE__*/function () {
    function Timeout() {_classCallCheck(this, Timeout);
      this._id = null;
      this._delay = null;
    }_createClass(Timeout, [{ key: "set", value: function set(









      delay) {var _this = this;var rejectReason = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        return new Promise(function (resolve, reject) {
          _this.clear();
          var fn = rejectReason ? function () {return reject(toError(rejectReason));} : resolve;
          _this._id = setTimeout(fn, delay);
          _this._delay = delay;
        });
      } }, { key: "wrap", value: function wrap(

      promise, delay) {var _this2 = this;var rejectReason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var wrappedPromise = promiseFinally(promise, function () {return _this2.clear();});
        var timer = this.set(delay, rejectReason);
        return Promise.race([wrappedPromise, timer]);
      } }, { key: "clear", value: function clear()

      {
        if (this._id) {
          clearTimeout(this._id);
        }
      } }, { key: "id", get: function get() {return this._id;} }, { key: "delay", get: function get() {return this._delay;} }]);return Timeout;}();


  Timeout.set = function (delay, rejectReason) {
    return new Timeout().set(delay, rejectReason);
  };

  Timeout.wrap = function (promise, delay, rejectReason) {
    return new Timeout().wrap(promise, delay, rejectReason);
  };

  return Timeout;

});

/***/ }),

/***/ 56:
/*!***************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/config/common.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.api = void 0;var _api;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var api = (_api = {
  baseUrl: 'https://test.saas.yunmengzhu.com',
  // baseUrl:'https://saas.yunmengzhu.com',
  // 正式 wxa9c130058c8210a1 测试:wxd7cad7e258a41c60
  contactUnit: '/api/ContactUnit',
  baseArea: '/api/BseArea',
  baseProduct: '/api/BseProduct',
  baseUser: '/api/BaseUser',
  capFee: '/api/CapFee',
  capPayment: '/api/CapPayment',
  capreceipt: '/api/Capreceipt',
  cashAccount: '/api/CashAccount',
  dept: '/api/Dept',
  purPurchaseOrder: '/api/PurPurchaseOrder',
  report: '/api/Report',
  salesOrder: '/api/SalesOrder',
  stkStock: '/api/StkStock',
  QueryWarningStock: '/api/StkStock/QueryWarningStock',
  QueryInit: '/api/StkStock/QueryInit',
  QueryInventory: '/api/StkStock/QueryInventory',
  token: '/api/Token',
  tokenRefresh: '/api/BseUser/RefreshToken',
  login: '/api/BseUser/Login',
  BindUserOpenId: '/api/BseUser/BindUserOpenId',
  UnbindUserOpenId: '/api/BseUser/UnbindUserOpenId ',
  ChangePassword: '/api/BseUser/ChangePassword',
  ResetPassword: '/api/BseUser/ResetPassword',
  Regist: '/api/BseUser/Regist',
  GetUserInfo: '/api/BseUser/GetUserInfo',
  GetUserInfoByUserId: '/api/BseUser/GetUserInfoByUserId',
  SaveUserInfo: '/api/BseUser/SaveUserInfo',
  SaveUserStatus: '/api/BseUser/SaveUserStatus',
  GetUserList: '/api/BseUser/GetUserList',
  GetRoleList: 'api/BseRole/GetRoleList',
  SaveUser: '/api/BseUser/SaveUser',
  CustomerSave: '/api/Customer/SaveCustomer',
  MyCashAccount: '/api/CashAccount/Query',
  MyCashAccountCreate: '/api/CashAccount/Create',
  MyCashAccountGet: '/api/CashAccount/Get/',
  MyCashAccountUpdate: '/api/CashAccount/Update',
  UploadImg: '/api/BseUser/UploadImg',
  GetMyDayLogList: '/api/BseUser/GetMyDayLogList',
  GetOrderList: '/api/SysOrder/GetMyOrderList',
  RefundApply: '/api/SysRefund/RefundApply',
  IntegralExchange: '/api/BseUser/IntegralExchange',
  AddOrder: '/api/SysOrder/AddOrder',
  GetCurrentActivity: '/api/SysActivity/GetCurrentActivity',
  GetMyPromotIntegralList: '/api/BseUser/GetMyPromotIntegralList',
  GetSmsCode: '/api/SysMessage/SendVerificationCode',
  GetProductList: '/api/SysProduct/GetProductList',
  Orderypay: '/api/WeChartPay/OrderPay',
  GetSharePic: '/api/BseUser/GetSharePic/',
  GetRefundList: '/api/SysDictionary/GetSysDictionaryList' }, _defineProperty(_api, "RefundApply",
'/api/SysRefund/RefundApply'), _defineProperty(_api, "GetFirstActivePrinter",
'/api/Print/GetFirstActivePrinter'), _defineProperty(_api, "UnBindPrint",
'api/Print/UnBind'), _defineProperty(_api, "BindPrint",
'api/Print/Bind'), _defineProperty(_api, "GetWSYLPrinterList",
'/api/Print/GetWSYLPrinterList'), _api);exports.api = api;

/***/ }),

/***/ 6:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@alpha","_id":"@dcloudio/uni-stat@2.0.0-alpha-25120200103005","_inBundle":false,"_integrity":"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@alpha","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"alpha","saveSpec":null,"fetchSpec":"alpha"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz","_shasum":"a77a63481f36474f3e86686868051219d1bb12df","_spec":"@dcloudio/uni-stat@alpha","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"6be187a3dfe15f95dd6146d9fec08e1f81100987","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-alpha-25120200103005"};

/***/ }),

/***/ 614:
/*!*********************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/static/image/logo.jpeg ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBYRXhpZgAATU0AKgAAAAgABAExAAIAAAARAAAAPlEQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAABBZG9iZSBJbWFnZVJlYWR5AAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACQAJADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAoorJ1zxDY6Db77p90rD93Cn3n/AMB71UISnLlirsmc4wXNJ2RqkgAknAHUmua1Xx1o+mlo45DdzD+GHlR9W6flmvPNd8WalrjMkknk2ueIIzgfif4qwq9vD5QrXrP5I8evmj2pL5s7C/8AiNq9wSLRIbRO2F3t+Z4/SsG48Qavdk+dqV0wPYSkD8hxWbRXq08NRp/DFHmzxFWfxSY95ZJDl5GY+5zQkskZykjKfY4plFbWRldmlb+INXtCPJ1K6UDsZSR+R4resPiNq9uQLtIbtO+V2N+Y4/SuPorGphqNT4oo1hiKsPhkz2DSvHWj6kVjkkNpMf4ZuFP0bp+eK6UEEAg5B6EV89Vu6F4s1LQ2VI5POtc8wSHI/A/w15eIyhWvRfyZ6VDNHtVXzPaaKydD8Q2OvW++1fbKo/eQv95P8R71rV4c4ShLlkrM9iE4zXNF3QUUUVJQUUVk+Idch0HS3unw0rfLDHn7zf4DvVQhKclGO7JnNQi5S2RS8VeKodAtvLj2y30g/dx9lH95vb+deR3d5cX909zdStLM5yzMaLy7nv7uS6uZDJNI25mNQV9Xg8HHDw/vdWfNYrFSry8uiCiiiuw5AooooAKKKKACiug8IaHa6/qstpdvMiJAZAYmAOQyjuD61n63YxaZrV3ZQuzxwybVZiCfxxWSrRdR0uq1NXSkqaqdHoZ9FdfpHgyPUfDL6pcXhtWyzIWXKbF6k9+oP5VyFFOtCo5Ri9twqUZ00nJbk9peXFhdJc2srRTIcqymvXPCviqHX7by5NsV9GP3kfZh/eX2/lXjlT2d3PYXcd1bSGOaNtysKwxmDjiI+fRm2FxUqEvLqj3+isnw9rkOvaWl0mFlX5Zo8/db/A9q1q+UnCUJOMt0fSwmpxUo7MQkAEk4A6k14v4s1xtc1l5EY/ZYcxwD27n8f8K9D8daqdN8PSRxtia6PlL6hf4j+XH414/Xt5Rh9HWfojx80r6qkvVhRRXp9n8PtGutNtpWku1kkiV2KyDqQCeq16eIxVPDpOfU8+hhp121DoeYUV6p/wAK00b/AJ+b/wD7+J/8TR/wrTRv+fm//wC/if8AxNc39q4fu/uOj+za/l955XRXqn/CtNG/5+b/AP7+J/8AE02f4d6NBZzOJLtnVGYM0i9cey0f2rh/P7g/s2v5HltT2UKXF/bwSNsjklVGb0BIBNQUV6L1RwJ2Z7D4d8Labot9Jd2V5JO7RmNgzKQASD2H+zWfq3gWx1O+uLmC+k+0yTB5E3KQoLDdxjPTOPer3gPSzp3hyOWRcS3Z8457L/D+nP40zxDpt1ar/a3h5Sl8JCsyxLu84E85Hcg/lz6V8yqtRYlpVNdr/wCZ9F7ODw6bhpvb/I2LyR9J0V/7NtVnNqgUQBsHaAOOh5xzVXw7rs+s6bLqFzaLaW6k7GMmdwHU9BwP8azPCel61ps15qGr3SJHcfvJInYEhv7xPReP88VoazbN4i8PNBot9brG5wSvKsB/DkdOfaspQppum2nqve107mkZza50mtH7uh5Vr+pf2vrt3ej7kj4Tj+EcD9AKza1tU8Nato6GS8tSsIOPNVgyn8v61k19RRcHBKm7pHzlVT525qzZu+E9cbQ9ZSR2P2WbEc49ux/Dr+de0AggEHIPQivnqvYPAuqnUvDyRyNma1PlN6lf4T+XH4V4+b4fRVl6M9TK6+rpP1Rx/wARr83HiBLQH5LWIAj/AGm5P6ba4+tLxBcG78Q6hNnIadwPoDgfoKza9XDU/Z0Yx8jzcRPnqyl5hUv2m4AAE8mAMAbzwKiorZpMyTa2JftVx/z3l/77NH2q4/57y/8AfZqKijlQ+Z9yX7Vcf895f++zR9quMEefLyMH5z0qKijlXYOZ9wrS0C0tr7XLS3vJlit3f5yxxnvtz79PxrNopTTlFpOwQajJNq57ZFqyS+LTpEBHl29ozyBegYsgA/AfzrjT4rvNE8U6naqongluSFR2OIzu5I/wqv8ADT/kY7j/AK9G/wDQ0rL19CvjW7Uck3QIx7kGvHo4WnGtKjLVcqPWqYmpKjGqtHzHpXie70W2t4V1pZHikJCopYgkeoBqh4bu/DE+otFo0MkU+wu2N6ggevOD1q54p0rStUhtl1TUBZrGzFCZVTcTjP3qpeGtC0LTdUafTdXW7nMRUxiZH+XIycLz6VwQ9n9Wd3K/4HZP2n1hWUbficx4+1y5utVl0ohVtrZwRtzlyVB5+mTj61x1b/jUEeL9QBH8Sn/xxawK+gwkIxoQUeyPDxUpSrSb7sK7D4c35t/ED2hPyXURAH+0vI/TdXH1o6Bcm08Q6fNnAWdAfoTg/oarE0/aUZR8icPPkqxl5lGVzJM7nqzE0ynyoY5nQ9VYimVstjJ7hRRRTEFFFFABRRRQAUUUUAXdN1W90e5a4sJvJlZNhbYrZGQccg+gqK4vrm6vmvZpS1wz7y+AOfXiq9FTyR5ua2pXPK3LfQ0NS1zUtXWNb+6aYRklAVAxnr0FQ6fqV3pdz9ospzDLtK7gAeD25qrRSVOCjyJadhupNy5m9Se8vLjULuS6upTLPJjc5A5wMDp7CoKKKpJJWRLbbuwp8TmOZHHVWBplPiQyTIg6swFD2Bbl/X7c2niHUIcYCzuR9Ccj9DWbXYfEawNv4gS7A+S6iBJ/2l4P6ba4+scNU9pRjLyNcRDkqyj5hRRU0VrcXClobeWQA4JRCcflWzaW5kk3sdnF8NbmaCOVdShG9A2DGeMj60//AIVjd/8AQSh/79muaE/iIKqiXVMKMAbpOB6Uef4i/wCeuqf99SV5/Jiv+fq+5HfzYb/n0/vZ0v8AwrG7/wCglD/37NY3iPwlL4dtYJpLtJvNcphUIxxmqfn+Iv8Anrqn/fUlRXC63eIqXK6hOqHKrKHYL9M1VOOIU051E16EVHQcWoU2mZtFKQVYqwIIOCD2pK7ziCvQfD2gaPr3hCWOCMJqCnDyscsrjp/wE/49xWL4CghuPEypPEkqeS52uoYZ49a7e88TaToOoz2S6XciRdu97a3Ta2QCOcjPWvKx1eo5eypJ8ys9D08FRgo+1qNWeh5bbabcXOrR6aFKztN5RGM7TnB/Ln8q7Tx3pWh6XptuILcRXrELH5ZxlR1LD+vXJrq5L3TLHSI9bXTSFZVcCOBfNG7j8+eearadruk+I7/yP7Lm81Yywe6t0xgHpnJ9a5p42rUmqqi1GO+vU6IYSnCLp8y5pbaHjtFb3jSGK38W30UMaRxjZhUUADKKelYNe3Tn7SCn3Vzx6kOSbj2YVo6BbG78Q6fDjIadCfoDk/oKzq7D4c2JuPED3RHyWsRIP+03A/TdWeJqezoyl5F4eHPVjHzOw8daUdS8PSSRrma1Pmr6lf4h+XP4V4/X0KQCCCMg9Qa8X8WaG2h6y8aKfss2ZID7dx+HT8q8vKMRo6L9UelmlDVVV8zCrp/DXjBvDtjNbLZCfzJPMDGXbjgDGMH0rmKK9erShVjyzV0eXTqzpS5oOzPQoviXcTSpFHo6vI7BVUTHJJ6D7tdfresf2LorX0qx+auAIi5AZj2Bx9e3auN8A+HwpOu3wCRRg+Rv4Hu59h2/GsDxd4hOvaoTEx+xw5WFT39W/H+WK8Z4SjVxHs6StGO7/Q9ZYqrToc9R6y2/zOg/4WhL/wBApP8Av+f/AImgfFCTPOkoR7T/AP2NT+DRo2s+HptGlt0W4ALS9Nz88OD6jj6fjXFa5otzoWpPaTjK9Y5AOHX1ralh8JOrKk4Wa83qu+5lUr4qFONRTun5LQq3919u1G6uymzz5Xl25zt3EnGfxqvRRXrJJKyPLbbd2dX8PP8AkaV/64v/AErt9V17WbLUpre08Py3cCY2zKxAbIBPbsSR+FcroXhfxHpksOp2IsmaSLIWRycKwzz/APrrovM8c/8APHS/zP8AjXg4v2dSvzpxatbV2PbwqqU6PI00730Rr3Oo30WgJfRaa8t4yqTaAnIJxkdO30qroutatqF8Yb3RJbKIIWErMSCeOOg/yKuXDax/YaG3S2OqbV3Bs+Xnjd/WsbzPHP8Azx0v8z/jXDThGUGvdvfq2dk5SjJPX7kcN45/5HK//wC2f/ota56uy1/wtr9y15rV/wDYwwTfIsbnoqgcDHoPWuNr6TCTi6UYxd7JL8D5/FQkqrcla7bCvYPAulHTfDySyLia6Pmt6hf4R+XP41554T0Ntc1lI3U/ZYcSTn27D8en517QAAAAMAdAK83N8RoqK9WehldDV1X6IWsnxDocOvaW9q+FlX5oZMfdb/A961qK8OE5QkpR3R7E4KcXGWzPALy0nsLuS1uYzHNG21lNS6U1ourWpvkD2vmASqTj5f8APNer+KvCsOv23mR7Yr6Mfu5OzD+63t/KvI7uzuLC6ktrqJopkOGVhX1WFxUMVTts+v8AwD5vE4aWGnfddD2DUNZ8MtZtZXN/bG3ACmKKQ4wO3ydvasA6p4Bt/wDV2sUuP+ndj/6FXm9FY08shBW55ffY1nmMpO/IvuPSIvGnhawlD2WkOkgGA8dtGh/POam8QapoXiHwibuWYRSqT5KnBkWQfw4HY/yINeY0Vf8AZ1NSU4tprzJ+v1HFxklZhRRRXoHAbkXi/XoYUij1F1RFCqNi8ADA7U7/AITTxD/0En/79p/hWDRWP1aj/IvuRt9Yq/zP72et6rql/bfD6DUY7greNDC5lAHJbbnjGO9cF/wmniH/AKCT/wDftP8ACsp9SvpbUWsl7cPbqABE0rFAB04zjiq1c+HwMKcWppO7vsbV8ZObTg2tO5tXHizXLq2kt579nilUo6lF5B/CsyztJ7+7jtbaMyTSNtVRRaWdxf3UdtaxNLM5wqqK9c8K+FYdAtvMk2y30g/eSdlH91fb+dLE4ilg4e6ld9EPD0KuKn7zdl1Lvh7Q4dB0tLVMNK3zTSY+83+A7VrUUV8vOcpycpbs+jhBQiox2QUUUVJQVk654esdet9l0m2VR+7mT7yf4j2rWoqoTlCXNF2ZM4RmuWSujxbXPCepaGzPJH51rnieMZH4j+GsKvoUgEEEZB6g1zWq+BdH1ItJHGbSY/xQ8KfqvT8sV7eHzdWtWXzR49fK3vSfyZ4/RXYX/wAOdXtyTaPDdp2AbY35Hj9awLjQNXtCfO026UDuIiR+Y4r1aeJo1PhkjzZ4erD4oszqKe8UkZw8bKfcYoSKSQ4SNmPsM1tdGVmMorRt9A1e7I8nTbpge5iIH5nit+w+HOr3BBu3htE7gtvb8hx+tY1MTRp/FJGsMPVn8MWcfW7ofhPUtcZXjj8m1zzPIMD8B/FXoeleBdH00rJJGbuYfxTcqPovT8810oAAAAwB0Ary8Rm6taivmz0qGVveq/kZWh+HrHQbfZapulYfvJn+8/8AgPataiivDnOU5c0ndnsQhGC5YqyCiiipKP/Z"

/***/ }),

/***/ 623:
/*!************************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/static/image/mine_def_touxiang_3x.png ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAMAAAAJixmgAAABmFBMVEX///8AAAD8/Pzc4/u9vb36+vr6+vrl5eXz9PXq6ur9/v719fb////6+vr////6+vrv7+/7+/zt7e3x8fH5+fv6+vr6+vr29/f////6+vr6+vv7+/v6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vry8vPJycn6+vr6+vr5+fr////9/f36+vr6+vr6+vr////+/v79/f36+vr6+vr6+vrn5+e/v7/6+vr6+vrv8/3j5eri4uLR0dHe5fv////+/v79/f36+vr6+vr6+vvj6fv////d4/n4+Pj+/v7+/v79/f36+vv6+vr6+vr////6+vr6+vr4+v7d4/vZ2dnExMTBwcHi6Pz////+/v79/f3d3d3n7Pz+/v7+/v7+/v79/f78/P38/Pz6+vr6+vrz9v3p7vzf5fvg5PTi5O7T09Pv8vz8/P38/Pz6+vv6+vrV1dXNzc3p7f3m6/zk5ejm6/z9/f3g5vvk6vvh6Pvo7Pzp7fvr7/v6+vr6+vrp7vzx8/zv8v3q7vzw8/3r7/319/z09v3y+LxSAAAAiHRSTlPrAOvr61mA6+vr6+vqW+c86+vr63gLMuvhBGp+X1ZVOAJKTSo/FQnr61At69aVZkNB08GhNR4a6+tiEuvr6+vp5KqCIQjr6tvr68u3mnEQBt5dKOvr6+vr5di7kevOxbOwpoZ0Fw7r6+vr6+uXi3luJOvr3evr2Izr6+vksKVGDcSD0r6w65m4uzcA5wAAEddJREFUeNrk2tlPGkEcwPGB7AECC3KVS8HKVRQPBKQmkCoaUrGKJkC0pPXqk+mhL31r//VSZmSAArLzm1lN+n1aHz/ZneOnItN/lrHgmC9ROMv4/VFnt6jfnzkrJHwxk3EZBd4vZuJvTkNeZWzekGMpulzcN4nPAHAi8+v0gzJTH05/ZRImoYkFn1TjDq+iM68jXj0xiUocOFbYWAsrjIXX1gtiVrYgsM+/6FWAeRf9PhP3RICT+UhY4VI4kk+auMYfvO8/JVpO5lM/t81bAPg2uiBPbE3J7tZzh5u1gKbZUTe7pgVqm4e5+m5WWZMnthC9NXGIPzh4tiSP7yZ7+ammoalptU+X2Rt5fEtnQRMo7uDePiWPKfSxvqmhmdM26x9D8phAO5gA8I5z3Dd8lKshhmq5o3FfuHPHBIgrOLEuj+bYu1y1I+bsq5d7Dnm09YQJHhy8s/GP9voigMAFLq7/MW9A3zIcfByXRwrXqRZqroflkeLHJkBgcDI6um6vzhHXzrdG13MUcBkBgmNnIzvzXk5D3NNyeyM79hngng0BF18Pr9yPm0hQmx+HV/ProokhIDg5fBJFthpIYLWtyPAZxfBdw8A/Foe4VwEkuMDVEHnxh0lHYLBv6OR1bInkUvKWY+hU1nH3goKrQ68320AG1cgOveSqSUcA8MnQ6lU2kYFthodW8olpJBHg2zcyLZSzI0Oz50Iy7c3I5CgCnBlavBoyPG1oKWdM04KDg3GZ5t1Ez9KmV6bF6agsAHz8euD1XtrRM2W/dAzcQsjtWgS4sDDwelfRM7Z6I/dbKJhw3MHLMg26euErWaYtm0wCwLH8wOZ8iJ69w4HtOh/jDw5uDExFAfQCCgxMURtB3uD9pYHP2Y5eRPaBz3ppny84Sb2RHHox5SJUnOQJ9tHj6PsqekGtfqfHk48f+Au9TX57EcuXFvhG75lfAOBJ3q8aemFpX0fEcLDvzYvbriZsXW98PMBJun53kWGZ0ezt0nWcBIFHz6NLZEjzrvJ9WkI6uhw4naDgIPXWkfDm3eW7tNQL6alOxUEYOEbvVxdIZCtutfnQkmhIVxf0zhUDgfPC3+9Kylq+f2hTKQWzveM8BLzMf/3OvXJZ1XK502k27yv0nQLAo+t4mR1c4Ls/r1g7lbQ0QxTMtFcXWMHHC/3zF/5i3U1sFQZG/fN44ZgNHOwfwD/tQK6niRepULD9Z/84DjKB4/37swZ7udv43YoGI61/r46zgDP9+Qg2L1gJVzwYBfqzU0Y/+FYmRc4hXMuDxBZi6Twik271gk/6EwNo3ldLkpFglOvPESc6wU4eG/TcnSSBwICt2qkPXJVJe3bAxPMgGQ6278mkqh6wb1HGhVg3LJtVLaclQDbEViAk4xZ9OsDrMukQMXSgVkoSuFJFPUAMHcqk9dnBPyALOHVHtVDzXQqyjH/MCk4uyjivpv9Trkhcq+j/tDWvjFtIzgSmO/Tpue5tuVOSOFfqzOk+jU8JwDkbuMg8Er5KSwJKv2IeFYuzgGOPM8M3vSeSuy0Jqe3WezZ9I4TXsSfBdOh3rCJ9WSVhWZG+Vh0TfxmAJu5YVy/Hq198RRCLySfB+ccZSdP5PUtC0/lVa98JI/8UeIdxZrC1JaG1bYxTxM4T4DjbHXouLQkuPcd2p45PB+8w7lgdSXgdxn1rZyp4Q8YdIV2lJAOyIF0dEcrGNHBCxkUaSFcVyYAqSFeNCMEkpoDX2Y4kl2RILrajaX0SmK7giM4p+E4ypDudk3GEruIJYCfb3xlWJINaYftbhHMS2Cfj3r5DulIlg1KRrt69JaAvE8D+/gp+gVsW3rbYVrF/PDi4QM7gBtJXSzKoFtJXg5zFC8Gx4DMZl0V8l3C6NPOwn+a7iFGWkM7GgpdknN6x0DOd6zHbOq2Z3l/HZvY8SNNK6R0TCWlpHDgh464R4jcnlcrmv81b70pP/b7OOm/+W7kEn5lo1wSVGAOOyrhPiN8gnE6ZHzuY8gfidNN9YH4slQaPxbRPBBX9F3xCtqw1jR/4Hr80inaVm5V0e2DoS1eaZVcPS5u/5wfW1si2dULBk84kOLhsHt+8zeJxuTwW27x5fOUpYODJRMERGVfjBS5ZzcxZS7zANcKKjIJ/h8ngjziB224zIHcbBqbtYVf49wg4qjD/+5mVu5eK4eAL7FKiI+C3GOwI8AG3UmZg7hIfcMCBwW+Hwb4wBn9FXMAlj80MbRsEpn3F4PDvIbBfweALPmC3BYNBdfiALzBY8Q+BFzHY8Y4LuGzBYGAVLuB3DgxeHATHvBh8jXiAKxY+4PctAJh2jcHe2AC4oGDwZx7gdgqD4bm5gD9jsFIYAG8Q8DkPsNVCwPDueYDPCXhjALyGwSE7B3DFwg+80uIAtocweI2Cg2EMPkIcwB4KhqeCwKQjDA4H++CqgsE5DuCmhYD5lOYAzmGwUu2D4wTc4ABO8QVbOYAbBBzvgx0YHEJw8L2FgrmUhoNRCIMdfbAXg7McwB7eYJUDOIvB3kdwQsHgCzj4wcIbPN+Cgy8wWEkQcIaAV+FgKwXzqgkHrxJwhoB/YbBDg4Mt/MEpOFhzYPAvAj7F4BsEBt/xA9PSYDC6weBTAv6AwVk42CoC3IGDsxj8AYP3FQz+DAenRIBdcPBnGRv3e+AiAR+CwS0LRzCtDQYfEnCxB14m4BoY3BQDroDBNQJe7oGdBKyBwVYx4A4YrBFwtAdewj+EEBjsEQO2gsEohI1LPbAD/7AHB1vEgG1w8B42Onpgoj8Cg0t8wbQSGHxEvuIe2It/2AWDH0SBW2DwLjZ6/4KDCq4OALce7u6b92VR4O2yWi43Ky12cJ0gg13wMXnOMYMrZbWXSxTYreI623OIrRxBHnfBRfLMeO+Y86g4sWCS9T3jzYMgi11wlTyzDYcHVrWfRxyYlmIbEAmy2gUvk+cGYuiVqhoAdqkDuRBDDYJc7oIz5DmA9PdeNQoMfMcBgsx0wXnyrCHdzW8bCKa9QrrTCDLfBUfZwW71WcDbc8zgaBfsJM92pDebahwY+FHbCdI5AGY4gI0Dg18xD/CKajCYZnsWsOv5wH+YO4OXxqEgjH80hJqXuDYpGFmFZZGlhypsYUGKPcRDW7qsIKuXWrCg0IKHenT1r9/FSj9ja9q8mWz7O3n018mbJC8z86K1CHsLhEmhwifWwoIsbcr/XZgY2ywtuA+H6xQOBffh3de/E+SjvU7hOvKRvEruph4tVSMcblSE+WjJl4cu8lHKFm5v1Bruzl4e+HrYQE6yhesblaUbfD203wDwsoU36j7MDQDBFk8tUzjeqCctbvEINvHC9QkbwSaeYJs2yhL2CxSuCrZpuRF/LH57qGwVdCOOxC9Lx7ONeH5q2UduKlnC7cKEfeRmf/aphR/TmsiN8dK5MyXc0xP2ytJdvCY/pvFzaYLclFKbWl5KOC5IOEJ+En4u5Qdxq9rh1P9yslXQIj4Rxhd9fhAHSx5uYIGJyoSyqk/T4ZvfNIYNNyx5AItazmBF7FG4mEXcm+nWDKw4Y1ELWLY0gCVxdELhAhaxP80QldjAkgHLlsDCtAfYE8b+lh/3irmmDYwxkPDAwjSw9NBNICRMC9fVhIUkLksP3xaXNiDEFHNNQ0qDxaWp8uEhpPhFXNMGUoYsH04ViD9CSu9dnt4Q4UcWiKdaAJqBziImKsKQEjTZApBu8uhDypZ+2jKQ0meTx7s2nmvtazreCOFrtvG8a9QaQIrRDzHEDNiolWrF01jEiLVDbFSWMFvx0s2WDUgpaYcYYhpstpxrpz2Ddoh9oa+BmDO20841TE+waasYciZsmJ5riXcvoJmo5Y9bBmIuXLbEzw89GEJM4OvlLQM5Qw49WDDWYgKo5632eoUnHGuxYHCJ24X6Re2v1bfrcnDJotE0Q0A9U/fW6IshR9MsHD50F0CO8VUuaigQ3HH40OLxUg0oUBJkat0ANzhe6oMBYr+gQVuQqRV9OYN498MRcQcJNKgLlrGib3LAEXEfDQG8BtFL1fV1+PIAyC8ZYx7vgkKM2wJfccpyv2UN8vwJFHFVh0Jfyck8XzNHtd5CidDCWNOXczx/Zw7jdY+gRMlPPXGtaGzUfI/crGG8vDMdQwsT5zdW0+Us3h9LBmpvd6FGO6exUfTtbi8eqE12GOKCghxahFcc4J2lQ/G3+1Ck9Fa5XbQu6W/znrTs2IMBVAnjFZ5AQgNdBhnHHvDhg4lakeAyqi15ro4j7zKAJkcuA7z86JJbveiOxp0rp1Uuz5zjcM624pXLLeeqMx6VoH0P/r7S4TTuDRQwo/Gz80JrWrVQnVvIYVx7LZhoOS88j0cGCtzw/KGVjh86/wQhl6dPzowW63C8qFqt1v5RqUTe1JXCU55OLyHk0/lqxw8xxEOh7TS0FM6AwuRZ6DxkgFc8Qqy5B1vMacchOYVJ59TAlr0m3wtXPSRuYBvc8ZXjSITJ1dg2zIOlh8SRQ0neCkYdh5D75cL3DiGdUSDJWId5Dnr8nOS/lv84RCRM/pZ3d61pBFEAhvcwnF6EGCm4Uo1bjV+gULVUA2kKG1IRaaM2wQuheNHGNjEYGjCxSRMhn+3fbmh3c4yrcXdmNFv6/AJfZuaMezXHznf2WpAeenTylOeGw9ybXTZOe3Jwm42z6zR5w9ZTnsSLhneOVpdyrcqTg8uMiCW/Q2ePtUJSw78ytif1PG3m0d44mllWx/bP8rMM/qWpjh9c3p+3OZl/sAnanDualGxO7Pl9NBxwPKn93tb33w6b7Ojh3iM22Y6tP9rv0ZDleTR908ZnEx3eh7QFFpiOso2PpE16NJ3nWfzK2qTdfMLs2eO4kyxOJu3rtYqjZ/GJ1+YxXq0zm8pHD2zoMrOpvmrzAHvBWXAthTbeBHx6yAhHMfXad/jUxst/mKo5DIYWTv6L+ZVOL1cx9Tqx+3XyX0psgdNgSKMh9HLM9rlhDpXfjLyBy8yhmzHH7GUIDWlwHgxxNAQ/jLyMTphzbZ75bHUy8oL6EERDHHiCA1E0bK+NmM7HjEd5b2g8lxmP4xHTem0bDdEAVzBUNTSsL1iOb53xau+9MfbyXpvxqlsO8sI6GrQq8AVDAU3fh4pXmZjyLSZmdaj3O5oKwBsMMTS9uDcndpgL7NyboC/QFAP+YMijaYOK5w+ZKxwO/KQNNOVBJDiSsxbPuaT3tnjO2puLCAVDYGl4V8+VmGuU5ob381IAxIKhSMUfF1zWaxQvfKTeIogGQzI6MKtd1vuneGA+R5MgHgxqCk3rz1xzfk2Hz9bRlFJBIJh8oeIOc50O9X4B0WBr8RlzmTObvRT8bxdbeoWCiRqlXa0z9+jTvFJBZjAk6Xa6aDCX0Dt0HyVBbjAEcmjKNJkr9HxoygVAdjBE8nin74Ztfb6CpnwE5AWTGBX7euyR6X20fB/JDoaChibP2eMucrOCJq0ARG4wVKN4p/KIi6z3PTSeq0BkB0MgjqTzWOO6+Q3vxANA5AWTNJLQlc5mr9FBkgYLycHQSiEJ9upstvSzEN5JtcBCejDUvDjgostm6SqIxFsDxxTgcPAcB3RO2aw0fUieHwAHBXioWRz0c9rJlEuyKnDgC6ZFpuRpn+U65XIsr3gwJL14z353l02Pfv4NB3mTwEkBbstRvMd3+YNNR+N6BQdFl4GbAvwiWxres/LrVGey1XsdDw7SYhHgp4CIZBiHfL4syV1c4x4i4SSIUEBMNY5DQq+6JVm1zQscEq+CGAVEvc7hsJVPEpr15mcPDsm9BlEKiEtk0SL08/KUf2zXG+cXaJFNgDgFZHjtxRG2f3VLdZ6N3F9BK6/46lKwONX/HEepXF+eHjO79G6zk8ERNL8KciggS2ArimP4rpvdhv5waqN33qngaNGtAMiigEStsIbjZfavz5u9bqOh62al3mh0e82r/kUQx9LCLZBIAamK/s3FJxItbvqLIJUCsqn50KKk2lBeBdkUmALVr/lEa300p6RSYDoihWxmkXtpM9lCBKZDgempvY17fI5X1hN/W4PpUWDKErEsVuy1VjAbS8CUKTALxeWYd8kT9I1Z1KBnyRtbLsIsKDBLETVR2Er7/WHvrbDfn94qJNQIzJIC/5nf3qVhEfYHyNcAAAAASUVORK5CYII="

/***/ }),

/***/ 64:
/*!*************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/api/product.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createProductUnit = exports.disableProductCategory = exports.enableProductCategory = exports.createProductCategory = exports.queryProductCategory = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var queryProductCategory = function queryProductCategory(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/QueryProductCategory',
    data: data,
    method: 'post' });

};exports.queryProductCategory = queryProductCategory;

var createProductCategory = function createProductCategory(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/CreateProductCategory',
    data: data,
    method: 'post' });

};exports.createProductCategory = createProductCategory;

var enableProductCategory = function enableProductCategory(url, id) {
  return _http.default.request({
    url: url + '/EnableProductCategory/' + id,
    method: 'post' });

};exports.enableProductCategory = enableProductCategory;

var disableProductCategory = function disableProductCategory(url, id) {
  return _http.default.request({
    url: url + '/DisableProductCategory/' + id,
    method: 'post' });

};exports.disableProductCategory = disableProductCategory;

var createProductUnit = function createProductUnit(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url + '/CreateProductUnit',
    data: data,
    method: 'post' });

};exports.createProductUnit = createProductUnit;

/***/ }),

/***/ 65:
/*!**********************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/api/user.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.get = exports.tokenpost = exports.tokenget = exports.post = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! @/utils/http.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var post = function post(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url,
    data: data,
    method: 'post' });

};exports.post = post;
var tokenget = function tokenget(url) {var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _http.default.request({
    url: url + id,
    data: data,
    method: 'post' });

};exports.tokenget = tokenget;
var tokenpost = function tokenpost(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _http.default.request({
    url: url,
    data: data,
    method: 'post' });

};exports.tokenpost = tokenpost;
var get = function get(url) {var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _http.default.request({
    url: url + id,
    data: data,
    method: 'get' });

};exports.get = get;

/***/ }),

/***/ 66:
/*!*************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/utils/tools.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.floatFormat = exports.numberFormat = exports.dateFormat = exports.cloneObj = void 0; /**
                                                                                                                                                                         * @description 克隆一个对象，去除它跟原对象的关联性
                                                                                                                                                                         * @param (Object) obj 原对象
                                                                                                                                                                        */
var cloneObj = function cloneObj(obj) {
  return JSON.parse(JSON.stringify(obj));
};

/**
    * @description 将日期对象格式化为指定格式
    * @param (String, Object) String 格式 obj 日期对象
   */exports.cloneObj = cloneObj;
var dateFormat = function dateFormat(fmt, date) {
  var ret;
  var opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    }
  }
  return fmt;
};

/**
    * @description 将数值格式化为千分制,并保留两位小数
    * @param (Number||String) 数值或字符串
   */exports.dateFormat = dateFormat;
var numberFormat = function numberFormat(number) {
  return (Number(number).toFixed(2) + "").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
};

/**
    * @description 将数字格式化为两位浮点数
    * @param (Number||String) 数值或字符串
   */exports.numberFormat = numberFormat;
var floatFormat = function floatFormat(number) {
  if (/^\./.test(number)) {
    number = '0' + number;
  }
  if (/.+\./.test(number)) {
    var strArr = number.split('.');
    if (strArr[1].length == 0) {
      number = number + '00';
    } else if (strArr[1].length == 1) {
      number = number + '0';
    } else {
      number = String(number.match(/^\d+(?:\.\d{0,2})?/));
    }
  } else {
    number = number + '.00';
  }
  return number;
};exports.floatFormat = floatFormat;

/***/ }),

/***/ 7:
/*!**************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/pages.json?{"type":"style"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/index/index": {}, "pages/index/sale/sale": {}, "pages/index/sale/payment/payment": {}, "pages/index/purchase/purchase": {}, "pages/index/purchase/payment/payment": {}, "pages/index/current-unit/current-unit": { "enablePullDownRefresh": true }, "pages/index/current-unit/add/add": {}, "pages/index/current-unit/edit/edit": {}, "pages/index/product/product": {}, "pages/index/product/add/add": {}, "pages/index/product/edit/edit0": {}, "pages/index/product/edit/edit1": {}, "pages/index/product/type/type": {}, "pages/index/product/unit/unit": {}, "pages/index/receipt/receipt": {}, "pages/index/payment/payment": {}, "pages/index/cost/cost": {}, "pages/index/cost/type/type": {}, "pages/index/return-order/return-order": {}, "pages/index/return-order/payment/payment": {}, "pages/index/return-order/orders/orders": {}, "pages/index/early-stage/early-stage": {}, "pages/index/inventory/inventory": {}, "pages/index/inventory/add/add": {}, "pages/bill/bill": {}, "pages/bill/stock-list/stock-list": {}, "pages/data/data": {}, "pages/data/sale/sale": {}, "pages/data/sale/sale-return": {}, "pages/data/receive-pay/receive-pay": {}, "pages/data/receive-pay/receive-pay-detail": {}, "pages/data/receipt-payment/receipt-payment": {}, "pages/data/receipt-payment/receipt-payment-detail": {}, "pages/data/warning/customer/customer": {}, "pages/data/top/hotSelling/hotSelling": {}, "pages/data/fee/fee": {}, "pages/my/my": {}, "pages/my/login/login": { "backgroundColor": "#FFFFFF" }, "pages/my/set": {}, "pages/my/login/reg": {}, "pages/my/login/forget": {}, "pages/my/user/user": {}, "pages/my/user/useradd": {}, "pages/my/user/useredit": {}, "pages/my/account/accountlist": {}, "pages/my/login/editPassword": {}, "pages/my/share/share": {}, "pages/bill/sell-list/sell-list": {}, "pages/bill/sell-list/sell-detail": {}, "pages/bill/purchase-list/purchase-list": {}, "pages/bill/purchase-list/purchase-detail": {}, "pages/bill/payment-list/payment-list": {}, "pages/bill/receipt-list/receipt-list": {}, "pages/bill/fee-list/fee-list": {}, "pages/bill/sell-red-list/sell-red-list": {}, "pages/bill/sell-red-list/sell-detail": {}, "pages/bill/purchase-red-list/purchase-red-list": {}, "pages/bill/purchase-red-list/purchase-detail": {}, "pages/bill/inventory-list/inventory-list": {}, "pages/bill/begin-list/begin-list": {}, "pages/bill/begin-list/begin-detail": {}, "pages/bill/earlywarn-list/earlywarn-list": {}, "pages/my/integral/integral": {}, "pages/my/recharge/recharge": {}, "pages/my/share/myshare": {}, "pages/bill/inventory-list/inventory-detail": {}, "pages/my/about/about": {}, "pages/my/wxSet/wxSet": {}, "pages/my/print/print": {}, "pages/my/print/printlist": {} }, "globalStyle": { "navigationStyle": "custom" } };exports.default = _default;

/***/ }),

/***/ 8:
/*!*************************************************************************************!*\
  !*** /Users/xuewei/Desktop/mywork/newoneself/jinxiaocun/pages.json?{"type":"stat"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__BDBA323" };exports.default = _default;

/***/ })

}]);
>>>>>>> 3bb87a1fbc54a27008b2419f8403b991e2a840fe
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map