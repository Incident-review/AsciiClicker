import { useState } from 'react'
import './App.css'
import AsciiTree from './ascii'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AsciiTree /> {}
        <button onClick={() => setCount((count) => count + 1)}>
          Wood {count}
        </button>
      </div>
    </>
  )
}

export default App
