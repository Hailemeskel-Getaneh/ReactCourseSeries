import { useState } from 'react'

import './App.css';
import Counter from './components/Counter';
import ComplicatedCounter from './components/ComplicatedCounter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter></Counter>
     <ComplicatedCounter></ComplicatedCounter>

    </>
  )
}

export default App
