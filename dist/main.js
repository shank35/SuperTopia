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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_terrain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/terrain */ \"./src/scripts/terrain.js\");\n\n\nconst canvas = document.getElementById(\"canvas\");\nconst context = canvas.getContext(\"2d\");\ncanvas.width = 800;\ncanvas.height = 600;\ncontext.fillRect(30, 30, canvas.width, canvas.height);\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context, canvas);\n  const platform = new _scripts_terrain__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context, canvas);\n  platform.draw();\n  player.animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXNDO0FBQ0c7QUFFekMsTUFBTUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDaEQsTUFBTUMsT0FBTyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDdkNKLE1BQU0sQ0FBQ0ssS0FBSyxHQUFHLEdBQUc7QUFDbEJMLE1BQU0sQ0FBQ00sTUFBTSxHQUFHLEdBQUc7QUFDbkJILE9BQU8sQ0FBQ0ksUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUVQLE1BQU0sQ0FBQ0ssS0FBSyxFQUFFTCxNQUFNLENBQUNNLE1BQU0sQ0FBQztBQUVyREwsUUFBUSxDQUFDTyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBRyxJQUFJWCx1REFBTSxDQUFDSyxPQUFPLEVBQUVILE1BQU0sQ0FBQztFQUMxQyxNQUFNVSxRQUFRLEdBQUcsSUFBSVgsd0RBQVEsQ0FBQ0ksT0FBTyxFQUFFSCxNQUFNLENBQUM7RUFDOUNVLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0VBQ2ZGLE1BQU0sQ0FBQ0csT0FBTyxFQUFFO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVydG9waWEvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3NjcmlwdHMvcGxheWVyXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vc2NyaXB0cy90ZXJyYWluXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuY29udGV4dC5maWxsUmVjdCgzMCwgMzAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihjb250ZXh0LCBjYW52YXMpO1xuICBjb25zdCBwbGF0Zm9ybSA9IG5ldyBQbGF0Zm9ybShjb250ZXh0LCBjYW52YXMpXG4gIHBsYXRmb3JtLmRyYXcoKTtcbiAgcGxheWVyLmFuaW1hdGUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIlBsYXllciIsIlBsYXRmb3JtIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsUmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5ZXIiLCJwbGF0Zm9ybSIsImRyYXciLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst gravity = 0.5;\nclass Player {\n  constructor(context, canvas) {\n    this.position = {\n      x: 100,\n      y: 100\n    };\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n    this.width = 30;\n    this.height = 30;\n    this.context = context;\n    this.canvas = canvas;\n    this.keys = {\n      right: {\n        pressed: false\n      },\n      left: {\n        pressed: false\n      }\n    };\n    window.addEventListener(\"keydown\", _ref => {\n      let {\n        keyCode\n      } = _ref;\n      switch (keyCode) {\n        case 65:\n          console.log(\"left\");\n          this.keys.left.pressed = true;\n          break;\n        case 83:\n          console.log(\"down\");\n          break;\n        case 68:\n          console.log(\"right\");\n          this.keys.right.pressed = true;\n          break;\n        case 87:\n          this.velocity.y -= 10;\n          break;\n      }\n    });\n    window.addEventListener(\"keyup\", _ref2 => {\n      let {\n        keyCode\n      } = _ref2;\n      switch (keyCode) {\n        case 65:\n          console.log(\"left\");\n          this.keys.left.pressed = false;\n          break;\n        case 83:\n          console.log(\"down\");\n          break;\n        case 68:\n          console.log(\"right\");\n          this.keys.right.pressed = false;\n          break;\n        case 87:\n          this.velocity.y -= 10;\n          break;\n      }\n    });\n  }\n  draw() {\n    this.context.fillStyle = 'red';\n    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  update() {\n    this.position.y += this.velocity.y;\n    this.position.x += this.velocity.x;\n    this.draw();\n    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {\n      this.velocity.y += gravity;\n    } else {\n      this.velocity.y = 0;\n    }\n  }\n  animate() {\n    let boundFunc = this.animate.bind(this);\n    requestAnimationFrame(boundFunc);\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.update();\n    if (this.keys.right.pressed) {\n      this.velocity.x = 5;\n    } else if (this.keys.left.pressed) {\n      this.velocity.x = -5;\n    } else {\n      this.velocity.x = 0;\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3N1cGVydG9waWEvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBncmF2aXR5ID0gMC41O1xuXG5jbGFzcyBQbGF5ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcykge1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiAxMDAsXG4gICAgICB5OiAxMDBcbiAgICB9XG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuICAgIHRoaXMud2lkdGggPSAzMFxuICAgIHRoaXMuaGVpZ2h0ID0gMzBcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcblxuICAgIHRoaXMua2V5cyA9IHtcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbGVmdDoge1xuICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKHtrZXlDb2RlfSkgPT4ge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0XCIpXG4gICAgICAgICAgdGhpcy5rZXlzLmxlZnQucHJlc3NlZCA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDgzOlxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG93blwiKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNjg6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJyaWdodFwiKVxuICAgICAgICAgIHRoaXMua2V5cy5yaWdodC5wcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgODc6XG4gICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IDEwXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKHtrZXlDb2RlfSkgPT4ge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0XCIpXG4gICAgICAgICAgdGhpcy5rZXlzLmxlZnQucHJlc3NlZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRvd25cIilcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHRcIilcbiAgICAgICAgICB0aGlzLmtleXMucmlnaHQucHJlc3NlZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA4NzpcbiAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gMTBcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSdyZWQnO1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodFxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueVxuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5LnhcbiAgICB0aGlzLmRyYXcoKTtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgKyB0aGlzLnZlbG9jaXR5LnkgPD0gdGhpcy5jYW52YXMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gZ3Jhdml0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMFxuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgbGV0IGJvdW5kRnVuYyA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGJvdW5kRnVuYyk7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIGlmICh0aGlzLmtleXMucmlnaHQucHJlc3NlZCkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gNVxuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlzLmxlZnQucHJlc3NlZCkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLTVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMFxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl0sIm5hbWVzIjpbImdyYXZpdHkiLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsImNvbnRleHQiLCJjYW52YXMiLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJ3aWR0aCIsImhlaWdodCIsImtleXMiLCJyaWdodCIsInByZXNzZWQiLCJsZWZ0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJrZXlDb2RlIiwiY29uc29sZSIsImxvZyIsIl9yZWYyIiwiZHJhdyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidXBkYXRlIiwiYW5pbWF0ZSIsImJvdW5kRnVuYyIsImJpbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/terrain.js":
/*!********************************!*\
  !*** ./src/scripts/terrain.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Platform {\n  constructor(context, canvas) {\n    this.position = {\n      x: 300,\n      y: 500\n    };\n    this.width = 200;\n    this.height = 20;\n    this.context = context;\n    this.canvas = canvas;\n  }\n  draw() {\n    this.context.fillStyle = 'blue';\n    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Platform);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90ZXJyYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxRQUFRLENBQUM7RUFFYkMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUU7SUFDM0IsSUFBSSxDQUFDQyxRQUFRLEdBQUc7TUFDZEMsQ0FBQyxFQUFFLEdBQUc7TUFDTkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNOLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0QjtFQUVBTSxJQUFJQSxDQUFBLEVBQUc7SUFDTCxJQUFJLENBQUNQLE9BQU8sQ0FBQ1EsU0FBUyxHQUFFLE1BQU07SUFDOUIsSUFBSSxDQUFDUixPQUFPLENBQUNTLFFBQVEsQ0FDbkIsSUFBSSxDQUFDUCxRQUFRLENBQUNDLENBQUMsRUFDZixJQUFJLENBQUNELFFBQVEsQ0FBQ0UsQ0FBQyxFQUNmLElBQUksQ0FBQ0MsS0FBSyxFQUNWLElBQUksQ0FBQ0MsTUFBTSxDQUNWO0VBQ0w7QUFFRjtBQUVBLCtEQUFlUixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJ0b3BpYS8uL3NyYy9zY3JpcHRzL3RlcnJhaW4uanM/Yjc0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF0Zm9ybSB7XG5cbiAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDMwMCxcbiAgICAgIHk6IDUwMFxuICAgIH1cblxuICAgIHRoaXMud2lkdGggPSAyMDBcbiAgICB0aGlzLmhlaWdodCA9IDIwXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSdibHVlJztcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICAgICk7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXRmb3JtOyJdLCJuYW1lcyI6WyJQbGF0Zm9ybSIsImNvbnN0cnVjdG9yIiwiY29udGV4dCIsImNhbnZhcyIsInBvc2l0aW9uIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImRyYXciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/terrain.js\n");

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