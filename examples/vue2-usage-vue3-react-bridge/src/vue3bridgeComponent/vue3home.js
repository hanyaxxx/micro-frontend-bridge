import { V as F } from "./chunks/Vue3Accesstor.D2o4F8Sn.js";
import { r as g, a as l, o as y, c as V, F as k, e as i, t as x, b as e, w as o, f as d } from "./chunks/vendor.CwSQNyvo.js";
const C = { style: {
  margin: "16px"
} }, S = {
  __name: "home",
  props: ["form", "name", "changeVue2Form"],
  setup(n) {
    const m = g({
      username: "",
      password: "",
      remember: !0
    }), c = (s) => {
      console.log("Success:", s);
    }, p = (s) => {
      console.log("Failed:", s);
    }, f = n, v = (s) => {
      f.changeVue2Form(s);
    };
    return (s, a) => {
      const u = l("a-input"), t = l("a-form-item"), b = l("a-input-password"), w = l("a-checkbox"), _ = l("a-button"), h = l("a-form");
      return y(), V(k, null, [
        i("div", C, " username-text : " + x(n.name), 1),
        i("div", null, [
          e(h, {
            model: m,
            name: "basic",
            "label-col": { span: 8 },
            "wrapper-col": { span: 16 },
            autocomplete: "off",
            onFinish: c,
            onFinishFailed: p
          }, {
            default: o(() => [
              e(t, {
                label: "v2Username",
                name: "username"
              }, {
                default: o(() => [
                  e(u, {
                    value: n.name,
                    onChange: a[0] || (a[0] = (r) => v({ ...n.form, name: r.target.value }))
                  }, null, 8, ["value"]),
                  a[3] || (a[3] = i("p", null, "This component shows the communication between the Vue3 and Vue2 components", -1))
                ]),
                _: 1
              }),
              e(t, {
                label: "v2email",
                name: "email"
              }, {
                default: o(() => [
                  e(u, {
                    value: n.form.email
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              e(t, {
                label: "v2address",
                name: "address"
              }, {
                default: o(() => [
                  e(u, {
                    value: n.form.description.address
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              e(t, {
                label: "v2city",
                name: "city"
              }, {
                default: o(() => [
                  e(u, {
                    value: n.form.description.city
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              e(t, {
                label: "v3Password",
                name: "password",
                rules: [{ required: !0, message: "Please input your password!" }]
              }, {
                default: o(() => [
                  e(b, {
                    value: m.password,
                    "onUpdate:value": a[1] || (a[1] = (r) => m.password = r)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              e(t, {
                name: "v3remember",
                "wrapper-col": { offset: 8, span: 16 }
              }, {
                default: o(() => [
                  e(w, {
                    checked: m.remember,
                    "onUpdate:checked": a[2] || (a[2] = (r) => m.remember = r)
                  }, {
                    default: o(() => a[4] || (a[4] = [
                      d("Remember me")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ]),
                _: 1
              }),
              e(t, { "wrapper-col": { offset: 8, span: 16 } }, {
                default: o(() => [
                  e(_, {
                    type: "primary",
                    "html-type": "submit"
                  }, {
                    default: o(() => a[5] || (a[5] = [
                      d("Submit")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ])
      ], 64);
    };
  }
}, U = F(S);
export {
  U as default
};
