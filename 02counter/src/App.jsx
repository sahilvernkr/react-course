import { useState } from 'react'
import './App.css'

function App() {
  //let counter = 15
  const [counter, setCounter] = useState(3)

  // const addValue = () => {
  //   setCounter(counter + 1)
  // }
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with sahil {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value </button> {" "}
      <button
        onClick={removeValue}
      >Remove Value </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
