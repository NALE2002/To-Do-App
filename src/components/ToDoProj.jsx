import { NavLink } from "react-router-dom";

export function ToDoProj( {title} ) {

    return ( <>
        <li 
            className="proj-li"
        >

        <NavLink
            to= "/"
            className={({ isActive }) => 
                (
                    isActive ? 'active' : ''
                )
            }
        >

            <p>{title}</p>

        </NavLink>

        </li>
    </>
    )
}