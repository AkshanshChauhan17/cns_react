import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";
import { FaGraduationCap, FaMap } from "react-icons/fa6";

export const sidebar = [
    {
        title: "Home",
        icon: <FaPlayCircle />,
        url: "/"
    }, 
    {
        title: "Tour",
        icon: <FaMap />,
        url: "/tour"
    },
    {
        title: "About",
        icon: <FaInfoCircle />,
        url: "/about"
    },
    {
        title: "Content",
        icon: <FaGraduationCap />,
        url: "/content"
    }
]