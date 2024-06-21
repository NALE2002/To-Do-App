import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { TiThLarge } from "react-icons/ti";


export default function AddTask(){

    const [newItem, setNewItem] = useState("");
    const [newProj, setNewProj] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        setNewProj((currentProj) => {
            return [
                ...currentProj,
                {id: crypto.randomUUID(), title: newItem},
            ]
        })
    }

    console.log(newProj);
    // setNewProj("");

    return ( <>
        <form onSubmit={handleSubmit} className="input-space">
            <input 
                value= {newItem}
                onChange={e => setNewItem(e.target.value)}
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
