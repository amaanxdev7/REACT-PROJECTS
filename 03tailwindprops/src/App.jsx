import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'
function App() {
//   const [count, setCount] = useState(0)
// const username = 'hehee'
// let obj = {
//   name:'pata nhi',
//   email:'dog'
// }
// let arr = [1,2,3]
  return (
    <>
    <h1 className='bg-green-400 text-blue-400 p-4 rounded-2xl'>tailwind test</h1>
    <Card username = 'amaan' priceTag = '400'/>
    <Card username = 'poco' priceTag='600'/>

    </>
  )
}

export default App