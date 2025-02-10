# React Usage with React Bridge Example

This is a sample project that implements micro-frontend using React Bridge. This project demonstrates how to embed a React 15 application in a React 18 application and a React 18 application in a React 15 application, and communicate between the two applications.

## Project Structure

- `src/index.jsx`: Entry file for the React 18 application.
- `src/button.jsx`: An example of using the Material-UI button component.
- `src/bridgeComponent`: Contains files for creating the React Bridge.
  - `r15accesstor.js`: File for creating the React 15 Bridge.
  - `index.js`: Exports the bridge component for the React 15 application.
- `children/src`: Code for the React 15 application.
  - `index.jsx`: Entry file for the React 15 application.
  - `HowToUseR18ButtonInR15.jsx`: Example of using the React 18 button component in the React 15 application.

## Main Features

- Embed a React 15 application in a React 18 application.
- Pass state and events between the two applications.
- Use the Material-UI component library.

## Contribution

Issues and contributions are welcome! Please make sure to create an issue for discussion before submitting a PR.

## License

This project is licensed under the MIT License.
