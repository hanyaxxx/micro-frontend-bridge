"use strict";
self["webpackHotUpdatemy_project"]("main",{

/***/ "./src/vue3bridgeComponent/vue3home.js":
/*!*********************************************!*\
  !*** ./src/vue3bridgeComponent/vue3home.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ U)
/* harmony export */ });
/* harmony import */ var _chunks_Vue3Accesstor_CK_O4YnS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/Vue3Accesstor.CK_O4YnS.js */ "./src/vue3bridgeComponent/chunks/Vue3Accesstor.CK_O4YnS.js");
/* harmony import */ var _chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunks/vendor.Cka4DEk7.js */ "./src/vue3bridgeComponent/chunks/vendor.Cka4DEk7.js");


const C = { style: {
  margin: "16px"
} }, S = {
  __name: "home",
  props: ["form", "name", "changeVue2Form"],
  setup(n) {
    const m = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.r)({
      username: "",
      password: "",
      remember: !0
    }), c = (s) => {
      console.log("Success:", s);
    }, p = (s) => {
      console.log("Failed:", s);
    }, f = n, v = (s) => {
      f.changeVue2Form(s);
    };
    return (s, a) => {
      const u = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-input"), t = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-form-item"), b = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-input-password"), w = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-checkbox"), _ = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-button"), h = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-form");
      return (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.o)(), (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.c)(_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.F, null, [
        (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.e)("div", C, " username-text : " + (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.t)(n.name), 1),
        (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.e)("div", null, [
          (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(h, {
            model: m,
            name: "basic",
            "label-col": { span: 8 },
            "wrapper-col": { span: 16 },
            autocomplete: "off",
            onFinish: c,
            onFinishFailed: p
          }, {
            default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
              (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(t, {
                label: "v2Username",
                name: "username"
              }, {
                default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
                  (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(u, {
                    value: n.name,
                    onChange: a[0] || (a[0] = (r) => v({ ...n.form, name: r.target.value }))
                  }, null, 8, ["value"]),
                  a[3] || (a[3] = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.e)("p", null, "This component shows the communication between the Vue3 and Vue2 components", -1))
                ]),
                _: 1
              }),
              (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(t, {
                label: "v2email",
                name: "email"
              }, {
                default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
                  (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(u, {
                    value: n.form.email
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(t, {
                label: "v2address",
                name: "address"
              }, {
                default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
                  (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(u, {
                    value: n.form.description.address
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(t, {
                label: "v2city",
                name: "city"
              }, {
                default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
                  (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(u, {
                    value: n.form.description.city
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(t, {
                label: "v3Password",
                name: "password",
                rules: [{ required: !0, message: "Please input your password!" }]
              }, {
                default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
                  (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(b, {
                    value: m.password,
                    "onUpdate:value": a[1] || (a[1] = (r) => m.password = r)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(t, {
                name: "v3remember",
                "wrapper-col": { offset: 8, span: 16 }
              }, {
                default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
                  (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(w, {
                    checked: m.remember,
                    "onUpdate:checked": a[2] || (a[2] = (r) => m.remember = r)
                  }, {
                    default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => a[4] || (a[4] = [
                      (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.f)("Remember me")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ]),
                _: 1
              }),
              (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(t, { "wrapper-col": { offset: 8, span: 16 } }, {
                default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
                  (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(_, {
                    type: "primary",
                    "html-type": "submit"
                  }, {
                    default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => a[5] || (a[5] = [
                      (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.f)("Submit")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ])
      ], 64);
    };
  }
}, U = (0,_chunks_Vue3Accesstor_CK_O4YnS_js__WEBPACK_IMPORTED_MODULE_0__.V)(S);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("24c0c3909f8d20d15db2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.6dc3eaab8630f76a152d.hot-update.js.map