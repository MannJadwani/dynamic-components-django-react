import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const callBackend = () => {
    axios.get('localhost:8000/admin')
      .then((res) => { console.log(res) })

  }

  return (
    <>
      <button onClick={callBackend}>Click</button>
    </>
  )
}

export default App
