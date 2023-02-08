import "./Work.css"

const Work = (props) => {
    return (
        <div className="divWork">
            <img className="companyLogo" src={props.work.companyLogo} alt={props.work.name} />
            <div className="workInfo">
                <h2 className="companyName">{props.work.name}</h2>
                {props.work.positions.map((position, index) =>
                    <div className="containerPosition" key={index}>
                        <p className="position">{position.name} ({position.monthStarted} {position.yearStarted} - {position.monthEnded}{position.yearEnded? ` ${position.yearEnded}`: ``})</p>
                        <ul>
                            {
                                position.jobDescriptions.map((description, index) => 
                                <li className = "jobDescription" key={index}>{description}</li>
                                )
                            }
                        </ul>

                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Work;