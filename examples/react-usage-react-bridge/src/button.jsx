import React from 'react'
import Button from '@mui/material/Button'

const App = (props) => {
  const [count, setCount] = React.useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>----------------R18 Button APP----------------</p>
      <p>R18 Button Count: {count}</p>
      <Button variant="contained" color={props.color} onClick={handleIncrement}>
        Increase R18 Count
      </Button>
      <div style={{ marginTop: 24 }}>
        <Button variant="outlined" onClick={props.handleIncrement}>
          Increase R15 Count
        </Button>
      </div>
    </div>
  )
}

export default App
