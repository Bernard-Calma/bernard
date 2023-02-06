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
            name: "Robert Half",
            companyLogo: "https://www.roberthalf.com/themes/custom/rhalf/assets/images/robert-half-social-logo.gif",
            positions: [
                {
                    name: "Field Service Technician",
                    monthStarted: "October",
                    yearStarted: "2021",
                    monthEnded:"November",
                    yearEnded: "2022",
                    jobDescriptions: [
                        "Presidential Election 2020",
                        "California Gubernatorial Recall Election",
                        "June 2022 California Primary Election",
                        "2022 United States elections (Roaming Field Service Technician)"
                    ],
                },
            ]
        },  
        {
            name: "Turner Techtronics",
            companyLogo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/omvytbar9uxf3xylpzya",
            positions: [
                {
                    name: "Domain Migration Technician",
                    monthStarted: "March",
                    yearStarted: "2014",
                    monthEnded:"July",
                    yearEnded: "2017",
                    jobDescriptions: [
                        "Handled the migration of all client’s company owned equipment to their new domain.",
                        "Reached out to employees to set up a remote appointment to schedule the migration of their machine/s. ",
                        "Remoted into client’s mac/windows to install required applications and files to run scripts that moves the machine/s and user’s profile to the new domain.",
                        "Troubleshoot and fix any pre and post migration issue to make sure that all files and applications that the client uses are all working and error free.",
                    ],
                },
            ]
        },  
        {
            name: "Sutherland Global Services",
            companyLogo: "https://remoteco.s3.amazonaws.com/wp-content/uploads/2015/12/sutherland.jpg",
            positions: [
                {
                    name: "Subject Matter Expert",
                    monthStarted: "March",
                    yearStarted: "2014",
                    monthEnded:"July",
                    yearEnded: "2017",
                    jobDescriptions: [
                        "Provided support and management to different teams and projects to improve service level for different accounts.",
                        "Supervised meetings/huddles with different teams to provide action plans and coachings to improve the team's stats",
                        "Collaborated with upper management and other departments to analyze data and process quality to make sure it meets the client’s requirements and exceeds expectations.",
                        "Handled customer’s issues and concerns regarding their Internet, Analog/Digital Phone and TV and provided troubleshooting steps to resolve any issue.",
                    ],
                },
                {
                    name: "Associate Lead Programmer",
                    monthStarted: "August",
                    yearStarted: "2017",
                    monthEnded:"Feb",
                    yearEnded: "2018",
                    jobDescriptions: [
                        "Created an app that automates 10+ web tools into one single page application and runs simultaneously by one button.",
                        "Collaborated with management and other departments for the development and deployment process of the app.",
                        "Conducted alpha and beta test for deployment and trained user to utilize tool",
                        "Improved application performance, analyzed feedback and test results and fixed issue and bugs",
                    ],
                },
            ]
        },  
    ])

    const handleChangeDisplay = (display) => {
        if (display === 0) setDisplay(0)
        else setDisplay(1);
    }

    return (
        <section className="sectionExperience" id="idExperience">
            <h1>EXPERIENCE</h1>
            <h2><span onClick={() => handleChangeDisplay(0)}>Education</span> | <span onClick={() => handleChangeDisplay(1)}>Professional</span></h2> 
            
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