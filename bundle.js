/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var title = __webpack_require__(1);

	document.getElementById('button').onclick = function () {
	  title(Math.random().toString(25).substr(3, 8));
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	function isWechat () {
	  return /\sMicroMessenger/.test(window.navigator.userAgent);
	}

	function isQQ () {
	  return /\sQQ/.test(window.navigator.useragent);
	}

	function isMQQBrowser () {
	  return !isWechat() && !isQQ() && /\sMQQBrowser/.test(window.navigator.userAgent);
	}

	function isIOS () {
	  return /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
	}

	var options = {
	  src: 'favicon.ico'
	};

	var title = function (name) {
	  var body, iframe;

	  document.title = name;

	  if ((isWechat() || isQQ() || isMQQBrowser()) && isIOS()) {
	    body = document.getElementsByTagName('body')[0];
	    iframe = document.createElement('iframe');
	    iframe.src = options.src;
	    iframe.style.display = 'none';
	    iframe.onload = function () {
	      setTimeout(function () {
	        body.removeChild(iframe);
	        iframe = null;
	      }, 0);
	    };
	    body.appendChild(iframe);
	  }
	}

	title.source = function (src) {
	  options.src = src;
	};

	module.exports = title;


/***/ }
/******/ ]);