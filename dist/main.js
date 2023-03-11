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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/platform.png */ \"./src/img/platform.png\");\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_terrain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/terrain */ \"./src/scripts/terrain.js\");\n// index.js\n\nconsole.log(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const context = canvas.getContext(\"2d\");\n  canvas.width = 1024;\n  canvas.height = 576;\n  const image = new Image();\n  image.src = _img_platform_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  console.log(image);\n  const platforms = [new _scripts_terrain__WEBPACK_IMPORTED_MODULE_2__[\"default\"](context, canvas, {\n    x: -1,\n    y: 410,\n    image: image\n  }), new _scripts_terrain__WEBPACK_IMPORTED_MODULE_2__[\"default\"](context, canvas, {\n    x: image.width - 2,\n    y: 410,\n    image: image\n  })];\n  const player = new _scripts_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context, canvas, platforms);\n  player.animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ3lDO0FBQ3pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YseURBQVEsQ0FBQztBQUNpQjtBQUNHO0FBRXpDSyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDbEQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDaEQsTUFBTUMsT0FBTyxHQUFHRixNQUFNLENBQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFFdkNILE1BQU0sQ0FBQ0ksS0FBSyxHQUFHLElBQUk7RUFDbkJKLE1BQU0sQ0FBQ0ssTUFBTSxHQUFHLEdBQUc7RUFFbkIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUssRUFBRTtFQUN6QkQsS0FBSyxDQUFDRSxHQUFHLEdBQUdmLHlEQUFRO0VBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1csS0FBSyxDQUFDO0VBQ2xCLE1BQU1HLFNBQVMsR0FBRyxDQUNoQixJQUFJWix3REFBUSxDQUFDSyxPQUFPLEVBQUVGLE1BQU0sRUFDNUI7SUFBQ1UsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUFFQyxDQUFDLEVBQUUsR0FBRztJQUFFTCxLQUFLLEVBQUVBO0VBQUssQ0FBQyxDQUFDLEVBQzlCLElBQUlULHdEQUFRLENBQUNLLE9BQU8sRUFBRUYsTUFBTSxFQUMxQjtJQUFDVSxDQUFDLEVBQUVKLEtBQUssQ0FBQ0YsS0FBSyxHQUFHLENBQUM7SUFBRU8sQ0FBQyxFQUFFLEdBQUc7SUFBRUwsS0FBSyxFQUFFQTtFQUFLLENBQUMsQ0FBQyxDQUM5QztFQUNELE1BQU1NLE1BQU0sR0FBRyxJQUFJaEIsdURBQU0sQ0FBQ00sT0FBTyxFQUFFRixNQUFNLEVBQUVTLFNBQVMsQ0FBQztFQUNyREcsTUFBTSxDQUFDQyxPQUFPLEVBQUU7QUFFbEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJ0b3BpYS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LmpzXG5pbXBvcnQgcGxhdGZvcm0gZnJvbSBcIi4vaW1nL3BsYXRmb3JtLnBuZ1wiXG5jb25zb2xlLmxvZyhwbGF0Zm9ybSk7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3NjcmlwdHMvcGxheWVyXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vc2NyaXB0cy90ZXJyYWluXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGNhbnZhcy53aWR0aCA9IDEwMjQ7XG4gIGNhbnZhcy5oZWlnaHQgPSA1NzY7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICBpbWFnZS5zcmMgPSBwbGF0Zm9ybVxuICBjb25zb2xlLmxvZyhpbWFnZSlcbiAgY29uc3QgcGxhdGZvcm1zID0gW1xuICAgIG5ldyBQbGF0Zm9ybShjb250ZXh0LCBjYW52YXMsIFxuICAgIHt4OiAtMSwgeTogNDEwLCBpbWFnZTogaW1hZ2V9KSxcbiAgICBuZXcgUGxhdGZvcm0oY29udGV4dCwgY2FudmFzLFxuICAgICAge3g6IGltYWdlLndpZHRoIC0gMiwgeTogNDEwLCBpbWFnZTogaW1hZ2V9KVxuICBdO1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKGNvbnRleHQsIGNhbnZhcywgcGxhdGZvcm1zKTtcbiAgcGxheWVyLmFuaW1hdGUoKTtcblxufSk7XG4iXSwibmFtZXMiOlsicGxhdGZvcm0iLCJjb25zb2xlIiwibG9nIiwiUGxheWVyIiwiUGxhdGZvcm0iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwicGxhdGZvcm1zIiwieCIsInkiLCJwbGF5ZXIiLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// player.js\nconst gravity = 0.5;\nclass Player {\n  constructor(context, canvas, platforms) {\n    this.position = {\n      x: 100,\n      y: 100\n    };\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n    this.width = 30;\n    this.height = 30;\n    this.context = context;\n    this.canvas = canvas;\n    this.platforms = platforms;\n    this.traveledCount = 0;\n    this.keys = {\n      right: {\n        pressed: false\n      },\n      left: {\n        pressed: false\n      }\n    };\n    window.addEventListener(\"keydown\", _ref => {\n      let {\n        keyCode\n      } = _ref;\n      switch (keyCode) {\n        case 65:\n          console.log(\"left\");\n          this.keys.left.pressed = true;\n          break;\n        case 83:\n          console.log(\"down\");\n          break;\n        case 68:\n          console.log(\"right\");\n          this.keys.right.pressed = true;\n          break;\n        case 87:\n          console.log(\"up\");\n          this.velocity.y -= 10;\n          break;\n      }\n    });\n    window.addEventListener(\"keyup\", _ref2 => {\n      let {\n        keyCode\n      } = _ref2;\n      switch (keyCode) {\n        case 65:\n          console.log(\"left\");\n          this.keys.left.pressed = false;\n          break;\n        case 83:\n          console.log(\"down\");\n          break;\n        case 68:\n          console.log(\"right\");\n          this.keys.right.pressed = false;\n          break;\n        case 87:\n          console.log(\"up\");\n          this.velocity.y -= 10;\n          break;\n      }\n    });\n  }\n  draw() {\n    this.context.fillStyle = 'red';\n    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  update() {\n    this.position.y += this.velocity.y;\n    this.position.x += this.velocity.x;\n    this.draw();\n    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {\n      this.velocity.y += gravity;\n    } else {\n      this.velocity.y = 0;\n    }\n  }\n  animate() {\n    let boundFunc = this.animate.bind(this);\n    requestAnimationFrame(boundFunc);\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.platforms.forEach(platform => {\n      platform.draw();\n    });\n    this.update();\n    if (this.keys.right.pressed && this.position.x < 400) {\n      this.velocity.x = 5;\n    } else if (this.keys.left.pressed && this.position.x > 100) {\n      this.velocity.x = -5;\n    } else {\n      this.velocity.x = 0;\n      if (this.keys.right.pressed) {\n        this.traveledCount += 5;\n        this.platforms.forEach(platform => {\n          platform.position.x -= 5;\n        });\n      } else if (this.keys.left.pressed) {\n        this.traveledCount -= 5;\n        this.platforms.forEach(platform => {\n          platform.position.x += 5;\n        });\n      }\n    }\n    console.log(this.traveledCount);\n\n    // platform collision detection\n    this.platforms.forEach(platform => {\n      if (this.position.y + this.height <= platform.position.y && this.position.y + this.height + this.velocity.y >= platform.position.y && this.position.x + this.width >= platform.position.x && this.position.x <= platform.position.x + platform.width) {\n        this.velocity.y = 0;\n      }\n    });\n    if (this.traveledCount > 2000) {\n      console.log(\"YOU WIN\");\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsSUFDbkIsSUFBSSxDQUFDRixRQUFRLENBQUNFLENBQUMsR0FBRyxJQUFJLENBQUNHLE1BQU0sR0FBRyxJQUFJLENBQUNGLFFBQVEsQ0FBQ0QsQ0FBQyxJQUMvQzBCLFFBQVEsQ0FBQzVCLFFBQVEsQ0FBQ0UsQ0FBQyxJQUNuQixJQUFJLENBQUNGLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLElBQUksQ0FBQ0csS0FBSyxJQUFJd0IsUUFBUSxDQUFDNUIsUUFBUSxDQUFDQyxDQUFDLElBQ25ELElBQUksQ0FBQ0QsUUFBUSxDQUFDQyxDQUFDLElBQUkyQixRQUFRLENBQUM1QixRQUFRLENBQUNDLENBQUMsR0FBRzJCLFFBQVEsQ0FBQ3hCLEtBQUssRUFBRTtRQUN6RCxJQUFJLENBQUNELFFBQVEsQ0FBQ0QsQ0FBQyxHQUFHLENBQUM7TUFDckI7SUFDRixDQUFDLENBQUM7SUFFRixJQUFJLElBQUksQ0FBQ0ksYUFBYSxHQUFHLElBQUksRUFBRTtNQUM3QlMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3hCO0VBRUY7QUFFRjtBQUdBLCtEQUFlckIsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVydG9waWEvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwbGF5ZXIuanNcbmNvbnN0IGdyYXZpdHkgPSAwLjU7XG5cbmNsYXNzIFBsYXllciB7XG5cbiAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwbGF0Zm9ybXMpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogMTAwLFxuICAgICAgeTogMTAwXG4gICAgfVxuICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgICB0aGlzLndpZHRoID0gMzBcbiAgICB0aGlzLmhlaWdodCA9IDMwXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBwbGF0Zm9ybXNcbiAgICB0aGlzLnRyYXZlbGVkQ291bnQgPSAwO1xuXG4gICAgdGhpcy5rZXlzID0ge1xuICAgICAgcmlnaHQ6IHtcbiAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoe2tleUNvZGV9KSA9PiB7XG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZnRcIilcbiAgICAgICAgICB0aGlzLmtleXMubGVmdC5wcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgODM6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJkb3duXCIpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJpZ2h0XCIpXG4gICAgICAgICAgdGhpcy5rZXlzLnJpZ2h0LnByZXNzZWQgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA4NzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVwXCIpXG4gICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IDEwXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKHtrZXlDb2RlfSkgPT4ge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0XCIpXG4gICAgICAgICAgdGhpcy5rZXlzLmxlZnQucHJlc3NlZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRvd25cIilcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHRcIilcbiAgICAgICAgICB0aGlzLmtleXMucmlnaHQucHJlc3NlZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA4NzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVwXCIpXG4gICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IDEwXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0ncmVkJztcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5LnlcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWxvY2l0eS55IDw9IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IGdyYXZpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IDBcbiAgICB9XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIGxldCBib3VuZEZ1bmMgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShib3VuZEZ1bmMpO1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5wbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgICBwbGF0Zm9ybS5kcmF3KCk7XG4gICAgfSlcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMua2V5cy5yaWdodC5wcmVzc2VkICYmIHRoaXMucG9zaXRpb24ueCA8IDQwMCkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gNVxuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlzLmxlZnQucHJlc3NlZCAmJiB0aGlzLnBvc2l0aW9uLnggPiAxMDApIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC01XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IDBcbiAgICAgIGlmICh0aGlzLmtleXMucmlnaHQucHJlc3NlZCkge1xuICAgICAgICB0aGlzLnRyYXZlbGVkQ291bnQgKz0gNVxuICAgICAgICB0aGlzLnBsYXRmb3Jtcy5mb3JFYWNoKHBsYXRmb3JtID0+IHtcbiAgICAgICAgICBwbGF0Zm9ybS5wb3NpdGlvbi54IC09IDVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlzLmxlZnQucHJlc3NlZCkge1xuICAgICAgICB0aGlzLnRyYXZlbGVkQ291bnQgLT0gNVxuICAgICAgICB0aGlzLnBsYXRmb3Jtcy5mb3JFYWNoKHBsYXRmb3JtID0+IHtcbiAgICAgICAgICBwbGF0Zm9ybS5wb3NpdGlvbi54ICs9IDVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnRyYXZlbGVkQ291bnQpO1xuXG4gICAgLy8gcGxhdGZvcm0gY29sbGlzaW9uIGRldGVjdGlvblxuICAgIHRoaXMucGxhdGZvcm1zLmZvckVhY2gocGxhdGZvcm0gPT4ge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDw9IFxuICAgICAgICBwbGF0Zm9ybS5wb3NpdGlvbi55ICYmIFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIHRoaXMudmVsb2NpdHkueSA+PSBcbiAgICAgICAgcGxhdGZvcm0ucG9zaXRpb24ueSAmJlxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID49IHBsYXRmb3JtLnBvc2l0aW9uLnggJiYgXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA8PSBwbGF0Zm9ybS5wb3NpdGlvbi54ICsgcGxhdGZvcm0ud2lkdGgpIHtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIGlmICh0aGlzLnRyYXZlbGVkQ291bnQgPiAyMDAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllPVSBXSU5cIilcbiAgICB9XG5cbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl0sIm5hbWVzIjpbImdyYXZpdHkiLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsImNvbnRleHQiLCJjYW52YXMiLCJwbGF0Zm9ybXMiLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJ3aWR0aCIsImhlaWdodCIsInRyYXZlbGVkQ291bnQiLCJrZXlzIiwicmlnaHQiLCJwcmVzc2VkIiwibGVmdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVmIiwia2V5Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJfcmVmMiIsImRyYXciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInVwZGF0ZSIsImFuaW1hdGUiLCJib3VuZEZ1bmMiLCJiaW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsInBsYXRmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/terrain.js":
/*!********************************!*\
  !*** ./src/scripts/terrain.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// terrain.js\nclass Platform {\n  constructor(context, canvas, _ref) {\n    let {\n      x,\n      y,\n      image\n    } = _ref;\n    this.position = {\n      x: x,\n      y: y\n    };\n    this.image = image;\n    this.width = image.width;\n    this.height = image.height;\n    this.context = context;\n    this.canvas = canvas;\n  }\n  draw() {\n    this.context.drawImage(this.image, this.position.x, this.position.y);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Platform);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90ZXJyYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBLE1BQU1BLFFBQVEsQ0FBQztFQUViQyxXQUFXQSxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBQUMsSUFBQSxFQUFpQjtJQUFBLElBQWY7TUFBQ0MsQ0FBQztNQUFFQyxDQUFDO01BQUVDO0lBQUssQ0FBQyxHQUFBSCxJQUFBO0lBQ3hDLElBQUksQ0FBQ0ksUUFBUSxHQUFHO01BQ2RILENBQUMsRUFBRUEsQ0FBQztNQUNKQyxDQUFDLEVBQUVBO0lBQ0wsQ0FBQztJQUNELElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0UsS0FBSyxHQUFHRixLQUFLLENBQUNFLEtBQUs7SUFDeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdILEtBQUssQ0FBQ0csTUFBTTtJQUMxQixJQUFJLENBQUNSLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUV0QjtFQUVBUSxJQUFJQSxDQUFBLEVBQUc7SUFDTCxJQUFJLENBQUNULE9BQU8sQ0FBQ1UsU0FBUyxDQUFDLElBQUksQ0FBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQ0MsUUFBUSxDQUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDRyxRQUFRLENBQUNGLENBQUMsQ0FBQztFQUN0RTtBQUVGO0FBRUEsK0RBQWVOLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnRvcGlhLy4vc3JjL3NjcmlwdHMvdGVycmFpbi5qcz9iNzQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRlcnJhaW4uanNcbmNsYXNzIFBsYXRmb3JtIHtcblxuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIHt4LCB5LCBpbWFnZX0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlXG4gICAgdGhpcy53aWR0aCA9IGltYWdlLndpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHRcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcblxuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybTsiXSwibmFtZXMiOlsiUGxhdGZvcm0iLCJjb25zdHJ1Y3RvciIsImNvbnRleHQiLCJjYW52YXMiLCJfcmVmIiwieCIsInkiLCJpbWFnZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3IiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/terrain.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnRvcGlhLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/platform.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL3BsYXRmb3JtLnBuZy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUscUJBQXVCLHdCQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVydG9waWEvLi9zcmMvaW1nL3BsYXRmb3JtLnBuZz84Mzg3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvcGxhdGZvcm0ucG5nXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/platform.png\n");

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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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