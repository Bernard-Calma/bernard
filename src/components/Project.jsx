import ProjectChange from "../buttons/ProjectChange"

const Project = (props) => {

    const nextProject = () => {
        if(props.show === props.projects.length - 1){
            props.setShow(0)     
        } else props.setShow(props.show += 1)
        
    }

    const previousProject = () => {
        if(props.show === 0){
            props.setShow(props.projects.length-1)  
        } else props.setShow(props.show -= 1)
    }
    return <div className="containerProject">
                   
                 
        <img className="projectImage" src={props.project.screenshot} alt={props.project.name}/>
        {/* <div className="projectDetails">
            <ProjectChange 
                direction = "previous"
                previousProject = {previousProject}
            />
            <ProjectChange 
                direction = "next"
                nextProject = {nextProject}
            />
            <h2 className={`projectTitle`}>{props.project.name}</h2>
            <a href={props.project.websiteLink} target={'_blank'} rel={'noreferrer'} className="projectLink">Link Here</a>
            <img className="projectImageLarge" src={props.project.screenshot} alt={props.project.name}/>
            <p className="projectSummary">{props.project.summary}</p>
            <ul className="skillList">
                {props.project.skills.map((skill, index) => <li className="skillItem" key={index}>{skill}</li>)}
            </ul>
        </div> */}
    </div>
}

export default Project;