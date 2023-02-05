import ProjectChange from "../buttons/ProjectChange";

const Project = (props) => {
    return(
        <div className={`divProject ${props.index === props.show ? "" : "hidden"}`}>
            <h2 className="projectTitle">{props.project.name}</h2>
            <div className="containerImage">
                <ProjectChange 
                    direction = "previous"
                    index = {props.index}
                    previousProject = {props.previousProject}
                />
                <img className="projectImage" src={props.project.screenshot} alt={props.project.name}/>
                <ProjectChange 
                    direction = "next"
                    index = {props.index}
                    nextProject = {props.nextProject}
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