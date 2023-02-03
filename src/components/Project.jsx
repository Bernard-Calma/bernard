import ProjectChange from "../buttons/ProjectChange";

const Project = (props) => {

    const handleChangeProject = () => {
        console.log(this)
    }
    return(
        <div className={`divProject ${props.index === 0 ? "" : "hidden"}`}>
            <h2 className="projectTitle">{props.project.name}</h2>
            <div className="containerImage">
                <ProjectChange 
                
                />
                <img className="projectImage" src={props.project.screenshot} alt={props.project.name} />
                <ProjectChange 
                    className = "buttonPrevious"
                    onClick = {() => handleChangeProject}
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