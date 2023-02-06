import { useState } from "react"
import School from "../components/School"
import Work from "../components/Work"
import "./Experience.css"

const Experience = () => {
    const [display, setDisplay] = useState(0)

    const [schools] = useState(
        [{
            name: "Arizona State University",
            course: "Software Engineering",
            degree: "BS",
            yearGraduate: "(Expected Garduation: 2026)",
            schoolWebsite: "https://engineering.asu.edu/",
            description: "- Software systems are complex, often including in excess of a million lines of code. Graduates of the BS in software engineering possess knowledge and skills of a defined engineering approach to complex systems analysis, planning, design and construction. The program has a unique, project-driven curriculum, establishing a new model of communication, teamwork, critical thinking and professionalism.",
            image: "images/education/ASU.png",    
            projects: [
                "Fire Fighter Swarm - ThinkerCAD, Fusion360, Arduino, C++"
            ]
          },
          {
            name: "General Assembly",
            course: "Software Engineering",
            degree: "Certificate",
            yearGraduate: "(Graduated: 2022)",
            schoolWebsite: "https://generalassemb.ly/",
            description: "- Software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developing a portfolio of individual and group projects.",
            image: "images/education/GA.png",    
            projects: [
                "Auction Hall (Auction Posting App) - React Native (iOS & android), PostgreSQL, Python, Flask, Javascript, CSS StyleSheets",
                "Streamin (Social Media Platform)- React, Mongodb, Express, NodeJS, HTML, CSS, Javascript",
                "Spentrace (Butgeting App) - EJS, MongoDB, Express, NodeJS, HTML, CSS, Javascript",
                "Floating Shoe Game - JavaScript, HTML Canvas, CSS",
                "Tamagotchi Game - JavaScript, HTML, CSS"
            ]
          },
          {
            name: "STI College Bacoor",
            course: "Computer Technology",
            degree: "AS",
            yearGraduate: "(Graduated: 2009)",
            schoolWebsite: "https://www.sti.edu/",
            description: "- Studied various programming methodologies, computer networks and concepts, basic computation, and data processing.",
            image: "images/education/STI.png",    
            projects: [
                "Social Media App - Java, NetBeans",
                "Hotel Room and Reservation System - VB.net, SQL, Microsoft Access",
                "Solar Powered Radio - Arduino,  C++",
            ]
          }]
    )

    const [works] = useState([
        {
            name: "Sutherland Global Services",
            companyLogo: "",
            position: "Subject Matter Expert",
            yearStarted: "2014",
            yearEnded: "2018",
            jobDescription: "Job Description",
        },
    ])

    const handleChangeDisplay = (display) => {
        if (display === 0) setDisplay(0)
        else setDisplay(1);
    }

    return (
        <section className="sectionExperience" id="idExperience">
            <h1>EXPERIENCE</h1>
            <h2><a onClick={() => handleChangeDisplay(0)}>Education</a> | <a onClick={() => handleChangeDisplay(1)}>Professional</a></h2> 
            
            {
                display === 0
                ?
                <>
                {schools.map((school, index) => 
                    <School 
                        key = {index}
                        school = {school}
                        index = {index}
                    />
                )}
                </>
                :
                <>
                {
                    works.map((work, index) => 
                        <Work 
                            key = {index}
                            index = {index}
                            work = {work}
                        />
                    )
                }
                </>
            }
            
        </section>
    )
}

export default Experience