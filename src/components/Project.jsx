const Project = (props) => {
    return <img className="projectImage" src={props.project.screenshot} alt={props.project.name}/>
}

export default Project;