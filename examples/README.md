# 微前端桥接示例项目总结

本目录包含四个示例项目的特点，分别展示了如何在不同框架之间进行组件桥接。以下是每个示例的特点和区别：

# 以 Vue 作为主应用

在 vue 项目架构的示例中桥接组件全部分散在子应用中, 当然也可以把桥接组件集中在主应用中使用(参考 **react 示例**)

## 1. Vue3 中使用 React 组件示例

文件路径: `vue3-usage-react-bridge`

### 特点

- 演示如何在 Vue3 项目中集成 React 和 Vue2 组件。
- 通过 `createVueBridge` 和 `createReactBridge` 函数，实现 Vue3 应用与 React 和 Vue2 组件的互操作性。
- 使用 Vite 进行构建和开发。

### 技术栈

- Vue 3.x, Vite, Ant Design Vue 4.x
- React 19.x, Vite, Material-UI
- Vue 2.x, Webpack, Element-UI

## 2. Vue2 中使用 Vue3 和 React 组件示例

文件路径: `vue2-usage-vue3&react-bridge`

### 特点

- 演示如何在 Vue2 项目中集成 Vue3 和 React 组件。
- 通过 `createVueBridge` 和 `createReactBridge` 函数，实现 Vue2 应用与 Vue3 和 React 组件的互操作性。
- 使用 Webpack 进行构建和开发。

### 技术栈

- Vue 2.x, Webpack 5, Element UI
- Vue 3.x, Vite, Ant Design Vue 4.x
- React, Vite, Material-UI

# 以 React 作为主应用

react 项目架构的示例中桥接组件全部集成在主应用中, 当然也可以把桥接组件分散到子项目中然后导入在主应用使用(参考 vue 示例)

## 1. React 中使用 Vue 组件示例

文件路径: `react-usage-vue-bridge`

### 特点

- 演示如何在 React 项目中同时使用 Vue2 和 Vue3 组件。
- 通过 `createVueBridge` 函数，将 Vue 组件桥接到 React 中。
- 使用 Webpack 进行构建和开发。

### 技术栈

- React, Webpack
- Vue 2.x, Element UI
- Vue 3.x, Vuetify

## 2. React 中使用 React Bridge 示例

文件路径: `react-usage-react-bridge`

### 特点

- 演示如何在 React 18 应用中嵌入 React 15 应用，并在两个应用之间进行通信。
- 使用 React Bridge 实现微前端架构。
- 使用 Material-UI 组件库。

### 技术栈

- React 18, React 15, Material-UI

---
