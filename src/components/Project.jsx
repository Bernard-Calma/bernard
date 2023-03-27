const Project = (props) => {
    return <div className="containerProject">
        <img className="projectImage" src={props.project.screenshot} alt={props.project.name}/>
    </div>
}

export default Project;