import React from '../../children/node_modules/react/react'
import ReactDOM from '../../children/node_modules/react-dom'
import { createReactBridge } from '../../../../core/for-react'
const accesstor = createReactBridge(React, ReactDOM)
export default accesstor
