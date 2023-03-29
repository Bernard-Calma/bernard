import { useState } from "react"
import SkillIcon from "../components/SkillIcon"

const Skills = () => {
    const [skillsList] = useState([
        {
            id: 0,
            skill: "React",
            imageLink: "https://img.icons8.com/color/256/react-native.png",
            category: "Library"
        },
        {
            id: 1,
            skill: "Redux",
            imageLink: "https://img.icons8.com/color/256/redux.png",
            category: "Framework"
        },
        {
            id: 2,
            skill: "React Router",
            imageLink: "images/skills/reactRouter.png",
            category: "Library"
        }, 
        {
            id: 3,
            skill: "React Native",
            imageLink: "images/skills/reactNative.png",
            category: "Framework"
        },
        {
            id: 4,
            skill: "NodeJS",
            imageLink: "https://img.icons8.com/color/256/nodejs.png",
        },
        {
            id: 5,
            skill: "JavaScript",
            imageLink: "https://img.icons8.com/color/256/javascript.png",
            category: "Programming Language"
        },
        {
            id: 6,
            skill: "jQuery",
            imageLink: "https://img.icons8.com/ios-filled/256/jquery.png",
            category: "Library"
        },
        {
            id: 7,
            skill: "Python",
            imageLink: "https://img.icons8.com/color/256/python.png",
            category: "Programming Language"
        },
        {
            id: 8,
            skill: "Github",
            imageLink: "https://img.icons8.com/color/256/github.png",
        },
        {
            id: 9,
            skill: "Flask",
            imageLink: "images/skills/flask.png",
            category: "Framework"
        },
        {
            id: 10,
            skill: "Django",
            imageLink: "images/skills/django.png",
            category: "Framework"
        },
        {
            id: 11,
            skill: "Java",
            imageLink: "https://img.icons8.com/color/256/java-coffee-cup-logo.png",
            category: "Programming Language"
        },
        {
            id: 12,
            skill: "Lua",
            imageLink: "https://img.icons8.com/nolan/256/lua-language.png",
            category: "Programming Language"
        },
        {
            id: 13,
            skill: "SQL",
            imageLink: "https://img.icons8.com/external-soft-fill-juicy-fish/256/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png",
            category: "Programming Language"
        },
        {
            id: 14,
            skill: "NoSQL",
            imageLink: "images/skills/nosql.png",
            category: "Programming Language"
        },
        {
            id: 15,
            skill: "PostgreSQL",
            imageLink: "https://img.icons8.com/color/256/postgreesql.png",
            category: "Database"
        },
        {
            id: 16,
            skill: "MongoDB",
            imageLink: "https://img.icons8.com/color/256/mongodb.png",
            category: "Database"
        },
        {
            id: 17,
            skill: "Access",
            imageLink: "https://img.icons8.com/color/256/microsoft-access-2019.png",
            category: "Database"
        },
        {
            id: 18,
            skill: "ExpressJS",
            imageLink: "images/skills/express.png",
            category: "Framework"
        },
        {
            id: 19,
            skill: "Bootstrap",
            imageLink: "https://img.icons8.com/color/256/bootstrap.png",
            category: "Framework"
        },
        {
            id: 20,
            skill: "Tailwind CSS",
            imageLink: "https://img.icons8.com/color/256/tailwindcss.png",
        },
        {
            id: 21,
            skill: "Fusion360",
            imageLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/464bfb9c-9a76-465b-b539-f36ab9f06047/ddhhv4r-ef877702-5764-4670-bb52-eb514ecd60ed.png/v1/fill/w_512,h_512,strp/fusion_360_honeycomb_icon_by_freddiderfred_ddhhv4r-fdivlview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNDY0YmZiOWMtOWE3Ni00NjViLWI1MzktZjM2YWI5ZjA2MDQ3XC9kZGhodjRyLWVmODc3NzAyLTU3NjQtNDY3MC1iYjUyLWViNTE0ZWNkNjBlZC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5ID_baqEggkjJcu_NIXYHP5bpVtj7J8DJCQ4OYOZVz4",
            category: "Other"
        },
        {
            id: 22,
            skill: "Arduino",
            imageLink: "https://img.icons8.com/color/256/arduino.png",
            category: "Framework"
        },
        {
            id: 23,
            skill: "C#",
            imageLink: "https://img.icons8.com/color/256/c-sharp-logo-2.png",
            category: "Programming Language"
        },
        {
            id: 24,
            skill: "C++",
            imageLink: "https://img.icons8.com/color/256/c-plus-plus-logo.png",
            category: "Programming Language"
        },
        {
            id: 25,
            skill: "Visual Basic",
            imageLink: "https://upload.wikimedia.org/wikipedia/en/e/e4/Visual_Basic_6.0_logo.png",
            category: "Programming Language"
        },
        {
            id: 26,
            skill: "HTML",
            imageLink: "https://img.icons8.com/color/256/html-5.png",
            category: "Programming Language"
        },
        {
            id: 27,
            skill: "CSS",
            imageLink: "https://img.icons8.com/color/256/css3.png",
            category: "Programming Language"
        },
        {
            id: 28,
            skill: "JSON",
            imageLink: "images/skills/json.png",
            category: "Library"
        },
        {
            id: 29,
            skill: "MySQL",
            imageLink: "images/skills/mysql.png",
            category: "Database"
        },
        {
            id: 30,
            skill: "EJS",
            imageLink: "images/skills/ejs.png",
            category: "Framework"
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
        <div className="aboutMeSkills">
            <h1 className="skillsHeader">Skills</h1>
            <div className="skillsList">
                <h2>Languages</h2>
                <div className="skillsSubList">
                    { skillsList.map(skill => 
                        //Return skill list if included in language array
                        programingLanguages.some(val => val === skill.skill)
                        ?
                        <SkillIcon 
                            skill = {skill}
                            key={skill.id}
                        />       
                        :<></>
                    )}
                </div>
                <h2>Frameworks</h2>
                <div className="skillsSubList">
                    { skillsList.map(skill => 
                        // Return library list if included in language array
                        frameworks.some(val => val === skill.skill)
                        ?
                        <SkillIcon 
                            skill = {skill}
                            key={skill.id}
                        /> 
                        :<></>
                    )}
                </div>
                <h2>Libraries</h2>
                <div className="skillsSubList">
                    { skillsList.map(skill => 
                        // Return library list if included in language array
                        libraries.some(val => val === skill.skill)
                        ?
                        <SkillIcon 
                            skill = {skill}
                            key={skill.id}
                        /> 
                        :<></>
                    )}
                </div>
                <h2>Databases</h2>
                <div className="skillsSubList">
                    { skillsList.map(skill => 
                        // Return library list if included in language array
                        databases.some(val => val === skill.skill)
                        ?
                        <SkillIcon 
                            skill = {skill}
                            key={skill.id}
                        /> 
                        :<></>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills