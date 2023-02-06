import "./Work.css"

const Work = (props) => {
    return (
        <div className="divWork">
            <img className="companyLogo" src={props.work.companyLogo} alt={props.work.name} />
            <div className="workInfo">
                <h2 className="companyName">{props.work.name}</h2>
                {props.work.positions.map((position, index) =>
                    <div className="containerPosition">
                        <p className="position">{position.name} (<span className = "yearWorked">{position.yearStarted} - {position.yearEnded})</span></p>
                        <p className = "jobDescription">{position.jobDescription}</p>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Work;