# 微前端桥接组件使用手册

- core 核心库

- examples 演示项目 examples 文件夹是具体的示例并且展示了不同项目架构下桥接组件的使用

## 在线演示

-
-
-
-

# 库 api 说明

## micro-frontend-bridge/for-react

react 作为主应用用这个库

- createReactBridge //创建 react 桥接器
- createVueBridge //创建 vue 桥接器

### example - micro-frontend-bridge/for-react

#### createReactBridge

```js 以react为主应用创建其他版本的react桥接器组件用于react项目
// children app(file 1) .children-app/accesstor/Button
import React from 'react'
import ReactDOM from 'react-dom'
import { createReactBridge } from 'micro-frontend-bridge/for-react'
import Button from './Button'
//假设子应用是一个react15的项目
//为react15创建一个桥接访问器
const accesstor = createReactBridge(React, ReactDOM)
//访问器是一个高阶函数,用来链接react 15 button按钮
export default accesstor(Button)

// main app(file 2)
import BUTTON from 'children-app/accesstor/Button'
//主应用是一个React 18 项目
//在react18中使用react 15的按钮 推荐使用大写组件名称区别桥接组件
const App = () => {
  return (
    <div>
      <BUTTON />
    </div>
  )
}
```

#### createVueBridge

##### vue2

```js 以react为主应用创建vue2桥接器组件用于react项目
// children app(file 1) .children-app/accesstor/Button
import vue from 'vue'
import { createVueBridge } from 'micro-frontend-bridge/for-react'
import Button from './Button.vue'

//假设子应用是一个vue2的项目
//为vue2创建一个桥接访问器
const accesstor = createVueBridge(vue)
//访问器是一个高阶函数,用来链接react 15 button按钮
export default accesstor(Button)

// main app(file 2)
import React from 'react'
import button from 'children-app/accesstor/Button'
const BUTTON = button(React)

//主应用是一个React 18 项目
//在react18中使用vue2的按钮 推荐使用大写组件名称区别桥接组件
const App = () => {
  return (
    <div>
      <BUTTON color="grey" />
    </div>
  )
}
```

##### vue3

```js 以react为主应用创建vue3桥接器组件用于react项目
// children app(file 1) .children-app/accesstor/Button
import * as vue from 'vue'
import { createVueBridge } from 'micro-frontend-bridge/for-react'
import Button from './Button.vue'

//假设子应用是一个vue3的项目
//为vue3创建一个桥接访问器
const accesstor = createVueBridge(vue, (app) => app.use(/**/))
//访问器是一个高阶函数,用来链接react 15 button按钮
export default accesstor(Button)

// main app(file 2)
import React from 'react'
import button from 'children-app/accesstor/Button'
const BUTTON = button(React)

//主应用是一个React 18 项目
//在react18中使用vue3的按钮 推荐使用大写组件名称区别桥接组件
const App = () => {
  return (
    <div>
      <BUTTON color="grey" />
    </div>
  )
}
```

## micro-frontend-bridge/for-vue

vue 作为主应用用这个库

- createReactBridge //创建 react 桥接器
- createVue3Bridge //创建 vue3 桥接器
- createVue2Bridge //创建 vue3 桥接器

### example - micro-frontend-bridge/for-vue

#### createReactBridge

```js 创建react桥接组件在vue2和vue3项目中使用
import React from 'react'
import ReactDOM from 'react-dom'
import { h } from 'vue'
import { createReactBridge } from '@micro-frontend-bridge/core'
import { App } from './reactApp.tsx'

// create vue3 accessor
const v3reactAccessor = createReactBridge(React, ReactDOM)

// create vue2 accessor
const v2reactAccessor = createReactBridge(React, ReactDOM)

//bridge react app to vue3
const Vue3Component = v3reactBridge(h)(App)

//bridge react app to vue2
const Vue2Component = v2reactBridge()(App)
```

#### createVue2Bridge

```js 创建vue桥接组件在不同的vue项目中使用
import vue2 from 'vue'
import Vue2Home from '../vue2/home/home.vue'

// create bridge accessor
const vue2Accessor = createVue2Bridge(vue2)
// create bridge component
const bridgeComponent = (h)=> vue2Accessor(Vue2Home)(h)

//in vue3 project
import { h } from 'vue'
import bridgeComponent from 'children-app/accesstor/Home'
//get bridge component
const Home = bridgeComponent(h)

<template>
   <Home />
</template>

```

#### createVue3Bridge

```js
 import {createApp, h } from 'vue'
 import Vue3Home from '../vue3/home/home.vue'

 // create bridge accessor
 const vue3Accessor = createVue3Bridge({ createApp, h }, (app)=>{
  // do something
 })

 // create bridge component
 const HOME = vue3Accessor(Vue3Home)

 //in vue2 project
 import HOME from 'children-app/accesstor/Home'

 export default {
   components:HOME
 }

 <template>
    <Home />
 </template>
```
