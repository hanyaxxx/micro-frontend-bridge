# React Usage with Vue Bridge Example

This project demonstrates how to use both Vue 2 and Vue 3 components in a React project. By using the `createVueBridge` function, we can bridge Vue components into React.

## Project Structure

- `webpack.config.js`: Webpack configuration file, including configurations for both Vue 2 and Vue 3.
- `src/Vue3Accesstor.js`: File for creating the Vue 3 component bridge.
- `src/Vue2Accesstor.js`: File for creating the Vue 2 component bridge.
- `src/index.jsx`: Example file demonstrating how to use Vue 3 components in React.
- `src/index2.jsx`: Example file demonstrating how to use Vue 2 components in React.
- `src/index3.jsx`: Example file demonstrating how to use both Vue 2 and Vue 3 components in React.
- `children/vue3/src/ExampleComponent.vue`: Vue 3 example component.
- `children/vue2/src/ExampleComponent.vue`: Vue 2 example component.

## File Descriptions

### webpack.config.js

This file contains multiple Webpack configurations for handling different entry and output files. Configurations include:

- `vue3` configuration: For handling Vue 3 components.
- `vue2` configuration: For handling Vue 2 components.
- `concurrently` configuration: For handling both Vue 2 and Vue 3 components concurrently.
- `vue2-library` configuration: For packaging Vue 2 components into a library.

### src/Vue3Accesstor.js

This file is used to create the Vue 3 component bridge. It uses the `createVueBridge` function to bridge Vue 3 components into React.

### src/Vue2Accesstor.js

This file is used to create the Vue 2 component bridge. It uses the `createVueBridge` function to bridge Vue 2 components into React.

### src/index.jsx

This file demonstrates how to use Vue 3 components in React. It bridges Vue 3 components into React using `Vue3Accesstor`.

### src/index2.jsx

This file demonstrates how to use Vue 2 components in React. It bridges Vue 2 components into React using `Vue2Accesstor`.

### src/index3.jsx

This file demonstrates how to use both Vue 2 and Vue 3 components in React. It bridges Vue 2 and Vue 3 components into React using `Vue2Accesstor` and `Vue3Accesstor`.

### children/vue3/src/ExampleComponent.vue

This is a Vue 3 example component demonstrating how to use Vuetify components in Vue 3.

### children/vue2/src/ExampleComponent.vue

This is a Vue 2 example component demonstrating how to use Element UI components in Vue 2.

## How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and visit `http://localhost:9000` to see the Vue 3 example.
4. Open your browser and visit `http://localhost:9001` to see the Vue 2 example.
5. Open your browser and visit `http://localhost:9002` to see the example using both Vue 2 and Vue 3.
