"use strict";(self.webpackChunkTopWritePlugins_comment=self.webpackChunkTopWritePlugins_comment||[]).push([[624],{624:(e,n,r)=>{r.r(n),r.d(n,{default:()=>c});var t=r(159),o=r(99),a=r(196);function c(){const e=(0,o.useSelector)("file"),n=(0,o.useBook)(),c=(0,a.useMemo)((()=>"".concat(n.id,"-").concat(e.path)),[e]),i=function(){const{config:e}=(0,o.useBook)(),n=r(181);return e.getPluginConfig("comment",n)}();return(0,a.useEffect)((()=>{i.getValue("appid")&&i.getValue("conf")&&(window.changyan=void 0,window.cyan=void 0,(0,o.loadjs)("https://cy-cdn.kuaizhan.com/upload/changyan.js",(()=>{window.changyan&&window.changyan.api.config({appid:i.getValue("appid"),conf:i.getValue("conf")})})))}),[c]),(0,t.jsx)("div",{id:"SOHUCS",sid:c},void 0)}},2:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var c,i,f=o(e),u=1;u<arguments.length;u++){for(var s in c=Object(arguments[u]))r.call(c,s)&&(f[s]=c[s]);if(n){i=n(c);for(var l=0;l<i.length;l++)t.call(c,i[l])&&(f[i[l]]=c[i[l]])}}return f}},709:(e,n,r)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
r(2);var t=r(196),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,r){var t,a={},u=null,s=null;for(t in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(s=n.ref),n)i.call(n,t)&&!f.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:o,type:e,key:u,ref:s,props:a,_owner:c.current}}n.jsx=u},159:(e,n,r)=>{e.exports=r(709)}}]);
//# sourceMappingURL=624-bd5998.js.map