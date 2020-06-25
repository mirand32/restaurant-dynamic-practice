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

/***/ "./assets/bar.jpg":
/*!************************!*\
  !*** ./assets/bar.jpg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4306e4fcc686da13d55bcccdfec31f5f.jpg");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/bar.jpg */ "./assets/bar.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\narticle, aside, details, figcaption, figure, footer, header, hgroup, nav, section, summary {\n  display: block;\n}\n\naudio, canvas, video {\n  display: inline-block;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden] {\n  display: none;\n}\n\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\n\na:focus {\n  outline: thin dotted;\n}\n\na:active, a:hover {\n  outline: 0;\n}\n\nh1 {\n  font-size: 2em;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb, strong {\n  font-weight: 700;\n}\n\ndfn {\n  font-style: italic;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\ncode, kbd, pre, samp {\n  font-family: monospace, serif;\n  font-size: 1em;\n}\n\npre {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\nq {\n  quotes: “”‘’;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfieldset {\n  border: 1px solid silver;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nbutton, input, select, textarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n}\n\nbutton, input {\n  line-height: normal;\n}\n\nbutton, html input[type=button], input[type=reset], input[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled], input[disabled] {\n  cursor: default;\n}\n\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody, figure {\n  margin: 0;\n}\n\nlegend, button::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \"\";\n  clear: both;\n  height: 0;\n}\n\n* {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.background {\n  position: fixed;\n  height: 100vh;\n  width: 100%;\n  z-index: -10;\n  background: lightcoral;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") rgba(0, 0, 0, 0.6);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(2px);\n  background-blend-mode: multiply;\n}\n\nh1 {\n  font-size: 50px;\n  text-transform: uppercase;\n  color: #FAFAFA;\n  display: inline-block;\n  align-items: center;\n  font-family: \"Fira Sans\", sans-serif;\n  margin: 0;\n}\n\nnav {\n  max-width: 1000px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 50px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  flex-wrap: wrap;\n}\nnav > * {\n  padding-left: 20px;\n  padding-bottom: 20px;\n}\n\n.nav {\n  list-style-type: none;\n  display: inline-block;\n  display: flex;\n}\n.nav input {\n  opacity: 0;\n  position: absolute;\n}\n.nav--item {\n  font-family: \"Fira Sans\", sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #FAFAFA;\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  background: none;\n  transition: all 0.3s;\n}\n.nav--item:hover {\n  border-bottom: 5px solid #D26723;\n}\n\ninput[type=radio]:checked ~ .nav--item {\n  background: #D26723;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.9);\n}\n\n#content {\n  display: grid;\n  max-width: 1000px;\n  margin: 0 auto;\n  justify-content: space-around;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n}\n\n.menu-item {\n  background: #FAFAFA;\n  border-radius: 5px;\n  box-shadow: 5px 5px 0 black;\n  margin: 0 30px 30px 30px;\n  color: #1e1e24;\n}\n.menu-item > div {\n  padding: 10px;\n  text-align: center;\n}\n.menu-item--img {\n  width: 100%;\n  height: 200px;\n  position: center;\n  border-radius: 5px 5px 0 0;\n}\n.menu-item--name {\n  font-size: 22px;\n}\n.menu-item--price {\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n\n@media screen and (max-width: 600px) and (min-width: 470px) {\n  .nav--item:hover {\n    color: #D26723;\n    border: 0;\n  }\n\n  #content {\n    grid-template-columns: 1fr;\n    grid-auto-rows: 1fr;\n  }\n\n  .menu-item {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .menu-item > div {\n    text-align: left;\n    display: flex;\n    padding: 0 0 0 20px;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .menu-item > div > * {\n    margin: 5px 0;\n  }\n  .menu-item--img {\n    max-height: 200px;\n    height: 100%;\n    border-radius: 0;\n  }\n}\n@media screen and (max-width: 470px) {\n  .nav {\n    flex-direction: column;\n  }\n  .nav--item {\n    padding: 2px;\n    margin-bottom: 0px;\n  }\n  .nav--item:hover {\n    color: #D26723;\n    border: 0;\n  }\n\n  #content {\n    grid-template-columns: auto;\n  }\n\n  .menu-item {\n    max-width: 270px;\n  }\n}", ""]);
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

/***/ "./src/generateMenuItem.js":
/*!*********************************!*\
  !*** ./src/generateMenuItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function generateMenuItem(section){
    let html=""
    section.forEach((item) => {
      html += `
            <div class="menu-item">
                <img class="menu-item--img" src="../assets/${item.img}.jpg" alt="">
                <div>
                    <h3 class="menu-item--name">${item.name}</h3>
                    <p class="menu-item--blurb">${item.description}</p>
                    <h5 class="menu-item--price">$${item.price}</h5>
                </div>

            </div>
        `;
    });
    return html
}

/* harmony default export */ __webpack_exports__["default"] = (generateMenuItem);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _generateMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateMenuItem */ "./src/generateMenuItem.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_2__);
// imports



// create variable for where content is placed
const content=document.querySelector("#content")

// update page on click
function updatePage(){
    // get id of button from navbar
    const id = this.attributes.for.value;
    // use id to find appropriate object of menu items
    const sectionArray=(_menu__WEBPACK_IMPORTED_MODULE_0__["default"][id])
    // set content to newly generated menu items
    content.innerHTML=Object(_generateMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])(sectionArray)
}

content.innerHTML=Object(_generateMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])(_menu__WEBPACK_IMPORTED_MODULE_0__["default"].starters)
// Make nav buttons clickable to generate content
const menuButtons = document.querySelectorAll(".nav--item")
menuButtons.forEach(button=>button.addEventListener("click", updatePage))

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



module.exports = content.locals || {};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menu = {
        "starters": [
            {
                "name": "Wings",
                "price": "10.99",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "img":"wings"
            },
            {
                "name": "Calamari",
                "price": "11.99",
                "description": "Lorem ipsum dolor sit amet, consectetur ",
                "img": "calamari"
            },
            {
                "name": "Nachos",
                "price": "14.99",
                "description": "Lorem ipsum dolor sit amet, consectetur ",
                "img": "nachos"
            }
        ],
        "mains": [
            {
                "name": "Beef Dip",
                "price": "19.65",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "img": "beef-dip"
            },
            {
                "name": "Club Sandwich",
                "price": "22.95",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
                "img": "club-sandwich"
            },
            {
                "name": "Fish & Chips",
                "price": "21.90",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
                "img": "fish-chips"
            },
            {
                "name": "Pasta with Pomme Frites",
                "price": "27.80",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing. Id cursus metus aliquam eleifend.",
                "img": "pasta"
            },
            {
                "name": "Reuben",
                "price": "17.90",
                "description": "Lorem ipsum dolor sit amet, consectetur eleifend.",
                "img": "reuben"
            },
            {
                "name": "Beet Salad",
                "price": "22.80",
                "description": "Lorem unt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend.",
                "img": "salad"
            },
            {
                "name": "Spicy Beef Sausage",
                "price": "18.90",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  eleifend.",
                "img": "sausage"
            },
            {
                "name": "Shrimp Curry",
                "price": "24.10",
                "description": "Lorem ipsum dolor sit labore et dolore magna aliqua. Id cursus metus aliquam eleifend.",
                "img": "shrimp"
            },
            {
                "name": "Alaskan Tuna",
                "price": "27.90",
                "description": "Lorem ipsum dolor sit ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend.",
                "img": "tuna"
            },
            {
                "name": "Tuna Melt",
                "price": "17.90",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Id cursus metus aliquam eleifend.",
                "img": "tuna-melt"
            },
        ],
        "desserts": [
            {
                "name": "Brownie Crumble",
                "price": "12.50",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. Id cursus metus aliquam eleifend.",
                "img": "brownie"
            },
            {
                "name": "Cinnamon Roll",
                "price": "14.30",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing dolore magna aliqua. Id cursus metus aliquam eleifend.",
                "img": "cinnamon-bun"
            },
            {
                "name": "Lemon Meringue Cake",
                "price": "11.00",
                "description": "Lorem ipsum dolor sit amet, consectetur et dolore magna aliqua. Id cursus metus aliquam eleifend.",
                "img": "cupcake"
            }
        ],
        "drinks": [
            {
                "name": "Flavoured Bellini",
                "price": "3.50",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, . Id cursus metus aliquam eleifend.",
                "img": "bellini"
            },
            {
                "name": "Mimosa",
                "price": "5.70",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "img": "mimosa"
            },
            {
                "name": "Moscow Mule",
                "price": "4.40",
                "description": "Lorems metus aliquam eleifend.",
                "img": "moscow-mule"
            },

        ]
}

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ })

/******/ });