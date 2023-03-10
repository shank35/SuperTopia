/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n\nconst canvas = document.getElementById(\"canvas\");\nconst context = canvas.getContext(\"2d\");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context, canvas);\n  player.animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBc0M7QUFHdEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDaEQsTUFBTUMsT0FBTyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDdkNKLE1BQU0sQ0FBQ0ssS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVU7QUFDaENQLE1BQU0sQ0FBQ1EsTUFBTSxHQUFHRixNQUFNLENBQUNHLFdBQVc7QUFFbENSLFFBQVEsQ0FBQ1MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxNQUFNQyxNQUFNLEdBQUcsSUFBSVosdURBQU0sQ0FBQ0ksT0FBTyxFQUFFSCxNQUFNLENBQUM7RUFDMUNXLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVydG9waWEvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3NjcmlwdHMvcGxheWVyXCI7XG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKGNvbnRleHQsIGNhbnZhcyk7XG4gIHBsYXllci5hbmltYXRlKCk7XG59KVxuIl0sIm5hbWVzIjpbIlBsYXllciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllciIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst gravity = 0.5;\nclass Player {\n  constructor(context, canvas) {\n    this.position = {\n      x: 100,\n      y: 100\n    };\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n    this.width = 30;\n    this.height = 30;\n    this.context = context;\n    this.canvas = canvas;\n    this.keys = {\n      right: {\n        pressed: false\n      },\n      left: {\n        pressed: false\n      }\n    };\n    window.addEventListener(\"keydown\", _ref => {\n      let {\n        keyCode\n      } = _ref;\n      switch (keyCode) {\n        case 65:\n          console.log(\"left\");\n          this.keys.left.pressed = true;\n          break;\n        case 83:\n          console.log(\"down\");\n          break;\n        case 68:\n          console.log(\"right\");\n          this.keys.right.pressed = true;\n          break;\n        case 87:\n          this.velocity.y -= 10;\n          break;\n      }\n    });\n    window.addEventListener(\"keyup\", _ref2 => {\n      let {\n        keyCode\n      } = _ref2;\n      switch (keyCode) {\n        case 65:\n          console.log(\"left\");\n          this.keys.left.pressed = false;\n          break;\n        case 83:\n          console.log(\"down\");\n          break;\n        case 68:\n          console.log(\"right\");\n          this.keys.right.pressed = false;\n          break;\n        case 87:\n          this.velocity.y -= 10;\n          break;\n      }\n    });\n  }\n  draw() {\n    this.context.fillStyle = 'red';\n    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  update() {\n    this.position.y += this.velocity.y;\n    this.position.x += this.velocity.x;\n    this.draw();\n    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {\n      this.velocity.y += gravity;\n    } else {\n      this.velocity.y = 0;\n    }\n  }\n  animate() {\n    let boundFunc = this.animate.bind(this);\n    requestAnimationFrame(boundFunc);\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.update();\n    if (this.keys.right.pressed) {\n      this.velocity.x = 5;\n    } else if (this.keys.left.pressed) {\n      this.velocity.x = -5;\n    } else {\n      this.velocity.x = 0;\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3N1cGVydG9waWEvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGdyYXZpdHkgPSAwLjU7XG5cbmNsYXNzIFBsYXllciB7XG5cbiAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDEwMCxcbiAgICAgIHk6IDEwMFxuICAgIH1cbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gICAgdGhpcy53aWR0aCA9IDMwXG4gICAgdGhpcy5oZWlnaHQgPSAzMFxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuXG4gICAgdGhpcy5rZXlzID0ge1xuICAgICAgcmlnaHQ6IHtcbiAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoe2tleUNvZGV9KSA9PiB7XG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZnRcIilcbiAgICAgICAgICB0aGlzLmtleXMubGVmdC5wcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgODM6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJkb3duXCIpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJpZ2h0XCIpXG4gICAgICAgICAgdGhpcy5rZXlzLnJpZ2h0LnByZXNzZWQgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA4NzpcbiAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gMTBcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoe2tleUNvZGV9KSA9PiB7XG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZnRcIilcbiAgICAgICAgICB0aGlzLmtleXMubGVmdC5wcmVzc2VkID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDgzOlxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG93blwiKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNjg6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJyaWdodFwiKVxuICAgICAgICAgIHRoaXMua2V5cy5yaWdodC5wcmVzc2VkID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDg3OlxuICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSAxMFxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZT0ncmVkJztcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5LnlcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWxvY2l0eS55IDw9IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IGdyYXZpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IDBcbiAgICB9XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIGxldCBib3VuZEZ1bmMgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShib3VuZEZ1bmMpO1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICBpZiAodGhpcy5rZXlzLnJpZ2h0LnByZXNzZWQpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IDVcbiAgICB9IGVsc2UgaWYgKHRoaXMua2V5cy5sZWZ0LnByZXNzZWQpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC01XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IDBcbiAgICB9XG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJuYW1lcyI6WyJncmF2aXR5IiwiUGxheWVyIiwiY29uc3RydWN0b3IiLCJjb250ZXh0IiwiY2FudmFzIiwicG9zaXRpb24iLCJ4IiwieSIsInZlbG9jaXR5Iiwid2lkdGgiLCJoZWlnaHQiLCJrZXlzIiwicmlnaHQiLCJwcmVzc2VkIiwibGVmdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVmIiwia2V5Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJfcmVmMiIsImRyYXciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInVwZGF0ZSIsImFuaW1hdGUiLCJib3VuZEZ1bmMiLCJiaW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnRvcGlhLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;