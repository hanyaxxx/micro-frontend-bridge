import React from 'react'
import * as vue3 from '../children/vue3/node_modules/vue'
import vuetify from '../children/vue3/src/vuetify'
import { createVueBridge } from '../../../core/for-react'
import Vue3ExampleComponent from '../children/vue3/src/ExampleComponent.vue'

const Vue3Accesstor = createVueBridge(vue3, (app) => app.use(vuetify))

export const VUE3EXAMPLECOMPONENT = Vue3Accesstor(Vue3ExampleComponent)(React)
