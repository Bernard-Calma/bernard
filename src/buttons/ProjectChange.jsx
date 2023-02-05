import "./ProjectChange.css"

const ProjectChange = (props) => {
    return (
        <div className="divProjectChange" >
            { props.direction === "previous" ?
                <img 
                src="/images/buttonPrevious.png" 
                className="buttonPrevious"
                alt="Button Previous"
                onClick={props.previousProject}
                />
                : 
                <img 
                src="/images/buttonNext.png" 
                className="buttonNext"
                alt="Button Next"
                onClick={props.nextProject}
                />
            }
            
        </div>
    )
}

export default ProjectChange