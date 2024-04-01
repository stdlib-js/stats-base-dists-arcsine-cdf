"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=a(function(l,s){
var u=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-asin/dist'),N=require('@stdlib/math-base-special-sqrt/dist'),O=require('@stdlib/constants-float64-pi/dist'),y=2/O;function I(e,r,i){return u(e)||u(r)||u(i)||r>=i?NaN:e<r?0:e>=i?1:y*o(N((e-r)/(i-r)))}s.exports=I
});var v=a(function(m,q){
var P=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),_=require('@stdlib/math-base-special-asin/dist'),d=require('@stdlib/math-base-special-sqrt/dist'),p=require('@stdlib/constants-float64-pi/dist'),R=2/p;function E(e,r){if(n(e)||n(r)||e>=r)return P(NaN);return i;function i(t){return n(t)?NaN:t<e?0:t>=r?1:R*_(d((t-e)/(r-e)))}}q.exports=E
});var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=f(),V=v();T(c,"factory",V);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
