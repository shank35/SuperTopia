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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_terrain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/terrain */ \"./src/scripts/terrain.js\");\n// index.js\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const context = canvas.getContext(\"2d\");\n  canvas.width = 800;\n  canvas.height = 600;\n  const platforms = [new _scripts_terrain__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context, canvas, {\n    x: 200,\n    y: 100\n  }), new _scripts_terrain__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context, canvas, {\n    x: 500,\n    y: 200\n  })];\n  const player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context, canvas, platforms);\n  player.animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRXNDO0FBQ0c7QUFFekNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNoRCxNQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUV2Q0gsTUFBTSxDQUFDSSxLQUFLLEdBQUcsR0FBRztFQUNsQkosTUFBTSxDQUFDSyxNQUFNLEdBQUcsR0FBRztFQUduQixNQUFNQyxTQUFTLEdBQUcsQ0FDaEIsSUFBSVQsd0RBQVEsQ0FBQ0ssT0FBTyxFQUFFRixNQUFNLEVBQzVCO0lBQUNPLENBQUMsRUFBRSxHQUFHO0lBQUVDLENBQUMsRUFBRTtFQUFHLENBQUMsQ0FBQyxFQUNqQixJQUFJWCx3REFBUSxDQUFDSyxPQUFPLEVBQUVGLE1BQU0sRUFDMUI7SUFBQ08sQ0FBQyxFQUFFLEdBQUc7SUFBRUMsQ0FBQyxFQUFFO0VBQUcsQ0FBQyxDQUFDLENBQ3BCO0VBQ0QsTUFBTUMsTUFBTSxHQUFHLElBQUliLHVEQUFNLENBQUNNLE9BQU8sRUFBRUYsTUFBTSxFQUFFTSxTQUFTLENBQUM7RUFDckRHLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFO0FBRWxCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVydG9waWEvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC5qc1xuXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3NjcmlwdHMvcGxheWVyXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vc2NyaXB0cy90ZXJyYWluXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgY2FudmFzLmhlaWdodCA9IDYwMDtcblxuICBcbiAgY29uc3QgcGxhdGZvcm1zID0gW1xuICAgIG5ldyBQbGF0Zm9ybShjb250ZXh0LCBjYW52YXMsIFxuICAgIHt4OiAyMDAsIHk6IDEwMH0pLFxuICAgIG5ldyBQbGF0Zm9ybShjb250ZXh0LCBjYW52YXMsXG4gICAgICB7eDogNTAwLCB5OiAyMDB9KVxuICBdO1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKGNvbnRleHQsIGNhbnZhcywgcGxhdGZvcm1zKTtcbiAgcGxheWVyLmFuaW1hdGUoKTtcblxufSk7XG4iXSwibmFtZXMiOlsiUGxheWVyIiwiUGxhdGZvcm0iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJwbGF0Zm9ybXMiLCJ4IiwieSIsInBsYXllciIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// player.js\nconst gravity = 0.5;\nclass Player {\n  constructor(context, canvas, platforms) {\n    this.position = {\n      x: 100,\n      y: 100\n    };\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n    this.width = 30;\n    this.height = 30;\n    this.context = context;\n    this.canvas = canvas;\n    this.platforms = platforms;\n    this.keys = {\n      right: {\n        pressed: false\n      },\n      left: {\n        pressed: false\n      }\n    };\n    window.addEventListener(\"keydown\", _ref => {\n      let {\n        keyCode\n      } = _ref;\n      switch (keyCode) {\n        case 65:\n          console.log(\"left\");\n          this.keys.left.pressed = true;\n          break;\n        case 83:\n          console.log(\"down\");\n          break;\n        case 68:\n          console.log(\"right\");\n          this.keys.right.pressed = true;\n          break;\n        case 87:\n          console.log(\"up\");\n          this.velocity.y -= 10;\n          break;\n      }\n    });\n    window.addEventListener(\"keyup\", _ref2 => {\n      let {\n        keyCode\n      } = _ref2;\n      switch (keyCode) {\n        case 65:\n          console.log(\"left\");\n          this.keys.left.pressed = false;\n          break;\n        case 83:\n          console.log(\"down\");\n          break;\n        case 68:\n          console.log(\"right\");\n          this.keys.right.pressed = false;\n          break;\n        case 87:\n          console.log(\"up\");\n          this.velocity.y -= 10;\n          break;\n      }\n    });\n  }\n  draw() {\n    this.context.fillStyle = 'red';\n    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  update() {\n    this.position.y += this.velocity.y;\n    this.position.x += this.velocity.x;\n    this.draw();\n    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {\n      this.velocity.y += gravity;\n    } else {\n      this.velocity.y = 0;\n    }\n  }\n  animate() {\n    let boundFunc = this.animate.bind(this);\n    requestAnimationFrame(boundFunc);\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.update();\n    this.platforms.forEach(platform => {\n      platform.draw();\n    });\n    if (this.keys.right.pressed && this.position.x < 400) {\n      this.velocity.x = 5;\n    } else if (this.keys.left.pressed && this.position.x > 0) {\n      this.velocity.x = -5;\n    } else {\n      this.velocity.x = 0;\n      if (this.keys.right.pressed) {\n        this.platforms.forEach(platform => {\n          platform.position.x -= 5;\n        });\n      } else if (this.keys.left.pressed) {\n        this.platforms.forEach(platform => {\n          platform.position.x += 5;\n        });\n      }\n    }\n\n    // platform collision detection\n    this.platforms.forEach(platform => {\n      if (this.position.y + this.height <= platform.position.y && this.position.y + this.height + this.velocity.y >= platform.position.y && this.position.x + this.width >= platform.position.x && this.position.x <= platform.position.x + platform.width) {\n        this.velocity.y = 0;\n      }\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUNDLENBQUMsR0FBRyxJQUFJLENBQUNHLEtBQUssSUFBSXVCLFFBQVEsQ0FBQzNCLFFBQVEsQ0FBQ0MsQ0FBQyxJQUNuRCxJQUFJLENBQUNELFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJMEIsUUFBUSxDQUFDM0IsUUFBUSxDQUFDQyxDQUFDLEdBQUcwQixRQUFRLENBQUN2QixLQUFLLEVBQUU7UUFDekQsSUFBSSxDQUFDRCxRQUFRLENBQUNELENBQUMsR0FBRyxDQUFDO01BQ3JCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7QUFFRjtBQUdBLCtEQUFlUCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJ0b3BpYS8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBsYXllci5qc1xuY29uc3QgZ3Jhdml0eSA9IDAuNTtcblxuY2xhc3MgUGxheWVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIHBsYXRmb3Jtcykge1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiAxMDAsXG4gICAgICB5OiAxMDBcbiAgICB9XG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuICAgIHRoaXMud2lkdGggPSAzMFxuICAgIHRoaXMuaGVpZ2h0ID0gMzBcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLnBsYXRmb3JtcyA9IHBsYXRmb3Jtc1xuXG4gICAgdGhpcy5rZXlzID0ge1xuICAgICAgcmlnaHQ6IHtcbiAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoe2tleUNvZGV9KSA9PiB7XG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZnRcIilcbiAgICAgICAgICB0aGlzLmtleXMubGVmdC5wcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgODM6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJkb3duXCIpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJpZ2h0XCIpXG4gICAgICAgICAgdGhpcy5rZXlzLnJpZ2h0LnByZXNzZWQgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA4NzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVwXCIpXG4gICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IDEwXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKHtrZXlDb2RlfSkgPT4ge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0XCIpXG4gICAgICAgICAgdGhpcy5rZXlzLmxlZnQucHJlc3NlZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRvd25cIilcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHRcIilcbiAgICAgICAgICB0aGlzLmtleXMucmlnaHQucHJlc3NlZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA4NzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVwXCIpXG4gICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IDEwXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0ncmVkJztcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5LnlcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWxvY2l0eS55IDw9IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IGdyYXZpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IDBcbiAgICB9XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIGxldCBib3VuZEZ1bmMgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShib3VuZEZ1bmMpO1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnBsYXRmb3Jtcy5mb3JFYWNoKHBsYXRmb3JtID0+IHtcbiAgICAgIHBsYXRmb3JtLmRyYXcoKTtcbiAgICB9KVxuICAgIGlmICh0aGlzLmtleXMucmlnaHQucHJlc3NlZCAmJiB0aGlzLnBvc2l0aW9uLnggPCA0MDApIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IDVcbiAgICB9IGVsc2UgaWYgKHRoaXMua2V5cy5sZWZ0LnByZXNzZWQgJiYgdGhpcy5wb3NpdGlvbi54ID4gMCkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLTVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMFxuICAgICAgaWYgKHRoaXMua2V5cy5yaWdodC5wcmVzc2VkKSB7XG4gICAgICAgIHRoaXMucGxhdGZvcm1zLmZvckVhY2gocGxhdGZvcm0gPT4ge1xuICAgICAgICAgIHBsYXRmb3JtLnBvc2l0aW9uLnggLT0gNVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmtleXMubGVmdC5wcmVzc2VkKSB7XG4gICAgICAgIHRoaXMucGxhdGZvcm1zLmZvckVhY2gocGxhdGZvcm0gPT4ge1xuICAgICAgICAgIHBsYXRmb3JtLnBvc2l0aW9uLnggKz0gNVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHBsYXRmb3JtIGNvbGxpc2lvbiBkZXRlY3Rpb25cbiAgICB0aGlzLnBsYXRmb3Jtcy5mb3JFYWNoKHBsYXRmb3JtID0+IHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA8PSBcbiAgICAgICAgcGxhdGZvcm0ucG9zaXRpb24ueSAmJiBcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgKyB0aGlzLnZlbG9jaXR5LnkgPj0gXG4gICAgICAgIHBsYXRmb3JtLnBvc2l0aW9uLnkgJiZcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+PSBwbGF0Zm9ybS5wb3NpdGlvbi54ICYmIFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPD0gcGxhdGZvcm0ucG9zaXRpb24ueCArIHBsYXRmb3JtLndpZHRoKSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl0sIm5hbWVzIjpbImdyYXZpdHkiLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsImNvbnRleHQiLCJjYW52YXMiLCJwbGF0Zm9ybXMiLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJ3aWR0aCIsImhlaWdodCIsImtleXMiLCJyaWdodCIsInByZXNzZWQiLCJsZWZ0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJrZXlDb2RlIiwiY29uc29sZSIsImxvZyIsIl9yZWYyIiwiZHJhdyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidXBkYXRlIiwiYW5pbWF0ZSIsImJvdW5kRnVuYyIsImJpbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwicGxhdGZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/terrain.js":
/*!********************************!*\
  !*** ./src/scripts/terrain.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// terrain.js\nclass Platform {\n  constructor(context, canvas, _ref) {\n    let {\n      x,\n      y\n    } = _ref;\n    this.position = {\n      x: x,\n      y: y\n    };\n    this.width = 200;\n    this.height = 20;\n    this.context = context;\n    this.canvas = canvas;\n  }\n  draw() {\n    this.context.fillStyle = 'blue';\n    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Platform);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90ZXJyYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBLE1BQU1BLFFBQVEsQ0FBQztFQUViQyxXQUFXQSxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBQUMsSUFBQSxFQUFVO0lBQUEsSUFBUjtNQUFDQyxDQUFDO01BQUVDO0lBQUMsQ0FBQyxHQUFBRixJQUFBO0lBQ2pDLElBQUksQ0FBQ0csUUFBUSxHQUFHO01BQ2RGLENBQUMsRUFBRUEsQ0FBQztNQUNKQyxDQUFDLEVBQUVBO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQ0UsS0FBSyxHQUFHLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNQLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUV0QjtFQUVBTyxJQUFJQSxDQUFBLEVBQUc7SUFDTCxJQUFJLENBQUNSLE9BQU8sQ0FBQ1MsU0FBUyxHQUFFLE1BQU07SUFDOUIsSUFBSSxDQUFDVCxPQUFPLENBQUNVLFFBQVEsQ0FDbkIsSUFBSSxDQUFDTCxRQUFRLENBQUNGLENBQUMsRUFDZixJQUFJLENBQUNFLFFBQVEsQ0FBQ0QsQ0FBQyxFQUNmLElBQUksQ0FBQ0UsS0FBSyxFQUNWLElBQUksQ0FBQ0MsTUFBTSxDQUNWO0VBQ0w7QUFFRjtBQUVBLCtEQUFlVCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJ0b3BpYS8uL3NyYy9zY3JpcHRzL3RlcnJhaW4uanM/Yjc0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0ZXJyYWluLmpzXG5jbGFzcyBQbGF0Zm9ybSB7XG5cbiAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCB7eCwgeX0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9XG5cbiAgICB0aGlzLndpZHRoID0gMjAwXG4gICAgdGhpcy5oZWlnaHQgPSAyMFxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuXG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSdibHVlJztcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICAgICk7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXRmb3JtOyJdLCJuYW1lcyI6WyJQbGF0Zm9ybSIsImNvbnN0cnVjdG9yIiwiY29udGV4dCIsImNhbnZhcyIsIl9yZWYiLCJ4IiwieSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/terrain.js\n");

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