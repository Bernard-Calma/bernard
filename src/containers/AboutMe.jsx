import { useState } from "react"
import "./AboutMe.css"

const AboutMe = () => {
    const [skillsList] = useState([
        {
            skill: "React",
            imageLink: "https://img.icons8.com/color/256/react-native.png",
        },
        {
            skill: "Redux",
            imageLink: "https://img.icons8.com/color/256/redux.png"
        },
        {
            skill: "React Router",
            imageLink: "https://o.remove.bg/downloads/e887207c-7600-4048-8208-192d60c6b1bd/1_F1iFV5NTRN9YrAIC2VtFaA-removebg-preview.png"
        }, 
        {
            skill: "React Native",
            imageLink: "https://o.remove.bg/downloads/452365ba-1a84-4209-bd42-b0e80042df35/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy-removebg-preview.png"
        },
        {
            skill: "NodeJS",
            imageLink: "https://img.icons8.com/color/256/nodejs.png",
        },
        {
            skill: "JavaScript",
            imageLink: "https://img.icons8.com/color/256/javascript.png",
        },
        {
            skill: "jQuery",
            imageLink: "https://img.icons8.com/ios-filled/256/jquery.png"
        },
        {
            skill: "Python",
            imageLink: "https://img.icons8.com/color/256/python.png",
        },
        {
            skill: "Github",
            imageLink: "https://img.icons8.com/color/256/github.png",
        },
        {
            skill: "Flask",
            imageLink: "https://img.icons8.com/color/256/flask.png",
        },
        {
            skill: "Django",
            imageLink: "https://img.icons8.com/ios/256/django.png",
        },
        {
            skill: "Java",
            imageLink: "https://img.icons8.com/color/256/java-coffee-cup-logo.png",
        },
        {
            skill: "Lua",
            imageLink: "https://img.icons8.com/nolan/256/lua-language.png",
        },
        {
            skill: "SQL",
            imageLink: "https://img.icons8.com/external-soft-fill-juicy-fish/256/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png"
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
            skill: "Access",
            imageLink: "https://img.icons8.com/color/256/microsoft-access-2019.png"
        },
        {
            skill: "ExpresJS",
            imageLink: "https://img.icons8.com/color/256/express-js.png",
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
            imageLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/464bfb9c-9a76-465b-b539-f36ab9f06047/ddhhv4r-ef877702-5764-4670-bb52-eb514ecd60ed.png/v1/fill/w_512,h_512,strp/fusion_360_honeycomb_icon_by_freddiderfred_ddhhv4r-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNDY0YmZiOWMtOWE3Ni00NjViLWI1MzktZjM2YWI5ZjA2MDQ3XC9kZGhodjRyLWVmODc3NzAyLTU3NjQtNDY3MC1iYjUyLWViNTE0ZWNkNjBlZC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5ID_baqEggkjJcu_NIXYHP5bpVtj7J8DJCQ4OYOZVz4",
        },
        {
            skill: "Arduino",
            imageLink: "https://img.icons8.com/color/256/arduino.png",
        },
        {
            skill: "C#",
            imageLink: "https://img.icons8.com/color/256/c-sharp-logo-2.png",
        },
        {
            skill: "C++",
            imageLink: "https://img.icons8.com/color/256/c-plus-plus-logo.png",
        },
        {
            skill: "Visual Basic",
            imageLink: "https://upload.wikimedia.org/wikipedia/en/e/e4/Visual_Basic_6.0_logo.png"
        },
        {
            skill: "HTML",
            imageLink: "https://img.icons8.com/color/256/html-5.png",
        },
        {
            skill: "CSS",
            imageLink: "https://img.icons8.com/color/256/css3.png",
        },
        {
            skill: "JSON",
            imageLink: "https://img.icons8.com/external-soft-fill-juicy-fish/256/external-json-microservices-soft-fill-soft-fill-juicy-fish.png"
        },
        {
            skill: "MySQL",
            imageLink: "https://img.icons8.com/fluency/256/mysql-logo.png"
        }
    ])

    const [programingLanguages] = useState([
        "JavaScript",
        "Python",
        "Java",
        "C#",
        "C++",
        "Visual Basic",
        "SQL",
        "NoSql",
        "HTML",
        "CSS",
        'Lua'
    ])

    const [libraries] = useState([
        "React",
        "React Router",
        "JSON",
        "jQuery"
    ])

    const [frameworks] = useState([
        "React Native",
        "Redux",
        "Bootstrap",
        "ExpressJS",
        "Flask",
        "Django",
        "EJS"
    ])

    const [databases] = useState([
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'Access'
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
                        <h2>Languages</h2>
                        <div className="skillsSubList">
                            { skillsList.map((skill, index) => 
                                //Return skill list if included in language array
                                programingLanguages.some(val => val === skill.skill)
                                ?
                                <li className="skillItem"><img className="skillIcon" src={skill.imageLink} alt={skill.skill} /></li>
                                :<></>
                            )}
                        </div>
                        <h2>Frameworks</h2>
                        <div className="skillsSubList">
                            { skillsList.map((skill, index) => 
                                // Return library list if included in language array
                                frameworks.some(val => val === skill.skill)
                                ?
                                <li className="skillItem"><img className="skillIcon" src={skill.imageLink} alt={skill.skill} /></li>
                                :<></>
                            )}
                        </div>
                        <h2>Libraries</h2>
                        <div className="skillsSubList">
                            { skillsList.map((skill, index) => 
                                // Return library list if included in language array
                                libraries.some(val => val === skill.skill)
                                ?
                                <li className="skillItem"><img className="skillIcon" src={skill.imageLink} alt={skill.skill} /></li>
                                :<></>
                            )}
                        </div>
                        <h2>Databases</h2>
                        <div className="skillsSubList">
                            { skillsList.map((skill, index) => 
                                // Return library list if included in language array
                                databases.some(val => val === skill.skill)
                                ?
                                <li className="skillItem"><img className="skillIcon" src={skill.imageLink} alt={skill.skill} /></li>
                                :<></>
                            )}
                        </div>
                    </ul>
                </div>
        </section>
    )
}

export default AboutMe