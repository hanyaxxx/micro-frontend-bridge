type Vue3Component = any

type VueTemplateComponent = any

/**
 *
 * @param {*} React
 * @param {*} ReactDOM
 * @returns {function} callback function needed to h function in vue
 * @returns {function} component react component
 */
export function createReactBridge(React: any, ReactDOM: any): (h: any) => (component: any) => any

export function createVueBridge(
  vue3: any,
  callback: (app: Vue3Component) => any
): (connectorComponent: Vue3Component) => VueTemplateComponent
