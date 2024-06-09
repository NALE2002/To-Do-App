// import { VscGithubAlt,VscAccount } from "react-icons/vsc";
import { FaUserCircle,FaGithub  } from "react-icons/fa";

function Socials(){
    return (
        <>
            <ul className="socials-ul">
                <li className="socials-li"><FaGithub className="icon" size="2rem"/></li>
                <li className="socials-li"><FaUserCircle className="icon" size="2rem"/></li>
            </ul>
        </>
    ) 
}

export default Socials;