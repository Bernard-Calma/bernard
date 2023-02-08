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
                    <p className="introduction">More than 1 year of experience in Full Stack Development (<span>React</span>, <span>Node</span>, <span>Python</span>, <span>Express</span>, <span>Flask</span>, <span>SQL</span> and <span>NoSQL</span>) and 10 years of experience in the IT Industry(Desktop Support, Field Services) in different line of business(Telco, Retail, Media). Expert in hardware/software troubleshooting, analysis, advanced resolution procedures and complex problem solving. Skilled in Six Sigma, Cloud Computing, Team/Project Management and Automation.</p>
                </div>
                <img className="personalImage" src="images/ProfileImage.jpg" alt="Bernard Calma"/>              
                <div className="aboutMeSkills">
                    <h1 className="skillsHeader">Skills</h1>
                    <ul className="skillsList">
                        { skillsList.map((skill, index) => 
                            <li className="skillItem"><img className="skillIcon" src={skill.imageLink} alt={skill.skill} /></li>
                        )}
                    </ul>
                </div>
        </section>
    )
}

export default AboutMe