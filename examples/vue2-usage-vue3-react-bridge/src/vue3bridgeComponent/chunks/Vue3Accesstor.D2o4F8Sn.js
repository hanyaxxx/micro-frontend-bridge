import { g as i, h as a, A as m } from "./vendor.CwSQNyvo.js";
function f(t) {
  const c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  const p = c.length;
  for (let u = 0; u < t; u++)
    n += c.charAt(Math.floor(Math.random() * p));
  return "element_" + n;
}
function h({ createApp: t, h: c }, n) {
  function p(o) {
    const { _props: r } = o;
    return {
      name: "vueAccessorConnect",
      data() {
        return {
          proxyProps: Object.assign({}, r)
        };
      },
      render() {
        return o.update = (e) => this.proxyProps = Object.assign({}, e), c(o.connector, this.proxyProps);
      }
    };
  }
  function u(o, r) {
    const e = t(p(r));
    return n == null || n(e), e.mount(document.getElementById(o)), e;
  }
  function d(o) {
    const r = { connector: o, _props: null }, e = f(10);
    return {
      name: "vueAccessor",
      props: ["props"],
      mounted() {
        r._props = this.$props.props;
        const s = u(e, r);
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
            r.update(s.props);
          },
          deep: !0
        }
      },
      render(s) {
        return s("div", { attrs: { id: e } });
      }
    };
  }
  return d;
}
const y = h({ createApp: i, h: a }, (t) => t.use(m));
export {
  y as V
};
