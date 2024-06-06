import { useEffect, useState } from "react"
export default function BuildingOneTour() {
    const [text, setText] = useState("");
    const [sean, setSean] = useState("enter_hall");

    const mapToMiniMap = {
        "book_library": "Path_7",
        "canteen": "Path_6",
        "enter_hall": "Path_2",
        "reading_library": "Path_8",
        "lower_canteen_gate_area": "Path_3",
        "lower_left_wing": "Path_5",
        "lower_right_wing": "Path_4",
        "upper_fy_cabin_ar": "Path_1",
        "upper_lib": "Path_10",
        "upper_st_left": "Path_5",
        "upper_st_right": "Path_4",
        "upper_win": "Path_11",
        "waiting_ar": "Path_1"
    }    
      
    useEffect(()=>{
        var viewer = pannellum.viewer('panorama', {  
            "vaov":55,
            "maxPitch": 27.5,
            "minPitch": -27.5,
            "maxHfov": 90,
            "minHfov": 80,
            "hfov":90,
            "voffset": 1,
            "autoLoad": true, 
            "compass": true,

            "default": {
                "firstScene": "enter_hall",
                "author": "Building 1",
                "sceneFadeDuration": 1000
            },
        
            "scenes": {
                "book_library": {
                    "title": "BOOK LIBRARY",
                    "hfov": 200,
                    "pitch": 0,
                    "yaw": 0,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-BOOK-LIBRARY.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-BOOK-LIBRARY.jpg",
                    "hotSpots": [
                        {
                            "pitch": 0,
                            "yaw": 2,
                            "type": "scene",
                            "text": "EXIT",
                            "sceneId": "upper_st_left",
                            "targetYaw": -23,
                            "targetPitch": 2
                        }
                    ]
                },
        
                "canteen": {
                    "title": "CANTEEN",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-CANTEEN.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-CANTEEN.jpg",
                    "hotSpots": [
                        {
                            "pitch": 8,
                            "yaw": -25,
                            "type": "scene",
                            "text": "EXIT",
                            "sceneId": "lower_canteen_gate_area",
                            "targetYaw": -80,
                            "targetPitch": 0
                        }
                    ]
                },

                "enter_hall": {
                    "title": "ENTER HALL",
                    "hfov": 110,
                    "yaw": 100,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-ENTR-HALL.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-ENTR-HALL.jpg",
                    "hotSpots": [
                        {
                            "pitch": 0,
                            "yaw": 125,
                            "type": "scene",
                            "text": "WAITING AREA",
                            "sceneId": "waiting_ar",
                            "targetYaw": 55,
                            "targetPitch": 0
                        }
                    ]
                },

                "reading_library": {
                    "title": "READING LIBRARY",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-LIBRARY.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-LIBRARY.jpg",
                    "hotSpots": [
                        {
                            "pitch": -0.6,
                            "yaw": -108,
                            "type": "scene",
                            "text": "EXIT",
                            "sceneId": "upper_fy_cabin_ar",
                            "targetYaw": -23,
                            "targetPitch": 2
                        }
                    ]
                },

                "lower_canteen_gate_area": {
                    "title": "LOWER CANTEEN GATE AREA",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-LOWER-CANTEEN-GATE-AR.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-LOWER-CANTEEN-GATE-AR.jpg",
                    "hotSpots": [
                        {
                            "pitch": -0.6,
                            "yaw": -80,
                            "type": "scene",
                            "text": "CANTEEN",
                            "sceneId": "canteen",
                            "targetYaw": -23,
                            "targetPitch": 2
                        },
                        {
                            "pitch": -0.6,
                            "yaw": -175,
                            "type": "scene",
                            "text": "LOWER RIGHT WING",
                            "sceneId": "lower_right_wing",
                            "targetYaw": -170,
                            "targetPitch": 2
                        }
                    ]
                },

                "lower_left_wing": {
                    "title": "LOWER LEFT WING",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-LOWER-ST-LEFT.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-LOWER-ST-LEFT.jpg",
                    "hotSpots": [
                        {
                            "pitch": 0,
                            "yaw": 90,
                            "type": "scene",
                            "text": "UPPER LEFT WING",
                            "sceneId": "upper_st_left",
                            "targetYaw": -100,
                            "targetPitch": 0
                        },{
                            "pitch": -2,
                            "yaw": 188,
                            "type": "scene",
                            "text": "WAITING AREA",
                            "sceneId": "waiting_ar",
                            "targetYaw": 0,
                            "targetPitch": 0
                        }
                    ]
                },

                "lower_right_wing": {
                    "title": "LOWER RIGHT WING",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-LOWER-ST-RIGHT.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-LOWER-ST-RIGHT.jpg",
                    "hotSpots": [
                        {
                            "pitch": -5,
                            "yaw": 11,
                            "type": "scene",
                            "text": "LOWER CANTEEN GATE AREA",
                            "sceneId": "lower_canteen_gate_area",
                            "targetYaw": -23,
                            "targetPitch": 2
                        },{
                            "pitch": 0,
                            "yaw": -70,
                            "type": "scene",
                            "text": "UPPER RIGHT WING",
                            "sceneId": "upper_st_right",
                            "targetYaw": 100,
                            "targetPitch": -1
                        },{
                            "pitch": -5,
                            "yaw": -180,
                            "type": "scene",
                            "text": "WAITING AREA",
                            "sceneId": "waiting_ar",
                            "targetYaw": -160,
                            "targetPitch": 0
                        }
                    ]
                },

                "upper_fy_cabin_ar": {
                    "title": "UPPER FACULTY CABIN AREA",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-UPPER-FY-CABIN-AR.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-UPPER-FY-CABIN-AR.jpg",
                    "hotSpots": [
                        {
                            "pitch": -0.6,
                            "yaw": -20,
                            "type": "scene",
                            "text": "READING LIBRARY",
                            "sceneId": "reading_library",
                            "targetYaw": -100,
                            "targetPitch": 0
                        },{
                            "pitch": 0,
                            "yaw": 185,
                            "type": "scene",
                            "text": "UPPER LEFT WING",
                            "sceneId": "upper_st_left",
                            "targetYaw": -180,
                            "targetPitch": 0
                        },
                        {
                            "pitch": -3,
                            "yaw": 10,
                            "type": "scene",
                            "text": "UPPER RIGHT WING",
                            "sceneId": "upper_st_right",
                            "targetYaw": 180,
                            "targetPitch": 0
                        }
                    ]
                },

                "upper_lib": {
                    "title": "LAB",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-UPPER-LIB.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-UPPER-LIB.jpg",
                    "hotSpots": [
                        {
                            "pitch": -0.6,
                            "yaw": 37.1,
                            "type": "scene",
                            "text": "EXIT",
                            "sceneId": "upper_win",
                            "targetYaw": 100,
                            "targetPitch": 2
                        }
                    ]
                },

                "upper_st_left": {
                    "title": "UPPER LEFT WING",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-UPPER-ST-LEFT.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-UPPER-ST-LEFT.jpg",
                    "hotSpots": [
                        {
                            "pitch": -8,
                            "yaw": -87,
                            "type": "scene",
                            "text": "LOWER LEFT WING",
                            "sceneId": "lower_left_wing",
                            "targetYaw": -250,
                            "targetPitch": 0
                        },{
                            "pitch": -5,
                            "yaw": 13,
                            "type": "scene",
                            "text": "UPPER FACULTY CABIN AREA",
                            "sceneId": "upper_fy_cabin_ar",
                            "targetYaw": 40,
                            "targetPitch": 0
                        },{
                            "pitch": 0,
                            "yaw": -180,
                            "type": "scene",
                            "text": "BOOK LIBRARY",
                            "sceneId": "book_library",
                            "targetYaw": 180,
                            "targetPitch": 0
                        }
                    ]
                },

                "upper_st_right": {
                    "title": "UPPER RIGHT WING",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-UPPER-ST-RIGHT.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-UPPER-ST-RIGHT.jpg",
                    "hotSpots": [
                        {
                            "pitch": -8,
                            "yaw": 90,
                            "type": "scene",
                            "text": "LOWER RIGHT WING",
                            "sceneId": "lower_right_wing",
                            "targetYaw": -100,
                            "targetPitch": 0
                        },{
                            "pitch": -5,
                            "yaw": 13,
                            "type": "scene",
                            "text": "UPPER FACULTY CABIN AREA",
                            "sceneId": "upper_fy_cabin_ar",
                            "targetYaw": -180,
                            "targetPitch": 0
                        },{
                            "pitch": 2,
                            "yaw": 187,
                            "type": "scene",
                            "text": "UPPER RIGHT WINDOW AREA",
                            "sceneId": "upper_win",
                            "targetYaw": 0,
                            "targetPitch": 0
                        }
                    ]
                },

                "upper_win": {
                    "title": "UPPER WINDOW AREA",
                    "hfov": 110,
                    "yaw": 200,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-UPPER-WIN.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-UPPER-WIN.jpg",
                    "hotSpots": [
                        {
                            "pitch": -2,
                            "yaw": 100,
                            "type": "scene",
                            "text": "LAB",
                            "sceneId": "upper_lib",
                            "targetYaw": 10,
                            "targetPitch": 2
                        },{
                            "pitch": 2,
                            "yaw": 187,
                            "type": "scene",
                            "text": "UPPER RIGHT WING",
                            "sceneId": "upper_st_right",
                            "targetYaw": 10,
                            "targetPitch": 2
                        }
                    ]
                },

                "waiting_ar": {
                    "title": "WAITING AREA",
                    "hfov": 110,
                    "yaw": 120,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B1/LARGE/B1-WAITING-AR.jpg",
                    "preview": "/src/assets/partial-360/B1/PLACEHOLDER/B1-WAITING-AR.jpg",
                    "hotSpots": [
                        {
                            "pitch": -10,
                            "yaw": 5,
                            "type": "scene",
                            "text": "LOWER LEFT WING",
                            "sceneId": "lower_right_wing",
                            "targetYaw": 10,
                            "targetPitch": 0
                        },
                        {
                            "pitch": -10,
                            "yaw": 55,
                            "type": "scene",
                            "text": "ENTER HALL",
                            "sceneId": "enter_hall",
                            "targetYaw": 120,
                            "targetPitch": 0
                        },
                        {
                            "pitch": -4,
                            "yaw": 185,
                            "type": "scene",
                            "text": "LOWER LEFT WING",
                            "sceneId": "lower_left_wing",
                            "targetYaw": 0,
                            "targetPitch": 0
                        }
                    ]
                }
            }
        });
        viewer.on("scenechange", ()=>{
            const sean = viewer.getScene();
            setSean(sean);
        })
        return () => {
            viewer.destroy();
          };
    }, [])

    useEffect(()=>{
        if(sean!=="") {
            document.getElementById(mapToMiniMap[sean]).classList.add("active-small-map-area");
            return ()=>{
                document.getElementById(mapToMiniMap[sean]).classList.remove("active-small-map-area");
            }
        }
    }, [sean])
    
    return <>
        {
            text==="" ? null :
            <div className="text-script-ar">
                <div className="text-script">
                    Akshansh
                </div>
            </div>
        }

        <div className="cad-map">
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="140" viewBox="0 0 300 140">
                <g id="B1_FF" transform="translate(0 -290)">
                    <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(0 300)" fill="#fff" stroke="#000" stroke-width="1">
                    <rect width="300" height="100" stroke="none"/>
                    <rect x="0.5" y="0.5" width="299" height="99" fill="none"/>
                    </g>
                    <g id="Rectangle_2" data-name="Rectangle 2" transform="translate(0 290)" fill="#fff" stroke="#000" stroke-width="1">
                    <rect width="80" height="120" stroke="none"/>
                    <rect x="0.5" y="0.5" width="79" height="119" fill="none"/>
                    </g>
                    <g id="Rectangle_4" data-name="Rectangle 4" transform="translate(220 290)" fill="#fff" stroke="#000" stroke-width="1">
                    <rect width="80" height="120" stroke="none"/>
                    <rect x="0.5" y="0.5" width="79" height="119" fill="none"/>
                    </g>
                    <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(110 290)" fill="#fff" stroke="#000" stroke-width="1">
                    <rect width="80" height="140" stroke="none"/>
                    <rect x="0.5" y="0.5" width="79" height="139" fill="none"/>
                    </g>
                    <g className="clickable_area" id="Path_2" data-name="Path 2" transform="translate(110 380)" fill="#fff">
                    <path d="M 79.5 49.5 L 0.5 49.5 L 0.5 26.40615463256836 L 0.5 0.5 L 79.5 0.5 L 79.5 49.5 Z" stroke="none"/>
                    <path d="M 1 1 L 1 49 L 79 49 L 79 1 L 1 1 M 0 0 L 80 0 L 80 50 L 0 50 L 0 0 Z" stroke="none" fill="#000"/>
                    </g>
                    <g className="clickable_area" id="Path_10" data-name="Path 10" transform="translate(276 361)" fill="#fff">
                    <path d="M 23.5 48.5 L 0.5 48.5 L 0.5 0.5 L 23.5 0.5 L 23.5 25.19602012634277 L 23.5 48.5 Z" stroke="none"/>
                    <path d="M 1 1 L 1 48 L 23 48 L 23 1 L 1 1 M 0 0 L 24 0 L 24 49 L 0 49 L 0 0 Z" stroke="none" fill="#000"/>
                    </g>
                    <g id="Rectangle_6" data-name="Rectangle 6" transform="translate(0 340)" fill="#fff" stroke="#000" stroke-width="1">
                    <rect width="300" height="22" stroke="none"/>
                    <rect x="0.5" y="0.5" width="299" height="21" fill="none"/>
                    </g>
                    <g className="clickable_area" id="Path_5" data-name="Path 5" transform="translate(79 340)" fill="#fff">
                    <path d="M 31.5 21.5 L 0.5 21.5 L 0.5 9.5625 L 0.5 0.5 L 31.5 0.5 L 31.5 21.5 Z" stroke="none"/>
                    <path d="M 1 1 L 1 21 L 31 21 L 31 1 L 1 1 M 0 0 L 32 0 L 32 22 L 0 22 L 0 0 Z" stroke="none" fill="#000"/>
                    </g>
                    <g className="clickable_area" id="Path_8" data-name="Path 8" transform="translate(110 290)" fill="#fff">
                    <path d="M 79.5 50.5 L 0.5 50.5 L 0.5 26.93427848815918 L 0.5 0.5 L 79.5 0.5 L 79.5 50.5 Z" stroke="none"/>
                    <path d="M 1 1 L 1 50 L 79 50 L 79 1 L 1 1 M 0 0 L 80 0 L 80 51 L 0 51 L 0 0 Z" stroke="none" fill="#000"/>
                    </g>
                    <g className="clickable_area" id="Path_4" data-name="Path 4" transform="translate(189 340)" fill="#fff">
                    <path d="M 31.5 21.5 L 0.5 21.5 L 0.5 0.5 L 31.5 0.5 L 31.5 12.4375 L 31.5 21.5 Z" stroke="none"/>
                    <path d="M 1 1 L 1 21 L 31 21 L 31 1 L 1 1 M 0 0 L 32 0 L 32 22 L 0 22 L 0 0 Z" stroke="none" fill="#000"/>
                    </g>
                    <g className="clickable_area" id="Path_3" data-name="Path 3" transform="translate(220 340)" fill="#fff">
                    <path d="M 31.5 21.5 L 0.5 21.5 L 0.5 0.5 L 31.5 0.5 L 31.5 11.3125 L 31.5 21.5 Z" stroke="none"/>
                    <path d="M 1 1 L 1 21 L 31 21 L 31 1 L 1 1 M 0 0 L 32 0 L 32 22 L 0 22 L 0 0 Z" stroke="none" fill="#000"/>
                    </g>
                    <g className="clickable_area" id="Path_6" data-name="Path 6" transform="translate(220 290)" fill="#fff">
                    <path d="M 79.5 50.5 L 0.5 50.5 L 0.5 30.70319938659668 L 0.5 0.5 L 79.5 0.5 L 79.5 50.5 Z" stroke="none"/>
                    <path d="M 1 1 L 1 50 L 79 50 L 79 1 L 1 1 M 0 0 L 80 0 L 80 51 L 0 51 L 0 0 Z" stroke="none" fill="#000"/>
                    </g>
                    <g className="clickable_area" id="Path_1" data-name="Path 1" transform="translate(110 340)" fill="#fff">
                    <path d="M 79.5 40.5 L 0.5 40.5 L 0.5 13.86450004577637 L 0.5 0.5 L 79.5 0.5 L 79.5 40.5 Z" stroke="none"/>
                    <path d="M 1 1 L 1 40 L 79 40 L 79 1 L 1 1 M 0 0 L 80 0 L 80 41 L 0 41 L 0 0 Z" stroke="none" fill="#000"/>
                    </g>
                    <g className="clickable_area" id="Path_7" data-name="Path 7" transform="translate(0 360.5)" fill="#fff">
                    <path d="M 79.5 49 L 0.5 49 L 0.5 26.14209938049316 L 0.5 0.5 L 79.5 0.5 L 79.5 49 Z" stroke="none"/>
                    <path d="M 1 1 L 1 48.5 L 79 48.5 L 79 1 L 1 1 M 0 0 L 80 0 L 80 49.5 L 0 49.5 L 0 0 Z" stroke="none" fill="#000"/>
                    </g>
                    <g className="clickable_area" id="Path_11" data-name="Path 11" transform="translate(281.837 340)" fill="#fff">
                    <path d="M 17.66275596618652 21.5 L 0.5000051259994507 21.5 L 0.5000051259994507 0.5 L 17.66275596618652 0.5 L 17.66275596618652 11.3125 L 17.66275596618652 21.5 Z" stroke="none"/>
                    <path d="M 0.9999942779541016 1 L 0.9999942779541016 21 L 17.16274452209473 21 L 17.16274452209473 1 L 0.9999942779541016 1 M -5.7220458984375e-06 0 L 18.16274452209473 0 L 18.16274452209473 22 L -5.7220458984375e-06 22 L -5.7220458984375e-06 0 Z" stroke="none" fill="#000"/>
                    </g>
                </g>
            </svg>
        </div>
        <div id="panorama"></div>
    </>
}