import {useState} from 'react'
import denomsLogo from '../assets/black.svg'
import Footer from './Footer'

function Hero() {

    const [hero, setHero] = useState(true)

    const worksHandler = () => {
        setHero(false)
    }
    
    return (
        <div className='hero'>
            <div className="container">
                <div className="logo">
                    <img src={denomsLogo} alt="logo" />
                </div>
                <div className="content">
                    <span className='roles'>Computer Scientist</span>
                    <span>Dennis Moseti</span>
                </div>
            </div>
            <button onClick={()=>{worksHandler}}>Works</button>
            <Footer />
        </div>
    )
}

export default Hero