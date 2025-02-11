import { h as a, g as m, A as f } from "./vendor.Cka4DEk7.js";
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
const A = l({ createApp: m, h: a }, (r) => r.use(f));
export {
  A as V
};
