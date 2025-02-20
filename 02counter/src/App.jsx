import { useState } from 'react'
import './App.css'

function App() {
  let counter = 15

  const addValue = () => {
    counter +=  1
    console.log(counter)
  }

  return (
    <>
      <h1>React course with sahil {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value </button> {" "}
      <button>Remove Value </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
