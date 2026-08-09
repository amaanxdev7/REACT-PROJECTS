import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
// let counter = 15

const [counter,setCounter] = useState(15)

const addValue = () => {
  // console.log(counter)
  // counter = counter+1
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)


  
}

const removeValue = () => {
  // console.log(counter)
  // counter = counter+1
    if(counter>0){
      setCounter(counter-1)
    }
}
  return (
    <>
      <h1>React with me {counter}</h1>
      <h2> {counter} REACT.js</h2>
      <br />
      <button onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
