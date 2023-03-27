const Project = (props) => {
    return <div className="containerProject">
        <img className="projectImage" src={props.project.screenshot} alt={props.project.name}/>
        <div className="projectDetails">
            <img className="projectImageLarge" src={props.project.screenshot} alt={props.project.name}/>
            <h2 className={`projectTitle`}>{props.project.name}</h2>
            <div className="containerImage">
                <a href={props.project.websiteLink} target={'_blank'} rel={'noreferrer'} className="projectLink">Link Here</a>
            </div>
            <p className="projectSummary">{props.project.summary}</p>
            <ul className="skillList">
                {props.project.skills.map((skill, index) => <li className="skillItem" key={index}>{skill}</li>)}
            </ul>
        </div>
    </div>
}

export default Project;