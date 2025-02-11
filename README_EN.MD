# Micro-Frontend Bridge Component User Manual

[中文](./README.md)

## [What is this?](#introduction)

## [Online Demo](https://stackblitz.com/~/github.com/hanyaxxx/micro-frontend-bridge?file=package.json)

After modifying the file, click the small browser refresh button to see the changes.

- **react-usage-react-bridge** <br/>Using different versions of React in React

- **react-usage-vue-bridge** <br/>Using Vue components in React

- **vue2-usage-vue3&react-bridge** <br/>Using Vue3 and React components in a Vue2 project

- **vue3-usage-react-bridge** <br/>Using Vue2 and React components in a Vue3 project

### Installation Issues?

```bash
npm install && npm run start
```

## Folder Description

- **./core** Core library
- **./examples** Example projects demonstrating the use of bridge components in different project architectures

## Commands

```bash
# Online testing
npm install && pnpm i

npm run start

# Build project
npm run build

# Test different examples

cd examples/**

npm install

npm run dev
```

# Library API Description

## micro-frontend-bridge/for-react

Use this library when React is the main application.

- `createReactBridge` Create a React bridge
- `createVueBridge` Create a Vue bridge

### Example - micro-frontend-bridge/for-react

#### createReactBridge

```js
// Creating a React bridge component for different versions of React in a React project
// children app (file 1) .children-app/accesstor/Button
import React from 'react'
import ReactDOM from 'react-dom'
import { createReactBridge } from 'micro-frontend-bridge/for-react'
import Button from './Button'

// Assume the child app is a React 15 project
// Create a bridge accessor for React 15
const accesstor = createReactBridge(React, ReactDOM)
// The accessor is a higher-order function used to link the React 15 button
export default accesstor(Button)

// main app (file 2)
import BUTTON from 'children-app/accesstor/Button'

// The main app is a React 18 project
// Use the React 15 button in React 18, it is recommended to use uppercase component names to distinguish bridge components
const App = () => {
  return (
    <div>
      <BUTTON />
    </div>
  )
}
```

#### createVueBridge

##### Vue2

```js
// Creating a Vue2 bridge component for use in a React project
// children app (file 1) .children-app/accesstor/Button
import Vue from 'vue'
import { createVueBridge } from 'micro-frontend-bridge/for-react'
import Button from './Button.vue'

// Assume the child app is a Vue2 project
// Create a bridge accessor for Vue2
const accesstor = createVueBridge(Vue)
// The accessor is a higher-order function used to link the Vue2 button
export default accesstor(Button)

// main app (file 2)
import React from 'react'
import button from 'children-app/accesstor/Button'
const BUTTON = button(React)

// The main app is a React 18 project
// Use the Vue2 button in React 18, it is recommended to use uppercase component names to distinguish bridge components
const App = () => {
  return (
    <div>
      <BUTTON color="grey" />
    </div>
  )
}
```

##### Vue3

```js
// Creating a Vue3 bridge component for use in a React project
// children app (file 1) .children-app/accesstor/Button
import * as Vue from 'vue'
import { createVueBridge } from 'micro-frontend-bridge/for-react'
import Button from './Button.vue'

// Assume the child app is a Vue3 project
// Create a bridge accessor for Vue3
const accesstor = createVueBridge(Vue, (app) => app.use(/**/))
// The accessor is a higher-order function used to link the Vue3 button
export default accesstor(Button)

// main app (file 2)
import React from 'react'
import button from 'children-app/accesstor/Button'
const BUTTON = button(React)

// The main app is a React 18 project
// Use the Vue3 button in React 18, it is recommended to use uppercase component names to distinguish bridge components
const App = () => {
  return (
    <div>
      <BUTTON color="grey" />
    </div>
  )
}
```

## micro-frontend-bridge/for-vue

Use this library when Vue is the main application.

- `createReactBridge` Create a React bridge
- `createVue3Bridge` Create a Vue3 bridge
- `createVue2Bridge` Create a Vue2 bridge

### Example - micro-frontend-bridge/for-vue

#### createReactBridge

```js
// Creating a React bridge component for use in Vue2 and Vue3 projects
import React from 'react'
import ReactDOM from 'react-dom'
import { h } from 'vue'
import { createReactBridge } from '@micro-frontend-bridge/for-vue'
import { App } from './reactApp.tsx'

// Create Vue3 accessor
const v3reactAccessor = createReactBridge(React, ReactDOM)

// Create Vue2 accessor
const v2reactAccessor = createReactBridge(React, ReactDOM)

// Bridge the React app to Vue3
const Vue3Component = v3reactAccessor(h)(App)

// Bridge the React app to Vue2
const Vue2Component = v2reactAccessor()(App)
```

#### createVue2Bridge

```js
// Creating a Vue bridge component for use in different Vue projects
import Vue2 from 'vue'
import Vue2Home from '../vue2/home/home.vue'
import { createVue2Bridge } from '@micro-frontend-bridge/for-vue'

// Create bridge accessor
const vue2Accessor = createVue2Bridge(Vue2)
// Create bridge component
const bridgeComponent = (h) => vue2Accessor(Vue2Home)(h)

// In Vue3 project
import { h } from 'vue'
import bridgeComponent from 'children-app/accesstor/Home'
// Get bridge component
const Home = bridgeComponent(h)

<template>
   <Home />
</template>
```

#### createVue3Bridge

```js
import { createApp, h } from 'vue'
import Vue3Home from '../vue3/home/home.vue'
import { createVue3Bridge } from '@micro-frontend-bridge/for-vue'

// Create bridge accessor
const vue3Accessor = createVue3Bridge({ createApp, h }, (app) => {
  // do something
})

// Create bridge component
const HOME = vue3Accessor(Vue3Home)

// In Vue2 project
import HOME from 'children-app/accesstor/Home'

export default {
  components: HOME
}

<template>
   <Home />
</template>
```

## How to optimize?

Generally micro-front-end access projects may cause the problem of excessive package size, because it is implemented based on high-order functions, and dynamic import and suspense can be used to achieve on-demand loading

# Introduction

This is a new micro-frontend solution that uses higher-order functions to achieve integration between projects with different frontend technology stacks. [**Core Principles**](#core-principles)

There are many micro-frontend solutions available, so why use this one? Let's summarize the main methods currently in use:

**1. Module Federation based on Webpack 5**

- Advantages: Allows sharing of third-party dependencies, reducing unnecessary code inclusion; micro-applications can be dynamically updated without repackaging and publishing the entire application; decentralized, allowing direct communication between micro-applications.
- Disadvantages: Highly dependent on Webpack 5, making it difficult to integrate into projects not using Webpack 5.

**2. Based on iframe**

- Advantages: Simple to implement, requires minimal modification to existing applications; provides native browser isolation, with JS, CSS, and DOM completely isolated and unaffected by each other; can communicate via postMessage API.
- Disadvantages: Cannot maintain route state, losing routes after refresh, and limited browser forward/backward functionality; difficult to share context between applications, making interaction challenging; pop-ups can only be displayed within the iframe; full resource loading results in poor performance; not SEO-friendly.

**3. Based on Web Components + Sandbox**

- Advantages: Natural isolation of CSS and JavaScript, avoiding style conflicts and script pollution; native browser support, not dependent on specific frameworks or libraries; multiple sub-applications can coexist, supporting parallel development and independent deployment.
- Disadvantages: Browser compatibility issues, with some browsers not fully supporting it; high development cost, potentially requiring rewriting of existing applications; additional design needed for component communication.

**4. single-spa + Sandbox**

- Advantages: Technology stack agnostic, allowing integration of applications with any technology stack; low integration cost with HTML entry method; provides features like style isolation, JS sandbox, and resource preloading.
- Disadvantages: Incomplete style isolation, limitations with packaging tools, component communication issues, etc.

Having tried different solutions, we found compatibility issues or heavy project modifications, along with style isolation problems. This led to the creation of the bridge solution.

## How is the bridge solution different from other micro-frontend solutions?

- 1. Simpler and more natural to use, with no additional knowledge required, creating bridge components through higher-order functions and using them directly.
- 2. No dependency on iframe or shadow DOM, resulting in better compatibility.
- 3. More natural component communication (via native props).
- 4. Allows componentized import of sub-applications/sub-components.
- 5. Better handling of style isolation issues (css-module or scoped, depending on the project's packaging tool configuration).

## When to use it?

1. When different versions of React projects or different versions of Vue projects need micro-frontend technology for coordination.
2. When React projects and Vue projects need cross-technology collaboration.
3. When dissatisfied with existing style isolation solutions and looking for better implementation methods.
4. When dissatisfied with iframe and Web Components-based solutions, seeking better performance.
5. Currently only supports interoperability between React and Vue technology stacks.

## Possible drawbacks

1. Only supports React and Vue (limited resources at the moment).
2. Style name conflicts may occur when using different versions of UI libraries in the same project.

## Core Principles

A bridge component (middleware component) is generated through higher-order components, which proxies the rendering process of the React or Vue root component.

### Why is the communication process between bridge components no different from that between native parent-child components?

The bridge component listens to prop changes in real-time and synchronizes these changes to the bridged component, enabling communication between components with different technology stacks.
