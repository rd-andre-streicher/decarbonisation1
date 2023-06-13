/*! For license information please see prod.2b103fab8e76ecd491c5.js.LICENSE.txt */
!function(){"use strict";var t,e,n,r,o={6663:function(t,e,n){n.d(e,{B$:function(){return h},Ft:function(){return s},Ro:function(){return p},aR:function(){return l},bU:function(){return d},lh:function(){return r}});var r,o=n(7031);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}!function(t){t.UNDEFINED="undefined",t.DELIVERY="lieferservice",t.PICKUP="abholservice",t.PRODUCTFINDER="productfinder",t.LSFK="lsfk"}(r||(r={}));var a=new Map([["DELIVERY",r.DELIVERY],["PICKUP",r.PICKUP]]),f=u((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.service=e}));function l(t){return new f(t)}function s(t){return t===r.UNDEFINED}function d(t){return t===r.PICKUP}function h(t){return t===r.DELIVERY}function p(t){return(0,o.fS)(a)(r.UNDEFINED)(t.service)}},9679:function(t,e,n){n.d(e,{bY:function(){return l},f1:function(){return y},gu:function(){return m}});var r=n(7031);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,c,u=[],a=!0,f=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);a=!0);}catch(t){f=!0,o=t}finally{try{if(!a&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(f)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c={INT:"INT",INT_NEW:"INT_NEW",PRE:"PRE",PRE_NEW:"PRE_NEW",PROD:"PROD"},u={INT:"shop-test.rewe.de",INT_NEW:"shop.int.rd-ecom-test.com",PRE:"shop-preprod.rewe.de",PRE_NEW:"shop.pre.rd-ecom-test.com",PROD:"shop.rewe.de"},a={INT:"int.rewe.de",INT_NEW:"www.int.rd-ecom-test.com",PRE:"pre.rewe.de",PRE_NEW:"www.pre.rd-ecom-test.com",PROD:"www.rewe.de"};function f(){var t=location.host;return Object.keys(c).reduce((function(e,n){return t.includes(u[n])||t.includes(a[n])?n:e}),null)}function l(t){var e=p(),n=e.host,r=e.params;s(r,t),d(r),location.assign(v(n,h(r)))}var s=function(t,e){for(var n=0;n<t.length;n++)t[n].startsWith("source=")&&(t.splice(n,1),n--);t.push("source=".concat(e))},d=function(t){for(var e=0;e<t.length;e++)t[e].startsWith("region_id=")&&(t.splice(e,1),e--)},h=function(t){return t.filter((function(t){return(0,r.ff)(t.startsWith("".concat("serviceTypes","=")))}))},p=function(){var t=o(location.href.split("#"),2),e=t[0],n=void 0===e?"/":e,r=t[1],i=o(n.split("?"),2),c=i[0],u=i[1];return{host:c,params:(null==u?void 0:u.split("&"))||[],hash:r}},v=function(t,e){return"".concat(t,"?").concat(e.join("&"))},m=function(){return location.assign("".concat(location.protocol,"//").concat(u[f()||c.PROD]))},y=function(){return a[f()]||a.PROD}},987:function(t,e,n){n.d(e,{K:function(){return c}});var r=n(7031);function o(t){return{getOrElse:function(e){return t},get:function(){return t},orElse:function(e){return t},map:function(e){return c(e(t))},flatMap:function(e){return e(t).map(r.yR)},isEmpty:function(){return!1},isDefined:function(){return!0},filter:function(e){return e(t)?o(t):i()},equals:function(e){return t===e}}}function i(t){var e={getOrElse:function(t){return t},get:function(){return null},orElse:function(t){return t()},map:function(t){return e},flatMap:function(t){return e},isEmpty:function(){return!0},isDefined:function(){return!1},filter:function(t){return i()},equals:function(t){return c(t).isEmpty()}};return e}function c(t){return(0,r.Uh)(t)?o(t):i()}c.empty=function(){return i()}},7031:function(t,e,n){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{$o:function(){return S},DY:function(){return l},HD:function(){return m},Ny:function(){return _},PJ:function(){return b},Uh:function(){return p},ZT:function(){return c},fS:function(){return f},ff:function(){return i},ke:function(){return y},kw:function(){return a},mf:function(){return w},oA:function(){return v},pQ:function(){return P},r$:function(){return O},ts:function(){return E},wR:function(){return N},wb:function(){return L},xb:function(){return s},yR:function(){return u},zK:function(){return g}});var o=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}},i=function(t){return!t},c=function(){},u=function(t){return t},a=function(t){return function(e){return t.includes(e)}},f=function(t){return function(e){return function(n){return t.get(n)||e}}},l=function(t){return function(e){return e.slice().sort(t)}},s=function(t){return p(t)&&0===(null==t?void 0:t.length)},d=o(i,(function(t){return null===t})),h=o(i,(function(t){return void 0===t})),p=function(t){return d(t)&&h(t)},v=function(t){return!0===t},m=function(t){return"string"==typeof t},y=function(t){return""===t},b=o(i,m),g=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.some((function(e){return e(t)}))}}(b,y),w=function(t){return"function"==typeof t},E=o(i,w),k=function(t){return new Promise((function(e){return setTimeout(e,t)}))},P=function(t){return function(e){return Promise.all([].concat(function(t){if(Array.isArray(t))return r(t)}(n=e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[k(t)]));var n}},L=function(t){return function(e){return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return k(t).then((function(){return e.apply(void 0,r)}))}}},S=a(["Escape","Esc"]),O=a(["Enter"]),N=a(["Tab"]),_=function(t){return function(e){return 0===e.indexOf(t)}}}},i={};function c(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return o[t](n,n.exports,c),n.loaded=!0,n.exports}c.m=o,c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,{a:e}),e},e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},c.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);c.r(o);var i={};t=t||[null,e({}),e([]),e(e)];for(var u=2&r&&n;"object"==typeof u&&!~t.indexOf(u);u=e(u))Object.getOwnPropertyNames(u).forEach((function(t){i[t]=function(){return n[t]}}));return i.default=function(){return n},c.d(o,i),o},c.d=function(t,e){for(var n in e)c.o(e,n)&&!c.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},c.f={},c.e=function(t){return Promise.all(Object.keys(c.f).reduce((function(e,n){return c.f[n](t,e),e}),[]))},c.u=function(t){return({454:"mcheadless",612:"string-repeat",630:"mcapp",653:"intersection-observer",780:"array-fill",814:"mc",859:"document-register-element",958:"marketsearch"}[t]||t)+"."+t+"."+{223:"df23a6dce9a22d1753a7",454:"30ed5a697f357470baff",534:"0c61f1801311ce81e862",588:"6dc2276fc4588da9ee18",612:"12abafcf7feb3537a8af",630:"881132eed872f53185be",653:"0759477dffa300d0c733",780:"9a587180c38c3e160a40",814:"0f41e7057b3728f3bb57",859:"3a5d841d676f95de82c5",958:"ddbccaf623a921c4bffe"}[t]+".js"},c.miniCssF=function(t){return({814:"mc",958:"marketsearch"}[t]||t)+"."+{534:"e49b13983a235c9991e5",814:"ed7b89c4b1c5e4cf5845",958:"ba8a5cc113050fa274cd"}[t]+".css"},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n={},r="market-chooser-frontend:",c.l=function(t,e,o,i){if(n[t])n[t].push(e);else{var u,a;if(void 0!==o)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){u=s;break}}u||(a=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.setAttribute("data-webpack",r+o),u.src=t),n[t]=[e];var d=function(e,r){u.onerror=u.onload=null,clearTimeout(h);var o=n[t];if(delete n[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(r)})),e)return e(r)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),a&&document.head.appendChild(u)}},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},c.p="https://shop.rewe-static.de/mcfe/assets/",function(){if("undefined"!=typeof document){var t={714:0};c.f.miniCss=function(e,n){t[e]?n.push(t[e]):0!==t[e]&&{534:1,814:1,958:1}[e]&&n.push(t[e]=function(t){return new Promise((function(e,n){var r=c.miniCssF(t),o=c.p+r;if(function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===t||o===e))return c}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var c;if((o=(c=i[r]).getAttribute("data-href"))===t||o===e)return c}}(r,o))return e();!function(t,e,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var c=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,a=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=c,a.request=u,i.parentNode&&i.parentNode.removeChild(i),o(a)}},i.href=e,document.head.appendChild(i)}(t,o,0,e,n)}))}(e).then((function(){t[e]=0}),(function(n){throw delete t[e],n})))}}}(),function(){var t={714:0};c.f.j=function(e,n){var r=c.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=t[e]=[n,o]}));n.push(r[2]=o);var i=c.p+c.u(e),u=new Error;c.l(i,(function(n){if(c.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}}),"chunk-"+e,e)}};var e=function(e,n){var r,o,i=n[0],u=n[1],a=n[2],f=0;if(i.some((function(e){return 0!==t[e]}))){for(r in u)c.o(u,r)&&(c.m[r]=u[r]);a&&a(c)}for(e&&e(n);f<i.length;f++)o=i[f],c.o(t,o)&&t[o]&&t[o][0](),t[o]=0},n=self.webpackChunkmarket_chooser_frontend=self.webpackChunkmarket_chooser_frontend||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),function(){var t=c(7031),e=c(987),n=c(6663);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",a=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,c=Object.create(o.prototype),u=new N(r||[]);return i(c,"_invoke",{value:P(t,n,u)}),c}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h={};function p(){}function v(){}function m(){}var y={};l(y,u,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(_([])));g&&g!==e&&n.call(g,u)&&(y=g);var w=m.prototype=p.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function o(i,c,u,a){var f=d(t[i],t,c);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==r(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(s).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,a)}))}a(f.arg)}var c;i(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return c=c?c.then(r,r):r()}})}function P(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=L(c,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var a=d(t,e,n);if("normal"===a.type){if(r=n.done?"completed":"suspendedYield",a.arg===h)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r="completed",n.method="throw",n.arg=a.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return v.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,f,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,f,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(k.prototype),l(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new k(s(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},E(w),l(w,f,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),a=n.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function i(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function u(){var t;return t=o().mark((function t(r){var i,c,u,a,f,l,s,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r;case 2:return i=t.sent,c=i.customerZipCode,u=i.isOrderModificationEnabled,a=i.isLoggedIn,f=i.selectedMarket,l=i.selectedService,s=i.intention,d=i.productfinderStationaryIsActive,t.abrupt("return",{customerZipCode:(0,e.K)(c),selectedMarket:(0,e.K)(f),selectedService:(0,e.K)(l),sessionIntention:s||n.lh.UNDEFINED,isOrderModificationEnabled:u,isLoggedIn:a,productfinderStationaryIsActive:d});case 11:case"end":return t.stop()}}),t)})),u=function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function u(t){i(c,r,o,u,a,"next",t)}function a(t){i(c,r,o,u,a,"throw",t)}u(void 0)}))},u.apply(this,arguments)}var a=c(9679);function f(r){var o=l(r),i=o.forceMarketSelection,c=o.callback,u=o.redirectPath,f=o.intention,s=o.check;return{get forceMarketSelection(){return!!i},get callback(){return(0,t.mf)(c)?c:function(e){return(0,t.HD)(e)&&(0,t.Ny)("/")(e)}(u)?function(){return location.assign(u)}:function(){return(0,a.bY)("mc")}},get intention(){return r=f,(0,e.K)(r).flatMap((function(n){return(0,t.ff)((0,t.Uh)(n))?e.K.empty():(0,e.K)(n)})).flatMap((function(n){return(0,t.ff)(function(e){return(0,t.kw)(["PICKUP","DELIVERY"])(null==e?void 0:e.service)}(n))?(r="intention data was invalid: ".concat(n),o=e.K.empty(),console.error(r),o):(0,e.K)(n);var r,o})).map((function(t){return(0,n.aR)((0,n.Ro)(t))}));var r},get check(){return!!s}}}function l(e){var n=(0,t.Uh)(e)?e:{};return{forceMarketSelection:n.forceMarketSelection,callback:n.callback,redirectPath:n.redirectPath,intention:n.intention,check:n.check}}var s="MarketChooser:showMarketSelection",d="MarketChooser:selectLsfkMarket",h="MarketChooser:showMarketSearch",p="MarketChooser:show",v="MarketSelector:show",m="MarketChooser:showPickupSelection",y="MarketChooser:switchToPickupMarket",b="MarketSelector:switchToPickupMarket",g="MarketChooser:switchToDeliveryMarket",w=!1,E={arrayFill:function(){return Array.prototype.fill?Promise.resolve():c.e(780).then(c.t.bind(c,2088,23))},intersectionObserver:function(){return window.IntersectionObserver?Promise.resolve():c.e(653).then(c.t.bind(c,950,23))},customElements:function(){return window.customElements?Promise.resolve():c.e(859).then(c.t.bind(c,2816,23))},stringRepeat:function(){return String.prototype.repeat?Promise.resolve():c.e(612).then(c.t.bind(c,7967,23))}};function k(){return Promise.all([E.arrayFill(),E.intersectionObserver(),E.customElements(),E.stringRepeat()])}function P(){var t="gbmc-market-chooser-container";return document.querySelector(".".concat(t))?Promise.resolve():new Promise((function(e){var n=document.createElement("div");n.classList.add(t),document.body.childNodes[0]?document.body.insertBefore(n,document.body.childNodes[0]):document.body.appendChild(n),e()}))}function L(e){var n=e.detail||{},r=(null==n?void 0:n.data)||{},o=r.entry,i=r.hideMarketChooser,c=r.callback;n.callback=n.callback||c,w||(document.dispatchEvent(new CustomEvent("MarketSelector:initialized")),w=!0),(0,t.oA)(i)||((0,t.Uh)(o)&&"stationary"===o?I({detail:n}):O({detail:n}))}function S(r,o){k().then(P).then((function(){return Promise.all([c.e(588),c.e(630)]).then(c.bind(c,5310))})).then((function(o){return(0,o.runWithEventPropsAndConfig)(r,(i=r,c="/api/marketselection/configuration?checkMarketSelection=".concat((0,t.oA)(i.check)),fetch(c).then((function(t){return 200===t.status?function(t){return u.apply(this,arguments)}(t.json()):Promise.reject()})).catch((function(){return Promise.resolve({customerZipCode:e.K.empty(),selectedService:e.K.empty(),selectedMarket:e.K.empty(),isOrderModificationEnabled:!1,isLoggedIn:!1,sessionIntention:n.lh.UNDEFINED,productfinderStationaryIsActive:!1})}))));var i,c})).then(o).catch(console.error)}function O(t){var e=t.detail,n=e&&e.loadSuccessCallback||function(){};S(f(e),n)}function N(r){var o,i=r.detail,c=i&&i.loadSuccessCallback||function(){};S((o=l(i).callback,{forceMarketSelection:!1,get callback(){return(0,t.mf)(o)?o:function(){return(0,a.bY)("mc")}},get intention(){return(0,e.K)((0,n.aR)(n.lh.UNDEFINED))},check:!1,showPickupSelection:!0}),c)}function _(t){var e=t.detail;k().then((function(){return Promise.all([c.e(588),c.e(454)]).then(c.bind(c,2330))})).then((function(t){return(0,t.selectLsfkMarket)(e)})).catch(console.error)}function M(t){var e=t.detail;k().then((function(){return Promise.all([c.e(588),c.e(454)]).then(c.bind(c,2330))})).then((function(t){return(0,t.switchToPickupMarket)(e)})).catch(console.error)}function j(t){var e=t.detail;k().then((function(){return Promise.all([c.e(588),c.e(454)]).then(c.bind(c,2330))})).then((function(t){return(0,t.switchToDeliveryMarket)(e)})).catch(console.error)}function I(t){var e=t.detail,n=null!=e?e:{check:void 0,callback:void 0},r=n.callback,o=n.check,i=fetch("/api/marketsearch/configuration").then((function(t){return 200===t.status?t.json():Promise.reject()})).catch((function(){return Promise.resolve({selectedStationaryMarket:null})}));Promise.all([E.arrayFill(),E.customElements(),E.stringRepeat()]).then(P).then((function(){return Promise.all([c.e(588),c.e(223),c.e(534),c.e(958)]).then(c.bind(c,3413))})).then((function(t){return(0,t.run)(i,r,o)})).catch(console.error)}window.__gbmcLoaded||(delete window.__gbmcLoaded,w=!1,document.removeEventListener(s,O),document.removeEventListener(d,_),document.removeEventListener(h,I),document.removeEventListener(p,L),document.removeEventListener(v,L),document.removeEventListener(y,M),document.removeEventListener(b,M),document.removeEventListener(g,j),document.removeEventListener(m,N),document.addEventListener(s,O),document.addEventListener(d,_),document.addEventListener(h,I),document.addEventListener(p,L),document.addEventListener(v,L),document.addEventListener(y,M),document.addEventListener(b,M),document.addEventListener(g,j),document.addEventListener(m,N),document.dispatchEvent(new CustomEvent("MarketChooser:isReady")),window.__gbmcLoaded=!0)}()}();