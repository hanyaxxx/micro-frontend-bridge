import { createApp } from 'vue'
import App from './app.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../children/vue2/node_modules/vue-material/dist/vue-material.min.css'
import '../children/vue2/node_modules/vue-material/dist/theme/default.css' // 这一行是可选的皮肤主题

const app = createApp(App)
app.use(ElementPlus)
app.mount('#root')

console.log('Vue3 app is running', app)
