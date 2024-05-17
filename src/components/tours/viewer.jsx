import { useEffect} from "react";
import tstImage from "../../assets/animations/360_animation.gif";

export default function Viewer({image_url, hsps, title}) {
    useEffect(()=>{
        if(image_url.includes("/OUTER/")) {
            var viewer = pannellum.viewer('panorama', {
                "title": title,
                "type": "equirectangular",
                "panorama": image_url,
                "preview": tstImage,
                "haov": 180.87,
                "vaov": 50,
                "maxPitch": 25,
                "minPitch": -25,
                "maxHfov": 75,
                "minHfov": 65,
                "minYaw": -90,
                "maxYaw": 90,
                "autoLoad": true,
                "update": true,
                "hotSpots": hsps,
                "compass": true,
                "showControls": true
            });
        } else {
            var viewer = pannellum.viewer('panorama', {
                "title": title,
                "type": "equirectangular",
                "panorama": image_url,
                "preview": tstImage,
                "vaov":60,
                "maxPitch": 30,
                "minPitch": -30,
                "maxHfov": 80,
                "minHfov": 50,
                "autoLoad": true,
                "update": true,
                "hotSpots": hsps,
                "compass": true,
                "showControls": true
            });
        }
        // viewer.on("animatefinished", ()=>{
        // })
        return () => {
            viewer.destroy();
          };
    }, [image_url, hsps]);

    return <div id="panorama">
    </div>
}