# Vue3 Bridge in Vue2 Demo / Vue2 中使用 Vue3 组件示例

[English Version](../using-vue3&react-bridge-in-vue2/README_EN.md)

## 项目介绍

这是一个演示如何在 Vue2 项目中无缝集成 Vue3 & React 组件的示例项目。通过使用特制的桥接组件，使得 Vue2 应用能够直接使用 Vue3 & React 组件

## 示例总结

- 1.如何在子应用中使用和创建桥接组件
- 2.使用 props 进行组件应用
- 3.使用 props 的回调函数进行和 vue3 父子组件通信
- 4.使用 vite 将桥接组件输出到 vue2 目录以供 vue2 项目使用

## 技术栈

- Vue 2.x,Webpack 5,element ui
- Vue 3.x,vite,ant-design-vue 4.x (Vue3 版本)
- React,vite,material-ui ...

## 项目结构

```
├── children/
│   └── react/                # Vue3 组件目录
│       ├── src/
│       │   ├── pages/       # react 页面组件
│       │   └── bridgeComponent/  # 桥接后的组件
│       └── ReactAccessor.js  # React 访问器
|
│   └── vue3/                # Vue3 组件目录
│       ├── src/
│       │   ├── pages/       # Vue3 页面组件
│       │   └── bridgeComponent/  # 桥接后的组件
│       └── Vue3Accessor.js  # Vue3 访问器
├── src/
│   └── index.js            # Vue2 主应用入口
├── webpack.config.js       # Webpack 配置
└── index.html             # HTML 模板
```

## 安装

```bash
# 安装主项目依赖
npm install

# 安装 Vue3 项目依赖
cd children/vue3
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

# 打包
npm run build

```

## 使用方法

1. 在 Vue3|React 目录下开发组件
2. 使用 Accessor 包装你需要桥接的组件
3. 在 Vue2 应用中引入并使用桥接后的组件
4. 通过 props 的回调函数进行父子组件通信

---

## 访问应用

打开浏览器并访问 `http://localhost:1003`

---
