(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wc(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const ke={},Yi=[],Ot=()=>{},tE=()=>!1,ma=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),zc=n=>n.startsWith("onUpdate:"),gt=Object.assign,Kc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},nE=Object.prototype.hasOwnProperty,pe=(n,e)=>nE.call(n,e),ie=Array.isArray,Xi=n=>_a(n)==="[object Map]",eg=n=>_a(n)==="[object Set]",re=n=>typeof n=="function",qe=n=>typeof n=="string",Kn=n=>typeof n=="symbol",De=n=>n!==null&&typeof n=="object",tg=n=>(De(n)||re(n))&&re(n.then)&&re(n.catch),ng=Object.prototype.toString,_a=n=>ng.call(n),iE=n=>_a(n).slice(8,-1),ig=n=>_a(n)==="[object Object]",Gc=n=>qe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,nr=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},sE=/-(\w)/g,Ei=ya(n=>n.replace(sE,(e,t)=>t?t.toUpperCase():"")),rE=/\B([A-Z])/g,Oi=ya(n=>n.replace(rE,"-$1").toLowerCase()),sg=ya(n=>n.charAt(0).toUpperCase()+n.slice(1)),cl=ya(n=>n?`on${sg(n)}`:""),jn=(n,e)=>!Object.is(n,e),Ro=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},rg=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Wl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ud;const og=()=>ud||(ud=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qc(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=qe(i)?cE(i):Qc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(qe(n)||De(n))return n}const oE=/;(?![^(]*\))/g,aE=/:([^]+)/,lE=/\/\*[^]*?\*\//g;function cE(n){const e={};return n.replace(lE,"").split(oE).forEach(t=>{if(t){const i=t.split(aE);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Yc(n){let e="";if(qe(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const i=Yc(n[t]);i&&(e+=i+" ")}else if(De(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const uE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hE=Wc(uE);function ag(n){return!!n||n===""}const lg=n=>!!(n&&n.__v_isRef===!0),zl=n=>qe(n)?n:n==null?"":ie(n)||De(n)&&(n.toString===ng||!re(n.toString))?lg(n)?zl(n.value):JSON.stringify(n,cg,2):String(n),cg=(n,e)=>lg(e)?cg(n,e.value):Xi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ul(i,r)+" =>"]=s,t),{})}:eg(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ul(t))}:Kn(e)?ul(e):De(e)&&!ie(e)&&!ig(e)?String(e):e,ul=(n,e="")=>{var t;return Kn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class dE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=At;try{return At=this,e()}finally{At=t}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function fE(n,e=At){e&&e.active&&e.effects.push(n)}function ug(){return At}function pE(n){At&&At.cleanups.push(n)}let pi;class Xc{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,fE(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Gn();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(gE(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Qn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=xn,t=pi;try{return xn=!0,pi=this,this._runnings++,hd(this),this.fn()}finally{dd(this),this._runnings--,pi=t,xn=e}}stop(){this.active&&(hd(this),dd(this),this.onStop&&this.onStop(),this.active=!1)}}function gE(n){return n.value}function hd(n){n._trackId++,n._depsLength=0}function dd(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)hg(n.deps[e],n);n.deps.length=n._depsLength}}function hg(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let xn=!0,Kl=0;const dg=[];function Gn(){dg.push(xn),xn=!1}function Qn(){const n=dg.pop();xn=n===void 0?!0:n}function Jc(){Kl++}function Zc(){for(Kl--;!Kl&&Gl.length;)Gl.shift()()}function fg(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&hg(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Gl=[];function pg(n,e,t){Jc();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Gl.push(i.scheduler)))}Zc()}const gg=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Ql=new WeakMap,gi=Symbol(""),Yl=Symbol("");function vt(n,e,t){if(xn&&pi){let i=Ql.get(n);i||Ql.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=gg(()=>i.delete(t))),fg(pi,s)}}function mn(n,e,t,i,s,r){const o=Ql.get(n);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(t==="length"&&ie(n)){const c=Number(i);o.forEach((u,d)=>{(d==="length"||!Kn(d)&&d>=c)&&l.push(u)})}else switch(t!==void 0&&l.push(o.get(t)),e){case"add":ie(n)?Gc(t)&&l.push(o.get("length")):(l.push(o.get(gi)),Xi(n)&&l.push(o.get(Yl)));break;case"delete":ie(n)||(l.push(o.get(gi)),Xi(n)&&l.push(o.get(Yl)));break;case"set":Xi(n)&&l.push(o.get(gi));break}Jc();for(const c of l)c&&pg(c,4);Zc()}const mE=Wc("__proto__,__v_isRef,__isVue"),mg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Kn)),fd=_E();function _E(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=we(this);for(let r=0,o=this.length;r<o;r++)vt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(we)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Gn(),Jc();const i=we(this)[e].apply(this,t);return Zc(),Qn(),i}}),n}function yE(n){Kn(n)||(n=String(n));const e=we(this);return vt(e,"has",n),e.hasOwnProperty(n)}class _g{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?kE:Tg:r?Eg:vg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ie(e);if(!s){if(o&&pe(fd,t))return Reflect.get(fd,t,i);if(t==="hasOwnProperty")return yE}const l=Reflect.get(e,t,i);return(Kn(t)?mg.has(t):mE(t))||(s||vt(e,"get",t),r)?l:mt(l)?o&&Gc(t)?l:l.value:De(l)?s?Ig(l):nu(l):l}}class yg extends _g{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const c=Ti(r);if(!as(i)&&!Ti(i)&&(r=we(r),i=we(i)),!ie(e)&&mt(r)&&!mt(i))return c?!1:(r.value=i,!0)}const o=ie(e)&&Gc(t)?Number(t)<e.length:pe(e,t),l=Reflect.set(e,t,i,s);return e===we(s)&&(o?jn(i,r)&&mn(e,"set",t,i):mn(e,"add",t,i)),l}deleteProperty(e,t){const i=pe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&mn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Kn(t)||!mg.has(t))&&vt(e,"has",t),i}ownKeys(e){return vt(e,"iterate",ie(e)?"length":gi),Reflect.ownKeys(e)}}class vE extends _g{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const EE=new yg,TE=new vE,IE=new yg(!0);const eu=n=>n,va=n=>Reflect.getPrototypeOf(n);function ao(n,e,t=!1,i=!1){n=n.__v_raw;const s=we(n),r=we(e);t||(jn(e,r)&&vt(s,"get",e),vt(s,"get",r));const{has:o}=va(s),l=i?eu:t?su:yr;if(o.call(s,e))return l(n.get(e));if(o.call(s,r))return l(n.get(r));n!==s&&n.get(e)}function lo(n,e=!1){const t=this.__v_raw,i=we(t),s=we(n);return e||(jn(n,s)&&vt(i,"has",n),vt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function co(n,e=!1){return n=n.__v_raw,!e&&vt(we(n),"iterate",gi),Reflect.get(n,"size",n)}function pd(n,e=!1){!e&&!as(n)&&!Ti(n)&&(n=we(n));const t=we(this);return va(t).has.call(t,n)||(t.add(n),mn(t,"add",n,n)),this}function gd(n,e,t=!1){!t&&!as(e)&&!Ti(e)&&(e=we(e));const i=we(this),{has:s,get:r}=va(i);let o=s.call(i,n);o||(n=we(n),o=s.call(i,n));const l=r.call(i,n);return i.set(n,e),o?jn(e,l)&&mn(i,"set",n,e):mn(i,"add",n,e),this}function md(n){const e=we(this),{has:t,get:i}=va(e);let s=t.call(e,n);s||(n=we(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&mn(e,"delete",n,void 0),r}function _d(){const n=we(this),e=n.size!==0,t=n.clear();return e&&mn(n,"clear",void 0,void 0),t}function uo(n,e){return function(i,s){const r=this,o=r.__v_raw,l=we(o),c=e?eu:n?su:yr;return!n&&vt(l,"iterate",gi),o.forEach((u,d)=>i.call(s,c(u),c(d),r))}}function ho(n,e,t){return function(...i){const s=this.__v_raw,r=we(s),o=Xi(r),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=s[n](...i),d=t?eu:e?su:yr;return!e&&vt(r,"iterate",c?Yl:gi),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Rn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function wE(){const n={get(r){return ao(this,r)},get size(){return co(this)},has:lo,add:pd,set:gd,delete:md,clear:_d,forEach:uo(!1,!1)},e={get(r){return ao(this,r,!1,!0)},get size(){return co(this)},has:lo,add(r){return pd.call(this,r,!0)},set(r,o){return gd.call(this,r,o,!0)},delete:md,clear:_d,forEach:uo(!1,!0)},t={get(r){return ao(this,r,!0)},get size(){return co(this,!0)},has(r){return lo.call(this,r,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:uo(!0,!1)},i={get(r){return ao(this,r,!0,!0)},get size(){return co(this,!0)},has(r){return lo.call(this,r,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ho(r,!1,!1),t[r]=ho(r,!0,!1),e[r]=ho(r,!1,!0),i[r]=ho(r,!0,!0)}),[n,t,e,i]}const[AE,CE,RE,SE]=wE();function tu(n,e){const t=e?n?SE:RE:n?CE:AE;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pe(t,s)&&s in i?t:i,s,r)}const bE={get:tu(!1,!1)},PE={get:tu(!1,!0)},NE={get:tu(!0,!1)};const vg=new WeakMap,Eg=new WeakMap,Tg=new WeakMap,kE=new WeakMap;function OE(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function DE(n){return n.__v_skip||!Object.isExtensible(n)?0:OE(iE(n))}function nu(n){return Ti(n)?n:iu(n,!1,EE,bE,vg)}function xE(n){return iu(n,!1,IE,PE,Eg)}function Ig(n){return iu(n,!0,TE,NE,Tg)}function iu(n,e,t,i,s){if(!De(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=DE(n);if(o===0)return n;const l=new Proxy(n,o===2?i:t);return s.set(n,l),l}function ir(n){return Ti(n)?ir(n.__v_raw):!!(n&&n.__v_isReactive)}function Ti(n){return!!(n&&n.__v_isReadonly)}function as(n){return!!(n&&n.__v_isShallow)}function wg(n){return n?!!n.__v_raw:!1}function we(n){const e=n&&n.__v_raw;return e?we(e):n}function ME(n){return Object.isExtensible(n)&&rg(n,"__v_skip",!0),n}const yr=n=>De(n)?nu(n):n,su=n=>De(n)?Ig(n):n;class Ag{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Xc(()=>e(this._value),()=>So(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=we(this);return(!e._cacheable||e.effect.dirty)&&jn(e._value,e._value=e.effect.run())&&So(e,4),Cg(e),e.effect._dirtyLevel>=2&&So(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function LE(n,e,t=!1){let i,s;const r=re(n);return r?(i=n,s=Ot):(i=n.get,s=n.set),new Ag(i,s,r||!s,t)}function Cg(n){var e;xn&&pi&&(n=we(n),fg(pi,(e=n.dep)!=null?e:n.dep=gg(()=>n.dep=void 0,n instanceof Ag?n:void 0)))}function So(n,e=4,t,i){n=we(n);const s=n.dep;s&&pg(s,e)}function mt(n){return!!(n&&n.__v_isRef===!0)}function mi(n){return Rg(n,!1)}function VE(n){return Rg(n,!0)}function Rg(n,e){return mt(n)?n:new FE(n,e)}class FE{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:we(e),this._value=t?e:yr(e)}get value(){return Cg(this),this._value}set value(e){const t=this.__v_isShallow||as(e)||Ti(e);e=t?e:we(e),jn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=t?e:yr(e),So(this,4))}}function ru(n){return mt(n)?n.value:n}function fn(n){return re(n)?n():ru(n)}const UE={get:(n,e,t)=>ru(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return mt(s)&&!mt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Sg(n){return ir(n)?n:new Proxy(n,UE)}/**
* @vue/runtime-core v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mn(n,e,t,i){try{return i?n(...i):n()}catch(s){Ea(s,e,t)}}function jt(n,e,t,i){if(re(n)){const s=Mn(n,e,t,i);return s&&tg(s)&&s.catch(r=>{Ea(r,e,t)}),s}if(ie(n)){const s=[];for(let r=0;r<n.length;r++)s.push(jt(n[r],e,t,i));return s}}function Ea(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Gn(),Mn(c,null,10,[n,o,l]),Qn();return}}BE(n,t,s,i)}function BE(n,e,t,i=!0){console.error(n)}let vr=!1,Xl=!1;const ot=[];let Xt=0;const Ji=[];let bn=null,ci=0;const bg=Promise.resolve();let ou=null;function $E(n){const e=ou||bg;return n?e.then(this?n.bind(this):n):e}function jE(n){let e=Xt+1,t=ot.length;for(;e<t;){const i=e+t>>>1,s=ot[i],r=Er(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function au(n){(!ot.length||!ot.includes(n,vr&&n.allowRecurse?Xt+1:Xt))&&(n.id==null?ot.push(n):ot.splice(jE(n.id),0,n),Pg())}function Pg(){!vr&&!Xl&&(Xl=!0,ou=bg.then(kg))}function qE(n){const e=ot.indexOf(n);e>Xt&&ot.splice(e,1)}function HE(n){ie(n)?Ji.push(...n):(!bn||!bn.includes(n,n.allowRecurse?ci+1:ci))&&Ji.push(n),Pg()}function yd(n,e,t=vr?Xt+1:0){for(;t<ot.length;t++){const i=ot[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;ot.splice(t,1),t--,i()}}}function Ng(n){if(Ji.length){const e=[...new Set(Ji)].sort((t,i)=>Er(t)-Er(i));if(Ji.length=0,bn){bn.push(...e);return}for(bn=e,ci=0;ci<bn.length;ci++){const t=bn[ci];t.active!==!1&&t()}bn=null,ci=0}}const Er=n=>n.id==null?1/0:n.id,WE=(n,e)=>{const t=Er(n)-Er(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function kg(n){Xl=!1,vr=!0,ot.sort(WE);try{for(Xt=0;Xt<ot.length;Xt++){const e=ot[Xt];e&&e.active!==!1&&Mn(e,e.i,e.i?15:14)}}finally{Xt=0,ot.length=0,Ng(),vr=!1,ou=null,(ot.length||Ji.length)&&kg()}}let Rt=null,Og=null;function Uo(n){const e=Rt;return Rt=n,Og=n&&n.type.__scopeId||null,e}function zE(n,e=Rt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Nd(-1);const r=Uo(e);let o;try{o=n(...s)}finally{Uo(r),i._d&&Nd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vd(n,e){if(Rt===null)return n;const t=Ca(Rt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,l,c=ke]=e[s];r&&(re(r)&&(r={mounted:r,updated:r}),r.deep&&Nn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function ri(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let c=l.dir[i];c&&(Gn(),jt(c,t,8,[n.el,l,n,e]),Qn())}}function Dg(n,e){n.shapeFlag&6&&n.component?Dg(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}const bo=n=>!!n.type.__asyncLoader,xg=n=>n.type.__isKeepAlive;function KE(n,e){Mg(n,"a",e)}function GE(n,e){Mg(n,"da",e)}function Mg(n,e,t=at){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ta(e,i,t),t){let s=t.parent;for(;s&&s.parent;)xg(s.parent.vnode)&&QE(i,e,t,s),s=s.parent}}function QE(n,e,t,i){const s=Ta(e,n,i,!0);Lg(()=>{Kc(i[e],s)},t)}function Ta(n,e,t=at,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Gn();const l=Dr(t),c=jt(e,t,n,o);return l(),Qn(),c});return i?s.unshift(r):s.push(r),r}}const vn=n=>(e,t=at)=>{(!Aa||n==="sp")&&Ta(n,(...i)=>e(...i),t)},YE=vn("bm"),XE=vn("m"),JE=vn("bu"),ZE=vn("u"),eT=vn("bum"),Lg=vn("um"),Vg=vn("sp"),tT=vn("rtg"),nT=vn("rtc");function iT(n,e=at){Ta("ec",n,e)}const sT=Symbol.for("v-ndc");function rT(n,e,t,i){let s;const r=t;if(ie(n)||qe(n)){s=new Array(n.length);for(let o=0,l=n.length;o<l;o++)s[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(De(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Jl=n=>n?nm(n)?Ca(n):Jl(n.parent):null,sr=gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Jl(n.parent),$root:n=>Jl(n.root),$emit:n=>n.emit,$options:n=>lu(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,au(n.update)}),$nextTick:n=>n.n||(n.n=$E.bind(n.proxy)),$watch:n=>PT.bind(n)}),hl=(n,e)=>n!==ke&&!n.__isScriptSetup&&pe(n,e),oT={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:c}=n;let u;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(hl(i,e))return o[e]=1,i[e];if(s!==ke&&pe(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&pe(u,e))return o[e]=3,r[e];if(t!==ke&&pe(t,e))return o[e]=4,t[e];Zl&&(o[e]=0)}}const d=sr[e];let p,m;if(d)return e==="$attrs"&&vt(n.attrs,"get",""),d(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==ke&&pe(t,e))return o[e]=4,t[e];if(m=c.config.globalProperties,pe(m,e))return m[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return hl(s,e)?(s[e]=t,!0):i!==ke&&pe(i,e)?(i[e]=t,!0):pe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!t[o]||n!==ke&&pe(n,o)||hl(e,o)||(l=r[0])&&pe(l,o)||pe(i,o)||pe(sr,o)||pe(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ed(n){return ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Zl=!0;function aT(n){const e=lu(n),t=n.proxy,i=n.ctx;Zl=!1,e.beforeCreate&&Td(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:T,updated:b,activated:k,deactivated:O,beforeDestroy:z,beforeUnmount:Q,destroyed:F,unmounted:W,render:ae,renderTracked:G,renderTriggered:I,errorCaptured:_,serverPrefetch:v,expose:w,inheritAttrs:C,components:S,directives:E,filters:Tt}=e;if(u&&lT(u,i,null),o)for(const Ae in o){const _e=o[Ae];re(_e)&&(i[Ae]=_e.bind(t))}if(s){const Ae=s.call(t,t);De(Ae)&&(n.data=nu(Ae))}if(Zl=!0,r)for(const Ae in r){const _e=r[Ae],Lt=re(_e)?_e.bind(t,t):re(_e.get)?_e.get.bind(t,t):Ot,Xn=!re(_e)&&re(_e.set)?_e.set.bind(t):Ot,cn=JT({get:Lt,set:Xn});Object.defineProperty(i,Ae,{enumerable:!0,configurable:!0,get:()=>cn.value,set:Be=>cn.value=Be})}if(l)for(const Ae in l)Fg(l[Ae],i,t,Ae);if(c){const Ae=re(c)?c.call(t):c;Reflect.ownKeys(Ae).forEach(_e=>{pT(_e,Ae[_e])})}d&&Td(d,n,"c");function Ke(Ae,_e){ie(_e)?_e.forEach(Lt=>Ae(Lt.bind(t))):_e&&Ae(_e.bind(t))}if(Ke(YE,p),Ke(XE,m),Ke(JE,T),Ke(ZE,b),Ke(KE,k),Ke(GE,O),Ke(iT,_),Ke(nT,G),Ke(tT,I),Ke(eT,Q),Ke(Lg,W),Ke(Vg,v),ie(w))if(w.length){const Ae=n.exposed||(n.exposed={});w.forEach(_e=>{Object.defineProperty(Ae,_e,{get:()=>t[_e],set:Lt=>t[_e]=Lt})})}else n.exposed||(n.exposed={});ae&&n.render===Ot&&(n.render=ae),C!=null&&(n.inheritAttrs=C),S&&(n.components=S),E&&(n.directives=E)}function lT(n,e,t=Ot){ie(n)&&(n=ec(n));for(const i in n){const s=n[i];let r;De(s)?"default"in s?r=Zi(s.from||i,s.default,!0):r=Zi(s.from||i):r=Zi(s),mt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Td(n,e,t){jt(ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Fg(n,e,t,i){const s=i.includes(".")?Jg(t,i):()=>t[i];if(qe(n)){const r=e[n];re(r)&&Po(s,r)}else if(re(n))Po(s,n.bind(t));else if(De(n))if(ie(n))n.forEach(r=>Fg(r,e,t,i));else{const r=re(n.handler)?n.handler.bind(t):e[n.handler];re(r)&&Po(s,r,n)}}function lu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,l=r.get(e);let c;return l?c=l:!s.length&&!t&&!i?c=e:(c={},s.length&&s.forEach(u=>Bo(c,u,o,!0)),Bo(c,e,o)),De(e)&&r.set(e,c),c}function Bo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Bo(n,r,t,!0),s&&s.forEach(o=>Bo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const l=cT[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const cT={data:Id,props:wd,emits:wd,methods:Gs,computed:Gs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Gs,directives:Gs,watch:hT,provide:Id,inject:uT};function Id(n,e){return e?n?function(){return gt(re(n)?n.call(this,this):n,re(e)?e.call(this,this):e)}:e:n}function uT(n,e){return Gs(ec(n),ec(e))}function ec(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Gs(n,e){return n?gt(Object.create(null),n,e):e}function wd(n,e){return n?ie(n)&&ie(e)?[...new Set([...n,...e])]:gt(Object.create(null),Ed(n),Ed(e??{})):e}function hT(n,e){if(!n)return e;if(!e)return n;const t=gt(Object.create(null),n);for(const i in e)t[i]=dt(n[i],e[i]);return t}function Ug(){return{app:null,config:{isNativeTag:tE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dT=0;function fT(n,e){return function(i,s=null){re(i)||(i=gt({},i)),s!=null&&!De(s)&&(s=null);const r=Ug(),o=new WeakSet;let l=!1;const c=r.app={_uid:dT++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ZT,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&re(u.install)?(o.add(u),u.install(c,...d)):re(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,p){if(!l){const m=_i(i,s);return m.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,u):n(m,u,p),l=!0,c._container=u,u.__vue_app__=c,Ca(m.component)}},unmount(){l&&(n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=rr;rr=c;try{return u()}finally{rr=d}}};return c}}let rr=null;function pT(n,e){if(at){let t=at.provides;const i=at.parent&&at.parent.provides;i===t&&(t=at.provides=Object.create(i)),t[n]=e}}function Zi(n,e,t=!1){const i=at||Rt;if(i||rr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:rr._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&re(e)?e.call(i&&i.proxy):e}}const Bg={},$g=()=>Object.create(Bg),jg=n=>Object.getPrototypeOf(n)===Bg;function gT(n,e,t,i=!1){const s={},r=$g();n.propsDefaults=Object.create(null),qg(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:xE(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function mT(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,l=we(s),[c]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ia(n.emitsOptions,m))continue;const T=e[m];if(c)if(pe(r,m))T!==r[m]&&(r[m]=T,u=!0);else{const b=Ei(m);s[b]=tc(c,l,b,T,n,!1)}else T!==r[m]&&(r[m]=T,u=!0)}}}else{qg(n,e,s,r)&&(u=!0);let d;for(const p in l)(!e||!pe(e,p)&&((d=Oi(p))===p||!pe(e,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=tc(c,l,p,void 0,n,!0)):delete s[p]);if(r!==l)for(const p in r)(!e||!pe(e,p))&&(delete r[p],u=!0)}u&&mn(n.attrs,"set","")}function qg(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(nr(c))continue;const u=e[c];let d;s&&pe(s,d=Ei(c))?!r||!r.includes(d)?t[d]=u:(l||(l={}))[d]=u:Ia(n.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(r){const c=we(t),u=l||ke;for(let d=0;d<r.length;d++){const p=r[d];t[p]=tc(s,c,p,u[p],n,!pe(u,p))}}return o}function tc(n,e,t,i,s,r){const o=n[t];if(o!=null){const l=pe(o,"default");if(l&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&re(c)){const{propsDefaults:u}=s;if(t in u)i=u[t];else{const d=Dr(s);i=u[t]=c.call(null,e),d()}}else i=c}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===Oi(t))&&(i=!0))}return i}const _T=new WeakMap;function Hg(n,e,t=!1){const i=t?_T:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},l=[];let c=!1;if(!re(n)){const d=p=>{c=!0;const[m,T]=Hg(p,e,!0);gt(o,m),T&&l.push(...T)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!c)return De(n)&&i.set(n,Yi),Yi;if(ie(r))for(let d=0;d<r.length;d++){const p=Ei(r[d]);Ad(p)&&(o[p]=ke)}else if(r)for(const d in r){const p=Ei(d);if(Ad(p)){const m=r[d],T=o[p]=ie(m)||re(m)?{type:m}:gt({},m);if(T){const b=Sd(Boolean,T.type),k=Sd(String,T.type);T[0]=b>-1,T[1]=k<0||b<k,(b>-1||pe(T,"default"))&&l.push(p)}}}const u=[o,l];return De(n)&&i.set(n,u),u}function Ad(n){return n[0]!=="$"&&!nr(n)}function Cd(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Rd(n,e){return Cd(n)===Cd(e)}function Sd(n,e){return ie(e)?e.findIndex(t=>Rd(t,n)):re(e)&&Rd(e,n)?0:-1}const Wg=n=>n[0]==="_"||n==="$stable",cu=n=>ie(n)?n.map(Yt):[Yt(n)],yT=(n,e,t)=>{if(e._n)return e;const i=zE((...s)=>cu(e(...s)),t);return i._c=!1,i},zg=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Wg(s))continue;const r=n[s];if(re(r))e[s]=yT(s,r,i);else if(r!=null){const o=cu(r);e[s]=()=>o}}},Kg=(n,e)=>{const t=cu(e);n.slots.default=()=>t},Gg=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},vT=(n,e,t)=>{const i=n.slots=$g();if(n.vnode.shapeFlag&32){const s=e._;s?(Gg(i,e,t),t&&rg(i,"_",s,!0)):zg(e,i)}else e&&Kg(n,e)},ET=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ke;if(i.shapeFlag&32){const l=e._;l?t&&l===1?r=!1:Gg(s,e,t):(r=!e.$stable,zg(e,s)),o=e}else e&&(Kg(n,e),o={default:1});if(r)for(const l in s)!Wg(l)&&o[l]==null&&delete s[l]};function nc(n,e,t,i,s=!1){if(ie(n)){n.forEach((m,T)=>nc(m,e&&(ie(e)?e[T]:e),t,i,s));return}if(bo(i)&&!s)return;const r=i.shapeFlag&4?Ca(i.component):i.el,o=s?null:r,{i:l,r:c}=n,u=e&&e.r,d=l.refs===ke?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==c&&(qe(u)?(d[u]=null,pe(p,u)&&(p[u]=null)):mt(u)&&(u.value=null)),re(c))Mn(c,l,12,[o,d]);else{const m=qe(c),T=mt(c);if(m||T){const b=()=>{if(n.f){const k=m?pe(p,c)?p[c]:d[c]:c.value;s?ie(k)&&Kc(k,r):ie(k)?k.includes(r)||k.push(r):m?(d[c]=[r],pe(p,c)&&(p[c]=d[c])):(c.value=[r],n.k&&(d[n.k]=c.value))}else m?(d[c]=o,pe(p,c)&&(p[c]=o)):T&&(c.value=o,n.k&&(d[n.k]=o))};o?(b.id=-1,yt(b,t)):b()}}}const TT=Symbol("_vte"),IT=n=>n.__isTeleport,yt=VT;function wT(n){return AT(n)}function AT(n,e){const t=og();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:T=Ot,insertStaticContent:b}=n,k=(y,A,N,x=null,D=null,V=null,q=void 0,U=null,$=!!A.dynamicChildren)=>{if(y===A)return;y&&!js(y,A)&&(x=un(y),Be(y,D,V,!0),y=null),A.patchFlag===-2&&($=!1,A.dynamicChildren=null);const{type:M,ref:K,shapeFlag:Z}=A;switch(M){case wa:O(y,A,N,x);break;case Tr:z(y,A,N,x);break;case pl:y==null&&Q(A,N,x,q);break;case Ft:S(y,A,N,x,D,V,q,U,$);break;default:Z&1?ae(y,A,N,x,D,V,q,U,$):Z&6?E(y,A,N,x,D,V,q,U,$):(Z&64||Z&128)&&M.process(y,A,N,x,D,V,q,U,$,Gt)}K!=null&&D&&nc(K,y&&y.ref,V,A||y,!A)},O=(y,A,N,x)=>{if(y==null)i(A.el=l(A.children),N,x);else{const D=A.el=y.el;A.children!==y.children&&u(D,A.children)}},z=(y,A,N,x)=>{y==null?i(A.el=c(A.children||""),N,x):A.el=y.el},Q=(y,A,N,x)=>{[y.el,y.anchor]=b(y.children,A,N,x,y.el,y.anchor)},F=({el:y,anchor:A},N,x)=>{let D;for(;y&&y!==A;)D=m(y),i(y,N,x),y=D;i(A,N,x)},W=({el:y,anchor:A})=>{let N;for(;y&&y!==A;)N=m(y),s(y),y=N;s(A)},ae=(y,A,N,x,D,V,q,U,$)=>{A.type==="svg"?q="svg":A.type==="math"&&(q="mathml"),y==null?G(A,N,x,D,V,q,U,$):v(y,A,D,V,q,U,$)},G=(y,A,N,x,D,V,q,U)=>{let $,M;const{props:K,shapeFlag:Z,transition:J,dirs:X}=y;if($=y.el=o(y.type,V,K&&K.is,K),Z&8?d($,y.children):Z&16&&_(y.children,$,null,x,D,dl(y,V),q,U),X&&ri(y,null,x,"created"),I($,y,y.scopeId,q,x),K){for(const Ee in K)Ee!=="value"&&!nr(Ee)&&r($,Ee,null,K[Ee],V,x);"value"in K&&r($,"value",null,K.value,V),(M=K.onVnodeBeforeMount)&&Qt(M,x,y)}X&&ri(y,null,x,"beforeMount");const te=CT(D,J);te&&J.beforeEnter($),i($,A,N),((M=K&&K.onVnodeMounted)||te||X)&&yt(()=>{M&&Qt(M,x,y),te&&J.enter($),X&&ri(y,null,x,"mounted")},D)},I=(y,A,N,x,D)=>{if(N&&T(y,N),x)for(let V=0;V<x.length;V++)T(y,x[V]);if(D){let V=D.subTree;if(A===V){const q=D.vnode;I(y,q,q.scopeId,q.slotScopeIds,D.parent)}}},_=(y,A,N,x,D,V,q,U,$=0)=>{for(let M=$;M<y.length;M++){const K=y[M]=U?Pn(y[M]):Yt(y[M]);k(null,K,A,N,x,D,V,q,U)}},v=(y,A,N,x,D,V,q)=>{const U=A.el=y.el;let{patchFlag:$,dynamicChildren:M,dirs:K}=A;$|=y.patchFlag&16;const Z=y.props||ke,J=A.props||ke;let X;if(N&&oi(N,!1),(X=J.onVnodeBeforeUpdate)&&Qt(X,N,A,y),K&&ri(A,y,N,"beforeUpdate"),N&&oi(N,!0),(Z.innerHTML&&J.innerHTML==null||Z.textContent&&J.textContent==null)&&d(U,""),M?w(y.dynamicChildren,M,U,N,x,dl(A,D),V):q||_e(y,A,U,null,N,x,dl(A,D),V,!1),$>0){if($&16)C(U,Z,J,N,D);else if($&2&&Z.class!==J.class&&r(U,"class",null,J.class,D),$&4&&r(U,"style",Z.style,J.style,D),$&8){const te=A.dynamicProps;for(let Ee=0;Ee<te.length;Ee++){const fe=te[Ee],Me=Z[fe],It=J[fe];(It!==Me||fe==="value")&&r(U,fe,Me,It,D,N)}}$&1&&y.children!==A.children&&d(U,A.children)}else!q&&M==null&&C(U,Z,J,N,D);((X=J.onVnodeUpdated)||K)&&yt(()=>{X&&Qt(X,N,A,y),K&&ri(A,y,N,"updated")},x)},w=(y,A,N,x,D,V,q)=>{for(let U=0;U<A.length;U++){const $=y[U],M=A[U],K=$.el&&($.type===Ft||!js($,M)||$.shapeFlag&70)?p($.el):N;k($,M,K,null,x,D,V,q,!0)}},C=(y,A,N,x,D)=>{if(A!==N){if(A!==ke)for(const V in A)!nr(V)&&!(V in N)&&r(y,V,A[V],null,D,x);for(const V in N){if(nr(V))continue;const q=N[V],U=A[V];q!==U&&V!=="value"&&r(y,V,U,q,D,x)}"value"in N&&r(y,"value",A.value,N.value,D)}},S=(y,A,N,x,D,V,q,U,$)=>{const M=A.el=y?y.el:l(""),K=A.anchor=y?y.anchor:l("");let{patchFlag:Z,dynamicChildren:J,slotScopeIds:X}=A;X&&(U=U?U.concat(X):X),y==null?(i(M,N,x),i(K,N,x),_(A.children||[],N,K,D,V,q,U,$)):Z>0&&Z&64&&J&&y.dynamicChildren?(w(y.dynamicChildren,J,N,D,V,q,U),(A.key!=null||D&&A===D.subTree)&&Qg(y,A,!0)):_e(y,A,N,K,D,V,q,U,$)},E=(y,A,N,x,D,V,q,U,$)=>{A.slotScopeIds=U,y==null?A.shapeFlag&512?D.ctx.activate(A,N,x,q,$):Tt(A,N,x,D,V,q,$):Tn(y,A,$)},Tt=(y,A,N,x,D,V,q)=>{const U=y.component=zT(y,x,D);if(xg(y)&&(U.ctx.renderer=Gt),KT(U,!1,q),U.asyncDep){if(D&&D.registerDep(U,Ke,q),!y.el){const $=U.subTree=_i(Tr);z(null,$,A,N)}}else Ke(U,y,A,N,D,V,q)},Tn=(y,A,N)=>{const x=A.component=y.component;if(xT(y,A,N))if(x.asyncDep&&!x.asyncResolved){Ae(x,A,N);return}else x.next=A,qE(x.update),x.effect.dirty=!0,x.update();else A.el=y.el,x.vnode=A},Ke=(y,A,N,x,D,V,q)=>{const U=()=>{if(y.isMounted){let{next:K,bu:Z,u:J,parent:X,vnode:te}=y;{const Nt=Yg(y);if(Nt){K&&(K.el=te.el,Ae(y,K,q)),Nt.asyncDep.then(()=>{y.isUnmounted||U()});return}}let Ee=K,fe;oi(y,!1),K?(K.el=te.el,Ae(y,K,q)):K=te,Z&&Ro(Z),(fe=K.props&&K.props.onVnodeBeforeUpdate)&&Qt(fe,X,K,te),oi(y,!0);const Me=fl(y),It=y.subTree;y.subTree=Me,k(It,Me,p(It.el),un(It),y,D,V),K.el=Me.el,Ee===null&&MT(y,Me.el),J&&yt(J,D),(fe=K.props&&K.props.onVnodeUpdated)&&yt(()=>Qt(fe,X,K,te),D)}else{let K;const{el:Z,props:J}=A,{bm:X,m:te,parent:Ee}=y,fe=bo(A);if(oi(y,!1),X&&Ro(X),!fe&&(K=J&&J.onVnodeBeforeMount)&&Qt(K,Ee,A),oi(y,!0),Z&&Li){const Me=()=>{y.subTree=fl(y),Li(Z,y.subTree,y,D,null)};fe?A.type.__asyncLoader().then(()=>!y.isUnmounted&&Me()):Me()}else{const Me=y.subTree=fl(y);k(null,Me,N,x,y,D,V),A.el=Me.el}if(te&&yt(te,D),!fe&&(K=J&&J.onVnodeMounted)){const Me=A;yt(()=>Qt(K,Ee,Me),D)}(A.shapeFlag&256||Ee&&bo(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&y.a&&yt(y.a,D),y.isMounted=!0,A=N=x=null}},$=y.effect=new Xc(U,Ot,()=>au(M),y.scope),M=y.update=()=>{$.dirty&&$.run()};M.i=y,M.id=y.uid,oi(y,!0),M()},Ae=(y,A,N)=>{A.component=y;const x=y.vnode.props;y.vnode=A,y.next=null,mT(y,A.props,x,N),ET(y,A.children,N),Gn(),yd(y),Qn()},_e=(y,A,N,x,D,V,q,U,$=!1)=>{const M=y&&y.children,K=y?y.shapeFlag:0,Z=A.children,{patchFlag:J,shapeFlag:X}=A;if(J>0){if(J&128){Xn(M,Z,N,x,D,V,q,U,$);return}else if(J&256){Lt(M,Z,N,x,D,V,q,U,$);return}}X&8?(K&16&&Zn(M,D,V),Z!==M&&d(N,Z)):K&16?X&16?Xn(M,Z,N,x,D,V,q,U,$):Zn(M,D,V,!0):(K&8&&d(N,""),X&16&&_(Z,N,x,D,V,q,U,$))},Lt=(y,A,N,x,D,V,q,U,$)=>{y=y||Yi,A=A||Yi;const M=y.length,K=A.length,Z=Math.min(M,K);let J;for(J=0;J<Z;J++){const X=A[J]=$?Pn(A[J]):Yt(A[J]);k(y[J],X,N,null,D,V,q,U,$)}M>K?Zn(y,D,V,!0,!1,Z):_(A,N,x,D,V,q,U,$,Z)},Xn=(y,A,N,x,D,V,q,U,$)=>{let M=0;const K=A.length;let Z=y.length-1,J=K-1;for(;M<=Z&&M<=J;){const X=y[M],te=A[M]=$?Pn(A[M]):Yt(A[M]);if(js(X,te))k(X,te,N,null,D,V,q,U,$);else break;M++}for(;M<=Z&&M<=J;){const X=y[Z],te=A[J]=$?Pn(A[J]):Yt(A[J]);if(js(X,te))k(X,te,N,null,D,V,q,U,$);else break;Z--,J--}if(M>Z){if(M<=J){const X=J+1,te=X<K?A[X].el:x;for(;M<=J;)k(null,A[M]=$?Pn(A[M]):Yt(A[M]),N,te,D,V,q,U,$),M++}}else if(M>J)for(;M<=Z;)Be(y[M],D,V,!0),M++;else{const X=M,te=M,Ee=new Map;for(M=te;M<=J;M++){const ut=A[M]=$?Pn(A[M]):Yt(A[M]);ut.key!=null&&Ee.set(ut.key,M)}let fe,Me=0;const It=J-te+1;let Nt=!1,bs=0;const In=new Array(It);for(M=0;M<It;M++)In[M]=0;for(M=X;M<=Z;M++){const ut=y[M];if(Me>=It){Be(ut,D,V,!0);continue}let kt;if(ut.key!=null)kt=Ee.get(ut.key);else for(fe=te;fe<=J;fe++)if(In[fe-te]===0&&js(ut,A[fe])){kt=fe;break}kt===void 0?Be(ut,D,V,!0):(In[kt-te]=M+1,kt>=bs?bs=kt:Nt=!0,k(ut,A[kt],N,null,D,V,q,U,$),Me++)}const Vi=Nt?RT(In):Yi;for(fe=Vi.length-1,M=It-1;M>=0;M--){const ut=te+M,kt=A[ut],Fi=ut+1<K?A[ut+1].el:x;In[M]===0?k(null,kt,N,Fi,D,V,q,U,$):Nt&&(fe<0||M!==Vi[fe]?cn(kt,N,Fi,2):fe--)}}},cn=(y,A,N,x,D=null)=>{const{el:V,type:q,transition:U,children:$,shapeFlag:M}=y;if(M&6){cn(y.component.subTree,A,N,x);return}if(M&128){y.suspense.move(A,N,x);return}if(M&64){q.move(y,A,N,Gt);return}if(q===Ft){i(V,A,N);for(let Z=0;Z<$.length;Z++)cn($[Z],A,N,x);i(y.anchor,A,N);return}if(q===pl){F(y,A,N);return}if(x!==2&&M&1&&U)if(x===0)U.beforeEnter(V),i(V,A,N),yt(()=>U.enter(V),D);else{const{leave:Z,delayLeave:J,afterLeave:X}=U,te=()=>i(V,A,N),Ee=()=>{Z(V,()=>{te(),X&&X()})};J?J(V,te,Ee):Ee()}else i(V,A,N)},Be=(y,A,N,x=!1,D=!1)=>{const{type:V,props:q,ref:U,children:$,dynamicChildren:M,shapeFlag:K,patchFlag:Z,dirs:J,cacheIndex:X}=y;if(Z===-2&&(D=!1),U!=null&&nc(U,null,N,y,!0),X!=null&&(A.renderCache[X]=void 0),K&256){A.ctx.deactivate(y);return}const te=K&1&&J,Ee=!bo(y);let fe;if(Ee&&(fe=q&&q.onVnodeBeforeUnmount)&&Qt(fe,A,y),K&6)Jn(y.component,N,x);else{if(K&128){y.suspense.unmount(N,x);return}te&&ri(y,null,A,"beforeUnmount"),K&64?y.type.remove(y,A,N,Gt,x):M&&!M.hasOnce&&(V!==Ft||Z>0&&Z&64)?Zn(M,A,N,!1,!0):(V===Ft&&Z&384||!D&&K&16)&&Zn($,A,N),x&&$e(y)}(Ee&&(fe=q&&q.onVnodeUnmounted)||te)&&yt(()=>{fe&&Qt(fe,A,y),te&&ri(y,null,A,"unmounted")},N)},$e=y=>{const{type:A,el:N,anchor:x,transition:D}=y;if(A===Ft){Ga(N,x);return}if(A===pl){W(y);return}const V=()=>{s(N),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:q,delayLeave:U}=D,$=()=>q(N,V);U?U(y.el,V,$):$()}else V()},Ga=(y,A)=>{let N;for(;y!==A;)N=m(y),s(y),y=N;s(A)},Jn=(y,A,N)=>{const{bum:x,scope:D,update:V,subTree:q,um:U,m:$,a:M}=y;bd($),bd(M),x&&Ro(x),D.stop(),V&&(V.active=!1,Be(q,y,A,N)),U&&yt(U,A),yt(()=>{y.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Zn=(y,A,N,x=!1,D=!1,V=0)=>{for(let q=V;q<y.length;q++)Be(y[q],A,N,x,D)},un=y=>{if(y.shapeFlag&6)return un(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const A=m(y.anchor||y.el),N=A&&A[TT];return N?m(N):A};let Ss=!1;const zr=(y,A,N)=>{y==null?A._vnode&&Be(A._vnode,null,null,!0):k(A._vnode||null,y,A,null,null,null,N),Ss||(Ss=!0,yd(),Ng(),Ss=!1),A._vnode=y},Gt={p:k,um:Be,m:cn,r:$e,mt:Tt,mc:_,pc:_e,pbc:w,n:un,o:n};let ei,Li;return{render:zr,hydrate:ei,createApp:fT(zr,ei)}}function dl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function oi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function CT(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Qg(n,e,t=!1){const i=n.children,s=e.children;if(ie(i)&&ie(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=Pn(s[r]),l.el=o.el),!t&&l.patchFlag!==-2&&Qg(o,l)),l.type===wa&&(l.el=o.el)}}function RT(n){const e=n.slice(),t=[0];let i,s,r,o,l;const c=n.length;for(i=0;i<c;i++){const u=n[i];if(u!==0){if(s=t[t.length-1],n[s]<u){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)l=r+o>>1,n[t[l]]<u?r=l+1:o=l;u<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Yg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yg(e)}function bd(n){if(n)for(let e=0;e<n.length;e++)n[e].active=!1}const ST=Symbol.for("v-scx"),bT=()=>Zi(ST),fo={};function Po(n,e,t){return Xg(n,e,t)}function Xg(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:l}=ke){if(e&&r){const G=e;e=(...I)=>{G(...I),ae()}}const c=at,u=G=>i===!0?G:Nn(G,i===!1?1:void 0);let d,p=!1,m=!1;if(mt(n)?(d=()=>n.value,p=as(n)):ir(n)?(d=()=>u(n),p=!0):ie(n)?(m=!0,p=n.some(G=>ir(G)||as(G)),d=()=>n.map(G=>{if(mt(G))return G.value;if(ir(G))return u(G);if(re(G))return Mn(G,c,2)})):re(n)?e?d=()=>Mn(n,c,2):d=()=>(T&&T(),jt(n,c,3,[b])):d=Ot,e&&i){const G=d;d=()=>Nn(G())}let T,b=G=>{T=F.onStop=()=>{Mn(G,c,4),T=F.onStop=void 0}},k;if(Aa)if(b=Ot,e?t&&jt(e,c,3,[d(),m?[]:void 0,b]):d(),s==="sync"){const G=bT();k=G.__watcherHandles||(G.__watcherHandles=[])}else return Ot;let O=m?new Array(n.length).fill(fo):fo;const z=()=>{if(!(!F.active||!F.dirty))if(e){const G=F.run();(i||p||(m?G.some((I,_)=>jn(I,O[_])):jn(G,O)))&&(T&&T(),jt(e,c,3,[G,O===fo?void 0:m&&O[0]===fo?[]:O,b]),O=G)}else F.run()};z.allowRecurse=!!e;let Q;s==="sync"?Q=z:s==="post"?Q=()=>yt(z,c&&c.suspense):(z.pre=!0,c&&(z.id=c.uid),Q=()=>au(z));const F=new Xc(d,Ot,Q),W=ug(),ae=()=>{F.stop(),W&&Kc(W.effects,F)};return e?t?z():O=F.run():s==="post"?yt(F.run.bind(F),c&&c.suspense):F.run(),k&&k.push(ae),ae}function PT(n,e,t){const i=this.proxy,s=qe(n)?n.includes(".")?Jg(i,n):()=>i[n]:n.bind(i,i);let r;re(e)?r=e:(r=e.handler,t=e);const o=Dr(this),l=Xg(s,r.bind(i),t);return o(),l}function Jg(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Nn(n,e=1/0,t){if(e<=0||!De(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,mt(n))Nn(n.value,e,t);else if(ie(n))for(let i=0;i<n.length;i++)Nn(n[i],e,t);else if(eg(n)||Xi(n))n.forEach(i=>{Nn(i,e,t)});else if(ig(n)){for(const i in n)Nn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Nn(n[i],e,t)}return n}const NT=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ei(e)}Modifiers`]||n[`${Oi(e)}Modifiers`];function kT(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ke;let s=t;const r=e.startsWith("update:"),o=r&&NT(i,e.slice(7));o&&(o.trim&&(s=t.map(d=>qe(d)?d.trim():d)),o.number&&(s=t.map(Wl)));let l,c=i[l=cl(e)]||i[l=cl(Ei(e))];!c&&r&&(c=i[l=cl(Oi(e))]),c&&jt(c,n,6,s);const u=i[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,jt(u,n,6,s)}}function Zg(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},l=!1;if(!re(n)){const c=u=>{const d=Zg(u,e,!0);d&&(l=!0,gt(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!l?(De(n)&&i.set(n,null),null):(ie(r)?r.forEach(c=>o[c]=null):gt(o,r),De(n)&&i.set(n,o),o)}function Ia(n,e){return!n||!ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(n,e[0].toLowerCase()+e.slice(1))||pe(n,Oi(e))||pe(n,e))}function fl(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:T,ctx:b,inheritAttrs:k}=n,O=Uo(n);let z,Q;try{if(t.shapeFlag&4){const W=s||i,ae=W;z=Yt(u.call(ae,W,d,p,T,m,b)),Q=l}else{const W=e;z=Yt(W.length>1?W(p,{attrs:l,slots:o,emit:c}):W(p,null)),Q=e.props?l:OT(l)}}catch(W){or.length=0,Ea(W,n,1),z=_i(Tr)}let F=z;if(Q&&k!==!1){const W=Object.keys(Q),{shapeFlag:ae}=F;W.length&&ae&7&&(r&&W.some(zc)&&(Q=DT(Q,r)),F=ls(F,Q,!1,!0))}return t.dirs&&(F=ls(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(t.dirs):t.dirs),t.transition&&(F.transition=t.transition),z=F,Uo(O),z}const OT=n=>{let e;for(const t in n)(t==="class"||t==="style"||ma(t))&&((e||(e={}))[t]=n[t]);return e},DT=(n,e)=>{const t={};for(const i in n)(!zc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function xT(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Pd(i,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==i[m]&&!Ia(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Pd(i,o,u):!0:!!o;return!1}function Pd(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Ia(t,r))return!0}return!1}function MT({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const LT=n=>n.__isSuspense;function VT(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):HE(n)}const Ft=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),Tr=Symbol.for("v-cmt"),pl=Symbol.for("v-stc"),or=[];let St=null;function gl(n=!1){or.push(St=n?null:[])}function FT(){or.pop(),St=or[or.length-1]||null}let Ir=1;function Nd(n){Ir+=n,n<0&&St&&(St.hasOnce=!0)}function UT(n){return n.dynamicChildren=Ir>0?St||Yi:null,FT(),Ir>0&&St&&St.push(n),n}function ml(n,e,t,i,s,r){return UT(es(n,e,t,i,s,r,!0))}function BT(n){return n?n.__v_isVNode===!0:!1}function js(n,e){return n.type===e.type&&n.key===e.key}const em=({key:n})=>n??null,No=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qe(n)||mt(n)||re(n)?{i:Rt,r:n,k:e,f:!!t}:n:null);function es(n,e=null,t=null,i=0,s=null,r=n===Ft?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&em(e),ref:e&&No(e),scopeId:Og,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return l?(uu(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=qe(t)?8:16),Ir>0&&!o&&St&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&St.push(c),c}const _i=$T;function $T(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===sT)&&(n=Tr),BT(n)){const l=ls(n,e,!0);return t&&uu(l,t),Ir>0&&!r&&St&&(l.shapeFlag&6?St[St.indexOf(n)]=l:St.push(l)),l.patchFlag=-2,l}if(XT(n)&&(n=n.__vccOpts),e){e=jT(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=Yc(l)),De(c)&&(wg(c)&&!ie(c)&&(c=gt({},c)),e.style=Qc(c))}const o=qe(n)?1:LT(n)?128:IT(n)?64:De(n)?4:re(n)?2:0;return es(n,e,t,i,s,o,r,!0)}function jT(n){return n?wg(n)||jg(n)?gt({},n):n:null}function ls(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:c}=n,u=e?qT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&em(u),ref:e&&e.ref?t&&r?ie(r)?r.concat(No(e)):[r,No(e)]:No(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ft?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ls(n.ssContent),ssFallback:n.ssFallback&&ls(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Dg(d,c.clone(d)),d}function ic(n=" ",e=0){return _i(wa,null,n,e)}function Yt(n){return n==null||typeof n=="boolean"?_i(Tr):ie(n)?_i(Ft,null,n.slice()):typeof n=="object"?Pn(n):_i(wa,null,String(n))}function Pn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ls(n)}function uu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),uu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!jg(e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:Rt},t=32):(e=String(e),i&64?(t=16,e=[ic(e)]):t=8);n.children=e,n.shapeFlag|=t}function qT(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Yc([e.class,i.class]));else if(s==="style")e.style=Qc([e.style,i.style]);else if(ma(s)){const r=e[s],o=i[s];o&&r!==o&&!(ie(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Qt(n,e,t,i=null){jt(n,e,7,[t,i])}const HT=Ug();let WT=0;function zT(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||HT,r={uid:WT++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new dE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hg(i,s),emitsOptions:Zg(i,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:i.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=kT.bind(null,r),n.ce&&n.ce(r),r}let at=null;const tm=()=>at||Rt;let $o,sc;{const n=og(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};$o=e("__VUE_INSTANCE_SETTERS__",t=>at=t),sc=e("__VUE_SSR_SETTERS__",t=>Aa=t)}const Dr=n=>{const e=at;return $o(n),n.scope.on(),()=>{n.scope.off(),$o(e)}},kd=()=>{at&&at.scope.off(),$o(null)};function nm(n){return n.vnode.shapeFlag&4}let Aa=!1;function KT(n,e=!1,t=!1){e&&sc(e);const{props:i,children:s}=n.vnode,r=nm(n);gT(n,i,r,e),vT(n,s,t);const o=r?GT(n,e):void 0;return e&&sc(!1),o}function GT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,oT);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?YT(n):null,r=Dr(n);Gn();const o=Mn(i,n,0,[n.props,s]);if(Qn(),r(),tg(o)){if(o.then(kd,kd),e)return o.then(l=>{Od(n,l,e)}).catch(l=>{Ea(l,n,0)});n.asyncDep=o}else Od(n,o,e)}else im(n,e)}function Od(n,e,t){re(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:De(e)&&(n.setupState=Sg(e)),im(n,t)}let Dd;function im(n,e,t){const i=n.type;if(!n.render){if(!e&&Dd&&!i.render){const s=i.template||lu(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:l,compilerOptions:c}=i,u=gt(gt({isCustomElement:r,delimiters:l},o),c);i.render=Dd(s,u)}}n.render=i.render||Ot}{const s=Dr(n);Gn();try{aT(n)}finally{Qn(),s()}}}const QT={get(n,e){return vt(n,"get",""),n[e]}};function YT(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,QT),slots:n.slots,emit:n.emit,expose:e}}function Ca(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Sg(ME(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in sr)return sr[t](n)},has(e,t){return t in e||t in sr}})):n.proxy}function XT(n){return re(n)&&"__vccOpts"in n}const JT=(n,e)=>LE(n,e,Aa),ZT="3.4.34";/**
* @vue/runtime-dom v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const eI="http://www.w3.org/2000/svg",tI="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,xd=pn&&pn.createElement("template"),nI={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?pn.createElementNS(eI,n):e==="mathml"?pn.createElementNS(tI,n):t?pn.createElement(n,{is:t}):pn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>pn.createTextNode(n),createComment:n=>pn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{xd.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const l=xd.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},iI=Symbol("_vtc");function sI(n,e,t){const i=n[iI];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Md=Symbol("_vod"),rI=Symbol("_vsh"),oI=Symbol(""),aI=/(^|;)\s*display\s*:/;function lI(n,e,t){const i=n.style,s=qe(t);let r=!1;if(t&&!s){if(e)if(qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&ko(i,l,"")}else for(const o in e)t[o]==null&&ko(i,o,"");for(const o in t)o==="display"&&(r=!0),ko(i,o,t[o])}else if(s){if(e!==t){const o=i[oI];o&&(t+=";"+o),i.cssText=t,r=aI.test(t)}}else e&&n.removeAttribute("style");Md in n&&(n[Md]=r?i.display:"",n[rI]&&(i.display="none"))}const Ld=/\s*!important$/;function ko(n,e,t){if(ie(t))t.forEach(i=>ko(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=cI(n,e);Ld.test(t)?n.setProperty(Oi(i),t.replace(Ld,""),"important"):n[i]=t}}const Vd=["Webkit","Moz","ms"],_l={};function cI(n,e){const t=_l[e];if(t)return t;let i=Ei(e);if(i!=="filter"&&i in n)return _l[e]=i;i=sg(i);for(let s=0;s<Vd.length;s++){const r=Vd[s]+i;if(r in n)return _l[e]=r}return e}const Fd="http://www.w3.org/1999/xlink";function Ud(n,e,t,i,s,r=hE(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Fd,e.slice(6,e.length)):n.setAttributeNS(Fd,e,t):t==null||r&&!ag(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Kn(t)?String(t):t)}function uI(n,e,t,i){if(e==="innerHTML"||e==="textContent"){if(t==null)return;n[e]=t;return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=ag(t):t==null&&o==="string"?(t="",r=!0):o==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(e)}function Hi(n,e,t,i){n.addEventListener(e,t,i)}function hI(n,e,t,i){n.removeEventListener(e,t,i)}const Bd=Symbol("_vei");function dI(n,e,t,i,s=null){const r=n[Bd]||(n[Bd]={}),o=r[e];if(i&&o)o.value=i;else{const[l,c]=fI(e);if(i){const u=r[e]=mI(i,s);Hi(n,l,u,c)}else o&&(hI(n,l,o,c),r[e]=void 0)}}const $d=/(?:Once|Passive|Capture)$/;function fI(n){let e;if($d.test(n)){e={};let i;for(;i=n.match($d);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Oi(n.slice(2)),e]}let yl=0;const pI=Promise.resolve(),gI=()=>yl||(pI.then(()=>yl=0),yl=Date.now());function mI(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;jt(_I(i,t.value),e,5,[i])};return t.value=n,t.attached=gI(),t}function _I(n,e){if(ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const jd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,yI=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?sI(n,i,o):e==="style"?lI(n,t,i):ma(e)?zc(e)||dI(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vI(n,e,i,o))?(uI(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ud(n,e,i,o,r,e!=="value")):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ud(n,e,i,o))};function vI(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&jd(e)&&re(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jd(e)&&qe(t)?!1:e in n}const qd=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ie(e)?t=>Ro(e,t):e};function EI(n){n.target.composing=!0}function Hd(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vl=Symbol("_assign"),Wd={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[vl]=qd(s);const r=i||s.props&&s.props.type==="number";Hi(n,e?"change":"input",o=>{if(o.target.composing)return;let l=n.value;t&&(l=l.trim()),r&&(l=Wl(l)),n[vl](l)}),t&&Hi(n,"change",()=>{n.value=n.value.trim()}),e||(Hi(n,"compositionstart",EI),Hi(n,"compositionend",Hd),Hi(n,"change",Hd))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[vl]=qd(o),n.composing)return;const l=(r||n.type==="number")&&!/^0\d/.test(n.value)?Wl(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===c)||(n.value=c))}},TI=gt({patchProp:yI},nI);let zd;function II(){return zd||(zd=wT(TI))}const wI=(...n)=>{const e=II().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=CI(i);if(!s)return;const r=e._component;!re(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,AI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function AI(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function CI(n){return qe(n)?document.querySelector(n):n}var Kd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(n,e){if(!n)throw ys(e)},ys=function(n){return new Error("Firebase Database ("+sm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},RI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ra={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|u>>6,T=u&63;c||(T=64,o||(m=64)),i.push(t[d],t[p],t[m],t[T])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):RI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||u==null||p==null)throw new SI;const m=r<<2|l>>4;if(i.push(m),u!==64){const T=l<<4&240|u>>2;if(i.push(T),p!==64){const b=u<<6&192|p;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class SI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const om=function(n){const e=rm(n);return Ra.encodeByteArray(e,!0)},jo=function(n){return om(n).replace(/\./g,"")},qo=function(n){try{return Ra.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n){return am(void 0,n)}function am(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!PI(t)||(n[t]=am(n[t],e[t]));return n}function PI(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=()=>NI().__FIREBASE_DEFAULTS__,OI=()=>{if(typeof process>"u"||typeof Kd>"u")return;const n=Kd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},DI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qo(n[1]);return e&&JSON.parse(e)},Sa=()=>{try{return kI()||OI()||DI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xI=n=>{var e,t;return(t=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},MI=n=>{const e=xI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},lm=()=>{var n;return(n=Sa())===null||n===void 0?void 0:n.config},LI=n=>{var e;return(e=Sa())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[jo(JSON.stringify(t)),jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function FI(){var n;const e=(n=Sa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function um(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hm(){return sm.NODE_ADMIN===!0}function UI(){return!FI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function du(){try{return typeof indexedDB=="object"}catch{return!1}}function dm(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function BI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="FirebaseError";class Kt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=$I,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?jI(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Kt(s,l,i)}}function jI(n,e){return n.replace(qI,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const qI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){return JSON.parse(n)}function Ye(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Ar(qo(r[0])||""),t=Ar(qo(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},HI=function(n){const e=fm(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},WI=function(n){const e=fm(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function cs(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Gd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ho(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Wo(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Qd(r)&&Qd(o)){if(!Wo(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Qd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,d;for(let p=0;p<80;p++){p<40?p<20?(u=l^r&(o^l),d=1518500249):(u=r^o^l,d=1859775393):p<60?(u=r&o|l&(r|o),d=2400959708):(u=r^o^l,d=3395469782);const m=(s<<5|s>>>27)+u+c+d+i[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function KI(n,e){const t=new GI(n,e);return t.subscribe.bind(t)}class GI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");QI(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=El),s.error===void 0&&(s.error=El),s.complete===void 0&&(s.complete=El);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function El(){}function YI(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,H(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ba=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=1e3,ZI=2,ew=4*60*60*1e3,tw=.5;function Yd(n,e=JI,t=ZI){const i=e*Math.pow(t,n),s=Math.round(tw*i*(Math.random()-.5)*2);return Math.min(ew,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(n){return n&&n._delegate?n._delegate:n}class _t{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new wr;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sw(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:iw(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iw(n){return n===ai?void 0:n}function sw(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(le||(le={}));const ow={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},aw=le.INFO,lw={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},cw=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=lw[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vs{constructor(e){this.name=e,this._logLevel=aw,this._logHandler=cw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const uw=(n,e)=>e.some(t=>n instanceof t);let Xd,Jd;function hw(){return Xd||(Xd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dw(){return Jd||(Jd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pm=new WeakMap,rc=new WeakMap,gm=new WeakMap,Tl=new WeakMap,pu=new WeakMap;function fw(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ln(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pm.set(t,n)}).catch(()=>{}),pu.set(e,n),e}function pw(n){if(rc.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});rc.set(n,e)}let oc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return rc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ln(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gw(n){oc=n(oc)}function mw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Il(this),e,...t);return gm.set(i,e.sort?e.sort():[e]),Ln(i)}:dw().includes(n)?function(...e){return n.apply(Il(this),e),Ln(pm.get(this))}:function(...e){return Ln(n.apply(Il(this),e))}}function _w(n){return typeof n=="function"?mw(n):(n instanceof IDBTransaction&&pw(n),uw(n,hw())?new Proxy(n,oc):n)}function Ln(n){if(n instanceof IDBRequest)return fw(n);if(Tl.has(n))return Tl.get(n);const e=_w(n);return e!==n&&(Tl.set(n,e),pu.set(e,n)),e}const Il=n=>pu.get(n);function mm(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),l=Ln(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ln(o.result),c.oldVersion,c.newVersion,Ln(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const yw=["get","getKey","getAll","getAllKeys","count"],vw=["put","add","delete","clear"],wl=new Map;function Zd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wl.get(e))return wl.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=vw.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||yw.includes(t)))return;const r=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return wl.set(e,r),r}gw(n=>({...n,get:(e,t,i)=>Zd(e,t)||n.get(e,t,i),has:(e,t)=>!!Zd(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tw(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Tw(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",ef="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new vs("@firebase/app"),Iw="@firebase/app-compat",ww="@firebase/analytics-compat",Aw="@firebase/analytics",Cw="@firebase/app-check-compat",Rw="@firebase/app-check",Sw="@firebase/auth",bw="@firebase/auth-compat",Pw="@firebase/database",Nw="@firebase/database-compat",kw="@firebase/functions",Ow="@firebase/functions-compat",Dw="@firebase/installations",xw="@firebase/installations-compat",Mw="@firebase/messaging",Lw="@firebase/messaging-compat",Vw="@firebase/performance",Fw="@firebase/performance-compat",Uw="@firebase/remote-config",Bw="@firebase/remote-config-compat",$w="@firebase/storage",jw="@firebase/storage-compat",qw="@firebase/firestore",Hw="@firebase/vertexai-preview",Ww="@firebase/firestore-compat",zw="firebase",Kw="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="[DEFAULT]",Gw={[ac]:"fire-core",[Iw]:"fire-core-compat",[Aw]:"fire-analytics",[ww]:"fire-analytics-compat",[Rw]:"fire-app-check",[Cw]:"fire-app-check-compat",[Sw]:"fire-auth",[bw]:"fire-auth-compat",[Pw]:"fire-rtdb",[Nw]:"fire-rtdb-compat",[kw]:"fire-fn",[Ow]:"fire-fn-compat",[Dw]:"fire-iid",[xw]:"fire-iid-compat",[Mw]:"fire-fcm",[Lw]:"fire-fcm-compat",[Vw]:"fire-perf",[Fw]:"fire-perf-compat",[Uw]:"fire-rc",[Bw]:"fire-rc-compat",[$w]:"fire-gcs",[jw]:"fire-gcs-compat",[qw]:"fire-fst",[Ww]:"fire-fst-compat",[Hw]:"fire-vertex","fire-js":"fire-js",[zw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map,Qw=new Map,cc=new Map;function tf(n,e){try{n.container.addComponent(e)}catch(t){Ii.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Et(n){const e=n.name;if(cc.has(e))return Ii.debug(`There were multiple attempts to register component ${e}.`),!1;cc.set(e,n);for(const t of zo.values())tf(t,n);for(const t of Qw.values())tf(t,n);return!0}function xr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qs(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new Yn("app","Firebase",Yw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=Kw;function _m(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:lc,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Vn.create("bad-app-name",{appName:String(s)});if(t||(t=lm()),!t)throw Vn.create("no-options");const r=zo.get(s);if(r){if(Wo(t,r.options)&&Wo(i,r.config))return r;throw Vn.create("duplicate-app",{appName:s})}const o=new rw(s);for(const c of cc.values())o.addComponent(c);const l=new Xw(t,i,o);return zo.set(s,l),l}function gu(n=lc){const e=zo.get(n);if(!e&&n===lc&&lm())return _m();if(!e)throw Vn.create("no-app",{appName:n});return e}function Xe(n,e,t){var i;let s=(i=Gw[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ii.warn(l.join(" "));return}Et(new _t(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="firebase-heartbeat-database",Zw=1,Cr="firebase-heartbeat-store";let Al=null;function ym(){return Al||(Al=mm(Jw,Zw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Cr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vn.create("idb-open",{originalErrorMessage:n.message})})),Al}async function eA(n){try{const t=(await ym()).transaction(Cr),i=await t.objectStore(Cr).get(vm(n));return await t.done,i}catch(e){if(e instanceof Kt)Ii.warn(e.message);else{const t=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ii.warn(t.message)}}}async function nf(n,e){try{const i=(await ym()).transaction(Cr,"readwrite");await i.objectStore(Cr).put(e,vm(n)),await i.done}catch(t){if(t instanceof Kt)Ii.warn(t.message);else{const i=Vn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ii.warn(i.message)}}}function vm(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=1024,nA=30*24*60*60*1e3;class iA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=nA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sf(),{heartbeatsToSend:i,unsentEntries:s}=sA(this._heartbeatsCache.heartbeats),r=jo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function sf(){return new Date().toISOString().substring(0,10)}function sA(n,e=tA){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),rf(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),rf(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class rA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return du()?dm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return nf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return nf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rf(n){return jo(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(n){Et(new _t("platform-logger",e=>new Ew(e),"PRIVATE")),Et(new _t("heartbeat",e=>new iA(e),"PRIVATE")),Xe(ac,ef,n),Xe(ac,ef,"esm2017"),Xe("fire-js","")}oA("");function Em(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Tm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aA=Tm,Im=new Yn("auth","Firebase",Tm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new vs("@firebase/auth");function lA(n,...e){Ko.logLevel<=le.WARN&&Ko.warn(`Auth (${Es}): ${n}`,...e)}function Oo(n,...e){Ko.logLevel<=le.ERROR&&Ko.error(`Auth (${Es}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(n,...e){throw mu(n,...e)}function wm(n,...e){return mu(n,...e)}function Am(n,e,t){const i=Object.assign(Object.assign({},aA()),{[e]:t});return new Yn("auth","Firebase",i).create(e,{appName:n.name})}function Do(n){return Am(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mu(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Im.create(n,...e)}function ve(n,e,...t){if(!n)throw mu(e,...t)}function ar(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Oo(e),new Error(e)}function Go(n,e){n||ar(e)}function cA(){return af()==="http:"||af()==="https:"}function af(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cA()||cm()||"connection"in navigator)?navigator.onLine:!0}function hA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Go(t>e,"Short delay should be less than long delay!"),this.isMobile=hu()||um()}get(){return uA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(n,e){Go(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new Mr(3e4,6e4);function Rm(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pa(n,e,t,i,s={}){return Sm(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=fu(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Cm.fetch()(bm(n,n.config.apiHost,t,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Sm(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},fA),e);try{const s=new gA(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw po(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw po(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw po(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw po(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Am(n,d,u);of(n,d)}}catch(s){if(s instanceof Kt)throw s;of(n,"network-request-failed",{message:String(s)})}}function bm(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?dA(n.config,s):`${n.config.apiScheme}://${s}`}class gA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(wm(this.auth,"network-request-failed")),pA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function po(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=wm(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(n,e){return Pa(n,"POST","/v1/accounts:delete",e)}async function Pm(n,e){return Pa(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _A(n,e=!1){const t=an(n),i=await t.getIdToken(e),s=Nm(i);ve(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:lr(Cl(s.auth_time)),issuedAtTime:lr(Cl(s.iat)),expirationTime:lr(Cl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Cl(n){return Number(n)*1e3}function Nm(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=qo(t);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lf(n){const e=Nm(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Kt&&yA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function yA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(n){var e;const t=n.auth,i=await n.getIdToken(),s=await uc(n,Pm(t,{idToken:i}));ve(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?km(r.providerUserInfo):[],l=TA(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new hc(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function EA(n){const e=an(n);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TA(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function km(n){return n.map(e=>{var{providerId:t}=e,i=Em(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(n,e){const t=await Sm(n,{},async()=>{const i=fu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=bm(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cm.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wA(n,e){return Pa(n,"POST","/v2/accounts:revokeToken",Rm(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=lf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await IA(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new ts;return i&&(ve(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ve(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ve(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Em(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new hc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await uc(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _A(this,e)}reload(){return EA(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Qo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qs(this.auth.app))return Promise.reject(Do(this.auth));const e=await this.getIdToken();return await uc(this,mA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,l,c,u,d;const p=(i=t.displayName)!==null&&i!==void 0?i:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,T=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,O=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,z=(u=t.createdAt)!==null&&u!==void 0?u:void 0,Q=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:F,emailVerified:W,isAnonymous:ae,providerData:G,stsTokenManager:I}=t;ve(F&&I,e,"internal-error");const _=ts.fromJSON(this.name,I);ve(typeof F=="string",e,"internal-error"),Sn(p,e.name),Sn(m,e.name),ve(typeof W=="boolean",e,"internal-error"),ve(typeof ae=="boolean",e,"internal-error"),Sn(T,e.name),Sn(b,e.name),Sn(k,e.name),Sn(O,e.name),Sn(z,e.name),Sn(Q,e.name);const v=new kn({uid:F,auth:e,email:m,emailVerified:W,displayName:p,isAnonymous:ae,photoURL:b,phoneNumber:T,tenantId:k,stsTokenManager:_,createdAt:z,lastLoginAt:Q});return G&&Array.isArray(G)&&(v.providerData=G.map(w=>Object.assign({},w))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,t,i=!1){const s=new ts;s.updateFromServerResponse(t);const r=new kn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Qo(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];ve(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?km(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new ts;l.updateFromIdToken(i);const c=new kn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new hc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new Map;function ui(n){Go(n instanceof Function,"Expected a class definition");let e=cf.get(n);return e?(Go(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,cf.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Om.type="NONE";const uf=Om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n,e,t){return`firebase:${n}:${e}:${t}`}class ns{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Rl(this.userKey,s.apiKey,r),this.fullPersistenceKey=Rl("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ns(ui(uf),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||ui(uf);const o=Rl(i,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){const p=kn._fromJSON(e,d);u!==r&&(l=p),r=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ns(r,e,i):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ns(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PA(e))return"Blackberry";if(NA(e))return"Webos";if(CA(e))return"Safari";if((e.includes("chrome/")||RA(e))&&!e.includes("edge/"))return"Chrome";if(bA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function AA(n=Wt()){return/firefox\//i.test(n)}function CA(n=Wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RA(n=Wt()){return/crios\//i.test(n)}function SA(n=Wt()){return/iemobile/i.test(n)}function bA(n=Wt()){return/android/i.test(n)}function PA(n=Wt()){return/blackberry/i.test(n)}function NA(n=Wt()){return/webos/i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n,e=[]){let t;switch(n){case"Browser":t=hf(Wt());break;case"Worker":t=`${hf(Wt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Es}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(n,e={}){return Pa(n,"GET","/v2/passwordPolicy",Rm(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=6;class xA{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:DA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new df(this),this.idTokenSubscription=new df(this),this.beforeStateQueue=new kA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Im,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ui(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Pm(this,{idToken:e}),i=await kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qs(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qs(this.app))return Promise.reject(Do(this));const t=e?an(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qs(this.app)?Promise.reject(Do(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qs(this.app)?Promise.reject(Do(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ui(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OA(this),t=new xA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await wA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ui(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[ui(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&lA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function LA(n){return an(n)}class df{constructor(e){this.auth=e,this.observer=null,this.addObserver=KI(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function VA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ui);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new Mr(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Mr(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Mr(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Mr(5e3,15e3);var ff="@firebase/auth",pf="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BA(n){Et(new _t("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dm(n)},u=new MA(i,s,r,c);return VA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Et(new _t("auth-internal",e=>{const t=LA(e.getProvider("auth").getImmediate());return(i=>new FA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(ff,pf,UA(n)),Xe(ff,pf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=5*60;LI("authIdTokenMaxAge");BA("Browser");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const jA={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function go(n){return Object.isFrozen(n)&&Object.isFrozen(n.raw)}function mo(n){return n.toString().indexOf("`")===-1}mo(n=>n``)||mo(n=>n`\0`)||mo(n=>n`\n`)||mo(n=>n`\u0000`);go``&&go`\0`&&go`\n`&&go`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let xm="google#safe";function qA(){if(typeof window<"u")return window.trustedTypes}function Mm(){var n;return xm!==""&&(n=qA())!==null&&n!==void 0?n:null}let _o;function HA(){var n,e;if(_o===void 0)try{_o=(e=(n=Mm())===null||n===void 0?void 0:n.createPolicy(xm,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{_o=null}return _o}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Lm{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function gf(n){var e;const t=n,i=(e=HA())===null||e===void 0?void 0:e.createScriptURL(t);return i??new Lm(t,jA)}function WA(n){var e;if(!((e=Mm())===null||e===void 0)&&e.isScriptURL(n))return n;if(n instanceof Lm)return n.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function zA(n,...e){if(e.length===0)return gf(n[0]);n[0].toLowerCase();let t=n[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+n[i+1];return gf(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function KA(n){return GA("script",n)}function GA(n,e){var t;const i=e.document,s=(t=i.querySelector)===null||t===void 0?void 0:t.call(i,`${n}[nonce]`);return s&&(s.nonce||s.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function QA(n){const e=n.ownerDocument&&n.ownerDocument.defaultView,t=KA(e||window);t&&n.setAttribute("nonce",t)}function YA(n,e,t){n.src=WA(e),QA(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new Map,JA={activated:!1,tokenObservers:[]};function zt(n){return XA.get(n)||Object.assign({},JA)}const mf={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,t,i,s,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new wr,this.pending.promise.catch(t=>{}),await e0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new wr,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function e0(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Yo=new Yn("appCheck","AppCheck",t0);function Vm(n){if(!zt(n).activated)throw Yo.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="firebase-app-check-database",i0=1,dc="firebase-app-check-store";let yo=null;function s0(){return yo||(yo=new Promise((n,e)=>{try{const t=indexedDB.open(n0,i0);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;e(Yo.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},t.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(dc,{keyPath:"compositeKey"})}}}catch(t){e(Yo.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),yo)}function r0(n,e){return o0(a0(n),e)}async function o0(n,e){const i=(await s0()).transaction(dc,"readwrite"),r=i.objectStore(dc).put({compositeKey:n,value:e});return new Promise((o,l)=>{r.onsuccess=c=>{o()},i.onerror=c=>{var u;l(Yo.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function a0(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new vs("@firebase/app-check");function _f(n,e){return du()?r0(n,e).catch(t=>{fc.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0={error:"UNKNOWN_ERROR"};function c0(n){return Ra.encodeString(JSON.stringify(n),!1)}async function pc(n,e=!1){const t=n.app;Vm(t);const i=zt(t);let s=i.token,r;if(s&&!Ys(s)&&(i.token=void 0,s=void 0),!s){const c=await i.cachedTokenPromise;c&&(Ys(c)?s=c:await _f(t,void 0))}if(!e&&s&&Ys(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await zt(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?fc.warn(c.message):fc.error(c),r=c}let l;return s?r?Ys(s)?l={token:s.token,internalError:r}:l=vf(r):(l={token:s.token},i.token=s,await _f(t,s)):l=vf(r),o&&f0(t,l),l}async function u0(n){const e=n.app;Vm(e);const{provider:t}=zt(e);{const{token:i}=await t.getToken();return{token:i}}}function h0(n,e,t,i){const{app:s}=n,r=zt(s),o={next:t,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Ys(r.token)){const l=r.token;Promise.resolve().then(()=>{t({token:l.token}),yf(n)}).catch(()=>{})}r.cachedTokenPromise.then(()=>yf(n))}function Fm(n,e){const t=zt(n),i=t.tokenObservers.filter(s=>s.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function yf(n){const{app:e}=n,t=zt(e);let i=t.tokenRefresher;i||(i=d0(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function d0(n){const{app:e}=n;return new ZA(async()=>{const t=zt(e);let i;if(t.token?i=await pc(n,!0):i=await pc(n),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const t=zt(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const s=t.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},mf.RETRIAL_MIN_WAIT,mf.RETRIAL_MAX_WAIT)}function f0(n,e){const t=zt(n).tokenObservers;for(const i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ys(n){return n.expireTimeMillis-Date.now()>0}function vf(n){return{token:c0(l0),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=zt(this.app);for(const t of e)Fm(this.app,t.next);return Promise.resolve()}}function g0(n,e){return new p0(n,e)}function m0(n){return{getToken:e=>pc(n,e),getLimitedUseToken:()=>u0(n),addTokenListener:e=>h0(n,"INTERNAL",e),removeTokenListener:e=>Fm(n.app,e)}}const _0="@firebase/app-check",y0="0.8.6",v0="app-check",Ef="app-check-internal";function E0(){Et(new _t(v0,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return g0(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Ef).initialize()})),Et(new _t(Ef,n=>{const e=n.getProvider("app-check").getImmediate();return m0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Xe(_0,y0)}E0();var T0="firebase",I0="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe(T0,I0,"app");const Um=Symbol("firebaseApp");function Bm(n){return tm()&&Zi(Um,null)||gu(n)}const Zt=()=>{};function _u(n,e){return e.split(".").reduce((t,i)=>t&&t[i],n)}function w0(n,e,t){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,l)=>o&&o[l],n);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,t):r[s]=t}function Di(n){return!!n&&typeof n=="object"}const A0=Object.prototype;function C0(n){return Di(n)&&Object.getPrototypeOf(n)===A0}function yu(n){return Di(n)&&n.type==="document"}function R0(n){return Di(n)&&n.type==="collection"}function S0(n){return yu(n)||R0(n)}function b0(n){return Di(n)&&n.type==="query"}function P0(n){return Di(n)&&"ref"in n}function N0(n){return Di(n)&&typeof n.bucket=="string"}function k0(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}const O0=Symbol.for("v-scx");function D0(){return!!Zi(O0,0)}var Tf={};const If="@firebase/database",wf="1.0.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $m="";function x0(n){$m=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ye(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ar(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return En(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new M0(e)}}catch{}return new L0},hi=jm("localStorage"),V0=jm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new vs("@firebase/database"),F0=function(){let n=1;return function(){return n++}}(),qm=function(n){const e=XI(n),t=new zI;t.update(e);const i=t.digest();return Ra.encodeByteArray(i)},Lr=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Lr.apply(null,i):typeof i=="object"?e+=Ye(i):e+=i,e+=" "}return e};let cr=null,Af=!0;const U0=function(n,e){H(!e,"Can't turn on custom loggers persistently."),is.logLevel=le.VERBOSE,cr=is.log.bind(is)},it=function(...n){if(Af===!0&&(Af=!1,cr===null&&V0.get("logging_enabled")===!0&&U0()),cr){const e=Lr.apply(null,n);cr(e)}},Vr=function(n){return function(...e){it(n,...e)}},gc=function(...n){const e="FIREBASE INTERNAL ERROR: "+Lr(...n);is.error(e)},wi=function(...n){const e=`FIREBASE FATAL ERROR: ${Lr(...n)}`;throw is.error(e),new Error(e)},bt=function(...n){const e="FIREBASE WARNING: "+Lr(...n);is.warn(e)},B0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hm=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},$0=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},us="[MIN_NAME]",Ai="[MAX_NAME]",Ts=function(n,e){if(n===e)return 0;if(n===us||e===Ai)return-1;if(e===us||n===Ai)return 1;{const t=Cf(n),i=Cf(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},j0=function(n,e){return n===e?0:n<e?-1:1},qs=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ye(e))},vu=function(n){if(typeof n!="object"||n===null)return Ye(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Ye(e[i]),t+=":",t+=vu(n[e[i]]);return t+="}",t},Wm=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Mt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const zm=function(n){H(!Hm(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const d=u.join("");let p="";for(c=0;c<64;c+=8){let m=parseInt(d.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},q0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},H0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},W0=new RegExp("^-?(0*)\\d{1,10}$"),z0=-2147483648,K0=2147483647,Cf=function(n){if(W0.test(n)){const e=Number(n);if(e>=z0&&e<=K0)return e}return null},Fr=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw bt("Exception was thrown by user callback.",t),e},Math.floor(0))}},G0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ur=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="5",Km="v",Gm="s",Qm="r",Ym="f",Xm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jm="ls",Zm="p",mc="ac",e_="websocket",t_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t,i,s,r=!1,o="",l=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function J0(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function n_(n,e,t){H(typeof e=="string","typeof type must == string"),H(typeof t=="object","typeof params must == object");let i;if(e===e_)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===t_)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);J0(n)&&(t.ns=n.namespace);const s=[];return Mt(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.counters_={}}incrementCounter(e,t=1){En(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return bI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl={},bl={};function Tu(n){const e=n.toString();return Sl[e]||(Sl[e]=new Z0),Sl[e]}function eC(n,e){const t=n.toString();return bl[t]||(bl[t]=e()),bl[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Fr(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="start",nC="close",iC="pLPCommand",sC="pRTLPCB",i_="id",s_="pw",r_="ser",rC="cb",oC="seg",aC="ts",lC="d",cC="dframe",o_=1870,a_=30,uC=o_-a_,hC=25e3,dC=3e4;class Gi{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vr(e),this.stats_=Tu(t),this.urlFn=c=>(this.appCheckToken&&(c[mc]=this.appCheckToken),n_(t,t_,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new tC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dC)),$0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Iu((...r)=>{const[o,l,c,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rf)this.id=l,this.password=c;else if(o===nC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Rf]="t",i[r_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[rC]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Km]=Eu,this.transportSessionId&&(i[Gm]=this.transportSessionId),this.lastSessionId&&(i[Jm]=this.lastSessionId),this.applicationId&&(i[Zm]=this.applicationId),this.appCheckToken&&(i[mc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xm.test(location.hostname)&&(i[Qm]=Ym);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gi.forceAllow_=!0}static forceDisallow(){Gi.forceDisallow_=!0}static isAvailable(){return Gi.forceAllow_?!0:!Gi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!q0()&&!H0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=om(t),s=Wm(i,uC);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[cC]="t",i[i_]=e,i[s_]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ye(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Iu{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=F0(),window[iC+this.uniqueCallbackIdentifier]=e,window[sC+this.uniqueCallbackIdentifier]=t,this.myIFrame=Iu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){it("frame writing exception"),l.stack&&it(l.stack),it(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[i_]=this.myID,e[s_]=this.myPW,e[r_]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+a_+i.length<=o_;){const o=this.pendingSegs.shift();i=i+"&"+oC+s+"="+o.seg+"&"+aC+s+"="+o.ts+"&"+lC+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(hC)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=16384,pC=45e3;let Xo=null;typeof MozWebSocket<"u"?Xo=MozWebSocket:typeof WebSocket<"u"&&(Xo=WebSocket);class Ut{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vr(this.connId),this.stats_=Tu(t),this.connURL=Ut.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Km]=Eu,typeof location<"u"&&location.hostname&&Xm.test(location.hostname)&&(o[Qm]=Ym),t&&(o[Gm]=t),i&&(o[Jm]=i),s&&(o[mc]=s),r&&(o[Zm]=r),n_(e,e_,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hi.set("previous_websocket_failure",!0);try{let i;hm(),this.mySock=new Xo(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Xo!==null&&!Ut.forceDisallow_}static previouslyFailed(){return hi.isInMemoryStorage||hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Ar(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Wm(t,fC);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ut.responsesRequiredToBeHealthy=2;Ut.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gi,Ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ut&&Ut.isAvailable();let i=t&&!Ut.previouslyFailed();if(e.webSocketOnly&&(t||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ut];else{const s=this.transports_=[];for(const r of Rr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Rr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=6e4,mC=5e3,_C=10*1024,yC=100*1024,Pl="t",Sf="d",vC="s",bf="r",EC="e",Pf="o",Nf="a",kf="n",Of="p",TC="h";class IC{constructor(e,t,i,s,r,o,l,c,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vr("c:"+this.id+":"),this.transportManager_=new Rr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ur(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_C?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pl in e){const t=e[Pl];t===Nf?this.upgradeIfSecondaryHealthy_():t===bf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Pf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=qs("t",e),i=qs("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Of,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=qs("t",e),i=qs("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=qs(Pl,e);if(Sf in e){const i=e[Sf];if(t===TC){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===kf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===vC?this.onConnectionShutdown_(i):t===bf?this.onReset_(i):t===EC?gc("Server Error: "+i):t===Pf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Eu!==i&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ur(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ur(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Of,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){H(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends c_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Jo}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=32,xf=768;class Ne{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ce(){return new Ne("")}function he(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function qn(n){return n.pieces_.length-n.pieceNum_}function Pe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ne(n.pieces_,e)}function u_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function wC(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function h_(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function d_(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ne(e,0)}function ze(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof Ne)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new Ne(t,0)}function ce(n){return n.pieceNum_>=n.pieces_.length}function Dt(n,e){const t=he(n),i=he(e);if(t===null)return e;if(t===i)return Dt(Pe(n),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function f_(n,e){if(qn(n)!==qn(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Bt(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(qn(n)>qn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class AC{constructor(e,t){this.errorPrefix_=t,this.parts_=h_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ba(this.parts_[i]);p_(this)}}function CC(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ba(e),p_(n)}function RC(n){const e=n.parts_.pop();n.byteLength_-=ba(e),n.parts_.length>0&&(n.byteLength_-=1)}function p_(n){if(n.byteLength_>xf)throw new Error(n.errorPrefix_+"has a key path longer than "+xf+" bytes ("+n.byteLength_+").");if(n.parts_.length>Df)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Df+") or object contains a cycle "+li(n))}function li(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends c_{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new wu}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=1e3,SC=60*5*1e3,Mf=30*1e3,bC=1.3,PC=3e4,NC="server_kill",Lf=3;class _n extends l_{constructor(e,t,i,s,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=_n.nextPersistentConnectionId_++,this.log_=Vr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hs,this.maxReconnectDelay_=SC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!hm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Jo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Ye(r)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new wr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,u=l.s;_n.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&En(e,"w")){const i=cs(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||WI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=HI(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ye(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):gc("Unrecognized action received from server: "+Ye(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PC&&(this.reconnectDelay_=Hs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+_n.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,i())},u=function(p){H(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new IC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,T=>{bt(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(NC)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&bt(p),c())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gd(this.interruptReasons_)&&(this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>vu(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new Ne(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){it("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lf&&(this.reconnectDelay_=Mf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){it("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+$m.replace(/\./g,"-")]=1,hu()?e["framework.cordova"]=1:um()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Jo.getInstance().currentlyOnline();return Gd(this.interruptReasons_)&&e}}_n.nextPersistentConnectionId_=0;_n.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new de(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new de(us,e),s=new de(us,t);return this.compare(i,s)!==0}minPost(){return de.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo;class g_ extends Na{static get __EMPTY_NODE(){return vo}static set __EMPTY_NODE(e){vo=e}compare(e,t){return Ts(e.name,t.name)}isDefinedOn(e){throw ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return de.MIN}maxPost(){return new de(Ai,vo)}makePost(e,t){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,vo)}toString(){return".key"}}const ss=new g_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo=class{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ct=class Xs{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Xs.RED,this.left=s??en.EMPTY_NODE,this.right=r??en.EMPTY_NODE}copy(e,t,i,s,r){return new Xs(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return en.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return en.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ct.RED=!0;Ct.BLACK=!1;class kC{copy(e,t,i,s,r){return this}insert(e,t,i){return new Ct(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let en=class xo{constructor(e,t=xo.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new xo(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ct.BLACK,null,null))}remove(e){return new xo(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ct.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Eo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Eo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Eo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Eo(this.root_,null,this.comparator_,!0,e)}};en.EMPTY_NODE=new kC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(n,e){return Ts(n.name,e.name)}function Au(n,e){return Ts(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c;function DC(n){_c=n}const m_=function(n){return typeof n=="number"?"number:"+zm(n):"string:"+n},__=function(n){if(n.isLeafNode()){const e=n.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&En(e,".sv"),"Priority must be a string or number.")}else H(n===_c||n.isEmpty(),"priority of unexpected type.");H(n===_c||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vf;class He{constructor(e,t=He.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),__(this.priorityNode_)}static set __childrenNodeConstructor(e){Vf=e}static get __childrenNodeConstructor(){return Vf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new He(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:he(e)===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:He.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=he(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(H(i!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,He.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+m_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=zm(this.value_):e+=this.value_,this.lazyHash_=qm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===He.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof He.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=He.VALUE_TYPE_ORDER.indexOf(t),r=He.VALUE_TYPE_ORDER.indexOf(i);return H(s>=0,"Unknown leaf type: "+t),H(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}He.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y_,v_;function xC(n){y_=n}function MC(n){v_=n}class LC extends Na{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Ts(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return de.MIN}maxPost(){return new de(Ai,new He("[PRIORITY-POST]",v_))}makePost(e,t){const i=y_(e);return new de(t,new He("[PRIORITY-POST]",i))}toString(){return".priority"}}const lt=new LC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=Math.log(2);class FC{constructor(e){const t=r=>parseInt(Math.log(r)/VC,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zo=function(n,e,t,i){n.sort(e);const s=function(c,u){const d=u-c;let p,m;if(d===0)return null;if(d===1)return p=n[c],m=t?t(p):p,new Ct(m,p.node,Ct.BLACK,null,null);{const T=parseInt(d/2,10)+c,b=s(c,T),k=s(T+1,u);return p=n[T],m=t?t(p):p,new Ct(m,p.node,Ct.BLACK,b,k)}},r=function(c){let u=null,d=null,p=n.length;const m=function(b,k){const O=p-b,z=p;p-=b;const Q=s(O+1,z),F=n[O],W=t?t(F):F;T(new Ct(W,F.node,k,null,Q))},T=function(b){u?(u.left=b,u=b):(d=b,u=b)};for(let b=0;b<c.count;++b){const k=c.nextBitIsOne(),O=Math.pow(2,c.count-(b+1));k?m(O,Ct.BLACK):(m(O,Ct.BLACK),m(O,Ct.RED))}return d},o=new FC(n.length),l=r(o);return new en(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl;const qi={};class gn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return H(qi&&lt,"ChildrenNode.ts has not been loaded"),Nl=Nl||new gn({".priority":qi},{".priority":lt}),Nl}get(e){const t=cs(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof en?t:null}hasIndex(e){return En(this.indexSet_,e.toString())}addIndex(e,t){H(e!==ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(de.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Zo(i,e.getCompare()):l=qi;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=l,new gn(d,u)}addToIndexes(e,t){const i=Ho(this.indexes_,(s,r)=>{const o=cs(this.indexSet_,r);if(H(o,"Missing index implementation for "+r),s===qi)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(de.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),Zo(l,o.getCompare())}else return qi;else{const l=t.get(e.name);let c=s;return l&&(c=c.remove(new de(e.name,l))),c.insert(e,e.node)}});return new gn(i,this.indexSet_)}removeFromIndexes(e,t){const i=Ho(this.indexes_,s=>{if(s===qi)return s;{const r=t.get(e.name);return r?s.remove(new de(e.name,r)):s}});return new gn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;class Ie{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&__(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ws||(Ws=new Ie(new en(Au),null,gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ws}updatePriority(e){return this.children_.isEmpty()?this:new Ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ws:t}}getChild(e){const t=he(e);return t===null?this:this.getImmediateChild(t).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(H(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new de(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ws:this.priorityNode_;return new Ie(s,o,r)}}updateChild(e,t){const i=he(e);if(i===null)return t;{H(he(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Pe(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(lt,(o,l)=>{t[o]=l.val(e),i++,r&&Ie.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+m_(this.getPriority().val())+":"),this.forEachChild(lt,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":qm(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new de(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new de(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new de(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,de.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ur?-1:0}withIndex(e){if(e===ss||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(lt),s=t.getIterator(lt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ss?null:this.indexMap_.get(e.toString())}}Ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class UC extends Ie{constructor(){super(new en(Au),Ie.EMPTY_NODE,gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ie.EMPTY_NODE}isEmpty(){return!1}}const Ur=new UC;Object.defineProperties(de,{MIN:{value:new de(us,Ie.EMPTY_NODE)},MAX:{value:new de(Ai,Ur)}});g_.__EMPTY_NODE=Ie.EMPTY_NODE;He.__childrenNodeConstructor=Ie;DC(Ur);MC(Ur);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=!0;function st(n,e=null){if(n===null)return Ie.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new He(t,st(e))}if(!(n instanceof Array)&&BC){const t=[];let i=!1;if(Mt(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=st(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new de(o,c)))}}),t.length===0)return Ie.EMPTY_NODE;const r=Zo(t,OC,o=>o.name,Au);if(i){const o=Zo(t,lt.getCompare());return new Ie(r,st(e),new gn({".priority":o},{".priority":lt}))}else return new Ie(r,st(e),gn.Default)}else{let t=Ie.EMPTY_NODE;return Mt(n,(i,s)=>{if(En(n,i)&&i.substring(0,1)!=="."){const r=st(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(st(e))}}xC(st);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C extends Na{constructor(e){super(),this.indexPath_=e,H(!ce(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Ts(e.name,t.name):r}makePost(e,t){const i=st(e),s=Ie.EMPTY_NODE.updateChild(this.indexPath_,i);return new de(t,s)}maxPost(){const e=Ie.EMPTY_NODE.updateChild(this.indexPath_,Ur);return new de(Ai,e)}toString(){return h_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC extends Na{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Ts(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,t){const i=st(e);return new de(t,i)}toString(){return".value"}}const qC=new jC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(n){return{type:"value",snapshotNode:n}}function WC(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function zC(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ff(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function KC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:us}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===lt}copy(){const e=new Cu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Uf(n){const e={};if(n.isDefault())return e;let t;if(n.index_===lt?t="$priority":n.index_===qC?t="$value":n.index_===ss?t="$key":(H(n.index_ instanceof $C,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ye(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Ye(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Ye(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Ye(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Ye(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Bf(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==lt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends l_{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Vr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ea.getListenId_(e,i),l={};this.listens_[o]=l;const c=Uf(e._queryParams);this.restRequest_(r+".json",c,(u,d)=>{let p=d;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(r,p,!1,i),cs(this.listens_,o)===l){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,t){const i=ea.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Uf(e._queryParams),i=e._path.toString(),s=new wr;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fu(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Ar(l.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.rootNode_=Ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){return{value:null,children:new Map}}function E_(n,e,t){if(ce(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=he(e);n.children.has(i)||n.children.set(i,ta());const s=n.children.get(i);e=Pe(e),E_(s,e,t)}}function yc(n,e,t){n.value!==null?t(e,n.value):QC(n,(i,s)=>{const r=new Ne(e.toString()+"/"+i);yc(s,r,t)})}function QC(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Mt(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=10*1e3,XC=30*1e3,JC=5*60*1e3;class ZC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new YC(e);const i=$f+(XC-$f)*Math.random();ur(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Mt(e,(s,r)=>{r>0&&En(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),ur(this.reportStats_.bind(this),Math.floor(Math.random()*2*JC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function T_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function I_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function w_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=tn.ACK_USER_WRITE,this.source=T_()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ne(e));return new na(Ce(),t,this.revert)}}else return H(he(this.path)===e,"operationForChild called for unrelated child."),new na(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=tn.OVERWRITE}operationForChild(e){return ce(this.path)?new Ci(this.source,Ce(),this.snap.getImmediateChild(e)):new Ci(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=tn.MERGE}operationForChild(e){if(ce(this.path)){const t=this.children.subtree(new Ne(e));return t.isEmpty()?null:t.value?new Ci(this.source,Ce(),t.value):new Sr(this.source,Ce(),t)}else return H(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Sr(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=he(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function eR(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(KC(o.childName,o.snapshotNode))}),zs(n,s,"child_removed",e,i,t),zs(n,s,"child_added",e,i,t),zs(n,s,"child_moved",r,i,t),zs(n,s,"child_changed",e,i,t),zs(n,s,"value",e,i,t),s}function zs(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,c)=>nR(n,l,c)),o.forEach(l=>{const c=tR(n,l,r);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,n.query_))})})}function tR(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function nR(n,e,t){if(e.childName==null||t.childName==null)throw ys("Should only compare child_ events.");const i=new de(e.childName,e.snapshotNode),s=new de(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n,e){return{eventCache:n,serverCache:e}}function hr(n,e,t,i){return A_(new Ru(e,t,i),n.serverCache)}function C_(n,e,t,i){return A_(n.eventCache,new Ru(e,t,i))}function vc(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ri(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;const iR=()=>(kl||(kl=new en(j0)),kl);class be{constructor(e,t=iR()){this.value=e,this.children=t}static fromObject(e){let t=new be(null);return Mt(e,(i,s)=>{t=t.set(new Ne(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ce(),value:this.value};if(ce(e))return null;{const i=he(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Pe(e),t);return r!=null?{path:ze(new Ne(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const t=he(e),i=this.children.get(t);return i!==null?i.subtree(Pe(e)):new be(null)}}set(e,t){if(ce(e))return new be(t,this.children);{const i=he(e),r=(this.children.get(i)||new be(null)).set(Pe(e),t),o=this.children.insert(i,r);return new be(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const t=he(e),i=this.children.get(t);if(i){const s=i.remove(Pe(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new be(null):new be(this.value,r)}else return this}}get(e){if(ce(e))return this.value;{const t=he(e),i=this.children.get(t);return i?i.get(Pe(e)):null}}setTree(e,t){if(ce(e))return t;{const i=he(e),r=(this.children.get(i)||new be(null)).setTree(Pe(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new be(this.value,o)}}fold(e){return this.fold_(Ce(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ze(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Ce(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(ce(e))return null;{const r=he(e),o=this.children.get(r);return o?o.findOnPath_(Pe(e),ze(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ce(),t)}foreachOnPath_(e,t,i){if(ce(e))return this;{this.value&&i(t,this.value);const s=he(e),r=this.children.get(s);return r?r.foreachOnPath_(Pe(e),ze(t,s),i):new be(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ze(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new be(null))}}function dr(n,e,t){if(ce(e))return new qt(new be(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Dt(s,e);return r=r.updateChild(o,t),new qt(n.writeTree_.set(s,r))}else{const s=new be(t),r=n.writeTree_.setTree(e,s);return new qt(r)}}}function jf(n,e,t){let i=n;return Mt(t,(s,r)=>{i=dr(i,ze(e,s),r)}),i}function qf(n,e){if(ce(e))return qt.empty();{const t=n.writeTree_.setTree(e,new be(null));return new qt(t)}}function Ec(n,e){return xi(n,e)!=null}function xi(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Dt(t.path,e)):null}function Hf(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(lt,(i,s)=>{e.push(new de(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new de(i,s.value))}),e}function Fn(n,e){if(ce(e))return n;{const t=xi(n,e);return t!=null?new qt(new be(t)):new qt(n.writeTree_.subtree(e))}}function Tc(n){return n.writeTree_.isEmpty()}function hs(n,e){return R_(Ce(),n.writeTree_,e)}function R_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(H(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=R_(ze(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ze(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n,e){return O_(e,n)}function sR(n,e,t,i,s){H(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=dr(n.visibleWrites,e,t)),n.lastWriteId=i}function rR(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function oR(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);H(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&aR(l,i.path)?s=!1:Bt(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return lR(n),!0;if(i.snap)n.visibleWrites=qf(n.visibleWrites,i.path);else{const l=i.children;Mt(l,c=>{n.visibleWrites=qf(n.visibleWrites,ze(i.path,c))})}return!0}else return!1}function aR(n,e){if(n.snap)return Bt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Bt(ze(n.path,t),e))return!0;return!1}function lR(n){n.visibleWrites=b_(n.allWrites,cR,Ce()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cR(n){return n.visible}function b_(n,e,t){let i=qt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)Bt(t,o)?(l=Dt(t,o),i=dr(i,l,r.snap)):Bt(o,t)&&(l=Dt(o,t),i=dr(i,Ce(),r.snap.getChild(l)));else if(r.children){if(Bt(t,o))l=Dt(t,o),i=jf(i,l,r.children);else if(Bt(o,t))if(l=Dt(o,t),ce(l))i=jf(i,Ce(),r.children);else{const c=cs(r.children,he(l));if(c){const u=c.getChild(Pe(l));i=dr(i,Ce(),u)}}}else throw ys("WriteRecord should have .snap or .children")}}return i}function P_(n,e,t,i,s){if(!i&&!s){const r=xi(n.visibleWrites,e);if(r!=null)return r;{const o=Fn(n.visibleWrites,e);if(Tc(o))return t;if(t==null&&!Ec(o,Ce()))return null;{const l=t||Ie.EMPTY_NODE;return hs(o,l)}}}else{const r=Fn(n.visibleWrites,e);if(!s&&Tc(r))return t;if(!s&&t==null&&!Ec(r,Ce()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(Bt(u.path,e)||Bt(e,u.path))},l=b_(n.allWrites,o,e),c=t||Ie.EMPTY_NODE;return hs(l,c)}}}function uR(n,e,t){let i=Ie.EMPTY_NODE;const s=xi(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(lt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Fn(n.visibleWrites,e);return t.forEachChild(lt,(o,l)=>{const c=hs(Fn(r,new Ne(o)),l);i=i.updateImmediateChild(o,c)}),Hf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Fn(n.visibleWrites,e);return Hf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function hR(n,e,t,i,s){H(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ze(e,t);if(Ec(n.visibleWrites,r))return null;{const o=Fn(n.visibleWrites,r);return Tc(o)?s.getChild(t):hs(o,s.getChild(t))}}function dR(n,e,t,i){const s=ze(e,t),r=xi(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Fn(n.visibleWrites,s);return hs(o,i.getNode().getImmediateChild(t))}else return null}function fR(n,e){return xi(n.visibleWrites,e)}function pR(n,e,t,i,s,r,o){let l;const c=Fn(n.visibleWrites,e),u=xi(c,Ce());if(u!=null)l=u;else if(t!=null)l=hs(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],p=o.getCompare(),m=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let T=m.getNext();for(;T&&d.length<s;)p(T,i)!==0&&d.push(T),T=m.getNext();return d}else return[]}function gR(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function Ic(n,e,t,i){return P_(n.writeTree,n.treePath,e,t,i)}function N_(n,e){return uR(n.writeTree,n.treePath,e)}function Wf(n,e,t,i){return hR(n.writeTree,n.treePath,e,t,i)}function ia(n,e){return fR(n.writeTree,ze(n.treePath,e))}function mR(n,e,t,i,s,r){return pR(n.writeTree,n.treePath,e,t,i,s,r)}function Su(n,e,t){return dR(n.writeTree,n.treePath,e,t)}function k_(n,e){return O_(ze(n.treePath,e),n.writeTree)}function O_(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;H(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),H(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Ff(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,zC(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,WC(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ff(i,e.snapshotNode,s.oldSnap));else throw ys("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const D_=new yR;class bu{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ru(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Su(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ri(this.viewCache_),r=mR(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}function vR(n,e){H(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ER(n,e,t,i,s){const r=new _R;let o,l;if(t.type===tn.OVERWRITE){const u=t;u.source.fromUser?o=wc(n,e,u.path,u.snap,i,s,r):(H(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!ce(u.path),o=sa(n,e,u.path,u.snap,i,s,l,r))}else if(t.type===tn.MERGE){const u=t;u.source.fromUser?o=IR(n,e,u.path,u.children,i,s,r):(H(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ac(n,e,u.path,u.children,i,s,l,r))}else if(t.type===tn.ACK_USER_WRITE){const u=t;u.revert?o=CR(n,e,u.path,i,s,r):o=wR(n,e,u.path,u.affectedTree,i,s,r)}else if(t.type===tn.LISTEN_COMPLETE)o=AR(n,e,t.path,i,r);else throw ys("Unknown operation type: "+t.type);const c=r.getChanges();return TR(e,o,c),{viewCache:o,changes:c}}function TR(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=vc(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(HC(vc(e)))}}function x_(n,e,t,i,s,r){const o=e.eventCache;if(ia(i,t)!=null)return e;{let l,c;if(ce(t))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ri(e),d=u instanceof Ie?u:Ie.EMPTY_NODE,p=N_(i,d);l=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const u=Ic(i,Ri(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=he(t);if(u===".priority"){H(qn(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const p=Wf(i,t,d,c);p!=null?l=n.filter.updatePriority(d,p):l=o.getNode()}else{const d=Pe(t);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=Wf(i,t,o.getNode(),c);m!=null?p=o.getNode().getImmediateChild(u).updateChild(d,m):p=o.getNode().getImmediateChild(u)}else p=Su(i,u,e.serverCache);p!=null?l=n.filter.updateChild(o.getNode(),u,p,d,s,r):l=o.getNode()}}return hr(e,l,o.isFullyInitialized()||ce(t),n.filter.filtersNodes())}}function sa(n,e,t,i,s,r,o,l){const c=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(ce(t))u=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const T=c.getNode().updateChild(t,i);u=d.updateFullNode(c.getNode(),T,null)}else{const T=he(t);if(!c.isCompleteForPath(t)&&qn(t)>1)return e;const b=Pe(t),O=c.getNode().getImmediateChild(T).updateChild(b,i);T===".priority"?u=d.updatePriority(c.getNode(),O):u=d.updateChild(c.getNode(),T,O,b,D_,null)}const p=C_(e,u,c.isFullyInitialized()||ce(t),d.filtersNodes()),m=new bu(s,p,r);return x_(n,p,t,s,m,l)}function wc(n,e,t,i,s,r,o){const l=e.eventCache;let c,u;const d=new bu(s,e,r);if(ce(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=hr(e,u,!0,n.filter.filtersNodes());else{const p=he(t);if(p===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),c=hr(e,u,l.isFullyInitialized(),l.isFiltered());else{const m=Pe(t),T=l.getNode().getImmediateChild(p);let b;if(ce(m))b=i;else{const k=d.getCompleteChild(p);k!=null?u_(m)===".priority"&&k.getChild(d_(m)).isEmpty()?b=k:b=k.updateChild(m,i):b=Ie.EMPTY_NODE}if(T.equals(b))c=e;else{const k=n.filter.updateChild(l.getNode(),p,b,m,d,o);c=hr(e,k,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function zf(n,e){return n.eventCache.isCompleteForChild(e)}function IR(n,e,t,i,s,r,o){let l=e;return i.foreach((c,u)=>{const d=ze(t,c);zf(e,he(d))&&(l=wc(n,l,d,u,s,r,o))}),i.foreach((c,u)=>{const d=ze(t,c);zf(e,he(d))||(l=wc(n,l,d,u,s,r,o))}),l}function Kf(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ac(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;ce(t)?u=i:u=new be(null).setTree(t,i);const d=e.serverCache.getNode();return u.children.inorderTraversal((p,m)=>{if(d.hasChild(p)){const T=e.serverCache.getNode().getImmediateChild(p),b=Kf(n,T,m);c=sa(n,c,new Ne(p),b,s,r,o,l)}}),u.children.inorderTraversal((p,m)=>{const T=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!d.hasChild(p)&&!T){const b=e.serverCache.getNode().getImmediateChild(p),k=Kf(n,b,m);c=sa(n,c,new Ne(p),k,s,r,o,l)}}),c}function wR(n,e,t,i,s,r,o){if(ia(s,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(ce(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return sa(n,e,t,c.getNode().getChild(t),s,r,l,o);if(ce(t)){let u=new be(null);return c.getNode().forEachChild(ss,(d,p)=>{u=u.set(new Ne(d),p)}),Ac(n,e,t,u,s,r,l,o)}else return e}else{let u=new be(null);return i.foreach((d,p)=>{const m=ze(t,d);c.isCompleteForPath(m)&&(u=u.set(d,c.getNode().getChild(m)))}),Ac(n,e,t,u,s,r,l,o)}}function AR(n,e,t,i,s){const r=e.serverCache,o=C_(e,r.getNode(),r.isFullyInitialized()||ce(t),r.isFiltered());return x_(n,o,t,i,D_,s)}function CR(n,e,t,i,s,r){let o;if(ia(i,t)!=null)return e;{const l=new bu(i,e,s),c=e.eventCache.getNode();let u;if(ce(t)||he(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ic(i,Ri(e));else{const p=e.serverCache.getNode();H(p instanceof Ie,"serverChildren would be complete if leaf node"),d=N_(i,p)}d=d,u=n.filter.updateFullNode(c,d,r)}else{const d=he(t);let p=Su(i,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=c.getImmediateChild(d)),p!=null?u=n.filter.updateChild(c,d,p,Pe(t),l,r):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(c,d,Ie.EMPTY_NODE,Pe(t),l,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ic(i,Ri(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||ia(i,Ce())!=null,hr(e,u,o,n.filter.filtersNodes())}}function RR(n,e){const t=Ri(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ce(e)&&!t.getImmediateChild(he(e)).isEmpty())?t.getChild(e):null}function Gf(n,e,t,i){e.type===tn.MERGE&&e.source.queryId!==null&&(H(Ri(n.viewCache_),"We should always have a full cache before handling merges"),H(vc(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=ER(n.processor_,s,e,t,i);return vR(n.processor_,r.viewCache),H(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,SR(n,r.changes,r.viewCache.eventCache.getNode())}function SR(n,e,t,i){const s=n.eventRegistrations_;return eR(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qf;function bR(n){H(!Qf,"__referenceConstructor has already been defined"),Qf=n}function Pu(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return H(r!=null,"SyncTree gave us an op for an invalid query."),Gf(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Gf(o,e,t,i));return r}}function Nu(n,e){let t=null;for(const i of n.views.values())t=t||RR(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yf;function PR(n){H(!Yf,"__referenceConstructor has already been defined"),Yf=n}class Xf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=gR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function NR(n,e,t,i,s){return sR(n.pendingWriteTree_,e,t,i,s),s?Oa(n,new Ci(T_(),e,t)):[]}function Qi(n,e,t=!1){const i=rR(n.pendingWriteTree_,e);if(oR(n.pendingWriteTree_,e)){let r=new be(null);return i.snap!=null?r=r.set(Ce(),!0):Mt(i.children,o=>{r=r.set(new Ne(o),!0)}),Oa(n,new na(i.path,r,t))}else return[]}function ka(n,e,t){return Oa(n,new Ci(I_(),e,t))}function kR(n,e,t){const i=be.fromObject(t);return Oa(n,new Sr(I_(),e,i))}function OR(n,e,t,i){const s=F_(n,i);if(s!=null){const r=U_(s),o=r.path,l=r.queryId,c=Dt(o,e),u=new Ci(w_(l),c,t);return B_(n,o,u)}else return[]}function DR(n,e,t,i){const s=F_(n,i);if(s){const r=U_(s),o=r.path,l=r.queryId,c=Dt(o,e),u=be.fromObject(t),d=new Sr(w_(l),c,u);return B_(n,o,d)}else return[]}function M_(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=Dt(o,e),u=Nu(l,c);if(u)return u});return P_(s,e,r,t,!0)}function Oa(n,e){return L_(e,n.syncPointTree_,null,S_(n.pendingWriteTree_,Ce()))}function L_(n,e,t,i){if(ce(n.path))return V_(n,e,t,i);{const s=e.get(Ce());t==null&&s!=null&&(t=Nu(s,Ce()));let r=[];const o=he(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const u=t?t.getImmediateChild(o):null,d=k_(i,o);r=r.concat(L_(l,c,u,d))}return s&&(r=r.concat(Pu(s,n,i,t))),r}}function V_(n,e,t,i){const s=e.get(Ce());t==null&&s!=null&&(t=Nu(s,Ce()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,u=k_(i,o),d=n.operationForChild(o);d&&(r=r.concat(V_(d,l,c,u)))}),s&&(r=r.concat(Pu(s,n,i,t))),r}function F_(n,e){return n.tagToQueryMap.get(e)}function U_(n){const e=n.indexOf("$");return H(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ne(n.substr(0,e))}}function B_(n,e,t){const i=n.syncPointTree_.get(e);H(i,"Missing sync point for query tag that we're tracking");const s=S_(n.pendingWriteTree_,e);return Pu(i,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ku(t)}node(){return this.node_}}class Ou{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ze(this.path_,e);return new Ou(this.syncTree_,t)}node(){return M_(this.syncTree_,this.path_)}}const xR=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Jf=function(n,e,t){if(!n||typeof n!="object")return n;if(H(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return MR(n[".sv"],e,t);if(typeof n[".sv"]=="object")return LR(n[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},MR=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:H(!1,"Unexpected server value: "+n)}},LR=function(n,e,t){n.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&H(!1,"Unexpected increment value: "+i);const s=e.node();if(H(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},VR=function(n,e,t,i){return Du(e,new Ou(t,n),i)},FR=function(n,e,t){return Du(n,new ku(e),t)};function Du(n,e,t){const i=n.getPriority().val(),s=Jf(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Jf(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new He(l,st(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new He(s))),o.forEachChild(lt,(l,c)=>{const u=Du(c,e.getImmediateChild(l),t);u!==c&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Mu(n,e){let t=e instanceof Ne?e:new Ne(e),i=n,s=he(t);for(;s!==null;){const r=cs(i.node.children,s)||{children:{},childCount:0};i=new xu(s,i,r),t=Pe(t),s=he(t)}return i}function Is(n){return n.node.value}function $_(n,e){n.node.value=e,Cc(n)}function j_(n){return n.node.childCount>0}function UR(n){return Is(n)===void 0&&!j_(n)}function Da(n,e){Mt(n.node.children,(t,i)=>{e(new xu(t,n,i))})}function q_(n,e,t,i){t&&!i&&e(n),Da(n,s=>{q_(s,e,!0,i)}),t&&i&&e(n)}function BR(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Br(n){return new Ne(n.parent===null?n.name:Br(n.parent)+"/"+n.name)}function Cc(n){n.parent!==null&&$R(n.parent,n.name,n)}function $R(n,e,t){const i=UR(t),s=En(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Cc(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Cc(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=/[\[\].#$\/\u0000-\u001F\u007F]/,qR=/[\[\].#$\u0000-\u001F\u007F]/,Ol=10*1024*1024,H_=function(n){return typeof n=="string"&&n.length!==0&&!jR.test(n)},HR=function(n){return typeof n=="string"&&n.length!==0&&!qR.test(n)},WR=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),HR(n)},W_=function(n,e,t){const i=t instanceof Ne?new AC(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+li(i));if(typeof e=="function")throw new Error(n+"contains a function "+li(i)+" with contents = "+e.toString());if(Hm(e))throw new Error(n+"contains "+e.toString()+" "+li(i));if(typeof e=="string"&&e.length>Ol/3&&ba(e)>Ol)throw new Error(n+"contains a string greater than "+Ol+" utf8 bytes "+li(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Mt(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!H_(o)))throw new Error(n+" contains an invalid key ("+o+") "+li(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);CC(i,o),W_(n,l,i),RC(i)}),s&&r)throw new Error(n+' contains ".value" child '+li(i)+" in addition to actual children.")}},zR=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!H_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!WR(t))throw new Error(YI(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function GR(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!f_(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Mi(n,e,t){GR(n,t),QR(n,i=>Bt(i,e)||Bt(e,i))}function QR(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(YR(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function YR(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();cr&&it("event: "+t.toString()),Fr(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="repo_interrupt",JR=25;class ZR{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ta(),this.transactionQueueTree_=new xu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eS(n,e,t){if(n.stats_=Tu(n.repoInfo_),n.forceRestClient_||G0())n.server_=new ea(n.repoInfo_,(i,s,r,o)=>{Zf(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ep(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ye(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new _n(n.repoInfo_,e,(i,s,r,o)=>{Zf(n,i,s,r,o)},i=>{ep(n,i)},i=>{nS(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=eC(n.repoInfo_,()=>new ZC(n.stats_,n.server_)),n.infoData_=new GC,n.infoSyncTree_=new Xf({startListening:(i,s,r,o)=>{let l=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(l=ka(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Lu(n,"connected",!1),n.serverSyncTree_=new Xf({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,c)=>{const u=o(l,c);Mi(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function tS(n){const t=n.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function z_(n){return xR({timestamp:tS(n)})}function Zf(n,e,t,i,s){n.dataUpdateCount++;const r=new Ne(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=Ho(t,u=>st(u));o=DR(n.serverSyncTree_,r,c,s)}else{const c=st(t);o=OR(n.serverSyncTree_,r,c,s)}else if(i){const c=Ho(t,u=>st(u));o=kR(n.serverSyncTree_,r,c)}else{const c=st(t);o=ka(n.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Fu(n,r)),Mi(n.eventQueue_,l,o)}function ep(n,e){Lu(n,"connected",e),e===!1&&sS(n)}function nS(n,e){Mt(e,(t,i)=>{Lu(n,t,i)})}function Lu(n,e,t){const i=new Ne("/.info/"+e),s=st(t);n.infoData_.updateSnapshot(i,s);const r=ka(n.infoSyncTree_,i,s);Mi(n.eventQueue_,i,r)}function iS(n){return n.nextWriteId_++}function sS(n){K_(n,"onDisconnectEvents");const e=z_(n),t=ta();yc(n.onDisconnect_,Ce(),(s,r)=>{const o=VR(s,r,n.serverSyncTree_,e);E_(t,s,o)});let i=[];yc(t,Ce(),(s,r)=>{i=i.concat(ka(n.serverSyncTree_,s,r));const o=lS(n,s);Fu(n,o)}),n.onDisconnect_=ta(),Mi(n.eventQueue_,Ce(),i)}function rS(n){n.persistentConnection_&&n.persistentConnection_.interrupt(XR)}function K_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),it(t,...e)}function G_(n,e,t){return M_(n.serverSyncTree_,e,t)||Ie.EMPTY_NODE}function Vu(n,e=n.transactionQueueTree_){if(e||xa(n,e),Is(e)){const t=Y_(n,e);H(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&oS(n,Br(e),t)}else j_(e)&&Da(e,t=>{Vu(n,t)})}function oS(n,e,t){const i=t.map(u=>u.currentWriteId),s=G_(n,e,i);let r=s;const o=s.hash();for(let u=0;u<t.length;u++){const d=t[u];H(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=Dt(e,d.path);r=r.updateChild(p,d.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;n.server_.put(c.toString(),l,u=>{K_(n,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,d=d.concat(Qi(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();xa(n,Mu(n.transactionQueueTree_,e)),Vu(n,n.transactionQueueTree_),Mi(n.eventQueue_,e,d);for(let m=0;m<p.length;m++)Fr(p[m])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{bt("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}Fu(n,e)}},o)}function Fu(n,e){const t=Q_(n,e),i=Br(t),s=Y_(n,t);return aS(n,s,i),i}function aS(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Dt(t,c.path);let d=!1,p;if(H(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,p=c.abortReason,s=s.concat(Qi(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=JR)d=!0,p="maxretry",s=s.concat(Qi(n.serverSyncTree_,c.currentWriteId,!0));else{const m=G_(n,c.path,o);c.currentInputSnapshot=m;const T=e[l].update(m.val());if(T!==void 0){W_("transaction failed: Data returned ",T,c.path);let b=st(T);typeof T=="object"&&T!=null&&En(T,".priority")||(b=b.updatePriority(m.getPriority()));const O=c.currentWriteId,z=z_(n),Q=FR(b,m,z);c.currentOutputSnapshotRaw=b,c.currentOutputSnapshotResolved=Q,c.currentWriteId=iS(n),o.splice(o.indexOf(O),1),s=s.concat(NR(n.serverSyncTree_,c.path,Q,c.currentWriteId,c.applyLocally)),s=s.concat(Qi(n.serverSyncTree_,O,!0))}else d=!0,p="nodata",s=s.concat(Qi(n.serverSyncTree_,c.currentWriteId,!0))}Mi(n.eventQueue_,t,s),s=[],d&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(p),!1,null))))}xa(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Fr(i[l]);Vu(n,n.transactionQueueTree_)}function Q_(n,e){let t,i=n.transactionQueueTree_;for(t=he(e);t!==null&&Is(i)===void 0;)i=Mu(i,t),e=Pe(e),t=he(e);return i}function Y_(n,e){const t=[];return X_(n,e,t),t.sort((i,s)=>i.order-s.order),t}function X_(n,e,t){const i=Is(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Da(e,s=>{X_(n,s,t)})}function xa(n,e){const t=Is(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,$_(e,t.length>0?t:void 0)}Da(e,i=>{xa(n,i)})}function lS(n,e){const t=Br(Q_(n,e)),i=Mu(n.transactionQueueTree_,e);return BR(i,s=>{Dl(n,s)}),Dl(n,i),q_(i,s=>{Dl(n,s)}),t}function Dl(n,e){const t=Is(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(H(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(H(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Qi(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$_(e,void 0):t.length=r+1,Mi(n.eventQueue_,Br(e),s);for(let o=0;o<i.length;o++)Fr(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function uS(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):bt(`Invalid query segment '${t}' in query '${n}'`)}return e}const tp=function(n,e){const t=hS(n),i=t.namespace;t.domain==="firebase.com"&&wi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&wi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||B0();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new X0(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new Ne(t.pathString)}},hS=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(d,p)),d<p&&(s=cS(n.substring(d,p)));const m=uS(n.substring(Math.min(n.length,p)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const T=e.slice(0,u);if(T.toLowerCase()==="localhost")t="localhost";else if(T.split(".").length<=2)t=T;else{const b=e.indexOf(".");i=e.substring(0,b).toLowerCase(),t=e.substring(b+1),r=i}"ns"in m&&(r=m.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return ce(this._path)?null:u_(this._path)}get ref(){return new ws(this._repo,this._path)}get _queryIdentifier(){const e=Bf(this._queryParams),t=vu(e);return t==="{}"?"default":t}get _queryObject(){return Bf(this._queryParams)}isEqual(e){if(e=an(e),!(e instanceof Uu))return!1;const t=this._repo===e._repo,i=f_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+wC(this._path)}}class ws extends Uu{constructor(e,t){super(e,t,new Cu,!1)}get parent(){const e=d_(this._path);return e===null?null:new ws(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}bR(ws);PR(ws);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="FIREBASE_DATABASE_EMULATOR_HOST",Rc={};let fS=!1;function pS(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||wi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=tp(r,s),l=o.repoInfo,c;typeof process<"u"&&Tf&&(c=Tf[dS]),c?(r=`http://${c}?ns=${l.namespace}`,o=tp(r,s),l=o.repoInfo):o.repoInfo.secure;const u=new Y0(n.name,n.options,e);zR("Invalid Firebase Database URL",o),ce(o.path)||wi("Database URL must point to the root of a Firebase Database (not including a child path).");const d=mS(l,n,u,new Q0(n.name,t));return new _S(d,n)}function gS(n,e){const t=Rc[e];(!t||t[n.key]!==n)&&wi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),rS(n),delete t[n.key]}function mS(n,e,t,i){let s=Rc[e.name];s||(s={},Rc[e.name]=s);let r=s[n.toURLString()];return r&&wi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ZR(n,fS,t,i),s[n.toURLString()]=r,r}class _S{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ws(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(n){x0(Es),Et(new _t("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pS(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Xe(If,wf,n),Xe(If,wf,"esm2017")}_n.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};_n.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};yS();var np=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,J_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function v(){}v.prototype=_.prototype,I.D=_.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(w,C,S){for(var E=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)E[Tt-2]=arguments[Tt];return _.prototype[C].apply(w,E)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,v){v||(v=0);var w=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)w[C]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(C=0;16>C;++C)w[C]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=I.g[0],v=I.g[1],C=I.g[2];var S=I.g[3],E=_+(S^v&(C^S))+w[0]+3614090360&4294967295;_=v+(E<<7&4294967295|E>>>25),E=S+(C^_&(v^C))+w[1]+3905402710&4294967295,S=_+(E<<12&4294967295|E>>>20),E=C+(v^S&(_^v))+w[2]+606105819&4294967295,C=S+(E<<17&4294967295|E>>>15),E=v+(_^C&(S^_))+w[3]+3250441966&4294967295,v=C+(E<<22&4294967295|E>>>10),E=_+(S^v&(C^S))+w[4]+4118548399&4294967295,_=v+(E<<7&4294967295|E>>>25),E=S+(C^_&(v^C))+w[5]+1200080426&4294967295,S=_+(E<<12&4294967295|E>>>20),E=C+(v^S&(_^v))+w[6]+2821735955&4294967295,C=S+(E<<17&4294967295|E>>>15),E=v+(_^C&(S^_))+w[7]+4249261313&4294967295,v=C+(E<<22&4294967295|E>>>10),E=_+(S^v&(C^S))+w[8]+1770035416&4294967295,_=v+(E<<7&4294967295|E>>>25),E=S+(C^_&(v^C))+w[9]+2336552879&4294967295,S=_+(E<<12&4294967295|E>>>20),E=C+(v^S&(_^v))+w[10]+4294925233&4294967295,C=S+(E<<17&4294967295|E>>>15),E=v+(_^C&(S^_))+w[11]+2304563134&4294967295,v=C+(E<<22&4294967295|E>>>10),E=_+(S^v&(C^S))+w[12]+1804603682&4294967295,_=v+(E<<7&4294967295|E>>>25),E=S+(C^_&(v^C))+w[13]+4254626195&4294967295,S=_+(E<<12&4294967295|E>>>20),E=C+(v^S&(_^v))+w[14]+2792965006&4294967295,C=S+(E<<17&4294967295|E>>>15),E=v+(_^C&(S^_))+w[15]+1236535329&4294967295,v=C+(E<<22&4294967295|E>>>10),E=_+(C^S&(v^C))+w[1]+4129170786&4294967295,_=v+(E<<5&4294967295|E>>>27),E=S+(v^C&(_^v))+w[6]+3225465664&4294967295,S=_+(E<<9&4294967295|E>>>23),E=C+(_^v&(S^_))+w[11]+643717713&4294967295,C=S+(E<<14&4294967295|E>>>18),E=v+(S^_&(C^S))+w[0]+3921069994&4294967295,v=C+(E<<20&4294967295|E>>>12),E=_+(C^S&(v^C))+w[5]+3593408605&4294967295,_=v+(E<<5&4294967295|E>>>27),E=S+(v^C&(_^v))+w[10]+38016083&4294967295,S=_+(E<<9&4294967295|E>>>23),E=C+(_^v&(S^_))+w[15]+3634488961&4294967295,C=S+(E<<14&4294967295|E>>>18),E=v+(S^_&(C^S))+w[4]+3889429448&4294967295,v=C+(E<<20&4294967295|E>>>12),E=_+(C^S&(v^C))+w[9]+568446438&4294967295,_=v+(E<<5&4294967295|E>>>27),E=S+(v^C&(_^v))+w[14]+3275163606&4294967295,S=_+(E<<9&4294967295|E>>>23),E=C+(_^v&(S^_))+w[3]+4107603335&4294967295,C=S+(E<<14&4294967295|E>>>18),E=v+(S^_&(C^S))+w[8]+1163531501&4294967295,v=C+(E<<20&4294967295|E>>>12),E=_+(C^S&(v^C))+w[13]+2850285829&4294967295,_=v+(E<<5&4294967295|E>>>27),E=S+(v^C&(_^v))+w[2]+4243563512&4294967295,S=_+(E<<9&4294967295|E>>>23),E=C+(_^v&(S^_))+w[7]+1735328473&4294967295,C=S+(E<<14&4294967295|E>>>18),E=v+(S^_&(C^S))+w[12]+2368359562&4294967295,v=C+(E<<20&4294967295|E>>>12),E=_+(v^C^S)+w[5]+4294588738&4294967295,_=v+(E<<4&4294967295|E>>>28),E=S+(_^v^C)+w[8]+2272392833&4294967295,S=_+(E<<11&4294967295|E>>>21),E=C+(S^_^v)+w[11]+1839030562&4294967295,C=S+(E<<16&4294967295|E>>>16),E=v+(C^S^_)+w[14]+4259657740&4294967295,v=C+(E<<23&4294967295|E>>>9),E=_+(v^C^S)+w[1]+2763975236&4294967295,_=v+(E<<4&4294967295|E>>>28),E=S+(_^v^C)+w[4]+1272893353&4294967295,S=_+(E<<11&4294967295|E>>>21),E=C+(S^_^v)+w[7]+4139469664&4294967295,C=S+(E<<16&4294967295|E>>>16),E=v+(C^S^_)+w[10]+3200236656&4294967295,v=C+(E<<23&4294967295|E>>>9),E=_+(v^C^S)+w[13]+681279174&4294967295,_=v+(E<<4&4294967295|E>>>28),E=S+(_^v^C)+w[0]+3936430074&4294967295,S=_+(E<<11&4294967295|E>>>21),E=C+(S^_^v)+w[3]+3572445317&4294967295,C=S+(E<<16&4294967295|E>>>16),E=v+(C^S^_)+w[6]+76029189&4294967295,v=C+(E<<23&4294967295|E>>>9),E=_+(v^C^S)+w[9]+3654602809&4294967295,_=v+(E<<4&4294967295|E>>>28),E=S+(_^v^C)+w[12]+3873151461&4294967295,S=_+(E<<11&4294967295|E>>>21),E=C+(S^_^v)+w[15]+530742520&4294967295,C=S+(E<<16&4294967295|E>>>16),E=v+(C^S^_)+w[2]+3299628645&4294967295,v=C+(E<<23&4294967295|E>>>9),E=_+(C^(v|~S))+w[0]+4096336452&4294967295,_=v+(E<<6&4294967295|E>>>26),E=S+(v^(_|~C))+w[7]+1126891415&4294967295,S=_+(E<<10&4294967295|E>>>22),E=C+(_^(S|~v))+w[14]+2878612391&4294967295,C=S+(E<<15&4294967295|E>>>17),E=v+(S^(C|~_))+w[5]+4237533241&4294967295,v=C+(E<<21&4294967295|E>>>11),E=_+(C^(v|~S))+w[12]+1700485571&4294967295,_=v+(E<<6&4294967295|E>>>26),E=S+(v^(_|~C))+w[3]+2399980690&4294967295,S=_+(E<<10&4294967295|E>>>22),E=C+(_^(S|~v))+w[10]+4293915773&4294967295,C=S+(E<<15&4294967295|E>>>17),E=v+(S^(C|~_))+w[1]+2240044497&4294967295,v=C+(E<<21&4294967295|E>>>11),E=_+(C^(v|~S))+w[8]+1873313359&4294967295,_=v+(E<<6&4294967295|E>>>26),E=S+(v^(_|~C))+w[15]+4264355552&4294967295,S=_+(E<<10&4294967295|E>>>22),E=C+(_^(S|~v))+w[6]+2734768916&4294967295,C=S+(E<<15&4294967295|E>>>17),E=v+(S^(C|~_))+w[13]+1309151649&4294967295,v=C+(E<<21&4294967295|E>>>11),E=_+(C^(v|~S))+w[4]+4149444226&4294967295,_=v+(E<<6&4294967295|E>>>26),E=S+(v^(_|~C))+w[11]+3174756917&4294967295,S=_+(E<<10&4294967295|E>>>22),E=C+(_^(S|~v))+w[2]+718787259&4294967295,C=S+(E<<15&4294967295|E>>>17),E=v+(S^(C|~_))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(C+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+S&4294967295}i.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var v=_-this.blockSize,w=this.B,C=this.h,S=0;S<_;){if(C==0)for(;S<=v;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<_;)if(w[C++]=I.charCodeAt(S++),C==this.blockSize){s(this,w),C=0;break}}else for(;S<_;)if(w[C++]=I[S++],C==this.blockSize){s(this,w),C=0;break}}this.h=C,this.o+=_},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var v=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=v&255,v/=256;for(this.u(I),I=Array(16),_=v=0;4>_;++_)for(var w=0;32>w;w+=8)I[v++]=this.g[_]>>>w&255;return I};function r(I,_){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=_(I)}function o(I,_){this.h=_;for(var v=[],w=!0,C=I.length-1;0<=C;C--){var S=I[C]|0;w&&S==_||(v[C]=S,w=!1)}this.g=v}var l={};function c(I){return-128<=I&&128>I?r(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(u(-I));for(var _=[],v=1,w=0;I>=v;w++)_[w]=I/v|0,v*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return O(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(_,8)),w=p,C=0;C<I.length;C+=8){var S=Math.min(8,I.length-C),E=parseInt(I.substring(C,C+S),_);8>S?(S=u(Math.pow(_,S)),w=w.j(S).add(u(E))):(w=w.j(v),w=w.add(u(E)))}return w}var p=c(0),m=c(1),T=c(16777216);n=o.prototype,n.m=function(){if(k(this))return-O(this).m();for(var I=0,_=1,v=0;v<this.g.length;v++){var w=this.i(v);I+=(0<=w?w:4294967296+w)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(k(this))return"-"+O(this).toString(I);for(var _=u(Math.pow(I,6)),v=this,w="";;){var C=W(v,_).g;v=z(v,C.j(_));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=C,b(v))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=z(this,I),k(I)?-1:b(I)?0:1};function O(I){for(var _=I.g.length,v=[],w=0;w<_;w++)v[w]=~I.g[w];return new o(v,~I.h).add(m)}n.abs=function(){return k(this)?O(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],w=0,C=0;C<=_;C++){var S=w+(this.i(C)&65535)+(I.i(C)&65535),E=(S>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);w=E>>>16,S&=65535,E&=65535,v[C]=E<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function z(I,_){return I.add(O(_))}n.j=function(I){if(b(this)||b(I))return p;if(k(this))return k(I)?O(this).j(O(I)):O(O(this).j(I));if(k(I))return O(this.j(O(I)));if(0>this.l(T)&&0>I.l(T))return u(this.m()*I.m());for(var _=this.g.length+I.g.length,v=[],w=0;w<2*_;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<I.g.length;C++){var S=this.i(w)>>>16,E=this.i(w)&65535,Tt=I.i(C)>>>16,Tn=I.i(C)&65535;v[2*w+2*C]+=E*Tn,Q(v,2*w+2*C),v[2*w+2*C+1]+=S*Tn,Q(v,2*w+2*C+1),v[2*w+2*C+1]+=E*Tt,Q(v,2*w+2*C+1),v[2*w+2*C+2]+=S*Tt,Q(v,2*w+2*C+2)}for(w=0;w<_;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=_;w<2*_;w++)v[w]=0;return new o(v,0)};function Q(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function F(I,_){this.g=I,this.h=_}function W(I,_){if(b(_))throw Error("division by zero");if(b(I))return new F(p,p);if(k(I))return _=W(O(I),_),new F(O(_.g),O(_.h));if(k(_))return _=W(I,O(_)),new F(O(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,w=_;0>=w.l(I);)v=ae(v),w=ae(w);var C=G(v,1),S=G(w,1);for(w=G(w,2),v=G(v,2);!b(w);){var E=S.add(w);0>=E.l(I)&&(C=C.add(v),S=E),w=G(w,1),v=G(v,1)}return _=z(I,C.j(_)),new F(C,_)}for(C=p;0<=I.l(_);){for(v=Math.max(1,Math.floor(I.m()/_.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=u(v),E=S.j(_);k(E)||0<E.l(I);)v-=w,S=u(v),E=S.j(_);b(S)&&(S=m),C=C.add(S),I=z(I,E)}return new F(C,I)}n.A=function(I){return W(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)&I.i(w);return new o(v,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)|I.i(w);return new o(v,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)^I.i(w);return new o(v,this.h^I.h)};function ae(I){for(var _=I.g.length+1,v=[],w=0;w<_;w++)v[w]=I.i(w)<<1|I.i(w-1)>>>31;return new o(v,I.h)}function G(I,_){var v=_>>5;_%=32;for(var w=I.g.length-v,C=[],S=0;S<w;S++)C[S]=0<_?I.i(S+v)>>>_|I.i(S+v+1)<<32-_:I.i(S+v);return new o(C,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,J_=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,yi=o}).apply(typeof np<"u"?np:typeof self<"u"?self:typeof window<"u"?window:{});var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Z_,ey,Js,ty,Mo,Sc,ny,iy,sy;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof To=="object"&&To];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=t(this);function s(a,h){if(h)e:{var f=i;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in f))break e;f=f[R]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function r(a,h){a instanceof String&&(a+="");var f=0,g=!1,R={next:function(){if(!g&&f<a.length){var P=f++;return{value:h(P,a[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return r(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),a.apply(h,R)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function T(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function b(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,R,P){for(var B=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)B[Re-2]=arguments[Re];return h.prototype[R].apply(g,B)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function O(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const R=a.length||0,P=g.length||0;a.length=R+P;for(let B=0;B<P;B++)a[R+B]=g[B]}else a.push(g)}}class z{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function Q(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var ae=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function G(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)a[f]=g[f];for(let P=0;P<v.length;P++)f=v[P],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function S(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Lt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Tt{constructor(){this.h=this.g=null}add(h,f){const g=Tn.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Tn=new z(()=>new Ke,a=>a.reset());class Ke{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,_e=!1,Lt=new Tt,Xn=()=>{const a=l.Promise.resolve(void 0);Ae=()=>{a.then(cn)}};var cn=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){S(f)}var h=Tn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}_e=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Ga=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Jn(a,h){if($e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ae){e:{try{W(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Zn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Jn.aa.h.call(this)}}b(Jn,$e);var Zn={2:"touch",3:"pen",4:"mouse"};Jn.prototype.h=function(){Jn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),Ss=0;function zr(a,h,f,g,R){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=R,this.key=++Ss,this.da=this.fa=!1}function Gt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ei(a){this.src=a,this.g={},this.h=0}ei.prototype.add=function(a,h,f,g,R){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var B=y(a,h,g,R);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new zr(h,this.src,P,!!g,R),h.fa=f,a.push(h)),h};function Li(a,h){var f=h.type;if(f in a.g){var g=a.g[f],R=Array.prototype.indexOf.call(g,h,void 0),P;(P=0<=R)&&Array.prototype.splice.call(g,R,1),P&&(Gt(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function y(a,h,f,g){for(var R=0;R<a.length;++R){var P=a[R];if(!P.da&&P.listener==h&&P.capture==!!f&&P.ha==g)return R}return-1}var A="closure_lm_"+(1e6*Math.random()|0),N={};function x(a,h,f,g,R){if(Array.isArray(h)){for(var P=0;P<h.length;P++)x(a,h[P],f,g,R);return null}return f=J(f),a&&a[un]?a.K(h,f,u(g)?!!g.capture:!!g,R):D(a,h,f,!1,g,R)}function D(a,h,f,g,R,P){if(!h)throw Error("Invalid event type");var B=u(R)?!!R.capture:!!R,Re=K(a);if(Re||(a[A]=Re=new ei(a)),f=Re.add(h,f,g,B,P),f.proxy)return f;if(g=V(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Ga||(R=B),R===void 0&&(R=!1),a.addEventListener(h.toString(),g,R);else if(a.attachEvent)a.attachEvent($(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function V(){function a(f){return h.call(a.src,a.listener,f)}const h=M;return a}function q(a,h,f,g,R){if(Array.isArray(h))for(var P=0;P<h.length;P++)q(a,h[P],f,g,R);else g=u(g)?!!g.capture:!!g,f=J(f),a&&a[un]?(a=a.i,h=String(h).toString(),h in a.g&&(P=a.g[h],f=y(P,f,g,R),-1<f&&(Gt(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete a.g[h],a.h--)))):a&&(a=K(a))&&(h=a.g[h.toString()],a=-1,h&&(a=y(h,f,g,R)),(f=-1<a?h[a]:null)&&U(f))}function U(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[un])Li(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent($(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=K(h))?(Li(f,a),f.h==0&&(f.src=null,h[A]=null)):Gt(a)}}}function $(a){return a in N?N[a]:N[a]="on"+a}function M(a,h){if(a.da)a=!0;else{h=new Jn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&U(a),a=f.call(g,h)}return a}function K(a){return a=a[A],a instanceof ei?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function J(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(h){return a.handleEvent(h)}),a[Z])}function X(){Be.call(this),this.i=new ei(this),this.M=this,this.F=null}b(X,Be),X.prototype[un]=!0,X.prototype.removeEventListener=function(a,h,f,g){q(this,a,h,f,g)};function te(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new $e(h,a);else if(h instanceof $e)h.target=h.target||a;else{var R=h;h=new $e(g,a),w(h,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var B=h.g=f[P];R=Ee(B,g,!0,h)&&R}if(B=h.g=a,R=Ee(B,g,!0,h)&&R,R=Ee(B,g,!1,h)&&R,f)for(P=0;P<f.length;P++)B=h.g=f[P],R=Ee(B,g,!1,h)&&R}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Gt(f[g]);delete a.g[h],a.h--}}this.F=null},X.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},X.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ee(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,P=0;P<h.length;++P){var B=h[P];if(B&&!B.da&&B.capture==f){var Re=B.listener,Ge=B.ha||B.src;B.fa&&Li(a.i,B),R=Re.call(Ge,g)!==!1&&R}}return R&&!g.defaultPrevented}function fe(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Me(a){a.g=fe(()=>{a.g=null,a.i&&(a.i=!1,Me(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class It extends Be{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Me(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(a){Be.call(this),this.h=a,this.g={}}b(Nt,Be);var bs=[];function In(a){G(a.g,function(h,f){this.g.hasOwnProperty(f)&&U(h)},a),a.g={}}Nt.prototype.N=function(){Nt.aa.N.call(this),In(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vi=l.JSON.stringify,ut=l.JSON.parse,kt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Fi(){}Fi.prototype.h=null;function vh(a){return a.h||(a.h=a.i())}function Eh(){}var Ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qa(){$e.call(this,"d")}b(Qa,$e);function Ya(){$e.call(this,"c")}b(Ya,$e);var ti={},Th=null;function Kr(){return Th=Th||new X}ti.La="serverreachability";function Ih(a){$e.call(this,ti.La,a)}b(Ih,$e);function Ns(a){const h=Kr();te(h,new Ih(h))}ti.STAT_EVENT="statevent";function wh(a,h){$e.call(this,ti.STAT_EVENT,a),this.stat=h}b(wh,$e);function ht(a){const h=Kr();te(h,new wh(h,a))}ti.Ma="timingevent";function Ah(a,h){$e.call(this,ti.Ma,a),this.size=h}b(Ah,$e);function ks(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Os(){this.g=!0}Os.prototype.xa=function(){this.g=!1};function Ov(a,h,f,g,R,P){a.info(function(){if(a.g)if(P)for(var B="",Re=P.split("&"),Ge=0;Ge<Re.length;Ge++){var ye=Re[Ge].split("=");if(1<ye.length){var Ze=ye[0];ye=ye[1];var et=Ze.split("_");B=2<=et.length&&et[1]=="type"?B+(Ze+"="+ye+"&"):B+(Ze+"=redacted&")}}else B=null;else B=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+h+`
`+f+`
`+B})}function Dv(a,h,f,g,R,P,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+h+`
`+f+`
`+P+" "+B})}function Ui(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Mv(a,f)+(g?" "+g:"")})}function xv(a,h){a.info(function(){return"TIMEOUT: "+h})}Os.prototype.info=function(){};function Mv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Vi(f)}catch{return h}}var Gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ch={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xa;function Qr(){}b(Qr,Fi),Qr.prototype.g=function(){return new XMLHttpRequest},Qr.prototype.i=function(){return{}},Xa=new Qr;function wn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rh}function Rh(){this.i=null,this.g="",this.h=!1}var Sh={},Ja={};function Za(a,h,f){a.L=1,a.v=Zr(hn(h)),a.m=f,a.P=!0,bh(a,null)}function bh(a,h){a.F=Date.now(),Yr(a),a.A=hn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),jh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Rh,a.g=od(a.j,f?h:null,!a.m),0<a.O&&(a.M=new It(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(bs[0]=R.toString()),R=bs);for(var P=0;P<R.length;P++){var B=x(f,R[P],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ns(),Ov(a.i,a.u,a.A,a.l,a.R,a.m)}wn.prototype.ca=function(a){a=a.target;const h=this.M;h&&dn(a)==3?h.j():this.Y(a)},wn.prototype.Y=function(a){try{if(a==this.g)e:{const et=dn(this.g);var h=this.g.Ba();const ji=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Qh(this.g)))){this.J||et!=4||h==7||(h==8||0>=ji?Ns(3):Ns(2)),el(this);var f=this.g.Z();this.X=f;t:if(Ph(this)){var g=Qh(this.g);a="";var R=g.length,P=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ni(this),Ds(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(P&&h==R-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,Dv(this.i,this.u,this.A,this.l,this.R,et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,Ge=this.g;if((Re=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Re)){var ye=Re;break t}}ye=null}if(f=ye)Ui(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tl(this,f);else{this.o=!1,this.s=3,ht(12),ni(this),Ds(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<B.length;)if(Vt=Lv(this,B),Vt==Ja){et==4&&(this.s=4,ht(14),f=!1),Ui(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Sh){this.s=4,ht(15),Ui(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Ui(this.i,this.l,Vt,null),tl(this,Vt);if(Ph(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||B.length!=0||this.h.h||(this.s=1,ht(16),f=!1),this.o=this.o&&f,!f)Ui(this.i,this.l,B,"[Invalid Chunked Response]"),ni(this),Ds(this);else if(0<B.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),al(Ze),Ze.M=!0,ht(11))}}else Ui(this.i,this.l,B,null),tl(this,B);et==4&&ni(this),this.o&&!this.J&&(et==4?nd(this.j,this):(this.o=!1,Yr(this)))}else Zv(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),ni(this),Ds(this)}}}catch{}finally{}};function Ph(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Lv(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Ja:(f=Number(h.substring(f,g)),isNaN(f)?Sh:(g+=1,g+f>h.length?Ja:(h=h.slice(g,g+f),a.C=g+f,h)))}wn.prototype.cancel=function(){this.J=!0,ni(this)};function Yr(a){a.S=Date.now()+a.I,Nh(a,a.I)}function Nh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ks(m(a.ba,a),h)}function el(a){a.B&&(l.clearTimeout(a.B),a.B=null)}wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(xv(this.i,this.A),this.L!=2&&(Ns(),ht(17)),ni(this),this.s=2,Ds(this)):Nh(this,this.S-a)};function Ds(a){a.j.G==0||a.J||nd(a.j,a)}function ni(a){el(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,In(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function tl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||nl(f.h,a))){if(!a.K&&nl(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)so(f),no(f);else break e;ol(f),ht(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=ks(m(f.Za,f),6e3));if(1>=Dh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else si(f,11)}else if((a.K||f.g==a)&&so(f),!Q(h))for(R=f.Da.g.parse(h),h=0;h<R.length;h++){let ye=R[h];if(f.T=ye[0],ye=ye[1],f.G==2)if(ye[0]=="c"){f.K=ye[1],f.ia=ye[2];const Ze=ye[3];Ze!=null&&(f.la=Ze,f.j.info("VER="+f.la));const et=ye[4];et!=null&&(f.Aa=et,f.j.info("SVER="+f.Aa));const ji=ye[5];ji!=null&&typeof ji=="number"&&0<ji&&(g=1.5*ji,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Vt=a.g;if(Vt){const oo=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oo){var P=g.h;P.g||oo.indexOf("spdy")==-1&&oo.indexOf("quic")==-1&&oo.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(il(P,P.h),P.h=null))}if(g.D){const ll=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;ll&&(g.ya=ll,Se(g.I,g.D,ll))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=a;if(g.qa=rd(g,g.J?g.ia:null,g.W),B.K){xh(g.h,B);var Re=B,Ge=g.L;Ge&&(Re.I=Ge),Re.B&&(el(Re),Yr(Re)),g.g=B}else ed(g);0<f.i.length&&io(f)}else ye[0]!="stop"&&ye[0]!="close"||si(f,7);else f.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?si(f,7):rl(f):ye[0]!="noop"&&f.l&&f.l.ta(ye),f.v=0)}}Ns(4)}catch{}}var Vv=class{constructor(a,h){this.g=a,this.map=h}};function kh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Dh(a){return a.h?1:a.g?a.g.size:0}function nl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function il(a,h){a.g?a.g.add(h):a.h=h}function xh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}kh.prototype.cancel=function(){if(this.i=Mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Mh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function Fv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Uv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Lh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Uv(a),g=Fv(a),R=g.length,P=0;P<R;P++)h.call(void 0,g[P],f&&f[P],a)}var Vh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),R=null;if(0<=g){var P=a[f].substring(0,g);R=a[f].substring(g+1)}else P=a[f];h(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ii(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ii){this.h=a.h,Xr(this,a.j),this.o=a.o,this.g=a.g,Jr(this,a.s),this.l=a.l;var h=a.i,f=new Ls;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Fh(this,f),this.m=a.m}else a&&(h=String(a).match(Vh))?(this.h=!1,Xr(this,h[1]||"",!0),this.o=xs(h[2]||""),this.g=xs(h[3]||"",!0),Jr(this,h[4]),this.l=xs(h[5]||"",!0),Fh(this,h[6]||"",!0),this.m=xs(h[7]||"")):(this.h=!1,this.i=new Ls(null,this.h))}ii.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ms(h,Uh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ms(h,Uh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ms(f,f.charAt(0)=="/"?qv:jv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ms(f,Wv)),a.join("")};function hn(a){return new ii(a)}function Xr(a,h,f){a.j=f?xs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Jr(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Fh(a,h,f){h instanceof Ls?(a.i=h,zv(a.i,a.h)):(f||(h=Ms(h,Hv)),a.i=new Ls(h,a.h))}function Se(a,h,f){a.i.set(h,f)}function Zr(a){return Se(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ms(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,$v),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $v(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Uh=/[#\/\?@]/g,jv=/[#\?:]/g,qv=/[#\?]/g,Hv=/[#\?@]/g,Wv=/#/g;function Ls(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function An(a){a.g||(a.g=new Map,a.h=0,a.i&&Bv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Ls.prototype,n.add=function(a,h){An(this),this.i=null,a=Bi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Bh(a,h){An(a),h=Bi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $h(a,h){return An(a),h=Bi(a,h),a.g.has(h)}n.forEach=function(a,h){An(this),this.g.forEach(function(f,g){f.forEach(function(R){a.call(h,R,g,this)},this)},this)},n.na=function(){An(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const R=a[g];for(let P=0;P<R.length;P++)f.push(h[g])}return f},n.V=function(a){An(this);let h=[];if(typeof a=="string")$h(this,a)&&(h=h.concat(this.g.get(Bi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return An(this),this.i=null,a=Bi(this,a),$h(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function jh(a,h,f){Bh(a,h),0<f.length&&(a.i=null,a.g.set(Bi(a,h),k(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const P=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var R=P;B[g]!==""&&(R+="="+encodeURIComponent(String(B[g]))),a.push(R)}}return this.i=a.join("&")};function Bi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function zv(a,h){h&&!a.j&&(An(a),a.i=null,a.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Bh(this,g),jh(this,R,f))},a)),a.j=h}function Kv(a,h){const f=new Os;if(l.Image){const g=new Image;g.onload=T(Cn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=T(Cn,f,"TestLoadImage: error",!1,h,g),g.onabort=T(Cn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=T(Cn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Gv(a,h){const f=new Os,g=new AbortController,R=setTimeout(()=>{g.abort(),Cn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?Cn(f,"TestPingServer: ok",!0,h):Cn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Cn(f,"TestPingServer: error",!1,h)})}function Cn(a,h,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function Qv(){this.g=new kt}function Yv(a,h,f){const g=f||"";try{Lh(a,function(R,P){let B=R;u(R)&&(B=Vi(R)),h.push(g+P+"="+encodeURIComponent(B))})}catch(R){throw h.push(g+"type="+encodeURIComponent("_badmap")),R}}function Vs(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Vs,Fi),Vs.prototype.g=function(){return new eo(this.l,this.j)},Vs.prototype.i=function(a){return function(){return a}}({});function eo(a,h){X.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(eo,X),n=eo.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Us(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function qh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Fs(this):Us(this),this.readyState==3&&qh(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Fs(this))},n.Qa=function(a){this.g&&(this.response=a,Fs(this))},n.ga=function(){this.g&&Fs(this)};function Fs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Us(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hh(a){let h="";return G(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function sl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Hh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Se(a,h,f))}function xe(a){X.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(xe,X);var Xv=/^https?$/i,Jv=["POST","PUT"];n=xe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xa.g(),this.v=this.o?vh(this.o):vh(Xa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(P){Wh(this,P);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Jv,h,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,B]of f)this.g.setRequestHeader(P,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gh(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Wh(this,P)}};function Wh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,zh(a),to(a)}function zh(a){a.A||(a.A=!0,te(a,"complete"),te(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,te(this,"complete"),te(this,"abort"),to(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),to(this,!0)),xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Kh(this):this.bb())},n.bb=function(){Kh(this)};function Kh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||dn(a)!=4||a.Z()!=2)){if(a.u&&dn(a)==4)fe(a.Ea,0,a);else if(te(a,"readystatechange"),dn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=B===0){var R=String(a.D).match(Vh)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!Xv.test(R?R.toLowerCase():"")}f=g}if(f)te(a,"complete"),te(a,"success");else{a.m=6;try{var P=2<dn(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",zh(a)}}finally{to(a)}}}}function to(a,h){if(a.g){Gh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||te(a,"ready");try{f.onreadystatechange=g}catch{}}}function Gh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function dn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ut(h)}};function Qh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Zv(a){const h={};a=(a.g&&2<=dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(Q(a[g]))continue;var f=C(a[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=h[R]||[];h[R]=P,P.push(f)}I(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Yh(a){this.Aa=0,this.i=[],this.j=new Os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bs("baseRetryDelayMs",5e3,a),this.cb=Bs("retryDelaySeedMs",1e4,a),this.Wa=Bs("forwardChannelMaxRetries",2,a),this.wa=Bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new kh(a&&a.concurrentRequestLimit),this.Da=new Qv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yh.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,g){ht(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=rd(this,null,this.W),io(this)};function rl(a){if(Xh(a),a.G==3){var h=a.U++,f=hn(a.I);if(Se(f,"SID",a.K),Se(f,"RID",h),Se(f,"TYPE","terminate"),$s(a,f),h=new wn(a,a.j,h),h.L=2,h.v=Zr(hn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=od(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Yr(h)}sd(a)}function no(a){a.g&&(al(a),a.g.cancel(),a.g=null)}function Xh(a){no(a),a.u&&(l.clearTimeout(a.u),a.u=null),so(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function io(a){if(!Oh(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ae||Xn(),_e||(Ae(),_e=!0),Lt.add(h,a),a.B=0}}function eE(a,h){return Dh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ks(m(a.Ga,a,h),id(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new wn(this,this.j,a);let P=this.o;if(this.S&&(P?(P=_(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Zh(this,R,h),f=hn(this.I),Se(f,"RID",a),Se(f,"CVER",22),this.D&&Se(f,"X-HTTP-Session-Id",this.D),$s(this,f),P&&(this.O?h="headers="+encodeURIComponent(String(Hh(P)))+"&"+h:this.m&&sl(f,this.m,P)),il(this.h,R),this.Ua&&Se(f,"TYPE","init"),this.P?(Se(f,"$req",h),Se(f,"SID","null"),R.T=!0,Za(R,f,null)):Za(R,f,h),this.G=2}}else this.G==3&&(a?Jh(this,a):this.i.length==0||Oh(this.h)||Jh(this))};function Jh(a,h){var f;h?f=h.l:f=a.U++;const g=hn(a.I);Se(g,"SID",a.K),Se(g,"RID",f),Se(g,"AID",a.T),$s(a,g),a.m&&a.o&&sl(g,a.m,a.o),f=new wn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Zh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),il(a.h,f),Za(f,g,h)}function $s(a,h){a.H&&G(a.H,function(f,g){Se(h,g,f)}),a.l&&Lh({},function(f,g){Se(h,g,f)})}function Zh(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var R=a.i;let P=-1;for(;;){const B=["count="+f];P==-1?0<f?(P=R[0].g,B.push("ofs="+P)):P=0:B.push("ofs="+P);let Re=!0;for(let Ge=0;Ge<f;Ge++){let ye=R[Ge].g;const Ze=R[Ge].map;if(ye-=P,0>ye)P=Math.max(0,R[Ge].g-100),Re=!1;else try{Yv(Ze,B,"req"+ye+"_")}catch{g&&g(Ze)}}if(Re){g=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function ed(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ae||Xn(),_e||(Ae(),_e=!0),Lt.add(h,a),a.v=0}}function ol(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ks(m(a.Fa,a),id(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,td(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ks(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),no(this),td(this))};function al(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function td(a){a.g=new wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=hn(a.qa);Se(h,"RID","rpc"),Se(h,"SID",a.K),Se(h,"AID",a.T),Se(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Se(h,"TO",a.ja),Se(h,"TYPE","xmlhttp"),$s(a,h),a.m&&a.o&&sl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Zr(hn(h)),f.m=null,f.P=!0,bh(f,a)}n.Za=function(){this.C!=null&&(this.C=null,no(this),ol(this),ht(19))};function so(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function nd(a,h){var f=null;if(a.g==h){so(a),al(a),a.g=null;var g=2}else if(nl(a.h,h))f=h.D,xh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var R=a.B;g=Kr(),te(g,new Ah(g,f)),io(a)}else ed(a);else if(R=h.s,R==3||R==0&&0<h.X||!(g==1&&eE(a,h)||g==2&&ol(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),R){case 1:si(a,5);break;case 4:si(a,10);break;case 3:si(a,6);break;default:si(a,2)}}}function id(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function si(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const R=!g;g=new ii(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Xr(g,"https"),Zr(g),R?Kv(g.toString(),f):Gv(g.toString(),f)}else ht(2);a.G=0,a.l&&a.l.sa(h),sd(a),Xh(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function sd(a){if(a.G=0,a.ka=[],a.l){const h=Mh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function rd(a,h,f){var g=f instanceof ii?hn(f):new ii(f);if(g.g!="")h&&(g.g=h+"."+g.g),Jr(g,g.s);else{var R=l.location;g=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var P=new ii(null);g&&Xr(P,g),h&&(P.g=h),R&&Jr(P,R),f&&(P.l=f),g=P}return f=a.D,h=a.ya,f&&h&&Se(g,f,h),Se(g,"VER",a.la),$s(a,g),g}function od(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new xe(new Vs({eb:f})):new xe(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ad(){}n=ad.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ro(){}ro.prototype.g=function(a,h){return new wt(a,h)};function wt(a,h){X.call(this),this.g=new Yh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!Q(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!Q(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new $i(this)}b(wt,X),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){rl(this.g)},wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Vi(a),a=f);h.i.push(new Vv(h.Ya++,a)),h.G==3&&io(h)},wt.prototype.N=function(){this.g.l=null,delete this.j,rl(this.g),delete this.g,wt.aa.N.call(this)};function ld(a){Qa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}b(ld,Qa);function cd(){Ya.call(this),this.status=1}b(cd,Ya);function $i(a){this.g=a}b($i,ad),$i.prototype.ua=function(){te(this.g,"a")},$i.prototype.ta=function(a){te(this.g,new ld(a))},$i.prototype.sa=function(a){te(this.g,new cd)},$i.prototype.ra=function(){te(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,sy=function(){return new ro},iy=function(){return Kr()},ny=ti,Sc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gr.NO_ERROR=0,Gr.TIMEOUT=8,Gr.HTTP_ERROR=6,Mo=Gr,Ch.COMPLETE="complete",ty=Ch,Eh.EventType=Ps,Ps.OPEN="a",Ps.CLOSE="b",Ps.ERROR="c",Ps.MESSAGE="d",X.prototype.listen=X.prototype.K,Js=Eh,ey=Vs,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,Z_=xe}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});const ip="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new vs("@firebase/firestore");function Ks(){return Si.logLevel}function Y(n,...e){if(Si.logLevel<=le.DEBUG){const t=e.map(Bu);Si.debug(`Firestore (${As}): ${n}`,...t)}}function yn(n,...e){if(Si.logLevel<=le.ERROR){const t=e.map(Bu);Si.error(`Firestore (${As}): ${n}`,...t)}}function ds(n,...e){if(Si.logLevel<=le.WARN){const t=e.map(Bu);Si.warn(`Firestore (${As}): ${n}`,...t)}}function Bu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+n;throw yn(e),new Error(e)}function Ue(n,e){n||oe()}function me(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Kt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nt.UNAUTHENTICATED))}shutdown(){}}class ES{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class TS{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let r=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Un)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string"),new ry(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new nt(e)}}class IS{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wS{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new IS(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=r=>{r.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new AS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=RS(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function Te(n,e){return n<e?-1:n>e?1:0}function fs(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ee(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new pt(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new pt(0,0))}static max(){return new se(new pt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,i){t===void 0?t=0:t>e.length&&oe(),i===void 0?i=e.length-t:i>e.length-t&&oe(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return br.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof br?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Oe extends br{construct(e,t,i){return new Oe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ee(j.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new Oe(t)}static emptyPath(){return new Oe([])}}const SS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends br{construct(e,t,i){return new ft(e,t,i)}static isValidIdentifier(e){return SS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new ee(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(i+=l,s++):(r(),s++)}if(r(),o)throw new ee(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(t)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Oe.fromString(e))}static fromName(e){return new ne(Oe.fromString(e).popFirst(5))}static empty(){return new ne(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Oe(e.slice()))}}function bS(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(i===1e9?new pt(t+1,0):new pt(t,i));return new Hn(s,ne.empty(),e)}function PS(n){return new Hn(n.readTime,n.key,-1)}class Hn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Hn(se.min(),ne.empty(),-1)}static max(){return new Hn(se.max(),ne.empty(),-1)}}function NS(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:Te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(n){if(n.code!==j.FAILED_PRECONDITION||n.message!==kS)throw n;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,i)=>{t(e)})}static reject(e){return new L((t,i)=>{i(e)})}static waitFor(e){return new L((t,i)=>{let s=0,r=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++r,o&&r===s&&t()},c=>i(c))}),o=!0,r===s&&t()})}static or(e){let t=L.resolve(!1);for(const i of e)t=t.next(s=>s?L.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new L((i,s)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++l,l===r&&i(o)},d=>s(d))}})}static doWhile(e,t){return new L((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function DS(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $r(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ju.oe=-1;function Ma(n){return n==null}function bc(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function La(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){this.comparator=e,this.root=t||Qe.EMPTY}insert(e,t){return new Le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Qe.RED,this.left=s??Qe.EMPTY,this.right=r??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Qe(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,t,i,s,r){return this}insert(e,t,i){return new Qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rp(this.data.getIterator())}getIteratorFrom(e){return new rp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class rp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new On([])}unionWith(e){let t=new Je(ft.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new ay("Invalid base64 string: "+r):r}}(e);return new ct(t)}static fromUint8Array(e){const t=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const MS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(n){if(Ue(!!n),typeof n=="string"){let e=0;const t=MS.exec(n);if(Ue(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Fe(n.seconds),nanos:Fe(n.nanos)}}function Fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bi(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Hu(n){const e=n.mapValue.fields.__previous_value__;return qu(e)?Hu(e):e}function Pr(n){const e=Wn(n.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,t,i,s,r,o,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Nr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qu(n)?4:VS(n)?9007199254740991:10:oe()}function sn(n,e){if(n===e)return!0;const t=Pi(n);if(t!==Pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pr(n).isEqual(Pr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Wn(s.timestampValue),l=Wn(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return bi(s.bytesValue).isEqual(bi(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return Fe(s.geoPointValue.latitude)===Fe(r.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Fe(s.integerValue)===Fe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Fe(s.doubleValue),l=Fe(r.doubleValue);return o===l?bc(o)===bc(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return fs(n.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(s,r){const o=s.mapValue.fields||{},l=r.mapValue.fields||{};if(sp(o)!==sp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!sn(o[c],l[c])))return!1;return!0}(n,e);default:return oe()}}function kr(n,e){return(n.values||[]).find(t=>sn(t,e))!==void 0}function ps(n,e){if(n===e)return 0;const t=Pi(n),i=Pi(e);if(t!==i)return Te(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Te(n.booleanValue,e.booleanValue);case 2:return function(r,o){const l=Fe(r.integerValue||r.doubleValue),c=Fe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return op(n.timestampValue,e.timestampValue);case 4:return op(Pr(n),Pr(e));case 5:return Te(n.stringValue,e.stringValue);case 6:return function(r,o){const l=bi(r),c=bi(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Te(l[u],c[u]);if(d!==0)return d}return Te(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const l=Te(Fe(r.latitude),Fe(o.latitude));return l!==0?l:Te(Fe(r.longitude),Fe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,o){const l=r.values||[],c=o.values||[];for(let u=0;u<l.length&&u<c.length;++u){const d=ps(l[u],c[u]);if(d)return d}return Te(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===wo.mapValue&&o===wo.mapValue)return 0;if(r===wo.mapValue)return 1;if(o===wo.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Te(c[p],d[p]);if(m!==0)return m;const T=ps(l[c[p]],u[d[p]]);if(T!==0)return T}return Te(c.length,d.length)}(n.mapValue,e.mapValue);default:throw oe()}}function op(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Te(n,e);const t=Wn(n),i=Wn(e),s=Te(t.seconds,i.seconds);return s!==0?s:Te(t.nanos,i.nanos)}function gs(n){return Pc(n)}function Pc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Wn(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return bi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Pc(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Pc(t.fields[o])}`;return s+"}"}(n.mapValue):oe()}function Nc(n){return!!n&&"integerValue"in n}function Wu(n){return!!n&&"arrayValue"in n}function ap(n){return!!n&&"nullValue"in n}function lp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xl(n){return!!n&&"mapValue"in n}function fr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return La(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=fr(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function VS(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!xl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fr(t)}setAll(e){let t=ft.emptyPath(),i={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,i,s),i={},s=[],t=l.popLast()}o?i[l.lastSegment()]=fr(o):s.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());xl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];xl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){La(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Jt(fr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,i,s,r,o,l){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,se.min(),se.min(),se.min(),Jt.empty(),0)}static newFoundDocument(e,t,i,s){return new rt(e,1,t,se.min(),i,s,0)}static newNoDocument(e,t){return new rt(e,2,t,se.min(),se.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new rt(e,3,t,se.min(),se.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.position=e,this.inclusive=t}}function cp(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=ne.comparator(ne.fromName(o.referenceValue),t.key):i=ps(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function up(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!sn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t="asc"){this.field=e,this.dir=t}}function FS(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{}class je extends ly{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new BS(e,t,i):t==="array-contains"?new qS(e,i):t==="in"?new HS(e,i):t==="not-in"?new WS(e,i):t==="array-contains-any"?new zS(e,i):new je(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new $S(e,i):new jS(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ps(t,this.value)):t!==null&&Pi(this.value)===Pi(t)&&this.matchesComparison(ps(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends ly{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new rn(e,t)}matches(e){return cy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function cy(n){return n.op==="and"}function uy(n){return US(n)&&cy(n)}function US(n){for(const e of n.filters)if(e instanceof rn)return!1;return!0}function kc(n){if(n instanceof je)return n.field.canonicalString()+n.op.toString()+gs(n.value);if(uy(n))return n.filters.map(e=>kc(e)).join(",");{const e=n.filters.map(t=>kc(t)).join(",");return`${n.op}(${e})`}}function hy(n,e){return n instanceof je?function(i,s){return s instanceof je&&i.op===s.op&&i.field.isEqual(s.field)&&sn(i.value,s.value)}(n,e):n instanceof rn?function(i,s){return s instanceof rn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,l)=>r&&hy(o,s.filters[l]),!0):!1}(n,e):void oe()}function dy(n){return n instanceof je?function(t){return`${t.field.canonicalString()} ${t.op} ${gs(t.value)}`}(n):n instanceof rn?function(t){return t.op.toString()+" {"+t.getFilters().map(dy).join(" ,")+"}"}(n):"Filter"}class BS extends je{constructor(e,t,i){super(e,t,i),this.key=ne.fromName(i.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class $S extends je{constructor(e,t){super(e,"in",t),this.keys=fy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jS extends je{constructor(e,t){super(e,"not-in",t),this.keys=fy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fy(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ne.fromName(i.referenceValue))}class qS extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wu(t)&&kr(t.arrayValue,this.value)}}class HS extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&kr(this.value.arrayValue,t)}}class WS extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!kr(this.value.arrayValue,t)}}class zS extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>kr(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,t=null,i=[],s=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=l,this.ue=null}}function hp(n,e=null,t=[],i=[],s=null,r=null,o=null){return new KS(n,e,t,i,s,r,o)}function zu(n){const e=me(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>kc(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Ma(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>gs(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>gs(i)).join(",")),e.ue=t}return e.ue}function Ku(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!FS(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hy(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!up(n.startAt,e.startAt)&&up(n.endAt,e.endAt)}function Oc(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t=null,i=[],s=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function GS(n,e,t,i,s,r,o,l){return new Va(n,e,t,i,s,r,o,l)}function Fa(n){return new Va(n)}function dp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function QS(n){return n.collectionGroup!==null}function pr(n){const e=me(n);if(e.ce===null){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(ft.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new oa(r,i))}),t.has(ft.keyField().canonicalString())||e.ce.push(new oa(ft.keyField(),i))}return e.ce}function nn(n){const e=me(n);return e.le||(e.le=YS(e,pr(n))),e.le}function YS(n,e){if(n.limitType==="F")return hp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new oa(s.field,r)});const t=n.endAt?new ra(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ra(n.startAt.position,n.startAt.inclusive):null;return hp(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Dc(n,e,t){return new Va(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ua(n,e){return Ku(nn(n),nn(e))&&n.limitType===e.limitType}function py(n){return`${zu(nn(n))}|lt:${n.limitType}`}function Wi(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>dy(s)).join(", ")}]`),Ma(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>gs(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>gs(s)).join(",")),`Target(${i})`}(nn(n))}; limitType=${n.limitType})`}function Ba(n,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):ne.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,e)&&function(i,s){for(const r of pr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(o,l,c){const u=cp(o,l,c);return o.inclusive?u<=0:u<0}(i.startAt,pr(i),s)||i.endAt&&!function(o,l,c){const u=cp(o,l,c);return o.inclusive?u>=0:u>0}(i.endAt,pr(i),s))}(n,e)}function XS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gy(n){return(e,t)=>{let i=!1;for(const s of pr(n)){const r=JS(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function JS(n,e,t){const i=n.field.isKeyField()?ne.comparator(e.key,t.key):function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?ps(c,u):oe()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){La(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return xS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=new Le(ne.comparator);function zn(){return ZS}const my=new Le(ne.comparator);function Zs(...n){let e=my;for(const t of n)e=e.insert(t.key,t);return e}function eb(n){let e=my;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function di(){return gr()}function _y(){return gr()}function gr(){return new Cs(n=>n.toString(),(n,e)=>n.isEqual(e))}const tb=new Je(ne.comparator);function ge(...n){let e=tb;for(const t of n)e=e.add(t);return e}const nb=new Je(Te);function ib(){return nb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function rb(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this._=void 0}}function ob(n,e,t){return n instanceof xc?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&qu(r)&&(r=Hu(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof aa?yy(n,e):n instanceof la?vy(n,e):function(s,r){const o=lb(s,r),l=fp(o)+fp(s.Pe);return Nc(o)&&Nc(s.Pe)?rb(l):sb(s.serializer,l)}(n,e)}function ab(n,e,t){return n instanceof aa?yy(n,e):n instanceof la?vy(n,e):t}function lb(n,e){return n instanceof Mc?function(i){return Nc(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class xc extends $a{}class aa extends $a{constructor(e){super(),this.elements=e}}function yy(n,e){const t=Ey(e);for(const i of n.elements)t.some(s=>sn(s,i))||t.push(i);return{arrayValue:{values:t}}}class la extends $a{constructor(e){super(),this.elements=e}}function vy(n,e){let t=Ey(e);for(const i of n.elements)t=t.filter(s=>!sn(s,i));return{arrayValue:{values:t}}}class Mc extends $a{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function fp(n){return Fe(n.integerValue||n.doubleValue)}function Ey(n){return Wu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function cb(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof aa&&s instanceof aa||i instanceof la&&s instanceof la?fs(i.elements,s.elements,sn):i instanceof Mc&&s instanceof Mc?sn(i.Pe,s.Pe):i instanceof xc&&s instanceof xc}(n.transform,e.transform)}class vi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vi}static exists(e){return new vi(void 0,e)}static updateTime(e){return new vi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gu{}function Ty(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new hb(n.key,vi.none()):new Qu(n.key,n.data,vi.none());{const t=n.data,i=Jt.empty();let s=new Je(ft.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new ja(n.key,i,new On(s.toArray()),vi.none())}}function ub(n,e,t){n instanceof Qu?function(s,r,o){const l=s.value.clone(),c=gp(s.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof ja?function(s,r,o){if(!Lo(s.precondition,r))return void r.convertToUnknownDocument(o.version);const l=gp(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(Iy(s)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function mr(n,e,t,i){return n instanceof Qu?function(r,o,l,c){if(!Lo(r.precondition,o))return l;const u=r.value.clone(),d=mp(r.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,i):n instanceof ja?function(r,o,l,c){if(!Lo(r.precondition,o))return l;const u=mp(r.fieldTransforms,c,o),d=o.data;return d.setAll(Iy(r)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(n,e,t,i):function(r,o,l){return Lo(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function pp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&fs(i,s,(r,o)=>cb(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qu extends Gu{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ja extends Gu{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Iy(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function gp(n,e,t){const i=new Map;Ue(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,l=e.data.field(r.field);i.set(r.field,ab(o,l,t[s]))}return i}function mp(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,ob(r,o,e))}return i}class hb extends Gu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&ub(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=mr(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=mr(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=_y();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=t.has(s.key)?null:l;const c=Ty(o,l);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ge())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(t,i)=>pp(t,i))&&fs(this.baseMutations,e.baseMutations,(t,i)=>pp(t,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ue;function wy(n){if(n===void 0)return yn("GRPC error has no .code"),j.UNKNOWN;switch(n){case Ve.OK:return j.OK;case Ve.CANCELLED:return j.CANCELLED;case Ve.UNKNOWN:return j.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return j.INTERNAL;case Ve.UNAVAILABLE:return j.UNAVAILABLE;case Ve.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ve.NOT_FOUND:return j.NOT_FOUND;case Ve.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ve.ABORTED:return j.ABORTED;case Ve.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ve.DATA_LOSS:return j.DATA_LOSS;default:return oe()}}(ue=Ve||(Ve={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=new yi([4294967295,4294967295],0);function _p(n){const e=gb().encode(n),t=new J_;return t.update(e),new Uint8Array(t.digest())}function yp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new yi([t,i],0),new yi([s,r],0)]}class Yu{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new er(`Invalid padding: ${t}`);if(i<0)throw new er(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new er(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new er(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=yi.fromNumber(this.Ie)}Ee(e,t,i){let s=e.add(t.multiply(yi.fromNumber(i)));return s.compare(mb)===1&&(s=new yi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=_p(e),[i,s]=yp(t);for(let r=0;r<this.hashCount;r++){const o=this.Ee(i,s,r);if(!this.de(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Yu(r,s,t);return i.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=_p(e),[i,s]=yp(t);for(let r=0;r<this.hashCount;r++){const o=this.Ee(i,s,r);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class er extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,jr.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new qa(se.min(),s,new Le(Te),zn(),ge())}}class jr{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new jr(i,t,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,i,s){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=s}}class Ay{constructor(e,t){this.targetId=e,this.me=t}}class Cy{constructor(e,t,i=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class vp{constructor(){this.fe=0,this.ge=Tp(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),t=ge(),i=ge();return this.ge.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:oe()}}),new jr(this.pe,this.ye,e,t,i)}ve(){this.we=!1,this.ge=Tp()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _b{constructor(e){this.Le=e,this.Be=new Map,this.ke=zn(),this.qe=Ep(),this.Qe=new Le(Te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.ve(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,i=e.me.count,s=this.Je(t);if(s){const r=s.target;if(Oc(r))if(i===0){const o=new ne(r.path);this.Ue(t,o,rt.newNoDocument(o,se.min()))}else Ue(i===1);else{const o=this.Ye(t);if(o!==i){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,l;try{o=bi(i).toUint8Array()}catch(c){if(c instanceof ay)return ds("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Yu(o,s,r)}catch(c){return ds(c instanceof er?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let s=0;return i.forEach(r=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,r,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((r,o)=>{const l=this.Je(o);if(l){if(r.current&&Oc(l.target)){const c=new ne(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,rt.newNoDocument(c,e))}r.be&&(t.set(o,r.Ce()),r.ve())}});let i=ge();this.qe.forEach((r,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const s=new qa(e,t,this.Qe,this.ke,i);return this.ke=zn(),this.qe=Ep(),this.Qe=new Le(Te),s}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new vp,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Je(Te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||Y("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vp),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ep(){return new Le(ne.comparator)}function Tp(){return new Le(ne.comparator)}const yb={asc:"ASCENDING",desc:"DESCENDING"},vb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Eb={and:"AND",or:"OR"};class Tb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lc(n,e){return n.useProto3Json||Ma(e)?e:{value:e}}function Ib(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rs(n){return Ue(!!n),se.fromTimestamp(function(t){const i=Wn(t);return new pt(i.seconds,i.nanos)}(n))}function Ab(n,e){return Vc(n,e).canonicalString()}function Vc(n,e){const t=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ry(n){const e=Oe.fromString(n);return Ue(ky(e)),e}function Ml(n,e){const t=Ry(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(by(t))}function Sy(n,e){return Ab(n.databaseId,e)}function Cb(n){const e=Ry(n);return e.length===4?Oe.emptyPath():by(e)}function Ip(n){return new Oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function by(n){return Ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rb(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(u,d){return u.useProto3Json?(Ue(d===void 0||typeof d=="string"),ct.fromBase64String(d||"")):(Ue(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ct.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?j.UNKNOWN:wy(u.code);return new ee(d,u.message||"")}(o);t=new Cy(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ml(n,i.document.name),r=rs(i.document.updateTime),o=i.document.createTime?rs(i.document.createTime):se.min(),l=new Jt({mapValue:{fields:i.document.fields}}),c=rt.newFoundDocument(s,r,o,l),u=i.targetIds||[],d=i.removedTargetIds||[];t=new Vo(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ml(n,i.document),r=i.readTime?rs(i.readTime):se.min(),o=rt.newNoDocument(s,r),l=i.removedTargetIds||[];t=new Vo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ml(n,i.document),r=i.removedTargetIds||[];t=new Vo([],r,s,null)}else{if(!("filter"in e))return oe();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new pb(s,r),l=i.targetId;t=new Ay(l,o)}}return t}function Sb(n,e){return{documents:[Sy(n,e.path)]}}function bb(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Sy(n,s);const r=function(u){if(u.length!==0)return Ny(rn.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:zi(m.field),direction:kb(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Lc(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:s}}function Pb(n){let e=Cb(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){Ue(i===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let r=[];t.where&&(r=function(p){const m=Py(p);return m instanceof rn&&uy(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(b){return new oa(Ki(b.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ma(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,T=p.values||[];return new ra(T,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,T=p.values||[];return new ra(T,m)}(t.endAt)),GS(e,s,o,r,l,"F",c,u)}function Nb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Py(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ki(t.unaryFilter.field);return je.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Ki(t.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ki(t.unaryFilter.field);return je.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ki(t.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(n):n.fieldFilter!==void 0?function(t){return je.create(Ki(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return rn.create(t.compositeFilter.filters.map(i=>Py(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe()}}(t.compositeFilter.op))}(n):oe()}function kb(n){return yb[n]}function Ob(n){return vb[n]}function Db(n){return Eb[n]}function zi(n){return{fieldPath:n.canonicalString()}}function Ki(n){return ft.fromServerFormat(n.fieldPath)}function Ny(n){return n instanceof je?function(t){if(t.op==="=="){if(lp(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NAN"}};if(ap(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lp(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NOT_NAN"}};if(ap(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zi(t.field),op:Ob(t.op),value:t.value}}}(n):n instanceof rn?function(t){const i=t.getFilters().map(s=>Ny(s));return i.length===1?i[0]:{compositeFilter:{op:Db(t.op),filters:i}}}(n):oe()}function ky(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,i,s,r=se.min(),o=se.min(),l=ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.ct=e}}function Mb(n){const e=Pb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Dc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this._n=new Vb}addToCollectionParentIndex(e,t){return this._n.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Hn.min())}updateCollectionGroup(e,t,i){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class Vb{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Je(Oe.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Je(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ms(0)}static Ln(){return new ms(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.changes=new Cs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?L.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&mr(i.mutation,s,On.empty(),pt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,ge()).next(()=>i))}getLocalViewOfDocuments(e,t,i=ge()){const s=di();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=Zs();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=di();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,ge()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,i,s){let r=zn();const o=gr(),l=function(){return gr()}();return t.forEach((c,u)=>{const d=i.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof ja)?r=r.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),mr(d.mutation,u,d.mutation.getFieldMask(),pt.now())):o.set(u.key,On.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var p;return l.set(u,new Ub(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const i=gr();let s=new Le((o,l)=>o-l),r=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=i.get(c)||On.empty();d=l.applyToLocalView(u,d),i.set(c,d);const p=(s.get(l.batchId)||ge()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=_y();d.forEach(m=>{if(!r.has(m)){const T=Ty(t.get(m),i.get(m));T!==null&&p.set(m,T),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):QS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):L.resolve(di());let l=-1,c=r;return o.next(u=>L.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,ge())).next(d=>({batchId:l,changes:eb(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next(i=>{let s=Zs();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=Zs();return this.indexManager.getCollectionParents(e,r).next(l=>L.forEach(l,c=>{const u=function(p,m){return new Va(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s))).next(o=>{r.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,rt.newInvalidDocument(d)))});let l=Zs();return o.forEach((c,u)=>{const d=r.get(c);d!==void 0&&mr(d.mutation,u,On.empty(),pt.now()),Ba(t,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return L.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:rs(s.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:Mb(s.bundledQuery),readTime:rs(s.readTime)}}(t)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.overlays=new Le(ne.comparator),this.hr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const i=di();return L.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.ht(e,t,r)}),L.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(i)),L.resolve()}getOverlaysForCollection(e,t,i){const s=di(),r=t.length+1,o=new ne(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Le((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>i){let d=r.get(u.largestBatchId);d===null&&(d=di(),r=r.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=di(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return L.resolve(l)}ht(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new fb(t,i));let r=this.hr.get(t);r===void 0&&(r=ge(),this.hr.set(t,r)),this.hr.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.Pr=new Je(We.Ir),this.Tr=new Je(We.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const i=new We(e,t);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Ar(new We(e,t))}Rr(e,t){e.forEach(i=>this.removeReference(i,t))}Vr(e){const t=new ne(new Oe([])),i=new We(t,e),s=new We(t,e+1),r=[];return this.Tr.forEachInRange([i,s],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new ne(new Oe([])),i=new We(t,e),s=new We(t,e+1);let r=ge();return this.Tr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new We(e,0),i=this.Pr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class We{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return ne.comparator(e.key,t.key)||Te(e.pr,t.pr)}static Er(e,t){return Te(e.pr,t.pr)||ne.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Je(We.Ir)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new db(r,t,i,s);this.mutationQueue.push(o);for(const l of s)this.wr=this.wr.add(new We(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.br(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new We(t,0),s=new We(t,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([i,s],o=>{const l=this.Sr(o.pr);r.push(l)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Je(Te);return t.forEach(s=>{const r=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],l=>{i=i.add(l.pr)})}),L.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;ne.isDocumentKey(r)||(r=r.child(""));const o=new We(new ne(r),0);let l=new Je(Te);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.pr)),!0)},o),L.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(i=>{const s=this.Sr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ue(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return L.forEach(t.mutations,s=>{const r=new We(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=i})}Mn(e){}containsKey(e,t){const i=new We(t,0),s=this.wr.firstAfterOrEqual(i);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.vr=e,this.docs=function(){return new Le(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.vr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return L.resolve(i?i.document.mutableCopy():rt.newInvalidDocument(t))}getEntries(e,t){let i=zn();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():rt.newInvalidDocument(s))}),L.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=zn();const o=t.path,l=new ne(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||NS(PS(d),i)<=0||(s.has(d.key)||Ba(t,d))&&(r=r.insert(d.key,d.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,t,i,s){oe()}Fr(e,t){return L.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Wb(this)}getSize(e){return L.resolve(this.size)}}class Wb extends Fb{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(i)}),L.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.persistence=e,this.Mr=new Cs(t=>zu(t),Ku),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Xu,this.targetCount=0,this.Lr=ms.Nn()}forEachTarget(e,t){return this.Mr.forEach((i,s)=>t(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Or&&(this.Or=t),L.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new ms(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.qn(t),L.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=t&&i.get(l.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(r).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const i=this.Mr.get(t)||null;return L.resolve(i)}addMatchingKeys(e,t,i){return this.Nr.dr(t,i),L.resolve()}removeMatchingKeys(e,t,i){this.Nr.Rr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Nr.gr(t);return L.resolve(i)}containsKey(e,t){return L.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,t){this.Br={},this.overlays={},this.kr=new ju(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new zb(this),this.indexManager=new Lb,this.remoteDocumentCache=function(s){return new Hb(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new xb(t),this.$r=new $b(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Br[e.toKey()];return i||(i=new qb(t,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,i){Y("MemoryPersistence","Starting transaction:",e);const s=new Gb(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(r=>this.referenceDelegate.Wr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gr(e,t){return L.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,t)))}}class Gb extends OS{constructor(e){super(),this.currentSequenceNumber=e}}class Ju{constructor(e){this.persistence=e,this.zr=new Xu,this.jr=null}static Hr(e){return new Ju(e)}get Jr(){if(this.jr)return this.jr;throw oe()}addReference(e,t,i){return this.zr.addReference(i,t),this.Jr.delete(i.toString()),L.resolve()}removeReference(e,t,i){return this.zr.removeReference(i,t),this.Jr.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),L.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Jr.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Jr,i=>{const s=ne.fromPath(i);return this.Yr(e,s).next(r=>{r||t.removeEntry(s,se.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(i=>{i?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return L.or([()=>L.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.qi=i,this.Qi=s}static Ki(e,t){let i=ge(),s=ge();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Zu(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return UI()?8:DS(Wt())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.ji(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Hi(e,t,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new Qb;return this.Ji(e,t,o).next(l=>{if(r.result=l,this.Ui)return this.Yi(e,t,o,l.size)})}).next(()=>r.result)}Yi(e,t,i,s){return i.documentReadCount<this.Wi?(Ks()<=le.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Wi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),L.resolve()):(Ks()<=le.DEBUG&&Y("QueryEngine","Query:",Wi(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(Ks()<=le.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Wi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(t))):L.resolve())}ji(e,t){if(dp(t))return L.resolve(null);let i=nn(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Dc(t,null,"F"),i=nn(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=ge(...r);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.Zi(t,l);return this.Xi(t,u,o,c.readTime)?this.ji(e,Dc(t,null,"F")):this.es(e,u,t,c)}))})))}Hi(e,t,i,s){return dp(t)||s.isEqual(se.min())?L.resolve(null):this.zi.getDocuments(e,i).next(r=>{const o=this.Zi(t,r);return this.Xi(t,o,i,s)?L.resolve(null):(Ks()<=le.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wi(t)),this.es(e,o,t,bS(s,-1)).next(l=>l))})}Zi(e,t){let i=new Je(gy(e));return t.forEach((s,r)=>{Ba(e,r)&&(i=i.add(r))}),i}Xi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ji(e,t,i){return Ks()<=le.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Wi(t)),this.zi.getDocumentsMatchingQuery(e,t,Hn.min(),i)}es(e,t,i,s){return this.zi.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,t,i,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new Le(Te),this.rs=new Cs(r=>zu(r),Ku),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(i)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bb(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function Jb(n,e,t,i){return new Xb(n,e,t,i)}async function Oy(n,e){const t=me(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t._s(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],l=[];let c=ge();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of r){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(i,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:l}))})})}function Dy(n){const e=me(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function Zb(n,e){const t=me(n),i=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(t.Qr.removeMatchingKeys(r,d.removedDocuments,p).next(()=>t.Qr.addMatchingKeys(r,d.addedDocuments,p)));let T=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(ct.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,i)),s=s.insert(p,T),function(k,O,z){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(m,T,d)&&l.push(t.Qr.updateTargetData(r,T))});let c=zn(),u=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,d))}),l.push(eP(r,o,e.documentUpdates).next(d=>{c=d.cs,u=d.ls})),!i.isEqual(se.min())){const d=t.Qr.getLastRemoteSnapshotVersion(r).next(p=>t.Qr.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(d)}return L.waitFor(l).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.ns=s,r))}function eP(n,e,t){let i=ge(),s=ge();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=zn();return t.forEach((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Y("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:s}})}function tP(n,e){const t=me(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Qr.getTargetData(i,e).next(r=>r?(s=r,L.resolve(s)):t.Qr.allocateTargetId(i).next(o=>(s=new Dn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.ns.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(i.targetId,i),t.rs.set(e,i.targetId)),i})}async function Fc(n,e,t){const i=me(n),s=i.ns.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$r(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ns=i.ns.remove(e),i.rs.delete(s.target)}function wp(n,e,t){const i=me(n);let s=se.min(),r=ge();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=me(c),m=p.rs.get(d);return m!==void 0?L.resolve(p.ns.get(m)):p.Qr.getTargetData(u,d)}(i,o,nn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{r=c})}).next(()=>i.ts.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?r:ge())).next(l=>(nP(i,XS(e),l),{documents:l,hs:r})))}function nP(n,e,t){let i=n.ss.get(e)||se.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.ss.set(e,i)}class Ap{constructor(){this.activeTargetIds=ib()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iP{constructor(){this.no=new Ap,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,i){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Ap,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao=null;function Ll(){return Ao===null?Ao=function(){return 268435456+Math.round(2147483648*Math.random())}():Ao++,"0x"+Ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class aP extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+t.host,this.So=`projects/${s}/databases/${r}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get Do(){return!1}Co(t,i,s,r,o){const l=Ll(),c=this.vo(t,i.toUriEncodedString());Y("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,r,o),this.Mo(t,c,u,s).then(d=>(Y("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw ds("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}xo(t,i,s,r,o,l){return this.Co(t,i,s,r,o)}Fo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>t[o]=r),s&&s.headers.forEach((r,o)=>t[o]=r)}vo(t,i){const s=rP[t];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,i,s){const r=Ll();return new Promise((o,l)=>{const c=new Z_;c.setWithCredentials(!0),c.listenOnce(ty.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Mo.NO_ERROR:const d=c.getResponseJson();Y(tt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(d)),o(d);break;case Mo.TIMEOUT:Y(tt,`RPC '${e}' ${r} timed out`),l(new ee(j.DEADLINE_EXCEEDED,"Request time out"));break;case Mo.HTTP_ERROR:const p=c.getStatus();if(Y(tt,`RPC '${e}' ${r} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const b=function(O){const z=O.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(z)>=0?z:j.UNKNOWN}(T.status);l(new ee(b,T.message))}else l(new ee(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ee(j.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{Y(tt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(s);Y(tt,`RPC '${e}' ${r} sending request:`,s),c.send(t,"POST",u,i,15)})}Oo(e,t,i){const s=Ll(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sy(),l=iy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new ey({})),this.Fo(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const d=r.join("");Y(tt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,T=!1;const b=new oP({lo:O=>{T?Y(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(Y(tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(tt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},ho:()=>p.close()}),k=(O,z,Q)=>{O.listen(z,F=>{try{Q(F)}catch(W){setTimeout(()=>{throw W},0)}})};return k(p,Js.EventType.OPEN,()=>{T||(Y(tt,`RPC '${e}' stream ${s} transport opened.`),b.mo())}),k(p,Js.EventType.CLOSE,()=>{T||(T=!0,Y(tt,`RPC '${e}' stream ${s} transport closed`),b.po())}),k(p,Js.EventType.ERROR,O=>{T||(T=!0,ds(tt,`RPC '${e}' stream ${s} transport errored:`,O),b.po(new ee(j.UNAVAILABLE,"The operation could not be completed")))}),k(p,Js.EventType.MESSAGE,O=>{var z;if(!T){const Q=O.data[0];Ue(!!Q);const F=Q,W=F.error||((z=F[0])===null||z===void 0?void 0:z.error);if(W){Y(tt,`RPC '${e}' stream ${s} received error:`,W);const ae=W.status;let G=function(v){const w=Ve[v];if(w!==void 0)return wy(w)}(ae),I=W.message;G===void 0&&(G=j.INTERNAL,I="Unknown error status: "+ae+" with message "+W.message),T=!0,b.po(new ee(G,I)),p.close()}else Y(tt,`RPC '${e}' stream ${s} received:`,Q),b.yo(Q)}}),k(l,ny.STAT_EVENT,O=>{O.stat===Sc.PROXY?Y(tt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Sc.NOPROXY&&Y(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.fo()},0),b}}function Vl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){return new Tb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t,i=1e3,s=1.5,r=6e4){this.oi=e,this.timerId=t,this.No=i,this.Lo=s,this.Bo=r,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-i);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t,i,s,r,o,l,c){this.oi=e,this.Go=i,this.zo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new My(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===j.RESOURCE_EXHAUSTED?(yn(t.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===t&&this.u_(i,s)},i=>{e(()=>{const s=new ee(j.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(e,t){const i=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cP extends lP{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=Rb(this.serializer,e),i=function(r){if(!("targetChange"in r))return se.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?rs(o.readTime):se.min()}(e);return this.listener.h_(t,i)}P_(e){const t={};t.database=Ip(this.serializer),t.addTarget=function(r,o){let l;const c=o.target;if(l=Oc(c)?{documents:Sb(r,c)}:{query:bb(r,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=wb(r,o.resumeToken);const u=Lc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=Ib(r,o.snapshotVersion.toTimestamp());const u=Lc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const i=Nb(this.serializer,e);i&&(t.labels=i),this.i_(t)}I_(e){const t={};t.database=Ip(this.serializer),t.removeTarget=e,this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new ee(j.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,Vc(t,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ee(j.UNKNOWN,r.toString())})}xo(e,t,i,s,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,Vc(t,i),s,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(j.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class hP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(yn(t),this.y_=!1):Y("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.io(o=>{i.enqueueAndForget(async()=>{Hr(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=me(c);u.M_.add(4),await qr(u),u.N_.set("Unknown"),u.M_.delete(4),await Ha(u)}(this))})}),this.N_=new hP(i,s)}}async function Ha(n){if(Hr(n))for(const e of n.x_)await e(!0)}async function qr(n){for(const e of n.x_)await e(!1)}function Ly(n,e){const t=me(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),ih(t)?nh(t):Rs(t).Xo()&&th(t,e))}function eh(n,e){const t=me(n),i=Rs(t);t.F_.delete(e),i.Xo()&&Vy(t,e),t.F_.size===0&&(i.Xo()?i.n_():Hr(t)&&t.N_.set("Unknown"))}function th(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Rs(n).P_(e)}function Vy(n,e){n.L_.xe(e),Rs(n).I_(e)}function nh(n){n.L_=new _b({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Rs(n).start(),n.N_.w_()}function ih(n){return Hr(n)&&!Rs(n).Zo()&&n.F_.size>0}function Hr(n){return me(n).M_.size===0}function Fy(n){n.L_=void 0}async function fP(n){n.N_.set("Online")}async function pP(n){n.F_.forEach((e,t)=>{th(n,e)})}async function gP(n,e){Fy(n),ih(n)?(n.N_.D_(e),nh(n)):n.N_.set("Unknown")}async function mP(n,e,t){if(n.N_.set("Online"),e instanceof Cy&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const l of r.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.F_.delete(l),s.L_.removeTarget(l))}(n,e)}catch(i){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Rp(n,i)}else if(e instanceof Vo?n.L_.Ke(e):e instanceof Ay?n.L_.He(e):n.L_.We(e),!t.isEqual(se.min()))try{const i=await Dy(n.localStore);t.compareTo(i)>=0&&await function(r,o){const l=r.L_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.F_.get(u);d&&r.F_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=r.F_.get(c);if(!d)return;r.F_.set(c,d.withResumeToken(ct.EMPTY_BYTE_STRING,d.snapshotVersion)),Vy(r,c);const p=new Dn(d.target,c,u,d.sequenceNumber);th(r,p)}),r.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(i){Y("RemoteStore","Failed to raise snapshot:",i),await Rp(n,i)}}async function Rp(n,e,t){if(!$r(e))throw e;n.M_.add(1),await qr(n),n.N_.set("Offline"),t||(t=()=>Dy(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Ha(n)})}async function Sp(n,e){const t=me(n);t.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const i=Hr(t);t.M_.add(3),await qr(t),i&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Ha(t)}async function _P(n,e){const t=me(n);e?(t.M_.delete(2),await Ha(t)):e||(t.M_.add(2),await qr(t),t.N_.set("Unknown"))}function Rs(n){return n.B_||(n.B_=function(t,i,s){const r=me(t);return r.f_(),new cP(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:fP.bind(null,n),To:pP.bind(null,n),Ao:gP.bind(null,n),h_:mP.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),ih(n)?nh(n):n.N_.set("Unknown")):(await n.B_.stop(),Fy(n))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,l=new sh(e,t,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uy(n,e){if(yn("AsyncQueue",`${e}: ${n}`),$r(n))return new ee(j.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.comparator=e?(t,i)=>e(t,i)||ne.comparator(t.key,i.key):(t,i)=>ne.comparator(t.key,i.key),this.keyedMap=Zs(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new os;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.q_=new Le(ne.comparator)}track(e){const t=e.doc.key,i=this.q_.get(t);i?e.type!==0&&i.type===3?this.q_=this.q_.insert(t,e):e.type===3&&i.type!==1?this.q_=this.q_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.q_=this.q_.remove(t):e.type===1&&i.type===2?this.q_=this.q_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):oe():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,i)=>{e.push(i)}),e}}class _s{constructor(e,t,i,s,r,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new _s(e,t,os.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class vP{constructor(){this.queries=new Cs(e=>py(e),Ua),this.onlineState="Unknown",this.z_=new Set}}async function rh(n,e){const t=me(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.W_()&&e.G_()&&(i=2):(r=new yP,i=e.G_()?0:1);try{switch(i){case 0:r.K_=await t.onListen(s,!0);break;case 1:r.K_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=Uy(o,`Initialization of query '${Wi(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,r),r.U_.push(e),e.j_(t.onlineState),r.K_&&e.H_(r.K_)&&ah(t)}async function oh(n,e){const t=me(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.U_.indexOf(e);o>=0&&(r.U_.splice(o,1),r.U_.length===0?s=e.G_()?0:1:!r.W_()&&e.G_()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function EP(n,e){const t=me(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const l of o.U_)l.H_(s)&&(i=!0);o.K_=s}}i&&ah(t)}function TP(n,e,t){const i=me(n),s=i.queries.get(e);if(s)for(const r of s.U_)r.onError(t);i.queries.delete(e)}function ah(n){n.z_.forEach(e=>{e.next()})}var Uc,Pp;(Pp=Uc||(Uc={})).J_="default",Pp.Cache="cache";class lh{constructor(e,t,i){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=i||{}}H_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new _s(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const i=t!=="Offline";return(!this.options.ra||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Uc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.key=e}}class $y{constructor(e){this.key=e}}class IP{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=gy(e),this.Ta=new os(this.Ia)}get Ea(){return this.la}da(e,t){const i=t?t.Aa:new bp,s=t?t.Ta:this.Ta;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),T=Ba(this.query,p)?p:null,b=!!m&&this.mutatedKeys.has(m.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let O=!1;m&&T?m.data.isEqual(T.data)?b!==k&&(i.track({type:3,doc:T}),O=!0):this.Ra(m,T)||(i.track({type:2,doc:T}),O=!0,(c&&this.Ia(T,c)>0||u&&this.Ia(T,u)<0)&&(l=!0)):!m&&T?(i.track({type:0,doc:T}),O=!0):m&&!T&&(i.track({type:1,doc:m}),O=!0,(c||u)&&(l=!0)),O&&(T?(o=o.add(T),r=k?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{Ta:o,Aa:i,Xi:l,mutatedKeys:r}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(T,b){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return k(T)-k(b)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(i),s=s!=null&&s;const l=t&&!s?this.ma():[],c=this.Pa.size===0&&this.current&&!s?1:0,u=c!==this.ha;return this.ha=c,o.length!==0||u?{snapshot:new _s(this.query,e.Ta,r,o,e.mutatedKeys,c===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new bp,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(i=>{this.ga(i.key)&&(this.Pa=this.Pa.add(i.key))});const t=[];return e.forEach(i=>{this.Pa.has(i)||t.push(new $y(i))}),this.Pa.forEach(i=>{e.has(i)||t.push(new By(i))}),t}pa(e){this.la=e.hs,this.Pa=ge();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return _s.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class wP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class AP{constructor(e){this.key=e,this.wa=!1}}class CP{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Cs(l=>py(l),Ua),this.Da=new Map,this.Ca=new Set,this.va=new Le(ne.comparator),this.Fa=new Map,this.Ma=new Xu,this.xa={},this.Oa=new Map,this.Na=ms.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function RP(n,e,t=!0){const i=zy(n);let s;const r=i.ba.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.ya()):s=await jy(i,e,t,!0),s}async function SP(n,e){const t=zy(n);await jy(t,e,!0,!1)}async function jy(n,e,t,i){const s=await tP(n.localStore,nn(e)),r=s.targetId,o=t?n.sharedClientState.addLocalQueryTarget(r):"not-current";let l;return i&&(l=await bP(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ly(n.remoteStore,s),l}async function bP(n,e,t,i,s){n.Ba=(p,m,T)=>async function(k,O,z,Q){let F=O.view.da(z);F.Xi&&(F=await wp(k.localStore,O.query,!1).then(({documents:I})=>O.view.da(I,F)));const W=Q&&Q.targetChanges.get(O.targetId),ae=Q&&Q.targetMismatches.get(O.targetId)!=null,G=O.view.applyChanges(F,k.isPrimaryClient,W,ae);return kp(k,O.targetId,G.fa),G.snapshot}(n,p,m,T);const r=await wp(n.localStore,e,!0),o=new IP(e,r.hs),l=o.da(r.documents),c=jr.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),u=o.applyChanges(l,n.isPrimaryClient,c);kp(n,t,u.fa);const d=new wP(e,t,o);return n.ba.set(e,d),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),u.snapshot}async function PP(n,e,t){const i=me(n),s=i.ba.get(e),r=i.Da.get(s.targetId);if(r.length>1)return i.Da.set(s.targetId,r.filter(o=>!Ua(o,e))),void i.ba.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Fc(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&eh(i.remoteStore,s.targetId),Bc(i,s.targetId)}).catch($u)):(Bc(i,s.targetId),await Fc(i.localStore,s.targetId,!0))}async function NP(n,e){const t=me(n),i=t.ba.get(e),s=t.Da.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),eh(t.remoteStore,i.targetId))}async function qy(n,e){const t=me(n);try{const i=await Zb(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.Fa.get(r);o&&(Ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?Ue(o.wa):s.removedDocuments.size>0&&(Ue(o.wa),o.wa=!1))}),await Wy(t,i,e)}catch(i){await $u(i)}}function Np(n,e,t){const i=me(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.ba.forEach((r,o)=>{const l=o.view.j_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=me(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.U_)m.j_(l)&&(u=!0)}),u&&ah(c)}(i.eventManager,e),s.length&&i.Sa.h_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function kP(n,e,t){const i=me(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Fa.get(e),r=s&&s.key;if(r){let o=new Le(ne.comparator);o=o.insert(r,rt.newNoDocument(r,se.min()));const l=ge().add(r),c=new qa(se.min(),new Map,new Le(Te),o,l);await qy(i,c),i.va=i.va.remove(r),i.Fa.delete(e),ch(i)}else await Fc(i.localStore,e,!1).then(()=>Bc(i,e,t)).catch($u)}function Bc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Da.get(e))n.ba.delete(i),t&&n.Sa.ka(i,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(i=>{n.Ma.containsKey(i)||Hy(n,i)})}function Hy(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(eh(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),ch(n))}function kp(n,e,t){for(const i of t)i instanceof By?(n.Ma.addReference(i.key,e),OP(n,i)):i instanceof $y?(Y("SyncEngine","Document no longer in limbo: "+i.key),n.Ma.removeReference(i.key,e),n.Ma.containsKey(i.key)||Hy(n,i.key)):oe()}function OP(n,e){const t=e.key,i=t.path.canonicalString();n.va.get(t)||n.Ca.has(i)||(Y("SyncEngine","New document in limbo: "+t),n.Ca.add(i),ch(n))}function ch(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new ne(Oe.fromString(e)),i=n.Na.next();n.Fa.set(i,new AP(t)),n.va=n.va.insert(t,i),Ly(n.remoteStore,new Dn(nn(Fa(t.path)),i,"TargetPurposeLimboResolution",ju.oe))}}async function Wy(n,e,t){const i=me(n),s=[],r=[],o=[];i.ba.isEmpty()||(i.ba.forEach((l,c)=>{o.push(i.Ba(c,e,t).then(u=>{var d;if((u||t)&&i.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;i.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Zu.Ki(c.targetId,u);r.push(p)}}))}),await Promise.all(o),i.Sa.h_(s),await async function(c,u){const d=me(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(u,m=>L.forEach(m.qi,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>L.forEach(m.Qi,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!$r(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const T=d.ns.get(m),b=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(b);d.ns=d.ns.insert(m,k)}}}(i.localStore,r))}async function DP(n,e){const t=me(n);if(!t.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const i=await Oy(t.localStore,e);t.currentUser=e,function(r,o){r.Oa.forEach(l=>{l.forEach(c=>{c.reject(new ee(j.CANCELLED,o))})}),r.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Wy(t,i.us)}}function xP(n,e){const t=me(n),i=t.Fa.get(e);if(i&&i.wa)return ge().add(i.key);{let s=ge();const r=t.Da.get(e);if(!r)return s;for(const o of r){const l=t.ba.get(o);s=s.unionWith(l.view.Ea)}return s}}function zy(n){const e=me(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kP.bind(null,e),e.Sa.h_=EP.bind(null,e.eventManager),e.Sa.ka=TP.bind(null,e.eventManager),e}class Op{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xy(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Jb(this.persistence,new Yb,e.initialUser,this.serializer)}createPersistence(e){return new Kb(Ju.Hr,this.serializer)}createSharedClientState(e){return new iP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MP{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Np(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=DP.bind(null,this.syncEngine),await _P(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vP}()}createDatastore(e){const t=xy(e.databaseInfo.databaseId),i=function(r){return new aP(r)}(e.databaseInfo);return function(r,o,l,c){return new uP(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,r,o,l){return new dP(i,s,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Np(this.syncEngine,t,0),function(){return Cp.D()?new Cp:new sP}())}createSyncEngine(e,t){return function(s,r,o,l,c,u,d){const p=new CP(s,r,o,l,c,u);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(i){const s=me(i);Y("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await qr(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=oy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ee(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Uy(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Fl(n,e){n.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Oy(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Dp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await FP(n);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Sp(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Sp(e.remoteStore,s)),n._onlineComponents=e}function VP(n){return n.name==="FirebaseError"?n.code===j.FAILED_PRECONDITION||n.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function FP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!VP(t))throw t;ds("Error using user provided cache. Falling back to memory cache: "+t),await Fl(n,new Op)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Fl(n,new Op);return n._offlineComponents}async function UP(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await Dp(n,n._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await Dp(n,new MP))),n._onlineComponents}async function ca(n){const e=await UP(n),t=e.eventManager;return t.onListen=RP.bind(null,e.syncEngine),t.onUnlisten=PP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=NP.bind(null,e.syncEngine),t}function BP(n,e,t={}){const i=new Un;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const d=new uh({next:m=>{o.enqueueAndForget(()=>oh(r,p));const T=m.docs.has(l);!T&&m.fromCache?u.reject(new ee(j.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&c&&c.source==="server"?u.reject(new ee(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new lh(Fa(l.path),d,{includeMetadataChanges:!0,ra:!0});return rh(r,p)}(await ca(n),n.asyncQueue,e,t,i)),i.promise}function $P(n,e,t={}){const i=new Un;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const d=new uh({next:m=>{o.enqueueAndForget(()=>oh(r,p)),m.fromCache&&c.source==="server"?u.reject(new ee(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new lh(l,d,{includeMetadataChanges:!0,ra:!0});return rh(r,p)}(await ca(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(n,e,t){if(!t)throw new ee(j.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function jP(n,e,t,i){if(e===!0&&i===!0)throw new ee(j.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Mp(n){if(!ne.isDocumentKey(n))throw new ee(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Lp(n){if(ne.isDocumentKey(n))throw new ee(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qP(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":oe()}function Bn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qP(n);throw new ee(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ky((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wa{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ee(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ee(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vp(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new vS;switch(i.type){case"firstParty":return new wS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ee(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=xp.get(t);i&&(Y("ComponentProvider","Removing Datastore"),xp.delete(t),i.terminate())}(this),Promise.resolve()}}function HP(n,e,t,i={}){var s;const r=(n=Bn(n,Wa))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let l,c;if(typeof i.mockUserToken=="string")l=i.mockUserToken,c=nt.MOCK_USER;else{l=VI(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new ee(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new nt(u)}n._authCredentials=new ES(new ry(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Wr(this.firestore,e,this._query)}}class Ht{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class $n extends Wr{constructor(e,t,i){super(e,t,Fa(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new ne(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function WP(n,e,...t){if(n=an(n),Gy("collection","path",e),n instanceof Wa){const i=Oe.fromString(e,...t);return Lp(i),new $n(n,null,i)}{if(!(n instanceof Ht||n instanceof $n))throw new ee(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Oe.fromString(e,...t));return Lp(i),new $n(n.firestore,null,i)}}function zP(n,e,...t){if(n=an(n),arguments.length===1&&(e=oy.newId()),Gy("doc","path",e),n instanceof Wa){const i=Oe.fromString(e,...t);return Mp(i),new Ht(n,null,new ne(i))}{if(!(n instanceof Ht||n instanceof $n))throw new ee(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Oe.fromString(e,...t));return Mp(i),new Ht(n.firestore,n instanceof $n?n.converter:null,new ne(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new My(this,"async_queue_retry"),this.hu=()=>{const t=Vl();t&&Y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=Vl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Vl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Un;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!$r(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(i=>{this.au=i,this.uu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw yn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=t,t}enqueueAfterDelay(e,t,i){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=sh.createAndSchedule(this,e,t,i,r=>this.Eu(r));return this._u.push(s),s}Pu(){this.au&&oe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}function Fp(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class Or extends Wa{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=function(){return new KP}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qy(this),this._firestoreClient.terminate()}}function GP(n,e){const t=typeof n=="object"?n:gu(),i=typeof n=="string"?n:"(default)",s=xr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=MI("firestore");r&&HP(s,...r)}return s}function hh(n){return n._firestoreClient||Qy(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Qy(n){var e,t,i;const s=n._freezeSettings(),r=function(l,c,u,d){return new LS(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ky(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new LP(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ua(ct.fromBase64String(e))}catch(t){throw new ee(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ua(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}const QP=new RegExp("[~\\*/\\[\\]]");function YP(n,e,t){if(e.search(QP)>=0)throw Up(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Yy(...e.split("."))._internalPath}catch{throw Up(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Up(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new ee(j.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zy("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class XP extends Jy{data(){return super.data()}}function Zy(n,e){return typeof e=="string"?YP(n,e):e instanceof Yy?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class JP{convertValue(e,t="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw oe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return La(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new Xy(Fe(e.latitude),Fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Hu(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Pr(e));default:return null}}convertTimestamp(e){const t=Wn(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Oe.fromString(e);Ue(ky(i));const s=new Nr(i.get(1),i.get(3)),r=new ne(i.popFirst(5));return s.isEqual(t)||yn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tv extends Jy{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Zy("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Fo extends tv{data(e={}){return super.data(e)}}class nv{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new tr(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Fo(this._firestore,this._userDataWriter,i.key,i,new tr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new tr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new tr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:ZP(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ZP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n){n=Bn(n,Ht);const e=Bn(n.firestore,Or);return BP(hh(e),n._key).then(t=>sv(e,n,t))}class dh extends JP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ua(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,t)}}function eN(n){n=Bn(n,Wr);const e=Bn(n.firestore,Or),t=hh(e),i=new dh(e);return ev(n._query),$P(t,n._query).then(s=>new nv(e,i,n,s))}function fh(n,...e){var t,i,s;n=an(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Fp(e[o])||(r=e[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Fp(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(i=p.error)===null||i===void 0?void 0:i.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(n instanceof Ht)u=Bn(n.firestore,Or),d=Fa(n._key.path),c={next:p=>{e[o]&&e[o](sv(u,n,p))},error:e[o+1],complete:e[o+2]};else{const p=Bn(n,Wr);u=Bn(p.firestore,Or),d=p._query;const m=new dh(u);c={next:T=>{e[o]&&e[o](new nv(u,m,p,T))},error:e[o+1],complete:e[o+2]},ev(n._query)}return function(m,T,b,k){const O=new uh(k),z=new lh(T,O,b);return m.asyncQueue.enqueueAndForget(async()=>rh(await ca(m),z)),()=>{O.$a(),m.asyncQueue.enqueueAndForget(async()=>oh(await ca(m),z))}}(hh(u),d,l,c)}function sv(n,e,t){const i=t.docs.get(e._key),s=new dh(n);return new tv(n,s,e._key,i,new tr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){As=s})(Es),Et(new _t("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new Or(new TS(i.getProvider("auth-internal")),new CS(i.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nr(u.options.projectId,d)}(o,s),o);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),Xe(ip,"4.6.4",e),Xe(ip,"4.6.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="firebasestorage.googleapis.com",tN="storageBucket",nN=2*60*1e3,iN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Kt{constructor(e,t,i=0){super(Ul(e),`Firebase Storage: ${t} (${Ul(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ln.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ul(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var on;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(on||(on={}));function Ul(n){return"storage/"+n}function sN(){const n="An unknown error occurred, please check the error payload for server response.";return new ln(on.UNKNOWN,n)}function rN(){return new ln(on.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oN(){return new ln(on.CANCELED,"User canceled the upload/download.")}function aN(n){return new ln(on.INVALID_URL,"Invalid URL '"+n+"'.")}function lN(n){return new ln(on.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Bp(n){return new ln(on.INVALID_ARGUMENT,n)}function ov(){return new ln(on.APP_DELETED,"The Firebase app was deleted.")}function cN(n){return new ln(on.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=$t.makeFromUrl(e,t)}catch{return new $t(e,"")}if(i.path==="")return i;throw lN(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(W){W.path_=decodeURIComponent(W.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),b={bucket:1,path:3},k=t===rv?"(?:storage.googleapis.com|storage.cloud.google.com)":t,O="([^?#]*)",z=new RegExp(`^https?://${k}/${s}/${O}`,"i"),F=[{regex:l,indices:c,postModify:r},{regex:T,indices:b,postModify:u},{regex:z,indices:{bucket:1,path:2},postModify:u}];for(let W=0;W<F.length;W++){const ae=F[W],G=ae.regex.exec(e);if(G){const I=G[ae.indices.bucket];let _=G[ae.indices.path];_||(_=""),i=new $t(I,_),ae.postModify(i);break}}if(i==null)throw aN(e);return i}}class uN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(n,e,t){let i=1,s=null,r=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...O){u||(u=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,n(T,c())},O)}function m(){r&&clearTimeout(r)}function T(O,...z){if(u){m();return}if(O){m(),d.call(null,O,...z);return}if(c()||o){m(),d.call(null,O,...z);return}i<64&&(i*=2);let F;l===1?(l=2,F=0):F=(i+Math.random())*1e3,p(F)}let b=!1;function k(O){b||(b=!0,m(),!u&&(s!==null?(O||(l=2),clearTimeout(s),p(0)):O||(l=1)))}return p(0),r=setTimeout(()=>{o=!0,k(!0)},t),k}function dN(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(n){return n!==void 0}function $p(n,e,t,i){if(i<e)throw Bp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Bp(`Invalid value for '${n}'. Expected ${t} or less.`)}function pN(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ha;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ha||(ha={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,t,i,s,r,o,l,c,u,d,p,m=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,b)=>{this.resolve_=T,this.reject_=b,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Co(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===ha.NO_ERROR,c=r.getStatus();if(!l||gN(c,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===ha.ABORT;i(!1,new Co(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;i(!0,new Co(u,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());fN(c)?r(c):r()}catch(c){o(c)}else if(l!==null){const c=sN();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?ov():oN();o(c)}else{const c=rN();o(c)}};this.canceled_?t(!1,new Co(!1,null,!0)):this.backoffId_=hN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Co{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function _N(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function yN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function EN(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function TN(n,e,t,i,s,r,o=!0){const l=pN(n.urlParams),c=n.url+l,u=Object.assign({},n.headers);return vN(u,e),_N(u,t),yN(u,r),EN(u,i),new mN(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function wN(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this._service=e,t instanceof $t?this._location=t:this._location=$t.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new da(e,t)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wN(this._location.path)}get storage(){return this._service}get parent(){const e=IN(this._location.path);if(e===null)return null;const t=new $t(this._location.bucket,e);return new da(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw cN(e)}}function jp(n,e){const t=e==null?void 0:e[tN];return t==null?null:$t.makeFromBucketSpec(t,n)}class AN{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=rv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nN,this._maxUploadRetryTime=iN,this._requests=new Set,s!=null?this._bucket=$t.makeFromBucketSpec(s,this._host):this._bucket=jp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=jp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$p("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$p("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new da(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new uN(ov());{const o=TN(e,this._appId,i,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const qp="@firebase/storage",Hp="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="storage";function RN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new AN(t,i,s,e,Es)}function SN(){Et(new _t(CN,RN,"PUBLIC").setMultipleInstances(!0)),Xe(qp,Hp,""),Xe(qp,Hp,"esm2017")}SN();const Bl=new WeakMap;function av(n,e){return Bl.has(e)||Bl.set(e,{f:{},r:{},s:{},u:{}}),Bl.get(e)}function bN(n,e,t,i){if(!n)return t;const[s,r]=lv(n);if(!s)return t;const o=av(void 0,i)[s]||{},l=e||r;return l&&l in o?o[l]:t}function PN(n,e,t,i){if(!n)return;const[s,r]=lv(n);if(!s)return;const o=av(void 0,i)[s],l=e||r;if(l)return t.then(c=>{o[l]=c}).catch(Zt),l}function lv(n){return S0(n)||b0(n)?["f",n.path]:P0(n)?["r",n.toString()]:N0(n)?["s",n.toString()]:[]}const $l=new WeakMap;function NN(n,e,t){const i=Bm();$l.has(i)||$l.set(i,new Map);const s=$l.get(i),r=PN(e,t,n,i);return r&&s.set(r,n),r?()=>s.delete(r):Zt}const kN={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function $c(n,e,t,i){if(!C0(n))return[n,{}];const s=[{},{}],r=Object.keys(t).reduce((l,c)=>{const u=t[c];return l[u.path]=u.data(),l},{});function o(l,c,u,d){c=c||{};const[p,m]=d;Object.getOwnPropertyNames(l).forEach(T=>{const b=Object.getOwnPropertyDescriptor(l,T);b&&!b.enumerable&&Object.defineProperty(p,T,b)});for(const T in l){const b=l[T];if(b==null||b instanceof Date||b instanceof pt||b instanceof Xy)p[T]=b;else if(yu(b)){const k=u+T;p[T]=k in t?c[T]:b.path,m[k]=b.converter?b:b.withConverter(i.converter)}else if(Array.isArray(b)){p[T]=Array(b.length);for(let k=0;k<b.length;k++){const O=b[k];O&&O.path in r&&(p[T][k]=r[O.path])}o(b,c[T]||p[T],u+T+".",[p[T],m])}else Di(b)?(p[T]={},o(b,c[T],u+T+".",[p[T],m])):p[T]=b}}return o(n,e,"",s),s}const ph={reset:!1,wait:!0,maxRefDepth:2,converter:kN,snapshotOptions:{serverTimestamps:"estimate"}};function fa(n){for(const e in n)n[e].unsub()}function jc(n,e,t,i,s,r,o,l,c){const[u,d]=$c(i.data(n.snapshotOptions),_u(e,t),s,n);r.set(e,t,u),qc(n,e,t,s,d,r,o,l,c)}function ON({ref:n,target:e,path:t,depth:i,resolve:s,reject:r,ops:o},l){const c=Object.create(null);let u=Zt;return l.once?iv(n).then(d=>{d.exists()?jc(l,e,t,d,c,o,i,s,r):(o.set(e,t,null),s())}).catch(r):u=fh(n,d=>{d.exists()?jc(l,e,t,d,c,o,i,s,r):(o.set(e,t,null),s())},r),()=>{u(),fa(c)}}function qc(n,e,t,i,s,r,o,l,c){const u=Object.keys(s);if(Object.keys(i).filter(k=>u.indexOf(k)<0).forEach(k=>{i[k].unsub(),delete i[k]}),!u.length||++o>n.maxRefDepth)return l(t);let p=0;const m=u.length,T=Object.create(null);function b(k){k in T&&++p>=m&&l(t)}u.forEach(k=>{const O=i[k],z=s[k],Q=`${t}.${k}`;if(T[Q]=!0,O)if(O.path!==z.path)O.unsub();else return;i[k]={data:()=>_u(e,Q),unsub:ON({ref:z,target:e,path:Q,depth:o,ops:r,resolve:b.bind(null,Q),reject:c},n),path:z.path}})}function DN(n,e,t,i,s,r){const o=Object.assign({},ph,r),{snapshotListenOptions:l,snapshotOptions:c,wait:u,once:d}=o,p="value";let m=mi(u?[]:n.value);u||t.set(n,p,[]);const T=i;let b,k=Zt;const O=[],z={added:({newIndex:F,doc:W})=>{O.splice(F,0,Object.create(null));const ae=O[F],[G,I]=$c(W.data(c),void 0,ae,o);t.add(fn(m),F,G),qc(o,m,`${p}.${F}`,ae,I,t,0,i.bind(null,W),s)},modified:({oldIndex:F,newIndex:W,doc:ae})=>{const G=fn(m),I=O[F],_=G[F],[v,w]=$c(ae.data(c),_,I,o);O.splice(W,0,I),t.remove(G,F),t.add(G,W,v),qc(o,m,`${p}.${W}`,I,w,t,0,i,s)},removed:({oldIndex:F})=>{const W=fn(m);t.remove(W,F),fa(O.splice(F,1)[0])}};function Q(F){const W=F.docChanges(l);if(!b&&W.length){b=!0;let ae=0;const G=W.length,I=Object.create(null);for(let _=0;_<G;_++)I[W[_].doc.id]=!0;i=_=>{_&&_.id in I&&++ae>=G&&(u&&(t.set(n,p,fn(m)),m=n),T(fn(m)),i=Zt)}}W.forEach(ae=>{z[ae.type](ae)}),W.length||(u&&(t.set(n,p,fn(m)),m=n),i(fn(m)))}return d?eN(e).then(Q).catch(s):k=fh(e,Q,s),F=>{if(k(),F){const W=typeof F=="function"?F():[];t.set(n,p,W)}O.forEach(fa)}}function xN(n,e,t,i,s,r){const o=Object.assign({},ph,r),l="value",c=Object.create(null);i=k0(i,()=>_u(n,l));let u=Zt;function d(p){p.exists()?jc(o,n,l,p,c,t,0,i,s):(t.set(n,l,null),i(null))}return o.once?iv(e).then(d).catch(s):u=fh(e,d,s),p=>{if(u(),p){const m=typeof p=="function"?p():null;t.set(n,l,m)}fa(c)}}const Wp=Symbol();function MN(n,e){let t=Zt;const i=Object.assign({},ph,e),s=fn(n),r=i.target||mi();D0()&&(i.once=!0);const o=bN(s,i.ssrKey,Wp,Bm()),l=o!==Wp;l&&(r.value=o);let c=!l;const u=mi(!1),d=mi(),p=VE(),m=ug();let T=Zt;function b(){let z=fn(n);const Q=new Promise((F,W)=>{if(t(i.reset),!z)return t=Zt,F(null);u.value=c,c=!0,z.converter||(z=z.withConverter(i.converter)),t=(yu(z)?xN:DN)(r,z,LN,F,W,i)}).catch(F=>(p.value===Q&&(d.value=F),Promise.reject(F))).finally(()=>{p.value===Q&&(u.value=!1)});p.value=Q}let k=Zt;(mt(n)||typeof n=="function")&&(k=Po(n,b)),b(),s&&(T=NN(p.value,s,i.ssrKey)),tm()&&Vg(()=>p.value),m&&pE(O);function O(z=i.reset){k(),T(),t(z)}return Object.defineProperties(r,{error:{get:()=>d},data:{get:()=>r},pending:{get:()=>u},promise:{get:()=>p},stop:{get:()=>O}})}const LN={set:(n,e,t)=>w0(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)};function VN(n,e){return MN(n,{target:mi([]),...e})}function FN(n,{firebaseApp:e,modules:t=[]}){n.provide(Um,e);for(const i of t)i(e,n)}const cv="@firebase/installations",gh="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=1e4,hv=`w:${gh}`,dv="FIS_v2",UN="https://firebaseinstallations.googleapis.com/v1",BN=60*60*1e3,$N="installations",jN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ni=new Yn($N,jN,qN);function fv(n){return n instanceof Kt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv({projectId:n}){return`${UN}/projects/${n}/installations`}function gv(n){return{token:n.token,requestStatus:2,expiresIn:WN(n.expiresIn),creationTime:Date.now()}}async function mv(n,e){const i=(await e.json()).error;return Ni.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function _v({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function HN(n,{refreshToken:e}){const t=_v(n);return t.append("Authorization",zN(e)),t}async function yv(n){const e=await n();return e.status>=500&&e.status<600?n():e}function WN(n){return Number(n.replace("s","000"))}function zN(n){return`${dv} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KN({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=pv(n),s=_v(n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:dv,appId:n.appId,sdkVersion:hv},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await yv(()=>fetch(i,l));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:gv(u.authToken)}}else throw await mv("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=/^[cdef][\w-]{21}$/,Hc="";function YN(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=XN(n);return QN.test(t)?t:Hc}catch{return Hc}}function XN(n){return GN(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=new Map;function Tv(n,e){const t=za(n);Iv(t,e),JN(t,e)}function Iv(n,e){const t=Ev.get(n);if(t)for(const i of t)i(e)}function JN(n,e){const t=ZN();t&&t.postMessage({key:n,fid:e}),ek()}let fi=null;function ZN(){return!fi&&"BroadcastChannel"in self&&(fi=new BroadcastChannel("[Firebase] FID Change"),fi.onmessage=n=>{Iv(n.data.key,n.data.fid)}),fi}function ek(){Ev.size===0&&fi&&(fi.close(),fi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="firebase-installations-database",nk=1,ki="firebase-installations-store";let jl=null;function mh(){return jl||(jl=mm(tk,nk,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ki)}}})),jl}async function pa(n,e){const t=za(n),s=(await mh()).transaction(ki,"readwrite"),r=s.objectStore(ki),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Tv(n,e.fid),e}async function wv(n){const e=za(n),i=(await mh()).transaction(ki,"readwrite");await i.objectStore(ki).delete(e),await i.done}async function Ka(n,e){const t=za(n),s=(await mh()).transaction(ki,"readwrite"),r=s.objectStore(ki),o=await r.get(t),l=e(o);return l===void 0?await r.delete(t):await r.put(l,t),await s.done,l&&(!o||o.fid!==l.fid)&&Tv(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(n){let e;const t=await Ka(n.appConfig,i=>{const s=ik(i),r=sk(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===Hc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ik(n){const e=n||{fid:YN(),registrationStatus:0};return Av(e)}function sk(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ni.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=rk(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ok(n)}:{installationEntry:e}}async function rk(n,e){try{const t=await KN(n,e);return pa(n.appConfig,t)}catch(t){throw fv(t)&&t.customData.serverCode===409?await wv(n.appConfig):await pa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ok(n){let e=await zp(n.appConfig);for(;e.registrationStatus===1;)await vv(100),e=await zp(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await _h(n);return i||t}return e}function zp(n){return Ka(n,e=>{if(!e)throw Ni.create("installation-not-found");return Av(e)})}function Av(n){return ak(n)?{fid:n.fid,registrationStatus:0}:n}function ak(n){return n.registrationStatus===1&&n.registrationTime+uv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk({appConfig:n,heartbeatServiceProvider:e},t){const i=ck(n,t),s=HN(n,t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:hv,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await yv(()=>fetch(i,l));if(c.ok){const u=await c.json();return gv(u)}else throw await mv("Generate Auth Token",c)}function ck(n,{fid:e}){return`${pv(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(n,e=!1){let t;const i=await Ka(n.appConfig,r=>{if(!Cv(r))throw Ni.create("not-registered");const o=r.authToken;if(!e&&dk(o))return r;if(o.requestStatus===1)return t=uk(n,e),r;{if(!navigator.onLine)throw Ni.create("app-offline");const l=pk(r);return t=hk(n,l),l}});return t?await t:i.authToken}async function uk(n,e){let t=await Kp(n.appConfig);for(;t.authToken.requestStatus===1;)await vv(100),t=await Kp(n.appConfig);const i=t.authToken;return i.requestStatus===0?yh(n,e):i}function Kp(n){return Ka(n,e=>{if(!Cv(e))throw Ni.create("not-registered");const t=e.authToken;return gk(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function hk(n,e){try{const t=await lk(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await pa(n.appConfig,i),t}catch(t){if(fv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await wv(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pa(n.appConfig,i)}throw t}}function Cv(n){return n!==void 0&&n.registrationStatus===2}function dk(n){return n.requestStatus===2&&!fk(n)}function fk(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+BN}function pk(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function gk(n){return n.requestStatus===1&&n.requestTime+uv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(n){const e=n,{installationEntry:t,registrationPromise:i}=await _h(e);return i?i.catch(console.error):yh(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(n,e=!1){const t=n;return await yk(t),(await yh(t,e)).token}async function yk(n){const{registrationPromise:e}=await _h(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(n){if(!n||!n.options)throw ql("App Configuration");if(!n.name)throw ql("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ql(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ql(n){return Ni.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="installations",Ek="installations-internal",Tk=n=>{const e=n.getProvider("app").getImmediate(),t=vk(e),i=xr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Ik=n=>{const e=n.getProvider("app").getImmediate(),t=xr(e,Rv).getImmediate();return{getId:()=>mk(t),getToken:s=>_k(t,s)}};function wk(){Et(new _t(Rv,Tk,"PUBLIC")),Et(new _t(Ek,Ik,"PRIVATE"))}wk();Xe(cv,gh);Xe(cv,gh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="analytics",Ak="firebase_id",Ck="origin",Rk=60*1e3,Sk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bk="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new vs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Pk(n,e){const t=document.createElement("script"),i=zA`https://www.googletagmanager.com/gtag/js?l=${n}&id=${e}`;YA(t,i),t.async=!0,document.head.appendChild(t)}function Nk(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function kk(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await Sv(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){Pt.error(l)}n("config",s,r)}async function Ok(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await Sv(t);for(const c of o){const u=l.find(p=>p.measurementId===c),d=u&&e[u.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){Pt.error(r)}}function Dk(n,e,t,i){async function s(r,...o){try{if(r==="event"){const[l,c]=o;await Ok(n,e,t,l,c)}else if(r==="config"){const[l,c]=o;await kk(n,e,t,i,l,c)}else if(r==="consent"){const[l,c]=o;n("consent",l,c)}else if(r==="get"){const[l,c,u]=o;n("get",l,c,u)}else if(r==="set"){const[l]=o;n("set",l)}else n(r,...o)}catch(l){Pt.error(l)}}return s}function xk(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Dk(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function Mk(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(bk)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xt=new Yn("analytics","Analytics",Lk);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=30,Fk=1e3;class Uk{constructor(e={},t=Fk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bv=new Uk;function Bk(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function $k(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:Bk(i)},r=Sk.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function jk(n,e=bv,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw xt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw xt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Wk;return setTimeout(async()=>{l.abort()},Rk),Pv({appId:i,apiKey:s,measurementId:r},o,l,e)}async function Pv(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=bv){var r;const{appId:o,measurementId:l}=n;try{await qk(i,e)}catch(c){if(l)return Pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await $k(n);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!Hk(u)){if(s.deleteThrottleMetadata(o),l)return Pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw c}const d=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?Yd(t,s.intervalMillis,Vk):Yd(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(o,p),Pt.debug(`Calling attemptFetch again in ${d} millis`),Pv(n,p,i,s)}}function qk(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Hk(n){if(!(n instanceof Kt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Wk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zk(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(){if(du())try{await dm()}catch(n){return Pt.warn(xt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Pt.warn(xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Gk(n,e,t,i,s,r,o){var l;const c=jk(n);c.then(T=>{t[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&Pt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Pt.error(T)),e.push(c);const u=Kk().then(T=>{if(T)return i.getId()}),[d,p]=await Promise.all([c,u]);Mk(r)||Pk(r,d.measurementId),s("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[Ck]="firebase",m.update=!0,p!=null&&(m[Ak]=p),s("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.app=e}_delete(){return delete _r[this.app.options.appId],Promise.resolve()}}let _r={},Gp=[];const Qp={};let Hl="dataLayer",Yk="gtag",Yp,Nv,Xp=!1;function Xk(){const n=[];if(cm()&&n.push("This is a browser extension environment."),BI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=xt.create("invalid-analytics-context",{errorInfo:e});Pt.warn(t.message)}}function Jk(n,e,t){Xk();const i=n.options.appId;if(!i)throw xt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xt.create("no-api-key");if(_r[i]!=null)throw xt.create("already-exists",{id:i});if(!Xp){Nk(Hl);const{wrappedGtag:r,gtagCore:o}=xk(_r,Gp,Qp,Hl,Yk);Nv=r,Yp=o,Xp=!0}return _r[i]=Gk(n,Gp,Qp,e,Yp,Hl,t),new Qk(n)}function Zk(n=gu()){n=an(n);const e=xr(n,ga);return e.isInitialized()?e.getImmediate():eO(n)}function eO(n,e={}){const t=xr(n,ga);if(t.isInitialized()){const s=t.getImmediate();if(Wo(e,t.getOptions()))return s;throw xt.create("already-initialized")}return t.initialize({options:e})}function tO(n,e,t,i){n=an(n),zk(Nv,_r[n.app.options.appId],e,t,i).catch(s=>Pt.error(s))}const Jp="@firebase/analytics",Zp="0.10.6";function nO(){Et(new _t(ga,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Jk(i,s,t)},"PUBLIC")),Et(new _t("analytics-internal",n,"PRIVATE")),Xe(Jp,Zp),Xe(Jp,Zp,"esm2017");function n(e){try{const t=e.getProvider(ga).getImmediate();return{logEvent:(i,s,r)=>tO(t,i,s,r)}}catch(t){throw xt.create("interop-component-reg-failed",{reason:t})}}}nO();const iO=es("br",null,null,-1),sO={__name:"App",setup(n){const t=_m({apiKey:"AIzaSyDtv1gb9AjCoYFwh48LUorst0RexUznRWY",authDomain:"vue3-chat-f3d4e.firebaseapp.com",projectId:"vue3-chat-f3d4e",storageBucket:"vue3-chat-f3d4e.appspot.com",messagingSenderId:"624341074146",appId:"1:624341074146:web:160f603fd578ccaf231ebb",measurementId:"G-YDCDK44R4J"});Zk(t);const i=mi(""),s=mi(""),r=GP(t),o=VN(WP(r,"messages")),l=async()=>{const u=new Date,d={name:i.value,content:s.value,timestanmp:""+u.getFullYear()+("0"+u.getMonth()+1).slice(-2)+("0"+u.getDate()).slice(-2)+("0"+u.getHours()).slice(-2)+("0"+u.getMinutes()).slice(-2)+("0"+u.getSeconds()).slice(-2)};try{await zP(o,d),s.value=""}catch(p){console.error("Error adding document: ",p)}},c=computed(()=>{this.messages.slice().sort((d,p)=>(d=d.timestamp,p=p.timestamp,d===p?0:d>p?-1:1))});return(u,d)=>(gl(),ml(Ft,null,[ic(" 名前: "),vd(es("input",{type:"text",class:"form-control",style:{width:"250px"},"onUpdate:modelValue":d[0]||(d[0]=p=>i.value=p)},null,512),[[Wd,i.value]]),ic(" 内容: "),vd(es("input",{type:"text",class:"form-control",style:{width:"400px"},"onUpdate:modelValue":d[1]||(d[1]=p=>s.value=p)},null,512),[[Wd,s.value]]),iO,es("button",{class:"btn btn-primary",onClick:l},"送信"),(gl(!0),ml(Ft,null,rT(ru(c),(p,m)=>(gl(),ml("p",{key:m},zl(p.name)+" > "+zl(p.content),1))),128))],64))}},kv=wI(sO);kv.use(FN);kv.mount("#app");
