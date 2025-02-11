import { createReactBridge } from '../../../../core/for-vue'
import { createElement, Component } from 'react'
import { createRoot } from 'react-dom/client'

const Accesstor = createReactBridge({ createElement, Component }, { createRoot })

export default Accesstor()
