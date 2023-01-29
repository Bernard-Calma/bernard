const School = (props) => {
    return(
        <div className="divSchool">
            <h2 className="schoolName">{props.school.name}</h2>
            <img src={props.school.image} alt={props.school.name} />
        </div>
    )
}

export default School