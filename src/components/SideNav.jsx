import ContainerList from "./ContainerList";
import Socials from "./Socials";
import AddTask from "./AddProj";
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
                <ContainerList />
                <Socials />
            </div>
        </>
    )
}


export default SideNav;