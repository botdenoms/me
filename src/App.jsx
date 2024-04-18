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

  const getWorks= () =>{
    // todo fetch works data from db
    // connect to db
    // fetch data
    // handel error
    // return [], error, msg
  }

  return (
    <>
      {hero && <Hero handler={switchView}/>}
      {!hero && <Showcase handler={switchView}/>}
    </>
  )
}

export default App
