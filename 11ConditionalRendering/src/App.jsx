import { useState } from 'react'
import './App.css'
import IfElseRendering from './components/IfElseRendering'
import ElementVariableRendering from './components/ElementVariableRendering'
import TernaryOpperatorRendering from './components/TernaryOpperatorRendering'
import ShortCircuitOpperator from './components/ShortCircuitOpperator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <IfElseRendering/> */}
     {/* <ElementVariableRendering/> */}

     {/* <TernaryOpperatorRendering/> */}

     <ShortCircuitOpperator/>
    </>
  )
}

export default App
