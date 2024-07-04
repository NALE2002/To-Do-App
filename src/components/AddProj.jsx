import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

export default function AddProj( {onSubmit} ){

    const [newProj, setNewProj] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(newProj === "") return 
        
        onSubmit(newProj);

        setNewProj("");
    }
    
    return ( <>
        <form onSubmit={handleSubmit} className="input-space">
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
