import React, { Component } from 'react'
import r18Accesstor from './r18accesstor'
import R18Button from '../../src/button'

const colors = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']

const R18BUTTON = r18Accesstor(R18Button)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      colorIndex: 0
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  handleColorChange = () => {
    this.setState((prevState) => ({
      colorIndex: (prevState.colorIndex + 1) % colors.length
    }))
  }

  render() {
    const currentColor = colors[this.state.colorIndex]
    return (
      <div>
        <p>R15 Count: {this.state.count}</p>
        <button onClick={this.handleColorChange}>Change R18 Button Color</button>
        <R18BUTTON color={currentColor} handleIncrement={this.handleIncrement} />
      </div>
    )
  }
}

export default App
