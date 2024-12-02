import { IoIosAdd } from "react-icons/io";

function SectionTask(){
    return ( <>
        <div className="section-task-layout">
            <ul className="task-ul">
                <li className="task-li task">
                    <input type="text" className="task-title" placeholder="Add a section task name..."/>
                    <IoIosAdd size="2.7em" className="add-icon-li"/>
                </li>
                <li className="task-li">
                    <p>gdfgdfg</p>
                </li>
                <li className="task-li">
                    <p>gdfgdfg</p>
                </li>
                <li className="task-li">
                    <p>dfgdf</p>
                </li>
            </ul>
        </div>
        </>
    )
}

export default SectionTask;
