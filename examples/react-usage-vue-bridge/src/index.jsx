import React from 'react'
import ReactDOM from 'react-dom/client'
import { VUE3EXAMPLECOMPONENT } from './Vue3Accesstor'

/**
 * This file shows how to use the Vue3 bridge in React
 * */
const App = () => {
  const [state, setState] = React.useState(0)
  const [color, setColor] = React.useState('primary')

  const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

  const handleChangeColor = () => {
    const nextColor = colors[(colors.indexOf(color) + 1) % colors.length]
    setColor(nextColor)
  }

  return (
    <div>
      <p style={{ marginBottom: 24 }}>
        --------------------------------------Use Vue3 in R18-----------------------------------
      </p>
      <p onClick={() => setState(state + 1)} style={{ marginBottom: 24 }}>
        {' '}
        R18 Count: {state}
      </p>
      <button style={{ marginBottom: 24 }} onClick={handleChangeColor}>
        click me to Change Vuetify Button Color
      </button>
      <VUE3EXAMPLECOMPONENT color={color} changeCount={() => setState(state + 1)} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
