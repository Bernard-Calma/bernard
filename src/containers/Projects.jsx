import { useState } from "react"
import ProjectChange from "../buttons/ProjectChange"
import Project from "../components/Project"
import './Projects.css'

const Projects = () => {
    const [projects] = useState(
        [{
            name: "Streamin",
            websiteLink: "https://stream-in.herokuapp.com/",
            frontEndRepo: "https://github.com/Bernard-Calma/streamin-frontend",
            backEndRepo: "https://github.com/Bernard-Calma/streamin-backend",
            summary: "Streamin is a React-based social media app that allows users to post videos they find interesting with full CRUD capabilites. Meaning they can create, show, update, and delete the posts they make. All while being able to like the videos posted by themselves and other users, as well as comment on videos and like said comments.",
            skills: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Express", "NodeJS"],
            screenshot: "images/projects/Streamin.png"
        },
        {
            name: "Spentrace",
            websiteLink: "https://spentrace.herokuapp.com/",
            frontEndRepo: "https://github.com/Bernard-Calma/spentrace-react",
            backEndRepo: "https://github.com/Bernard-Calma/spentrace_backend",
            summary: "This app can be used for simple budgeting tool, you can enter your earnings and expenses or expected cash flow everyday and will give you your how much you owe, your available spending and how much you'll need until the next expense.",
            skills: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Express", "NodeJS"],
            screenshot: "images/projects/Spentrace.png"
        },
        {
            name: "NexChapters",
            websiteLink: "https://nexchapters.herokuapp.com/",
            frontEndRepo: "https://github.com/Bernard-Calma/nexchapters",
            backEndRepo: "https://github.com/Bernard-Calma/nexchapter-backend",
            summary: "An app that helps you track of your reading list",
            skills: ["React", "Redux", "Python", "Django", "Javascript", "HTML", "CSS"],
            screenshot: "images/projects/NexChapters.png"
        }, 
        {
            name: "Floating Shoe",
            websiteLink: "https://bernard-calma.github.io/project-1/",
            frontEndRepo: "https://github.com/Bernard-Calma/project-1",
            backEndRepo: null,
            summary: "Floating Shoe is a game where you as a player will be a flying shoe and you need to avoid those feet that are trying to get into you as you move forward.",
            skills: ["HTML", "CSS", "JavaScript", "HTML Canvas"],
            screenshot: "images/projects/FloatingShoe.png"
        },
        {
            name: "Tamagotchi",
            websiteLink: "https://bernard-calma.github.io/tamagotchi-project/",
            frontEndRepo: "https://github.com/Bernard-Calma/tamagotchi-project",
            backEndRepo: null,
            summary: "Based on a 90's game called Tamagochi. Take care of your pet, feed, play with it. Fall inlove with it <3",
            skills: ["HTML", "CSS", "JavaScript"],
            screenshot: "images/projects/Tamagotchi.png"
        }
    ])

    let [show, setShow] = useState(0)

    const showProject = (event) => {
        console.log(event.target.parentNode.lastChild)
        event.target.parentNode.lastChild.classList.remove('back')
        event.target.parentNode.lastChild.classList.add('front')
    }
    return(<>
        <section className="sectionProjects reveal" id="idProjects">
            <h1>PROJECTS</h1>
            <div className="containerProjects">
                {
                    projects.map((project, index) =>
                        <Project 
                            key={index}
                            index={index}
                            project={project}
                            show = {show}
                            setShow = {setShow}
                            showProject = {showProject}
                        />
                    )
                }
            </div>
        </section>
    </>
        
    )
}

export default Projects