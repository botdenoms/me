import {useState} from 'react'

import denomsLogo from '../assets/black.svg'
import github from '../assets/github-original.svg'
import linkedin from '../assets/linkedin-original.svg'
import twitter from '../assets/twitter-original.svg'
import phone from '../assets/phone.svg'
import email from '../assets/mail.svg'
import dribble from '../assets/behance-original.svg'

import software from '../assets/software.svg'

function Showcase({handler = false}) {

    const [lang, setLang] = useState(0)

    const worksHandler = () => {
        if(handler == false){
            return
        }
        handler()
    }

    const langSwitch = (event) =>{
        setLang(event.target.value)
        // handle internationalization : todo
    }

    return (
        <div className='showcase'>
            <div className="appbar">
                <div className="top">

                    <div className="logo sml" onClick={()=>{worksHandler()}}>
                        <img src={denomsLogo} alt="logo" />
                    </div>

                    <div className="links">
                        <div className='link'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="logo" />
                            </a>
                            <div className="tooltip">
                                LinkedIn
                            </div>
                        </div>
                        <div className='link'>
                            <a href="http://github.com/botdenoms" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="logo" />
                            </a>
                            <div className="tooltip">
                                Github
                            </div>
                        </div>
                        <div className='link'>
                            <a href="http://dribble.com/denoms" target="_blank" rel="noopener noreferrer">
                                <img src={dribble} alt="logo" />
                            </a>
                            
                            <div className="tooltip">
                                Dribble
                            </div>
                        </div>
                        <div className='link'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="logo" />
                            </a>
                            <div className="tooltip">
                                Twitter
                            </div>
                        </div>
                        <div className='link'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={phone} alt="logo" />   
                            </a>
                            <div className="tooltip">
                                TelePhone
                            </div>
                        </div>
                        <div className='link'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={email} alt="logo" />
                            </a>
                            <div className="tooltip">
                                Email
                            </div>
                        </div>
                    </div>

                    <div>
                        <select value={lang} onChange={(e)=>{langSwitch(e)}}>
                            <option value="0">Eng</option>
                            <option value="1">Swa</option>
                            <option value="2">Ger</option>
                        </select>
                    </div>

                </div>

                <div className="links mobile">
                    <div className='link'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="logo" />
                        </a>
                        <div className="tooltip">
                            LinkedIn
                        </div>
                    </div>
                    <div className='link'>
                        <a href="http://github.com/botdenoms" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="logo" />
                        </a>
                        <div className="tooltip">
                            Github
                        </div>
                    </div>
                    <div className='link'>
                        <a href="http://dribble.com/denoms" target="_blank" rel="noopener noreferrer">
                            <img src={dribble} alt="logo" />
                        </a>
                        
                        <div className="tooltip">
                            Dribble
                        </div>
                    </div>
                    <div className='link'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="logo" />
                        </a>
                        <div className="tooltip">
                            Twitter
                        </div>
                    </div>
                    <div className='link'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={phone} alt="logo" />   
                        </a>
                        <div className="tooltip">
                            TelePhone
                        </div>
                    </div>
                    <div className='link'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={email} alt="logo" />
                        </a>
                        <div className="tooltip">
                            Email
                        </div>
                    </div>
                </div>
            </div>

            <div className="main">
                <div className='spacers'></div>

                <div className='content'>
                    <div className="topbar">
                        <h3>Macladie</h3>
                        <span>Logo Design</span>
                    </div>

                    <div className="highlight">
                        {/* splash image here */}
                    </div>

                    <div className="more">
                        <div className='descript'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> 
                            Fuga odit voluptate, velit dolorem ipsa quam dolorum vero esse quos <br/>
                            perferendis. Molestiae fugiat perferendis iste, <br/>
                            voluptates doloremque rerum facere cumque mollitia!
                        </div>

                        <div className='tools'>
                            <h4>Project Tools</h4>
                            <div className="items">
                                <div className="item">
                                    <div className="icon">
                                        <img src={software} alt="icon" />
                                    </div>
                                    <span>Inkscape</span>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <img src={software} alt="icon" />
                                    </div>
                                    <span>Inkscape</span>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <img src={software} alt="icon" />
                                    </div>
                                    <span>Inkscape</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="previews">
                        <h4>Showcase</h4>
                        <div className="gallery">
                            <div className="box">
                                {/* image here */}
                            </div>
                            <div className="box">
                                {/* image here */}
                            </div>
                            <div className="box">
                                {/* image here */}
                            </div>
                        </div>

                    </div>

                    <div className="status">
                        <h4>Additional information</h4>
                        <div className="stage">
                            <span>Stage: </span>
                            <span className='level'>Production</span>
                        </div>

                        <div className="source">
                            <a href="https://" target="_blank" rel="noopener noreferrer">
                                <div className="item">
                                    <div className="icon">
                                        <img src={github} alt="icon" />
                                    </div>
                                    <span>Repository</span>
                                </div>
                            </a>
                        </div>

                        <div className="others">
                            <a href="https://" target="_blank" rel="noopener noreferrer" className='aob'>
                                <div className="item">
                                    <div className="icon">
                                        <img src={github} alt="icon" />
                                    </div>
                                    <span>Store</span>
                                </div>
                            </a>
                            <a href="https://" target="_blank" rel="noopener noreferrer" className='aob'>
                                <div className="item">
                                    <div className="icon">
                                        <img src={github} alt="icon" />
                                    </div>
                                    <span>Cloud</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="feedback">
                        <h4>Clients Feedback</h4>
                        <div className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> 
                        Fuga odit voluptate, velit dolorem ipsa quam dolorum vero esse quos <br/>
                        perferendis. Molestiae fugiat perferendis iste, <br/>
                        voluptates doloremque rerum facere cumque mollitia!
                        </div>
                    </div>

                </div>

                <div className='endnote'>
                    <span>Denoms &copy; 2024</span>
                </div>
            </div>

        </div>
    )
}

export default Showcase