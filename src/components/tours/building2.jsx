import { useEffect, useState } from "react"
export default function BuildingTwoTour() {
    const [text, setText] = useState("");
    const [sean, setSean] = useState("enter_hall");

    // const mapToMiniMap = {
    //     "book_library": "Path_7",
    //     "canteen": "Path_6",
    //     "enter_hall": "Path_2",
    //     "reading_library": "Path_8",
    //     "lower_canteen_gate_area": "Path_3",
    //     "lower_left_wing": "Path_5",
    //     "lower_right_wing": "Path_4",
    //     "upper_fy_cabin_ar": "Path_1",
    //     "upper_lib": "Path_10",
    //     "upper_st_left": "Path_5",
    //     "upper_st_right": "Path_4",
    //     "upper_win": "Path_11",
    //     "waiting_ar": "Path_1"
    // }    
      
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
                "firstScene": "w_o_h_a",
                "author": "Building 1",
                "sceneFadeDuration": 1000
            },
        
            "scenes": {
                "w_o_h_a": {
                    "title": "WALL OF HEROS AREA",
                    "hfov": 200,
                    "pitch": 0,
                    "yaw": 250,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B2/LARGE/B2-WALL-OF-HERO-AR.jpg",
                    "preview": "/src/assets/partial-360/B2/PLACEHOLDER/B2-WALL-OF-HERO-AR.jpg",
                    "hotSpots": [
                        {
                            "pitch": -10,
                            "yaw": -90,
                            "type": "scene",
                            "text": "Three Ways",
                            "sceneId": "t_w",
                            "targetYaw": 0,
                            "targetPitch":0
                        },
                        {
                            "pitch": 0,
                            "yaw": -190,
                            "type": "scene",
                            "text": "Classroom Row",
                            "sceneId": "cr_r",
                            "targetYaw": 0,
                            "targetPitch":0
                        }
                    ]
                },
        
                "t_w": {
                    "title": "THREE WAY",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B2/LARGE/B2-THREE-WAY.jpg",
                    "preview": "/src/assets/partial-360/B2/PLACEHOLDER/B2-THREE-WAY.jpg",
                    "hotSpots": [
                        {
                            "pitch": 0,
                            "yaw": 5,
                            "type": "scene",
                            "text": "Cooler Area",
                            "sceneId": "c_a",
                            "targetYaw": 180,
                            "targetPitch": 0
                        },
                        {
                            "pitch": -10,
                            "yaw": -130,
                            "type": "scene",
                            "text": "Wall of Heros Area",
                            "sceneId": "w_o_h_a",
                            "targetYaw": -280,
                            "targetPitch": 0
                        },
                        {
                            "pitch": 0,
                            "yaw": -85,
                            "type": "scene",
                            "text": "Classroom Row",
                            "sceneId": "cr_r",
                            "targetYaw": 0,
                            "targetPitch":0
                        },
                        {
                            "pitch": -5,
                            "yaw": 100,
                            "type": "scene",
                            "text": "Hall Area",
                            "sceneId": "h_a",
                            "targetYaw": -5,
                            "targetPitch":0
                        }
                    ]
                },

                "c_a": {
                    "title": "COOLER AREA",
                    "hfov": 110,
                    "yaw": 100,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B2/LARGE/B2-COOLER-AR.jpg",
                    "preview": "/src/assets/partial-360/B2/PLACEHOLDER/B2-COOLER-AR.jpg",
                    "hotSpots": [
                        {
                            "pitch": -4,
                            "yaw": 2,
                            "type": "scene",
                            "text": "Three Ways",
                            "sceneId": "t_w",
                            "targetYaw": 180,
                            "targetPitch":0
                        },
                        {
                            "pitch": -2,
                            "yaw": -11,
                            "type": "scene",
                            "text": "Gym",
                            "sceneId": "gym",
                            "targetYaw": 55,
                            "targetPitch": 0
                        }
                    ]
                },

                "cr_r": {
                    "title": "CLASSROOM ROW",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B2/LARGE/B2-CLASSROOMS-ROW.jpg",
                    "preview": "/src/assets/partial-360/B2/PLACEHOLDER/B2-CLASSROOMS-ROW.jpg",
                    "hotSpots": [
                        {
                            "pitch": -15,
                            "yaw": -170,
                            "type": "scene",
                            "text": "Wall of Heros Area",
                            "sceneId": "w_o_h_a",
                            "targetYaw": -23,
                            "targetPitch": 2
                        }
                    ]
                },

                "gym": {
                    "title": "GYM",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B2/LARGE/B2-GYM.jpg",
                    "preview": "/src/assets/partial-360/B2/PLACEHOLDER/B2-GYM.jpg",
                    "hotSpots": [
                        {
                            "pitch": -0.6,
                            "yaw": -170,
                            "type": "scene",
                            "text": "Exit",
                            "sceneId": "c_a",
                            "targetYaw": 0,
                            "targetPitch": 2
                        }
                    ]
                },

                "cr": {
                    "title": "LOWER LEFT WING",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B2/LARGE/B2-CLASSROOM.jpg",
                    "preview": "/src/assets/partial-360/B2/PLACEHOLDER/B2-CLASSROOM.jpg",
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

                "h_a": {
                    "title": "HALL AREA",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/src/assets/partial-360/B2/LARGE/B2-HALL-AR.jpg",
                    "preview": "/src/assets/partial-360/B2/PLACEHOLDER/B2-HALL-AR.jpg",
                    "hotSpots": [
                        {
                            "pitch": -5,
                            "yaw": -175,
                            "type": "scene",
                            "text": "Three Ways",
                            "sceneId": "t_w",
                            "targetYaw": -90,
                            "targetPitch":0
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

    // useEffect(()=>{
    //     if(sean!=="") {
    //         document.getElementById(mapToMiniMap[sean]).classList.add("active-small-map-area");
    //         return ()=>{
    //             document.getElementById(mapToMiniMap[sean]).classList.remove("active-small-map-area");
    //         }
    //     }
    // }, [sean])
    
    return <>
        {
            text==="" ? null :
            <div className="text-script-ar">
                <div className="text-script">
                    Akshansh
                </div>
            </div>
        }

        {/* <div className="cad-map">
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
        </div> */}
        <div id="panorama"></div>
    </>
}