import { Link } from "react-router-dom";
import { sidebar } from "../../database/db.navigaition";

export default function Sidebar({inoDef}) {
    return <div className="sidebar">
        {
            sidebar.map((e, i)=>{
                return <Link to={e.url} className="sidebar-link" key={i} onClick={()=>inoDef(false)}>
                    {e.title}
                    {e.icon}
                </Link>
            })
        }
    </div>
}