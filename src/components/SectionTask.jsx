import { IoIosAdd } from "react-icons/io";

function SectionTask(){
    return ( <>
        <div className="section-task-layout">
            <ul className="task-ul">
                <li className="add-task-li">
                    <input type="text" className="task-title" placeholder="Add a section task name..."/>
                    <IoIosAdd size="2.7em" color="gray" className="add-icon-li"/>
                </li>
                <li className="task-li">
                    
                </li>
            </ul>
        </div>
        </>
    )
}

export default SectionTask;