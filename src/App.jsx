import {useState} from 'react'
import './App.css'
import Hero from './components/Hero'
import Showcase from './components/Showcase'

function App() {
  // state
  const [hero, setHero] = useState(true)

  // functions
  const switchView = () =>{
    setHero(!hero)
  }

  return (
    <>
      {hero && <Hero handler={switchView}/>}
      {!hero && <Showcase handler={switchView}/>}
    </>
  )
}

export default App
