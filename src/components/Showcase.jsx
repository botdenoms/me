import {useState, useEffect} from 'react'

import denomsLogo from '../assets/black.svg'
import github from '../assets/github-original.svg'
import linkedin from '../assets/linkedin-original.svg'
import twitter from '../assets/twitter-original.svg'
import phone from '../assets/phone.svg'
import email from '../assets/mail.svg'
import dribble from '../assets/behance-original.svg'

import software from '../assets/software.svg'
import prev from '../assets/prev.svg'
import next from '../assets/next.svg'

function Showcase({handler = false, worksHandler=false}) {

    const [lang, setLang] = useState(0)
    const [fetch, setFetch] = useState(true)
    const [err, setErr] = useState(false)
    const [msg, setMsg] = useState('')
    const [idx, setIdx] = useState(0)
    const [works, setWorks] = useState([])

    const viewHandler = () => {
        if(handler == false){
            return
        }
        handler()
    }

    const workHandler = async () => {
        if(worksHandler == false){
            return
        }
        setFetch(true)
        const {items, error, message} = await worksHandler()
        if(error){
            setFetch(false)
            setErr(true)
            setMsg(message)
        }else{
            setWorks([...items])
            setFetch(false)
            setErr(false)
            setMsg(message)
        }
    }

    const langSwitch = (event) =>{
        setLang(event.target.value)
        // handle internationalization : todo
    }

    const workSwitch = (next=true) =>{
        // handle work data switch
        if(next){
            setIdx(idx + 1)
        }else{
            if (idx === 0) {
                return
            }
            setIdx(idx - 1)
        }

    }

    useEffect(() => {
        setTimeout(()=>{
            // call fetch function for works data
            workHandler()
            setFetch(false)
        }, 4000)
    }, [])
    

    return (
        <div className='showcase'>
            <div className="appbar">
                <div className="top">

                    <div className="logo sml" onClick={()=>{viewHandler()}}>
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

                {
                    fetch &&
                    <div className="loader">
                        <div className="bottle">
                            <div className="fill"></div>
                            <div className="filled"></div>
                        </div>
                    </div>
                }

                {
                    err &&
                    <div className="loader">
                        <span>{msg}</span>
                    </div>
                }

                {/* logic for empty works data */}

                {
                    !fetch && !err &&
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
                }

                <div className="pg">
                    <div className="icon" onClick={()=>{workSwitch(false)}}>
                        <img src={prev} alt="icon" />
                    </div>
                    <div className="infor">
                        <span>{idx} / {works.length}</span>
                    </div>
                    <div className="icon" onClick={()=>{workSwitch(true)}}>
                        <img src={next} alt="icon" />
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