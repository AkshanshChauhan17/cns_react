import { useState } from 'react';
import './home.scss';
import { BiLeftArrowAlt, BiLock, BiPlus, BiRightArrowAlt } from 'react-icons/bi';
import { BsArrowBarRight, BsArrowDownRight, BsArrowRight, BsArrowRightCircle, BsArrowRightShort } from 'react-icons/bs';
import { FaRightLong } from 'react-icons/fa6';
import { facilitiesData, heroSectionData } from '../../database/db.home';
import { Link } from 'react-router-dom';
import { GiGlobe } from 'react-icons/gi';
import { GrThreeD } from 'react-icons/gr';

export default function Home() {
    const [userInfo, setUserInfo] = useState({
        name: ""
    })

    const [isTour, setIsTour] = useState(false)

    const handleInfoInput = (name)=>{
        setUserInfo({
            name: name
        })
    }

    const handleSubmitInput = ()=>{
        if(userInfo.name.length > 1) {
            localStorage.setItem("isInfoTaken", true)
            localStorage.setItem("info", JSON.stringify(userInfo))
        }
    }

    const handleReset = ()=>{
        localStorage.clear();
        window.location.reload();
    }

    if(!localStorage.isInfoTaken) {
        return (
            <div className="home">
                <form action='/' className='hero-section' onSubmit={handleSubmitInput}>
                    <div className="hero-heading">College Navigation System?</div>
                    <div className="sub-heading">Enter your name</div>
                    <input type="text" onChange={(e)=>handleInfoInput(e.target.value)}/>
                    {
                        userInfo.name.length>5 ? <div className='icon-action'>Enter for submit <BsArrowDownRight /></div> : null
                    }
                </form>
            </div>
        )
    }

    if(isTour) {
        return (
            <div className="home">
                <div className="hero-section-banner">
                    <div className="hero-section-heading">
                        {
                            heroSectionData.title
                        }
                    </div>
                    <div className="hero-section-subheading">
                        {
                            heroSectionData.subheading
                        }
                    </div>
                    <div className="hero-section-small-sections">
                        {
                            heroSectionData.sections.map((e, i)=>{
                                return <div className="hero-section-small-section">
                                    <div className="hero-section-small-section-heading">
                                        {
                                            e.title
                                        }<BsArrowRightShort fontSize={40} className='icon' />
                                    </div>
                                    <div className="hero-section-small-section-subheading">
                                        {
                                            e.content
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="controls">
                        <Link to={"/tour"} className='control'>Explore <BsArrowRight /></Link>
                    </div>
                </div>
                <div className="facilities-section">
                    <div className="facilities-heading">
                        Facilities
                    </div>
                    <div className="facilities">
                        {
                            facilitiesData.map((e, i)=>{
                                return <div className="facility">
                                    <div className="left">
                                        {e.icon}
                                    </div>
                                    <div className="right">
                                        <div className="facility-title">{e.title}</div>
                                        <div className="facility-content">{e.content}</div>
                                        <div className="facility-controls">
                                            <div className="facility-control">Visit <BiRightArrowAlt /></div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="visit-section">
                    <Link to={"/tour/b1"} className="building" style={{backgroundImage: "url(/src/assets/college_images/B1-VISIT-SECTION.jpg)"}}>
                        B1 360 Tour<GrThreeD size={30}/>
                    </Link>
                    <Link to={"/tour/b2"} className="building" style={{backgroundImage: "url(/src/assets/college_images/B2-VISIT-SECTION.jpg)"}}>
                        B2 360 Tour <GrThreeD size={30}/>
                    </Link>
                    {/* <Link to={"/"} className="building" style={{backgroundImage: "url(/src/assets/college_images/B3-VISIT-SECTION.jpg)"}}>
                        B3 360 Tour <BiLock size={30}/>
                    </Link> */}
                </div>
            </div>
        )
    }

    return (
        <div className='home'>
            <div className="hero-section">
                <div className="logo-flex">
                    <div className="itg-logo"></div>
                    <div className="animation-three-sixty"></div>
                </div>
                <div className="hero-heading">
                    <span className='unsolid'>WELCOME</span> <span className='solid'>{JSON.parse(localStorage.info).name}</span>
                </div>
                <div className="hero-action">
                    <div className="action" onClick={handleReset}>
                        <BiLeftArrowAlt className='icon-action' />Reset
                    </div>
                    <div className="action" onClick={()=>setIsTour(true)}>
                        Take a tour<BiRightArrowAlt className='icon-action' />
                    </div>
                </div>
            </div>
        </div>
    )
}