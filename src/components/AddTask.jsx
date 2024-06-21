import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";


export default function AddTask(){

    const [newProj, setNewProj] = useState("");

    return ( <>
        <form class="input-space">
            <input 
                value= {newProj}
                onChange={e => setNewProj(e.target.value)}
                type="text" 
                className="input-task" 
                placeholder="Add a new Project..."
            />
            <CiCirclePlus size="1.7em" className="icon-search"/>
        </form>
        <div className="border"/>
        </>
    )
}
