var Ze=Object.defineProperty;var et=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var F=(e,t,n)=>(et(e,typeof t!="symbol"?t+"":t,n),n),tt=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var me=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};var z=(e,t,n)=>(tt(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const j=class{static get(t){return JSON.parse(localStorage.getItem(t))}static remove(t){localStorage.removeItem(t)}static set(t,n){localStorage.setItem(t,JSON.stringify(n))}static setWithExpiry(t,n,r=60){j.set(t+"_EXPIRY",{value:n,expiry:new Date().getTime()+r*60*1e3})}static getWithExpiry(t){const n=j.get(t+"_EXPIRY");return n&&n.expiry<new Date().getTime()?(j.remove(t+"_EXPIRY"),null):n==null?void 0:n.value}};let O=j;F(O,"CART_KEY","cart"),F(O,"CATEGORIES_KEY","categories"),F(O,"FILTER_KEY","filter"),F(O,"POPULAR_PRODUCTS_KEY","popular-products"),F(O,"DISCOUNTED_PRODUCTS_KEY","discounted-products");const I=O.CART_KEY,ye={email:"",products:[]};var B,$;const w=class{static get(){return O.get(I)??ye}static add(t,n=1){w.update(t,n)}static update(t,n=1){var o;const r=w.get(),s=z(o=w,B,$).call(o,r.products,t._id);s!==null?r.products[s]={...r.products[s],amount:n}:r.products.push({productId:t._id,product:t,amount:n}),O.set(I,r)}static delete(t){var s;const n=w.get(),r=z(s=w,B,$).call(s,n.products,t);r!==null&&(n.products.splice(r,1),O.set(I,n))}static getProduct(t){var s;const n=w.get(),r=z(s=w,B,$).call(s,n.products,t);return r!==null?n.products[r]:null}static getTotal(){const n=w.get().products.reduce((r,s)=>{const o=s.product.price*s.amount;return r+o},0);return Math.round(n*100)/100}static getProducts(){return w.get().products}static getEmail(){return w.get().email}static getCount(){return w.get().products.length}static setEmail(t){O.set(I,{...w.get(),email:t})}static clearCart(){O.set(I,ye)}};let J=w;B=new WeakSet,$=function(t,n){const r=t.findIndex(({productId:s})=>s===n);return r!==-1?r:null},me(J,B);function Bn(){[...document.getElementsByClassName("cart-item-count")].map(t=>t.textContent=J.getCount())}function Le(e,t){return function(){return e.apply(t,arguments)}}const{toString:nt}=Object.prototype,{getPrototypeOf:ue}=Object,X=(e=>t=>{const n=nt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>X(t)===e),G=e=>t=>typeof t===e,{isArray:_}=Array,q=G("undefined");function rt(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const De=P("ArrayBuffer");function st(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&De(e.buffer),t}const ot=G("string"),T=G("function"),Fe=G("number"),Y=e=>e!==null&&typeof e=="object",it=e=>e===!0||e===!1,K=e=>{if(X(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},at=P("Date"),ct=P("File"),ut=P("Blob"),lt=P("FileList"),dt=e=>Y(e)&&T(e.pipe),ft=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=X(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},pt=P("URLSearchParams"),ht=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Be(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ue=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),_e=e=>!q(e)&&e!==Ue;function se(){const{caseless:e}=_e(this)&&this||{},t={},n=(r,s)=>{const o=e&&Be(t,s)||s;K(t[o])&&K(r)?t[o]=se(t[o],r):K(r)?t[o]=se({},r):_(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&M(arguments[r],n);return t}const mt=(e,t,n,{allOwnKeys:r}={})=>(M(t,(s,o)=>{n&&T(s)?e[o]=Le(s,n):e[o]=s},{allOwnKeys:r}),e),yt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Et=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ue(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},St=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},wt=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ot=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),Rt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},gt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Tt=P("HTMLFormElement"),At=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Pt=P("RegExp"),Ie=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Nt=e=>{Ie(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ct=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return _(e)?r(e):r(String(e).split(t)),n},xt=()=>{},Lt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ee="abcdefghijklmnopqrstuvwxyz",Ee="0123456789",ke={DIGIT:Ee,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+Ee},Dt=(e=16,t=ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ft(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Bt=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=_(r)?[]:{};return M(r,(i,c)=>{const p=n(i,s+1);!q(p)&&(o[c]=p)}),t[s]=void 0,o}}return r};return n(e,0)},Ut=P("AsyncFunction"),_t=e=>e&&(Y(e)||T(e))&&T(e.then)&&T(e.catch),a={isArray:_,isArrayBuffer:De,isBuffer:rt,isFormData:ft,isArrayBufferView:st,isString:ot,isNumber:Fe,isBoolean:it,isObject:Y,isPlainObject:K,isUndefined:q,isDate:at,isFile:ct,isBlob:ut,isRegExp:Pt,isFunction:T,isStream:dt,isURLSearchParams:pt,isTypedArray:Ot,isFileList:lt,forEach:M,merge:se,extend:mt,trim:ht,stripBOM:yt,inherits:bt,toFlatObject:Et,kindOf:X,kindOfTest:P,endsWith:St,toArray:wt,forEachEntry:Rt,matchAll:gt,isHTMLForm:Tt,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:Ie,freezeMethods:Nt,toObjectSet:Ct,toCamelCase:At,noop:xt,toFiniteNumber:Lt,findKey:Be,global:Ue,isContextDefined:_e,ALPHABET:ke,generateString:Dt,isSpecCompliantForm:Ft,toJSONObject:Bt,isAsyncFn:Ut,isThenable:_t};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const je=m.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(m,qe);Object.defineProperty(je,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(je);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const It=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function Me(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=Me(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function kt(e){return a.isArray(e)&&!e.some(oe)}const jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,E){return!a.isUndefined(E[f])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,f,E){let S=d;if(d&&!E&&typeof d=="object"){if(a.endsWith(f,"{}"))f=r?f:f.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&kt(d)||(a.isFileList(d)||a.endsWith(f,"[]"))&&(S=a.toArray(d)))return f=Me(f),S.forEach(function(x,Qe){!(a.isUndefined(x)||x===null)&&t.append(i===!0?Se([f],Qe,o):i===null?f:f+"[]",h(x))}),!1}return oe(d)?!0:(t.append(Se(E,f,o),h(d)),!1)}const u=[],b=Object.assign(jt,{defaultVisitor:l,convertValue:h,isVisitable:oe});function R(d,f){if(!a.isUndefined(d)){if(u.indexOf(d)!==-1)throw Error("Circular reference detected in "+f.join("."));u.push(d),a.forEach(d,function(S,C){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(C)?C.trim():C,f,b))===!0&&R(S,f?f.concat(C):[C])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function le(e,t){this._pairs=[],e&&Q(e,this,t)}const He=le.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function qt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ze(e,t,n){if(!t)return e;const r=n&&n.encode||qt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Mt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Oe=Mt,Je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ht=typeof URLSearchParams<"u"?URLSearchParams:le,zt=typeof FormData<"u"?FormData:null,Jt=typeof Blob<"u"?Blob:null,$t={isBrowser:!0,classes:{URLSearchParams:Ht,FormData:zt,Blob:Jt},protocols:["http","https","file","blob","url","data"]},$e=typeof window<"u"&&typeof document<"u",Kt=(e=>$e&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Vt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),vt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$e,hasStandardBrowserWebWorkerEnv:Vt,hasStandardBrowserEnv:Kt},Symbol.toStringTag,{value:"Module"})),A={...vt,...$t};function Wt(e,t){return Q(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Xt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Gt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ke(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Gt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Xt(r),s,n,0)}),n}return null}function Yt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const de={transitional:Je,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Wt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Q(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Yt(t)):t}],transformResponse:[function(t){const n=this.transitional||de.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{de.headers[e]={}});const fe=de,Qt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Zt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Qt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Re=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function V(e){return e===!1||e==null?e:a.isArray(e)?e.map(V):String(e)}function en(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const tn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function nn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function rn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,p,h){const l=k(p);if(!l)throw new Error("header name must be a non-empty string");const u=a.findKey(s,l);(!u||s[u]===void 0||h===!0||h===void 0&&s[u]!==!1)&&(s[u||p]=V(c))}const i=(c,p)=>a.forEach(c,(h,l)=>o(h,l,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!tn(t)?i(Zt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return en(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=k(i),i){const c=a.findKey(r,i);c&&(!n||te(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||te(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=V(s),delete n[o];return}const c=t?nn(o):String(o).trim();c!==o&&delete n[o],n[c]=V(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Re]=this[Re]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=k(i);r[c]||(rn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Z);const N=Z;function ne(e,t){const n=this||fe,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ve(e){return!!(e&&e.__CANCEL__)}function H(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(H,m,{__CANCEL__:!0});function sn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const on=A.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function an(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function cn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ve(e,t){return e&&!an(t)?cn(e,t):t}const un=A.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function ln(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),l=r[o];i||(i=h),n[s]=p,r[s]=h;let u=o,b=0;for(;u!==s;)b+=n[u++],u=u%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const R=l&&h-l;return R?Math.round(b*1e3/R):void 0}}function ge(e,t){let n=0;const r=dn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,p=r(c),h=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&h?(i-o)/p:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const fn=typeof XMLHttpRequest<"u",pn=fn&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let l;if(a.isFormData(s)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((l=o.getContentType())!==!1){const[f,...E]=l?l.split(";").map(S=>S.trim()).filter(Boolean):[];o.setContentType([f||"multipart/form-data",...E].join("; "))}}let u=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(f+":"+E))}const b=ve(e.baseURL,e.url);u.open(e.method.toUpperCase(),ze(b,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function R(){if(!u)return;const f=N.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),S={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:f,config:e,request:u};sn(function(x){n(x),h()},function(x){r(x),h()},S),u=null}if("onloadend"in u?u.onloadend=R:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(R)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||Je;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new m(E,S.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},A.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&un(b))){const f=e.xsrfHeaderName&&e.xsrfCookieName&&on.read(e.xsrfCookieName);f&&o.set(e.xsrfHeaderName,f)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(E,S){u.setRequestHeader(S,E)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",ge(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=f=>{u&&(r(!f||f.type?new H(null,e,u):f),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const d=ln(b);if(d&&A.protocols.indexOf(d)===-1){r(new m("Unsupported protocol "+d+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},ie={http:It,xhr:pn};a.forEach(ie,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Te=e=>`- ${e}`,hn=e=>a.isFunction(e)||e===null||e===!1,We={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!hn(n)&&(r=ie[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Te).join(`
`):" "+Te(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ie};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function Ae(e){return re(e),e.headers=N.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),We.getAdapter(e.adapter||fe.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return Ve(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const Pe=e=>e instanceof N?e.toJSON():e;function U(e,t){t=t||{};const n={};function r(h,l,u){return a.isPlainObject(h)&&a.isPlainObject(l)?a.merge.call({caseless:u},h,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(h,l,u){if(a.isUndefined(l)){if(!a.isUndefined(h))return r(void 0,h,u)}else return r(h,l,u)}function o(h,l){if(!a.isUndefined(l))return r(void 0,l)}function i(h,l){if(a.isUndefined(l)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,l)}function c(h,l,u){if(u in t)return r(h,l);if(u in e)return r(void 0,h)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(h,l)=>s(Pe(h),Pe(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const u=p[l]||s,b=u(e[l],t[l],l);a.isUndefined(b)&&u!==c||(n[l]=b)}),n}const Xe="1.6.2",pe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ne={};pe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Xe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ne[i]&&(Ne[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function mn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],p=c===void 0||i(c,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ae={assertOptions:mn,validators:pe},L=ae.validators;class W{constructor(t){this.defaults=t,this.interceptors={request:new Oe,response:new Oe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ae.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ae.assertOptions(s,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=N.concat(i,o);const c=[];let p=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(p=p&&f.synchronous,c.unshift(f.fulfilled,f.rejected))});const h=[];this.interceptors.response.forEach(function(f){h.push(f.fulfilled,f.rejected)});let l,u=0,b;if(!p){const d=[Ae.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,h),b=d.length,l=Promise.resolve(n);u<b;)l=l.then(d[u++],d[u++]);return l}b=c.length;let R=n;for(u=0;u<b;){const d=c[u++],f=c[u++];try{R=d(R)}catch(E){f.call(this,E);break}}try{l=Ae.call(this,R)}catch(d){return Promise.reject(d)}for(u=0,b=h.length;u<b;)l=l.then(h[u++],h[u++]);return l}getUri(t){t=U(this.defaults,t);const n=ve(t.baseURL,t.url);return ze(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){W.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}W.prototype[t]=n(),W.prototype[t+"Form"]=n(!0)});const v=W;class he{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new H(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new he(function(s){t=s}),cancel:t}}}const yn=he;function bn(e){return function(n){return e.apply(null,n)}}function En(e){return a.isObject(e)&&e.isAxiosError===!0}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach(([e,t])=>{ce[t]=e});const Sn=ce;function Ge(e){const t=new v(e),n=Le(v.prototype.request,t);return a.extend(n,v.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ge(U(e,s))},n}const y=Ge(fe);y.Axios=v;y.CanceledError=H;y.CancelToken=yn;y.isCancel=Ve;y.VERSION=Xe;y.toFormData=Q;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=bn;y.isAxiosError=En;y.mergeConfig=U;y.AxiosHeaders=N;y.formToJSON=e=>Ke(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=We.getAdapter;y.HttpStatusCode=Sn;y.default=y;const wn=y,On="https://food-boutique.b.goit.study/api/",Rn="products/categories",gn="products",Tn="products/",An="products/popular",Pn="products/discount",Nn="subscription",Cn="orders",D=wn.create({baseURL:On});class xn{static async getCategories(){return(await D.get(Rn)).data}static async getProducts(t={}){return(await D.get(gn,{params:t})).data}static async getProduct(t){return(await D.get(Tn+t)).data}static async getPopularProducts(t=5){return(await D.get(An,{params:{limit:t}})).data}static async getDiscountedProducts(){return(await D.get(Pn)).data}static async subscribe(t){return(await D.post(Nn,{email:t})).data}static async placeOrder(t){const{email:n,products:r}=t;return(await D.post(Cn,{email:n,products:r.map(({productId:o,amount:i})=>({productId:o,amount:i}))})).data}}const g={openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms"),footerForm:document.querySelector(".footer-subscribe-form"),closeModalSubscribeBtn:document.querySelector(".js-subscribe-close"),subscribeLink:document.querySelector(".js-subscribe"),subscribeText:document.querySelector(".subscribe-text")};g.openModalPolicy.addEventListener("click",()=>{Ce(),g.closeModalPolicyBtn.addEventListener("click",Ce,{once:!0})});g.openModalTerms.addEventListener("click",()=>{xe(),g.closeModalTermsBtn.addEventListener("click",xe,{once:!0})});function Ce(){g.policyLink.classList.toggle("is-hidden-policy")}function xe(){g.termsLink.classList.toggle("is-hidden-policy")}g.footerForm.addEventListener("submit",Ln);function Ln(e){e.preventDefault();const n=e.currentTarget.elements.email.value;xn.subscribe(n).then(r=>{Ye(r),g.footerForm.reset()}).catch(Dn)}function Dn(e){let t="Your subscription to our store has already been made before";e.response.status!==409&&(t="Invalid email address, please double check your email",e.response.status>=500&&(t="Server error, please try again later")),Ye({message:t})}function Ye({message:e}){g.subscribeText.innerHTML=e,g.subscribeLink.classList.toggle("is-hidden-subscribe"),g.closeModalSubscribeBtn.addEventListener("click",()=>g.subscribeLink.classList.toggle("is-hidden-subscribe"),{once:!0})}export{J as C,xn as F,O as S,Bn as u};
