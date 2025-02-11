type VueComponent = any

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
export function createReactBridge(React: any, ReactDOM: any): (vue3H?: any) => (reactComponent: any) => VueComponent

/**
 *
 * Creates a bridge to render vue2 components in Vue3 applications.
 *
 * @param vue2 {Object} The vue2
 * @param vue2RootAttr {Object} The attributes of the vue2 app
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
export function createVue2Bridge(
  vue2: any,
  vue2RootAttr?: any
): (vue2Component: any) => (vue3_h_func: any) => VueComponent

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
export function createVue3Bridge(
  { createApp, h },
  callback?: (vue3App: any) => any
): (vue3Component: any) => VueComponent
