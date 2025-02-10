# React 使用 Vue Bridge 示例

此项目展示了如何在 React 项目中同时使用 Vue 2 和 Vue 3 组件。通过使用 `createVueBridge` 函数，我们可以将 Vue 组件桥接到 React 中。

## 项目结构

- `webpack.config.js`: Webpack 配置文件，包含了 Vue 2 和 Vue 3 的配置。
- `src/Vue3Accesstor.js`: 用于创建 Vue 3 组件桥接器的文件。
- `src/Vue2Accesstor.js`: 用于创建 Vue 2 组件桥接器的文件。
- `src/index.jsx`: 示例文件，展示如何在 React 中使用 Vue 3 组件。
- `src/index2.jsx`: 示例文件，展示如何在 React 中使用 Vue 2 组件。
- `src/index3.jsx`: 示例文件，展示如何在 React 中同时使用 Vue 2 和 Vue 3 组件。
- `children/vue3/src/ExampleComponent.vue`: Vue 3 示例组件。
- `children/vue2/src/ExampleComponent.vue`: Vue 2 示例组件。

## 文件说明

### webpack.config.js

此文件包含了多个 Webpack 配置，用于处理不同的入口文件和输出文件。配置包括：

- `vue3` 配置：用于处理 Vue 3 组件。
- `vue2` 配置：用于处理 Vue 2 组件。
- `concurrently` 配置：用于同时处理 Vue 2 和 Vue 3 组件。
- `vue2-library` 配置：用于将 Vue 2 组件打包成库。

### src/Vue3Accesstor.js

此文件用于创建 Vue 3 组件桥接器。使用 `createVueBridge` 函数将 Vue 3 组件桥接到 React 中。

### src/Vue2Accesstor.js

此文件用于创建 Vue 2 组件桥接器。使用 `createVueBridge` 函数将 Vue 2 组件桥接到 React 中。

### src/index.jsx

此文件展示了如何在 React 中使用 Vue 3 组件。通过 `Vue3Accesstor` 将 Vue 3 组件桥接到 React 中。

### src/index2.jsx

此文件展示了如何在 React 中使用 Vue 2 组件。通过 `Vue2Accesstor` 将 Vue 2 组件桥接到 React 中。

### src/index3.jsx

此文件展示了如何在 React 中同时使用 Vue 2 和 Vue 3 组件。通过 `Vue2Accesstor` 和 `Vue3Accesstor` 将 Vue 2 和 Vue 3 组件桥接到 React 中。

### children/vue3/src/ExampleComponent.vue

这是一个 Vue 3 示例组件，展示了如何在 Vue 3 中使用 Vuetify 组件。

### children/vue2/src/ExampleComponent.vue

这是一个 Vue 2 示例组件，展示了如何在 Vue 2 中使用 Element UI 组件。

## 如何运行

1. 安装依赖：

   ```bash
   npm install
   ```

2. 启动开发服务器：

   ```bash
   npm start
   ```

3. 打开浏览器访问 `http://localhost:9000` 查看 Vue 3 示例。
4. 打开浏览器访问 `http://localhost:9001` 查看 Vue 2 示例。
5. 打开浏览器访问 `http://localhost:9002` 查看同时使用 Vue 2 和 Vue 3 的示例。
