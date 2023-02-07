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
                        {/* <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/html-5.png" alt="html" /></li> */}
                        {/* <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/css3.png" alt="css" /></li> */}
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/javascript.png" alt="javascript" /></li>
                        {/* <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/c-plus-plus-logo.png" alt="c++" /></li> */}
                        {/* <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/java-coffee-cup-logo.png" alt="java" /></li> */}
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/react-native.png" alt="react" /></li>
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/python.png" alt="python" /></li>
                        {/* <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/nolan/256/lua-language.png" alt="lua" /></li> */}
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/postgreesql.png" alt="postgresql" /></li>
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/mongodb.png" alt="mongodb" /></li>
                        {/* <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/flask.png" alt="flask" /></li> */}
                        {/* <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/nodejs.png" alt="node js" /></li> */}
                        {/* <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/express-js.png" alt="express js" /></li> */}
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/github.png" alt="github" /></li>
                        <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/bootstrap.png" alt="bootstrap" /></li>
                        {/* <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/tailwindcss.png" alt="tailwind css" /></li> */}
                        {/* <li className="skillItem"><img className="skillIcon" src="https://play-lh.googleusercontent.com/WVl18ugl3adNd8rjRQUJwnmt5VeiSf-7GSv7Fae8vbKywECFwsYXbD43buTZCmAR11ht" alt="fusion 360" /></li> */}
                        {/* <li className="skillItem"><img className="skillIcon" src="https://img.icons8.com/color/256/arduino.png" alt="arduino" /></li> */}
                    </ul>
                </div>
                <div className="skillsSmallScreen" hidden>
                    <h1 className="skillsHeader">Skills</h1>
                    <ul>
                        {/* <li>HTML</li> */}
                        {/* <li>CSS</li> */}
                        <li>JavaScript</li>
                        <li>React </li>
                        <li>React Native </li>
                        <li>Python</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Flask</li>
                        <li>NodeJS</li>
                        {/* <li>ExpressJS</li> */}
                        <li>Github</li>
                        <li>Bootstrap</li>
                    </ul>

                </div>
        </section>
    )
}

export default AboutMe