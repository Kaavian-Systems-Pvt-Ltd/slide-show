/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={646:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,"/* *{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n} */\r\n.slider-container{\r\n    /* height: 50vh;\r\n    width: 70%; */\r\n    background-color: white;\r\n    box-shadow: 0 3px 3px 0 rgb(100, 100, 203);\r\n    position: relative;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n}\r\n.slide-list {\r\n    display: flex;\r\n    height: 100%;\r\n    transition: transform 0.5s ease-in-out;\r\n    width: 100%;\r\n}\r\n.slide {\r\n    flex: 1 0 100%;\r\n    position: relative;\r\n}\r\n.slide-image{\r\n    display: flex;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    object-fit: contain;\r\n    border-radius: 10px;\r\n}\r\n.prevslide, .nextslide{\r\n    cursor: pointer;\r\n    position: absolute;\r\n    color : black;\r\n    border-radius: 100%;\r\n    top: 50%;\r\n    font-size: 2rem;\r\n    opacity:0.9;\r\n}\r\n.nextslide{\r\n    right: 2rem;\r\n}\r\n.prevslide{\r\n    left: 2rem;\r\n}\r\n.all-dots{\r\n    width:100%;\r\n    height:100%;\r\n    position: absolute;\r\n    display: flex;\r\n    top:90%;\r\n    justify-content: center;\r\n}\r\n.dot{\r\n    cursor: pointer;\r\n    width: 0.9rem;\r\n    height: 0.9rem;\r\n    margin: 0 3px;\r\n    border-radius: 50%;\r\n    border:2px solid white;\r\n    background-color:transparent;\r\n    display: inline-block;\r\n}\r\n.dot.active{\r\n    background-color: black;\r\n}\r\n",""]);const c=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},408:(e,t)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var r={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n=Object.assign,o={};function i(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||r}function a(){}function c(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||r}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},a.prototype=i.prototype;var s=c.prototype=new a;s.constructor=c,n(s,i.prototype),s.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty},294:(e,t,r)=>{"use strict";r(408)},774:(e,t,r)=>{var n=r(379),o=r(646);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},379:(e,t,r)=>{"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function a(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var d=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:b(f,t),references:1}),n.push(u)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,h=0;function b(e,t){var r,n,o;if(t.singleton){var i=h++;r=p||(p=s(t)),n=d.bind(null,r,i,!1),o=d.bind(null,r,i,!0)}else r=s(t),n=f.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var s=c(e,t),l=0;l<r.length;l++){var u=a(r[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=s}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,(()=>{"use strict";r(294),r(774)})()})();