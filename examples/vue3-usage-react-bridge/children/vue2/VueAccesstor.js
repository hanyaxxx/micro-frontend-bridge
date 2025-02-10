import Vue from 'vue'
import { createVue2Bridge } from '../../../../core/for-vue'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)
const VueAccesstor = createVue2Bridge(Vue)

export default VueAccesstor
