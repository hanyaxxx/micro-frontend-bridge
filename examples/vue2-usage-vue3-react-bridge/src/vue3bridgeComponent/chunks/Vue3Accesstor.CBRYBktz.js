import { h as i, g as a, A as m } from "./vendor.Cka4DEk7.js";
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
const y = h({ createApp: a, h: i }, (s) => s.use(m));
export {
  y as V
};
