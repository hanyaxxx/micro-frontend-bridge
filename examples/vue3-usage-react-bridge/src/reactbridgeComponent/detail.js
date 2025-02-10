import { A as o } from "./chunks/ReactAccesstor.B6f5DuQv.js";
import { j as r, B as s, C as c, G as e, T as a, a as d, b as n } from "./chunks/vendor.uudGgrvy.js";
import { h as l } from "vue";
const p = () => {
  const t = {
    name: "Sample Product",
    description: "This is a sample product description.",
    price: "$99.99",
    image: "https://via.placeholder.com/150"
  }, i = () => {
    console.log("Product added to cart:", t);
  };
  return /* @__PURE__ */ r.jsx(s, { sx: { p: 2 }, children: /* @__PURE__ */ r.jsx(c, { children: /* @__PURE__ */ r.jsx(s, { sx: { p: 2 }, children: /* @__PURE__ */ r.jsxs(e, { container: !0, spacing: 2, children: [
    /* @__PURE__ */ r.jsx(e, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ r.jsx(
      "img",
      {
        src: t.image,
        alt: "Product Image",
        style: {
          width: "100%",
          height: "auto"
        }
      }
    ) }),
    /* @__PURE__ */ r.jsxs(e, { item: !0, xs: 12, md: 8, children: [
      /* @__PURE__ */ r.jsx(a, { variant: "h4", gutterBottom: !0, children: t.name }),
      /* @__PURE__ */ r.jsx(a, { variant: "body1", paragraph: !0, children: t.description }),
      /* @__PURE__ */ r.jsx(
        d,
        {
          label: t.price,
          color: "success",
          sx: { mb: 2 }
        }
      ),
      /* @__PURE__ */ r.jsx(s, { children: /* @__PURE__ */ r.jsx(
        n,
        {
          variant: "contained",
          color: "primary",
          onClick: i,
          children: "Add to Cart"
        }
      ) })
    ] })
  ] }) }) }) });
}, u = o(p)(l);
export {
  u as default
};
