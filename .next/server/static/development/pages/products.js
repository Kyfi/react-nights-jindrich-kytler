module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_pages_ProductList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/ProductList */ "./src/pages/ProductList/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_src_pages_ProductList__WEBPACK_IMPORTED_MODULE_0__["ProductList"]);

/***/ }),

/***/ "./src/api/apiClient.js":
/*!******************************!*\
  !*** ./src/api/apiClient.js ***!
  \******************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/urls */ "./src/constants/urls.js");
/* harmony import */ var _getGuestToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getGuestToken */ "./src/api/getGuestToken.js");
/* harmony import */ var _customers_refreshCustomerToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/refreshCustomerToken */ "./src/api/customers/refreshCustomerToken.js");
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/token */ "./src/utils/token.js");
/* harmony import */ var _utils_refreshToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/refreshToken */ "./src/utils/refreshToken.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_is_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/is-browser */ "./src/utils/is-browser.js");
/* harmony import */ var _utils_is_browser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_is_browser__WEBPACK_IMPORTED_MODULE_11__);




/* eslint-disable no-constant-condition */

/* eslint-disable no-await-in-loop */











var makeRequest = function makeRequest(url, options, token) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["server"], "/api/skus?include=prices"), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: "Bearer ".concat(token)
    }
  }, options));
};

var api =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, options) {
    var token, response, refreshToken;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = Object(_utils_token__WEBPACK_IMPORTED_MODULE_7__["getToken"])();

            if (_context.t0) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return Object(_getGuestToken__WEBPACK_IMPORTED_MODULE_5__["getGuestToken"])();

          case 4:
            _context.t0 = _context.sent;

          case 5:
            token = _context.t0;
            console.log("TOKEN", token);
            _context.prev = 7;
            _context.next = 10;
            return makeRequest(url, options, token);

          case 10:
            response = _context.sent;

            if (!(response && response.status === 401)) {
              _context.next = 25;
              break;
            }

            refreshToken = Object(_utils_refreshToken__WEBPACK_IMPORTED_MODULE_8__["getRefreshToken"])(); // If we have a refresh token this means we have logged in user
            // and we need to refresh access token

            if (!refreshToken) {
              _context.next = 19;
              break;
            }

            _context.next = 16;
            return Object(_customers_refreshCustomerToken__WEBPACK_IMPORTED_MODULE_6__["refreshCustomerToken"])();

          case 16:
            token = _context.sent;
            _context.next = 22;
            break;

          case 19:
            _context.next = 21;
            return Object(_getGuestToken__WEBPACK_IMPORTED_MODULE_5__["getGuestToken"])();

          case 21:
            token = _context.sent;

          case 22:
            _context.next = 24;
            return makeRequest(url, options, token);

          case 24:
            response = _context.sent;

          case 25:
            // Here is a place to handle special cases
            // CASE: second 401 we need to logout
            if (response && response.status === 401) {
              Object(_utils_is_browser__WEBPACK_IMPORTED_MODULE_11__["isBrowser"])() && window.location.assign(_constants_urls__WEBPACK_IMPORTED_MODULE_4__["default"].logout);
            } // If everything went fine just return the result


            return _context.abrupt("return", response.json());

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](7);
            // Place to handle global api errors
            react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].error('Internet connection lost.. :(');
            throw _context.t1;

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[7, 29]]);
  }));

  return function api(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/api/customers/refreshCustomerToken.js":
/*!***************************************************!*\
  !*** ./src/api/customers/refreshCustomerToken.js ***!
  \***************************************************/
/*! exports provided: refreshCustomerToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshCustomerToken", function() { return refreshCustomerToken; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_refreshToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/refreshToken */ "./src/utils/refreshToken.js");
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/token */ "./src/utils/token.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/config.js");







var refreshCustomerToken =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var refreshToken, token, response, _ref2, refresh_token, access_token;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            refreshToken = Object(_utils_refreshToken__WEBPACK_IMPORTED_MODULE_3__["getRefreshToken"])();
            token = Object(_utils_token__WEBPACK_IMPORTED_MODULE_4__["getToken"])();
            _context.next = 4;
            return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["default"].apiUrl, "/oauth/token"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                client_id: _config__WEBPACK_IMPORTED_MODULE_5__["default"].clientId,
                client_secret: _config__WEBPACK_IMPORTED_MODULE_5__["default"].clientSecret
              })
            });

          case 4:
            response = _context.sent;
            _context.t0 = response.status;
            _context.next = _context.t0 === 200 ? 8 : 16;
            break;

          case 8:
            _context.next = 10;
            return response.json();

          case 10:
            _ref2 = _context.sent;
            refresh_token = _ref2.refresh_token;
            access_token = _ref2.access_token;
            Object(_utils_token__WEBPACK_IMPORTED_MODULE_4__["setToken"])(access_token);
            Object(_utils_refreshToken__WEBPACK_IMPORTED_MODULE_3__["setRefreshToken"])(refresh_token);
            return _context.abrupt("return", access_token);

          case 16:
            throw new Error('Cannot refresh customer token');

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function refreshCustomerToken() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/api/getGuestToken.js":
/*!**********************************!*\
  !*** ./src/api/getGuestToken.js ***!
  \**********************************/
/*! exports provided: getGuestToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGuestToken", function() { return getGuestToken; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/token */ "./src/utils/token.js");






var getGuestToken =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response, _ref2, access_token;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["server"], "/oauth/token"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                grant_type: 'client_credentials',
                client_id: _config__WEBPACK_IMPORTED_MODULE_3__["default"].clientId,
                scope: _config__WEBPACK_IMPORTED_MODULE_3__["default"].scope
              })
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            _ref2 = _context.sent;
            access_token = _ref2.access_token;
            Object(_utils_token__WEBPACK_IMPORTED_MODULE_4__["setToken"])(access_token);
            return _context.abrupt("return", access_token);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getGuestToken() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/api/products/getProducts.js":
/*!*****************************************!*\
  !*** ./src/api/products/getProducts.js ***!
  \*****************************************/
/*! exports provided: getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../apiClient */ "./src/api/apiClient.js");
/* harmony import */ var _utils_formatProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/formatProduct */ "./src/api/utils/formatProduct.js");





var getProducts =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(urlQuery) {
    var _ref2, data, meta, included;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_apiClient__WEBPACK_IMPORTED_MODULE_3__["api"])("/api/skus?include=prices");

          case 2:
            _ref2 = _context.sent;
            data = _ref2.data;
            meta = _ref2.meta;
            included = _ref2.included;
            console.log(data);
            return _context.abrupt("return", {
              data: data.map(function (product) {
                return Object(_utils_formatProduct__WEBPACK_IMPORTED_MODULE_4__["formatProduct"])(product, included);
              }),
              meta: meta
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getProducts(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/api/utils/formatProduct.js":
/*!****************************************!*\
  !*** ./src/api/utils/formatProduct.js ***!
  \****************************************/
/*! exports provided: formatProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatProduct", function() { return formatProduct; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var formatProduct = function formatProduct(data, included) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: data.id
  }, data.attributes, {
    price: included.find(function (price) {
      return price.id === data.relationships.prices.data[0].id;
    }).attributes
  });
};

/***/ }),

/***/ "./src/common/theme.js":
/*!*****************************!*\
  !*** ./src/common/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var theme = {
  color: {
    black: '#252522',
    grayDark: '#607d8b',
    gray: '#e5e5e5',
    softGray: '#f9f9f9',
    white: '#fff',
    primary: '#f8cb00',
    purple: '#6364d9',
    purpleLight: 'rgba(99, 100, 217, 0.2)',
    red: '#ef0d33'
  },
  radius: {
    basic: '5px'
  },
  shadow: {
    basic: '0 0 5rem -1.3rem rgb(150, 150, 150)',
    secondary: '0 0 10rem -1.3rem rgb(0, 0, 0)'
  },
  fontSize: {
    small: '1.2rem',
    normal: '1.4rem',
    medium: '1.6rem',
    large: '1.8rem',
    xLarge: '2rem',
    xxLarge: '2.4rem'
  },
  space: ['0rem', '2rem', '4rem', '8rem', '16rem', '32rem'],
  breakPoint: {
    xs: '600px',
    sm: '900px',
    md: '1200px',
    lg: '1800px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/components/Button/styled.js");





var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      onClick = _ref.onClick,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "type", "onClick"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    onClick: onClick
  }, props), children);
};



/***/ }),

/***/ "./src/components/Button/styled.js":
/*!*****************************************!*\
  !*** ./src/components/Button/styled.js ***!
  \*****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/theme */ "./src/common/theme.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      background: transparent;\n      color: ", ";\n      border-color: transparent;\n\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  padding: 1rem;\n  margin-top: 0.5rem;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n  transition: all 0.3s;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background: transparent;\n    color: ", ";\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject(), _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.red, _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.red, _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].radius.basic, _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.white, _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.red, function (props) {
  return props.default && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.grayDark, _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.grayDark, _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.white);
});

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/components/Header/styled.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/urls */ "./src/constants/urls.js");





var Header = function Header(_ref) {
  var isAuthenticated = _ref.isAuthenticated;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["NavLeft"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].index
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'Product List'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["NavRight"], null, isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].myAccount
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'My Account')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].logout
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'Logout'))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].signIn
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'Sign In')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].signUp
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'Sign Up'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].cart
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'My Cart')))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/styled.js":
/*!*****************************************!*\
  !*** ./src/components/Header/styled.js ***!
  \*****************************************/
/*! exports provided: Wrapper, Nav, NavLeft, NavRight, StyledLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLeft", function() { return NavLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRight", function() { return NavRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/theme */ "./src/common/theme.js");


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Wrapper",
  componentId: "sc-1m0bsgy-0"
})(["position:relative;z-index:1;"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "styled__Nav",
  componentId: "sc-1m0bsgy-1"
})(["background:white;display:flex;justify-content:space-between;box-shadow:", ";"], _common_theme__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.basic);
var NavLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__NavLeft",
  componentId: "sc-1m0bsgy-2"
})(["display:flex;"]);
var NavRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__NavRight",
  componentId: "sc-1m0bsgy-3"
})(["display:flex;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-1m0bsgy-4"
})(["text-decoration:none;color:", ";background-color:", ";padding:20px;border:0;border-right:1px solid lightgrey;white-space:nowrap;font-weight:300;&:hover{color:", ";}"], _common_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.black, _common_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.white, _common_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.purple);

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/components/Layout/styled.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");






var Layout = function Layout(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
      children = _ref.children,
      dataTestId = _ref.dataTestId;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isAuthenticated: isAuthenticated
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    "data-testid": dataTestId
  }, children));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(state.customer).length !== 0
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Layout));

/***/ }),

/***/ "./src/components/Layout/styled.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/styled.js ***!
  \*****************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Layout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "./src/components/Loader/index.js":
/*!****************************************!*\
  !*** ./src/components/Loader/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/components/Loader/styled.js");




var Loader = function Loader(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["LoaderWrap"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-testid": "loader"
  }, props), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLoader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Circular"], {
    viewBox: "25 25 50 50"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Path"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    strokeWidth: "4",
    strokeMiterlimit: "10"
  }, props)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/Loader/styled.js":
/*!*****************************************!*\
  !*** ./src/components/Loader/styled.js ***!
  \*****************************************/
/*! exports provided: LoaderWrap, StyledLoader, Circular, Path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderWrap", function() { return LoaderWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLoader", function() { return StyledLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circular", function() { return Circular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/theme */ "./src/common/theme.js");


function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  stroke: ", ";\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  animation: ", " 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: ", " 2s linear infinite;\n  height: 100%;\n  transform-origin: center center;\n  width: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 5rem;\n  height: 5rem;\n  margin: 0 auto;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      position: fixed;\n      top: 58px;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: rgba(255, 255, 255, 0.6);\n      z-index: 2;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      transform: scale(0.5);\n      width: 5rem;\n      height: 5rem;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      padding: 5rem 0;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  padding: 5rem 0;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -3.5rem;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -12.4rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var dash = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject2());
var LoaderWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), function (props) {
  return !props.small && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4());
}, function (props) {
  return props.small && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5());
}, function (props) {
  return props.centered && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6());
});
var StyledLoader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7());
var Circular = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg(_templateObject8(), rotate);
var Path = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.circle(_templateObject9(), function (props) {
  return props.white ? _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.white : _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.red;
}, dash);


/***/ }),

/***/ "./src/components/PageSize/index.js":
/*!******************************************!*\
  !*** ./src/components/PageSize/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/urls */ "./src/constants/urls.js");
/* harmony import */ var _constants_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/base */ "./src/constants/base.js");




var PageSize = function PageSize(_ref) {
  var page = _ref.page,
      pageSize = _ref.pageSize,
      recordCount = _ref.recordCount,
      onSizeChange = _ref.onSizeChange,
      value = _ref.value;

  var handleChange = function handleChange(event) {
    var newValue = event.target.value;

    if (newValue !== value) {
      onSizeChange(newValue);
    }
  };

  var from = page === 1 ? 1 : (page - 1) * pageSize + 1;
  var isPageSizeBiggerThanCountOfRecords = pageSize * page > recordCount ? recordCount : pageSize * page;
  var to = page === 1 ? pageSize : isPageSizeBiggerThanCountOfRecords;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Product ".concat(from, " to ").concat(to, " of ").concat(recordCount, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: handleChange,
    onBlur: handleChange,
    defaultValue: pageSize,
    value: value
  }, _constants_base__WEBPACK_IMPORTED_MODULE_2__["PAGE_SIZE_OPTIONS"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: item,
      value: item
    }, item);
  })), ' per page');
};

/* harmony default export */ __webpack_exports__["default"] = (PageSize);

/***/ }),

/***/ "./src/components/Pagination/index.js":
/*!********************************************!*\
  !*** ./src/components/Pagination/index.js ***!
  \********************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda_src_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda/src/range */ "ramda/src/range");
/* harmony import */ var ramda_src_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda_src_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ramda_src_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda/src/map */ "ramda/src/map");
/* harmony import */ var ramda_src_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ramda_src_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/urls */ "./src/constants/urls.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./src/components/Pagination/styled.js");
/* harmony import */ var _PageSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PageSize */ "./src/components/PageSize/index.js");








var renderPaginationItem = function renderPaginationItem(pageSize, page) {
  return function (number) {
    var isCurrentPage = number === _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(page, 10);

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
      key: number,
      to: "".concat(_constants_urls__WEBPACK_IMPORTED_MODULE_4__["default"].productList, "?page=").concat(number, "&page_size=").concat(pageSize),
      iscurrentpage: isCurrentPage ? 1 : 0
    }, number);
  };
};

var Pagination = function Pagination(_ref) {
  var pages = _ref.pages,
      page = _ref.page,
      pageSize = _ref.pageSize,
      recordCount = _ref.recordCount,
      history = _ref.history,
      onSizeChange = _ref.onSizeChange;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PageSize__WEBPACK_IMPORTED_MODULE_6__["default"], {
    history: history,
    page: page,
    pageSize: pageSize,
    recordCount: recordCount,
    onSizeChange: onSizeChange
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["List"], null, ramda_src_map__WEBPACK_IMPORTED_MODULE_3___default()(renderPaginationItem(pageSize, page), ramda_src_range__WEBPACK_IMPORTED_MODULE_2___default()(1, pages + 1))));
};



/***/ }),

/***/ "./src/components/Pagination/styled.js":
/*!*********************************************!*\
  !*** ./src/components/Pagination/styled.js ***!
  \*********************************************/
/*! exports provided: Container, List, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/theme */ "./src/common/theme.js");


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      background: ", ";\n      color: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  padding: 10px 15px;\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: bold;\n  border-radius: 3px;\n  text-decoration: none;\n  margin: 2px;\n  transition: all 0.3s;\n\n  &:hover {\n    background: ", ";\n  }\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  z-index: 1;\n  padding: 0 2rem;\n  height: 58px;\n  box-shadow: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), _common_theme__WEBPACK_IMPORTED_MODULE_3__["default"].shadow.basic);
var List = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])(_templateObject3(), _common_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.white, _common_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.purple, _common_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.purple, _common_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.purpleLight, function (_ref) {
  var iscurrentpage = _ref.iscurrentpage;
  return iscurrentpage && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4(), _common_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.purple, _common_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.white);
});

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default, server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
/* harmony default export */ __webpack_exports__["default"] = ({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: 'eac6464b9c4840222b1258732cb51c5db35ab472be4ba305b24813c8c0076839',
  scope: process.env.REACT_APP_SCOPE,
  apiUrl: process.env.REACT_APP_APIURL
});
var dev = "development" !== 'production';
var server = dev ? 'https://react-nights.commercelayer.io' : 'xx';

/***/ }),

/***/ "./src/constants/base.js":
/*!*******************************!*\
  !*** ./src/constants/base.js ***!
  \*******************************/
/*! exports provided: PAGE_SIZE_OPTIONS, PAGE_SIZE_DEFAULT, PAGE_DEFAULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SIZE_OPTIONS", function() { return PAGE_SIZE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SIZE_DEFAULT", function() { return PAGE_SIZE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DEFAULT", function() { return PAGE_DEFAULT; });
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var PAGE_SIZE_DEFAULT = PAGE_SIZE_OPTIONS[2];
var PAGE_DEFAULT = 1;

/***/ }),

/***/ "./src/constants/urls.js":
/*!*******************************!*\
  !*** ./src/constants/urls.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var url = {
  index: '/',
  productList: '/products',
  productDetail: function productDetail(productId) {
    return "/products/".concat(productId);
  },
  signUp: '/sign_up',
  signIn: '/sign_in',
  cart: '/cart',
  logout: '/logout',
  myAccount: '/my_account'
};
/* harmony default export */ __webpack_exports__["default"] = (url);

/***/ }),

/***/ "./src/pages/ProductList/components/Product/index.js":
/*!***********************************************************!*\
  !*** ./src/pages/ProductList/components/Product/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_kebab_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/kebab-case */ "./src/utils/kebab-case.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants/urls */ "./src/constants/urls.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/pages/ProductList/components/Product/styled.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);







var Product = function Product(_ref) {
  var node = _ref.node,
      addProduct = _ref.addProduct;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], {
    "data-testid": "product-in-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Inner"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["ImgWrap"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "/product?id=".concat(node.id),
    as: "".concat(_constants_urls__WEBPACK_IMPORTED_MODULE_2__["default"].productList, "/").concat(node.id, "/").concat(Object(_utils_kebab_case__WEBPACK_IMPORTED_MODULE_1__["kebabCase"])(node.name))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Img"], {
    src: node.image_url,
    alt: "".concat(node.name)
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["TitleWrap"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Title"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "/product?id=".concat(node.id),
    as: "".concat(_constants_urls__WEBPACK_IMPORTED_MODULE_2__["default"].productList, "/").concat(node.id, "/").concat(Object(_utils_kebab_case__WEBPACK_IMPORTED_MODULE_1__["kebabCase"])(node.name))
  }, node.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Footer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Price"], null, node.price.formatted_amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    "data-testid": 'add-to-cart',
    onClick: function onClick() {
      addProduct(node.id);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("1x ".concat(node.name, " has been added to Cart"));
    }
  }, "Add to Cart"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./src/pages/ProductList/components/Product/styled.js":
/*!************************************************************!*\
  !*** ./src/pages/ProductList/components/Product/styled.js ***!
  \************************************************************/
/*! exports provided: Wrapper, ImgWrap, Price, Link, Inner, Img, TitleWrap, Title, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWrap", function() { return ImgWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inner", function() { return Inner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleWrap", function() { return TitleWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/theme */ "./src/common/theme.js");



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "styled__Wrapper",
  componentId: "sc-1dhpp94-0"
})(["padding:0.5rem;width:100%;@media (min-width:", "){width:calc(100% / 2);}@media (min-width:", "){width:calc(100% / 3);}@media (min-width:", "){width:calc(100% / 4);}@media (min-width:", "){width:calc(100% / 6);}"], _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakPoint.xs, _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakPoint.sm, _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakPoint.md, _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].breakPoint.lg);
var ImgWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ImgWrap",
  componentId: "sc-1dhpp94-1"
})(["height:16rem;display:flex;flex-direction:column;justify-content:center;"]);
var Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Price",
  componentId: "sc-1dhpp94-2"
})(["color:", ";font-size:1.8rem;"], _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.red);
var Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"]).withConfig({
  displayName: "styled__Link",
  componentId: "sc-1dhpp94-3"
})(["text-decoration:none;color:initial;"]);
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Inner",
  componentId: "sc-1dhpp94-4"
})(["background:white;padding:3rem 2rem;display:flex;flex-direction:column;align-items:center;text-align:center;box-shadow:", ";transition:box-shadow 1s;&:hover{box-shadow:", ";position:relative;z-index:1;img{transform:scale(1.1);}}"], _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].shadow.basic, _common_theme__WEBPACK_IMPORTED_MODULE_2__["default"].shadow.secondary);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styled__Img",
  componentId: "sc-1dhpp94-5"
})(["max-height:15rem;max-width:100%;transform:scale(1);will-change:transform;transition:transform 1s;"]);
var TitleWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__TitleWrap",
  componentId: "sc-1dhpp94-6"
})(["height:6.7rem;overflow:hidden;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "styled__Title",
  componentId: "sc-1dhpp94-7"
})(["font-size:1.6rem;font-weight:100;text-transform:uppercase;", "{display:block;}&:hover{", "{text-decoration:underline;}}"], Link, Link);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Footer",
  componentId: "sc-1dhpp94-8"
})(["width:100%;display:flex;justify-content:space-between;align-items:center;button{margin-top:0;}"]);

/***/ }),

/***/ "./src/pages/ProductList/index.js":
/*!****************************************!*\
  !*** ./src/pages/ProductList/index.js ***!
  \****************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_products_getProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/products/getProducts */ "./src/api/products/getProducts.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loader */ "./src/components/Loader/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Pagination */ "./src/components/Pagination/index.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Product */ "./src/pages/ProductList/components/Product/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./src/pages/ProductList/styled.js");
/* harmony import */ var _store_cart_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/cart/actions */ "./src/store/cart/actions.js");
/* harmony import */ var _store_products_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/products/actions */ "./src/store/products/actions.js");
/* harmony import */ var _constants_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/base */ "./src/constants/base.js");















var Products = function Products(_ref) {
  var res = _ref.res,
      match = _ref.match,
      page = _ref.page,
      size = _ref.size,
      addProduct = _ref.addProduct,
      isLoading = _ref.isLoading;

  var handleAddToCart = function handleAddToCart(productId) {
    return addProduct(productId);
  };
  /*const handleSizeChange = newSize => {
    Router.push(`/products?page=${page}&size=${newSize}`)
  }*/


  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null);
};

var getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var store, query, _query$page, page, _query$size, size, res;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref2.store, query = _ref2.query;
            _query$page = query.page, page = _query$page === void 0 ? _constants_base__WEBPACK_IMPORTED_MODULE_13__["PAGE_DEFAULT"] : _query$page, _query$size = query.size, size = _query$size === void 0 ? _constants_base__WEBPACK_IMPORTED_MODULE_13__["PAGE_SIZE_DEFAULT"] : _query$size;
            _context.next = 4;
            return Object(_api_products_getProducts__WEBPACK_IMPORTED_MODULE_3__["getProducts"])({
              page: {
                number: page,
                size: size
              }
            });

          case 4:
            res = _context.sent;
            store.dispatch(_store_products_actions__WEBPACK_IMPORTED_MODULE_12__["loadProducts"](res.data));
            return _context.abrupt("return", {
              page: page,
              size: size,
              isLoading: false,
              res: res
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getInitialProps(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var mapDispatchToProps = {
  addProduct: _store_cart_actions__WEBPACK_IMPORTED_MODULE_11__["addProduct"]
};
var ProductList = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, mapDispatchToProps)(Products);
ProductList.getInitialProps = getInitialProps;


/***/ }),

/***/ "./src/pages/ProductList/styled.js":
/*!*****************************************!*\
  !*** ./src/pages/ProductList/styled.js ***!
  \*****************************************/
/*! exports provided: ProductsWrap, ProductsWrapInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsWrap", function() { return ProductsWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsWrapInner", function() { return ProductsWrapInner; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  list-style: none;\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0.5rem;\n  list-style: none;\n  margin: -2rem;\n  height: calc(100vh - 115px);\n  overflow: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ProductsWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var ProductsWrapInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject2());

/***/ }),

/***/ "./src/store/cart/actions.js":
/*!***********************************!*\
  !*** ./src/store/cart/actions.js ***!
  \***********************************/
/*! exports provided: ADD_PRODUCT, REMOVE_PRODUCT, addProduct, removeProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT", function() { return ADD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PRODUCT", function() { return REMOVE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProduct", function() { return removeProduct; });
var ADD_PRODUCT = 'cartItems/ADD';
var REMOVE_PRODUCT = 'cartItems/REMOVE';
var addProduct = function addProduct(productId) {
  return {
    type: ADD_PRODUCT,
    payload: productId
  };
};
var removeProduct = function removeProduct(productId) {
  return {
    type: REMOVE_PRODUCT,
    payload: productId
  };
};

/***/ }),

/***/ "./src/store/products/actions.js":
/*!***************************************!*\
  !*** ./src/store/products/actions.js ***!
  \***************************************/
/*! exports provided: LOAD_PRODUCTS, LOAD_PRODUCT, loadProducts, loadProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCTS", function() { return LOAD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT", function() { return LOAD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProducts", function() { return loadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProduct", function() { return loadProduct; });
var LOAD_PRODUCTS = 'products/LOAD_PRODUCTS';
var LOAD_PRODUCT = 'products/LOAD_PRODUCT';
var loadProducts = function loadProducts(products) {
  return {
    type: LOAD_PRODUCTS,
    payload: products
  };
};
var loadProduct = function loadProduct(product) {
  return {
    type: LOAD_PRODUCT,
    payload: product
  };
};

/***/ }),

/***/ "./src/utils/is-browser.js":
/*!*********************************!*\
  !*** ./src/utils/is-browser.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.__esModule = true;

exports.isBrowser = function () {
  return typeof window !== 'undefined';
};

/***/ }),

/***/ "./src/utils/kebab-case.js":
/*!*********************************!*\
  !*** ./src/utils/kebab-case.js ***!
  \*********************************/
/*! exports provided: kebabCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabCase", function() { return kebabCase; });
var kebabCase = function kebabCase(value) {
  var kebabed = value.split(/[_\s]/).join("-");
  return kebabed;
};

/***/ }),

/***/ "./src/utils/refreshToken.js":
/*!***********************************!*\
  !*** ./src/utils/refreshToken.js ***!
  \***********************************/
/*! exports provided: getRefreshToken, setRefreshToken, removeRefreshToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRefreshToken", function() { return getRefreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRefreshToken", function() { return setRefreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRefreshToken", function() { return removeRefreshToken; });
/* harmony import */ var _is_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-browser */ "./src/utils/is-browser.js");
/* harmony import */ var _is_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_browser__WEBPACK_IMPORTED_MODULE_0__);

var getRefreshToken = function getRefreshToken() {
  return Object(_is_browser__WEBPACK_IMPORTED_MODULE_0__["isBrowser"])() && window.localStorage.getItem('refreshtoken');
};
var setRefreshToken = function setRefreshToken(refreshToken) {
  Object(_is_browser__WEBPACK_IMPORTED_MODULE_0__["isBrowser"])() && window.localStorage.setItem('refreshtoken', refreshToken);
};
var removeRefreshToken = function removeRefreshToken() {
  Object(_is_browser__WEBPACK_IMPORTED_MODULE_0__["isBrowser"])() && window.localStorage.removeItem('refreshtoken');
};

/***/ }),

/***/ "./src/utils/token.js":
/*!****************************!*\
  !*** ./src/utils/token.js ***!
  \****************************/
/*! exports provided: getToken, setToken, removeToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeToken", function() { return removeToken; });
/* harmony import */ var _is_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-browser */ "./src/utils/is-browser.js");
/* harmony import */ var _is_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_browser__WEBPACK_IMPORTED_MODULE_0__);

var getToken = function getToken() {
  return Object(_is_browser__WEBPACK_IMPORTED_MODULE_0__["isBrowser"])() && window.localStorage.getItem('token');
};
var setToken = function setToken(token) {
  Object(_is_browser__WEBPACK_IMPORTED_MODULE_0__["isBrowser"])() && window.localStorage.setItem('token', token);
};
var removeToken = function removeToken() {
  Object(_is_browser__WEBPACK_IMPORTED_MODULE_0__["isBrowser"])() && window.localStorage.removeItem('token');
};

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/products.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jindrichkytler/react-nights/pages/products.js */"./pages/products.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "ramda/src/map":
/*!********************************!*\
  !*** external "ramda/src/map" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/map");

/***/ }),

/***/ "ramda/src/range":
/*!**********************************!*\
  !*** external "ramda/src/range" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda/src/range");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=products.js.map