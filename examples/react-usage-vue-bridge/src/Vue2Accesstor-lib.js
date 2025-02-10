import React from 'react'
import vue2 from '../children/vue2/node_modules/vue'
import Vue2Home from './bridgeComponent/home'
import { createVueBridge } from '../../../core/for-react'
import '../children/vue2/src/attach'

const Vue2Accesstor = createVueBridge(vue2)
//通过lib的方式暴露vue2组件,而不是直接读取vue文件的形式, 因为同一个项目不能有两个vue编辑器
export const VUE2HOME = Vue2Accesstor(Vue2Home)(React)
