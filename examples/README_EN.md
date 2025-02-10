# Micro-Frontend Bridge Example Project Summary

This directory contains the characteristics of four example projects, demonstrating how to bridge components between different frameworks. Below are the features and differences of each example:

# Using Vue as the main application

In the example of the Vue project architecture, all bridging components are distributed in the sub-applications. Of course, you can also centralize the bridging components in the main application (refer to the React example).

## 1. Example of using React components in Vue3

File path: `vue3-usage-react-bridge`

### Features

- Demonstrates how to integrate React and Vue2 components in a Vue3 project.
- Achieves interoperability between Vue3 applications and React and Vue2 components through the `createVueBridge` and `createReactBridge` functions.
- Uses Vite for building and development.

### Tech Stack

- Vue 3.x, Vite, Ant Design Vue 4.x
- React 19.x, Vite, Material-UI
- Vue 2.x, Webpack, Element-UI

## 2. Example of using Vue3 and React components in Vue2

File path: `vue2-usage-vue3&react-bridge`

### Features

- Demonstrates how to integrate Vue3 and React components in a Vue2 project.
- Achieves interoperability between Vue2 applications and Vue3 and React components through the `createVueBridge` and `createReactBridge` functions.
- Uses Webpack for building and development.

### Tech Stack

- Vue 2.x, Webpack 5, Element UI
- Vue 3.x, Vite, Ant Design Vue 4.x
- React, Vite, Material-UI

# Using React as the main application

In the example of the React project architecture, all bridging components are integrated into the main application. Of course, you can also distribute the bridging components to sub-applications and then import them into the main application (refer to the Vue example).

## 1. Example of using Vue components in React

File path: `react-usage-vue-bridge`

### Features

- Demonstrates how to use both Vue2 and Vue3 components in a React project.
- Bridges Vue components to React through the `createVueBridge` function.
- Uses Webpack for building and development.

### Tech Stack

- React, Webpack
- Vue 2.x, Element UI
- Vue 3.x, Vuetify

## 2. Example of using React Bridge in React

File path: `react-usage-react-bridge`

### Features

- Demonstrates how to embed a React 15 application in a React 18 application and communicate between the two applications.
- Implements a micro-frontend architecture using React Bridge.
- Uses the Material-UI component library.

### Tech Stack

- React 18, React 15, Material-UI

---
