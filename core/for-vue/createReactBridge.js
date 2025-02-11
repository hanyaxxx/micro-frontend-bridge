import { generateRandomString } from '../utils'

/**
 * Creates a bridge to render React components in Vue applications.
 *
 * @param {createElement, Component,createRoot?, render?} React - The React library createElement, Component
 * @param {createRoot?, render?} ReactDOM - The ReactDOM library , createRoot | render
 * @returns {Function} returns a bridge accessor
 * @returns {Function} A function that takes a React component and returns a bridge component
 * @returns {Function} h - The Vue3 h function,Because of the difference in vue's rendering mechanism, if vue3 provides an h function, vue2 doesn't
 *
 * @example
 * ```js
 * import React from 'react'
 * import ReactDOM from 'react-dom'
 * import { h } from 'vue'
 * import { createReactBridge } from '@micro-frontend-bridge/for-vue'
 * import { App } from './reactApp.tsx'
 *
 * // create vue3 accessor
 * const v3reactAccessor = createReactBridge(React, ReactDOM)
 *
 * // create vue2 accessor
 * const v2reactAccessor = createReactBridge(React, ReactDOM)
 *
 * //bridge react app to vue3
 * const Vue3Component = v3reactBridge(h)(App)
 *
 * //bridge react app to vue2
 * const Vue2Component = v2reactBridge()(App)
 * ```
 */
function createReactBridge({ createElement, Component }, { createRoot, render }) {
  function R15Render(id, app) {
    return render(app, document.getElementById(id))
  }

  function R18Render(id, app) {
    const root = createRoot(document.getElementById(id))
    root.render(app)
    return root
  }

  const _render = createRoot ? R18Render : R15Render

  class AccessorConnect extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    render() {
      const { _ref } = this.props
      _ref.update = () => this.setState(() => ({}))
      const connector = _ref.connector
      return createElement(connector, _ref._props)
    }
  }

  return (_h) => {
    function accessor(component) {
      const _ref = { connector: component, _props: null }
      const elementId = generateRandomString(10)
      return {
        name: 'Accessor',
        props: ['component', 'props'],
        mounted() {
          // _ref.connector = this.$props.component
          _ref._props = this.$props.props
          const root = _render(elementId, createElement(AccessorConnect, { _ref }))
          _ref.root = root
        },
        beforeUnmount() {
          _ref.root.unmount()
        },
        beforeDestroy() {
          _ref.root.unmount()
        },
        watch: {
          $props: {
            handler(newProps) {
              _ref._props = newProps.props
              _ref.update()
            },
            deep: true
          }
        },
        render(h) {
          return _h ? _h('div', { id: elementId }) : h('div', { attrs: { id: elementId } })
        }
      }
    }
    return accessor
  }
}

export default createReactBridge
