import { A as x } from "./chunks/ReactAccesstor.B6f5DuQv.js";
import { j as e, B as m, T as o, P as p, G as s, c as i } from "./chunks/vendor.uudGgrvy.js";
import { h as j } from "vue";
const g = ({ form: a, name: l, changeVue3Form: d }) => {
  const n = (t, c) => {
    const r = { ...a };
    if (t.includes(".")) {
      const [h, u] = t.split(".");
      r[h][u] = c;
    } else
      r[t] = c;
    d(r);
  };
  return /* @__PURE__ */ e.jsxs(m, { sx: { margin: 2 }, children: [
    /* @__PURE__ */ e.jsxs(o, { variant: "h6", children: [
      "username-text: ",
      l
    ] }),
    /* @__PURE__ */ e.jsx(p, { sx: { p: 2, mt: 2 }, children: /* @__PURE__ */ e.jsxs(s, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ e.jsxs(s, { item: !0, xs: 12, children: [
        /* @__PURE__ */ e.jsx(i, { fullWidth: !0, label: "Username", value: l, onChange: (t) => n("name", t.target.value) }),
        /* @__PURE__ */ e.jsx(o, { variant: "caption", sx: { mt: 1 }, children: "This component shows the communication between the Vue3 and React components" })
      ] }),
      /* @__PURE__ */ e.jsx(s, { item: !0, xs: 12, children: /* @__PURE__ */ e.jsx(
        i,
        {
          fullWidth: !0,
          label: "Email",
          value: a.email,
          onChange: (t) => n("email", t.target.value)
        }
      ) }),
      /* @__PURE__ */ e.jsx(s, { item: !0, xs: 12, children: /* @__PURE__ */ e.jsx(
        i,
        {
          fullWidth: !0,
          label: "Address",
          value: a.description.address,
          onChange: (t) => n("description.address", t.target.value)
        }
      ) }),
      /* @__PURE__ */ e.jsx(s, { item: !0, xs: 12, children: /* @__PURE__ */ e.jsx(
        i,
        {
          fullWidth: !0,
          label: "City",
          value: a.description.city,
          onChange: (t) => n("description.city", t.target.value)
        }
      ) })
    ] }) })
  ] });
}, y = x(g)(j);
export {
  y as default
};
