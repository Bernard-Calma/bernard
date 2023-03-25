import { useState } from "react"

const Skills = () => {
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
            imageLink: "images/skills/reactRouter.png"
        }, 
        {
            skill: "React Native",
            imageLink: "images/skills/reactNative.png"
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
            skill: "NoSQL",
            imageLink: "https://img.icons8.com/external-outline-black-m-oki-orlando/256/external-nosql-database-outline-outline-black-m-oki-orlando.png"
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
            skill: "ExpressJS",
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
        },
        {
            skill: "EJS",
            imageLink: "images/skills/ejs.png"
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
        "NoSQL",
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
    return(
        <section className="aboutMeSkills reveal">
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
        </section>
    )
}

export default Skills