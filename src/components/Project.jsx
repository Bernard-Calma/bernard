const Project = (props) => {
    return(
        <div className={`divProject ${props.index === props.show ? `active `: `hidden`}`}>
            <h2 className={`projectTitle`}>{props.project.name}</h2>
            <div className="containerImage">
                <a href={props.project.websiteLink} target={'_blank'} rel={'noreferrer'}><img className="projectImage" src={props.project.screenshot} alt={props.project.name}/></a>
            </div>
            <p className="projectSummary">{props.project.summary}</p>
            <ul className="skillList">
                {props.project.skills.map((skill, index) => <li className="skillItem" key={index}>{skill}</li>)}
            </ul>
        </div>
    )
}

export default Project;