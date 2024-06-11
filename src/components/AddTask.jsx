import { CiCirclePlus } from "react-icons/ci";

function AddTask(){
    return ( <>
        <div class="input-space">
            <input type="text" className="input-task" placeholder="Add a new Project..."/>
            <CiCirclePlus size="1.7em" className="icon-search"/>
        </div>
        </>
    )
}

export default AddTask;