import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './app.vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

new Vue({
  el: '#root',
  render: (h) => h(App)
})
