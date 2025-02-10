```md
# Using React Bridge in Vue3

## Project Overview

This is a sample project demonstrating how to seamlessly integrate React and Vue2 components into a Vue3 project. By using specially designed bridge components, a Vue3 application can directly use React and Vue2 components, maintaining interoperability between the two frameworks.

## Summary of Examples

1. How to create bridge components using Accessor in a sub-application.
2. Applying components using props.
3. Using callback functions in props for parent-child communication across different frameworks.
4. Using Vite to output bridge components to the Vue3 directory for use in the Vue3 project.

## Tech Stack

- Vue 3.x, Vite, Ant Design Vue 4.x
- React 19.x, Vite, Material-UI
- Vue 2.x, Webpack, Element-UI

## Project Structure
```

├── children/ │ └── react/ # React component directory │ ├── src/ │ │ ├── pages/ # React page components │ │ └── bridgeComponent/ # Bridged components │ └── ReactAccessor.js # React accessor │ └── vue2/ # Vue2 component directory │ ├── src/ │ │ ├── pages/ # Vue2 page components │ │ └── bridgeComponent/ # Bridged components │ └── VueAccessor.js # Vue2 accessor ├── src/ │ └── index.js # Vue3 main application entry ├── vite.config.js # Vite configuration └── index.html # HTML template

````

## Installation

```bash
# Install main project dependencies
npm install

# Install Vue2 project dependencies
cd children/vue2
npm install

# Output bridge components to Vue2 directory
npm run bridge

# Install React project dependencies
cd children/react
npm install

# Output bridge components to Vue2 directory
npm run bridge
````

## Development

```bash
# Start the development server
npm run dev

npm run vite
```

## Usage

1. Develop components in the React/Vue2 directories.
2. Use Accessor to wrap the components you need to bridge.
3. Import and use the bridged components in the Vue3 application.
4. Use callback functions in props for parent-child communication across different frameworks.

---

## Access the Application

Open your browser and visit `http://localhost:1004`

---

```

```
