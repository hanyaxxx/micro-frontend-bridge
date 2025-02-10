import { generateRandomString } from '../utils'

/**
 * Creates a bridge to render React components in other React applications.
 *
 * @param React - The React library
 * @param ReactDOM - The ReactDOM library
 * @returns {HOC Function} returns a bridge accessor
 *
 * @example 
 * // children app .children-app/accesstor/Button
  import React from 'react'
  import ReactDOM from 'react-dom'
  import { createReactBridge } from 'micro-frontend-bridge/for-react'
  import Button from './Button'
  const accesstor = createReactBridge(React, ReactDOM)
  export default accesstor(Button)

  // main app
  import BUTTON from 'children-app/accesstor/Button'
 
  const App = () => {
    return (
      <div>
        <BUTTON />
      </div>
    )
  }
 */

function createReactBridge(React, ReactDOM) {
  function R15Render(id, app) {
    return ReactDOM.render(app, document.getElementById(id))
  }

  function R18Render(id, app) {
    const root = ReactDOM.createRoot(document.getElementById(id))
    root.render(app)
    return root
  }

  const render = ReactDOM.createRoot ? R18Render : R15Render

  class AccessorConnect extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    render() {
      const { _ref } = this.props
      _ref.update = () => this.setState(() => ({}))
      const connector = _ref.connector
      return React.createElement(connector, _ref._props)
    }
  }
  return (component) => {
    class Accessor extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          id: `connect_${generateRandomString(10)}`,
          _ref: { connector: null },
          _root: null
        }
      }
      componentDidMount() {
        const { id, _ref } = this.state
        // const { ...rest } = this.props
        _ref.connector = component
        _ref._props = this.props
        const root = render(
          id,
          React.createElement(AccessorConnect, { _ref })
          //<AccessorConnect _ref={_ref} />
        )
        this.state._root = root
      }
      componentDidUpdate() {
        const { _ref } = this.state
        // const { component, ...rest } = this.props
        // _ref.connector = component
        _ref._props = this.props
        // console.log('update', _ref)
        this.state._ref.update()
      }
      componentWillUnmount() {
        this.state._root?.unmount()
      }
      render() {
        return React.createElement('div', { id: this.state.id })
        // return <div id={this.state.id}></div>
      }
    }

    return Accessor
  }
}

export default createReactBridge
