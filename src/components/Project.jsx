const Project = (props) => {
    return(
        <div className="divProject">
            <h2 className="projectTitle">{props.project.name}</h2>
            <img className="projectImage" src={props.project.screenshot} alt={props.project.name} />
            <p className="projectSummary">{props.project.summary}</p>
            <ul className="skillList">
                {props.project.skills.map(skill => <li className="skillItem">{skill}</li>)}
            </ul>
        </div>
    )
}

export default Project;