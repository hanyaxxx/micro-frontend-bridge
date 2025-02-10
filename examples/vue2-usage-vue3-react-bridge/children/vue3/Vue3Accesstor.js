import { createApp, h } from 'vue'
import { createVue3Bridge } from '../../../../core/for-vue'
import Antd from 'ant-design-vue'

const Vue3Accesstor = createVue3Bridge({ createApp, h }, (app) => app.use(Antd))

export default Vue3Accesstor
