/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Custom Properties */
:root {
  /* Colors */
  --primary-color-200: #a2e4ff;
  --primary-color-300: #6bcdf4;
  --primary-color-400: #3ebdef;
  --primary-color-500: #00a2e2;
  --primary-color-600: #02516f;
  --white: #fff;
  --black: #000;
  --gray-300: #f4f9fb;
  --gray-400: #d1dee4;
  --gray-500: #a4b0b6;
  --gray-600: #828a8d;
  --gray-700: #464646;
  --gray-800: #011016;

  /* Fonts */
  --font-poppins: 'Poppins', sans-serif;
}

/* General Styles */
body {
  font-family: var(--font-poppins);
  background-color: var(--gray-300);
  color: var(--gray-700);
}

button {
  background-color: var(--primary-color-500);
  color: var(--white);
  padding: 0.5rem 1.5rem;
  border: 1px solid var(--primary-color-500);
  border-radius: 0.25rem;
  width: max-content;
  font-size: 1.25rem;
  transition: all 200ms ease-in-out;
}

button:hover {
  background-color: var(--primary-color-400);
}

button:active {
  transform: translateY(3px);
}

.container {
  max-width: 60rem;
  min-width: 25rem;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header Styles */

.header {
  padding: 3rem 0;
  background-color: var(--primary-color-200);
  text-align: center;
}

.page-title {
  font-size: 3.25rem;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

@media (min-width: 45rem) {
  .main .container {
    flex-direction: row;
  }
}

/* Top Scores Section */
.top-scores-section {
  order: 1;
}

.top-scores-section > .container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  background-color: var(--primary-color-200);
  padding-top: 3rem;
  overflow: hidden;
  border-bottom-right-radius: 14%;
  border-bottom-left-radius: 14%;
}

.top-score {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  width: 8rem;
  padding: 1.25rem 0.75rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  transform-origin: bottom;
  animation: slide-up 500ms ease-in;
}

.top-score__rank {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.25rem;
  background-color: var(--white);
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 100%;
  overflow: hidden;
}

.top-score__user {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--gray-800);
}

.top-score__score {
  font-weight: 600;
  color: var(--white);
}

.top-score__first {
  background-color: var(--primary-color-500);
  order: 2;
  height: 20rem;
  transition: transform 0.3s ease-in-out;
}

.top-score__first:hover {
  transform: scale(1.06);
}

.top-score__first > .top-score__score {
  font-size: 2.25rem;
}

.top-score__second {
  background-color: var(--primary-color-400);
  margin-top: 3rem;
  height: 17rem;
  order: 1;
  transition: transform 0.3s ease-in-out;
  animation-delay: 50ms;
}

.top-score__second:hover {
  transform: scale(1.04);
}

.top-score__second > .top-score__score {
  font-size: 1.5rem;
}

.top-score__third {
  background-color: var(--primary-color-300);
  margin-top: 6rem;
  height: 14rem;
  order: 3;
  transition: transform 0.3s ease-in-out;
  animation-delay: 150ms;
}

.top-score__third:hover {
  transform: scale(1.03);
}

.top-score__third > .top-score__score {
  font-size: 1.5rem;
}

/* Recent Scores Section */
.scores-section {
  order: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 44rem;
  width: 65vw;
}

.scores__header {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  min-width: max-content;
}

.scores__title {
  font-size: 2rem;
}

.scores__table {
  border: 4px solid #000;
}

.scores__table__row {
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  font-weight: 600;
  font-size: 1.0625rem;
}

.scores__table__row:nth-child(even) {
  background-color: #ddd;
}

/* Add Score Section */

.add-score-section {
  order: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.add-score__title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.add-score__form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 40rem;
}

.add-score__form__label {
  position: relative;
  background-color: var(--gray-300);
}

.add-score__form__label > span {
  position: absolute;
  background-color: var(--gray-300);
  padding: 0 0.5rem;
  bottom: 0.5rem;
  left: 0.5rem;
  transition: transform 150ms ease-in;
}

.add-score__form__label > span.float-label {
  transform: translateY(-1.5rem);
}

.add-score__form__input {
  border: 1px solid var(--gray-700);
  border-radius: 0.25rem;
  padding: 0.5rem;
  min-width: 15rem;
  width: 100%;
  background-color: var(--gray-300);
}

.add-score__form__btn {
  width: 100%;
}

/* Animations */

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(10em);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/* Custom Properties */\n:root {\n  /* Colors */\n  --primary-color-200: #a2e4ff;\n  --primary-color-300: #6bcdf4;\n  --primary-color-400: #3ebdef;\n  --primary-color-500: #00a2e2;\n  --primary-color-600: #02516f;\n  --white: #fff;\n  --black: #000;\n  --gray-300: #f4f9fb;\n  --gray-400: #d1dee4;\n  --gray-500: #a4b0b6;\n  --gray-600: #828a8d;\n  --gray-700: #464646;\n  --gray-800: #011016;\n\n  /* Fonts */\n  --font-poppins: 'Poppins', sans-serif;\n}\n\n/* General Styles */\nbody {\n  font-family: var(--font-poppins);\n  background-color: var(--gray-300);\n  color: var(--gray-700);\n}\n\nbutton {\n  background-color: var(--primary-color-500);\n  color: var(--white);\n  padding: 0.5rem 1.5rem;\n  border: 1px solid var(--primary-color-500);\n  border-radius: 0.25rem;\n  width: max-content;\n  font-size: 1.25rem;\n  transition: all 200ms ease-in-out;\n}\n\nbutton:hover {\n  background-color: var(--primary-color-400);\n}\n\nbutton:active {\n  transform: translateY(3px);\n}\n\n.container {\n  max-width: 60rem;\n  min-width: 25rem;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n/* Header Styles */\n\n.header {\n  padding: 3rem 0;\n  background-color: var(--primary-color-200);\n  text-align: center;\n}\n\n.page-title {\n  font-size: 3.25rem;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n\n@media (min-width: 45rem) {\n  .main .container {\n    flex-direction: row;\n  }\n}\n\n/* Top Scores Section */\n.top-scores-section {\n  order: 1;\n}\n\n.top-scores-section > .container {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  background-color: var(--primary-color-200);\n  padding-top: 3rem;\n  overflow: hidden;\n  border-bottom-right-radius: 14%;\n  border-bottom-left-radius: 14%;\n}\n\n.top-score {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: center;\n  width: 8rem;\n  padding: 1.25rem 0.75rem;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  transform-origin: bottom;\n  animation: slide-up 500ms ease-in;\n}\n\n.top-score__rank {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1.25rem;\n  background-color: var(--white);\n  width: 2rem;\n  height: 2rem;\n  padding: 0.5rem;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\n.top-score__user {\n  text-align: center;\n  font-size: 1.25rem;\n  font-weight: 500;\n  color: var(--gray-800);\n}\n\n.top-score__score {\n  font-weight: 600;\n  color: var(--white);\n}\n\n.top-score__first {\n  background-color: var(--primary-color-500);\n  order: 2;\n  height: 20rem;\n  transition: transform 0.3s ease-in-out;\n}\n\n.top-score__first:hover {\n  transform: scale(1.06);\n}\n\n.top-score__first > .top-score__score {\n  font-size: 2.25rem;\n}\n\n.top-score__second {\n  background-color: var(--primary-color-400);\n  margin-top: 3rem;\n  height: 17rem;\n  order: 1;\n  transition: transform 0.3s ease-in-out;\n  animation-delay: 50ms;\n}\n\n.top-score__second:hover {\n  transform: scale(1.04);\n}\n\n.top-score__second > .top-score__score {\n  font-size: 1.5rem;\n}\n\n.top-score__third {\n  background-color: var(--primary-color-300);\n  margin-top: 6rem;\n  height: 14rem;\n  order: 3;\n  transition: transform 0.3s ease-in-out;\n  animation-delay: 150ms;\n}\n\n.top-score__third:hover {\n  transform: scale(1.03);\n}\n\n.top-score__third > .top-score__score {\n  font-size: 1.5rem;\n}\n\n/* Recent Scores Section */\n.scores-section {\n  order: 3;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 44rem;\n  width: 65vw;\n}\n\n.scores__header {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.5rem;\n  min-width: max-content;\n}\n\n.scores__title {\n  font-size: 2rem;\n}\n\n.scores__table {\n  border: 4px solid #000;\n}\n\n.scores__table__row {\n  padding: 0.5rem;\n  display: flex;\n  gap: 1rem;\n  font-weight: 600;\n  font-size: 1.0625rem;\n}\n\n.scores__table__row:nth-child(even) {\n  background-color: #ddd;\n}\n\n/* Add Score Section */\n\n.add-score-section {\n  order: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.add-score__title {\n  font-size: 2rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.add-score__form {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 40rem;\n}\n\n.add-score__form__label {\n  position: relative;\n  background-color: var(--gray-300);\n}\n\n.add-score__form__label > span {\n  position: absolute;\n  background-color: var(--gray-300);\n  padding: 0 0.5rem;\n  bottom: 0.5rem;\n  left: 0.5rem;\n  transition: transform 150ms ease-in;\n}\n\n.add-score__form__label > span.float-label {\n  transform: translateY(-1.5rem);\n}\n\n.add-score__form__input {\n  border: 1px solid var(--gray-700);\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  min-width: 15rem;\n  width: 100%;\n  background-color: var(--gray-300);\n}\n\n.add-score__form__btn {\n  width: 100%;\n}\n\n/* Animations */\n\n@keyframes slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(10em);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* https://piccalil.li/blog/a-modern-css-reset */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  /* border: 1px solid red; */
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,gDAAgD;;AAEhD,qBAAqB;AACrB;;;EAGE,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF","sourcesContent":["/* https://piccalil.li/blog/a-modern-css-reset */\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/api-requests.js":
/*!*************************************!*\
  !*** ./src/modules/api-requests.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchScores: () => (/* binding */ fetchScores),
/* harmony export */   postSingleScore: () => (/* binding */ postSingleScore)
/* harmony export */ });
const ENDPOINT = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const GAME_ID = 'n4yY4NtqgXrTC1oTBtkJ';

const fetchScores = async () => {
  const url = `${ENDPOINT}/games/${GAME_ID}/scores`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error fetching data: Status code ${response.status} returned`,
      );
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error('Unknown Error fetching data');
  }
};

const postSingleScore = async ({ user, score }) => {
  const url = `${ENDPOINT}/games/${GAME_ID}/scores`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });
    if (!response.ok) {
      throw new Error(
        `Error posting data: Status code ${response.status} returned`,
      );
    }
    const data = await response.json();
    return { success: data.result === 'Leaderboard score created correctly.' };
  } catch (error) {
    throw new Error('Unknown Error fetching data');
  }
};


/***/ }),

/***/ "./src/modules/floating-labels.js":
/*!****************************************!*\
  !*** ./src/modules/floating-labels.js ***!
  \****************************************/
/***/ (() => {

const inputs = document.querySelectorAll('.add-score__form__input');

inputs.forEach((input) => {
  input.addEventListener('focus', (e) => {
    const span = e.target.nextElementSibling;
    span.classList.add('float-label');
  });

  input.addEventListener('blur', (e) => {
    if (e.target.value.trim() === '') {
      const span = e.target.nextElementSibling;
      span.classList.remove('float-label');
    }
  });
});


/***/ }),

/***/ "./src/modules/render-scores.js":
/*!**************************************!*\
  !*** ./src/modules/render-scores.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_requests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-requests.js */ "./src/modules/api-requests.js");


const renderScores = async () => {
  // Fetch scores from API
  const latestScores = await (0,_api_requests_js__WEBPACK_IMPORTED_MODULE_0__.fetchScores)();

  // The scores returned by the API are not in sorted order, so we sort them
  // before appending them to the DOM
  const sortedScores = latestScores
    .map(({ user, score }) => ({
      user,
      score: parseInt(score, 10),
    }))
    .sort((a, b) => b.score - a.score);

  // Render top three scores to "Top Scores" section
  const topThreeScores = sortedScores.slice(0, 3);
  const topScoresTarget = document.querySelector('#top-scores-container');
  topScoresTarget.innerHTML = '';

  topThreeScores.forEach((scoreData, index) => {
    // 1. Create vertical bar div
    const bar = document.createElement('div');
    bar.classList.add('top-score');
    // 2. Set class depending on score rank
    if (index === 0) {
      bar.classList.add('top-score__first');
    }
    if (index === 1) {
      bar.classList.add('top-score__second');
    }
    if (index === 2) {
      bar.classList.add('top-score__third');
    }
    // 3. Create rank span
    const rank = document.createElement('span');
    rank.classList.add('top-score__rank');
    rank.innerText = index + 1;
    bar.appendChild(rank);
    // 4. Create name span
    const user = document.createElement('span');
    user.classList.add('top-score__user');
    user.innerText = scoreData.user;
    bar.appendChild(user);
    // 5. Create score span
    const score = document.createElement('span');
    score.classList.add('top-score__score');
    score.innerText = scoreData.score;
    bar.appendChild(score);
    // 4. Add bar to container
    topScoresTarget.appendChild(bar);
  });

  // Render all scrores to "Recent Scores" section
  const scoresTable = document.querySelector('#scores__table');
  scoresTable.innerHTML = '';

  sortedScores.forEach((scoreData, index) => {
    // 1. Create row div
    const row = document.createElement('div');
    row.classList.add('scores__table__row');
    // 2. Create rank span
    const rank = document.createElement('span');
    rank.classList.add('scores__table__row__rank');
    rank.innerText = index + 1;
    row.appendChild(rank);
    // 3. Create name span
    const name = document.createElement('span');
    name.classList.add('scores__table__row__name');
    name.innerText = scoreData.user;
    row.appendChild(name);
    // 4. Create score span
    const score = document.createElement('span');
    score.classList.add('scores__table__row__score');
    score.innerText = scoreData.score;
    // 5. Add name and score to row
    row.appendChild(score);
    // 6. Add row to table
    scoresTable.appendChild(row);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderScores);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_render_scores_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render-scores.js */ "./src/modules/render-scores.js");
/* harmony import */ var _modules_api_requests_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/api-requests.js */ "./src/modules/api-requests.js");
/* harmony import */ var _modules_floating_labels_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/floating-labels.js */ "./src/modules/floating-labels.js");
/* harmony import */ var _modules_floating_labels_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_floating_labels_js__WEBPACK_IMPORTED_MODULE_4__);






const refreshButton = document.querySelector('#scores__refresh-btn');
// Get fresh scores data when 'Refresh' button is clicked
refreshButton.addEventListener('click', () => (0,_modules_render_scores_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
// Get fresh scores data when the page is loaded
window.addEventListener('load', () => (0,_modules_render_scores_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

// Event handler for Add Score form submission
const addScoreForm = document.querySelector('#add-score__form');
addScoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(addScoreForm);
  const user = data.get('user');
  const scoreString = data.get('score');
  const score = parseInt(scoreString, 10);

  try {
    const { success } = await (0,_modules_api_requests_js__WEBPACK_IMPORTED_MODULE_3__.postSingleScore)({ user, score });
    if (success) {
      // TODO: Tell user that the score was saved successfully
      addScoreForm.reset();
    }
  } catch (e) {
    // TODO: Tell user that the score was NOT saved successfully, try again later
  }
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map