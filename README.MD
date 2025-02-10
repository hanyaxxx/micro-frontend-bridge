# 微前端桥接组件使用手册

## [这是什么?](#简介)

## [在线演示](https://stackblitz.com/~/github.com/hanyaxxx/micro-frontend-bridge?file=package.json)

在线演示修改文件后点按小浏览器刷新按钮查看变化

- **react-usage-react-bridge** <br/>在 react 中使用其他版本 react

- **react-usage-vue-bridge** <br/>在 react 中使用 vue 组件

- **vue2-usage-vue3&react-bridge** <br/>在 vue2 项目中使用 vue3 和 react 组件

- **vue3-usage-react-bridge** <br/>在 vue3 项目中使用 vue2 和 react 组件

### 安装错误?

```bash
npm install && npm run start
```

## 文件夹说明

- **./core** 核心库
- **./examples** 演示项目，展示了不同项目架构下桥接组件的使用

## 指令

```bash
# 在线测试
npm install && pnpm i

npm run start

# 在线测试
npm run build 及时测试

# 根据不同的examples进行测试

cd examples/**

npm install

npm run dev

```

# 库 API 说明

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
import { createReactBridge } from '@micro-frontend-bridge/for-vue'
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
import { createVue2Bridge } from '@micro-frontend-bridge/for-vue

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
import { createVue3Bridge } from '@micro-frontend-bridge/for-vue'
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

# 简介

这是一个新的微前端解决方案, 方法是通过高阶函数去实现不同前端技术栈项目的衔接, [**核心原理**](#核心原理)

现在有很多微前端方案,为什么要用这种方案? 先来总结一下目前主流的几种方法:

**1. 基于 Webpack 5 的 Module Federation**

- 优点：可实现第三方依赖共享，减少不必要的代码引入；微应用可动态更新，无需重新打包发布整合应用；去中心化，每个微应用间可直接通信。
- 缺点：对 webpack5 的依赖度较高，项目若不使用 webpack5 则难以接入。

**2. 基于 iframe**

- 优点：实现简单，无需对现有应用进行大量改造；能提供浏览器原生的硬隔离，JS、CSS、DOM 都完全隔离开，互不影响；可通过 postMessage API 进行消息传递。
- 缺点：无法保持路由状态，刷新后路由丢失，浏览器前进后退功能受限；应用间上下文难以共享，交互困难；弹窗只能在 iframe 内部展示；全量资源加载，性能较差；不利于 SEO。

**3. 基于 Web Components + 沙箱**

- 优点：CSS 和 JavaScript 天然隔离，避免样式冲突和脚本污染；原生浏览器支持，不依赖特定框架或库；多个子应用可并存，支持并行开发和独立部署。
- 缺点：浏览器兼容性存在问题，部分浏览器不完全支持；开发成本较高，可能需要重写现有应用；组件间通信需要额外设计。

**4. sigle-spa + 沙箱**

- 优点：技术栈无关，任意技术栈的应用均可接入；采用 HTML entry 接入方式，接入成本低；提供了样式隔离、JS 沙箱、资源预加载等功能。
- 缺点：样式隔离问题不完善,打包工具有一定限制等,组件通信问题等...

之前也尝过不同方案要么是兼容性问题,要么就是项目改造有点重,然后 css 样式隔离等问题.于是想实现一种另辟蹊跷的办法,于是 bridge 方案诞生了

## bridge 方案和其他微前端方案的区别?

- 1.更简洁,使用更自然,无额外知识,通过高阶函数创建桥接组件并直接使用

- 2.无 iframe 和 shadow dom 的依赖, 兼容性更好

- 3.组件通信更自然(通过原生 props 通信)

- 4.可组件化导入子应用/子组件

- 5.样式隔离问题处理更优(css-module 或者 scoped 取决于项目自身打包工具的配置)

## 什么时候使用?

1. 不同版本 react 项目或者不同版本 vue 项目需要微前端技术进行协调

2. react 项目和 vue 项目需要跨界协同

3. 对现有样式隔离方案不满意需要更好的实现方法

4. 对以 iframe 和 Web Components 为代表的技术实现方案不满意,希望速度更优的

5. 目前仅针对 react 和 vue 技术栈的互通

## 可能存在的缺点

1. 只支持 react 和 vue (目前精力有限)

2. 不同版本号的 ui 库在同一个项目可能会存在样式名同名的问题

## 核心原理

通过高阶组件生成一个桥接组件(中间件组件), 并且会代理 react 或者 vue 的 root 组件渲染过程.

### 为什么桥接组件之间的通信过程与原生父子组件之间无差异?

桥接组件会实时监听 props 变化, 并且会将这一变化同步到被桥接的组件,通过此方式实现不同技术栈组件之间的通信
