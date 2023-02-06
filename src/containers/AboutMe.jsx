import "./AboutMe.css"

const AboutMe = () => {
    return (
        <section className="sectionAboutMe" id="idAboutMe">
                <div className="aboutMe">
                    <h1 className = "aboutMeName">Hi! I'm Bernard Calma</h1>
                    <h2 className = "aboutMeOccupation">I'm a Software Engineer</h2>
                    <p className="introduction">More than 1 year of experience in Full Stack Development (React, Node, Python, Flask, SQL and NoSQL) and 10 years of experience in the IT Industry(Desktop Support, Field Services) in different line of business(Telco, Retail, Media). Expert in hardware/software troubleshooting, analysis, advanced resolution procedures and complex problem solving. Skilled in Six Sigma, Cloud Computing, Team/Project Management and Automation.</p>
                </div>
                <img className="personalImage" src="images/ProfileImage.jpg" alt="Bernard Calma"/>              
                <div className="aboutMeSkills">
                    <h1 className="skillsHeader">Skills</h1>
                    <ul className="skillsList">
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/react-native.png" alt="react" /></li>
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/css3.png" alt="css" /></li>
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/javascript.png" alt="javascript" /></li>
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/python.png" alt="python" /></li>
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/postgreesql.png" alt="postgresql" /></li>
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/mongodb.png" alt="mongodb" /></li>
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/flask.png" alt="flask" /></li>
                    </ul>
                </div>
        </section>
    )
}

export default AboutMe