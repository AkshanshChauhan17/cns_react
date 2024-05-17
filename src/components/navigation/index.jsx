import Sidebar from "./sidebar";
import "./navigation.scss";

export default function Navigation({inoDef}) {
    return <div className="navigation" onClick={()=>inoDef(false)}>
        <Sidebar inoDef={inoDef} />
    </div>
}