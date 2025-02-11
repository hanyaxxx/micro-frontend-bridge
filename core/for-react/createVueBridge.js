import { generateRandomString } from '../utils'

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
function createVueBridge(vue, callback) {
  function vueAccessorConnect(_ref) {
    const { _props } = _ref

    return {
      name: 'vueAccessorConnect',
      data() {
        return {
          proxyProps: Object.assign({}, _props)
        }
      },
      render(h) {
        _ref.update = (props) => (this.proxyProps = Object.assign({}, props))
        return vue.h ? vue.h(_ref.connector, this.proxyProps) : h(_ref.connector, { props: this.proxyProps })
      }
    }
  }

  // function vue3AccessorConnect(_ref) {
  //   const { h, ref } = vue
  //   const { _props } = _ref
  //   return {
  //     name: 'vue3AccessorConnect',
  //     setup() {
  //       const proxy = ref(_props)
  //       _ref.update = (props) => (proxy.value = props)
  //       return () => h(_ref.connector, proxy.value)
  //     }
  //   }
  // }

  function vue3(id, _ref) {
    const app = vue.createApp(vueAccessorConnect(_ref))
    callback?.(app)
    app.mount(document.getElementById(id))
    return app
  }

  function vue2(id, _ref) {
    const _attr = callback ?? {}
    const root = new vue({
      ..._attr,
      render: (h) => h(vueAccessorConnect(_ref))
    })
    root.$mount(document.getElementById(id))
    root.unmount = root.$destroy
    return root
  }

  const render = vue.createApp ? vue3 : vue2

  return (component) => {
    return ({ createElement, Component }) => {
      class Accessor extends Component {
        constructor(props) {
          super(props)
          this.state = {
            id: `connect_${generateRandomString(10)}`,
            _ref: { connector: null },
            _root: null
          }
        }
        componentDidMount() {
          const { id, _ref } = this.state
          // const { component, ...rest } = this.props
          _ref.connector = component
          _ref._props = this.props
          const root = render(id, _ref)
          this.state._root = root
        }

        componentDidUpdate() {
          const { _ref } = this.state
          // const { component, ...rest } = this.props
          // _ref.connector = component
          _ref._props = this.props
          // console.log('update', _ref)
          this.state._ref.update(_ref._props)
        }
        componentWillUnmount() {
          this.state._root?.unmount()
        }
        render() {
          return createElement('div', { id: this.state.id })
        }
      }
      return Accessor
    }
  }
}

export default createVueBridge
