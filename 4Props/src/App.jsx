import { useState } from 'react'
import './App.css';
import FunctionalProps from './components/functionalProps';
import ClassProps from './components/classProps';


function App() {

  return (
    <>

   <FunctionalProps name = "Hailemeskel" department="software engineering"/>

   <FunctionalProps name = "Martemuz" department="medicine">
       <p>This is a children props</p>
     </FunctionalProps>

   <ClassProps  name="Bertemios" department="Art science"/>
      
    </>
  )
}

export default App
