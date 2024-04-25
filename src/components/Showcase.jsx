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

import figma from '../assets/figma-original.svg'
import flask from '../assets/flask-original-wordmark.svg'
import flutter from '../assets/flutter-original.svg'
import python from '../assets/python-original.svg'
import selenium from '../assets/selenium-original.svg'
import reactLogo from '../assets/react-original.svg'
import firebase from '../assets/firebase-plain-wordmark.svg'

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

    const iconData = (name) =>{
        switch (name) {
            case 'Figma':
                return figma
            case 'Flask':
                return flask;
            case 'Flutter':
                return flutter
            case 'Python':
                return python
            case 'Selenium':
                return selenium
            case 'React':
                return reactLogo
            case 'Firebase':
                return firebase
            case 'Vite':
                return reactLogo
            default:
                return software
        }
        
    }

    const workSwitch = (next=true) =>{
        // handle work data switch
        if(next){
            if (idx + 1 === works.length) {
                return
            }
            setFetch(true)
            setIdx(idx + 1)
            setTimeout(()=>{setFetch(false)}, 1000)
        }else{
            if (idx === 0) {
                return
            }
            setFetch(true)
            setIdx(idx - 1)
            setTimeout(()=>{setFetch(false)}, 1000)
        }

    }

    useEffect(() => {
        setTimeout(()=>{
            // call fetch function for works data
            workHandler()
            setFetch(false)
        }, 2000)
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
                            <a href="https://www.linkedin.com/in/dennis-moseti-0836a523b" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="logo" />
                            </a>
                            <div className="tooltip">
                                LinkedIn
                            </div>
                        </div>
                        <div className='link'>
                            <a href="https://github.com/botdenoms" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="logo" />
                            </a>
                            <div className="tooltip">
                                Github
                            </div>
                        </div>
                        <div className='link'>
                            <a href="https://dribble.com/denoms" target="_blank" rel="noopener noreferrer">
                                <img src={dribble} alt="logo" />
                            </a>
                            
                            <div className="tooltip">
                                Dribble
                            </div>
                        </div>
                        <div className='link'>
                            <a href="https://twitter.com/botdenoms" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="logo" />
                            </a>
                            <div className="tooltip">
                                Twitter
                            </div>
                        </div>
                        <div className='link'>
                            <a href="tel:+254727292322" target="_blank" rel="noopener noreferrer">
                                <img src={phone} alt="logo" />   
                            </a>
                            <div className="tooltip">
                                TelePhone
                            </div>
                        </div>
                        <div className='link'>
                            <a href="mailto:denomsupdated@gmail.com" target="_blank" rel="noopener noreferrer">
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
                        <a href="https://www.linkedin.com/in/dennis-moseti-0836a523b" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="logo" />
                        </a>
                        <div className="tooltip">
                            LinkedIn
                        </div>
                    </div>
                    <div className='link'>
                        <a href="https://github.com/botdenoms" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="logo" />
                        </a>
                        <div className="tooltip">
                            Github
                        </div>
                    </div>
                    <div className='link'>
                        <a href="https://dribble.com/denoms" target="_blank" rel="noopener noreferrer">
                            <img src={dribble} alt="logo" />
                        </a>
                        
                        <div className="tooltip">
                            Dribble
                        </div>
                    </div>
                    <div className='link'>
                        <a href="https://twitter.com/botdenoms" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="logo" />
                        </a>
                        <div className="tooltip">
                            Twitter
                        </div>
                    </div>
                    <div className='link'>
                        <a href="tel:+254727292322" target="_blank" rel="noopener noreferrer">
                            <img src={phone} alt="logo" />   
                        </a>
                        <div className="tooltip">
                            TelePhone
                        </div>
                    </div>
                    <div className='link'>
                        <a href="mailto:denomsupdated@gmail.com" target="_blank" rel="noopener noreferrer">
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
                            <div className="ring"></div>
                            <div className="ring d1"></div>
                            <div className="ring d2"></div>
                        </div>
                    </div>
                }

                {
                    err &&
                    <div className="loader">
                        <span>{msg}</span>
                    </div>
                }

                {
                    !fetch && !err && works.length === 0 &&
                    <div className="loader">
                        <span>No works data found</span>
                    </div>
                }

                {
                    !fetch && !err && works.length !== 0 &&
                    <div className='content'>
                        <div className="topbar">
                            <h3>{works[idx].title}</h3>
                            <span>{works[idx].category}</span>
                        </div>

                        <div className={works[idx].thumbnail === ""?'blank':"highlight"}>
                            {
                                works[idx].thumbnail === "" &&
                                <span>No image data found</span>
                            }
                            {
                                works[idx].thumbnail !== "" && 
                                <img src={works[idx].thumbnail} alt="thumb" />
                            }
                        </div>

                        <div className="more">
                            <div className='descript'>
                                {works[idx].description}
                            </div>

                            <div className='tools'>
                                <h4>Project Tools</h4>
                                <div className="items">
                                    {
                                        works[idx].tools.map((v, i)=>{
                                            const isrc = iconData(v)
                                            return (
                                                <div className="item" key={i}>
                                                    <div className="icon">
                                                        <img src={isrc} alt="icon" />
                                                    </div>
                                                    <span>{v}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="previews">
                            <h4>Showcase</h4>
                            <div className={works[idx].showcase.length === 0 ?'':"gallery"}>
                                {
                                    works[idx].showcase.length !== 0 &&
                                    works[idx].showcase.map((v, i)=>{
                                        return (
                                            <div className="box" key={i}>
                                                {/* image here */}
                                                <img src={v} alt="icon" />
                                            </div>
                                        )
                                    })
                                }
                                {
                                    works[idx].showcase.length === 0 &&
                                    <div className="notice">
                                        No showcase data found
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="status">
                            <h4>Additional information</h4>
                            <div className="stage">
                                <span>Stage: </span>
                                <span className='level'>{works[idx].stage}</span>
                            </div>

                            <div className="source">
                                <a href={works[idx].repo} target="_blank" rel="noopener noreferrer">
                                    <div className="item">
                                        <div className="icon">
                                            <img src={github} alt="icon" />
                                        </div>
                                        <span>Repository</span>
                                    </div>
                                </a>
                            </div>

                            <div className="others">
                                {
                                works[idx].otherlinks.map((v, i)=>{
                                        return (
                                            <a href={v.link} key={i} target="_blank" rel="noopener noreferrer" className='aob'>
                                                <div className="item">
                                                    <div className="icon">
                                                        <img src={github} alt="icon" />
                                                    </div>
                                                    <span>{v.store}</span>
                                                </div>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="feedback">
                            <h4>Clients Feedback</h4>
                            <div className="text">
                                {
                                    works[idx].feedback === ''? 'No feedback Given': works[idx].feedback
                                }
                            </div>
                        </div>

                    </div>
                }

                <div className="pg">
                    <div className="icon" onClick={()=>{workSwitch(false)}}>
                        <img src={prev} alt="icon" />
                    </div>
                    <div className="infor">
                        <span>
                            {
                                works.length === 0 ? 0 + ' ' : idx + 1 + " "
                            }/ {works.length}</span>
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