import './App.css';
import { Intoruducing1, Intoruducing2 } from './components/functionDestructuring';
import Welcome from './components/classDestructuring';

function App() {

  return (
    <>
    <Intoruducing1 name="Hailemeskel" department="Software engineering"/>
    <Intoruducing2 name="Martemuz" department="medicine"/>
    <Welcome  name="Abel Eliyas" department="Dental medicine"/>

    </>
  )
}

export default App
