import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HowToUseR18ButtonInR15 from './HowToUseR18ButtonInR15'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <div>
          <p>----------------R15 APP----------------</p>
          <p>R18 Count:{this.props.type} (from R18 state)</p>
          <p>R15 Count: {this.state.count}</p>
          <button onClick={this.handleIncrement}> Increase R15 Count</button>
        </div>

        <div>
          <p>----------------How To Use R18 Button In R15----------------</p>
          <HowToUseR18ButtonInR15 />
        </div>
      </div>
    )
  }
}
export default App

//ReactDOM.render(<App />, document.getElementById("root"));
