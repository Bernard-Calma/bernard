import "./ProjectChange.css"

const ProjectChange = (props) => {
    const handleChangeProject = () => {
        console.log("click")
    }
    return (
        <div className="divProjectChange" >
            { props.direction === "previous" ?
                <img 
                src="/images/buttonPrevious.png" 
                className="buttonPrevious"
                alt="Button Previous"
                onClick={handleChangeProject}
                />
                : 
                <img 
                src="/images/buttonNext.png" 
                className="buttonNext"
                alt="Button Next"
                onClick={handleChangeProject}
                />
            }
            
        </div>
    )
}

export default ProjectChange