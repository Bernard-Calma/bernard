import { useState } from "react"
import "./AboutMe.css"

const AboutMe = () => {
    const [skillsList] = useState([
        {
            skill: "HTML",
            imageLink: "https://img.icons8.com/color/256/html-5.png",
        },
        {
            skill: "CSS",
            imageLink: "https://img.icons8.com/color/256/css3.png",
        },
        {
            skill: "JavaScript",
            imageLink: "https://img.icons8.com/color/256/javascript.png",
        },
        {
            skill: "C++",
            imageLink: "https://img.icons8.com/color/256/c-plus-plus-logo.png",
        },
        {
            skill: "Java",
            imageLink: "https://img.icons8.com/color/256/java-coffee-cup-logo.png",
        },
        {
            skill: "Phyton",
            imageLink: "https://img.icons8.com/color/256/python.png",
        },
        {
            skill: "React",
            imageLink: "https://img.icons8.com/color/256/react-native.png",
        },
        {
            skill: "lua",
            imageLink: "https://img.icons8.com/nolan/256/lua-language.png",
        },
        {
            skill: "PostgreSQL",
            imageLink: "https://img.icons8.com/color/256/postgreesql.png",
        },
        {
            skill: "MongoDB",
            imageLink: "https://img.icons8.com/color/256/mongodb.png",
        },
        {
            skill: "Flask",
            imageLink: "https://img.icons8.com/color/256/flask.png",
        },
        {
            skill: "NodeJS",
            imageLink: "https://img.icons8.com/color/256/nodejs.png",
        },
        {
            skill: "ExpresJS",
            imageLink: "https://img.icons8.com/color/256/express-js.png",
        },
        {
            skill: "Github",
            imageLink: "https://img.icons8.com/color/256/github.png",
        },
        {
            skill: "Bootstrap",
            imageLink: "https://img.icons8.com/color/256/bootstrap.png",
        },
        {
            skill: "Tailwind CSS",
            imageLink: "https://img.icons8.com/color/256/tailwindcss.png",
        },
        {
            skill: "Fusion360",
            imageLink: "https://play-lh.googleusercontent.com/WVl18ugl3adNd8rjRQUJwnmt5VeiSf-7GSv7Fae8vbKywECFwsYXbD43buTZCmAR11ht",
        },
        {
            skill: "Arduino",
            imageLink: "https://img.icons8.com/color/256/arduino.png",
        },
    ])


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
                    <ul className="skillsList">
                        {/* <li className="skillItem">HTML</li> */}
                        {/* <li className="skillItem">CSS</li> */}
                        <li className="skillItem">JavaScript</li>
                        <li className="skillItem">React </li>
                        <li className="skillItem">React Native </li>
                        <li className="skillItem">Python</li>
                        <li className="skillItem">PostgreSQL</li>
                        <li className="skillItem">MongoDB</li>
                        <li className="skillItem">Flask</li>
                        <li className="skillItem">NodeJS</li>
                        {/* <li className="skillItem">ExpressJS</li> */}
                        <li className="skillItem">Github</li>
                        <li className="skillItem">Bootstrap</li>
                    </ul>
                </div>
        </section>
    )
}

export default AboutMe