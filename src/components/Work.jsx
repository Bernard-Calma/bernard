const Work = (props) => {
    return (
        <div className="divWork">
            <img className="companyLogo" src={props.work.companyLogo} alt={props.work.name} />
            <div className="workInfo">
                <h2 className="companyName">{props.work.name}</h2>
                <p className="position">{props.work.position}</p>
                <p className = "yearWorked">{props.work.yearStarted} - {props.work.yearEnded}</p>
                <p className = "jobDescription">{props.work.jobDescription}</p>
            </div>
        </div>
    )
}

export default Work;