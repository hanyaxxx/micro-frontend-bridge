import { v as f, A as h } from "./vendor.kkIrtoIn.js";
function m(e) {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let t = "";
  const u = n.length;
  for (let p = 0; p < e; p++)
    t += n.charAt(Math.floor(Math.random() * u));
  return "element_" + t;
}
function l(e, n = /* @__PURE__ */ new WeakMap()) {
  try {
    if (typeof e != "object" || e === null)
      return e;
    if (n.has(e))
      return n.get(e);
    const t = Array.isArray(e) ? [] : {};
    n.set(e, t);
    for (const u in e)
      if (Object.prototype.hasOwnProperty.call(e, u)) {
        const p = e[u];
        t[u] = typeof p == "function" ? p : l(p, n);
      }
    return t;
  } catch (t) {
    return console.error("An error occurred with a deep copy and was rolled back", e), console.error(t), e;
  }
}
function v(e, n) {
  function t(s) {
    const { h: o, reactive: r, defineComponent: c } = e, { _props: i } = s;
    return c({
      name: "vue3AccessorConnect",
      setup() {
        const d = r({ value: i });
        return s.update = (a) => d.value = l(a), () => o(s.connector, d.value);
      }
    });
  }
  function u(s, o) {
    const r = e.createApp(t(o));
    return n == null || n(r), r.mount(document.getElementById(s)), r;
  }
  function p(s) {
    const o = { connector: s, _props: null }, r = m(10);
    return {
      name: "vue2Accessor",
      props: ["props"],
      mounted() {
        o._props = this.$props.props;
        const c = u(r, o);
        o.root = c;
      },
      beforeDestroy() {
        o.root.unmount();
      },
      watch: {
        $props: {
          handler(c) {
            o.update(c.props);
          },
          deep: !0
        }
      },
      render(c) {
        return c("div", { attrs: { id: r } });
      }
    };
  }
  function A(s) {
    const o = { connector: s, _props: null }, r = m(10), { h: c, defineComponent: i } = e;
    return i({
      name: "vue3Accessor",
      props: ["props"],
      mounted() {
        o._props = this.$props.props;
        const d = u(r, o);
        o.root = d;
      },
      beforeUnmount() {
        o.root.unmount();
      },
      watch: {
        $props: {
          handler(d) {
            o.update(d.props);
          },
          deep: !0
        }
      },
      setup(d, a) {
        return () => c("div", { id: r });
      }
    });
  }
  return p;
}
const _ = v(f, (e) => {
  e.use(h);
});
export {
  _ as V
};
