import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Contador from './components/Contador'
import BreakingBadUsers from './components/BreakingBadUsers'

function App() {
  const [count, setCount] = useState(0)
  //Hacer una api que me consuma el nombre y la foto


  return(
    <div> <Contador/>
    <hr />
    <BreakingBadUsers/>
    </div>
   
    
  )

}

export default App
