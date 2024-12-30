// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.4-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function m(t,r){return s(t)||s(r)||r<=0?NaN:e(t)?-i(-r)*n(-r*t):0}function d(t){return s(t)||t<=0?r(NaN):function(r){if(s(r))return NaN;if(e(r))return-i(-t)*n(-t*r);return 0}}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map