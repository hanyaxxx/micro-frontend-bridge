import { V as g } from "./chunks/Vue3Accesstor.CK_O4YnS.js";
import { d as C, r as v, a as r, c as k, o as P, b as a, w as e, e as s, t as n, f as u } from "./chunks/vendor.Cka4DEk7.js";
const T = (t, o) => {
  const c = t.__vccOpts || t;
  for (const [d, p] of o)
    c[d] = p;
  return c;
}, V = C({
  name: "ProductDetail",
  setup() {
    const t = v({
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
  const l = r("a-col"), i = r("a-tag"), _ = r("a-button"), m = r("a-row"), f = r("a-card");
  return P(), k("div", $, [
    a(f, null, {
      title: e(() => o[0] || (o[0] = [
        s("span", null, "Product Detail", -1)
      ])),
      default: e(() => [
        a(m, { gutter: 20 }, {
          default: e(() => [
            a(l, { span: 8 }, {
              default: e(() => [
                s("img", {
                  src: t.product.image,
                  alt: "Product Image",
                  class: "product-image"
                }, null, 8, b)
              ]),
              _: 1
            }),
            a(l, { span: 16 }, {
              default: e(() => [
                s("h2", null, n(t.product.name), 1),
                s("p", null, n(t.product.description), 1),
                a(i, { color: "success" }, {
                  default: e(() => [
                    u(n(t.product.price), 1)
                  ]),
                  _: 1
                }),
                a(_, {
                  type: "primary",
                  onClick: t.addToCart
                }, {
                  default: e(() => o[1] || (o[1] = [
                    u("Add to Cart")
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
const w = /* @__PURE__ */ T(V, [["render", h], ["__scopeId", "data-v-63eb11f0"]]), N = g(w);
export {
  N as default
};
