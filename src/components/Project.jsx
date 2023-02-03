import ProjectChange from "../buttons/ProjectChange";

const Project = (props) => {
    return(
        <div className={`divProject ${props.index === 0 ? "" : "hidden"}`}>
            <h2 className="projectTitle">{props.project.name}</h2>
            <div className="containerImage">
                <ProjectChange />
                <img className="projectImage" src={props.project.screenshot} alt={props.project.name} />
                <ProjectChange 
                    className = "buttonPrevious"
                />
            </div>
            <p className="projectSummary">{props.project.summary}</p>
            <ul className="skillList">
                {props.project.skills.map(skill => <li className="skillItem">{skill}</li>)}
            </ul>
        </div>
    )
}

export default Project;