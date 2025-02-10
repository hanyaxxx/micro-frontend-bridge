import { r as m, d as h } from "./vendor.uudGgrvy.js";
function g(c) {
  const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  const u = p.length;
  for (let a = 0; a < c; a++)
    n += p.charAt(Math.floor(Math.random() * u));
  return "element_" + n;
}
function R({ createElement: c, Component: p, createRoot: n, render: u }) {
  function a(o, t) {
    return u(t, document.getElementById(o));
  }
  function i(o, t) {
    const e = n(document.getElementById(o));
    return e.render(t), e;
  }
  const l = n ? i : a;
  class f extends p {
    constructor(t) {
      super(t), this.state = {};
    }
    render() {
      const { _ref: t } = this.props;
      t.update = () => this.setState(() => ({}));
      const e = t.connector;
      return c(e, t._props);
    }
  }
  return (o) => {
    function t(e) {
      const r = { connector: o, _props: null }, d = g(10);
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
const A = R({ createElement: m.createElement, createRoot: h.createRoot, Component: m.Component });
export {
  A
};
