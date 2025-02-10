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

/***/ "../../core/for-react/createReactBridge.js":
/*!*************************************************!*\
  !*** ../../core/for-react/createReactBridge.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"../../core/utils.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\n/**\r\n * Creates a bridge to render React components in other React applications.\r\n *\r\n * @param React - The React library\r\n * @param ReactDOM - The ReactDOM library\r\n * @returns {HOC Function} returns a bridge accessor\r\n *\r\n * @example \r\n * // children app .children-app/accesstor/Button\r\n  import React from 'react'\r\n  import ReactDOM from 'react-dom'\r\n  import { createReactBridge } from 'micro-frontend-bridge/for-react'\r\n  import Button from './Button'\r\n  const accesstor = createReactBridge(React, ReactDOM)\r\n  export default accesstor(Button)\r\n\r\n  // main app\r\n  import BUTTON from 'children-app/accesstor/Button'\r\n \r\n  const App = () => {\r\n    return (\r\n      <div>\r\n        <BUTTON />\r\n      </div>\r\n    )\r\n  }\r\n */\n\nfunction createReactBridge(React, ReactDOM) {\n  function R15Render(id, app) {\n    return ReactDOM.render(app, document.getElementById(id));\n  }\n  function R18Render(id, app) {\n    var root = ReactDOM.createRoot(document.getElementById(id));\n    root.render(app);\n    return root;\n  }\n  var render = ReactDOM.createRoot ? R18Render : R15Render;\n  var AccessorConnect = /*#__PURE__*/function (_React$Component) {\n    function AccessorConnect(props) {\n      var _this;\n      _classCallCheck(this, AccessorConnect);\n      _this = _callSuper(this, AccessorConnect, [props]);\n      _this.state = {};\n      return _this;\n    }\n    _inherits(AccessorConnect, _React$Component);\n    return _createClass(AccessorConnect, [{\n      key: \"render\",\n      value: function render() {\n        var _this2 = this;\n        var _ref = this.props._ref;\n        _ref.update = function () {\n          return _this2.setState(function () {\n            return {};\n          });\n        };\n        var connector = _ref.connector;\n        return React.createElement(connector, _ref._props);\n      }\n    }]);\n  }(React.Component);\n  return function (component) {\n    var Accessor = /*#__PURE__*/function (_React$Component2) {\n      function Accessor(props) {\n        var _this3;\n        _classCallCheck(this, Accessor);\n        _this3 = _callSuper(this, Accessor, [props]);\n        _this3.state = {\n          id: \"connect_\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(10)),\n          _ref: {\n            connector: null\n          },\n          _root: null\n        };\n        return _this3;\n      }\n      _inherits(Accessor, _React$Component2);\n      return _createClass(Accessor, [{\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n          var _this$state = this.state,\n            id = _this$state.id,\n            _ref = _this$state._ref;\n          // const { ...rest } = this.props\n          _ref.connector = component;\n          _ref._props = this.props;\n          var root = render(id, React.createElement(AccessorConnect, {\n            _ref: _ref\n          })\n          //<AccessorConnect _ref={_ref} />\n          );\n          this.state._root = root;\n        }\n      }, {\n        key: \"componentDidUpdate\",\n        value: function componentDidUpdate() {\n          var _ref = this.state._ref;\n          // const { component, ...rest } = this.props\n          // _ref.connector = component\n          _ref._props = this.props;\n          // console.log('update', _ref)\n          this.state._ref.update();\n        }\n      }, {\n        key: \"componentWillUnmount\",\n        value: function componentWillUnmount() {\n          var _this$state$_root;\n          (_this$state$_root = this.state._root) === null || _this$state$_root === void 0 || _this$state$_root.unmount();\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          return React.createElement('div', {\n            id: this.state.id\n          });\n          // return <div id={this.state.id}></div>\n        }\n      }]);\n    }(React.Component);\n    return Accessor;\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReactBridge);\n\n//# sourceURL=webpack://my-project/../../core/for-react/createReactBridge.js?");

/***/ }),

/***/ "../../core/for-react/createVueBridge.js":
/*!***********************************************!*\
  !*** ../../core/for-react/createVueBridge.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"../../core/utils.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n/**\r\n * Creates a bridge to render vue components in React applications.\r\n * @example vue2 usage\r\n  // children app(file 1) .children-app/accesstor/Button\r\n  import vue from 'vue'\r\n  import { createVueBridge } from 'micro-frontend-bridge/for-react'\r\n  import Button from './Button.vue'\r\n  const accesstor = createVueBridge(vue)\r\n  export default accesstor(Button)\r\n\r\n  // main app(file 2)\r\n  import React from 'react'\r\n  import button from 'children-app/accesstor/Button'\r\n  const BUTTON = button(React)\r\n  const App = () => {\r\n    return (\r\n      <div>\r\n        <BUTTON color=\"grey\"/>\r\n      </div>\r\n    )\r\n  }\r\n    \r\n  * @example vue3 usage\r\n  // children app(file 1) .children-app/accesstor/Button\r\n  import * as vue from 'vue'\r\n  import { createVueBridge } from 'micro-frontend-bridge/for-react'\r\n  import Button from './Button.vue'\r\n  const accesstor = createVueBridge(vue)\r\n  export default accesstor(Button)\r\n\r\n  // main app(file 2)\r\n  import React from 'react'\r\n  import button from 'children-app/accesstor/Button'\r\n  const BUTTON = button(React)\r\n  const App = () => {\r\n    return (\r\n      <div>\r\n        <BUTTON color=\"grey\"/>\r\n      </div>\r\n    )\r\n  }\r\n * */\nfunction createVueBridge(vue, callback) {\n  function vueAccessorConnect(_ref) {\n    var _props = _ref._props;\n    return {\n      name: 'vueAccessorConnect',\n      data: function data() {\n        return {\n          proxyProps: Object.assign({}, _props)\n        };\n      },\n      render: function render(h) {\n        var _this = this;\n        _ref.update = function (props) {\n          return _this.proxyProps = Object.assign({}, props);\n        };\n        return vue.h ? vue.h(_ref.connector, this.proxyProps) : h(_ref.connector, {\n          props: this.proxyProps\n        });\n      }\n    };\n  }\n\n  // function vue3AccessorConnect(_ref) {\n  //   const { h, ref } = vue\n  //   const { _props } = _ref\n  //   return {\n  //     name: 'vue3AccessorConnect',\n  //     setup() {\n  //       const proxy = ref(_props)\n  //       _ref.update = (props) => (proxy.value = props)\n  //       return () => h(_ref.connector, proxy.value)\n  //     }\n  //   }\n  // }\n\n  function vue3(id, _ref) {\n    var app = vue.createApp(vueAccessorConnect(_ref));\n    callback === null || callback === void 0 || callback(app);\n    app.mount(document.getElementById(id));\n    return app;\n  }\n  function vue2(id, _ref) {\n    var _attr = callback !== null && callback !== void 0 ? callback : {};\n    var root = new vue(_objectSpread(_objectSpread({}, _attr), {}, {\n      render: function render(h) {\n        return h(vueAccessorConnect(_ref));\n      }\n    }));\n    root.$mount(document.getElementById(id));\n    root.unmount = root.$destroy;\n    return root;\n  }\n  var render = vue.createApp ? vue3 : vue2;\n  return function (component) {\n    return function (_ref2) {\n      var createElement = _ref2.createElement,\n        Component = _ref2.Component;\n      var Accessor = /*#__PURE__*/function (_Component) {\n        function Accessor(props) {\n          var _this2;\n          _classCallCheck(this, Accessor);\n          _this2 = _callSuper(this, Accessor, [props]);\n          _this2.state = {\n            id: \"connect_\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(10)),\n            _ref: {\n              connector: null\n            },\n            _root: null\n          };\n          return _this2;\n        }\n        _inherits(Accessor, _Component);\n        return _createClass(Accessor, [{\n          key: \"componentDidMount\",\n          value: function componentDidMount() {\n            var _this$state = this.state,\n              id = _this$state.id,\n              _ref = _this$state._ref;\n            // const { component, ...rest } = this.props\n            _ref.connector = component;\n            _ref._props = this.props;\n            var root = render(id, _ref);\n            this.state._root = root;\n          }\n        }, {\n          key: \"componentDidUpdate\",\n          value: function componentDidUpdate() {\n            var _ref = this.state._ref;\n            // const { component, ...rest } = this.props\n            // _ref.connector = component\n            _ref._props = this.props;\n            // console.log('update', _ref)\n            this.state._ref.update(_ref._props);\n          }\n        }, {\n          key: \"componentWillUnmount\",\n          value: function componentWillUnmount() {\n            var _this$state$_root;\n            (_this$state$_root = this.state._root) === null || _this$state$_root === void 0 || _this$state$_root.unmount();\n          }\n        }, {\n          key: \"render\",\n          value: function render() {\n            return createElement('div', {\n              id: this.state.id\n            });\n          }\n        }]);\n      }(Component);\n      return Accessor;\n    };\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createVueBridge);\n\n//# sourceURL=webpack://my-project/../../core/for-react/createVueBridge.js?");

/***/ }),

/***/ "../../core/for-react/index.js":
/*!*************************************!*\
  !*** ../../core/for-react/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createReactBridge: () => (/* reexport safe */ _createReactBridge__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   createVueBridge: () => (/* reexport safe */ _createVueBridge__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _createReactBridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReactBridge */ \"../../core/for-react/createReactBridge.js\");\n/* harmony import */ var _createVueBridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createVueBridge */ \"../../core/for-react/createVueBridge.js\");\n\n\n\n//# sourceURL=webpack://my-project/../../core/for-react/index.js?");

/***/ }),

/***/ "../../core/utils.js":
/*!***************************!*\
  !*** ../../core/utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   copy: () => (/* binding */ copy),\n/* harmony export */   generateRandomString: () => (/* binding */ generateRandomString)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction generateRandomString(length) {\n  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n  var result = '';\n  var charactersLength = characters.length;\n  for (var i = 0; i < length; i++) {\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n  }\n  return 'element_' + result;\n}\nfunction copy(target) {\n  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();\n  try {\n    if (_typeof(target) !== 'object' || target === null) {\n      return target;\n    }\n    if (map.has(target)) {\n      return map.get(target);\n    }\n    var result = Array.isArray(target) ? [] : {};\n    map.set(target, result);\n    for (var key in target) {\n      if (Object.prototype.hasOwnProperty.call(target, key)) {\n        var value = target[key];\n        result[key] = typeof value === 'function' ? value : copy(value, map);\n      }\n    }\n    return result;\n  } catch (error) {\n    console.error('An error occurred with a deep copy and was rolled back', target);\n    console.error(error);\n    return target;\n  }\n}\n\n//# sourceURL=webpack://my-project/../../core/utils.js?");

/***/ }),

/***/ "./children/src/HowToUseR18ButtonInR15.jsx":
/*!*************************************************!*\
  !*** ./children/src/HowToUseR18ButtonInR15.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../../node_modules/.pnpm/react@15.7.0/node_modules/react/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _r18accesstor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./r18accesstor */ \"./children/src/r18accesstor.jsx\");\n/* harmony import */ var _src_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/button */ \"./src/button.jsx\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nvar colors = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];\nvar R18BUTTON = (0,_r18accesstor__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_src_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar App = /*#__PURE__*/function (_Component) {\n  function App(props) {\n    var _this;\n    _classCallCheck(this, App);\n    _this = _callSuper(this, App, [props]);\n    _defineProperty(_this, \"handleIncrement\", function () {\n      _this.setState(function (prevState) {\n        return {\n          count: prevState.count + 1\n        };\n      });\n    });\n    _defineProperty(_this, \"handleColorChange\", function () {\n      _this.setState(function (prevState) {\n        return {\n          colorIndex: (prevState.colorIndex + 1) % colors.length\n        };\n      });\n    });\n    _this.state = {\n      count: 0,\n      colorIndex: 0\n    };\n    return _this;\n  }\n  _inherits(App, _Component);\n  return _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var currentColor = colors[this.state.colorIndex];\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"R15 Count: \", this.state.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n        onClick: this.handleColorChange\n      }, \"Change R18 Button Color\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(R18BUTTON, {\n        color: currentColor,\n        handleIncrement: this.handleIncrement\n      }));\n    }\n  }]);\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://my-project/./children/src/HowToUseR18ButtonInR15.jsx?");

/***/ }),

/***/ "./children/src/index.jsx":
/*!********************************!*\
  !*** ./children/src/index.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../../node_modules/.pnpm/react@15.7.0/node_modules/react/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../../../../node_modules/.pnpm/react-dom@15.7.0_react@15.7.0/node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HowToUseR18ButtonInR15__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HowToUseR18ButtonInR15 */ \"./children/src/HowToUseR18ButtonInR15.jsx\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nvar App = /*#__PURE__*/function (_Component) {\n  function App(props) {\n    var _this;\n    _classCallCheck(this, App);\n    _this = _callSuper(this, App, [props]);\n    _defineProperty(_this, \"handleIncrement\", function () {\n      _this.setState(function (prevState) {\n        return {\n          count: prevState.count + 1\n        };\n      });\n    });\n    _this.state = {\n      count: 0\n    };\n    return _this;\n  }\n  _inherits(App, _Component);\n  return _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"----------------R15 APP----------------\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"R18 Count:\", this.props.type, \" (from R18 state)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"R15 Count: \", this.state.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n        onClick: this.handleIncrement\n      }, \" Increase R15 Count\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"----------------How To Use R18 Button In R15----------------\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HowToUseR18ButtonInR15__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n    }\n  }]);\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//ReactDOM.render(<App />, document.getElementById(\"root\"));\n\n//# sourceURL=webpack://my-project/./children/src/index.jsx?");

/***/ }),

/***/ "./children/src/r18accesstor.jsx":
/*!***************************************!*\
  !*** ./children/src/r18accesstor.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_for_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/for-react */ \"../../core/for-react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../../../node_modules/.pnpm/react@15.7.0/node_modules/react/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ \"../../../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js\");\n\n\n\nvar accesstor = (0,_core_for_react__WEBPACK_IMPORTED_MODULE_0__.createReactBridge)((react__WEBPACK_IMPORTED_MODULE_1___default()), react_dom_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accesstor);\n\n//# sourceURL=webpack://my-project/./children/src/r18accesstor.jsx?");

/***/ }),

/***/ "./src/bridgeComponent/index.js":
/*!**************************************!*\
  !*** ./src/bridgeComponent/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   R15APP: () => (/* binding */ R15APP)\n/* harmony export */ });\n/* harmony import */ var _children_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../children/src/index */ \"./children/src/index.jsx\");\n/* harmony import */ var _r15accesstor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./r15accesstor */ \"./src/bridgeComponent/r15accesstor.js\");\n\n\nvar R15APP = (0,_r15accesstor__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_children_src_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://my-project/./src/bridgeComponent/index.js?");

/***/ }),

/***/ "./src/bridgeComponent/r15accesstor.js":
/*!*********************************************!*\
  !*** ./src/bridgeComponent/r15accesstor.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _children_node_modules_react_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../children/node_modules/react/react */ \"../../../../node_modules/.pnpm/react@15.7.0/node_modules/react/react.js\");\n/* harmony import */ var _children_node_modules_react_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_children_node_modules_react_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _children_node_modules_react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../children/node_modules/react-dom */ \"../../../../node_modules/.pnpm/react-dom@15.7.0_react@15.7.0/node_modules/react-dom/index.js\");\n/* harmony import */ var _children_node_modules_react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_children_node_modules_react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_for_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/for-react */ \"../../core/for-react/index.js\");\n\n\n\nvar accesstor = (0,_core_for_react__WEBPACK_IMPORTED_MODULE_2__.createReactBridge)((_children_node_modules_react_react__WEBPACK_IMPORTED_MODULE_0___default()), (_children_node_modules_react_dom__WEBPACK_IMPORTED_MODULE_1___default()));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accesstor);\n\n//# sourceURL=webpack://my-project/./src/bridgeComponent/r15accesstor.js?");

/***/ }),

/***/ "./src/button.jsx":
/*!************************!*\
  !*** ./src/button.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Button */ \"../../../../node_modules/.pnpm/@mui+material@6.3.0_@emotion+react@11.14.0_@types+react@19.0.2_react@18.3.1__@emotion+styled@_isbpr7633fysc7we6nymma2sla/node_modules/@mui/material/Button/Button.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\nvar App = function App(props) {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    count = _React$useState2[0],\n    setCount = _React$useState2[1];\n  var handleIncrement = function handleIncrement() {\n    setCount(count + 1);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"----------------R18 Button APP----------------\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"R18 Button Count: \", count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"contained\",\n    color: props.color,\n    onClick: handleIncrement\n  }, \"Increase R18 Count\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginTop: 24\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"outlined\",\n    onClick: props.handleIncrement\n  }, \"Increase R15 Count\")));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://my-project/./src/button.jsx?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"../../../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js\");\n/* harmony import */ var _bridgeComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bridgeComponent */ \"./src/bridgeComponent/index.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\nvar App = function App() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    state = _React$useState2[0],\n    setState = _React$useState2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"-------------------Use R15 in R18----------------\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return setState(state + 1);\n    }\n  }, \" Increase R18 Count\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bridgeComponent__WEBPACK_IMPORTED_MODULE_2__.R15APP, {\n    type: state\n  }));\n};\nreact_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root')).render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));\n\n//# sourceURL=webpack://my-project/./src/index.jsx?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_pnpm_mui_material_6_3_0__emotion_react_11_14_0__types_react_19_0_2_react-9decf0"], () => (__webpack_require__("./src/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;