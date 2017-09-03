(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLib"] = factory();
	else
		root["MyLib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.utils = undefined;

var _utils = __webpack_require__(2);

var _storage = __webpack_require__(3);

exports.utils = _utils.utils;
exports.storage = _storage.storage;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = function () {
  function utils(options) {
    _classCallCheck(this, utils);

    this.name = options.name;
  }

  _createClass(utils, [{
    key: 'someFunction',
    value: function someFunction(args) {
      console.log(this.name);
      console.log('someFunction');
      return args;
    }
  }, {
    key: 'otherFunction',
    value: function otherFunction() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return args;
    }
  }]);

  return utils;
}();

exports.utils = utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storage = {
  set: function set(obj) {
    /* 格式: {key1: value1, key2: {k: v}} */
    if (!obj) {
      console.warn('object invalid');
      return;
    }

    for (var key in obj) {
      var value = obj[key];

      if (!key) {
        console.warn('key invalid');
        return;
      }

      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        value = JSON.stringify(value);
      }

      if (obj.hasOwnProperty(key) && typeof value !== 'function') {
        localStorage.setItem(key, value);
      }
    }
  },

  get: function get(key) {
    var result = {};

    try {
      result = localStorage.getItem(key);
      if (result && result[0] === "{") {
        result = JSON.parse(result);
      }
    } catch (e) {
      console.warn('not found value');
      console.error(e);
    }

    return result;
  },

  del: function del(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn('can not remove item');
      console.error(e);
    }
  },

  append: function append(key, target) {
    var source = this.get(key);

    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) !== 'object' || source === null) {
      source = {};
    }

    return this.set(_defineProperty({}, key, Object.assign(target, source)));
  }
};

exports.storage = storage;

/***/ })
/******/ ]);
});
//# sourceMappingURL=MyLib.js.map