import { d as h, r as m } from "./vendor.CGBBQ0Oh.js";
import { h as g } from "vue";
function R(c) {
  const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  const u = p.length;
  for (let a = 0; a < c; a++)
    n += p.charAt(Math.floor(Math.random() * u));
  return "element_" + n;
}
function A({ createElement: c, Component: p }, { createRoot: n, render: u }) {
  function a(e, t) {
    return u(t, document.getElementById(e));
  }
  function i(e, t) {
    const o = n(document.getElementById(e));
    return o.render(t), o;
  }
  const l = n ? i : a;
  class f extends p {
    constructor(t) {
      super(t), this.state = {};
    }
    render() {
      const { _ref: t } = this.props;
      t.update = () => this.setState(() => ({}));
      const o = t.connector;
      return c(o, t._props);
    }
  }
  return (e) => {
    function t(o) {
      const r = { connector: o, _props: null }, d = R(10);
      return {
        name: "Accessor",
        props: ["component", "props"],
        mounted() {
          r._props = this.$props.props;
          const s = l(d, c(f, { _ref: r }));
          r.root = s;
        },
        beforeUnmount() {
          r.root.unmount();
        },
        beforeDestroy() {
          r.root.unmount();
        },
        watch: {
          $props: {
            handler(s) {
              r._props = s.props, r.update();
            },
            deep: !0
          }
        },
        render(s) {
          return e ? e("div", { id: d }) : s("div", { attrs: { id: d } });
        }
      };
    }
    return t;
  };
}
const _ = A({ createElement: m.createElement, Component: m.Component }, { createRoot: h.createRoot }), y = _(g);
export {
  y as A
};
