(()=>{"use strict";var n,e,t,r,o,a,i,c,s,u,p,d,l,f,m={426:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),u=new URL(t(24),t.b),p=i()(o()),d=s()(u);p.push([n.id,`@font-face {\n  font-family: 'Inter';\n  src: url(${d});\n  font-weight: 400;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: linear-gradient(135deg, #97ABFF 0%, #123597 100%);\n  color: #fff;\n  font-family: Inter;\n  min-height: 100vh;\n  padding: 30px;\n}\n\n.container {\n  margin: auto;\n  width: 1000px;\n}\n\n.logo {\n  margin-bottom: 30px;\n}\n\n#search {\n  border: none;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  padding: 8px 15px;\n  outline: none;\n  width: 280px;\n}\n\n.weather-box {\n  background: linear-gradient(149deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.00) 100%);\n  border-radius: 14px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.today {\n  height: 400px;\n  margin-bottom: 30px;\n}\n\n.main-info {\n  text-align: center;\n}\n\n.today h1 {\n  font-size: 44px;\n  margin-bottom: 12px;\n}\n\n.today-temperature-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 20px 0 15px;\n}\n\n.today-temperature {\n  font-size: 90px;\n}\n\n.other-info-box {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n\n.other-info-box img {\n  height: 40px;\n  width: 40px;\n}\n\n.other-info-box p {\n  font-size: 24px;\n}\n\n.future-weather {\n  display: flex;\n  justify-content: space-between;\n}\n\n.future-weather-box {\n  width: 280px;\n  height: 170px;\n}`,""]);const l=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],p=a[u]||0,d="".concat(u," ").concat(p);a[u]=p+1;var l=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var p=t(a[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},24:(n,e,t)=>{n.exports=t.p+"aadb65ac45347ff46699.ttf"}},h={};function y(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,y),t.exports}y.m=m,y.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return y.d(e,{a:e}),e},y.d=(n,e)=>{for(var t in e)y.o(e,t)&&!y.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),y.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;y.g.importScripts&&(n=y.g.location+"");var e=y.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=n})(),y.b=document.baseURI||self.location.href,y.nc=void 0,n=y(379),e=y.n(n),t=y(795),r=y.n(t),o=y(569),a=y.n(o),i=y(565),c=y.n(i),s=y(216),u=y.n(s),p=y(589),d=y.n(p),l=y(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),e()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals,async function(){!function(n){const e=document.querySelector(".today-temperature"),t=document.querySelector(".location"),r=document.querySelector(".today-condition"),o=document.querySelector(".feels-like"),a=document.querySelector(".humidity"),i=document.querySelector(".rain"),c=document.querySelector(".wind");e.textContent=`${n.current.temp_c} ºC`,t.textContent=n.location.name,r.textContent=n.current.condition.text,o.textContent=`${n.current.feelslike_c} ºC`,a.textContent=`${n.current.humidity} %;`,i.textContent=`${n.forecast.forecastday[0].day.daily_chance_of_rain} %`,c.textContent=`${n.current.wind_kph} km/h`}(await async function(n){const e=await fetch("https://api.weatherapi.com/v1/forecast.json?key=6c5e8ef93bf8482d940131042233003&q=strasbourg&days=5"),t=await e.json();return console.log(t),t}())}()})();