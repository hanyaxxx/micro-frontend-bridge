import { g as i, h as a, A as m } from "./vendor.CwSQNyvo.js";
function f(t) {
  const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  const u = s.length;
  for (let c = 0; c < t; c++)
    n += s.charAt(Math.floor(Math.random() * u));
  return "element_" + n;
}
function h({ createApp: t, h: s }, n) {
  function u(o) {
    const { _props: r } = o;
    return {
      name: "vueAccessorConnect",
      data() {
        return {
          proxyProps: Object.assign({}, r)
        };
      },
      render() {
        return o.update = (e) => this.proxyProps = Object.assign({}, e), s(o.connector, this.proxyProps);
      }
    };
  }
  function c(o, r) {
    const e = t(u(r));
    return n == null || n(e), e.mount(document.getElementById(o)), e;
  }
  function d(o) {
    const r = { connector: o, _props: null }, e = f(10);
    return {
      name: "vueAccessor",
      props: ["props"],
      mounted() {
        r._props = this.$props.props;
        const p = c(e, r);
        r.root = p;
      },
      beforeUnmount() {
        r.root.unmount();
      },
      beforeDestroy() {
        r.root.unmount();
      },
      watch: {
        $props: {
          handler(p) {
            r.update(p.props);
          },
          deep: !0
        }
      },
      render() {
        return s("div", { id: e });
      }
    };
  }
  return d;
}
const y = h({ createApp: i, h: a }, (t) => t.use(m));
export {
  y as V
};
