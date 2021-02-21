/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar WebGLContext_1 = __webpack_require__(/*! ./libs/WebGLContext */ \"./src/libs/WebGLContext.ts\");\r\nvar move_1 = __webpack_require__(/*! ./libs/move */ \"./src/libs/move.ts\");\r\nvar helper_1 = __webpack_require__(/*! ./libs/helper */ \"./src/libs/helper.ts\");\r\nvar shader_1 = __webpack_require__(/*! ./libs/shader */ \"./src/libs/shader.ts\");\r\nvar variables_1 = __webpack_require__(/*! ./libs/variables */ \"./src/libs/variables.ts\");\r\nvar vec3_1 = __importDefault(__webpack_require__(/*! ./libs/tsm/vec3 */ \"./src/libs/tsm/vec3.ts\"));\r\nvar mat4_1 = __importDefault(__webpack_require__(/*! ./libs/tsm/mat4 */ \"./src/libs/tsm/mat4.ts\"));\r\nvar texture_1 = __webpack_require__(/*! ./libs/texture */ \"./src/libs/texture.ts\");\r\nvar model_1 = __webpack_require__(/*! ./libs/tsm/model */ \"./src/libs/tsm/model.ts\");\r\nvar camera_1 = __webpack_require__(/*! ./libs/camera */ \"./src/libs/camera.ts\");\r\nvar dragonTransform = new move_1.Move(new vec3_1.default([0, 0, 0]), new vec3_1.default([1, 1, 1]));\r\nvar floorTransform = new move_1.Move(new vec3_1.default([0, 0, 0]), new vec3_1.default([1, 1, 1]));\r\nvar lightDirection = new vec3_1.default([0.58, 0.58, -0.58]);\r\nvar lightMatrix;\r\ndocument.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var canvas, camera, modelVertShader, modelFragShader, shadowFragShader, shadowVertShader, dragonJson, shadowShader, shaderProgram, projectionShadow, textureRender, dragonModel, floorModel, time_old, fps_time, fps_frames, fps_counter, animate;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                canvas = document.getElementById(\"canvas\");\r\n                try {\r\n                    WebGLContext_1.WebGL.context = canvas.getContext('webgl2', { antialias: true });\r\n                }\r\n                catch (e) {\r\n                    alert('You are not webgl compatible :(');\r\n                    return [2 /*return*/, false];\r\n                }\r\n                camera = new camera_1.Camera(canvas, dragonTransform.position);\r\n                return [4 /*yield*/, helper_1.Helper.MakeRequest('./resources/shaders/model.vert', 'text')];\r\n            case 1:\r\n                modelVertShader = _a.sent();\r\n                return [4 /*yield*/, helper_1.Helper.MakeRequest('./resources/shaders/model.frag', 'text')];\r\n            case 2:\r\n                modelFragShader = _a.sent();\r\n                return [4 /*yield*/, helper_1.Helper.MakeRequest('./resources/shaders/shadow.frag', 'text')];\r\n            case 3:\r\n                shadowFragShader = _a.sent();\r\n                return [4 /*yield*/, helper_1.Helper.MakeRequest('./resources/shaders/shadow.vert', 'text')];\r\n            case 4:\r\n                shadowVertShader = _a.sent();\r\n                return [4 /*yield*/, helper_1.Helper.GetJson('./resources/dragon.json')];\r\n            case 5:\r\n                dragonJson = _a.sent();\r\n                shadowShader = new shader_1.Shader(shadowVertShader, shadowFragShader);\r\n                shaderProgram = new shader_1.Shader(modelVertShader, modelFragShader);\r\n                WebGLContext_1.WebGL.context.uniform1i(shaderProgram.getUniformLocation(variables_1.ShaderVariable.sampler), 0);\r\n                WebGLContext_1.WebGL.context.uniform1i(shaderProgram.getUniformLocation(variables_1.ShaderVariable.samplerShadowMap), 1);\r\n                WebGLContext_1.WebGL.context.uniform3fv(shaderProgram.getUniformLocation(variables_1.ShaderVariable.lightDirection), lightDirection.xyz);\r\n                projectionShadow = mat4_1.default.orthographic(-50, 50, -50, 50, 1, 100);\r\n                textureRender = new texture_1.RenderTexture();\r\n                dragonModel = new model_1.Model(dragonJson.vertices, dragonJson.indices, [texture_1.Texture.loadImage('./resources/dragon.png'), textureRender]);\r\n                floorModel = model_1.Model.createFloor(30, texture_1.Texture.loadImage('./resources/granit.jpg'));\r\n                WebGLContext_1.WebGL.context.enable(WebGLContext_1.WebGL.context.DEPTH_TEST);\r\n                WebGLContext_1.WebGL.context.depthFunc(WebGLContext_1.WebGL.context.LEQUAL);\r\n                WebGLContext_1.WebGL.context.clearDepth(1.0);\r\n                time_old = 0;\r\n                fps_time = 0;\r\n                fps_frames = 0;\r\n                fps_counter = document.getElementById(\"fps_counter\");\r\n                animate = function (time) {\r\n                    var dt = time - time_old;\r\n                    time_old = time;\r\n                    fps_time += dt;\r\n                    fps_frames++;\r\n                    if (fps_time > 1000) {\r\n                        var fps = 1000 * fps_frames / fps_time;\r\n                        // @ts-ignore\r\n                        fps_counter.innerHTML = Math.round(fps) + \" FPS\";\r\n                        fps_time = fps_frames = 0;\r\n                    }\r\n                    camera.update();\r\n                    textureRender.renderToTexture(function () {\r\n                        shadowShader.use();\r\n                        WebGLContext_1.WebGL.context.depthFunc(WebGLContext_1.WebGL.context.LESS);\r\n                        WebGLContext_1.WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(variables_1.ShaderVariable.Pmatrix), false, projectionShadow.all());\r\n                        WebGLContext_1.WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(variables_1.ShaderVariable.Lmatrix), false, lightMatrix.all());\r\n                        dragonModel.render(function () { return WebGLContext_1.WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(variables_1.ShaderVariable.Mmatrix), false, dragonTransform.getModelMatrix().all()); });\r\n                        // cubeModel.render(() => WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(ShaderVariable.Mmatrix), false, cubeTransform.getModelMatrix().all()));\r\n                        floorModel.render(function () { return WebGLContext_1.WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(variables_1.ShaderVariable.Mmatrix), false, floorTransform.getModelMatrix().all()); });\r\n                    });\r\n                    shaderProgram.use();\r\n                    WebGLContext_1.WebGL.context.depthFunc(WebGLContext_1.WebGL.context.LESS);\r\n                    WebGLContext_1.WebGL.context.viewport(0.0, 0.0, canvas.width, canvas.height);\r\n                    WebGLContext_1.WebGL.context.clearColor(0.0, 0.0, 0.0, 1.0);\r\n                    WebGLContext_1.WebGL.context.clear(WebGLContext_1.WebGL.context.COLOR_BUFFER_BIT | WebGLContext_1.WebGL.context.DEPTH_BUFFER_BIT);\r\n                    WebGLContext_1.WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(variables_1.ShaderVariable.Pmatrix), false, camera.getProjection().all());\r\n                    WebGLContext_1.WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(variables_1.ShaderVariable.Vmatrix), false, camera.getView().all());\r\n                    WebGLContext_1.WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(variables_1.ShaderVariable.PmatrixLight), false, projectionShadow.all());\r\n                    WebGLContext_1.WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(variables_1.ShaderVariable.Lmatrix), false, lightMatrix.all());\r\n                    dragonModel.render(function () { return WebGLContext_1.WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(variables_1.ShaderVariable.Mmatrix), false, dragonTransform.getModelMatrix().all()); });\r\n                    // cubeModel.render(() => WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(ShaderVariable.Mmatrix), false, cubeTransform.getModelMatrix().all()));\r\n                    floorModel.render(function () { return WebGLContext_1.WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(variables_1.ShaderVariable.Mmatrix), false, floorTransform.getModelMatrix().all()); });\r\n                    // skybox.render(camera);\r\n                    WebGLContext_1.WebGL.context.flush();\r\n                    window.requestAnimationFrame(animate);\r\n                };\r\n                animate(0);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/index.ts?");

/***/ }),

/***/ "./src/libs/WebGLContext.ts":
/*!**********************************!*\
  !*** ./src/libs/WebGLContext.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.WebGL = void 0;\r\nvar WebGL = /** @class */ (function (_super) {\r\n    __extends(WebGL, _super);\r\n    function WebGL() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return WebGL;\r\n}(WebGLRenderingContext));\r\nexports.WebGL = WebGL;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/WebGLContext.ts?");

/***/ }),

/***/ "./src/libs/camera.ts":
/*!****************************!*\
  !*** ./src/libs/camera.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Camera = void 0;\r\nvar vec3_1 = __importDefault(__webpack_require__(/*! ./tsm/vec3 */ \"./src/libs/tsm/vec3.ts\"));\r\nvar mat4_1 = __importDefault(__webpack_require__(/*! ./tsm/mat4 */ \"./src/libs/tsm/mat4.ts\"));\r\nvar Camera = /** @class */ (function () {\r\n    function Camera(canvas, target) {\r\n        var _this = this;\r\n        this._radius = 40;\r\n        this._axisAngles = new vec3_1.default([0, 0, 0]);\r\n        this._fov = 45;\r\n        this._zNear = 0.1;\r\n        this._zFar = 1000;\r\n        this._position = new vec3_1.default([0, 0, 8]);\r\n        this._dX = 0;\r\n        this._dY = 0;\r\n        this._drag = false;\r\n        this._aspectRatio = canvas.width / canvas.height;\r\n        this._target = target;\r\n        var old_x, old_y;\r\n        var mouseDown = function (e) {\r\n            _this._drag = true;\r\n            old_x = e.pageX, old_y = e.pageY;\r\n            e.preventDefault();\r\n            return false;\r\n        };\r\n        var mouseUp = function (e) { return _this._drag = false; };\r\n        var mouseMove = function (e) {\r\n            if (!_this._drag)\r\n                return false;\r\n            _this._dX = e.pageX - old_x;\r\n            _this._dY = e.pageY - old_y;\r\n            _this._axisAngles.x += _this._dX * Math.PI / canvas.width;\r\n            _this._axisAngles.y += _this._dY * Math.PI / canvas.height;\r\n            old_x = e.pageX, old_y = e.pageY;\r\n            e.preventDefault();\r\n        };\r\n        var mouseScroll = function (e) {\r\n            _this._radius += e.deltaY * 0.01;\r\n            if (_this._radius < 10) {\r\n                _this._radius = 10;\r\n            }\r\n            if (_this._radius > 60) {\r\n                _this._radius = 60;\r\n            }\r\n        };\r\n        canvas.addEventListener(\"mousedown\", mouseDown, false);\r\n        canvas.addEventListener(\"mouseup\", mouseUp, false);\r\n        canvas.addEventListener(\"mouseout\", mouseUp, false);\r\n        canvas.addEventListener(\"mousemove\", mouseMove, false);\r\n        canvas.addEventListener(\"wheel\", mouseScroll, false);\r\n    }\r\n    Camera.prototype.getProjection = function () {\r\n        return mat4_1.default.perspective(this._fov, this._aspectRatio, this._zNear, this._zFar);\r\n    };\r\n    Camera.prototype.getView = function () {\r\n        return mat4_1.default.lookAt(this._position, this._target, new vec3_1.default([0, 1, 0]));\r\n    };\r\n    Camera.prototype.update = function () {\r\n        this._position.x = Math.sin(this._axisAngles.x) * this._radius;\r\n        this._position.z = Math.cos(this._axisAngles.x) * this._radius;\r\n        this._position.y = Math.cos(this._axisAngles.y) * this._radius;\r\n        this._position.add(this._target);\r\n    };\r\n    return Camera;\r\n}());\r\nexports.Camera = Camera;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/camera.ts?");

/***/ }),

/***/ "./src/libs/helper.ts":
/*!****************************!*\
  !*** ./src/libs/helper.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Helper = void 0;\r\nvar Helper = /** @class */ (function () {\r\n    function Helper() {\r\n    }\r\n    Helper.GetJson = function (url) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var result;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.MakeRequest(url)];\r\n                    case 1:\r\n                        result = _a.sent();\r\n                        return [2 /*return*/, JSON.parse(result)];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Helper.MakeRequest = function (url, responseType, method) {\r\n        if (responseType === void 0) { responseType = \"\"; }\r\n        if (method === void 0) { method = 'GET'; }\r\n        return new Promise(function (resolve, reject) {\r\n            var xhr = new XMLHttpRequest();\r\n            xhr.open(method, url);\r\n            xhr.onload = function () {\r\n                if (this.status >= 200 && this.status < 300) {\r\n                    resolve(xhr.response);\r\n                }\r\n                else {\r\n                    reject({\r\n                        status: this.status,\r\n                        statusText: xhr.statusText\r\n                    });\r\n                }\r\n            };\r\n            xhr.onerror = function () {\r\n                reject({\r\n                    status: this.status,\r\n                    statusText: xhr.statusText\r\n                });\r\n            };\r\n            xhr.send();\r\n        });\r\n    };\r\n    return Helper;\r\n}());\r\nexports.Helper = Helper;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/helper.ts?");

/***/ }),

/***/ "./src/libs/move.ts":
/*!**************************!*\
  !*** ./src/libs/move.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Move = void 0;\r\nvar vec3_1 = __importDefault(__webpack_require__(/*! ./tsm/vec3 */ \"./src/libs/tsm/vec3.ts\"));\r\nvar mat4_1 = __importDefault(__webpack_require__(/*! ./tsm/mat4 */ \"./src/libs/tsm/mat4.ts\"));\r\nvar Move = /** @class */ (function () {\r\n    function Move(position, scale) {\r\n        this.position = new vec3_1.default([0, 0, 0]);\r\n        this.scale = new vec3_1.default([1, 1, 1]);\r\n        this.position = position;\r\n        this.scale = scale;\r\n        this._model = new mat4_1.default().setIdentity();\r\n        this._model.translate(this.position);\r\n        this._model.scale(this.scale);\r\n    }\r\n    Move.prototype.getModelMatrix = function () {\r\n        return this._model;\r\n    };\r\n    Move.prototype.rotate = function (angle, axis) {\r\n        this._model.rotate(angle, axis);\r\n    };\r\n    Move.prototype.rotateX = function (angle) {\r\n        this._model.rotate(angle, new vec3_1.default([1, 0, 0]));\r\n    };\r\n    Move.prototype.rotateY = function (angle) {\r\n        this._model.rotate(angle, new vec3_1.default([0, 1, 0]));\r\n    };\r\n    Move.prototype.rotateZ = function (angle) {\r\n        this._model.rotate(angle, new vec3_1.default([0, 0, 1]));\r\n    };\r\n    Move.prototype.translate = function (vector) {\r\n        this.position.add(vector);\r\n        this._model.translate(vector);\r\n    };\r\n    return Move;\r\n}());\r\nexports.Move = Move;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/move.ts?");

/***/ }),

/***/ "./src/libs/shader.ts":
/*!****************************!*\
  !*** ./src/libs/shader.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Shader = void 0;\r\nvar WebGLContext_1 = __webpack_require__(/*! ./WebGLContext */ \"./src/libs/WebGLContext.ts\");\r\nvar Shader = /** @class */ (function () {\r\n    function Shader(vertexShader, fragmentShader) {\r\n        this._uniformCash = new Map();\r\n        this._attributeCash = new Map();\r\n        var shaderV = WebGLContext_1.WebGL.context.createShader(WebGLContext_1.WebGL.context.VERTEX_SHADER);\r\n        WebGLContext_1.WebGL.context.shaderSource(shaderV, vertexShader);\r\n        WebGLContext_1.WebGL.context.compileShader(shaderV);\r\n        if (!WebGLContext_1.WebGL.context.getShaderParameter(shaderV, WebGLContext_1.WebGL.context.COMPILE_STATUS)) {\r\n            console.error(WebGLContext_1.WebGL.context.getShaderInfoLog(shaderV));\r\n            //throw new Error('Failed to compile vertex shader');\r\n        }\r\n        var shaderF = WebGLContext_1.WebGL.context.createShader(WebGLContext_1.WebGL.context.FRAGMENT_SHADER);\r\n        WebGLContext_1.WebGL.context.shaderSource(shaderF, fragmentShader);\r\n        WebGLContext_1.WebGL.context.compileShader(shaderF);\r\n        if (!WebGLContext_1.WebGL.context.getShaderParameter(shaderF, WebGLContext_1.WebGL.context.COMPILE_STATUS)) {\r\n            console.error(WebGLContext_1.WebGL.context.getShaderInfoLog(shaderF));\r\n            //throw new Error('Failed to compile fragment shader');\r\n        }\r\n        this._program = WebGLContext_1.WebGL.context.createProgram();\r\n        if (!this._program) {\r\n            throw new Error('Failed to compile shader program');\r\n        }\r\n        WebGLContext_1.WebGL.context.attachShader(this._program, shaderV);\r\n        WebGLContext_1.WebGL.context.attachShader(this._program, shaderF);\r\n        WebGLContext_1.WebGL.context.linkProgram(this._program);\r\n        if (!WebGLContext_1.WebGL.context.getProgramParameter(this._program, WebGLContext_1.WebGL.context.LINK_STATUS)) {\r\n            console.error(WebGLContext_1.WebGL.context.getProgramInfoLog(this._program));\r\n            //throw new Error('Failed to link program');\r\n        }\r\n    }\r\n    Shader.prototype.use = function () {\r\n        WebGLContext_1.WebGL.context.useProgram(this._program);\r\n    };\r\n    Shader.prototype.getUniformLocation = function (name) {\r\n        var location = this._uniformCash.get(name);\r\n        if (!location) {\r\n            location = WebGLContext_1.WebGL.context.getUniformLocation(this._program, name);\r\n        }\r\n        return location;\r\n    };\r\n    return Shader;\r\n}());\r\nexports.Shader = Shader;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/shader.ts?");

/***/ }),

/***/ "./src/libs/texture.ts":
/*!*****************************!*\
  !*** ./src/libs/texture.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.RenderTexture = exports.CubeTexture = exports.Texture = void 0;\r\nvar WebGLContext_1 = __webpack_require__(/*! ./WebGLContext */ \"./src/libs/WebGLContext.ts\");\r\nvar Texture = /** @class */ (function () {\r\n    function Texture(texture) {\r\n        this._texture = texture;\r\n    }\r\n    Texture.loadImage = function (image_URL) {\r\n        var image = new Image();\r\n        image.src = image_URL;\r\n        image.crossOrigin = \"anonymous\";\r\n        var texture = WebGLContext_1.WebGL.context.createTexture();\r\n        image.onload = function (e) {\r\n            WebGLContext_1.WebGL.context.pixelStorei(WebGLContext_1.WebGL.context.UNPACK_FLIP_Y_WEBGL, true);\r\n            WebGLContext_1.WebGL.context.bindTexture(WebGLContext_1.WebGL.context.TEXTURE_2D, texture);\r\n            WebGLContext_1.WebGL.context.texImage2D(WebGLContext_1.WebGL.context.TEXTURE_2D, 0, WebGLContext_1.WebGL.context.RGBA, WebGLContext_1.WebGL.context.RGBA, WebGLContext_1.WebGL.context.UNSIGNED_BYTE, image);\r\n            WebGLContext_1.WebGL.context.texParameteri(WebGLContext_1.WebGL.context.TEXTURE_2D, WebGLContext_1.WebGL.context.TEXTURE_MAG_FILTER, WebGLContext_1.WebGL.context.LINEAR);\r\n            WebGLContext_1.WebGL.context.texParameteri(WebGLContext_1.WebGL.context.TEXTURE_2D, WebGLContext_1.WebGL.context.TEXTURE_MIN_FILTER, WebGLContext_1.WebGL.context.NEAREST_MIPMAP_LINEAR);\r\n            WebGLContext_1.WebGL.context.generateMipmap(WebGLContext_1.WebGL.context.TEXTURE_2D);\r\n            WebGLContext_1.WebGL.context.bindTexture(WebGLContext_1.WebGL.context.TEXTURE_2D, null);\r\n        };\r\n        return new Texture(texture);\r\n    };\r\n    ;\r\n    Texture.prototype.get = function () {\r\n        return this._texture;\r\n    };\r\n    return Texture;\r\n}());\r\nexports.Texture = Texture;\r\nvar CubeTexture = /** @class */ (function (_super) {\r\n    __extends(CubeTexture, _super);\r\n    function CubeTexture() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    CubeTexture.loadImageAsCube = function (faces) {\r\n        var texture = WebGLContext_1.WebGL.context.createTexture();\r\n        WebGLContext_1.WebGL.context.bindTexture(WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP, texture);\r\n        faces.forEach(function (faceInfo) {\r\n            var target = faceInfo.target, url = faceInfo.url;\r\n            // Upload the canvas to the cubemap face.\r\n            var level = 0;\r\n            var internalFormat = WebGLContext_1.WebGL.context.RGBA;\r\n            var width = WebGLContext_1.WebGL.context.canvas.width;\r\n            var height = WebGLContext_1.WebGL.context.canvas.height;\r\n            var format = WebGLContext_1.WebGL.context.RGBA;\r\n            var type = WebGLContext_1.WebGL.context.UNSIGNED_BYTE;\r\n            // setup each face so it's immediately renderable\r\n            WebGLContext_1.WebGL.context.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);\r\n            // Asynchronously load an image\r\n            var image = new Image();\r\n            image.src = url;\r\n            image.crossOrigin = \"anonymous\";\r\n            image.onload = function () {\r\n                // Now that the image has loaded make copy it to the texture.\r\n                WebGLContext_1.WebGL.context.bindTexture(WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP, texture);\r\n                WebGLContext_1.WebGL.context.texImage2D(target, level, internalFormat, format, type, image);\r\n                WebGLContext_1.WebGL.context.generateMipmap(WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP);\r\n            };\r\n        });\r\n        WebGLContext_1.WebGL.context.generateMipmap(WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP);\r\n        WebGLContext_1.WebGL.context.texParameteri(WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP, WebGLContext_1.WebGL.context.TEXTURE_MIN_FILTER, WebGLContext_1.WebGL.context.LINEAR_MIPMAP_LINEAR);\r\n        return new CubeTexture(texture);\r\n    };\r\n    CubeTexture.oceanCubeMapPath = function () { return [\r\n        {\r\n            target: WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP_POSITIVE_X,\r\n            url: 'resources/skybox/sb_ocean_right.jpg',\r\n        },\r\n        {\r\n            target: WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP_NEGATIVE_X,\r\n            url: 'resources/skybox/sb_ocean_left.jpg',\r\n        },\r\n        {\r\n            target: WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP_POSITIVE_Y,\r\n            url: 'resources/skybox/sb_ocean_top.jpg',\r\n        },\r\n        {\r\n            target: WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP_NEGATIVE_Y,\r\n            url: 'resources/skybox/sb_ocean_bottom.jpg',\r\n        },\r\n        {\r\n            target: WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP_POSITIVE_Z,\r\n            url: 'resources/skybox/sb_ocean_front.jpg',\r\n        },\r\n        {\r\n            target: WebGLContext_1.WebGL.context.TEXTURE_CUBE_MAP_NEGATIVE_Z,\r\n            url: 'resources/skybox/sb_ocean_back.jpg',\r\n        },\r\n    ]; };\r\n    return CubeTexture;\r\n}(Texture));\r\nexports.CubeTexture = CubeTexture;\r\nvar RenderTexture = /** @class */ (function (_super) {\r\n    __extends(RenderTexture, _super);\r\n    function RenderTexture() {\r\n        var _this = _super.call(this, WebGLContext_1.WebGL.context.createTexture()) || this;\r\n        _this._frameBuffer = WebGLContext_1.WebGL.context.createFramebuffer();\r\n        WebGLContext_1.WebGL.context.bindFramebuffer(WebGLContext_1.WebGL.context.FRAMEBUFFER, _this._frameBuffer);\r\n        _this._renderBuffer = WebGLContext_1.WebGL.context.createRenderbuffer();\r\n        WebGLContext_1.WebGL.context.bindRenderbuffer(WebGLContext_1.WebGL.context.RENDERBUFFER, _this._renderBuffer);\r\n        WebGLContext_1.WebGL.context.renderbufferStorage(WebGLContext_1.WebGL.context.RENDERBUFFER, WebGLContext_1.WebGL.context.DEPTH_COMPONENT16, 512, 512);\r\n        WebGLContext_1.WebGL.context.framebufferRenderbuffer(WebGLContext_1.WebGL.context.FRAMEBUFFER, WebGLContext_1.WebGL.context.DEPTH_ATTACHMENT, WebGLContext_1.WebGL.context.RENDERBUFFER, _this._renderBuffer);\r\n        WebGLContext_1.WebGL.context.bindTexture(WebGLContext_1.WebGL.context.TEXTURE_2D, _this._texture);\r\n        WebGLContext_1.WebGL.context.texParameteri(WebGLContext_1.WebGL.context.TEXTURE_2D, WebGLContext_1.WebGL.context.TEXTURE_MAG_FILTER, WebGLContext_1.WebGL.context.LINEAR);\r\n        WebGLContext_1.WebGL.context.texParameteri(WebGLContext_1.WebGL.context.TEXTURE_2D, WebGLContext_1.WebGL.context.TEXTURE_MIN_FILTER, WebGLContext_1.WebGL.context.LINEAR);\r\n        WebGLContext_1.WebGL.context.texImage2D(WebGLContext_1.WebGL.context.TEXTURE_2D, 0, WebGLContext_1.WebGL.context.RGBA, 512, 512, 0, WebGLContext_1.WebGL.context.RGBA, WebGLContext_1.WebGL.context.UNSIGNED_BYTE, null);\r\n        WebGLContext_1.WebGL.context.framebufferTexture2D(WebGLContext_1.WebGL.context.FRAMEBUFFER, WebGLContext_1.WebGL.context.COLOR_ATTACHMENT0, WebGLContext_1.WebGL.context.TEXTURE_2D, _this._texture, 0);\r\n        WebGLContext_1.WebGL.context.bindTexture(WebGLContext_1.WebGL.context.TEXTURE_2D, null);\r\n        WebGLContext_1.WebGL.context.bindFramebuffer(WebGLContext_1.WebGL.context.FRAMEBUFFER, null);\r\n        return _this;\r\n    }\r\n    RenderTexture.prototype.renderToTexture = function (renderFunction) {\r\n        WebGLContext_1.WebGL.context.bindFramebuffer(WebGLContext_1.WebGL.context.FRAMEBUFFER, this._frameBuffer);\r\n        WebGLContext_1.WebGL.context.viewport(0.0, 0.0, 512, 512);\r\n        WebGLContext_1.WebGL.context.clearColor(0.0, 0.0, 0.0, 1.0); //red -> Z=Zfar on the shadow map\r\n        WebGLContext_1.WebGL.context.clear(WebGLContext_1.WebGL.context.COLOR_BUFFER_BIT | WebGLContext_1.WebGL.context.DEPTH_BUFFER_BIT);\r\n        renderFunction();\r\n        WebGLContext_1.WebGL.context.bindFramebuffer(WebGLContext_1.WebGL.context.FRAMEBUFFER, null);\r\n    };\r\n    return RenderTexture;\r\n}(Texture));\r\nexports.RenderTexture = RenderTexture;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/texture.ts?");

/***/ }),

/***/ "./src/libs/tsm/constants.ts":
/*!***********************************!*\
  !*** ./src/libs/tsm/constants.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.epsilon = void 0;\r\nexports.epsilon = 0.00001;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/tsm/constants.ts?");

/***/ }),

/***/ "./src/libs/tsm/mat3.ts":
/*!******************************!*\
  !*** ./src/libs/tsm/mat3.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar mat4_1 = __importDefault(__webpack_require__(/*! ./mat4 */ \"./src/libs/tsm/mat4.ts\"));\r\nvar quat_1 = __importDefault(__webpack_require__(/*! ./quat */ \"./src/libs/tsm/quat.ts\"));\r\nvar vec2_1 = __importDefault(__webpack_require__(/*! ./vec2 */ \"./src/libs/tsm/vec2.ts\"));\r\nvar vec3_1 = __importDefault(__webpack_require__(/*! ./vec3 */ \"./src/libs/tsm/vec3.ts\"));\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/libs/tsm/constants.ts\");\r\nvar mat3 = /** @class */ (function () {\r\n    function mat3(values) {\r\n        this.values = new Float32Array(9);\r\n        if (values !== undefined) {\r\n            this.init(values);\r\n        }\r\n    }\r\n    mat3.prototype.at = function (index) {\r\n        return this.values[index];\r\n    };\r\n    mat3.prototype.init = function (values) {\r\n        for (var i = 0; i < 9; i++) {\r\n            this.values[i] = values[i];\r\n        }\r\n        return this;\r\n    };\r\n    mat3.prototype.reset = function () {\r\n        for (var i = 0; i < 9; i++) {\r\n            this.values[i] = 0;\r\n        }\r\n    };\r\n    mat3.prototype.copy = function (dest) {\r\n        if (!dest) {\r\n            dest = new mat3();\r\n        }\r\n        for (var i = 0; i < 9; i++) {\r\n            dest.values[i] = this.values[i];\r\n        }\r\n        return dest;\r\n    };\r\n    mat3.prototype.all = function () {\r\n        var data = [];\r\n        for (var i = 0; i < 9; i++) {\r\n            data[i] = this.values[i];\r\n        }\r\n        return data;\r\n    };\r\n    mat3.prototype.row = function (index) {\r\n        return [\r\n            this.values[index * 3 + 0],\r\n            this.values[index * 3 + 1],\r\n            this.values[index * 3 + 2],\r\n        ];\r\n    };\r\n    mat3.prototype.col = function (index) {\r\n        return [\r\n            this.values[index],\r\n            this.values[index + 3],\r\n            this.values[index + 6],\r\n        ];\r\n    };\r\n    mat3.prototype.equals = function (matrix, threshold) {\r\n        if (threshold === void 0) { threshold = constants_1.epsilon; }\r\n        for (var i = 0; i < 9; i++) {\r\n            if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    };\r\n    mat3.prototype.determinant = function () {\r\n        var a00 = this.values[0];\r\n        var a01 = this.values[1];\r\n        var a02 = this.values[2];\r\n        var a10 = this.values[3];\r\n        var a11 = this.values[4];\r\n        var a12 = this.values[5];\r\n        var a20 = this.values[6];\r\n        var a21 = this.values[7];\r\n        var a22 = this.values[8];\r\n        var det01 = a22 * a11 - a12 * a21;\r\n        var det11 = -a22 * a10 + a12 * a20;\r\n        var det21 = a21 * a10 - a11 * a20;\r\n        return a00 * det01 + a01 * det11 + a02 * det21;\r\n    };\r\n    mat3.prototype.setIdentity = function () {\r\n        this.values[0] = 1;\r\n        this.values[1] = 0;\r\n        this.values[2] = 0;\r\n        this.values[3] = 0;\r\n        this.values[4] = 1;\r\n        this.values[5] = 0;\r\n        this.values[6] = 0;\r\n        this.values[7] = 0;\r\n        this.values[8] = 1;\r\n        return this;\r\n    };\r\n    mat3.prototype.transpose = function () {\r\n        var temp01 = this.values[1];\r\n        var temp02 = this.values[2];\r\n        var temp12 = this.values[5];\r\n        this.values[1] = this.values[3];\r\n        this.values[2] = this.values[6];\r\n        this.values[3] = temp01;\r\n        this.values[5] = this.values[7];\r\n        this.values[6] = temp02;\r\n        this.values[7] = temp12;\r\n        return this;\r\n    };\r\n    mat3.prototype.inverse = function () {\r\n        var a00 = this.values[0];\r\n        var a01 = this.values[1];\r\n        var a02 = this.values[2];\r\n        var a10 = this.values[3];\r\n        var a11 = this.values[4];\r\n        var a12 = this.values[5];\r\n        var a20 = this.values[6];\r\n        var a21 = this.values[7];\r\n        var a22 = this.values[8];\r\n        var det01 = a22 * a11 - a12 * a21;\r\n        var det11 = -a22 * a10 + a12 * a20;\r\n        var det21 = a21 * a10 - a11 * a20;\r\n        var det = a00 * det01 + a01 * det11 + a02 * det21;\r\n        if (!det) {\r\n            return null;\r\n        }\r\n        det = 1.0 / det;\r\n        this.values[0] = det01 * det;\r\n        this.values[1] = (-a22 * a01 + a02 * a21) * det;\r\n        this.values[2] = (a12 * a01 - a02 * a11) * det;\r\n        this.values[3] = det11 * det;\r\n        this.values[4] = (a22 * a00 - a02 * a20) * det;\r\n        this.values[5] = (-a12 * a00 + a02 * a10) * det;\r\n        this.values[6] = det21 * det;\r\n        this.values[7] = (-a21 * a00 + a01 * a20) * det;\r\n        this.values[8] = (a11 * a00 - a01 * a10) * det;\r\n        return this;\r\n    };\r\n    mat3.prototype.multiply = function (matrix) {\r\n        var a00 = this.values[0];\r\n        var a01 = this.values[1];\r\n        var a02 = this.values[2];\r\n        var a10 = this.values[3];\r\n        var a11 = this.values[4];\r\n        var a12 = this.values[5];\r\n        var a20 = this.values[6];\r\n        var a21 = this.values[7];\r\n        var a22 = this.values[8];\r\n        var b00 = matrix.at(0);\r\n        var b01 = matrix.at(1);\r\n        var b02 = matrix.at(2);\r\n        var b10 = matrix.at(3);\r\n        var b11 = matrix.at(4);\r\n        var b12 = matrix.at(5);\r\n        var b20 = matrix.at(6);\r\n        var b21 = matrix.at(7);\r\n        var b22 = matrix.at(8);\r\n        this.values[0] = b00 * a00 + b01 * a10 + b02 * a20;\r\n        this.values[1] = b00 * a01 + b01 * a11 + b02 * a21;\r\n        this.values[2] = b00 * a02 + b01 * a12 + b02 * a22;\r\n        this.values[3] = b10 * a00 + b11 * a10 + b12 * a20;\r\n        this.values[4] = b10 * a01 + b11 * a11 + b12 * a21;\r\n        this.values[5] = b10 * a02 + b11 * a12 + b12 * a22;\r\n        this.values[6] = b20 * a00 + b21 * a10 + b22 * a20;\r\n        this.values[7] = b20 * a01 + b21 * a11 + b22 * a21;\r\n        this.values[8] = b20 * a02 + b21 * a12 + b22 * a22;\r\n        return this;\r\n    };\r\n    mat3.prototype.multiplyVec2 = function (vector, result) {\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        if (result) {\r\n            result.xy = [\r\n                x * this.values[0] + y * this.values[3] + this.values[6],\r\n                x * this.values[1] + y * this.values[4] + this.values[7],\r\n            ];\r\n            return result;\r\n        }\r\n        else {\r\n            return new vec2_1.default([\r\n                x * this.values[0] + y * this.values[3] + this.values[6],\r\n                x * this.values[1] + y * this.values[4] + this.values[7],\r\n            ]);\r\n        }\r\n    };\r\n    mat3.prototype.multiplyVec3 = function (vector, result) {\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        var z = vector.z;\r\n        if (result) {\r\n            result.xyz = [\r\n                x * this.values[0] + y * this.values[3] + z * this.values[6],\r\n                x * this.values[1] + y * this.values[4] + z * this.values[7],\r\n                x * this.values[2] + y * this.values[5] + z * this.values[8],\r\n            ];\r\n            return result;\r\n        }\r\n        else {\r\n            return new vec3_1.default([\r\n                x * this.values[0] + y * this.values[3] + z * this.values[6],\r\n                x * this.values[1] + y * this.values[4] + z * this.values[7],\r\n                x * this.values[2] + y * this.values[5] + z * this.values[8],\r\n            ]);\r\n        }\r\n    };\r\n    mat3.prototype.toMat4 = function (result) {\r\n        if (result) {\r\n            result.init([\r\n                this.values[0],\r\n                this.values[1],\r\n                this.values[2],\r\n                0,\r\n                this.values[3],\r\n                this.values[4],\r\n                this.values[5],\r\n                0,\r\n                this.values[6],\r\n                this.values[7],\r\n                this.values[8],\r\n                0,\r\n                0,\r\n                0,\r\n                0,\r\n                1,\r\n            ]);\r\n            return result;\r\n        }\r\n        else {\r\n            return new mat4_1.default([\r\n                this.values[0],\r\n                this.values[1],\r\n                this.values[2],\r\n                0,\r\n                this.values[3],\r\n                this.values[4],\r\n                this.values[5],\r\n                0,\r\n                this.values[6],\r\n                this.values[7],\r\n                this.values[8],\r\n                0,\r\n                0,\r\n                0,\r\n                0,\r\n                1,\r\n            ]);\r\n        }\r\n    };\r\n    mat3.prototype.toQuat = function () {\r\n        var m00 = this.values[0];\r\n        var m01 = this.values[1];\r\n        var m02 = this.values[2];\r\n        var m10 = this.values[3];\r\n        var m11 = this.values[4];\r\n        var m12 = this.values[5];\r\n        var m20 = this.values[6];\r\n        var m21 = this.values[7];\r\n        var m22 = this.values[8];\r\n        var fourXSquaredMinus1 = m00 - m11 - m22;\r\n        var fourYSquaredMinus1 = m11 - m00 - m22;\r\n        var fourZSquaredMinus1 = m22 - m00 - m11;\r\n        var fourWSquaredMinus1 = m00 + m11 + m22;\r\n        var biggestIndex = 0;\r\n        var fourBiggestSquaredMinus1 = fourWSquaredMinus1;\r\n        if (fourXSquaredMinus1 > fourBiggestSquaredMinus1) {\r\n            fourBiggestSquaredMinus1 = fourXSquaredMinus1;\r\n            biggestIndex = 1;\r\n        }\r\n        if (fourYSquaredMinus1 > fourBiggestSquaredMinus1) {\r\n            fourBiggestSquaredMinus1 = fourYSquaredMinus1;\r\n            biggestIndex = 2;\r\n        }\r\n        if (fourZSquaredMinus1 > fourBiggestSquaredMinus1) {\r\n            fourBiggestSquaredMinus1 = fourZSquaredMinus1;\r\n            biggestIndex = 3;\r\n        }\r\n        var biggestVal = Math.sqrt(fourBiggestSquaredMinus1 + 1) * 0.5;\r\n        var mult = 0.25 / biggestVal;\r\n        var result = new quat_1.default();\r\n        switch (biggestIndex) {\r\n            case 0:\r\n                result.w = biggestVal;\r\n                result.x = (m12 - m21) * mult;\r\n                result.y = (m20 - m02) * mult;\r\n                result.z = (m01 - m10) * mult;\r\n                break;\r\n            case 1:\r\n                result.w = (m12 - m21) * mult;\r\n                result.x = biggestVal;\r\n                result.y = (m01 + m10) * mult;\r\n                result.z = (m20 + m02) * mult;\r\n                break;\r\n            case 2:\r\n                result.w = (m20 - m02) * mult;\r\n                result.x = (m01 + m10) * mult;\r\n                result.y = biggestVal;\r\n                result.z = (m12 + m21) * mult;\r\n                break;\r\n            case 3:\r\n                result.w = (m01 - m10) * mult;\r\n                result.x = (m20 + m02) * mult;\r\n                result.y = (m12 + m21) * mult;\r\n                result.z = biggestVal;\r\n                break;\r\n        }\r\n        return result;\r\n    };\r\n    mat3.prototype.rotate = function (angle, axis) {\r\n        var x = axis.x;\r\n        var y = axis.y;\r\n        var z = axis.z;\r\n        var length = Math.sqrt(x * x + y * y + z * z);\r\n        if (!length) {\r\n            return null;\r\n        }\r\n        if (length !== 1) {\r\n            length = 1 / length;\r\n            x *= length;\r\n            y *= length;\r\n            z *= length;\r\n        }\r\n        var s = Math.sin(angle);\r\n        var c = Math.cos(angle);\r\n        var t = 1.0 - c;\r\n        var a00 = this.values[0];\r\n        var a01 = this.values[1];\r\n        var a02 = this.values[2];\r\n        var a10 = this.values[4];\r\n        var a11 = this.values[5];\r\n        var a12 = this.values[6];\r\n        var a20 = this.values[8];\r\n        var a21 = this.values[9];\r\n        var a22 = this.values[10];\r\n        var b00 = x * x * t + c;\r\n        var b01 = y * x * t + z * s;\r\n        var b02 = z * x * t - y * s;\r\n        var b10 = x * y * t - z * s;\r\n        var b11 = y * y * t + c;\r\n        var b12 = z * y * t + x * s;\r\n        var b20 = x * z * t + y * s;\r\n        var b21 = y * z * t - x * s;\r\n        var b22 = z * z * t + c;\r\n        this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;\r\n        this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;\r\n        this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;\r\n        this.values[3] = a00 * b10 + a10 * b11 + a20 * b12;\r\n        this.values[4] = a01 * b10 + a11 * b11 + a21 * b12;\r\n        this.values[5] = a02 * b10 + a12 * b11 + a22 * b12;\r\n        this.values[6] = a00 * b20 + a10 * b21 + a20 * b22;\r\n        this.values[7] = a01 * b20 + a11 * b21 + a21 * b22;\r\n        this.values[8] = a02 * b20 + a12 * b21 + a22 * b22;\r\n        return this;\r\n    };\r\n    mat3.product = function (m1, m2, result) {\r\n        var a00 = m1.at(0);\r\n        var a01 = m1.at(1);\r\n        var a02 = m1.at(2);\r\n        var a10 = m1.at(3);\r\n        var a11 = m1.at(4);\r\n        var a12 = m1.at(5);\r\n        var a20 = m1.at(6);\r\n        var a21 = m1.at(7);\r\n        var a22 = m1.at(8);\r\n        var b00 = m2.at(0);\r\n        var b01 = m2.at(1);\r\n        var b02 = m2.at(2);\r\n        var b10 = m2.at(3);\r\n        var b11 = m2.at(4);\r\n        var b12 = m2.at(5);\r\n        var b20 = m2.at(6);\r\n        var b21 = m2.at(7);\r\n        var b22 = m2.at(8);\r\n        if (result) {\r\n            result.init([\r\n                b00 * a00 + b01 * a10 + b02 * a20,\r\n                b00 * a01 + b01 * a11 + b02 * a21,\r\n                b00 * a02 + b01 * a12 + b02 * a22,\r\n                b10 * a00 + b11 * a10 + b12 * a20,\r\n                b10 * a01 + b11 * a11 + b12 * a21,\r\n                b10 * a02 + b11 * a12 + b12 * a22,\r\n                b20 * a00 + b21 * a10 + b22 * a20,\r\n                b20 * a01 + b21 * a11 + b22 * a21,\r\n                b20 * a02 + b21 * a12 + b22 * a22,\r\n            ]);\r\n            return result;\r\n        }\r\n        else {\r\n            return new mat3([\r\n                b00 * a00 + b01 * a10 + b02 * a20,\r\n                b00 * a01 + b01 * a11 + b02 * a21,\r\n                b00 * a02 + b01 * a12 + b02 * a22,\r\n                b10 * a00 + b11 * a10 + b12 * a20,\r\n                b10 * a01 + b11 * a11 + b12 * a21,\r\n                b10 * a02 + b11 * a12 + b12 * a22,\r\n                b20 * a00 + b21 * a10 + b22 * a20,\r\n                b20 * a01 + b21 * a11 + b22 * a21,\r\n                b20 * a02 + b21 * a12 + b22 * a22,\r\n            ]);\r\n        }\r\n    };\r\n    mat3.identity = new mat3().setIdentity();\r\n    return mat3;\r\n}());\r\nexports.default = mat3;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/tsm/mat3.ts?");

/***/ }),

/***/ "./src/libs/tsm/mat4.ts":
/*!******************************!*\
  !*** ./src/libs/tsm/mat4.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar mat3_1 = __importDefault(__webpack_require__(/*! ./mat3 */ \"./src/libs/tsm/mat3.ts\"));\r\nvar vec3_1 = __importDefault(__webpack_require__(/*! ./vec3 */ \"./src/libs/tsm/vec3.ts\"));\r\nvar vec4_1 = __importDefault(__webpack_require__(/*! ./vec4 */ \"./src/libs/tsm/vec4.ts\"));\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/libs/tsm/constants.ts\");\r\nvar mat4 = /** @class */ (function () {\r\n    function mat4(values) {\r\n        this.values = new Float32Array(16);\r\n        if (values !== undefined) {\r\n            this.init(values);\r\n        }\r\n    }\r\n    mat4.prototype.at = function (index) {\r\n        return this.values[index];\r\n    };\r\n    mat4.prototype.init = function (values) {\r\n        for (var i = 0; i < 16; i++) {\r\n            this.values[i] = values[i];\r\n        }\r\n        return this;\r\n    };\r\n    mat4.prototype.reset = function () {\r\n        for (var i = 0; i < 16; i++) {\r\n            this.values[i] = 0;\r\n        }\r\n    };\r\n    mat4.prototype.copy = function (dest) {\r\n        if (!dest) {\r\n            dest = new mat4();\r\n        }\r\n        for (var i = 0; i < 16; i++) {\r\n            dest.values[i] = this.values[i];\r\n        }\r\n        return dest;\r\n    };\r\n    mat4.prototype.all = function () {\r\n        var data = [];\r\n        for (var i = 0; i < 16; i++) {\r\n            data[i] = this.values[i];\r\n        }\r\n        return data;\r\n    };\r\n    mat4.prototype.row = function (index) {\r\n        return [\r\n            this.values[index * 4 + 0],\r\n            this.values[index * 4 + 1],\r\n            this.values[index * 4 + 2],\r\n            this.values[index * 4 + 3],\r\n        ];\r\n    };\r\n    mat4.prototype.col = function (index) {\r\n        return [\r\n            this.values[index],\r\n            this.values[index + 4],\r\n            this.values[index + 8],\r\n            this.values[index + 12],\r\n        ];\r\n    };\r\n    mat4.prototype.equals = function (matrix, threshold) {\r\n        if (threshold === void 0) { threshold = constants_1.epsilon; }\r\n        for (var i = 0; i < 16; i++) {\r\n            if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    };\r\n    mat4.prototype.determinant = function () {\r\n        var a00 = this.values[0];\r\n        var a01 = this.values[1];\r\n        var a02 = this.values[2];\r\n        var a03 = this.values[3];\r\n        var a10 = this.values[4];\r\n        var a11 = this.values[5];\r\n        var a12 = this.values[6];\r\n        var a13 = this.values[7];\r\n        var a20 = this.values[8];\r\n        var a21 = this.values[9];\r\n        var a22 = this.values[10];\r\n        var a23 = this.values[11];\r\n        var a30 = this.values[12];\r\n        var a31 = this.values[13];\r\n        var a32 = this.values[14];\r\n        var a33 = this.values[15];\r\n        var det00 = a00 * a11 - a01 * a10;\r\n        var det01 = a00 * a12 - a02 * a10;\r\n        var det02 = a00 * a13 - a03 * a10;\r\n        var det03 = a01 * a12 - a02 * a11;\r\n        var det04 = a01 * a13 - a03 * a11;\r\n        var det05 = a02 * a13 - a03 * a12;\r\n        var det06 = a20 * a31 - a21 * a30;\r\n        var det07 = a20 * a32 - a22 * a30;\r\n        var det08 = a20 * a33 - a23 * a30;\r\n        var det09 = a21 * a32 - a22 * a31;\r\n        var det10 = a21 * a33 - a23 * a31;\r\n        var det11 = a22 * a33 - a23 * a32;\r\n        return (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);\r\n    };\r\n    mat4.prototype.setIdentity = function () {\r\n        this.values[0] = 1;\r\n        this.values[1] = 0;\r\n        this.values[2] = 0;\r\n        this.values[3] = 0;\r\n        this.values[4] = 0;\r\n        this.values[5] = 1;\r\n        this.values[6] = 0;\r\n        this.values[7] = 0;\r\n        this.values[8] = 0;\r\n        this.values[9] = 0;\r\n        this.values[10] = 1;\r\n        this.values[11] = 0;\r\n        this.values[12] = 0;\r\n        this.values[13] = 0;\r\n        this.values[14] = 0;\r\n        this.values[15] = 1;\r\n        return this;\r\n    };\r\n    mat4.prototype.transpose = function () {\r\n        var temp01 = this.values[1];\r\n        var temp02 = this.values[2];\r\n        var temp03 = this.values[3];\r\n        var temp12 = this.values[6];\r\n        var temp13 = this.values[7];\r\n        var temp23 = this.values[11];\r\n        this.values[1] = this.values[4];\r\n        this.values[2] = this.values[8];\r\n        this.values[3] = this.values[12];\r\n        this.values[4] = temp01;\r\n        this.values[6] = this.values[9];\r\n        this.values[7] = this.values[13];\r\n        this.values[8] = temp02;\r\n        this.values[9] = temp12;\r\n        this.values[11] = this.values[14];\r\n        this.values[12] = temp03;\r\n        this.values[13] = temp13;\r\n        this.values[14] = temp23;\r\n        return this;\r\n    };\r\n    mat4.prototype.inverse = function () {\r\n        var a00 = this.values[0];\r\n        var a01 = this.values[1];\r\n        var a02 = this.values[2];\r\n        var a03 = this.values[3];\r\n        var a10 = this.values[4];\r\n        var a11 = this.values[5];\r\n        var a12 = this.values[6];\r\n        var a13 = this.values[7];\r\n        var a20 = this.values[8];\r\n        var a21 = this.values[9];\r\n        var a22 = this.values[10];\r\n        var a23 = this.values[11];\r\n        var a30 = this.values[12];\r\n        var a31 = this.values[13];\r\n        var a32 = this.values[14];\r\n        var a33 = this.values[15];\r\n        var det00 = a00 * a11 - a01 * a10;\r\n        var det01 = a00 * a12 - a02 * a10;\r\n        var det02 = a00 * a13 - a03 * a10;\r\n        var det03 = a01 * a12 - a02 * a11;\r\n        var det04 = a01 * a13 - a03 * a11;\r\n        var det05 = a02 * a13 - a03 * a12;\r\n        var det06 = a20 * a31 - a21 * a30;\r\n        var det07 = a20 * a32 - a22 * a30;\r\n        var det08 = a20 * a33 - a23 * a30;\r\n        var det09 = a21 * a32 - a22 * a31;\r\n        var det10 = a21 * a33 - a23 * a31;\r\n        var det11 = a22 * a33 - a23 * a32;\r\n        var det = (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);\r\n        if (!det) {\r\n            return null;\r\n        }\r\n        det = 1.0 / det;\r\n        this.values[0] = (a11 * det11 - a12 * det10 + a13 * det09) * det;\r\n        this.values[1] = (-a01 * det11 + a02 * det10 - a03 * det09) * det;\r\n        this.values[2] = (a31 * det05 - a32 * det04 + a33 * det03) * det;\r\n        this.values[3] = (-a21 * det05 + a22 * det04 - a23 * det03) * det;\r\n        this.values[4] = (-a10 * det11 + a12 * det08 - a13 * det07) * det;\r\n        this.values[5] = (a00 * det11 - a02 * det08 + a03 * det07) * det;\r\n        this.values[6] = (-a30 * det05 + a32 * det02 - a33 * det01) * det;\r\n        this.values[7] = (a20 * det05 - a22 * det02 + a23 * det01) * det;\r\n        this.values[8] = (a10 * det10 - a11 * det08 + a13 * det06) * det;\r\n        this.values[9] = (-a00 * det10 + a01 * det08 - a03 * det06) * det;\r\n        this.values[10] = (a30 * det04 - a31 * det02 + a33 * det00) * det;\r\n        this.values[11] = (-a20 * det04 + a21 * det02 - a23 * det00) * det;\r\n        this.values[12] = (-a10 * det09 + a11 * det07 - a12 * det06) * det;\r\n        this.values[13] = (a00 * det09 - a01 * det07 + a02 * det06) * det;\r\n        this.values[14] = (-a30 * det03 + a31 * det01 - a32 * det00) * det;\r\n        this.values[15] = (a20 * det03 - a21 * det01 + a22 * det00) * det;\r\n        return this;\r\n    };\r\n    mat4.prototype.multiply = function (matrix) {\r\n        var a00 = this.values[0];\r\n        var a01 = this.values[1];\r\n        var a02 = this.values[2];\r\n        var a03 = this.values[3];\r\n        var a10 = this.values[4];\r\n        var a11 = this.values[5];\r\n        var a12 = this.values[6];\r\n        var a13 = this.values[7];\r\n        var a20 = this.values[8];\r\n        var a21 = this.values[9];\r\n        var a22 = this.values[10];\r\n        var a23 = this.values[11];\r\n        var a30 = this.values[12];\r\n        var a31 = this.values[13];\r\n        var a32 = this.values[14];\r\n        var a33 = this.values[15];\r\n        var b0 = matrix.at(0);\r\n        var b1 = matrix.at(1);\r\n        var b2 = matrix.at(2);\r\n        var b3 = matrix.at(3);\r\n        this.values[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;\r\n        this.values[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;\r\n        this.values[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;\r\n        this.values[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;\r\n        b0 = matrix.at(4);\r\n        b1 = matrix.at(5);\r\n        b2 = matrix.at(6);\r\n        b3 = matrix.at(7);\r\n        this.values[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;\r\n        this.values[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;\r\n        this.values[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;\r\n        this.values[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;\r\n        b0 = matrix.at(8);\r\n        b1 = matrix.at(9);\r\n        b2 = matrix.at(10);\r\n        b3 = matrix.at(11);\r\n        this.values[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;\r\n        this.values[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;\r\n        this.values[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;\r\n        this.values[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;\r\n        b0 = matrix.at(12);\r\n        b1 = matrix.at(13);\r\n        b2 = matrix.at(14);\r\n        b3 = matrix.at(15);\r\n        this.values[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;\r\n        this.values[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;\r\n        this.values[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;\r\n        this.values[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;\r\n        return this;\r\n    };\r\n    mat4.prototype.multiplyVec3 = function (vector) {\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        var z = vector.z;\r\n        return new vec3_1.default([\r\n            this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12],\r\n            this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13],\r\n            this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14],\r\n        ]);\r\n    };\r\n    mat4.prototype.multiplyVec4 = function (vector, dest) {\r\n        if (!dest) {\r\n            dest = new vec4_1.default();\r\n        }\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        var z = vector.z;\r\n        var w = vector.w;\r\n        dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12] * w;\r\n        dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13] * w;\r\n        dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14] * w;\r\n        dest.w = this.values[3] * x + this.values[7] * y + this.values[11] * z + this.values[15] * w;\r\n        return dest;\r\n    };\r\n    mat4.prototype.toMat3 = function () {\r\n        return new mat3_1.default([\r\n            this.values[0],\r\n            this.values[1],\r\n            this.values[2],\r\n            this.values[4],\r\n            this.values[5],\r\n            this.values[6],\r\n            this.values[8],\r\n            this.values[9],\r\n            this.values[10],\r\n        ]);\r\n    };\r\n    mat4.prototype.toInverseMat3 = function () {\r\n        var a00 = this.values[0];\r\n        var a01 = this.values[1];\r\n        var a02 = this.values[2];\r\n        var a10 = this.values[4];\r\n        var a11 = this.values[5];\r\n        var a12 = this.values[6];\r\n        var a20 = this.values[8];\r\n        var a21 = this.values[9];\r\n        var a22 = this.values[10];\r\n        var det01 = a22 * a11 - a12 * a21;\r\n        var det11 = -a22 * a10 + a12 * a20;\r\n        var det21 = a21 * a10 - a11 * a20;\r\n        var det = a00 * det01 + a01 * det11 + a02 * det21;\r\n        if (!det) {\r\n            return null;\r\n        }\r\n        det = 1.0 / det;\r\n        return new mat3_1.default([\r\n            det01 * det,\r\n            (-a22 * a01 + a02 * a21) * det,\r\n            (a12 * a01 - a02 * a11) * det,\r\n            det11 * det,\r\n            (a22 * a00 - a02 * a20) * det,\r\n            (-a12 * a00 + a02 * a10) * det,\r\n            det21 * det,\r\n            (-a21 * a00 + a01 * a20) * det,\r\n            (a11 * a00 - a01 * a10) * det,\r\n        ]);\r\n    };\r\n    mat4.prototype.translate = function (vector) {\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        var z = vector.z;\r\n        this.values[12] += this.values[0] * x + this.values[4] * y + this.values[8] * z;\r\n        this.values[13] += this.values[1] * x + this.values[5] * y + this.values[9] * z;\r\n        this.values[14] += this.values[2] * x + this.values[6] * y + this.values[10] * z;\r\n        this.values[15] += this.values[3] * x + this.values[7] * y + this.values[11] * z;\r\n        return this;\r\n    };\r\n    mat4.prototype.scale = function (vector) {\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        var z = vector.z;\r\n        this.values[0] *= x;\r\n        this.values[1] *= x;\r\n        this.values[2] *= x;\r\n        this.values[3] *= x;\r\n        this.values[4] *= y;\r\n        this.values[5] *= y;\r\n        this.values[6] *= y;\r\n        this.values[7] *= y;\r\n        this.values[8] *= z;\r\n        this.values[9] *= z;\r\n        this.values[10] *= z;\r\n        this.values[11] *= z;\r\n        return this;\r\n    };\r\n    mat4.prototype.rotate = function (angle, axis) {\r\n        var x = axis.x;\r\n        var y = axis.y;\r\n        var z = axis.z;\r\n        var length = Math.sqrt(x * x + y * y + z * z);\r\n        if (!length) {\r\n            return null;\r\n        }\r\n        if (length !== 1) {\r\n            length = 1 / length;\r\n            x *= length;\r\n            y *= length;\r\n            z *= length;\r\n        }\r\n        var s = Math.sin(angle);\r\n        var c = Math.cos(angle);\r\n        var t = 1.0 - c;\r\n        var a00 = this.values[0];\r\n        var a01 = this.values[1];\r\n        var a02 = this.values[2];\r\n        var a03 = this.values[3];\r\n        var a10 = this.values[4];\r\n        var a11 = this.values[5];\r\n        var a12 = this.values[6];\r\n        var a13 = this.values[7];\r\n        var a20 = this.values[8];\r\n        var a21 = this.values[9];\r\n        var a22 = this.values[10];\r\n        var a23 = this.values[11];\r\n        var b00 = x * x * t + c;\r\n        var b01 = y * x * t + z * s;\r\n        var b02 = z * x * t - y * s;\r\n        var b10 = x * y * t - z * s;\r\n        var b11 = y * y * t + c;\r\n        var b12 = z * y * t + x * s;\r\n        var b20 = x * z * t + y * s;\r\n        var b21 = y * z * t - x * s;\r\n        var b22 = z * z * t + c;\r\n        this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;\r\n        this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;\r\n        this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;\r\n        this.values[3] = a03 * b00 + a13 * b01 + a23 * b02;\r\n        this.values[4] = a00 * b10 + a10 * b11 + a20 * b12;\r\n        this.values[5] = a01 * b10 + a11 * b11 + a21 * b12;\r\n        this.values[6] = a02 * b10 + a12 * b11 + a22 * b12;\r\n        this.values[7] = a03 * b10 + a13 * b11 + a23 * b12;\r\n        this.values[8] = a00 * b20 + a10 * b21 + a20 * b22;\r\n        this.values[9] = a01 * b20 + a11 * b21 + a21 * b22;\r\n        this.values[10] = a02 * b20 + a12 * b21 + a22 * b22;\r\n        this.values[11] = a03 * b20 + a13 * b21 + a23 * b22;\r\n        return this;\r\n    };\r\n    mat4.frustum = function (left, right, bottom, top, near, far) {\r\n        var rl = (right - left);\r\n        var tb = (top - bottom);\r\n        var fn = (far - near);\r\n        return new mat4([\r\n            (near * 2) / rl,\r\n            0,\r\n            0,\r\n            0,\r\n            0,\r\n            (near * 2) / tb,\r\n            0,\r\n            0,\r\n            (right + left) / rl,\r\n            (top + bottom) / tb,\r\n            -(far + near) / fn,\r\n            -1,\r\n            0,\r\n            0,\r\n            -(far * near * 2) / fn,\r\n            0,\r\n        ]);\r\n    };\r\n    mat4.perspective = function (fov, aspect, near, far) {\r\n        var top = near * Math.tan(fov * Math.PI / 360.0);\r\n        var right = top * aspect;\r\n        return mat4.frustum(-right, right, -top, top, near, far);\r\n    };\r\n    mat4.orthographic = function (left, right, bottom, top, near, far) {\r\n        var rl = (right - left);\r\n        var tb = (top - bottom);\r\n        var fn = (far - near);\r\n        return new mat4([\r\n            2 / rl,\r\n            0,\r\n            0,\r\n            0,\r\n            0,\r\n            2 / tb,\r\n            0,\r\n            0,\r\n            0,\r\n            0,\r\n            -2 / fn,\r\n            0,\r\n            0,\r\n            0,\r\n            0,\r\n            1,\r\n        ]);\r\n    };\r\n    mat4.lookAt = function (position, target, up) {\r\n        if (up === void 0) { up = vec3_1.default.up; }\r\n        if (position.equals(target)) {\r\n            return this.identity;\r\n        }\r\n        var z = vec3_1.default.difference(position, target).normalize();\r\n        var x = vec3_1.default.cross(up, z).normalize();\r\n        var y = vec3_1.default.cross(z, x).normalize();\r\n        return new mat4([\r\n            x.x,\r\n            y.x,\r\n            z.x,\r\n            0,\r\n            x.y,\r\n            y.y,\r\n            z.y,\r\n            0,\r\n            x.z,\r\n            y.z,\r\n            z.z,\r\n            0,\r\n            -vec3_1.default.dot(x, position),\r\n            -vec3_1.default.dot(y, position),\r\n            -vec3_1.default.dot(z, position),\r\n            1,\r\n        ]);\r\n    };\r\n    mat4.product = function (m1, m2, result) {\r\n        var a00 = m1.at(0);\r\n        var a01 = m1.at(1);\r\n        var a02 = m1.at(2);\r\n        var a03 = m1.at(3);\r\n        var a10 = m1.at(4);\r\n        var a11 = m1.at(5);\r\n        var a12 = m1.at(6);\r\n        var a13 = m1.at(7);\r\n        var a20 = m1.at(8);\r\n        var a21 = m1.at(9);\r\n        var a22 = m1.at(10);\r\n        var a23 = m1.at(11);\r\n        var a30 = m1.at(12);\r\n        var a31 = m1.at(13);\r\n        var a32 = m1.at(14);\r\n        var a33 = m1.at(15);\r\n        var b00 = m2.at(0);\r\n        var b01 = m2.at(1);\r\n        var b02 = m2.at(2);\r\n        var b03 = m2.at(3);\r\n        var b10 = m2.at(4);\r\n        var b11 = m2.at(5);\r\n        var b12 = m2.at(6);\r\n        var b13 = m2.at(7);\r\n        var b20 = m2.at(8);\r\n        var b21 = m2.at(9);\r\n        var b22 = m2.at(10);\r\n        var b23 = m2.at(11);\r\n        var b30 = m2.at(12);\r\n        var b31 = m2.at(13);\r\n        var b32 = m2.at(14);\r\n        var b33 = m2.at(15);\r\n        if (result) {\r\n            result.init([\r\n                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,\r\n                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,\r\n                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,\r\n                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,\r\n                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,\r\n                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,\r\n                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,\r\n                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,\r\n                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,\r\n                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,\r\n                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,\r\n                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,\r\n                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,\r\n                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,\r\n                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,\r\n                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,\r\n            ]);\r\n            return result;\r\n        }\r\n        else {\r\n            return new mat4([\r\n                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,\r\n                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,\r\n                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,\r\n                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,\r\n                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,\r\n                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,\r\n                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,\r\n                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,\r\n                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,\r\n                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,\r\n                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,\r\n                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,\r\n                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,\r\n                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,\r\n                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,\r\n                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,\r\n            ]);\r\n        }\r\n    };\r\n    mat4.identity = new mat4().setIdentity();\r\n    return mat4;\r\n}());\r\nexports.default = mat4;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/tsm/mat4.ts?");

/***/ }),

/***/ "./src/libs/tsm/model.ts":
/*!*******************************!*\
  !*** ./src/libs/tsm/model.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Model = void 0;\r\nvar WebGLContext_1 = __webpack_require__(/*! ../WebGLContext */ \"./src/libs/WebGLContext.ts\");\r\nvar Model = /** @class */ (function () {\r\n    function Model(vertices, indices, textures) {\r\n        this._triangleCount = 0;\r\n        this._vertexBuffer = WebGLContext_1.WebGL.context.createBuffer();\r\n        this._indexBuffer = WebGLContext_1.WebGL.context.createBuffer();\r\n        this._arrayBuffer = WebGLContext_1.WebGL.context.createVertexArray();\r\n        this._textures = textures;\r\n        this._triangleCount = indices.length;\r\n        if (!this._vertexBuffer || !this._indexBuffer || !this._arrayBuffer) {\r\n            throw new Error('Failed to create model');\r\n        }\r\n        WebGLContext_1.WebGL.context.bindVertexArray(this._arrayBuffer);\r\n        WebGLContext_1.WebGL.context.bindBuffer(WebGLContext_1.WebGL.context.ARRAY_BUFFER, this._vertexBuffer);\r\n        WebGLContext_1.WebGL.context.bufferData(WebGLContext_1.WebGL.context.ARRAY_BUFFER, new Float32Array(vertices), WebGLContext_1.WebGL.context.STATIC_DRAW);\r\n        WebGLContext_1.WebGL.context.enableVertexAttribArray(0);\r\n        WebGLContext_1.WebGL.context.vertexAttribPointer(0, 3, WebGLContext_1.WebGL.context.FLOAT, false, 4 * (3 + 3 + 2), 0);\r\n        WebGLContext_1.WebGL.context.enableVertexAttribArray(1);\r\n        WebGLContext_1.WebGL.context.vertexAttribPointer(1, 3, WebGLContext_1.WebGL.context.FLOAT, false, 4 * (3 + 3 + 2), 3 * 4);\r\n        WebGLContext_1.WebGL.context.enableVertexAttribArray(2);\r\n        WebGLContext_1.WebGL.context.vertexAttribPointer(2, 2, WebGLContext_1.WebGL.context.FLOAT, false, 4 * (3 + 3 + 2), (3 + 3) * 4);\r\n        WebGLContext_1.WebGL.context.bindBuffer(WebGLContext_1.WebGL.context.ELEMENT_ARRAY_BUFFER, this._indexBuffer);\r\n        WebGLContext_1.WebGL.context.bufferData(WebGLContext_1.WebGL.context.ELEMENT_ARRAY_BUFFER, new Uint32Array(indices), WebGLContext_1.WebGL.context.STATIC_DRAW);\r\n        WebGLContext_1.WebGL.context.bindVertexArray(null);\r\n    }\r\n    Model.prototype.render = function (func) {\r\n        if (func === void 0) { func = function () { }; }\r\n        func();\r\n        this._textures.forEach(function (text, indx) {\r\n            // @ts-ignore\r\n            WebGLContext_1.WebGL.context.activeTexture(WebGLContext_1.WebGL.context[\"TEXTURE\" + indx]);\r\n            WebGLContext_1.WebGL.context.bindTexture(WebGLContext_1.WebGL.context.TEXTURE_2D, text.get());\r\n        });\r\n        WebGLContext_1.WebGL.context.bindVertexArray(this._arrayBuffer);\r\n        WebGLContext_1.WebGL.context.drawElements(WebGLContext_1.WebGL.context.TRIANGLES, this._triangleCount, WebGLContext_1.WebGL.context.UNSIGNED_INT, 0);\r\n        WebGLContext_1.WebGL.context.bindVertexArray(null);\r\n    };\r\n    Model.createFloor = function (width, texture) {\r\n        var floor_vertices = [\r\n            -width, 0, -width, 0, 1, 0, 0, 0,\r\n            -width, 0, width, 0, 1, 0, 0, 1,\r\n            width, 0, width, 0, 1, 0, 1, 1,\r\n            width, 0, -width, 0, 1, 0, 1, 0\r\n        ];\r\n        var floor_indices = [0, 1, 2, 0, 2, 3]; // Uint16\r\n        return new Model(floor_vertices, floor_indices, [texture]);\r\n    };\r\n    Model.createCube = function (width, texture) {\r\n        var vertices = [\r\n            -width, -width, width, 0, 0, 1, 0, 0,\r\n            width, -width, width, 0, 0, 1, 1, 0,\r\n            width, width, width, 0, 0, 1, 1, 1,\r\n            -width, width, width, 0, 0, 1, 0, 1,\r\n            -width, -width, -width, 0, 0, -1, 0, 0,\r\n            -width, width, -width, 0, 0, -1, 1, 0,\r\n            width, width, -width, 0, 0, -1, 1, 1,\r\n            width, -width, -width, 0, 0, -1, 0, 1,\r\n            -width, width, -width, 0, 1, 0, 0, 0,\r\n            -width, width, width, 0, 1, 0, 1, 0,\r\n            width, width, width, 0, 1, 0, 1, 1,\r\n            width, width, -width, 0, 1, 0, 0, 1,\r\n            -width, -width, -width, 0, -1, 0, 0, 0,\r\n            width, -width, -width, 0, -1, 0, 1, 0,\r\n            width, -width, width, 0, -1, 0, 1, 1,\r\n            -width, -width, width, 0, -1, 0, 0, 1,\r\n            width, -width, -width, 1, 0, 0, 0, 0,\r\n            width, width, -width, 1, 0, 0, 1, 0,\r\n            width, width, width, 1, 0, 0, 1, 1,\r\n            width, -width, width, 1, 0, 0, 0, 1,\r\n            -width, -width, -width, -1, 0, 0, 0, 0,\r\n            -width, -width, width, -1, 0, 0, 1, 0,\r\n            -width, width, width, -1, 0, 0, 1, 1,\r\n            -width, width, -width - 1, 0, 0, 0, 1\r\n        ];\r\n        var indices = [\r\n            0, 1, 2,\r\n            0, 2, 3,\r\n            4, 5, 6,\r\n            4, 6, 7,\r\n            8, 9, 10,\r\n            8, 10, 11,\r\n            12, 13, 14,\r\n            12, 14, 15,\r\n            16, 17, 18,\r\n            16, 18, 19,\r\n            20, 21, 22,\r\n            20, 22, 23\r\n        ];\r\n        return new Model(vertices, indices, [texture]);\r\n    };\r\n    return Model;\r\n}());\r\nexports.Model = Model;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/tsm/model.ts?");

/***/ }),

/***/ "./src/libs/tsm/quat.ts":
/*!******************************!*\
  !*** ./src/libs/tsm/quat.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar mat3_1 = __importDefault(__webpack_require__(/*! ./mat3 */ \"./src/libs/tsm/mat3.ts\"));\r\nvar mat4_1 = __importDefault(__webpack_require__(/*! ./mat4 */ \"./src/libs/tsm/mat4.ts\"));\r\nvar vec3_1 = __importDefault(__webpack_require__(/*! ./vec3 */ \"./src/libs/tsm/vec3.ts\"));\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/libs/tsm/constants.ts\");\r\nvar quat = /** @class */ (function () {\r\n    function quat(values) {\r\n        this.values = new Float32Array(4);\r\n        if (values !== undefined) {\r\n            this.xyzw = values;\r\n        }\r\n    }\r\n    Object.defineProperty(quat.prototype, \"x\", {\r\n        get: function () {\r\n            return this.values[0];\r\n        },\r\n        set: function (value) {\r\n            this.values[0] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(quat.prototype, \"y\", {\r\n        get: function () {\r\n            return this.values[1];\r\n        },\r\n        set: function (value) {\r\n            this.values[1] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(quat.prototype, \"z\", {\r\n        get: function () {\r\n            return this.values[2];\r\n        },\r\n        set: function (value) {\r\n            this.values[2] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(quat.prototype, \"w\", {\r\n        get: function () {\r\n            return this.values[3];\r\n        },\r\n        set: function (value) {\r\n            this.values[3] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(quat.prototype, \"xy\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(quat.prototype, \"xyz\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n                this.values[2],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n            this.values[2] = values[2];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(quat.prototype, \"xyzw\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n                this.values[2],\r\n                this.values[3],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n            this.values[2] = values[2];\r\n            this.values[3] = values[3];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    quat.prototype.at = function (index) {\r\n        return this.values[index];\r\n    };\r\n    quat.prototype.reset = function () {\r\n        for (var i = 0; i < 4; i++) {\r\n            this.values[i] = 0;\r\n        }\r\n    };\r\n    quat.prototype.copy = function (dest) {\r\n        if (!dest) {\r\n            dest = new quat();\r\n        }\r\n        for (var i = 0; i < 4; i++) {\r\n            dest.values[i] = this.values[i];\r\n        }\r\n        return dest;\r\n    };\r\n    quat.prototype.roll = function () {\r\n        var x = this.x;\r\n        var y = this.y;\r\n        var z = this.z;\r\n        var w = this.w;\r\n        return Math.atan2(2.0 * (x * y + w * z), w * w + x * x - y * y - z * z);\r\n    };\r\n    quat.prototype.pitch = function () {\r\n        var x = this.x;\r\n        var y = this.y;\r\n        var z = this.z;\r\n        var w = this.w;\r\n        return Math.atan2(2.0 * (y * z + w * x), w * w - x * x - y * y + z * z);\r\n    };\r\n    quat.prototype.yaw = function () {\r\n        return Math.asin(2.0 * (this.x * this.z - this.w * this.y));\r\n    };\r\n    quat.prototype.equals = function (vector, threshold) {\r\n        if (threshold === void 0) { threshold = constants_1.epsilon; }\r\n        for (var i = 0; i < 4; i++) {\r\n            if (Math.abs(this.values[i] - vector.at(i)) > threshold) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    };\r\n    quat.prototype.setIdentity = function () {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.z = 0;\r\n        this.w = 1;\r\n        return this;\r\n    };\r\n    quat.prototype.calculateW = function () {\r\n        var x = this.x;\r\n        var y = this.y;\r\n        var z = this.z;\r\n        this.w = -(Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z)));\r\n        return this;\r\n    };\r\n    quat.prototype.inverse = function () {\r\n        var dot = quat.dot(this, this);\r\n        if (!dot) {\r\n            this.xyzw = [0, 0, 0, 0];\r\n            return this;\r\n        }\r\n        var invDot = dot ? 1.0 / dot : 0;\r\n        this.x *= -invDot;\r\n        this.y *= -invDot;\r\n        this.z *= -invDot;\r\n        this.w *= invDot;\r\n        return this;\r\n    };\r\n    quat.prototype.conjugate = function () {\r\n        this.values[0] *= -1;\r\n        this.values[1] *= -1;\r\n        this.values[2] *= -1;\r\n        return this;\r\n    };\r\n    quat.prototype.length = function () {\r\n        var x = this.x;\r\n        var y = this.y;\r\n        var z = this.z;\r\n        var w = this.w;\r\n        return Math.sqrt(x * x + y * y + z * z + w * w);\r\n    };\r\n    quat.prototype.normalize = function (dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        var x = this.x;\r\n        var y = this.y;\r\n        var z = this.z;\r\n        var w = this.w;\r\n        var length = Math.sqrt(x * x + y * y + z * z + w * w);\r\n        if (!length) {\r\n            dest.x = 0;\r\n            dest.y = 0;\r\n            dest.z = 0;\r\n            dest.w = 0;\r\n            return dest;\r\n        }\r\n        length = 1 / length;\r\n        dest.x = x * length;\r\n        dest.y = y * length;\r\n        dest.z = z * length;\r\n        dest.w = w * length;\r\n        return dest;\r\n    };\r\n    quat.prototype.add = function (other) {\r\n        for (var i = 0; i < 4; i++) {\r\n            this.values[i] += other.at(i);\r\n        }\r\n        return this;\r\n    };\r\n    quat.prototype.multiply = function (other) {\r\n        var q1x = this.values[0];\r\n        var q1y = this.values[1];\r\n        var q1z = this.values[2];\r\n        var q1w = this.values[3];\r\n        var q2x = other.x;\r\n        var q2y = other.y;\r\n        var q2z = other.z;\r\n        var q2w = other.w;\r\n        this.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;\r\n        this.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;\r\n        this.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;\r\n        this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;\r\n        return this;\r\n    };\r\n    quat.prototype.multiplyVec3 = function (vector, dest) {\r\n        if (!dest) {\r\n            dest = new vec3_1.default();\r\n        }\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        var z = vector.z;\r\n        var qx = this.x;\r\n        var qy = this.y;\r\n        var qz = this.z;\r\n        var qw = this.w;\r\n        var ix = qw * x + qy * z - qz * y;\r\n        var iy = qw * y + qz * x - qx * z;\r\n        var iz = qw * z + qx * y - qy * x;\r\n        var iw = -qx * x - qy * y - qz * z;\r\n        dest.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;\r\n        dest.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;\r\n        dest.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;\r\n        return dest;\r\n    };\r\n    quat.prototype.toMat3 = function (dest) {\r\n        if (!dest) {\r\n            dest = new mat3_1.default();\r\n        }\r\n        var x = this.x;\r\n        var y = this.y;\r\n        var z = this.z;\r\n        var w = this.w;\r\n        var x2 = x + x;\r\n        var y2 = y + y;\r\n        var z2 = z + z;\r\n        var xx = x * x2;\r\n        var xy = x * y2;\r\n        var xz = x * z2;\r\n        var yy = y * y2;\r\n        var yz = y * z2;\r\n        var zz = z * z2;\r\n        var wx = w * x2;\r\n        var wy = w * y2;\r\n        var wz = w * z2;\r\n        dest.init([\r\n            1 - (yy + zz),\r\n            xy + wz,\r\n            xz - wy,\r\n            xy - wz,\r\n            1 - (xx + zz),\r\n            yz + wx,\r\n            xz + wy,\r\n            yz - wx,\r\n            1 - (xx + yy),\r\n        ]);\r\n        return dest;\r\n    };\r\n    quat.prototype.toMat4 = function (dest) {\r\n        if (!dest) {\r\n            dest = new mat4_1.default();\r\n        }\r\n        var x = this.x;\r\n        var y = this.y;\r\n        var z = this.z;\r\n        var w = this.w;\r\n        var x2 = x + x;\r\n        var y2 = y + y;\r\n        var z2 = z + z;\r\n        var xx = x * x2;\r\n        var xy = x * y2;\r\n        var xz = x * z2;\r\n        var yy = y * y2;\r\n        var yz = y * z2;\r\n        var zz = z * z2;\r\n        var wx = w * x2;\r\n        var wy = w * y2;\r\n        var wz = w * z2;\r\n        dest.init([\r\n            1 - (yy + zz),\r\n            xy + wz,\r\n            xz - wy,\r\n            0,\r\n            xy - wz,\r\n            1 - (xx + zz),\r\n            yz + wx,\r\n            0,\r\n            xz + wy,\r\n            yz - wx,\r\n            1 - (xx + yy),\r\n            0,\r\n            0,\r\n            0,\r\n            0,\r\n            1,\r\n        ]);\r\n        return dest;\r\n    };\r\n    quat.dot = function (q1, q2) {\r\n        return q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;\r\n    };\r\n    quat.sum = function (q1, q2, dest) {\r\n        if (!dest) {\r\n            dest = new quat();\r\n        }\r\n        dest.x = q1.x + q2.x;\r\n        dest.y = q1.y + q2.y;\r\n        dest.z = q1.z + q2.z;\r\n        dest.w = q1.w + q2.w;\r\n        return dest;\r\n    };\r\n    quat.product = function (q1, q2, dest) {\r\n        if (!dest) {\r\n            dest = new quat();\r\n        }\r\n        var q1x = q1.x;\r\n        var q1y = q1.y;\r\n        var q1z = q1.z;\r\n        var q1w = q1.w;\r\n        var q2x = q2.x;\r\n        var q2y = q2.y;\r\n        var q2z = q2.z;\r\n        var q2w = q2.w;\r\n        dest.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;\r\n        dest.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;\r\n        dest.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;\r\n        dest.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;\r\n        return dest;\r\n    };\r\n    quat.cross = function (q1, q2, dest) {\r\n        if (!dest) {\r\n            dest = new quat();\r\n        }\r\n        var q1x = q1.x;\r\n        var q1y = q1.y;\r\n        var q1z = q1.z;\r\n        var q1w = q1.w;\r\n        var q2x = q2.x;\r\n        var q2y = q2.y;\r\n        var q2z = q2.z;\r\n        var q2w = q2.w;\r\n        dest.x = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;\r\n        dest.y = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;\r\n        dest.z = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;\r\n        dest.w = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;\r\n        return dest;\r\n    };\r\n    quat.shortMix = function (q1, q2, time, dest) {\r\n        if (!dest) {\r\n            dest = new quat();\r\n        }\r\n        if (time <= 0.0) {\r\n            dest.xyzw = q1.xyzw;\r\n            return dest;\r\n        }\r\n        else if (time >= 1.0) {\r\n            dest.xyzw = q2.xyzw;\r\n            return dest;\r\n        }\r\n        var cos = quat.dot(q1, q2);\r\n        var q2a = q2.copy();\r\n        if (cos < 0.0) {\r\n            q2a.inverse();\r\n            cos = -cos;\r\n        }\r\n        var k0;\r\n        var k1;\r\n        if (cos > 0.9999) {\r\n            k0 = 1 - time;\r\n            k1 = 0 + time;\r\n        }\r\n        else {\r\n            var sin = Math.sqrt(1 - cos * cos);\r\n            var angle = Math.atan2(sin, cos);\r\n            var oneOverSin = 1 / sin;\r\n            k0 = Math.sin((1 - time) * angle) * oneOverSin;\r\n            k1 = Math.sin((0 + time) * angle) * oneOverSin;\r\n        }\r\n        dest.x = k0 * q1.x + k1 * q2a.x;\r\n        dest.y = k0 * q1.y + k1 * q2a.y;\r\n        dest.z = k0 * q1.z + k1 * q2a.z;\r\n        dest.w = k0 * q1.w + k1 * q2a.w;\r\n        return dest;\r\n    };\r\n    quat.mix = function (q1, q2, time, dest) {\r\n        if (!dest) {\r\n            dest = new quat();\r\n        }\r\n        var cosHalfTheta = q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;\r\n        if (Math.abs(cosHalfTheta) >= 1.0) {\r\n            dest.xyzw = q1.xyzw;\r\n            return dest;\r\n        }\r\n        var halfTheta = Math.acos(cosHalfTheta);\r\n        var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);\r\n        if (Math.abs(sinHalfTheta) < 0.001) {\r\n            dest.x = q1.x * 0.5 + q2.x * 0.5;\r\n            dest.y = q1.y * 0.5 + q2.y * 0.5;\r\n            dest.z = q1.z * 0.5 + q2.z * 0.5;\r\n            dest.w = q1.w * 0.5 + q2.w * 0.5;\r\n            return dest;\r\n        }\r\n        var ratioA = Math.sin((1 - time) * halfTheta) / sinHalfTheta;\r\n        var ratioB = Math.sin(time * halfTheta) / sinHalfTheta;\r\n        dest.x = q1.x * ratioA + q2.x * ratioB;\r\n        dest.y = q1.y * ratioA + q2.y * ratioB;\r\n        dest.z = q1.z * ratioA + q2.z * ratioB;\r\n        dest.w = q1.w * ratioA + q2.w * ratioB;\r\n        return dest;\r\n    };\r\n    quat.fromAxisAngle = function (axis, angle, dest) {\r\n        if (!dest) {\r\n            dest = new quat();\r\n        }\r\n        angle *= 0.5;\r\n        var sin = Math.sin(angle);\r\n        dest.x = axis.x * sin;\r\n        dest.y = axis.y * sin;\r\n        dest.z = axis.z * sin;\r\n        dest.w = Math.cos(angle);\r\n        return dest;\r\n    };\r\n    quat.identity = new quat().setIdentity();\r\n    return quat;\r\n}());\r\nexports.default = quat;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/tsm/quat.ts?");

/***/ }),

/***/ "./src/libs/tsm/vec2.ts":
/*!******************************!*\
  !*** ./src/libs/tsm/vec2.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar vec3_1 = __importDefault(__webpack_require__(/*! ./vec3 */ \"./src/libs/tsm/vec3.ts\"));\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/libs/tsm/constants.ts\");\r\nvar vec2 = /** @class */ (function () {\r\n    function vec2(values) {\r\n        this.values = new Float32Array(2);\r\n        if (values !== undefined) {\r\n            this.xy = values;\r\n        }\r\n    }\r\n    Object.defineProperty(vec2.prototype, \"x\", {\r\n        get: function () {\r\n            return this.values[0];\r\n        },\r\n        set: function (value) {\r\n            this.values[0] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec2.prototype, \"y\", {\r\n        get: function () {\r\n            return this.values[1];\r\n        },\r\n        set: function (value) {\r\n            this.values[1] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec2.prototype, \"xy\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    vec2.prototype.at = function (index) {\r\n        return this.values[index];\r\n    };\r\n    vec2.prototype.reset = function () {\r\n        this.x = 0;\r\n        this.y = 0;\r\n    };\r\n    vec2.prototype.copy = function (dest) {\r\n        if (!dest) {\r\n            dest = new vec2();\r\n        }\r\n        dest.x = this.x;\r\n        dest.y = this.y;\r\n        return dest;\r\n    };\r\n    vec2.prototype.negate = function (dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        dest.x = -this.x;\r\n        dest.y = -this.y;\r\n        return dest;\r\n    };\r\n    vec2.prototype.equals = function (vector, threshold) {\r\n        if (threshold === void 0) { threshold = constants_1.epsilon; }\r\n        if (Math.abs(this.x - vector.x) > threshold) {\r\n            return false;\r\n        }\r\n        if (Math.abs(this.y - vector.y) > threshold) {\r\n            return false;\r\n        }\r\n        return true;\r\n    };\r\n    vec2.prototype.length = function () {\r\n        return Math.sqrt(this.squaredLength());\r\n    };\r\n    vec2.prototype.squaredLength = function () {\r\n        var x = this.x;\r\n        var y = this.y;\r\n        return (x * x + y * y);\r\n    };\r\n    vec2.prototype.add = function (vector) {\r\n        this.x += vector.x;\r\n        this.y += vector.y;\r\n        return this;\r\n    };\r\n    vec2.prototype.subtract = function (vector) {\r\n        this.x -= vector.x;\r\n        this.y -= vector.y;\r\n        return this;\r\n    };\r\n    vec2.prototype.multiply = function (vector) {\r\n        this.x *= vector.x;\r\n        this.y *= vector.y;\r\n        return this;\r\n    };\r\n    vec2.prototype.divide = function (vector) {\r\n        this.x /= vector.x;\r\n        this.y /= vector.y;\r\n        return this;\r\n    };\r\n    vec2.prototype.scale = function (value, dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        dest.x *= value;\r\n        dest.y *= value;\r\n        return dest;\r\n    };\r\n    vec2.prototype.normalize = function (dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        var length = this.length();\r\n        if (length === 1) {\r\n            return this;\r\n        }\r\n        if (length === 0) {\r\n            dest.x = 0;\r\n            dest.y = 0;\r\n            return dest;\r\n        }\r\n        length = 1.0 / length;\r\n        dest.x *= length;\r\n        dest.y *= length;\r\n        return dest;\r\n    };\r\n    vec2.prototype.multiplyMat2 = function (matrix, dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        return matrix.multiplyVec2(this, dest);\r\n    };\r\n    vec2.prototype.multiplyMat3 = function (matrix, dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        return matrix.multiplyVec2(this, dest);\r\n    };\r\n    vec2.cross = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec3_1.default();\r\n        }\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        var x2 = vector2.x;\r\n        var y2 = vector2.y;\r\n        var z = x * y2 - y * x2;\r\n        dest.x = 0;\r\n        dest.y = 0;\r\n        dest.z = z;\r\n        return dest;\r\n    };\r\n    vec2.dot = function (vector, vector2) {\r\n        return (vector.x * vector2.x + vector.y * vector2.y);\r\n    };\r\n    vec2.distance = function (vector, vector2) {\r\n        return Math.sqrt(this.squaredDistance(vector, vector2));\r\n    };\r\n    vec2.squaredDistance = function (vector, vector2) {\r\n        var x = vector2.x - vector.x;\r\n        var y = vector2.y - vector.y;\r\n        return (x * x + y * y);\r\n    };\r\n    vec2.direction = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec2();\r\n        }\r\n        var x = vector.x - vector2.x;\r\n        var y = vector.y - vector2.y;\r\n        var length = Math.sqrt(x * x + y * y);\r\n        if (length === 0) {\r\n            dest.x = 0;\r\n            dest.y = 0;\r\n            return dest;\r\n        }\r\n        length = 1 / length;\r\n        dest.x = x * length;\r\n        dest.y = y * length;\r\n        return dest;\r\n    };\r\n    vec2.mix = function (vector, vector2, time, dest) {\r\n        if (!dest) {\r\n            dest = new vec2();\r\n        }\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        var x2 = vector2.x;\r\n        var y2 = vector2.y;\r\n        dest.x = x + time * (x2 - x);\r\n        dest.y = y + time * (y2 - y);\r\n        return dest;\r\n    };\r\n    vec2.sum = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec2();\r\n        }\r\n        dest.x = vector.x + vector2.x;\r\n        dest.y = vector.y + vector2.y;\r\n        return dest;\r\n    };\r\n    vec2.difference = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec2();\r\n        }\r\n        dest.x = vector.x - vector2.x;\r\n        dest.y = vector.y - vector2.y;\r\n        return dest;\r\n    };\r\n    vec2.product = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec2();\r\n        }\r\n        dest.x = vector.x * vector2.x;\r\n        dest.y = vector.y * vector2.y;\r\n        return dest;\r\n    };\r\n    vec2.quotient = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec2();\r\n        }\r\n        dest.x = vector.x / vector2.x;\r\n        dest.y = vector.y / vector2.y;\r\n        return dest;\r\n    };\r\n    vec2.zero = new vec2([0, 0]);\r\n    vec2.one = new vec2([1, 1]);\r\n    return vec2;\r\n}());\r\nexports.default = vec2;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/tsm/vec2.ts?");

/***/ }),

/***/ "./src/libs/tsm/vec3.ts":
/*!******************************!*\
  !*** ./src/libs/tsm/vec3.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar quat_1 = __importDefault(__webpack_require__(/*! ./quat */ \"./src/libs/tsm/quat.ts\"));\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/libs/tsm/constants.ts\");\r\nvar vec3 = /** @class */ (function () {\r\n    function vec3(values) {\r\n        this.values = new Float32Array(3);\r\n        if (values !== undefined) {\r\n            this.xyz = values;\r\n        }\r\n    }\r\n    Object.defineProperty(vec3.prototype, \"x\", {\r\n        get: function () {\r\n            return this.values[0];\r\n        },\r\n        set: function (value) {\r\n            this.values[0] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec3.prototype, \"y\", {\r\n        get: function () {\r\n            return this.values[1];\r\n        },\r\n        set: function (value) {\r\n            this.values[1] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec3.prototype, \"z\", {\r\n        get: function () {\r\n            return this.values[2];\r\n        },\r\n        set: function (value) {\r\n            this.values[2] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec3.prototype, \"xy\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec3.prototype, \"xyz\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n                this.values[2],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n            this.values[2] = values[2];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    vec3.prototype.at = function (index) {\r\n        return this.values[index];\r\n    };\r\n    vec3.prototype.reset = function () {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.z = 0;\r\n    };\r\n    vec3.prototype.copy = function (dest) {\r\n        if (!dest) {\r\n            dest = new vec3();\r\n        }\r\n        dest.x = this.x;\r\n        dest.y = this.y;\r\n        dest.z = this.z;\r\n        return dest;\r\n    };\r\n    vec3.prototype.negate = function (dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        dest.x = -this.x;\r\n        dest.y = -this.y;\r\n        dest.z = -this.z;\r\n        return dest;\r\n    };\r\n    vec3.prototype.equals = function (vector, threshold) {\r\n        if (threshold === void 0) { threshold = constants_1.epsilon; }\r\n        if (Math.abs(this.x - vector.x) > threshold) {\r\n            return false;\r\n        }\r\n        if (Math.abs(this.y - vector.y) > threshold) {\r\n            return false;\r\n        }\r\n        if (Math.abs(this.z - vector.z) > threshold) {\r\n            return false;\r\n        }\r\n        return true;\r\n    };\r\n    vec3.prototype.length = function () {\r\n        return Math.sqrt(this.squaredLength());\r\n    };\r\n    vec3.prototype.squaredLength = function () {\r\n        var x = this.x;\r\n        var y = this.y;\r\n        var z = this.z;\r\n        return (x * x + y * y + z * z);\r\n    };\r\n    vec3.prototype.add = function (vector) {\r\n        this.x += vector.x;\r\n        this.y += vector.y;\r\n        this.z += vector.z;\r\n        return this;\r\n    };\r\n    vec3.prototype.subtract = function (vector) {\r\n        this.x -= vector.x;\r\n        this.y -= vector.y;\r\n        this.z -= vector.z;\r\n        return this;\r\n    };\r\n    vec3.prototype.multiply = function (vector) {\r\n        this.x *= vector.x;\r\n        this.y *= vector.y;\r\n        this.z *= vector.z;\r\n        return this;\r\n    };\r\n    vec3.prototype.divide = function (vector) {\r\n        this.x /= vector.x;\r\n        this.y /= vector.y;\r\n        this.z /= vector.z;\r\n        return this;\r\n    };\r\n    vec3.prototype.scale = function (value, dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        dest.x *= value;\r\n        dest.y *= value;\r\n        dest.z *= value;\r\n        return dest;\r\n    };\r\n    vec3.prototype.normalize = function (dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        var length = this.length();\r\n        if (length === 1) {\r\n            return this;\r\n        }\r\n        if (length === 0) {\r\n            dest.x = 0;\r\n            dest.y = 0;\r\n            dest.z = 0;\r\n            return dest;\r\n        }\r\n        length = 1.0 / length;\r\n        dest.x *= length;\r\n        dest.y *= length;\r\n        dest.z *= length;\r\n        return dest;\r\n    };\r\n    vec3.prototype.multiplyByMat3 = function (matrix, dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        return matrix.multiplyVec3(this, dest);\r\n    };\r\n    vec3.prototype.multiplyByQuat = function (quaternion, dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        return quaternion.multiplyVec3(this, dest);\r\n    };\r\n    vec3.prototype.toQuat = function (dest) {\r\n        if (!dest) {\r\n            dest = new quat_1.default();\r\n        }\r\n        var c = new vec3();\r\n        var s = new vec3();\r\n        c.x = Math.cos(this.x * 0.5);\r\n        s.x = Math.sin(this.x * 0.5);\r\n        c.y = Math.cos(this.y * 0.5);\r\n        s.y = Math.sin(this.y * 0.5);\r\n        c.z = Math.cos(this.z * 0.5);\r\n        s.z = Math.sin(this.z * 0.5);\r\n        dest.x = s.x * c.y * c.z - c.x * s.y * s.z;\r\n        dest.y = c.x * s.y * c.z + s.x * c.y * s.z;\r\n        dest.z = c.x * c.y * s.z - s.x * s.y * c.z;\r\n        dest.w = c.x * c.y * c.z + s.x * s.y * s.z;\r\n        return dest;\r\n    };\r\n    vec3.cross = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec3();\r\n        }\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        var z = vector.z;\r\n        var x2 = vector2.x;\r\n        var y2 = vector2.y;\r\n        var z2 = vector2.z;\r\n        dest.x = y * z2 - z * y2;\r\n        dest.y = z * x2 - x * z2;\r\n        dest.z = x * y2 - y * x2;\r\n        return dest;\r\n    };\r\n    vec3.dot = function (vector, vector2) {\r\n        var x = vector.x;\r\n        var y = vector.y;\r\n        var z = vector.z;\r\n        var x2 = vector2.x;\r\n        var y2 = vector2.y;\r\n        var z2 = vector2.z;\r\n        return (x * x2 + y * y2 + z * z2);\r\n    };\r\n    vec3.distance = function (vector, vector2) {\r\n        var x = vector2.x - vector.x;\r\n        var y = vector2.y - vector.y;\r\n        var z = vector2.z - vector.z;\r\n        return Math.sqrt(this.squaredDistance(vector, vector2));\r\n    };\r\n    vec3.squaredDistance = function (vector, vector2) {\r\n        var x = vector2.x - vector.x;\r\n        var y = vector2.y - vector.y;\r\n        var z = vector2.z - vector.z;\r\n        return (x * x + y * y + z * z);\r\n    };\r\n    vec3.direction = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec3();\r\n        }\r\n        var x = vector.x - vector2.x;\r\n        var y = vector.y - vector2.y;\r\n        var z = vector.z - vector2.z;\r\n        var length = Math.sqrt(x * x + y * y + z * z);\r\n        if (length === 0) {\r\n            dest.x = 0;\r\n            dest.y = 0;\r\n            dest.z = 0;\r\n            return dest;\r\n        }\r\n        length = 1 / length;\r\n        dest.x = x * length;\r\n        dest.y = y * length;\r\n        dest.z = z * length;\r\n        return dest;\r\n    };\r\n    vec3.mix = function (vector, vector2, time, dest) {\r\n        if (!dest) {\r\n            dest = new vec3();\r\n        }\r\n        dest.x = vector.x + time * (vector2.x - vector.x);\r\n        dest.y = vector.y + time * (vector2.y - vector.y);\r\n        dest.z = vector.z + time * (vector2.z - vector.z);\r\n        return dest;\r\n    };\r\n    vec3.sum = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec3();\r\n        }\r\n        dest.x = vector.x + vector2.x;\r\n        dest.y = vector.y + vector2.y;\r\n        dest.z = vector.z + vector2.z;\r\n        return dest;\r\n    };\r\n    vec3.difference = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec3();\r\n        }\r\n        dest.x = vector.x - vector2.x;\r\n        dest.y = vector.y - vector2.y;\r\n        dest.z = vector.z - vector2.z;\r\n        return dest;\r\n    };\r\n    vec3.product = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec3();\r\n        }\r\n        dest.x = vector.x * vector2.x;\r\n        dest.y = vector.y * vector2.y;\r\n        dest.z = vector.z * vector2.z;\r\n        return dest;\r\n    };\r\n    vec3.quotient = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec3();\r\n        }\r\n        dest.x = vector.x / vector2.x;\r\n        dest.y = vector.y / vector2.y;\r\n        dest.z = vector.z / vector2.z;\r\n        return dest;\r\n    };\r\n    vec3.zero = new vec3([0, 0, 0]);\r\n    vec3.one = new vec3([1, 1, 1]);\r\n    vec3.up = new vec3([0, 1, 0]);\r\n    vec3.right = new vec3([1, 0, 0]);\r\n    vec3.forward = new vec3([0, 0, 1]);\r\n    return vec3;\r\n}());\r\nexports.default = vec3;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/tsm/vec3.ts?");

/***/ }),

/***/ "./src/libs/tsm/vec4.ts":
/*!******************************!*\
  !*** ./src/libs/tsm/vec4.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/libs/tsm/constants.ts\");\r\nvar vec4 = /** @class */ (function () {\r\n    function vec4(values) {\r\n        this.values = new Float32Array(4);\r\n        if (values !== undefined) {\r\n            this.xyzw = values;\r\n        }\r\n    }\r\n    Object.defineProperty(vec4.prototype, \"x\", {\r\n        get: function () {\r\n            return this.values[0];\r\n        },\r\n        set: function (value) {\r\n            this.values[0] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"y\", {\r\n        get: function () {\r\n            return this.values[1];\r\n        },\r\n        set: function (value) {\r\n            this.values[1] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"z\", {\r\n        get: function () {\r\n            return this.values[2];\r\n        },\r\n        set: function (value) {\r\n            this.values[2] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"w\", {\r\n        get: function () {\r\n            return this.values[3];\r\n        },\r\n        set: function (value) {\r\n            this.values[3] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"xy\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"xyz\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n                this.values[2],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n            this.values[2] = values[2];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"xyzw\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n                this.values[2],\r\n                this.values[3],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n            this.values[2] = values[2];\r\n            this.values[3] = values[3];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"r\", {\r\n        get: function () {\r\n            return this.values[0];\r\n        },\r\n        set: function (value) {\r\n            this.values[0] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"g\", {\r\n        get: function () {\r\n            return this.values[1];\r\n        },\r\n        set: function (value) {\r\n            this.values[1] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"b\", {\r\n        get: function () {\r\n            return this.values[2];\r\n        },\r\n        set: function (value) {\r\n            this.values[2] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"a\", {\r\n        get: function () {\r\n            return this.values[3];\r\n        },\r\n        set: function (value) {\r\n            this.values[3] = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"rg\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"rgb\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n                this.values[2],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n            this.values[2] = values[2];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(vec4.prototype, \"rgba\", {\r\n        get: function () {\r\n            return [\r\n                this.values[0],\r\n                this.values[1],\r\n                this.values[2],\r\n                this.values[3],\r\n            ];\r\n        },\r\n        set: function (values) {\r\n            this.values[0] = values[0];\r\n            this.values[1] = values[1];\r\n            this.values[2] = values[2];\r\n            this.values[3] = values[3];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    vec4.prototype.at = function (index) {\r\n        return this.values[index];\r\n    };\r\n    vec4.prototype.reset = function () {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.z = 0;\r\n        this.w = 0;\r\n    };\r\n    vec4.prototype.copy = function (dest) {\r\n        if (!dest) {\r\n            dest = new vec4();\r\n        }\r\n        dest.x = this.x;\r\n        dest.y = this.y;\r\n        dest.z = this.z;\r\n        dest.w = this.w;\r\n        return dest;\r\n    };\r\n    vec4.prototype.negate = function (dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        dest.x = -this.x;\r\n        dest.y = -this.y;\r\n        dest.z = -this.z;\r\n        dest.w = -this.w;\r\n        return dest;\r\n    };\r\n    vec4.prototype.equals = function (vector, threshold) {\r\n        if (threshold === void 0) { threshold = constants_1.epsilon; }\r\n        if (Math.abs(this.x - vector.x) > threshold) {\r\n            return false;\r\n        }\r\n        if (Math.abs(this.y - vector.y) > threshold) {\r\n            return false;\r\n        }\r\n        if (Math.abs(this.z - vector.z) > threshold) {\r\n            return false;\r\n        }\r\n        if (Math.abs(this.w - vector.w) > threshold) {\r\n            return false;\r\n        }\r\n        return true;\r\n    };\r\n    vec4.prototype.length = function () {\r\n        return Math.sqrt(this.squaredLength());\r\n    };\r\n    vec4.prototype.squaredLength = function () {\r\n        var x = this.x;\r\n        var y = this.y;\r\n        var z = this.z;\r\n        var w = this.w;\r\n        return (x * x + y * y + z * z + w * w);\r\n    };\r\n    vec4.prototype.add = function (vector) {\r\n        this.x += vector.x;\r\n        this.y += vector.y;\r\n        this.z += vector.z;\r\n        this.w += vector.w;\r\n        return this;\r\n    };\r\n    vec4.prototype.subtract = function (vector) {\r\n        this.x -= vector.x;\r\n        this.y -= vector.y;\r\n        this.z -= vector.z;\r\n        this.w -= vector.w;\r\n        return this;\r\n    };\r\n    vec4.prototype.multiply = function (vector) {\r\n        this.x *= vector.x;\r\n        this.y *= vector.y;\r\n        this.z *= vector.z;\r\n        this.w *= vector.w;\r\n        return this;\r\n    };\r\n    vec4.prototype.divide = function (vector) {\r\n        this.x /= vector.x;\r\n        this.y /= vector.y;\r\n        this.z /= vector.z;\r\n        this.w /= vector.w;\r\n        return this;\r\n    };\r\n    vec4.prototype.scale = function (value, dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        dest.x *= value;\r\n        dest.y *= value;\r\n        dest.z *= value;\r\n        dest.w *= value;\r\n        return dest;\r\n    };\r\n    vec4.prototype.normalize = function (dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        var length = this.length();\r\n        if (length === 1) {\r\n            return this;\r\n        }\r\n        if (length === 0) {\r\n            dest.x *= 0;\r\n            dest.y *= 0;\r\n            dest.z *= 0;\r\n            dest.w *= 0;\r\n            return dest;\r\n        }\r\n        length = 1.0 / length;\r\n        dest.x *= length;\r\n        dest.y *= length;\r\n        dest.z *= length;\r\n        dest.w *= length;\r\n        return dest;\r\n    };\r\n    vec4.prototype.multiplyMat4 = function (matrix, dest) {\r\n        if (!dest) {\r\n            dest = this;\r\n        }\r\n        return matrix.multiplyVec4(this, dest);\r\n    };\r\n    vec4.mix = function (vector, vector2, time, dest) {\r\n        if (!dest) {\r\n            dest = new vec4();\r\n        }\r\n        dest.x = vector.x + time * (vector2.x - vector.x);\r\n        dest.y = vector.y + time * (vector2.y - vector.y);\r\n        dest.z = vector.z + time * (vector2.z - vector.z);\r\n        dest.w = vector.w + time * (vector2.w - vector.w);\r\n        return dest;\r\n    };\r\n    vec4.sum = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec4();\r\n        }\r\n        dest.x = vector.x + vector2.x;\r\n        dest.y = vector.y + vector2.y;\r\n        dest.z = vector.z + vector2.z;\r\n        dest.w = vector.w + vector2.w;\r\n        return dest;\r\n    };\r\n    vec4.difference = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec4();\r\n        }\r\n        dest.x = vector.x - vector2.x;\r\n        dest.y = vector.y - vector2.y;\r\n        dest.z = vector.z - vector2.z;\r\n        dest.w = vector.w - vector2.w;\r\n        return dest;\r\n    };\r\n    vec4.product = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec4();\r\n        }\r\n        dest.x = vector.x * vector2.x;\r\n        dest.y = vector.y * vector2.y;\r\n        dest.z = vector.z * vector2.z;\r\n        dest.w = vector.w * vector2.w;\r\n        return dest;\r\n    };\r\n    vec4.quotient = function (vector, vector2, dest) {\r\n        if (!dest) {\r\n            dest = new vec4();\r\n        }\r\n        dest.x = vector.x / vector2.x;\r\n        dest.y = vector.y / vector2.y;\r\n        dest.z = vector.z / vector2.z;\r\n        dest.w = vector.w / vector2.w;\r\n        return dest;\r\n    };\r\n    vec4.zero = new vec4([0, 0, 0, 1]);\r\n    vec4.one = new vec4([1, 1, 1, 1]);\r\n    return vec4;\r\n}());\r\nexports.default = vec4;\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/tsm/vec4.ts?");

/***/ }),

/***/ "./src/libs/variables.ts":
/*!*******************************!*\
  !*** ./src/libs/variables.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ShaderVariable = void 0;\r\nexports.ShaderVariable = {\r\n    Pmatrix: 'Pmatrix',\r\n    Vmatrix: 'Vmatrix',\r\n    Mmatrix: 'Mmatrix',\r\n    Lmatrix: 'Lmatrix',\r\n    PmatrixLight: 'PmatrixLight',\r\n    lightDirection: 'source_direction',\r\n    sampler: 'sampler',\r\n    samplerShadowMap: 'samplerShadowMap',\r\n    skybox: 'skybox',\r\n};\r\n\n\n//# sourceURL=webpack://Graphics_WebGL/./src/libs/variables.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("85b8c95d71a3e9a5e881")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Graphics_WebGL:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				const oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateGraphics_WebGL"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;