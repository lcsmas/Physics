/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["playable"] = factory();
	else
		root["playable"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\nlet canvas;\nlet ctx;\n\nconst RIGHT_CLICK = 2;\nconst MOUSE_WHEEL = 1;\nconst LEFT_CLICK = 0;\n\nclass Game {\n  shapes = [];\n  fps = 60;\n  startTime;\n  now;\n  then;\n  elapsed;\n\n\n  init(_canvas) {\n    canvas = _canvas;\n    ctx = canvas.getContext('2d');\n    this.start()\n  }\n\n  start() {\n    this.addShapeOnRightClick();\n    this.removeShapeOnLeftClick();\n    this.animate();\n  }\n\n  addShapeOnRightClick() {\n    canvas.addEventListener('mousedown', e => {\n      if(e.button === LEFT_CLICK ) {\n        this.shapes.push(new Rectangle({ x: e.x, y: e.y }));\n      }\n    })\n  }\n\n  removeShapeOnLeftClick() {\n    canvas.addEventListener(\"contextmenu\", (event) => {\n      event.preventDefault();\n    });\n    canvas.addEventListener('mousedown', e => {\n      if(e.button === RIGHT_CLICK ) {\n        this.shapes = [];\n      }\n    })\n  }\n\n  animate() {\n    requestAnimationFrame(this.animate.bind(this));\n\n    this.clearScreen();\n    this.drawShapes();\n  }\n\n  clearScreen() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n  }\n\n  drawShapes() {\n    this.shapes.forEach(shape => {\n      shape.draw();\n    })\n  }\n}\n\n\nclass Rectangle {\n  x = 0;\n  y = 0;\n  width = 100;\n  height = 100;\n  currentColor = 0;\n  speed = 1;\n  colors = ['red', 'green', 'blue', 'black']\n\n  constructor({x, y}) {\n    this.x = x;\n    this.y = y;\n\n    this.jumpOnMouseWheelPress();\n  }\n\n  jumpOnMouseWheelPress() {\n    canvas.addEventListener('mousedown', (e) => {\n      if(e.button === MOUSE_WHEEL) {\n        if(this.clickInMe(e.clientX, e.clientY)) {\n          this.jump()\n        }\n      }\n    })\n  }\n\n  clickInMe(clickX, clickY) {\n    return clickX < (this.x + this.width) && clickX > this.x && clickY < (this.y + this.height) && clickY > this.y;\n  }\n\n  jump() {\n    this.speed = -10;\n  }\n\n  draw() {\n    this.animate();\n    ctx.fillStyle = this.colors[this.currentColor];\n    ctx.fillRect(this.x, this.y, this.width, this.height);\n  }\n\n  animate() {\n    this.followGravity();\n    this.floorCollision();\n  }\n\n  followGravity() {\n    this.speed = this.speed + 9/30;\n    this.y = this.y + this.speed;\n  }\n\n  floorCollision() {\n    if(this.y + this.height > canvas.height) {\n      this.y = canvas.height - this.height;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://playable/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});