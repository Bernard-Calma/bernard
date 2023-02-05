import ProjectChange from "../buttons/ProjectChange";

const Project = (props) => {
    return(
        <div className={`divProject ${props.index === 0 ? "" : "hidden"}`}>
            <h2 className="projectTitle">{props.project.name}</h2>
            <div className="containerImage">
                <ProjectChange 
                    direction = "previous"
                />
                <img className="projectImage" src={props.project.screenshot} alt={props.project.name}/>
                <ProjectChange 
                    direction = "next"
                />
            </div>
            <p className="projectSummary">{props.project.summary}</p>
            <ul className="skillList">
                {props.project.skills.map((skill, index) => <li className="skillItem" key={index}>{skill}</li>)}
            </ul>
        </div>
    )
}

export default Project;