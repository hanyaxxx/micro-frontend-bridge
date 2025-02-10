# Using React Bridge in Vue3 / 在 Vue3 中使用 React 组件示例

[English Version](./README_EN.md)

## 项目介绍

这是一个演示如何在 Vue3 项目中无缝集成 React 和 vue2 组件的示例项目。通过使用特制的桥接组件，使得 Vue3 应用能够直接使用 React & vue2 组件，保持了两个框架的互操作性。

## 示例总结

- 1.如何在子应用中使用 Accessor 创建桥接组件
- 2.使用 props 进行组件应用
- 3.使用 props 的回调函数进行不同框架父子组件通信
- 4.使用 vite 将桥接组件输出到 Vue3 目录以供 Vue3 项目使用

## 技术栈

- Vue 3.x, vite, ant-design-vue 4.x
- React 19.x, vite , Material-UI
- Vue 2.x,webpack, element-ui

## 项目结构

```
├── children/
│   └── react/               # React 组件目录
│       ├── src/
│       │   ├── pages/       # React 页面组件
│       │   └── bridgeComponent/  # 桥接后的组件
│       └── ReactAccessor.js # React 访问器
│   └── vue2/               # vue2 组件目录
│       ├── src/
│       │   ├── pages/       # React 页面组件
│       │   └── bridgeComponent/  # 桥接后的组件
│       └── VueAccessor.js # Vue2 访问器
├── src/
│   └── index.js            # Vue3 主应用入口
├── vite.config.js          # Vite 配置
└── index.html             # HTML 模板
```

## 安装

```bash
# 安装主项目依赖
npm install

# 安装 Vue2 项目依赖
cd children/vue2
npm install

# 输出桥接组件到vue2目录
npm run bridge

# 安装 react 项目依赖
cd children/react
npm install

# 输出桥接组件到vue2目录
npm run bridge
```

## 开发

```bash
# 启动开发服务器
npm run dev


npm run vite

```

## 使用方法

1. 在 React/vue2 目录下开发组件
2. 使用 Accessor 包装你需要桥接的组件
3. 在 Vue3 应用中引入并使用桥接后的组件
4. 不同框架通过 props 的回调函数进行父子组件通信

---

## 访问应用

打开浏览器并访问 `http://localhost:1004`

---

```

```
