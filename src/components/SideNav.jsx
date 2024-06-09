import ContainerList from "./ContainerList";
import Socials from "./Socials";

function SideNav(){
    return (
        <>
            <div className="side-nav">
                <h2>To-Do WebApp</h2>
                <ContainerList/>
                <Socials/>
            </div>
        </>
    )
}


export default SideNav;