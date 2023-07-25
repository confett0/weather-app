(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),u=n(667),c=n.n(u),s=new URL(n(631),n.b),d=new URL(n(998),n.b),l=i()(a()),f=c()(s),h=c()(d);l.push([e.id,`@font-face {\n  font-family: 'Inter Light';\n  src: url(${f});\n  font-weight: 300;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: linear-gradient(135deg, #97ABFF 0%, #123597 100%);\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  font-family: 'Inter Light';\n}\n\n.container {\n  margin: auto;\n  padding: 25px 0 35px;\n  min-height: calc(100vh - 26px);\n  width: min(90%,900px);\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  padding-bottom: 20px;\n}\n\n#search {\n  background: #fff url(${h}) no-repeat 95% center;\n  border: none;\n  border-radius: 8px;\n  margin-left: auto;\n  padding: 10px 15px;\n  outline: none;\n  width: 280px;\n}\n\n.toggle {\n  --width: 50px;\n  --height: calc(var(--width) / 2);\n  position: relative;\n  display: inline-block;\n  width: var(--width);\n  height: var(--height);\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  border-radius: var(--height);\n  cursor: pointer;\n  margin-right: 15px;\n}\n\n.toggle input {\n  display: none;\n}\n\n.toggle .slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--height);\n  background-color: #ccc;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .slider::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(var(--height));\n  height: calc(var(--height));\n  border-radius: calc(var(--height) / 2);\n  background-color: #fff;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked + .slider {\n  background-color: #939191;\n}\n.toggle input:checked + .slider::before {\n  transform: translateX(calc(var(--width) - var(--height)));\n}\n\n.toggle .labels {\n  position: absolute;\n  top: 8px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 13px;\n  /* transition: all 0.4s ease-in-out; */\n}\n\n.toggle .labels::after {\n  content: attr(data-fahrenheit);\n  position: absolute;\n  right: -15px;\n  /* text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  transition: all 0.4s ease-in-out; */\n}\n\n.toggle .labels::before {\n  content: attr(data-celsius);\n  position: absolute;\n  left: -15px;\n  /* text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);\n  transition: all 0.4s ease-in-out; */\n}\n\n.weather-box {\n  background: linear-gradient(149deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.00) 100%);\n  border-radius: 14px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.today {\n  margin-bottom: 30px;\n  padding: 30px 20px;\n}\n\n.main-info {\n  text-align: center;\n}\n\n.today h1 {\n  font-size: 44px;\n  margin-bottom: 12px;\n}\n\n.current-temperature-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 72px;\n  gap: 20px;\n  margin: 15px 0 5px;\n}\n\n.current-temperature {\n  font-size: 72px;\n}\n\n.weather-icon {\n  width: 120px;\n  height: auto;\n}\n\n.current-condition {\n  margin-bottom: 20px;\n}\n\n.other-info {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.other-info-box {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.other-info-box img {\n  height: 40px;\n  width: 40px;\n}\n\n.other-info-box p {\n  font-size: 24px;\n}\n\n.future-weather {\n  display: flex;\n  justify-content: space-between;\n}\n\n.future-weather-box {\n  display: flex;\n  align-items: center;\n  width: min(48%, 425px);\n  height: 150px;\n  text-align: center;\n}\n\n.future-temperature {\n  font-size: 24px;\n  margin: 15px 0 10px;\n}\n\n.future-weather-icon {\n  width: 90px;\n  height: auto;\n}\n\nfooter {\n  font-size: 11px;\n  padding: 6px 0;\n  text-align: center;\n}\n\nfooter a, footer a:visited {\n  color: #fff;\n}\n\n@media screen and (max-width: 700px) {\n\n  header {\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  #search {\n    margin-left: 0;\n  }\n\n  .today {\n    flex-direction: column;\n    gap: 35px;\n  }\n\n  .other-info {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n\n  .other-info-box {\n    width: 45%;\n  }\n\n  .future-weather {\n    flex-direction: column;\n    gap: 30px;\n  }\n\n  .future-weather-box {\n    width: 100%;\n  }\n}`,""]);const m=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var c=e[u],s=r.base?c[0]+r.base:c[0],d=o[s]||0,l="".concat(s," ").concat(d);o[s]=d+1;var f=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var m=a(h,r);r.byIndex=u,t.splice(u,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var c=r(e,a),s=0;s<o.length;s++){var d=n(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},631:(e,t,n)=>{e.exports=n.p+"eec8664621fec98efb37.ttf"},998:(e,t,n)=>{e.exports=n.p+"a32b1e51aceedc48c92d.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),c=n.n(u),s=n(216),d=n.n(s),l=n(589),f=n.n(l),h=n(426),m={};function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function p(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function v(e){p(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===g(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function b(e){p(1,arguments);var t=v(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function y(e){p(1,arguments);var t=v(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=b(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=b(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}m.styleTagTransform=f(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var x={};function C(){return x}function T(e,t){var n,r,a,o,i,u,c,s;p(1,arguments);var d=C(),l=w(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:d.weekStartsOn)&&void 0!==r?r:null===(c=d.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=v(e),h=f.getUTCDay(),m=(h<l?7:0)+h-l;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function M(e,t){var n,r,a,o,i,u,c,s;p(1,arguments);var d=v(e),l=d.getUTCFullYear(),f=C(),h=w(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(c=f.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(l+1,0,h),m.setUTCHours(0,0,0,0);var g=T(m,t),b=new Date(0);b.setUTCFullYear(l,0,h),b.setUTCHours(0,0,0,0);var y=T(b,t);return d.getTime()>=g.getTime()?l+1:d.getTime()>=y.getTime()?l:l-1}function S(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const k=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return S("yy"===t?r%100:r,t.length)},D=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):S(n+1,2)},E=function(e,t){return S(e.getUTCDate(),t.length)},U=function(e,t){return S(e.getUTCHours()%12||12,t.length)},P=function(e,t){return S(e.getUTCHours(),t.length)},q=function(e,t){return S(e.getUTCMinutes(),t.length)},W=function(e,t){return S(e.getUTCSeconds(),t.length)},N=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return S(Math.floor(r*Math.pow(10,n-3)),t.length)};var Y={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return k(e,t)},Y:function(e,t,n,r){var a=M(e,r),o=a>0?a:1-a;return"YY"===t?S(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):S(o,t.length)},R:function(e,t){return S(y(e),t.length)},u:function(e,t){return S(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return S(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return S(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return D(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return S(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){p(1,arguments);var n=v(e),r=T(n,t).getTime()-function(e,t){var n,r,a,o,i,u,c,s;p(1,arguments);var d=C(),l=w(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:d.firstWeekContainsDate)&&void 0!==r?r:null===(c=d.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),f=M(e,t),h=new Date(0);return h.setUTCFullYear(f,0,l),h.setUTCHours(0,0,0,0),T(h,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):S(a,t.length)},I:function(e,t,n){var r=function(e){p(1,arguments);var t=v(e),n=b(t).getTime()-function(e){p(1,arguments);var t=y(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),b(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):S(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):E(e,t)},D:function(e,t,n){var r=function(e){p(1,arguments);var t=v(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):S(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return S(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return S(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return S(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):P(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):S(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):S(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):q(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):W(e,t)},S:function(e,t){return N(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return O(a);case"XXXX":case"XX":return j(a);default:return j(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return O(a);case"xxxx":case"xx":return j(a);default:return j(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+L(a,":");default:return"GMT"+j(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+L(a,":");default:return"GMT"+j(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return S(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return S((r._originalDate||e).getTime(),t.length)}};function L(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+S(o,2)}function O(e,t){return e%60==0?(e>0?"-":"+")+S(Math.abs(e)/60,2):j(e,t)}function j(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+S(Math.floor(a/60),2)+n+S(a%60,2)}const F=Y;var _=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},z=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const A={p:z,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return _(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",_(a,t)).replace("{{time}}",z(o,t))}};var H=["D","DD"],Q=["YY","YYYY"];function R(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function G(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const X={date:G({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:G({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:G({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var I={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function $(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const J={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:$({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:$({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:$({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:$({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:$({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function Z(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(c)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(c):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(c);return i=e.valueCallback?e.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(u.length)}}}var V,K={ordinalNumber:(V={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(V.matchPattern);if(!n)return null;var r=n[0],a=e.match(V.parsePattern);if(!a)return null;var o=V.valueCallback?V.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:Z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ee={code:"en-US",formatDistance:function(e,t,n){var r,a=B[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:X,formatRelative:function(e,t,n,r){return I[e]},localize:J,match:K,options:{weekStartsOn:0,firstWeekContainsDate:1}};var te=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ne=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,re=/^'([^]*?)'?$/,ae=/''/g,oe=/[a-zA-Z]/;function ie(e,t,n){var r,a,o,i,u,c,s,d,l,f,h,m,b,y,x,T,M,S;p(2,arguments);var k=String(t),D=C(),E=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:D.locale)&&void 0!==r?r:ee,U=w(null!==(o=null!==(i=null!==(u=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(s=n.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==u?u:D.firstWeekContainsDate)&&void 0!==i?i:null===(l=D.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=w(null!==(h=null!==(m=null!==(b=null!==(y=null==n?void 0:n.weekStartsOn)&&void 0!==y?y:null==n||null===(x=n.locale)||void 0===x||null===(T=x.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==b?b:D.weekStartsOn)&&void 0!==m?m:null===(M=D.locale)||void 0===M||null===(S=M.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==h?h:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var q=v(e);if(!function(e){if(p(1,arguments),!function(e){return p(1,arguments),e instanceof Date||"object"===g(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=v(e);return!isNaN(Number(t))}(q))throw new RangeError("Invalid time value");var W=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(q),N=function(e,t){return p(2,arguments),function(e,t){p(2,arguments);var n=v(e).getTime(),r=w(t);return new Date(n+r)}(e,-w(t))}(q,W),Y={firstWeekContainsDate:U,weekStartsOn:P,locale:E,_originalDate:q};return k.match(ne).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,A[t])(e,E.formatLong):e})).join("").match(te).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(re))?o[1].replace(ae,"'"):a;var u,c=F[i];if(c)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===Q.indexOf(u))||R(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==H.indexOf(e)}(r)||R(r,t,String(e)),c(N,r,E.localize,Y);if(i.match(oe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}function ue(e,t){if(p(2,arguments),!t||"object"!==g(t))return new Date(NaN);var n=t.years?w(t.years):0,r=t.months?w(t.months):0,a=t.weeks?w(t.weeks):0,o=t.days?w(t.days):0,i=t.hours?w(t.hours):0,u=t.minutes?w(t.minutes):0,c=t.seconds?w(t.seconds):0,s=v(e),d=r||n?function(e,t){p(2,arguments);var n=v(e),r=w(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),o=new Date(n.getTime());return o.setMonth(n.getMonth()+r+1,0),a>=o.getDate()?o:(n.setFullYear(o.getFullYear(),o.getMonth(),a),n)}(s,r+12*n):s,l=o||a?function(e,t){p(2,arguments);var n=v(e),r=w(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}(d,o+7*a):d,f=1e3*(c+60*(u+60*i));return new Date(l.getTime()+f)}const ce=n.p+"db00ab32b2f1225be6f3.png",se=n.p+"713cc4a5dc775af040af.png",de=n.p+"9200af2fd8e9fd124f9e.png",le=n.p+"ff4fc742a49f55cee8c8.png",fe=n.p+"db5957cded26fd78c674.png",he=n.p+"baaf7998b58fa3489593.png",me=n.p+"63c02aa38b4676710be5.png",ge=n.p+"c1543f8cbc4966d74c5f.png",pe=n.p+"6d4cdbbc69dee463d374.png",ve=n.p+"983990932e681c911274.png",we=n.p+"0965331397298d0ff6aa.png",be=n.p+"74ec3683d02138bc3616.png",ye=n.p+"474b6d4df1b6e4e8516e.png",xe=n.p+"d084efceb8f1d07c7779.png",Ce=n.p+"6a172a6820be5e95bead.png",Te=n.p+"544d16dc02b3699457a9.png",Me=n.p+"b86750a0d14fb6d06960.png",Se=n.p+"63a67dfb25365f627b01.png",ke=(e,t)=>{if(1===t)switch(e){case 1e3:return ce;case 1003:return se;case 1006:case 1009:return de;case 1030:case 1135:case 1147:return le;case 1063:case 1150:case 1180:case 1183:case 1186:case 1240:return he;case 1066:case 1210:case 1213:case 1216:case 1219:case 1225:case 1237:case 1252:case 1258:case 1261:case 1264:return ve;case 1072:case 1171:case 1198:case 1201:case 1204:case 1207:case 1249:return me;case 1087:return ge;case 1114:case 1117:return pe;case 1189:case 1192:case 1195:case 1243:case 1246:return fe;case 1276:case 1279:case 1282:return we}if(0===t)switch(e){case 1e3:return be;case 1003:return Ce;case 1006:case 1009:return de;case 1030:case 1135:case 1147:return xe;case 1063:case 1150:case 1180:case 1183:case 1186:case 1240:return ye;case 1066:case 1210:case 1213:case 1216:case 1219:case 1225:case 1237:case 1252:case 1258:case 1261:case 1264:return Me;case 1072:case 1171:case 1198:case 1201:case 1204:case 1207:case 1249:return me;case 1087:return ge;case 1114:case 1117:return pe;case 1189:case 1192:case 1195:case 1243:case 1246:return Te;case 1276:case 1279:case 1282:return Se}},De=[ie(new Date,"EEEE, LLLL do"),ie(ue(new Date,{days:1}),"EEEE, LLLL do"),ie(ue(new Date,{days:2}),"EEEE, LLLL do")],Ee=document.querySelector(".current-temperature"),Ue=document.querySelector(".today-max"),Pe=document.querySelector(".today-min"),qe=document.querySelector(".feels-like"),We=document.querySelector(".wind"),Ne=document.querySelector(".wind-speed-unit"),Ye=document.querySelectorAll(".future-temp-min"),Le=document.querySelectorAll(".future-temp-max"),Oe=document.querySelector("#toggle");async function je(e){const t=await async function(e){try{const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6c5e8ef93bf8482d940131042233003&q=${e}&days=5`),n=await t.json();return console.log(n),n}catch(e){console.log(e)}}(e);!function(e){const t=document.querySelector(".location"),n=document.querySelector(".current-condition"),r=document.querySelector(".humidity"),a=document.querySelector(".rain"),o=document.querySelector(".today-date"),i=document.querySelector(".weather-icon"),u=document.querySelectorAll(".future-weather-condition"),c=document.querySelectorAll(".future-weather-icon"),s=document.querySelectorAll(".future-date");0===e.current.is_day&&(document.body.style.background="linear-gradient(135deg, #7F91DE 0%, #081334 100%)"),Oe.checked||(Ee.textContent=Math.round(e.current.temp_c),Ue.textContent=Math.round(e.forecast.forecastday[0].day.maxtemp_c),Pe.textContent=Math.round(e.forecast.forecastday[0].day.mintemp_c),qe.textContent=Math.round(e.current.feelslike_c),We.textContent=e.current.wind_kph,Ne.textContent="km/h",Ye.forEach(((t,n)=>t.textContent=Math.round(e.forecast.forecastday[n+1].day.mintemp_c))),Le.forEach(((t,n)=>t.textContent=Math.round(e.forecast.forecastday[n+1].day.maxtemp_c)))),Oe.checked&&(Ee.textContent=Math.round(e.current.temp_f),Ue.textContent=Math.round(e.forecast.forecastday[0].day.maxtemp_f),Pe.textContent=Math.round(e.forecast.forecastday[0].day.mintemp_f),qe.textContent=Math.round(e.current.feelslike_f),We.textContent=e.current.wind_mph,Ne.textContent="mph",Ye.forEach(((t,n)=>t.textContent=Math.round(e.forecast.forecastday[n+1].day.mintemp_f))),Le.forEach(((t,n)=>t.textContent=Math.round(e.forecast.forecastday[n+1].day.maxtemp_f)))),t.textContent=e.location.name,o.textContent=De[0],i.src=ke(e.current.condition.code,e.current.is_day),n.textContent=e.current.condition.text,r.textContent=`${e.current.humidity}%`,a.textContent=`${e.forecast.forecastday[0].day.daily_chance_of_rain}%`,s.forEach(((e,t)=>e.textContent=De[t+1])),u.forEach(((t,n)=>t.textContent=e.forecast.forecastday[n+1].day.condition.text)),c.forEach(((t,n)=>t.src=ke(e.forecast.forecastday[n+1].day.condition.code,1)))}(t)}const Fe=document.querySelector("#search");Fe.addEventListener("change",(()=>je(Fe.value))),document.querySelector("#toggle").addEventListener("change",(function(){const e=e=>Math.round(9*e/5+32),t=e=>Math.round(5*(e-32)/9);var n;Oe.checked&&(Ee.textContent=e(Ee.textContent),Ue.textContent=e(Ue.textContent),Pe.textContent=e(Pe.textContent),qe.textContent=e(qe.textContent),Ye.forEach((t=>t.textContent=e(t.textContent))),Le.forEach((t=>t.textContent=e(t.textContent))),We.textContent=(n=We.textContent,Math.round(.62137*n)),Ne.textContent="mph"),Oe.checked||(Ee.textContent=t(Ee.textContent),Ue.textContent=t(Ue.textContent),Pe.textContent=t(Pe.textContent),qe.textContent=t(qe.textContent),Ye.forEach((e=>e.textContent=t(e.textContent))),Le.forEach((e=>e.textContent=t(e.textContent))),We.textContent=(e=>Math.round(e/.62137))(We.textContent),Ne.textContent="km/h")})),je("london")})()})();