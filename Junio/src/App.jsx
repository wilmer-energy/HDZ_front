import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Contador from './components/Contador'
import BreakingBadUsers from './components/BreakingBadUsers'
import RandomUsers from './components/RandomUsers'
import RandomEmojis from './components/RandomEmojis'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)
  //Hacer una api que me consuma el nombre y la foto


  return(
    <div> <Contador/>
    <hr />
    <BreakingBadUsers/>
    <hr />
    <RandomUsers/>
    <hr />
    <RandomEmojis/>
    <hr />
    <Pokemon/>
    </div>
   
    
  )

}

export default App
