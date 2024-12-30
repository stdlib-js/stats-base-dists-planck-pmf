// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,v,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,u,f,s,l,p,y,g,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),u+=n.arg||"",f+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var j=Object.prototype,T=j.toString,N=j.__defineGetter__,O=j.__defineSetter__,V=j.__lookupGetter__,$=j.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=j,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function H(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=Math.floor;function C(r){return W(r)===r&&r>=0}function L(r){return r!=r}var P=Math.ceil;function R(r){return r<0?P(r):W(r)}var Z=Number.NEGATIVE_INFINITY,M=Number.POSITIVE_INFINITY,X=1023,Y=1023,z=-1023,q=-1074;function B(r){return r===M||r===Z}var D,J=2147483648,K=2147483647,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),rr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"",ir=Q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return rr.call(r);t=r[nr],a=nr,e=null!=(i=r)&&er.call(i,a);try{r[nr]=void 0}catch(e){return rr.call(r)}return n=rr.call(r),e?r[nr]=t:delete r[nr],n}:function(r){return rr.call(r)},ar="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,t;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var ur,fr=D,sr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),t=e,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===ir(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,gr=ur,dr="function"==typeof Uint8Array,hr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,256,257]),t=e,r=(dr&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,br=yr,mr="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,65536,65537]),t=e,r=(mr&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:wr,uint8:br};(Er=new Ur.uint16(1))[0]=4660;var Sr,Ir,xr=52===new Ur.uint8(Er.buffer)[0];!0===xr?(Sr=1,Ir=0):(Sr=0,Ir=1);var kr={HIGH:Sr,LOW:Ir},Fr=new gr(1),jr=new fr(Fr.buffer),Tr=kr.HIGH,Nr=kr.LOW;function Or(r,e,t,n){return Fr[0]=r,e[n]=jr[Tr],e[n+t]=jr[Nr],e}function Vr(r){return Or(r,[0,0],1,0)}H(Vr,"assign",Or);var $r,Gr,Hr=!0===xr?1:0,Wr=new gr(1),Cr=new fr(Wr.buffer);function Lr(r){return Wr[0]=r,Cr[Hr]}!0===xr?($r=1,Gr=0):($r=0,Gr=1);var Pr={HIGH:$r,LOW:Gr},Rr=new gr(1),Zr=new fr(Rr.buffer),Mr=Pr.HIGH,Xr=Pr.LOW;function Yr(r,e){return Zr[Mr]=r,Zr[Xr]=e,Rr[0]}var zr=[0,0],qr=22250738585072014e-324,Br=4503599627370496;function Dr(r,e,t,n){return L(r)||B(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<qr?(e[n]=r*Br,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=2146435072,Kr=2220446049250313e-31,Qr=2148532223,re=[0,0],ee=[0,0];function te(r,e){var t,n,i,a,o,c;return 0===e||0===r||L(r)||B(r)?r:(Dr(r,re,1,0),r=re[0],e+=re[1],e+=function(r){var e=Lr(r);return(e=(e&Jr)>>>20)-X|0}(r),e<q?(i=0,a=r,Vr.assign(i,zr,1,0),o=zr[0],o&=K,c=Lr(a),Yr(o|=c&=J,zr[1])):e>Y?r<0?Z:M:(e<=z?(e+=52,n=Kr):n=1,Vr.assign(r,ee,1,0),t=ee[0],t&=Qr,n*Yr(t|=e+X<<20,ee[1])))}var ne=.6931471803691238,ie=1.9082149292705877e-10,ae=1.4426950408889634,oe=709.782712893384,ce=-745.1332191019411,ue=1/(1<<28),fe=-ue;function se(r){var e;return L(r)||r===M?r:r===Z?0:r>oe?M:r<ce?0:r>fe&&r<ue?1+r:function(r,e,t){var n,i,a,o;return te(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(e=R(r<0?ae*r-.5:ae*r+.5))*ne,e*ie,e)}var le=!0===xr?1:0,pe=new gr(1),ye=new fr(pe.buffer);function ge(r,e){return pe[0]=r,ye[le]=e>>>0,pe[0]}var de=.34657359027997264,he=709.782712893384,ve=.6931471803691238,we=1.9082149292705877e-10,be=1.4426950408889634,me=38.816242111356935,Ae=1.0397207708399179;function _e(r){var e,t,n,i,a,o,c,u,f,s,l,p,y;if(r===M||L(r))return r;if(r===Z)return-1;if(0===r)return r;if(r<0?(n=!0,u=-r):(n=!1,u=r),u>=me){if(n)return-1;if(u>=he)return M}if(o=0|Lr(u),u>de)u<Ae?n?(i=r+ve,a=-we,y=-1):(i=r-ve,a=we,y=1):(y=n?be*r-.5:be*r+.5,i=r-(l=y|=0)*ve,a=l*we),s=i-(r=i-a)-a;else{if(o<1016070144)return r;y=0}return c=1+(f=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((c-(l=3-c*e))/(6-r*l)),0===y?r-(r*p-f):(t=Yr(X+y<<20,0),p=r*(p-s)-s,p-=f,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(u=1-(p-r),1024===y?u=ge(u,i=Lr(u)+(y<<20)|0):u*=t,u-1):(l=1,y<20?u=(l=ge(l,i=1072693248-(2097152>>y)|0))-(p-r):(u=r-(p+(l=ge(l,i=X-y<<20|0))),u+=1),u*=t))}function Ee(r,e){return L(r)||L(e)||e<=0?NaN:C(r)?-_e(-e)*se(-e*r):0}return H(Ee,"factory",(function(r){return L(r)||r<=0?(e=NaN,function(){return e}):function(e){return L(e)?NaN:C(e)?-_e(-r)*se(-r*e):0};var e})),Ee},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pmf=e();
//# sourceMappingURL=index.js.map
