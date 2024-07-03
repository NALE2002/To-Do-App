import { ToDoProj } from "./ToDoProj"

export function ProjectsList({ proj }){
    return  ( <>
    
        <div className="sub-title">  
            <h4>Your Projects: </h4>
        </div>
        <div className="proj-content">
            <ul className="proj-ul">
                {proj.map(project => {
                    return ( 
                        <ToDoProj 
                            {...project}
                            key={project.id}
                        />  
                    )
                })}
            </ul>
        </div>
        </>
    )
}
