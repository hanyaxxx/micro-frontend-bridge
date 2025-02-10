# React Usage with React Bridge Example

这是一个使用 React Bridge 实现微前端的示例项目。该项目展示了如何在 React 18 应用中嵌入 React 15 应用和 React 15 应用中嵌入 React 18 应用,并在两个应用之间进行通信。

## 项目结构

- `src/index.jsx`：React 18 应用的入口文件。
- `src/button.jsx`：一个使用 Material-UI 按钮组件的示例。
- `src/bridgeComponent`：包含用于创建 React Bridge 的文件。
  - `r15accesstor.js`：创建 React 15 Bridge 的文件。
  - `index.js`：导出 React 15 应用的桥接组件。
- `children/src`：React 15 应用的代码。
  - `index.jsx`：React 15 应用的入口文件。
  - `HowToUseR18ButtonInR15.jsx`：在 React 15 应用中使用 React 18 按钮组件的示例。

## 主要功能

- 在 React 18 应用中嵌入 React 15 应用。
- 在两个应用之间传递状态和事件。
- 使用 Material-UI 组件库。

## 贡献

欢迎提交问题和贡献代码！请确保在提交 PR 之前先创建一个 issue 进行讨论。

## 许可证

该项目使用 MIT 许可证。
