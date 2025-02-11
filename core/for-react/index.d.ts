type ReactComponent = any

/**
 * Creates a bridge to render React components in other React applications.
 *
 * @param React - The React library
 * @param ReactDOM - The ReactDOM library
 * @returns {HOC Function} returns a bridge accessor
 *
 * @example 
 * // children app .children-app/accesstor/Button
  import React from 'react'
  import ReactDOM from 'react-dom'
  import { createReactBridge } from 'micro-frontend-bridge/for-react'
  import Button from './Button'
  const accesstor = createReactBridge(React, ReactDOM)
  export default accesstor(Button)

  // main app
  import BUTTON from 'children-app/accesstor/Button'
 
  const App = () => {
    return (
      <div>
        <BUTTON />
      </div>
    )
  }
 */
export function createReactBridge(React: any, ReactDOM: any): (reactComponent: any) => ReactComponent

/**
 * Creates a bridge to render vue components in React applications.
 * @example vue2 usage
  // children app(file 1) .children-app/accesstor/Button
  import vue from 'vue'
  import { createVueBridge } from 'micro-frontend-bridge/for-react'
  import Button from './Button.vue'
  const accesstor = createVueBridge(vue)
  export default accesstor(Button)

  // main app(file 2)
  import React from 'react'
  import button from 'children-app/accesstor/Button'
  const BUTTON = button(React)
  const App = () => {
    return (
      <div>
        <BUTTON color="grey"/>
      </div>
    )
  }
    
  * @example vue3 usage
  // children app(file 1) .children-app/accesstor/Button
  import * as vue from 'vue'
  import { createVueBridge } from 'micro-frontend-bridge/for-react'
  import Button from './Button.vue'
  const accesstor = createVueBridge(vue)
  export default accesstor(Button)

  // main app(file 2)
  import React from 'react'
  import button from 'children-app/accesstor/Button'
  const BUTTON = button(React)
  const App = () => {
    return (
      <div>
        <BUTTON color="grey"/>
      </div>
    )
  }
 * */
export function createVueBridge(vue: any, callback?: (vue3App) => any): (vueComponent: any) => ReactComponent
