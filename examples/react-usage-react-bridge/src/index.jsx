import React from 'react'
import ReactDOM from 'react-dom/client'
import { R15APP } from './bridgeComponent'

const App = () => {
  const [state, setState] = React.useState(0)
  return (
    <div>
      <p>-------------------Use R15 in R18----------------</p>
      <button onClick={() => setState(state + 1)}> Increase R18 Count</button>
      <R15APP type={state} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
