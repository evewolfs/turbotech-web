/*! For license information please see component---src-pages-contact-js-3cad9b1d61c6422e0d10.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[501],{5360:function(e,t,r){!function(e,t){"use strict";function r(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function o(){}function i(){}i.resetWarningCache=o;var a=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r},c=r((function(e){e.exports=a()}));function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return d(e)||m(e,t)||y(e,t)||v()}function d(e){if(Array.isArray(e))return e}function m(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}function y(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g=function(e){var r=t.useRef(e);return t.useEffect((function(){r.current=e}),[e]),r.current},b=function(e){return null!==e&&"object"===l(e)},w=function(e){return b(e)&&"function"==typeof e.then},E=function(e){return b(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment},x="[object Object]",O=function e(t,r){if(!b(t)||!b(r))return t===r;var n=Array.isArray(t);if(n!==Array.isArray(r))return!1;var o=Object.prototype.toString.call(t)===x;if(o!==(Object.prototype.toString.call(r)===x))return!1;if(!o&&!n)return t===r;var i=Object.keys(t),a=Object.keys(r);if(i.length!==a.length)return!1;for(var c={},u=0;u<i.length;u+=1)c[i[u]]=!0;for(var s=0;s<a.length;s+=1)c[a[s]]=!0;var l=Object.keys(c);if(l.length!==i.length)return!1;var f=t,p=r,d=function(t){return e(f[t],p[t])};return l.every(d)},j=function(e,t,r){return b(e)?Object.keys(e).reduce((function(n,o){var i=!b(t)||!O(e[o],t[o]);return r.includes(o)?(i&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),n):i?s(s({},n||{}),{},f({},o,e[o])):n}),null):null},S="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",P=function(e){if(null===e||E(e))return e;throw new Error(S)},_=function(e){if(w(e))return{tag:"async",stripePromise:Promise.resolve(e).then(P)};var t=P(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},k=t.createContext(null);k.displayName="ElementsContext";var A=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},C=function(e){var r=e.stripe,n=e.options,o=e.children,i=t.useMemo((function(){return _(r)}),[r]),a=p(t.useState((function(){return{stripe:"sync"===i.tag?i.stripe:null,elements:"sync"===i.tag?i.stripe.elements(n):null}})),2),c=a[0],u=a[1];t.useEffect((function(){var e=!0,t=function(e){u((function(t){return t.stripe?t:{stripe:e,elements:e.elements(n)}}))};return"async"!==i.tag||c.stripe?"sync"!==i.tag||c.stripe||t(i.stripe):i.stripePromise.then((function(r){r&&e&&t(r)})),function(){e=!1}}),[i,c,n]);var s=g(r);t.useEffect((function(){null!==s&&s!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[s,r]);var l=g(n);return t.useEffect((function(){if(c.elements){var e=j(n,l,["clientSecret","fonts"]);e&&c.elements.update(e)}}),[n,l,c.elements]),t.useEffect((function(){var e=c.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.13.0"}),e.registerAppInfo({name:"react-stripe-js",version:"1.13.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[c.stripe]),t.createElement(k.Provider,{value:c},o)},T=function(e){var r=t.useContext(k);return A(r,e)},I=function(){return T("calls useElements()").elements},L=function(){return T("calls useStripe()").stripe},F=function(e){return(0,e.children)(T("mounts <ElementsConsumer>"))};F.propTypes={children:c.func.isRequired};var M=function(e){var r=t.useRef(e);return t.useEffect((function(){r.current=e}),[e]),function(){r.current&&r.current.apply(r,arguments)}},N=function(){},D=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},R=function(e,r){var n="".concat(D(e),"Element"),o=r?function(e){T("mounts <".concat(n,">"));var r=e.id,o=e.className;return t.createElement("div",{id:r,className:o})}:function(r){var o=r.id,i=r.className,a=r.options,c=void 0===a?{}:a,u=r.onBlur,s=void 0===u?N:u,l=r.onFocus,f=void 0===l?N:l,p=r.onReady,d=void 0===p?N:p,m=r.onChange,y=void 0===m?N:m,h=r.onEscape,v=void 0===h?N:h,b=r.onClick,w=void 0===b?N:b,E=r.onLoadError,x=void 0===E?N:E,O=r.onLoaderStart,S=void 0===O?N:O,P=r.onNetworksChange,_=void 0===P?N:P,k=T("mounts <".concat(n,">")).elements,A=t.useRef(null),C=t.useRef(null),I=M(d),L=M(s),F=M(f),D=M(w),R=M(y),Z=M(v),B=M(x),U=M(S),W=M(_);t.useLayoutEffect((function(){if(null==A.current&&k&&null!=C.current){var t=k.create(e,c);A.current=t,t.mount(C.current),t.on("ready",(function(){return I(t)})),t.on("change",R),t.on("blur",L),t.on("focus",F),t.on("escape",Z),t.on("loaderror",B),t.on("loaderstart",U),t.on("networkschange",W),t.on("click",D)}}));var Y=g(c);return t.useEffect((function(){if(A.current){var e=j(c,Y,["paymentRequest"]);e&&A.current.update(e)}}),[c,Y]),t.useLayoutEffect((function(){return function(){A.current&&(A.current.destroy(),A.current=null)}}),[]),t.createElement("div",{id:o,className:i,ref:C})};return o.propTypes={id:c.string,className:c.string,onChange:c.func,onBlur:c.func,onFocus:c.func,onReady:c.func,onClick:c.func,onLoadError:c.func,onLoaderStart:c.func,onNetworksChange:c.func,options:c.object},o.displayName=n,o.__elementType=e,o},Z="undefined"==typeof window,B=R("auBankAccount",Z),U=R("card",Z),W=R("cardNumber",Z),Y=R("cardExpiry",Z),q=R("cardCvc",Z),G=R("fpxBank",Z),z=R("iban",Z),H=R("idealBank",Z),J=R("p24Bank",Z),K=R("epsBank",Z),Q=R("payment",Z),V=R("paymentRequestButton",Z),$=R("linkAuthentication",Z),X=R("address",Z),ee=R("shippingAddress",Z),te=R("cart",Z),re=R("paymentMethodMessaging",Z),ne=R("affirmMessage",Z),oe=R("afterpayClearpayMessage",Z);e.AddressElement=X,e.AffirmMessageElement=ne,e.AfterpayClearpayMessageElement=oe,e.AuBankAccountElement=B,e.CardCvcElement=q,e.CardElement=U,e.CardExpiryElement=Y,e.CardNumberElement=W,e.CartElement=te,e.Elements=C,e.ElementsConsumer=F,e.EpsBankElement=K,e.FpxBankElement=G,e.IbanElement=z,e.IdealBankElement=H,e.LinkAuthenticationElement=$,e.P24BankElement=J,e.PaymentElement=Q,e.PaymentMethodMessagingElement=re,e.PaymentRequestButtonElement=V,e.ShippingAddressElement=ee,e.useElements=I,e.useStripe=L,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(7294))},6493:function(e,t){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var n,o="https://js.stripe.com/v3",i=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,a="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",c=null,u=function(e){return null!==c||(c=new Promise((function(t,r){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(a),window.Stripe)t(window.Stripe);else try{var n=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var r=e[t];if(i.test(r.src))return r}return null}();n&&e?console.warn(a):n||(n=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(o).concat(t);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r}(e)),n.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(c){return void r(c)}else t(null)}))),c},s=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.42.0",startTime:t})}(n,r),n},l=!1,f=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];l=!0;var o=Date.now();return u(n).then((function(e){return s(e,t,o)}))};f.setLoadParameters=function(e){if(l)throw new Error("You cannot change load parameters after calling loadStripe");n=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==r(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)}(e)}},3039:function(e,t,r){r(6493)},9483:function(e,t,r){var n=r(4411),o=r(6330),i=TypeError;e.exports=function(e){if(n(e))return e;throw i(o(e)+" is not a constructor")}},8523:function(e,t,r){"use strict";var n=r(9662),o=TypeError,i=function(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw o("Bad Promise constructor");t=e,r=n})),this.resolve=n(t),this.reject=n(r)};e.exports.f=function(e){return new i(e)}},2492:function(e,t,r){var n=r(7854);e.exports=n.Promise},9478:function(e,t,r){var n=r(9670),o=r(111),i=r(8523);e.exports=function(e,t){if(n(e),o(t)&&t.constructor===e)return t;var r=i.f(e);return(0,r.resolve)(t),r.promise}},6707:function(e,t,r){var n=r(9670),o=r(9483),i=r(8554),a=r(5112)("species");e.exports=function(e,t){var r,c=n(e).constructor;return void 0===c||i(r=n(c)[a])?t:o(r)}},7727:function(e,t,r){"use strict";var n=r(2109),o=r(1913),i=r(2492),a=r(7293),c=r(5005),u=r(614),s=r(6707),l=r(9478),f=r(8052),p=i&&i.prototype;if(n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){p.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=s(this,c("Promise")),r=u(e);return this.then(r?function(r){return l(t,e()).then((function(){return r}))}:e,r?function(r){return l(t,e()).then((function(){throw r}))}:e)}}),!o&&u(i)){var d=c("Promise").prototype.finally;p.finally!==d&&f(p,"finally",d,{unsafe:!0})}},3815:function(e,t,r){"use strict";var n=r(3366),o=r(7294),i=["children","fontSize","fontWeight","color","maxWidth","minHeight","margin","marginTop","padding","width","overflow","textTransform","textAlign","display","flexDirection","alignItems","justifyContent","position","style"];t.Z=function(e){var t=e.children,r=e.fontSize,a=e.fontWeight,c=void 0===a?"600":a,u=e.color,s=e.maxWidth,l=e.minHeight,f=(e.margin,e.marginTop),p=e.padding,d=e.width,m=e.overflow,y=e.textTransform,h=e.textAlign,v=e.display,g=e.flexDirection,b=e.alignItems,w=e.justifyContent,E=e.position,x=e.style,O=(0,n.Z)(e,i);return o.createElement("div",Object.assign({},O,{style:Object.assign({color:u,fontSize:r,fontWeight:c,minHeight:l,padding:p,width:d,marginTop:f,display:v,maxWidth:s,textTransform:y,alignItems:b,overflow:m,justifyContent:w,flexDirection:g,textAlign:h,position:E},x)}),t)}},444:function(e,t,r){"use strict";var n=r(3366),o=r(7294),i=r(3815),a=["title","children"];t.Z=function(e){var t=e.title,r=(e.children,(0,n.Z)(e,a));return o.createElement(i.Z,Object.assign({minHeight:0,padding:0,width:"100%"},r),t?o.createElement(i.Z,{fontSize:"clamp(2rem, 3vw, 3rem)",style:{lineHeight:"1.2",padding:"0% 2%",margin:"0 2%"}},t):null)}},376:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return Z},default:function(){return B}});var n=r(7294),o=r(557),i=r(885),a=r(5671),c=r(3144);function u(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,o)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){u(i,n,o,a,c,"next",e)}function c(e){u(i,n,o,a,c,"throw",e)}a(void 0)}))}}var l=r(4942),f=(r(7727),r(4687)),p=r.n(f),d=(r(3039),r(5360)),m=["prefix","field","errors"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b,w,E=Object.create,x=Object.defineProperty,O=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyNames,S=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,_=function(e,t,r){return r=null!=e?E(S(e)):{},function(e,t,r,n){if(t&&"object"==typeof t||"function"==typeof t){var o,i=v(j(t));try{var a=function(){var i=o.value;!P.call(e,i)&&i!==r&&x(e,i,{get:function(){return t[i]},enumerable:!(n=O(t,i))||n.enumerable})};for(i.s();!(o=i.n()).done;)a()}catch(c){i.e(c)}finally{i.f()}}return e}(!t&&e&&e.__esModule?r:x(r,"default",{value:e,enumerable:!0}),e)},k=(b=function(e,t){var r,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,u=Object.prototype.hasOwnProperty,f={};!function(e,t){for(var r in t)n(e,r,{get:t[r],enumerable:!0})}(f,{Client:function(){return _},createClient:function(){return k},getDefaultClient:function(){return A},isFieldError:function(){return g}}),t.exports=(r=f,function(e,t,r,a){if(t&&"object"==typeof t||"function"==typeof t){var c,s=v(i(t));try{var l=function(){var i=c.value;!u.call(e,i)&&i!==r&&n(e,i,{get:function(){return t[i]},enumerable:!(a=o(t,i))||a.enumerable})};for(s.s();!(c=s.n()).done;)l()}catch(f){s.e(f)}finally{s.f()}}return e}(n({},"__esModule",{value:!0}),r));var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",m=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,y=function(e){return e.REQUIRED_FIELD_MISSING="REQUIRED_FIELD_MISSING",e.REQUIRED_FIELD_EMPTY="REQUIRED_FIELD_EMPTY",e.TYPE_EMAIL="TYPE_EMAIL",e.TYPE_NUMERIC="TYPE_NUMERIC",e.TYPE_TEXT="TYPE_TEXT",e}(y||{});function g(e){return e.code in y&&void 0!==e.field}var b=function(e){return function(e){for(var t,r,n,o,i="",a=0,c=(e=String(e)).length%3;a<e.length;){if((r=e.charCodeAt(a++))>255||(n=e.charCodeAt(a++))>255||(o=e.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=d.charAt((t=r<<16|n<<8|o)>>18&63)+d.charAt(t>>12&63)+d.charAt(t>>6&63)+d.charAt(63&t)}return c?i.slice(0,c-3)+"===".substring(c):i}(JSON.stringify(e))},w=function(e){var t="@formspree/core@".concat("2.8.1");return e?"".concat(e," ").concat(t):t},E=function(e,t,r){e instanceof FormData?e.append(t,r):e=Object.assign(e,(0,l.Z)({},t,r))},x=function(){var e=s(p().mark((function e(t){var r,n,o,i,a,c,u,s,l,f,d;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.stripePromise,n=t.response,o=t.responseData,i=t.payload,a=t.data,c=t.fetchImpl,u=t.request,s=t.url,e.next=3,r.handleCardAction(o.stripe.paymentIntentClientSecret);case 3:if(!(l=e.sent).error){e.next=6;break}return e.abrupt("return",{response:n,body:{errors:[{code:"STRIPE_CLIENT_ERROR",message:"Stripe SCA error",field:"paymentMethod"}]}});case 6:return i.paymentMethod.id||E(a,"paymentMethod",i.paymentMethod.id),E(a,"paymentIntent",l.paymentIntent.id),E(a,"resubmitKey",o.resubmitKey),e.next=9,c(s,h(h({},u),{},{body:JSON.stringify({paymentIntent:l.paymentIntent.id,resubmitKey:o.resubmitKey})}));case 9:return f=e.sent,e.next=12,f.json();case 12:return d=e.sent,e.abrupt("return",{response:f,body:d});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function O(e){var t=e.body,r=e.response;return!function(e){return void 0!==e.errors}(t)&&(null==t?void 0:t.error)&&(t={errors:[{message:t.error}]}),{body:t,response:r}}var j,S=function(){return navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!m.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,r,n,o="",i=0;i<e.length;)t=d.indexOf(e.charAt(i++))<<18|d.indexOf(e.charAt(i++))<<12|(r=d.indexOf(e.charAt(i++)))<<6|(n=d.indexOf(e.charAt(i++))),o+=64===r?String.fromCharCode(t>>16&255):64===n?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom},P=function(){function e(){(0,a.Z)(this,e),this.loadedAt=1*new Date,this.webdriver=S()}return(0,c.Z)(e,[{key:"teardown",value:function(){}},{key:"data",value:function(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}}]),e}(),_=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.Z)(this,e),this.project=t.project,this.stripePromise=t.stripePromise,typeof window<"u"&&this.startBrowserSession()}var t;return(0,c.Z)(e,[{key:"startBrowserSession",value:function(){this.session||(this.session=new P)}},{key:"teardown",value:function(){this.session&&this.session.teardown()}},{key:"submitForm",value:(t=s(p().mark((function e(t,r){var n,o,i,a,c,u,s,l,f,d,m=arguments;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=m.length>2&&void 0!==m[2]?m[2]:{},o=n.endpoint||"https://formspree.io",i=n.fetchImpl||fetch,a=this.project?"".concat(o,"/p/").concat(this.project,"/f/").concat(t):"".concat(o,"/f/").concat(t),c=function(e){return e instanceof FormData?e:JSON.stringify(e)},u={Accept:"application/json","Formspree-Client":w(n.clientName)},this.session&&(u["Formspree-Session-Data"]=b(this.session.data())),r instanceof FormData||(u["Content-Type"]="application/json"),s={method:"POST",mode:"cors",body:c(r),headers:u},!this.stripePromise||!n.createPaymentMethod){e.next=27;break}return e.next=7,n.createPaymentMethod();case 7:if(!(l=e.sent).error){e.next=10;break}return e.abrupt("return",{response:null,body:{errors:[{code:"STRIPE_CLIENT_ERROR",message:"Error creating payment method",field:"paymentMethod"}]}});case 10:return E(r,"paymentMethod",l.paymentMethod.id),e.next=13,i(a,h(h({},s),{},{body:r}));case 13:return f=e.sent,e.next=16,f.json();case 16:if(!((d=e.sent)&&d.stripe&&d.stripe.requiresAction&&d.resubmitKey)){e.next=23;break}return e.next=20,x({stripePromise:this.stripePromise,responseData:d,response:f,payload:l,data:r,fetchImpl:i,request:s,url:a});case 20:e.t0=e.sent,e.next=24;break;case 23:e.t0=O({response:f,body:d});case 24:return e.abrupt("return",e.t0);case 27:return e.abrupt("return",i(a,s).then((function(e){return e.json().then((function(t){return O({body:t,response:e})}))})).catch());case 28:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})}]),e}(),k=function(e){return new _(e)},A=function(){return j||(j=k()),j}},function(){return w||b((w={exports:{}}).exports,w),w.exports}),A=_(k()),C=((0,n.lazy)((function(){return Promise.resolve().then(r.t.bind(r,5360,23)).then((function(e){return{default:e.Elements}}))})),n.createContext({client:void 0}));C.displayName="Formspree";function T(){var e=(0,n.useContext)(C);return e.client?e:{client:(0,A.getDefaultClient)()}}var I="2.4.1",L=function(e){return void 0!==e.preventDefault},F=function(e){var t=e.prefix,r=e.field,i=e.errors,a=(0,o.Z)(e,m),c=(i||[]).find((function(e){return e.field===r}));return c?n.createElement("div",h({},a),t," ",c.message):null},M=(_(k()).isFieldError,"contact-form-module--fieldErrors--4c3dd");function N(){var e=function(e){var t,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=(0,n.useState)(null),c=(0,i.Z)(a,2),u=c[0],f=c[1],m=(0,n.useState)(!1),y=(0,i.Z)(m,2),v=y[0],g=y[1],b=(0,n.useState)(!1),w=(0,i.Z)(b,2),E=w[0],x=w[1],O=(0,n.useState)([]),j=(0,i.Z)(O,2),S=j[0],P=j[1],_=T();if(!o.client&&!_)throw new Error("You must provide a Formspree client");if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');_.client&&_.client.stripePromise&&(t=(0,d.useStripe)(),r=(0,d.useElements)());var k=!!o.debug,A=o.data;return[{result:u,submitting:v,succeeded:E,errors:S},function(){var n=s(p().mark((function n(i){var a,c,u,m,y,v;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=function(){var e=s(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"FORM"==(r=t.target).tagName){e.next=4;break}throw new Error("submit was triggered for a non-form element");case 4:return e.abrupt("return",new FormData(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!L(i)){n.next=7;break}return n.next=4,a(i);case 4:n.t0=n.sent,n.next=8;break;case 7:n.t0=i;case 8:if(c=n.t0,u=function(e,t){c instanceof FormData?c.append(e,t):c=Object.assign(c,(0,l.Z)({},e,t))},"object"!=typeof A){n.next=28;break}n.t1=p().keys(A);case 12:if((n.t2=n.t1()).done){n.next=28;break}if(m=n.t2.value,y=void 0,"function"!=typeof A[m]){n.next=24;break}if(y=A[m].call(null),n.t3="function"==typeof(null==y?void 0:y.then),!n.t3){n.next=22;break}return n.next=21,y;case 21:y=n.sent;case 22:n.next=25;break;case 24:y=A[m];case 25:void 0!==y&&u(m,y),n.next=12;break;case 28:return v=function(){var e=s(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h(h(h(h(h(h({},c.address_line1&&{line1:c.address_line1}),c.address_line2&&{line2:c.address_line2}),c.address_city&&{city:c.address_city}),c.address_country&&{country:c.address_country}),c.address_state&&{state:c.address_state}),c.address_postal_code&&{postal_code:c.address_postal_code}),e.next=3,t.createPaymentMethod({type:"card",card:r.getElement(d.CardElement),billing_details:h(h(h(h({},c.name&&{name:c.name}),c.email&&{email:c.email}),c.phone&&{phone:c.phone}),n&&{address:n})});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.abrupt("return",(g(!0),_.client.submitForm(e,c,{endpoint:o.endpoint,clientName:"@formspree/react@".concat(I),createPaymentMethod:_.client&&_.client.stripePromise?v:void 0}).then((function(e){var t,r=e.response.status;return 200===r?(k&&console.log("Form submitted",e),x(!0),f(e),P([])):r>=400&&((t=e.body).errors?(P(t.errors),k&&console.log("Error",e)):(P([{message:"Unexpected error"}]),k&&console.log("Unexpected error",e)),x(!1)),e})).catch((function(e){throw k&&console.log("Unexpected error",e),x(!1),e})).finally((function(){g(!1)}))));case 30:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),function(){g(!1),x(!1),P([])}]}("mgeqlago"),t=e[0],r=e[1];return t.succeeded?n.createElement("p",null,"Merci pour votre message"):n.createElement("form",{className:"contact-form-module--form--2c612",onSubmit:r},n.createElement("label",{htmlFor:"email"}),n.createElement("input",{id:"email",type:"email",name:"email",placeholder:"e-mail"}),n.createElement(F,{className:M,prefix:"Email",field:"email",errors:t.errors}),n.createElement("label",{htmlFor:"message"}),n.createElement("textarea",{id:"message",name:"message",placeholder:"message"}),n.createElement(F,{className:M,prefix:"Message",field:"message",errors:t.errors}),n.createElement("button",{type:"submit",disabled:t.submitting},"Envoyer"),n.createElement(F,{className:"contact-form-module--formErrors--4c53b",errors:t.errors}))}var D=r(6592),R=r(9357),Z=(r(444),function(){return n.createElement(R.Z,{title:"Page contact"})}),B=function(){return n.createElement(D.Z,null,n.createElement(N,null))}},7061:function(e,t,r){var n=r(8698).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(A){l=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=f;var d={};function m(){}function y(){}function h(){}var v={};l(v,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(_([])));b&&b!==r&&i.call(b,c)&&(v=b);var w=h.prototype=m.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,a,c,u){var s=p(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):t.resolve(f).then((function(e){l.value=e,c(l)}),(function(e){return r("throw",e,c,u)}))}u(s.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function O(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=p(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function _(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return y.prototype=h,l(w,"constructor",h),l(h,"constructor",y),y.displayName=l(h,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},E(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(w),l(w,s,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4687:function(e,t,r){var n=r(7061)();e.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},5671:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:function(){return n}})},3144:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}r.d(t,{Z:function(){return o}})},4942:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},557:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3366);function o(e,t){if(null==e)return{};var r,o,i=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})},885:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=component---src-pages-contact-js-3cad9b1d61c6422e0d10.js.map