import {useState} from 'react'
import './App.css'
import Hero from './components/Hero'
import Showcase from './components/Showcase'

import { worksList } from './works'

function App() {
  // state
  const [hero, setHero] = useState(true)

  // functions
  const switchView = () =>{
    setHero(!hero)
  }

  const getWorks= () =>{
    return {
      items: worksList,
      error: false,
      msg: ''
    }
  }

  return (
    <>
      {hero && <Hero handler={switchView}/>}
      {!hero && <Showcase handler={switchView} worksHandler={getWorks}/>}
    </>
  )
}

export default App
