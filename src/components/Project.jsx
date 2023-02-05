import ProjectChange from "../buttons/ProjectChange";

const Project = (props) => {
    return(
        <div className={`divProject ${props.index === 0 ? "" : "hidden"}`}>
            <h2 className="projectTitle">{props.project.name}</h2>
            <div className="containerImage">
                <ProjectChange 
                    direction = "previous"
                    index = {props.index}
                    changeProject = {props.changeProject}
                />
                <img className="projectImage" src={props.project.screenshot} alt={props.project.name}/>
                <ProjectChange 
                    direction = "next"
                    index = {props.index}
                    changeProject = {props.changeProject}
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