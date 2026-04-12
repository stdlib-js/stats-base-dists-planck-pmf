"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(j,u){
var q=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-exp/dist'),N=require('@stdlib/math-base-special-expm1/dist');function p(e,r){return n(e)||n(r)||r<=0?NaN:q(e)?-N(-r)*c(-r*e):0}u.exports=p
});var f=t(function(k,a){
var g=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),y=require('@stdlib/utils-constant-function/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-exp/dist'),I=require('@stdlib/math-base-special-expm1/dist');function F(e){if(v(e)||e<=0)return y(NaN);return r;function r(i){return v(i)?NaN:g(i)?-I(-e)*x(-e*i):0}}a.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=s(),R=f();O(o,"factory",R);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
