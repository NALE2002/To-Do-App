import AddProj from "./AddProj";
import { ProjectsList } from "./ProjectsList";
import Socials from "./Socials";
import { BsList } from "react-icons/bs";
import { useState } from "react";

function SideNav(){

    const [proj, setProj] = useState([]);
    
    function addProj(title){
        setProj((currentProj) => {
            return [
                ...currentProj,
                {id: crypto.randomUUID(), title},
            ]
        })
    }

    return (
        <>
            <div className="side-nav">
                <div className="header">
                    <h4>Menu</h4>
                    <BsList size="2.4em" className="list-icon"/>
                </div>
                <AddProj onSubmit={addProj}/>
                <ProjectsList proj={proj}/>
                <Socials />
            </div>
        </>
    )
}


export default SideNav;