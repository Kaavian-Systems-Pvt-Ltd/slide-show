(()=>{var e={383:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var n=t(81),o=t.n(n),i=t(645),a=t.n(i)()(o());a.push([e.id,".slider-container{\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.slide{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    transform: translateX(50%);\r\n    transition: all .3s ease;\r\n}\r\n.slide img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.current{\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n}\r\n.arrow-prev , .arrow-next{\r\n    position: absolute;\r\n    border: 2px solid white;\r\n    border-radius: 50%;\r\n    color: black;\r\n    background: white;\r\n    width : 1.3rem;\r\n    height: 1.3rem;\r\n    cursor: pointer;\r\n    z-index: 999;\r\n    top: 50%;\r\n    opacity: .7;\r\n}\r\n.arrow-prev :hover , .arrow-next :hover{\r\n    opacity: .5;\r\n}\r\n.arrow-next{\r\n    right: 2rem;\r\n}\r\n.arrow-prev{\r\n    left: 2rem;\r\n}\r\n.all-dots{\r\n    width:100%;\r\n    height:100%;\r\n    position: absolute;\r\n    display: flex;\r\n    top:90%;\r\n    justify-content: center;\r\n}\r\n.dot{\r\n    cursor: pointer;\r\n    width: 0.5rem;\r\n    height: 0.5rem;\r\n    margin: 0 3px;\r\n    border-radius: 50%;\r\n    border:2px solid white;\r\n    background-color:transparent;\r\n    display: inline-block;\r\n}\r\n.dot.active{\r\n    background-color: black;\r\n}",""]);const s=a},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:e=>{"use strict";e.exports=function(e){return e[1]}},942:(e,r,t)=>{var n=t(379),o=t(383);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},379:(e,r,t)=>{"use strict";var n,o=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}(),i=[];function a(e){for(var r=-1,t=0;t<i.length;t++)if(i[t].identifier===e){r=t;break}return r}function s(e,r){for(var t={},n=[],o=0;o<e.length;o++){var s=e[o],c=r.base?s[0]+r.base:s[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=a(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:v(p,r),references:1}),n.push(d)}return n}function c(e){var r=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=t.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){r.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(r);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,d=(l=[],function(e,r){return l[e]=r,l.filter(Boolean).join("\n")});function u(e,r,t,n){var o=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function p(e,r,t){var n=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,h=0;function v(e,r){var t,n,o;if(r.singleton){var i=h++;t=f||(f=c(r)),n=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(r),n=p.bind(null,t,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var t=s(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<t.length;n++){var o=a(t[n]);i[o].references--}for(var c=s(e,r),l=0;l<t.length;l++){var d=a(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=c}}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={id:n,exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var n={};(()=>{"use strict";t.r(n),t.d(n,{Slider:()=>c});const e=require("react");var r=t.n(e);const o=require("prop-types");var i=t.n(o);const a=e=>{let{activeIndex:t,onclick:n,sliderimages:o}=e;return r().createElement("div",{className:"all-dots"},o.map(((e,o)=>r().createElement("span",{key:o,className:t===o?"dot active":"dot",onClick:()=>n(o)}))))};a.propTypes={activeIndex:i().number.isRequired,sliderimages:i().array.isRequired,onclick:i().func.isRequired};const s=require("react-icons/ai");t(942);const c=t=>{const[n,o]=(0,e.useState)(0),i=t.slides.length;(0,e.useEffect)((()=>{if(!t.slides)return null;t.autoPlay&&setTimeout((()=>{o(n===i-1?0:n+1)}),t.transitionSpeed)}));const c={width:t.width,height:t.height};return r().createElement("div",{className:"slider-container",style:c},t.showArrow&&r().createElement(r().Fragment,null,r().createElement(s.AiOutlineArrowLeft,{className:"arrow-prev",onClick:()=>{o(0===n?i-1:n-1)}}),r().createElement(s.AiOutlineArrowRight,{className:"arrow-next",onClick:()=>{o(n===i-1?0:n+1)}})),t.slides.map(((e,t)=>r().createElement("div",{className:t===n?"slide current":"slide",key:t},t===n&&r().createElement(r().Fragment,null,r().createElement("img",{src:e.url,alt:"slide"}))))),t.showBullets&&r().createElement(a,{activeIndex:n,onclick:e=>o(e),sliderimages:t.slides}))};c.propTypes={slides:i().array,autoPlay:i().bool,transitionSpeed:i().number,width:i().string,height:i().string,showBullets:i().bool,showArrow:i().bool},c.defaultProps={autoPlay:!0,transitionSpeed:3e3,width:"50%",height:"50vh",showBullets:!0,showArrow:!0}})();var o=exports;for(var i in n)o[i]=n[i];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();