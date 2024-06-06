import ContainerList from "./ContainerList";
import Socials from "./Socials";

function SideNav(){
    return (
        <>
            <div className="side-nav">
                <h1>To-Do WebApp</h1>
                <ContainerList/>
                <Socials/>
            </div>
        </>
    )
}


export default SideNav;