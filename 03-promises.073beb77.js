!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("iU1Pc");function u(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}({form:document.querySelector("form"),inputDelay:document.getElementsByName("delay"),inputStep:document.getElementsByName("step"),inputAmount:document.getElementsByName("amount"),submitBtn:document.querySelector("button")}).form.addEventListener("submit",(function(t){t.preventDefault();for(var n=t.currentTarget.elements,o=n.delay,r=n.step,a=n.amount,l=Number(o.value),c=Number(r.value),d=Number(a.value),f=1;f<=d;f+=1)u(f,l).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success(":white_check_mark: Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure(":x: Rejected promise ".concat(n," in ").concat(o,"ms"))})),l+=c}))}();
//# sourceMappingURL=03-promises.073beb77.js.map
