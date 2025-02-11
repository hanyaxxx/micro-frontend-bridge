import { generateRandomString, copy } from '../utils'

/**
 *
 * Creates a bridge to render vue2 components in Vue3 applications.
 *
 * @param vue2 {Object} The vue2
 * @param _attr {Object} The attributes of the vue2 app
 * @returns {Function} returns a bridge accessor
 * @returns {Function} A function that takes a vue2 component and returns a bridge component
 * @returns {Function} h - The Vue3 h function
 * @example
 *
 * // in vue2 project
 * import vue2 from 'vue'
 * import Vue2Home from '../vue2/home/home.vue'
 *
 * // create bridge accessor
 * const vue2Accessor = createVue2Bridge(vue2)
 * // create bridge component
 * const bridgeComponent = (h)=> vue2Accessor(Vue2Home)(h)
 *
 * //in vue3 project
 * import { h } from 'vue'
 * import bridgeComponent from 'children-app/accesstor/Home'
 * //get bridge component
 * const Home = bridgeComponent(h)
 *
 * <template>
 *    <Home />
 * </template>
 *
 */
function createVue2Bridge(vue2, _attr = {}) {
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
        // _ref.update = (props) => (this.proxyProps = Object.assign({}, props))
        _ref.update = (props) => (this.proxyProps = copy(props))
        return h(_ref.connector, { props: this.proxyProps })
      }
    }
  }

  function vue2Render(id, _ref) {
    // const _attr = callback ?? {}

    const root = new vue2({
      ..._attr,
      render: (h) => h(vueAccessorConnect(_ref))
    })

    root.$mount(document.getElementById(id))
    root.unmount = root.$destroy
    return root
  }

  function vueAccessor(connector) {
    return (h, attr = {}) => {
      const _ref = { connector: connector, _props: null }
      const elementId = generateRandomString(10)
      return {
        name: 'vueAccessor',
        props: ['props'],
        mounted() {
          _ref._props = this.$props.props
          const root = vue2Render(elementId, _ref)
          // console.log('sss', elementId)
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
              _ref.update(newProps.props)
            },
            deep: true
          }
        },
        render() {
          return h('div', { ...attr, id: elementId })
        }
      }
    }
  }

  return vueAccessor
}

/**
 *
 * Creates a bridge to render vue3 components in Vue2 applications.
 *
 * @param vue3 {Object} The vue3
 * @param callback {Function}
 * @returns {Function} returns a bridge accessor
 * @returns {Function} A function that takes a vue3 component and returns a bridge component
 * @example
 *
 * // in vue3 project
 * import {createApp, h } from 'vue'
 * import Vue3Home from '../vue3/home/home.vue'
 *
 * // create bridge accessor
 * const vue3Accessor = createVue3Bridge({ createApp, h }, (app)=>{
 *  // do something
 * })
 *
 * // create bridge component
 * const HOME = vue3Accessor(Vue3Home)
 *
 * //in vue2 project
 * import HOME from 'children-app/accesstor/Home'
 *
 * export default {
 *   components:HOME
 * }
 *
 * <template>
 *    <Home />
 * </template>
 */
function createVue3Bridge({ createApp, h }, callback) {
  function vueAccessorConnect(_ref) {
    const { _props } = _ref
    return {
      name: 'vueAccessorConnect',
      data() {
        return {
          proxyProps: Object.assign({}, _props)
        }
      },
      render() {
        // _ref.update = (props) => (this.proxyProps = Object.assign({}, props))
        _ref.update = (props) => (this.proxyProps = copy(props))
        return h(_ref.connector, this.proxyProps)
      }
    }
  }

  function createRoot(id, _ref) {
    const app = createApp(vueAccessorConnect(_ref))
    callback?.(app)
    app.mount(document.getElementById(id))
    return app
  }

  function vueAccessor(connector) {
    const _ref = { connector: connector, _props: null }
    const elementId = generateRandomString(10)

    return {
      name: 'vueAccessor',
      props: ['props'],
      mounted() {
        _ref._props = this.$props.props
        const root = createRoot(elementId, _ref)
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
            // console.log('newProps', newProps)
            _ref.update(newProps.props)
          },
          deep: true
        }
      },
      render(h) {
        return h('div', { attrs: { id: elementId } })
      }
    }
  }

  return vueAccessor
}

export { createVue2Bridge, createVue3Bridge }
