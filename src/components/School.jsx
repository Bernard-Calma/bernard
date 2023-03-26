import "./School.css"
import SchoolProject from "./SchoolProject"

const School = (props) => {
    return(
        <div className="divSchool">
            <img className="schoolLogo" src={props.school.image} alt={props.school.name} />
            <div className="schoolInfo">
                <h2 className="schoolName">{props.school.name}</h2>
                <p className="course">{`${props.school.course}(${props.school.degree})`}</p>
                <p className = "yearGraduated">{props.school.yearGraduate}</p>
                <p className = "courseDescription">{props.school.description}</p>
                { props.school.projects.map((project, index) => 
                    <SchoolProject 
                        key={index}
                        project={project}
                    />
                )}
            </div>
        </div>
    )
}

export default School