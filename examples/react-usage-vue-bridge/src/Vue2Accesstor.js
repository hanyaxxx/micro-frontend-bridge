import React from 'react'
import vue2 from '../children/vue2/node_modules/vue'
import Vue2ExampleComponent from '../children/vue2/src/ExampleComponent.vue'
import { createVueBridge } from '../../../core/for-react'
import '../children/vue2/src/attach'

const Vue2Accesstor = createVueBridge(vue2)

export const VUE2EXAMPLECOMPONENT = Vue2Accesstor(Vue2ExampleComponent)(React)
