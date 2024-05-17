import { useEffect, useState } from "react"
import { tree } from "../../assets/partial-360/tree"
import "./three_sixty.scss"
import { FaLocationArrow } from "react-icons/fa"
import { FaLocationCrosshairs } from "react-icons/fa6"
import { BiArrowFromLeft } from "react-icons/bi"
import Viewer from "./viewer"
export default function OuterTour() {
    const [selectedImage, setSelectedImage] = useState("")
    const [size, setSize] = useState("LARGE")
    const [viewTitle, setViewTitle] = useState("")
    const [yawOut, setYawOut] = useState(0)
    const hotSpots = {
            "POINT-1": [{
                "pitch": -2,
                "yaw": -11,
                "type": "info",
                "cssClass": "info",
                "text": "Main Gate"
            },
            {
                "pitch":6,
                "yaw": -30,
                "type": "info",
                "cssClass": "info",
                "text": `<img src="../../src/assets/solid_images/bank_of_baroda.jpg" width="100px" />`
            },
            {
                "pitch":2,
                "yaw": -55,
                "type": "info",
                "cssClass": "info",
                "text": "Canteen"
            },{
                "pitch":0,
                "yaw": -7,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 2",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-2.jpg")
                    setViewTitle("POINT-2")
                }
            }],

            "POINT-2": [{
                "pitch": 2,
                "yaw": -76,
                "type": "info",
                "cssClass": "info",
                "text": "Main Gate"
            },
            {
                "pitch":6,
                "yaw": -55,
                "type": "info",
                "cssClass": "info",
                "text": `<img src="../../src/assets/solid_images/bank_of_baroda.jpg" width="100px" />`
            },
            {
                "pitch":3,
                "yaw": 20,
                "type": "info",
                "cssClass": "info",
                "text": "Parking Area"
            },
            {
                "pitch":3,
                "yaw": -34,
                "type": "info",
                "cssClass": "info",
                "text": "Canteen"
            },{
                "pitch": 2,
                "yaw": -14,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 3",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-3.jpg")
                    setViewTitle("POINT-3")
                }
            },{
                "pitch": 2,
                "yaw": -80,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 1",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-1.jpg")
                    setViewTitle("POINT-1")
                }
            },{
                "pitch": 4,
                "yaw": 50,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 4",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-4.jpg")
                    setViewTitle("POINT-4")
                }
            }],

            "POINT-3": [{
                "pitch": 2,
                "yaw": -47,
                "type": "info",
                "cssClass": "info",
                "text": "Building 1"
            },{
                "pitch": 2.5,
                "yaw": 0,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 6",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-6.jpg")
                    setViewTitle("POINT-6")
                }
            },{
                "pitch": 0,
                "yaw": -80,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 5",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-5.jpg")
                    setViewTitle("POINT-5")
                }
            },{
                "pitch": -3,
                "yaw": 65,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 2",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-2.jpg")
                    setViewTitle("POINT-2")
                }
            }],

            "POINT-4": [{
                "pitch": -6,
                "yaw": -20,
                "type": "info",
                "cssClass": "info",
                "text": "Parking Area"
            },{
                "pitch": 0,
                "yaw":28,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 9",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-9.jpg")
                    setViewTitle("POINT-9")
                }
            },{
                "pitch": 3,
                "yaw": 8,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 6",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-6.jpg")
                    setViewTitle("POINT-6")
                }
            },{
                "pitch": 1,
                "yaw": -70,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 2",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-2.jpg")
                    setViewTitle("POINT-2")
                }
            },{
                "pitch": -1,
                "yaw": 55,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 8",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-8.jpg")
                    setViewTitle("POINT-8")
                }
            },{
                "pitch": 3,
                "yaw": 25,
                "cssClass": "play",
                "clickHandlerFunc": ()=>{
                    document.getElementById("outer_p8").play();
                    document.getElementById("outer_p8").onplaying = ()=>{
                        document.querySelectorAll(".play")[0].classList.add("playing")
                    }
                    document.getElementById("outer_p8").onended = ()=>{
                        document.querySelectorAll(".play")[0].classList.remove("playing")
                    }
                },
                "text": `<div class="audio-player"><img src="/src/assets/solid_images/vmsb_image.jpg" alt="Audio Image" class="audio-image"><audio id="outer_p8" hidden><source src="/src/assets/voiceover/OUTER/p8.mp3" type="audio/mp3">Your browser does not support the audio element.</audio></div><div class="info-card"><h3>वीर माधो सिंह भंडारी</h3><div class="link-ar"><a target="CNS_VIEWING_STORY" href="https://youtu.be/_XEkHNE2TJM?si=2PzEReF2Tv01e69B"><img src="/src/assets/solid_images/yt.webp" width="20px" height="40px" style="width: 40px;" title="Watch Full Story"></img></a></div>`
            }], 

            "POINT-5": [{
                "pitch": 2,
                "yaw": -5,
                "type": "info",
                "cssClass": "info",
                "text": "B1 Entrance"
            },{
                "pitch": 2,
                "yaw": -64,
                "cssClass": "play",
                "clickHandlerFunc": ()=>{
                    document.getElementById("outer_p7").play();
                    document.getElementById("outer_p7").onplaying = ()=>{
                        document.querySelectorAll(".play")[0].classList.add("playing")
                    }
                    document.getElementById("outer_p7").onended = ()=>{
                        document.querySelectorAll(".play")[0].classList.remove("playing")
                    }
                },
                "text": `<audio src="/src/assets/voiceover/OUTER/P7.wav" id="outer_p7" hidden></audio><div class="info-card"><h3>Welcome to Our Racket Sports Area!</h3><p>Discover the heart of our college's athletic spirit with our modern racket sports area. Here, students can immerse themselves in the excitement of badminton and tennis. Surrounded by lush greenery, our sports area sets the stage for exhilarating matches and friendly rivalries.</p></div>`
            },{
                "pitch": 2,
                "yaw": -78,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 7",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-7.jpg")
                    setViewTitle("POINT-7")
                }
            },{
                "pitch": -3,
                "yaw": 48,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 3",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-3.jpg")
                    setViewTitle("POINT-3")
                }
            }],

            "POINT-6": [{
                "pitch": 0,
                "yaw": 25,
                "type": "info",
                "cssClass": "info",
                "text": "Building 1"
            },{
                "pitch": -10,
                "yaw": -20,
                "type": "info",
                "cssClass": "info",
                "text": "Parking Area"
            },{
                "pitch": -4.5,
                "yaw": -4,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 3",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-3.jpg")
                    setViewTitle("POINT-3")
                }
            },{
                "pitch": -3,
                "yaw": -72,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 4",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-4.jpg")
                    setViewTitle("POINT-4")
                }
            }],             

            "POINT-7": [{
                "pitch": 2,
                "yaw": 35,
                "type": "info",
                "cssClass": "info",
                "text": "Building 1"
            },{
                "pitch": 0,
                "yaw": -6,
                "cssClass": "play",
                "clickHandlerFunc": ()=>{
                    document.getElementById("outer_p7").play();
                    document.getElementById("outer_p7").onplaying = ()=>{
                        document.querySelectorAll(".play")[0].classList.add("playing")
                    }
                    document.getElementById("outer_p7").onended = ()=>{
                        document.querySelectorAll(".play")[0].classList.remove("playing")
                    }
                },
                "text": `<audio src="/src/assets/voiceover/OUTER/P7.wav" id="outer_p7" hidden></audio><div class="info-card"><h3>Welcome to Our Racket Sports Area!</h3><p>Discover the heart of our college's athletic spirit with our modern racket sports area. Here, students can immerse themselves in the excitement of badminton and tennis. Surrounded by lush greenery, our sports area sets the stage for exhilarating matches and friendly rivalries.</p></div>`
            },{
                "pitch": -2,
                "yaw":56,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 5",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-5.jpg")
                    setViewTitle("POINT-5")
                }
            }],

            "POINT-8": [{
                "pitch":3,
                "yaw": 2,
                "type": "info",
                "cssClass": "info",
                "text": "B2 Entrance"
            },{
                "pitch": 0,
                "yaw": -22,
                "cssClass": "play",
                "clickHandlerFunc": ()=>{
                    document.getElementById("outer_p8").play();
                    document.getElementById("outer_p8").onplaying = ()=>{
                        document.querySelectorAll(".play")[0].classList.add("playing")
                    }
                    document.getElementById("outer_p8").onended = ()=>{
                        document.querySelectorAll(".play")[0].classList.remove("playing")
                    }
                },
                "text": `<div class="audio-player"><img src="/src/assets/solid_images/vmsb_image.jpg" alt="Audio Image" class="audio-image"><audio id="outer_p8" hidden><source src="/src/assets/voiceover/OUTER/p8.mp3" type="audio/mp3">Your browser does not support the audio element.</audio></div><div class="info-card"><h3>वीर माधो सिंह भंडारी</h3><a target="CNS_VIEWING_STORY" href="https://youtu.be/_XEkHNE2TJM?si=2PzEReF2Tv01e69B"><img src="/src/assets/solid_images/yt.webp" width="20px" height="40px" style="width: 40px;" title="Watch Full Story"></img></a></div>`
            },{
                "pitch": -2,
                "yaw":-77,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 4",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-4.jpg")
                    setViewTitle("POINT-4")
                }
            },{
                "pitch": -1,
                "yaw":-25,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 9",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-9.jpg")
                    setViewTitle("POINT-9")
                }
            },{
                "pitch": 2,
                "yaw":-75,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 2",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-2.jpg")
                    setViewTitle("POINT-2")
                }
            },{
                "pitch": 0,
                "yaw":45,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 10",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-10.jpg")
                    setViewTitle("POINT-10")
                }
            }],
            
            "POINT-9": [{
                "pitch":3,
                "yaw": 10,
                "type": "info",
                "cssClass": "info",
                "text": "Building 2"
            },{
                "pitch": -6,
                "yaw": 28,
                "cssClass": "play",
                "clickHandlerFunc": ()=>{
                    document.getElementById("outer_p8").play();
                    document.getElementById("outer_p8").onplaying = ()=>{
                        document.querySelectorAll(".play")[0].classList.add("playing")
                    }
                    document.getElementById("outer_p8").onended = ()=>{
                        document.querySelectorAll(".play")[0].classList.remove("playing")
                    }
                },
                "text": `<div class="audio-player"><img src="/src/assets/solid_images/vmsb_image.jpg" alt="Audio Image" class="audio-image"><audio id="outer_p8" hidden><source src="/src/assets/voiceover/OUTER/p8.mp3" type="audio/mp3">Your browser does not support the audio element.</audio></div><div class="info-card"><h3>वीर माधो सिंह भंडारी</h3><div class="link-ar"><a target="CNS_VIEWING_STORY" href="https://youtu.be/_XEkHNE2TJM?si=2PzEReF2Tv01e69B"><img src="/src/assets/solid_images/yt.webp" width="20px" height="40px" style="width: 40px;" title="Watch Full Story"></img></a></div>`
            },{
                "pitch": -5,
                "yaw":-84,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 4",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-4.jpg")
                    setViewTitle("POINT-4")
                }
            }],

            "POINT-10": [{
                "pitch":3,
                "yaw": 20,
                "type": "info",
                "cssClass": "info",
                "text": "Gymnastic"
            },{
                "pitch":5,
                "yaw": 55,
                "type": "info",
                "cssClass": "info",
                "text": "Auditorium"
            },{
                "pitch": 0,
                "yaw":-80,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 8",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-8.jpg")
                    setViewTitle("POINT-8")
                }
            },{
                "pitch": 1,
                "yaw":-75,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 4",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-4.jpg")
                    setViewTitle("POINT-4")
                }
            },{
                "pitch": 1,
                "yaw": 83,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 11",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-11.jpg")
                    setViewTitle("POINT-11")
                }
            }],

            "POINT-11": [{
                "pitch":1,
                "yaw": -40,
                "type": "info",
                "cssClass": "info",
                "text": "Auditorium"
            },{
                "pitch":10,
                "yaw": 45,
                "type": "info",
                "cssClass": "info",
                "text": "Building 3"
            },{
                "pitch": -1,
                "yaw": -75,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 10",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-10.jpg")
                    setViewTitle("POINT-10")
                }
            },{
                "pitch": 0,
                "yaw": 60,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 12",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-12.jpg")
                    setViewTitle("POINT-12")
                }
            }],

            "POINT-12": [{
                "pitch":12,
                "yaw":1,
                "type": "info",
                "cssClass": "info",
                "text": "Building 3"
            },{
                "pitch":-2,
                "yaw": -36,
                "type": "info",
                "cssClass": "info",
                "text": "Park"
            },{
                "pitch": -1,
                "yaw": -72,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 11",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-11.jpg")
                    setViewTitle("POINT-11")
                }
            },{
                "pitch": 0,
                "yaw": -13,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 13",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-13.jpg")
                    setViewTitle("POINT-13")
                }
            }],

            "POINT-13": [{
                "pitch":4,
                "yaw":2,
                "type": "info",
                "cssClass": "info",
                "text": "B3 Entrance"
            },{
                "pitch":-2,
                "yaw": -85,
                "cssClass": "play",
                "clickHandlerFunc": ()=>{
                    document.getElementById("outer_v_ball").play();
                    document.getElementById("outer_v_ball").onplaying = ()=>{
                        document.querySelectorAll(".play")[0].classList.add("playing")
                    }
                    document.getElementById("outer_v_ball").onended = ()=>{
                        document.querySelectorAll(".play")[0].classList.remove("playing")
                    }
                },
                "text": `<audio id="outer_v_ball" hidden src="/src/assets/voiceover/OUTER/vball.wav"></audio><div class="info-card"><img src="/src/assets/solid_images/v_ball.jpg" alt="Audio Image" class="audio-image"></img><h3>Volleyball Area</h3><p>Step onto our volleyball court, where fun meets the sun! Surrounded by greenery, our well-kept sand court is perfect for games and matches. Whether you're a pro or just starting out, join us for some volleyball fun in the sun!</p></div>`
            },{
                "pitch": 1,
                "yaw": -66,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 14",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-14.jpg")
                    setViewTitle("POINT-14")
                }
            },{
                "pitch": -2,
                "yaw": 70,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 12",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-12.jpg")
                    setViewTitle("POINT-12")
                }
            }],

            "POINT-14": [{
                "pitch":5,
                "yaw":-46,
                "type": "info",
                "cssClass": "info",
                "text": "Building 3"
            },{
                "pitch":-7,
                "yaw": 20,
                "cssClass": "play",
                "clickHandlerFunc": ()=>{
                    document.getElementById("outer_v_ball").play();
                    document.getElementById("outer_v_ball").onplaying = ()=>{
                        document.querySelectorAll(".play")[0].classList.add("playing")
                    }
                    document.getElementById("outer_v_ball").onended = ()=>{
                        document.querySelectorAll(".play")[0].classList.remove("playing")
                    }
                },
                "text": `<audio id="outer_v_ball" hidden src="/src/assets/voiceover/OUTER/vball.wav"></audio><div class="info-card"><img src="/src/assets/solid_images/v_ball.jpg" alt="Audio Image" class="audio-image"></img><h3>Volleyball Area</h3><p>Step onto our volleyball court, where fun meets the sun! Surrounded by greenery, our well-kept sand court is perfect for games and matches. Whether you're a pro or just starting out, join us for some volleyball fun in the sun!</p></div>`
            },{
                "pitch": -1,
                "yaw": -5,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 13",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-13.jpg")
                    setViewTitle("POINT-13")
                }
            },{
                "pitch": -7,
                "yaw": 37,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 15",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-15.jpg")
                    setViewTitle("POINT-15")
                }
            }],

            "POINT-15": [{
                "pitch":5,
                "yaw":24,
                "type": "info",
                "cssClass": "info",
                "text": "Building 3"
            },{
                "pitch": -6,
                "yaw": -3,
                "cssClass": "play",
                "clickHandlerFunc": ()=>{
                    document.getElementById("outer_v_ball").play();
                    document.getElementById("outer_v_ball").onplaying = ()=>{
                        document.querySelectorAll(".play")[0].classList.add("playing")
                    }
                    document.getElementById("outer_v_ball").onended = ()=>{
                        document.querySelectorAll(".play")[0].classList.remove("playing")
                    }
                },
                "text": `<audio id="outer_v_ball" hidden src="/src/assets/voiceover/OUTER/vball.wav"></audio>
                <div class="info-card"><img src="/src/assets/solid_images/v_ball.jpg" alt="Audio Image" class="audio-image"></img><h3>Volleyball Area</h3><p>Step onto our volleyball court, where fun meets the sun! Surrounded by greenery, our well-kept sand court is perfect for games and matches. Whether you're a pro or just starting out, join us for some volleyball fun in the sun!</p></div>`
            },{
                "pitch": 4,
                "yaw": -35,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 14",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-14.jpg")
                    setViewTitle("POINT-14")
                }
            },{
                "pitch": 1,
                "yaw": 25,
                "type": "info",
                "cssClass": "arrow",
                "text": "POINT 13",
                "clickHandlerFunc": ()=>{
                    setSelectedImage("/src/assets/partial-360/OUTER/LARGE/POINT-13.jpg")
                    setViewTitle("POINT-13")
                }
            }]
        }
    return <div className="three-sixty-ar">
        <div className="three-sixty-navigation">
            <div className="tsn-navigation-group">
                <div className="tsn-heading">OUTER AR <FaLocationCrosshairs className="icon" /></div>
                {
                    tree["OUTER\\PLACEHOLDER"].contents.map((e, i)=>{
                        return <div className="tsn-quick-link" key={i} onClick={()=>{setSelectedImage(`/src/assets/partial-360/OUTER/${size}/${e}`); setViewTitle(e.replace(".jpg", ""))}} style={{backgroundImage: `url(/src/assets/partial-360/OUTER/PLACEHOLDER/${e})`}}>{e.replace(".jpg", "")} <BiArrowFromLeft className="icon" /></div>
                    })
                }
                </div>
            {/* <div className="tsn-navigation-group">
                <div className="tsn-heading">BUILDING 1 <FaLocationCrosshairs className="icon" /></div>
                {
                    tree["B1\\PLACEHOLDER"].contents.map((e, i)=>{
                        return <div className="tsn-quick-link" key={i} onClick={()=>{setSelectedImage(`/src/assets/partial-360/B1/${size}/${e}`); setViewTitle(e.replace(".jpg", ""))}} style={{backgroundImage: `url(/src/assets/partial-360/B1/PLACEHOLDER/${e})`}}>{e.replace(".jpg", "")} <BiArrowFromLeft className="icon" /></div>
                    })
                }
            </div>
            <div className="tsn-navigation-group">
                <div className="tsn-heading">BUILDING 2 <FaLocationCrosshairs className="icon" /></div>
                {
                    tree["B2\\PLACEHOLDER"].contents.map((e, i)=>{
                        return <div className="tsn-quick-link" key={i} onClick={()=>{setSelectedImage(`/src/assets/partial-360/B2/${size}/${e}`); setViewTitle(e.replace(".jpg", ""))}} style={{backgroundImage: `url(/src/assets/partial-360/B2/${size}/${e})`}}>{e.replace(".jpg", "")} <BiArrowFromLeft className="icon" /></div>
                    })
                }
            </div>
            <div className="tsn-navigation-group">
                <div className="tsn-heading">BUILDING 3 <FaLocationCrosshairs className="icon" /></div>
                {
                    tree["B3\\PLACEHOLDER"].contents.map((e, i)=>{
                        return <div className="tsn-quick-link" key={i} onClick={()=>{setSelectedImage(`/src/assets/partial-360/B3/${size}/${e}`); setViewTitle(e.replace(".jpg", ""))}} style={{backgroundImage: `url(/src/assets/partial-360/B3/${size}/${e})`}}>{e.replace(".jpg", "")} <BiArrowFromLeft className="icon" /></div>
                    })
                }
            </div> */}
        </div>
        <Viewer image_url={selectedImage} hsps={hotSpots[viewTitle]} title={viewTitle} syo={yawOut} syoDef={setYawOut}/>
    </div>
}