"use strict";
self["webpackHotUpdatemy_project"]("main",{

/***/ "./src/vue3bridgeComponent/chunks/Vue3Accesstor.C3fK0WoO.js":
/*!******************************************************************!*\
  !*** ./src/vue3bridgeComponent/chunks/Vue3Accesstor.C3fK0WoO.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var _vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.Cka4DEk7.js */ "./src/vue3bridgeComponent/chunks/vendor.Cka4DEk7.js");

function h(r) {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let o = "";
  const c = n.length;
  for (let t = 0; t < r; t++)
    o += n.charAt(Math.floor(Math.random() * c));
  return "element_" + o;
}
function d(r, n = /* @__PURE__ */ new WeakMap()) {
  try {
    if (typeof r != "object" || r === null)
      return r;
    if (n.has(r))
      return n.get(r);
    const o = Array.isArray(r) ? [] : {};
    n.set(r, o);
    for (const c in r)
      if (Object.prototype.hasOwnProperty.call(r, c)) {
        const t = r[c];
        o[c] = typeof t == "function" ? t : d(t, n);
      }
    return o;
  } catch (o) {
    return console.error("An error occurred with a deep copy and was rolled back", r), console.error(o), r;
  }
}
function l({ createApp: r, h: n }, o) {
  function c(u) {
    const { _props: e } = u;
    return {
      name: "vueAccessorConnect",
      data() {
        return {
          proxyProps: Object.assign({}, e)
        };
      },
      render() {
        return u.update = (s) => this.proxyProps = d(s), n(u.connector, this.proxyProps);
      }
    };
  }
  function t(u, e) {
    const s = r(c(e));
    return o == null || o(s), s.mount(document.getElementById(u)), s;
  }
  function i(u) {
    const e = { connector: u, _props: null }, s = h(10);
    return {
      name: "vueAccessor",
      props: ["props"],
      mounted() {
        e._props = this.$props.props;
        const p = t(s, e);
        e.root = p;
      },
      beforeUnmount() {
        e.root.unmount();
      },
      beforeDestroy() {
        e.root.unmount();
      },
      watch: {
        $props: {
          handler(p) {
            console.log("newProps", p), e.update(p.props);
          },
          deep: !0
        }
      },
      render(p) {
        return p("div", { attrs: { id: s } });
      }
    };
  }
  return i;
}
const A = l({ createApp: _vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_0__.g, h: _vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_0__.h }, (r) => r.use(_vendor_Cka4DEk7_js__WEBPACK_IMPORTED_MODULE_0__.A));



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
/* harmony import */ var _chunks_Vue3Accesstor_C3fK0WoO_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/Vue3Accesstor.C3fK0WoO.js */ "./src/vue3bridgeComponent/chunks/Vue3Accesstor.C3fK0WoO.js");
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
const w = /* @__PURE__ */ T(V, [["render", h], ["__scopeId", "data-v-63eb11f0"]]), N = (0,_chunks_Vue3Accesstor_C3fK0WoO_js__WEBPACK_IMPORTED_MODULE_0__.V)(w);



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
/* harmony import */ var _chunks_Vue3Accesstor_C3fK0WoO_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/Vue3Accesstor.C3fK0WoO.js */ "./src/vue3bridgeComponent/chunks/Vue3Accesstor.C3fK0WoO.js");
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
}, U = (0,_chunks_Vue3Accesstor_C3fK0WoO_js__WEBPACK_IMPORTED_MODULE_0__.V)(S);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("01c8c2af3f656102d549")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.933fba70acfe252f0233.hot-update.js.map