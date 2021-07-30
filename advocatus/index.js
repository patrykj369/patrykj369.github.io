/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/bg1.png */ "./src/img/bg1.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml {\n  scroll-behavior: smooth; }\n\nbody {\n  overflow-x: hidden; }\n\n#section-header {\n  width: 100vw; }\n  #section-header header {\n    height: 5rem;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: space-around; }\n    #section-header header h1 {\n      text-transform: uppercase; }\n      #section-header header h1 span {\n        color: #E8BF5D; }\n    #section-header header menu {\n      display: flex;\n      font-family: 'Open Sans', sans-serif;\n      font-size: 1rem; }\n      #section-header header menu li {\n        display: table-cell;\n        position: relative;\n        padding: 15px 0; }\n      #section-header header menu a {\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: 0.08em;\n        color: #000;\n        display: inline-block;\n        padding: 15px 15px;\n        position: relative; }\n      #section-header header menu a:after {\n        background: none repeat scroll 0 0 transparent;\n        bottom: 0;\n        content: \"\";\n        display: block;\n        height: 5px;\n        left: 50%;\n        position: absolute;\n        background: #E8BF5D;\n        transition: width 0.3s ease 0s, left 0.3s ease 0s;\n        width: 0; }\n      #section-header header menu a:hover:after {\n        width: 100%;\n        left: 0; }\n\n#section-photo-slider {\n  height: 92vh;\n  width: 100vw;\n  position: relative; }\n\n.name-surname-button-container {\n  width: 100vw;\n  position: relative; }\n  .name-surname-button-container .slider-text-container {\n    width: 100vw;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    bottom: 10vw;\n    z-index: 1; }\n  .name-surname-button-container .name-surname-container {\n    color: #fff;\n    padding: 0 8rem; }\n    .name-surname-button-container .name-surname-container h1 {\n      font-size: 3.5rem;\n      font-weight: 100; }\n    .name-surname-button-container .name-surname-container p {\n      font-family: \"Open sans\", sans-serif;\n      font-size: 1.4rem; }\n  .name-surname-button-container .name-surname-container::after {\n    content: \"\";\n    display: block;\n    height: 60px;\n    margin-top: -70px;\n    margin-left: -20px;\n    background: #E8BF5D;\n    width: 2px; }\n\n.name-surname-button {\n  padding: 0 8rem; }\n\n.color-test {\n  background-color: black; }\n  .color-test img {\n    opacity: .2;\n    width: 100%;\n    height: 92vh; }\n\n.btn-contact-me {\n  height: 2rem;\n  padding: 1.2rem 2rem;\n  border-radius: 2rem;\n  border: none;\n  display: flex;\n  background-color: #E8BF5D;\n  align-items: center;\n  font-family: serif;\n  font-size: 1rem; }\n\n.btn-contact-me:hover {\n  background-color: #e8be5d9d;\n  cursor: pointer;\n  color: #fff; }\n\n.mySlides {\n  display: none; }\n\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -22px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none; }\n\n.next {\n  right: 15px;\n  border-radius: 3px 3px 3px 3px; }\n\n.prev:hover, .next:hover {\n  background-color: #f1f1f1;\n  color: black; }\n\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1s;\n  animation-name: fade;\n  animation-duration: 1s; }\n\n@-webkit-keyframes fade {\n  from {\n    opacity: .6; }\n  to {\n    opacity: 1; } }\n\n@keyframes fade {\n  from {\n    opacity: .6; }\n  to {\n    opacity: 1; } }\n\n#section-about-us {\n  min-height: 50vh;\n  padding: 4vh 15vw;\n  display: flex;\n  align-items: center; }\n\n.text-section-header {\n  position: relative; }\n  .text-section-header h1 {\n    font-size: 2rem;\n    font-weight: 100;\n    padding: .5rem; }\n  .text-section-header p {\n    font-size: 1rem;\n    font-family: 'Open Sans', sans-serif;\n    padding: .5rem;\n    line-height: 1.5rem; }\n    .text-section-header p span {\n      display: block; }\n\n.text-section-header::after {\n  content: \"\";\n  display: block;\n  height: 6rem;\n  margin-top: -6.5rem;\n  margin-left: -1rem;\n  background: #E8BF5D;\n  width: 2px; }\n\n.text-section-bg-number {\n  position: absolute;\n  bottom: 1.6rem;\n  left: -1rem; }\n  .text-section-bg-number p {\n    font-size: 9rem;\n    color: rgba(10, 10, 10, 0.05); }\n\n#about-us-info {\n  margin-left: -1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 2rem;\n  margin-top: 6vh; }\n\n#about-us-history h1 {\n  font-weight: 100;\n  padding: 1rem 0; }\n\n#about-us-history .about-us-year {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 0;\n  font-family: 'Open sans', sans-serif; }\n  #about-us-history .about-us-year .about-us-year-header {\n    min-width: 6rem; }\n    #about-us-history .about-us-year .about-us-year-header p {\n      font-weight: 600;\n      font-size: 1.4rem; }\n\n#about-us-expertise h1 {\n  font-weight: 100;\n  padding: 1rem 0; }\n\n#about-us-expertise p {\n  line-height: 1.8rem;\n  padding: .5rem 0;\n  font-family: 'Open sans', sans-serif; }\n\n.text-section-bg-number-night-theme P {\n  color: rgba(255, 255, 255, 0.08); }\n\n#section-practis-area {\n  min-height: 50vh;\n  background-color: #111111;\n  color: #fff;\n  padding: 4vh 15vw;\n  display: flex;\n  align-items: center; }\n\n#section-practis-text-container {\n  padding: 3rem 0; }\n\n.practis-text-row {\n  display: flex;\n  position: relative; }\n\n.practis-single-text-area {\n  padding: 1rem 5rem; }\n  .practis-single-text-area h1 {\n    font-weight: 100;\n    padding-bottom: 1rem; }\n  .practis-single-text-area p {\n    font-family: 'Open sans', sans-serif;\n    line-height: 1.8rem; }\n\n.practis-single-text-area::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 2rem;\n  width: 1rem;\n  top: 1.3rem;\n  margin-left: -2rem;\n  border: 2px solid #E8BF5D; }\n\n#section-meet {\n  min-height: 50vh;\n  padding: 4vh 15vw;\n  display: flex;\n  align-items: center; }\n\n#meet-photos-container {\n  padding: 3rem 0;\n  width: 70vw;\n  display: flex;\n  justify-content: space-between; }\n\n.meet-single-person img {\n  width: 15vw; }\n\n.meet-single-person-text {\n  padding: 1rem 0;\n  line-height: 2rem; }\n  .meet-single-person-text h1 {\n    font-weight: 100; }\n  .meet-single-person-text p {\n    font-family: 'Open Sans', sans-serif;\n    font-size: .9rem; }\n\n#section-our-clients {\n  min-height: 50vh;\n  background: linear-gradient(rgba(14, 13, 13, 0.9), rgba(14, 13, 13, 0.9)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n  padding: 4vh 15vw;\n  display: flex;\n  align-items: center; }\n\n.our-clients-container {\n  width: 70vw;\n  padding: 4rem 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 3vw; }\n\n.our-clients-container-photo {\n  position: relative; }\n\n.our-clients-orange-div {\n  width: 23vw;\n  height: 19vw;\n  background-color: #E8BF5D;\n  position: absolute;\n  top: 2vh;\n  left: 2vh; }\n\n.our-clients-img {\n  width: 23vw;\n  height: 19vw;\n  position: relative;\n  z-index: 100; }\n\n.our-clients-container-text {\n  position: relative;\n  padding: 1rem 0;\n  max-width: 40vw; }\n  .our-clients-container-text p {\n    font-family: 'Open sans', sans-serif;\n    line-height: 2rem;\n    font-size: 1rem; }\n  .our-clients-container-text h1 {\n    font-weight: 100;\n    padding: 2rem 0 1rem 0; }\n  .our-clients-container-text span {\n    font-size: 1rem;\n    font-family: \"Open sans\", sans-serif; }\n  .our-clients-container-text .our-clients-quote {\n    position: absolute;\n    left: -4.5vw;\n    top: 2vw;\n    font-family: serif;\n    font-size: 8vw;\n    color: #707070; }\n\n#section-recent-publications {\n  min-height: 50vh;\n  padding: 4vh 15vw;\n  display: flex;\n  align-items: center; }\n\n.recent-publications-container {\n  padding: 5vh 0;\n  width: 70vw;\n  display: flex;\n  justify-content: space-between; }\n\n.recent-publications-single-container {\n  width: 20vw; }\n  .recent-publications-single-container img {\n    width: 20vw; }\n\n.single-publication-text-container {\n  padding: 1rem 0; }\n  .single-publication-text-container h1 {\n    font-weight: 100; }\n\n.single-publication-author-date {\n  display: flex;\n  justify-content: space-between;\n  padding: .8rem 0; }\n  .single-publication-author-date p {\n    font-family: 'Open sans', sans-serif;\n    font-style: italic; }\n\n.single-publication-text-content {\n  font-family: 'Open sans', sans-serif;\n  line-height: 2rem; }\n\n.single-publication-comment-share {\n  display: flex;\n  width: 20vw;\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0; }\n  .single-publication-comment-share img {\n    width: 1rem; }\n  .single-publication-comment-share p {\n    font-size: 1.1rem;\n    font-family: 'Open sans', sans-serif; }\n\n#section-frequently {\n  min-height: 50vh;\n  background-color: #111111;\n  color: #fff;\n  padding: 4vh 15vw;\n  display: flex;\n  align-items: center; }\n\n.section-frequently-container {\n  padding: 2rem 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 3rem; }\n\n.section-frequently-single-question {\n  display: flex;\n  min-height: 2rem;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #E8BF5D;\n  padding: 1.5rem 0 1rem 0; }\n  .section-frequently-single-question img {\n    width: 1.5rem; }\n  .section-frequently-single-question p {\n    font-size: 1rem;\n    font-weight: 600;\n    font-family: 'Open sans', sans-serif; }\n  .section-frequently-single-question p:hover {\n    cursor: pointer; }\n  .section-frequently-single-question p:active {\n    color: #E8BF5D; }\n\n.section-frequently-answer-text {\n  min-height: 100%;\n  width: 100%;\n  background-color: #E8BF5D;\n  color: #000;\n  padding: 3vw;\n  font-family: 'Open sans', sans-serif;\n  line-height: 2rem;\n  letter-spacing: 1px;\n  font-size: 1.3rem; }\n\n#section-contact {\n  min-height: 50vh;\n  padding: 4vh 15vw;\n  display: flex;\n  align-items: center; }\n\n.section-contact-container {\n  margin: 3vw 0 3vw 10vw;\n  padding: 4vw 2vw 4vw 4vw;\n  width: 60vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 2rem;\n  box-shadow: 0 0 1em rgba(10, 10, 10, 0.1); }\n\n.section-contact-form-container form {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .section-contact-form-container form .contact-form-input {\n    width: 100%;\n    padding: .5rem 0;\n    border: none;\n    border-bottom: 1px solid rgba(10, 10, 10, 0.19);\n    font-style: italic;\n    font-size: 1.2rem; }\n\n.inputD {\n  width: 100%; }\n  .inputD p {\n    font-family: \"Open sans\", sans-serif;\n    font-size: .8rem;\n    color: red;\n    font-weight: 600;\n    font-style: italic;\n    opacity: 0; }\n\n#success-form {\n  display: none; }\n  #success-form p {\n    font-family: \"Open sans\", sans-serif;\n    font-size: 1.2rem;\n    color: #E8BF5D; }\n\n.section-contact-map-container {\n  display: flex;\n  justify-content: center; }\n\n.contact-map-container-photo {\n  position: relative; }\n\n.contact-orange-div {\n  width: 23vw;\n  height: 22vw;\n  background-color: #E8BF5D;\n  position: absolute;\n  top: 2vh;\n  left: -2vh; }\n\n.contact-img {\n  width: 23vw;\n  height: 22vw;\n  position: relative;\n  z-index: 100; }\n\n.contact-submit-form {\n  margin-top: 2rem;\n  width: 8rem;\n  height: 2.5rem;\n  border: none;\n  border-radius: 3rem;\n  background-color: #E8BF5D;\n  align-self: start;\n  font-family: serif;\n  font-size: 1rem; }\n\n.contact-submit-form:hover {\n  cursor: pointer; }\n\n#section-footer {\n  min-height: 6vh;\n  background-color: #111111;\n  color: #fff;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center; }\n\n.section-footer-text p {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 1.3rem; }\n\n.section-footer-text .c-text {\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.2rem; }\n\n.section-footer-text .symu-text {\n  color: #fff;\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.2rem; }\n\n.section-footer-images img {\n  height: 1.3rem;\n  margin: 0 .3vw; }\n\n.section-footer-images img:hover {\n  cursor: pointer; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/img/bg1.png":
/*!*************************!*\
  !*** ./src/img/bg1.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fea275a217930c3a7bdd61fc4550caab.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);


const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("name-surname-button-container");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

let slideIndex = 1;
showSlides(slideIndex);

document.querySelector(".next").addEventListener("click", () => plusSlides(1));
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));

//auto slider

const showSlidesAuto = () => {
    var i;
   var slides = document.getElementsByClassName("name-surname-button-container");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlidesAuto, 4000);
}

let slideIndex1 = 0;
showSlidesAuto(slideIndex1);

//walidacja formularza

const errorCallback = () => {
    const name = document.getElementById("inp-name");
    const phone = document.getElementById("inp-phone");
    const mail = document.getElementById("inp-mail");
    const text = document.getElementById("inp-text");


    if(name.value == ""){
        const pName = document.getElementById("pName");
        pName.style.opacity = "1";

    }else{
        const pName = document.getElementById("pName");
        pName.style.opacity = "0";

    }

    if(phone.value == ""){
        const pEmail = document.getElementById("pPhone");
        pEmail.style.opacity = "1";

    }else{
        const pEmail = document.getElementById("pPhone");
        pEmail.style.opacity = "0";

    }

    const mailik = mail.value.toString();

    if(mail.value == "" || !mailik.includes("@")){
        const pEmail = document.getElementById("pEmail");
        pEmail.style.opacity = "1";

    }else{
        const pEmail = document.getElementById("pEmail");
        pEmail.style.opacity = "0";

    }

    if(text.value == ""){
        const pMessage= document.getElementById("pMessage");
        pMessage.style.opacity = "1";
    }else{
        const pMessage= document.getElementById("pMessage");
        pMessage.style.opacity = "0";

    }

    if(mail.value == "" || !mailik.includes("@") || name.value == "" || phone.value == "" || text.value == ""){
        return false;
    }else{
        return true;
    }

}

document.getElementById("btn-submit").addEventListener("click", function(e){
    let succes = errorCallback();

    if(succes){
        e.preventDefault();

        const name = document.getElementById("inp-name");
        const phone = document.getElementById("inp-phone");
        const mail = document.getElementById("inp-mail");
        const text = document.getElementById("inp-text");

        name.value = "";
        phone.value  = "";
        mail.value   = "";
        text.value   = "";

        const textP = document.getElementById("success-form");
        textP.style.display = "block";
    }
    else{
        e.preventDefault();
    }
  });

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmcxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2Nzcz80ZTUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtB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O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRTs7Ozs7Ozs7Ozs7QUN6SEgsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxpTUFBOEY7O0FBRWhJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vaW1nL2JnMS5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyB9XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG5cXG4jc2VjdGlvbi1oZWFkZXIge1xcbiAgd2lkdGg6IDEwMHZ3OyB9XFxuICAjc2VjdGlvbi1oZWFkZXIgaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuICAgICNzZWN0aW9uLWhlYWRlciBoZWFkZXIgaDEge1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG4gICAgICAjc2VjdGlvbi1oZWFkZXIgaGVhZGVyIGgxIHNwYW4ge1xcbiAgICAgICAgY29sb3I6ICNFOEJGNUQ7IH1cXG4gICAgI3NlY3Rpb24taGVhZGVyIGhlYWRlciBtZW51IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgICBmb250LXNpemU6IDFyZW07IH1cXG4gICAgICAjc2VjdGlvbi1oZWFkZXIgaGVhZGVyIG1lbnUgbGkge1xcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDsgfVxcbiAgICAgICNzZWN0aW9uLWhlYWRlciBoZWFkZXIgbWVudSBhIHtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xcbiAgICAgICAgY29sb3I6ICMwMDA7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICAjc2VjdGlvbi1oZWFkZXIgaGVhZGVyIG1lbnUgYTphZnRlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYmFja2dyb3VuZDogI0U4QkY1RDtcXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XFxuICAgICAgICB3aWR0aDogMDsgfVxcbiAgICAgICNzZWN0aW9uLWhlYWRlciBoZWFkZXIgbWVudSBhOmhvdmVyOmFmdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbGVmdDogMDsgfVxcblxcbiNzZWN0aW9uLXBob3RvLXNsaWRlciB7XFxuICBoZWlnaHQ6IDkydmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ubmFtZS1zdXJuYW1lLWJ1dHRvbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAubmFtZS1zdXJuYW1lLWJ1dHRvbi1jb250YWluZXIgLnNsaWRlci10ZXh0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm90dG9tOiAxMHZ3O1xcbiAgICB6LWluZGV4OiAxOyB9XFxuICAubmFtZS1zdXJuYW1lLWJ1dHRvbi1jb250YWluZXIgLm5hbWUtc3VybmFtZS1jb250YWluZXIge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMCA4cmVtOyB9XFxuICAgIC5uYW1lLXN1cm5hbWUtYnV0dG9uLWNvbnRhaW5lciAubmFtZS1zdXJuYW1lLWNvbnRhaW5lciBoMSB7XFxuICAgICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDsgfVxcbiAgICAubmFtZS1zdXJuYW1lLWJ1dHRvbi1jb250YWluZXIgLm5hbWUtc3VybmFtZS1jb250YWluZXIgcCB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIHNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtOyB9XFxuICAubmFtZS1zdXJuYW1lLWJ1dHRvbi1jb250YWluZXIgLm5hbWUtc3VybmFtZS1jb250YWluZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbi10b3A6IC03MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNFOEJGNUQ7XFxuICAgIHdpZHRoOiAycHg7IH1cXG5cXG4ubmFtZS1zdXJuYW1lLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwIDhyZW07IH1cXG5cXG4uY29sb3ItdGVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgfVxcbiAgLmNvbG9yLXRlc3QgaW1nIHtcXG4gICAgb3BhY2l0eTogLjI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDkydmg7IH1cXG5cXG4uYnRuLWNvbnRhY3QtbWUge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgcGFkZGluZzogMS4ycmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEJGNUQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtOyB9XFxuXFxuLmJ0bi1jb250YWN0LW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGJlNWQ5ZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLm15U2xpZGVzIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ucHJldiwgLm5leHQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogYXV0bztcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAtMjJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcblxcbi5uZXh0IHtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4OyB9XFxuXFxuLnByZXY6aG92ZXIsIC5uZXh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBjb2xvcjogYmxhY2s7IH1cXG5cXG4uZmFkZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IC42OyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogLjY7IH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuI3NlY3Rpb24tYWJvdXQtdXMge1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIHBhZGRpbmc6IDR2aCAxNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1zZWN0aW9uLWhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC50ZXh0LXNlY3Rpb24taGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBwYWRkaW5nOiAuNXJlbTsgfVxcbiAgLnRleHQtc2VjdGlvbi1oZWFkZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTsgfVxcbiAgICAudGV4dC1zZWN0aW9uLWhlYWRlciBwIHNwYW4ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnRleHQtc2VjdGlvbi1oZWFkZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDZyZW07XFxuICBtYXJnaW4tdG9wOiAtNi41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xcbiAgYmFja2dyb3VuZDogI0U4QkY1RDtcXG4gIHdpZHRoOiAycHg7IH1cXG5cXG4udGV4dC1zZWN0aW9uLWJnLW51bWJlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEuNnJlbTtcXG4gIGxlZnQ6IC0xcmVtOyB9XFxuICAudGV4dC1zZWN0aW9uLWJnLW51bWJlciBwIHtcXG4gICAgZm9udC1zaXplOiA5cmVtO1xcbiAgICBjb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjA1KTsgfVxcblxcbiNhYm91dC11cy1pbmZvIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogNnZoOyB9XFxuXFxuI2Fib3V0LXVzLWhpc3RvcnkgaDEge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIHBhZGRpbmc6IDFyZW0gMDsgfVxcblxcbiNhYm91dC11cy1oaXN0b3J5IC5hYm91dC11cy15ZWFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBmb250LWZhbWlseTogJ09wZW4gc2FucycsIHNhbnMtc2VyaWY7IH1cXG4gICNhYm91dC11cy1oaXN0b3J5IC5hYm91dC11cy15ZWFyIC5hYm91dC11cy15ZWFyLWhlYWRlciB7XFxuICAgIG1pbi13aWR0aDogNnJlbTsgfVxcbiAgICAjYWJvdXQtdXMtaGlzdG9yeSAuYWJvdXQtdXMteWVhciAuYWJvdXQtdXMteWVhci1oZWFkZXIgcCB7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICBmb250LXNpemU6IDEuNHJlbTsgfVxcblxcbiNhYm91dC11cy1leHBlcnRpc2UgaDEge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIHBhZGRpbmc6IDFyZW0gMDsgfVxcblxcbiNhYm91dC11cy1leHBlcnRpc2UgcCB7XFxuICBsaW5lLWhlaWdodDogMS44cmVtO1xcbiAgcGFkZGluZzogLjVyZW0gMDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjsgfVxcblxcbi50ZXh0LXNlY3Rpb24tYmctbnVtYmVyLW5pZ2h0LXRoZW1lIFAge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7IH1cXG5cXG4jc2VjdGlvbi1wcmFjdGlzLWFyZWEge1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDR2aCAxNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4jc2VjdGlvbi1wcmFjdGlzLXRleHQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDNyZW0gMDsgfVxcblxcbi5wcmFjdGlzLXRleHQtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucHJhY3Rpcy1zaW5nbGUtdGV4dC1hcmVhIHtcXG4gIHBhZGRpbmc6IDFyZW0gNXJlbTsgfVxcbiAgLnByYWN0aXMtc2luZ2xlLXRleHQtYXJlYSBoMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOyB9XFxuICAucHJhY3Rpcy1zaW5nbGUtdGV4dC1hcmVhIHAge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gc2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07IH1cXG5cXG4ucHJhY3Rpcy1zaW5nbGUtdGV4dC1hcmVhOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDFyZW07XFxuICB0b3A6IDEuM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNFOEJGNUQ7IH1cXG5cXG4jc2VjdGlvbi1tZWV0IHtcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICBwYWRkaW5nOiA0dmggMTV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuI21lZXQtcGhvdG9zLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAzcmVtIDA7XFxuICB3aWR0aDogNzB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4ubWVldC1zaW5nbGUtcGVyc29uIGltZyB7XFxuICB3aWR0aDogMTV2dzsgfVxcblxcbi5tZWV0LXNpbmdsZS1wZXJzb24tdGV4dCB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBsaW5lLWhlaWdodDogMnJlbTsgfVxcbiAgLm1lZXQtc2luZ2xlLXBlcnNvbi10ZXh0IGgxIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDsgfVxcbiAgLm1lZXQtc2luZ2xlLXBlcnNvbi10ZXh0IHAge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07IH1cXG5cXG4jc2VjdGlvbi1vdXItY2xpZW50cyB7XFxuICBtaW4taGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTQsIDEzLCAxMywgMC45KSwgcmdiYSgxNCwgMTMsIDEzLCAwLjkpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDR2aCAxNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ub3VyLWNsaWVudHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgcGFkZGluZzogNHJlbSAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDN2dzsgfVxcblxcbi5vdXItY2xpZW50cy1jb250YWluZXItcGhvdG8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLm91ci1jbGllbnRzLW9yYW5nZS1kaXYge1xcbiAgd2lkdGg6IDIzdnc7XFxuICBoZWlnaHQ6IDE5dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThCRjVEO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAydmg7XFxuICBsZWZ0OiAydmg7IH1cXG5cXG4ub3VyLWNsaWVudHMtaW1nIHtcXG4gIHdpZHRoOiAyM3Z3O1xcbiAgaGVpZ2h0OiAxOXZ3O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXFxuLm91ci1jbGllbnRzLWNvbnRhaW5lci10ZXh0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIG1heC13aWR0aDogNDB2dzsgfVxcbiAgLm91ci1jbGllbnRzLWNvbnRhaW5lci10ZXh0IHAge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gc2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07IH1cXG4gIC5vdXItY2xpZW50cy1jb250YWluZXItdGV4dCBoMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHBhZGRpbmc6IDJyZW0gMCAxcmVtIDA7IH1cXG4gIC5vdXItY2xpZW50cy1jb250YWluZXItdGV4dCBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gc2Fuc1xcXCIsIHNhbnMtc2VyaWY7IH1cXG4gIC5vdXItY2xpZW50cy1jb250YWluZXItdGV4dCAub3VyLWNsaWVudHMtcXVvdGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC00LjV2dztcXG4gICAgdG9wOiAydnc7XFxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG4gICAgZm9udC1zaXplOiA4dnc7XFxuICAgIGNvbG9yOiAjNzA3MDcwOyB9XFxuXFxuI3NlY3Rpb24tcmVjZW50LXB1YmxpY2F0aW9ucyB7XFxuICBtaW4taGVpZ2h0OiA1MHZoO1xcbiAgcGFkZGluZzogNHZoIDE1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5yZWNlbnQtcHVibGljYXRpb25zLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA1dmggMDtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5yZWNlbnQtcHVibGljYXRpb25zLXNpbmdsZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDIwdnc7IH1cXG4gIC5yZWNlbnQtcHVibGljYXRpb25zLXNpbmdsZS1jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDIwdnc7IH1cXG5cXG4uc2luZ2xlLXB1YmxpY2F0aW9uLXRleHQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDsgfVxcbiAgLnNpbmdsZS1wdWJsaWNhdGlvbi10ZXh0LWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7IH1cXG5cXG4uc2luZ2xlLXB1YmxpY2F0aW9uLWF1dGhvci1kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAuOHJlbSAwOyB9XFxuICAuc2luZ2xlLXB1YmxpY2F0aW9uLWF1dGhvci1kYXRlIHAge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gc2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi5zaW5nbGUtcHVibGljYXRpb24tdGV4dC1jb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtOyB9XFxuXFxuLnNpbmdsZS1wdWJsaWNhdGlvbi1jb21tZW50LXNoYXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtIDA7IH1cXG4gIC5zaW5nbGUtcHVibGljYXRpb24tY29tbWVudC1zaGFyZSBpbWcge1xcbiAgICB3aWR0aDogMXJlbTsgfVxcbiAgLnNpbmdsZS1wdWJsaWNhdGlvbi1jb21tZW50LXNoYXJlIHAge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmOyB9XFxuXFxuI3NlY3Rpb24tZnJlcXVlbnRseSB7XFxuICBtaW4taGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogNHZoIDE1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5zZWN0aW9uLWZyZXF1ZW50bHktY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAzcmVtOyB9XFxuXFxuLnNlY3Rpb24tZnJlcXVlbnRseS1zaW5nbGUtcXVlc3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEJGNUQ7XFxuICBwYWRkaW5nOiAxLjVyZW0gMCAxcmVtIDA7IH1cXG4gIC5zZWN0aW9uLWZyZXF1ZW50bHktc2luZ2xlLXF1ZXN0aW9uIGltZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07IH1cXG4gIC5zZWN0aW9uLWZyZXF1ZW50bHktc2luZ2xlLXF1ZXN0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjsgfVxcbiAgLnNlY3Rpb24tZnJlcXVlbnRseS1zaW5nbGUtcXVlc3Rpb24gcDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLnNlY3Rpb24tZnJlcXVlbnRseS1zaW5nbGUtcXVlc3Rpb24gcDphY3RpdmUge1xcbiAgICBjb2xvcjogI0U4QkY1RDsgfVxcblxcbi5zZWN0aW9uLWZyZXF1ZW50bHktYW5zd2VyLXRleHQge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4QkY1RDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogM3Z3O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07IH1cXG5cXG4jc2VjdGlvbi1jb250YWN0IHtcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICBwYWRkaW5nOiA0dmggMTV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnNlY3Rpb24tY29udGFjdC1jb250YWluZXIge1xcbiAgbWFyZ2luOiAzdncgMCAzdncgMTB2dztcXG4gIHBhZGRpbmc6IDR2dyAydncgNHZ3IDR2dztcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxuICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMTAsIDEwLCAxMCwgMC4xKTsgfVxcblxcbi5zZWN0aW9uLWNvbnRhY3QtZm9ybS1jb250YWluZXIgZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLnNlY3Rpb24tY29udGFjdC1mb3JtLWNvbnRhaW5lciBmb3JtIC5jb250YWN0LWZvcm0taW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMCwgMTAsIDEwLCAwLjE5KTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTsgfVxcblxcbi5pbnB1dEQge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5pbnB1dEQgcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBzYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuXFxuI3N1Y2Nlc3MtZm9ybSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuICAjc3VjY2Vzcy1mb3JtIHAge1xcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gc2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogI0U4QkY1RDsgfVxcblxcbi5zZWN0aW9uLWNvbnRhY3QtbWFwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uY29udGFjdC1tYXAtY29udGFpbmVyLXBob3RvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5jb250YWN0LW9yYW5nZS1kaXYge1xcbiAgd2lkdGg6IDIzdnc7XFxuICBoZWlnaHQ6IDIydnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThCRjVEO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAydmg7XFxuICBsZWZ0OiAtMnZoOyB9XFxuXFxuLmNvbnRhY3QtaW1nIHtcXG4gIHdpZHRoOiAyM3Z3O1xcbiAgaGVpZ2h0OiAyMnZ3O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXFxuLmNvbnRhY3Qtc3VibWl0LWZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4QkY1RDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtOyB9XFxuXFxuLmNvbnRhY3Qtc3VibWl0LWZvcm06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuI3NlY3Rpb24tZm9vdGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDZ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uc2VjdGlvbi1mb290ZXItdGV4dCBwIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICBmb250LXNpemU6IDEuM3JlbTsgfVxcblxcbi5zZWN0aW9uLWZvb3Rlci10ZXh0IC5jLXRleHQge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJyZW07IH1cXG5cXG4uc2VjdGlvbi1mb290ZXItdGV4dCAuc3ltdS10ZXh0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJyZW07IH1cXG5cXG4uc2VjdGlvbi1mb290ZXItaW1hZ2VzIGltZyB7XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG4gIG1hcmdpbjogMCAuM3Z3OyB9XFxuXFxuLnNlY3Rpb24tZm9vdGVyLWltYWdlcyBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmZWEyNzVhMjE3OTMwYzNhN2JkZDYxZmM0NTUwY2FhYi5wbmdcIjsiLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcclxuXHJcbmNvbnN0IHNob3dTbGlkZXMgPSAobikgPT4ge1xyXG4gICAgbGV0IGk7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmFtZS1zdXJuYW1lLWJ1dHRvbi1jb250YWluZXJcIik7XHJcbiAgICBpZiAobiA+IHNsaWRlcy5sZW5ndGgpIHsgc2xpZGVJbmRleCA9IDEgfVxyXG4gICAgaWYgKG4gPCAxKSB7IHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoIH1cclxuICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufVxyXG5cclxuY29uc3QgcGx1c1NsaWRlcyA9IChuKSA9PiB7XHJcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gbik7XHJcbn1cclxuXHJcbmxldCBzbGlkZUluZGV4ID0gMTtcclxuc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcGx1c1NsaWRlcygxKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcGx1c1NsaWRlcygtMSkpO1xyXG5cclxuLy9hdXRvIHNsaWRlclxyXG5cclxuY29uc3Qgc2hvd1NsaWRlc0F1dG8gPSAoKSA9PiB7XHJcbiAgICB2YXIgaTtcclxuICAgdmFyIHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYW1lLXN1cm5hbWUtYnV0dG9uLWNvbnRhaW5lclwiKTtcclxuICAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgfVxyXG4gICBzbGlkZUluZGV4Kys7XHJcbiAgIGlmIChzbGlkZUluZGV4ID4gc2xpZGVzLmxlbmd0aCkgeyBzbGlkZUluZGV4ID0gMSB9XHJcbiAgIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgc2V0VGltZW91dChzaG93U2xpZGVzQXV0bywgNDAwMCk7XHJcbn1cclxuXHJcbmxldCBzbGlkZUluZGV4MSA9IDA7XHJcbnNob3dTbGlkZXNBdXRvKHNsaWRlSW5kZXgxKTtcclxuXHJcbi8vd2FsaWRhY2phIGZvcm11bGFyemFcclxuXHJcbmNvbnN0IGVycm9yQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnAtbmFtZVwiKTtcclxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnAtcGhvbmVcIik7XHJcbiAgICBjb25zdCBtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnAtbWFpbFwiKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucC10ZXh0XCIpO1xyXG5cclxuXHJcbiAgICBpZihuYW1lLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgIGNvbnN0IHBOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwTmFtZVwiKTtcclxuICAgICAgICBwTmFtZS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgcE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBOYW1lXCIpO1xyXG4gICAgICAgIHBOYW1lLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYocGhvbmUudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgY29uc3QgcEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwUGhvbmVcIik7XHJcbiAgICAgICAgcEVtYWlsLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBwRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBQaG9uZVwiKTtcclxuICAgICAgICBwRW1haWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWlsaWsgPSBtYWlsLnZhbHVlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgaWYobWFpbC52YWx1ZSA9PSBcIlwiIHx8ICFtYWlsaWsuaW5jbHVkZXMoXCJAXCIpKXtcclxuICAgICAgICBjb25zdCBwRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBFbWFpbFwiKTtcclxuICAgICAgICBwRW1haWwuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHBFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicEVtYWlsXCIpO1xyXG4gICAgICAgIHBFbWFpbC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRleHQudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgY29uc3QgcE1lc3NhZ2U9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicE1lc3NhZ2VcIik7XHJcbiAgICAgICAgcE1lc3NhZ2Uuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgcE1lc3NhZ2U9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicE1lc3NhZ2VcIik7XHJcbiAgICAgICAgcE1lc3NhZ2Uuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZihtYWlsLnZhbHVlID09IFwiXCIgfHwgIW1haWxpay5pbmNsdWRlcyhcIkBcIikgfHwgbmFtZS52YWx1ZSA9PSBcIlwiIHx8IHBob25lLnZhbHVlID09IFwiXCIgfHwgdGV4dC52YWx1ZSA9PSBcIlwiKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBsZXQgc3VjY2VzID0gZXJyb3JDYWxsYmFjaygpO1xyXG5cclxuICAgIGlmKHN1Y2Nlcyl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnAtbmFtZVwiKTtcclxuICAgICAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wLXBob25lXCIpO1xyXG4gICAgICAgIGNvbnN0IG1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucC1tYWlsXCIpO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucC10ZXh0XCIpO1xyXG5cclxuICAgICAgICBuYW1lLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBwaG9uZS52YWx1ZSAgPSBcIlwiO1xyXG4gICAgICAgIG1haWwudmFsdWUgICA9IFwiXCI7XHJcbiAgICAgICAgdGV4dC52YWx1ZSAgID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dFAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Y2Nlc3MtZm9ybVwiKTtcclxuICAgICAgICB0ZXh0UC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfSk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==