import { createReactBridge } from '../../../../core/for-react'
import React from 'react'
import ReactDOM from 'react-dom/client'

const accesstor = createReactBridge(React, ReactDOM)

export default accesstor
