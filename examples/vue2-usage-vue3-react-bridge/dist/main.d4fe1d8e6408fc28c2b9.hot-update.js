"use strict";
self["webpackHotUpdatemy_project"]("main",{

/***/ "./src/vue3bridgeComponent/chunks/Vue3Accesstor.CBRYBktz.js":
/*!******************************************************************!*\
  !*** ./src/vue3bridgeComponent/chunks/Vue3Accesstor.CBRYBktz.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.Cka4DEk7.js */ "./src/vue3bridgeComponent/chunks/vendor.Cka4DEk7.js");

function f(s) {
  const c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  const p = c.length;
  for (let u = 0; u < s; u++)
    n += c.charAt(Math.floor(Math.random() * p));
  return "element_" + n;
}
function h({ createApp: s, h: c }, n) {
  function p(e) {
    const { _props: r } = e;
    return {
      name: "vueAccessorConnect",
      data() {
        return {
          proxyProps: Object.assign({}, r)
        };
      },
      render() {
        return e.update = (o) => this.proxyProps = Object.assign({}, o), c(e.connector, this.proxyProps);
      }
    };
  }
  function u(e, r) {
    const o = s(p(r));
    return n == null || n(o), o.mount(document.getElementById(e)), o;
  }
  function d(e) {
    const r = { connector: e, _props: null }, o = f(10);
    return {
      name: "vueAccessor",
      props: ["props"],
      mounted() {
        r._props = this.$props.props;
        const t = u(o, r);
        r.root = t;
      },
      beforeUnmount() {
        r.root.unmount();
      },
      beforeDestroy() {
        r.root.unmount();
      },
      watch: {
        $props: {
          handler(t) {
            console.log("newProps", t), r.update(t.props);
          },
          deep: !0
        }
      },
      render(t) {
        return t("div", { attrs: { id: o } });
      }
    };
  }
  return d;
}
const y = h({ createApp: _vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_0__.g, h: _vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_0__.h }, (s) => s.use(_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_0__.A));



/***/ }),

/***/ "./src/vue3bridgeComponent/vue3detail.js":
/*!***********************************************!*\
  !*** ./src/vue3bridgeComponent/vue3detail.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var _chunks_Vue3Accesstor_CBRYBktz_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/Vue3Accesstor.CBRYBktz.js */ "./src/vue3bridgeComponent/chunks/Vue3Accesstor.CBRYBktz.js");
/* harmony import */ var _chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunks/vendor.Cka4DEk7.js */ "./src/vue3bridgeComponent/chunks/vendor.Cka4DEk7.js");


const T = (t, o) => {
  const c = t.__vccOpts || t;
  for (const [d, p] of o)
    c[d] = p;
  return c;
}, V = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.d)({
  name: "ProductDetail",
  setup() {
    const t = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.r)({
      name: "Sample Product",
      description: "This is a sample product description.",
      price: "$99.99",
      image: "https://via.placeholder.com/150"
    });
    return {
      product: t,
      addToCart: () => {
        console.log("Product added to cart:", t);
      }
    };
  }
}), $ = { class: "product-detail" }, b = ["src"];
function h(t, o, c, d, p, y) {
  const l = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-col"), i = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-tag"), _ = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-button"), m = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-row"), f = (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.a)("a-card");
  return (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.o)(), (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.c)("div", $, [
    (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(f, null, {
      title: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => o[0] || (o[0] = [
        (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.e)("span", null, "Product Detail", -1)
      ])),
      default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
        (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(m, { gutter: 20 }, {
          default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
            (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(l, { span: 8 }, {
              default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
                (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.e)("img", {
                  src: t.product.image,
                  alt: "Product Image",
                  class: "product-image"
                }, null, 8, b)
              ]),
              _: 1
            }),
            (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(l, { span: 16 }, {
              default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
                (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.e)("h2", null, (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.t)(t.product.name), 1),
                (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.e)("p", null, (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.t)(t.product.description), 1),
                (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(i, { color: "success" }, {
                  default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => [
                    (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.f)((0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.t)(t.product.price), 1)
                  ]),
                  _: 1
                }),
                (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.b)(_, {
                  type: "primary",
                  onClick: t.addToCart
                }, {
                  default: (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => o[1] || (o[1] = [
                    (0,_chunks_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_1__.f)("Add to Cart")
                  ])),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const w = /* @__PURE__ */ T(V, [["render", h], ["__scopeId", "data-v-63eb11f0"]]), N = (0,_chunks_Vue3Accesstor_CBRYBktz_js__WEBPACK_IMPORTED_MODULE_0__.V)(w);



/***/ }),

/***/ "./src/vue3bridgeComponent/vue3home.js":
/*!*********************************************!*\
  !*** ./src/vue3bridgeComponent/vue3home.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ U)
/* harmony export */ });
/* harmony import */ var _chunks_Vue3Accesstor_CBRYBktz_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/Vue3Accesstor.CBRYBktz.js */ "./src/vue3bridgeComponent/chunks/Vue3Accesstor.CBRYBktz.js");
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
}, U = (0,_chunks_Vue3Accesstor_CBRYBktz_js__WEBPACK_IMPORTED_MODULE_0__.V)(S);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("933fba70acfe252f0233")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d4fe1d8e6408fc28c2b9.hot-update.js.map