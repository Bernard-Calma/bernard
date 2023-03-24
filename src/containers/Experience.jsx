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
            description: `
            - Learned Principles of Programing, Object Oriented Programming, Data Structures and Java.
            - Learned System Design and construct an autonomous firefighter robot using Autodesk Fusion360 for 3D model, TinkerCAD for building circuit, Arduino for logic and MATLAB for simulations.
            `,
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
            description: `
            - Gained 450+ hours of experience focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. 
            - Developed a portfolio that includes individual and group projects that has been planned, designed and completed 3-4 days before deadlines.
            `,
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
            description: `
            - Studied various programming methodologies, computer networks and concepts, basic computation, and data processing.
            - Experienced building a social media application using Java and a full stack hotel reservation system using Visual Basic and Access.
            `,
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
            name: "CompuCom",
            companyLogo: "https://pbs.twimg.com/profile_images/1521524424981286919/jKZuKS3P_400x400.png",
            positions: [
                {
                    name: "Field Service Technician",
                    monthStarted: "August",
                    yearStarted: "2021",
                    monthEnded:"Current",
                    yearEnded: "",
                    jobDescriptions: [
                        "Manages preventive maintenance and incidents with little to no supervision for multiple stores.",
                        "Travels across the region and determine the best route to cover all assigned stores and issues the most efficient way.",
                        "Inspects and troubleshoots cash registers and peripherals, terminals, printers, phone, network equipment.",
                        "Assist the regional lead on training the new technicians and provide emergency services to store with critical issue/s."
                    ],
                },
            ]
        },  
        {
            name: "Robert Half",
            companyLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAAAkFBMVEWnCSX///+mACGhAACmASKwMUK1RlO1SFWvLD/06eqtJDixOEemAB7gu7+1S1flxcmiAAasHDOlABujABGjAAz68/TAaXP++vvMipGjABDy4uTaq7CkABbRlZzTnKKyPUzCcHm7V2Pw3N7gub2qFi7pz9LHfIS8X2nWo6jIg4rcsLXlxMjpzdDBbXe5VGDRmJ6v9CWqAAAE7UlEQVR4nO3d63aaQBiFYWDQqCFKAOMhGIwxqdG0vf+7q/YQtweYb3AIlrXfv1jW8CwdkMHGeWjXVKvr6mp97YienXbk1ZPSY6gvHVDQcW48p54kGF86IJ8Y+4gBEQMiBkQMiBgQMSBiQMSAiAERAyIGRAyIGBAxIGJAxICIAREDIgZEDIgYEDEgYkDEgIgBEQMiBkQMiBgQMSBiQMSAiAH9rxi+FwSe5/tWB1Q1hh/FoVJhMkmUOh55OYwg3e4wXXay7LbjpGq78ziyZFIpRpAo/+HpbjEcbY9rNFoejdkcw9sefH+83eHnC0bd15enh+WWx8JRGGH4ug5enKpsNcUjuxQjVffj1/OvGw7GPRVf+gYxwrjXtR+Nn0zGx8fqXILhT9TbovC105mjgq/C8HrasQf/DjeOV6dbL8GIk9lI+2p30L+Iwy7G35ksUONzW8tjRGosoNi16Kvyk0cVGKp9/ihLY6gf+ld+NnDi68Hw1VPO1pIYnnqUU+x6OzmJ14URxDkTflmMaDnVvuyowaTczGEbI+0Mc7eWwogz4WyBde+jK8CYtAu2lsFIvhkYQFlaO4bqF20tg1HSwnXbJTTsYmSFW0tgtMQHf/pPzT8pdjGKP94lMPInIP1YPOMLDrsYxZXAuKSF8c2QBmO4K1ONJmO4fcNpo9EYXcO3RqMx3FlCjH2B0beUhmM8hsTYZ3T/vOkYTxNifDYyOaE0HcN9MLjWaDzGwOCt0XgM1+B80nyMufzGRvMxNvLPSfMxhsSAbsW3yv8rjO5mNX6fv8/WuasR53oXTxoVY4wWg83Len23+Vh0y6zCQ9NxT6kk3RYnKvwu97gTn08qxBiuvy93z5KESRiqXcc7NMFYPB8+gRGpVvGa/L6peNKoDOPjhwqj4j0bYLypkwvJnNXtM9WNMW2fjr48xrB19iaNdFElk86g1WCsRI9JSDGGXg6scLltLv16UgnGXPbGFGKMnFzZ3AX/g35Kv8ZXgSG0kGLcFJwalWSFfi29E1oBxk/phCXDKFz9iG4Ee/iQDsg+hnwhS4ShuZpWgusN8bnVPkZPfPUrwngvfigpEsyh4m8n1jFe5N+LJBja23ZK/yyL+NafdYx7+dq3BONRN/mFL/qdSK/HbWOIJytHhtHWfejSuX4n0sf/bGOIL3Ac2fMZWlvJqI6/LudlG8PkzrwAQ3A7VzBp9IRHaBnj1TLGTP8OF1x33daDYbSAJcAQrHoIrjRuhGd7yxgmSzYSDMEtO7XR7qVfD4b00/nnMPQYnn7qC++uFcPoURk7P9i7Wgyz54YajmH2tGHDMUyuPxuPYbCU5xDjoIZjmDwMQYyDiAERAyIGRAyIGBAxIGJAxICIAREDIgZEDIgYEDEgYkDEgIgBEQMiBkQMiBgQMSBiQMSAiAERAyIGRAyIGBAxIGJAxICIAREDIgZEDIgYEDEgYkDEgIgBEQMiBkQMiBgQMSBiQMSAGo5h+IM9/d+okGDU8otnx8luNXWM/s9zr6XbXyYYmt/R7mUpHJARhqfL8K9UafcnGplvZS+/91Tjnyi9uogBEQMiBkQMiBgQMSBiQMSAiAERAyIGRAyIGBAxIGJAxICIAREDIgZEDIgYEDEgYkDEgIgBEQMiBkQMiBgQMSBiQMSAiAERAyIGRAyIGNAOI/DZ77yO89xpsT+1fwF11JpI1Qx18wAAAABJRU5ErkJggg==",
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
            companyLogo: "images/education/TurnerTechtronics.png",
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
            companyLogo: "https://o.remove.bg/downloads/d2ff073f-d590-4c80-934c-4546c6e7451c/images-removebg-preview.png",
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
            <h2 className="experienceNavContainer">
                <span 
                    className={display === 0 ? "experienceNav cursorPointer" : "cursorPointer"}
                    onClick={() => handleChangeDisplay(0)}>Education
                </span> | <span 
                    className={display === 1 ? "experienceNav cursorPointer" : "cursorPointer"}
                    onClick={() => handleChangeDisplay(1)}>Professional
                </span>
            </h2> 
            
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