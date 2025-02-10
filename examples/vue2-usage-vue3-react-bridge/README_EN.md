# Vue3 Bridge in Vue2 Demo

## Project Overview

This is a sample project demonstrating how to seamlessly integrate Vue3 and React components into a Vue2 project. By using specially designed bridge components, a Vue2 application can directly use Vue3 and React components.

## Summary of Examples

1. How to create and use bridge components in a sub-application.
2. Applying components using props.
3. Using callback functions in props for communication between Vue3 parent-child components.
4. Using Vite to output bridge components to the Vue2 directory for use in the Vue2 project.

## Tech Stack

- Vue 2.x, Webpack 5, Element UI
- Vue 3.x, Vite, Ant Design Vue 4.x (Vue3 version)
- React, Vite, Material-UI

## Project Structure

```
├── children/
│   └── react/                # React component directory
│       ├── src/
│       │   ├── pages/        # React page components
│       │   └── bridgeComponent/  # Bridged components
│       └── ReactAccessor.js  # React accessor
|
│   └── vue3/                 # Vue3 component directory
│       ├── src/
│       │   ├── pages/        # Vue3 page components
│       │   └── bridgeComponent/  # Bridged components
│       └── Vue3Accessor.js   # Vue3 accessor
├── src/
│   └── index.js              # Vue2 main application entry
├── webpack.config.js         # Webpack configuration
└── index.html                # HTML template
```

## Installation

```bash
# Install main project dependencies
npm install

# Install Vue3 project dependencies
cd children/vue3
npm install

# Output bridge components to Vue2 directory
npm run bridge

# Install React project dependencies
cd children/react
npm install

# Output bridge components to Vue2 directory
npm run bridge
```

## Development

```bash
# Start the development server
npm run dev

# Build
npm run build
```

## Usage

1. Develop components in the Vue3/React directories.
2. Use Accessor to wrap the components you need to bridge.
3. Import and use the bridged components in the Vue2 application.
4. Use callback functions in props for parent-child component communication.

---

## Access the Application

Open your browser and visit `http://localhost:1003`

---
