

function ContainerList(){
    return  ( <>

        <div className="sub-title">  
            <h3>Your Projects: </h3>
        </div>
        <div className="proj-content">
            <ul className="proj-ul">
                <li className="proj-li"><p>To-Do WebApp</p></li>
                <li className="proj-li"><p>TypeGame</p></li>
                {/* <li className="proj-li"><p>Domani devo andare in palestra</p></li> */}
            </ul>
        </div>
        </>
    )
}

export default ContainerList;