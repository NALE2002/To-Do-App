import ContainerList from "./ContainerList";
import Socials from "./Socials";
import AddTask from "./AddTask";
import { BsList } from "react-icons/bs";

function SideNav(){
    return (
        <>
            <div className="side-nav">
                <div className="header">
                    <h4>Menu</h4>
                    <BsList size="2.4em" className="list-icon"/>
                </div>
                <AddTask/>
                <ContainerList/>
                <Socials/>
            </div>
        </>
    )
}


export default SideNav;