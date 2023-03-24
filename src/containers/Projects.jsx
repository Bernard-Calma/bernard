import { useState } from "react"
import Project from "../components/Project"

const Projects = () => {
    const [projects] = useState(
        [{
            name: "Streamin",
            websiteLink: "https://stream-in.herokuapp.com/",
            summary: "Streamin is a React-based social media app that allows users to post videos they find interesting with full CRUD capabilites. Meaning they can create, show, update, and delete the posts they make. All while being able to like the videos posted by themselves and other users, as well as comment on videos and like said comments.",
            skills: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Express", "NodeJS"],
            screenshot: "images/projects/Streamin.png"
        },
        {
            name: "Spentrace",
            websiteLink: "https://spentrace.herokuapp.com/",
            summary: "This app can be used for simple budgeting tool, you can enter your earnings and expenses or expected cash flow everyday and will give you your how much you owe, your available spending and how much you'll need until the next expense.",
            skills: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Express", "NodeJS"],
            screenshot: "images/projects/Spentrace.png"
        },
        {
            name: "NexChapter",
            websiteLink: "https://https://nexchapters.herokuapp.com/",
            summary: "Floating Shoe is a game where you as a player will be a flying shoe and you need to avoid those feet that are trying to get into you as you move forward.",
            skills: ["React", "Redux", "Python", "Django", "Javascript", "HTML", "CSS"],
            screenshot: "images/projects/NexChapters.png"
        }, 
        {
            name: "Floating Shoe",
            websiteLink: "https://bernard-calma.github.io/project-1/",
            summary: "Floating Shoe is a game where you as a player will be a flying shoe and you need to avoid those feet that are trying to get into you as you move forward.",
            skills: ["HTML", "CSS", "JavaScript", "HTML Canvas"],
            screenshot: "images/projects/FloatingShoe.png"
        },
        {
            name: "Tamagotchi",
            websiteLink: "https://bernard-calma.github.io/tamagotchi-project/",
            summary: "Based on a 90's game called Tamagochi. Take care of your pet, feed, play with it. Fall inlove with it <3",
            skills: ["HTML", "CSS", "JavaScript"],
            screenshot: "images/projects/Tamagotchi.png"
        }]
    )

    let [show, setShow] = useState(0)

    const nextProject = (index) => {
        if(index === projects.length - 1){
            setShow(0)
        } else setShow(show += 1)
    }

    const previousProject = (index) => {
        if(index === 0){
            setShow(projects.length-1)
        } else setShow(show -= 1)
    }

    return(
        <section className="sectionProjects" id="idProjects">
            <h1>PROJECTS</h1>
            {
                projects.map((project, index) =>
                    <Project 
                        key={index}
                        index={index}
                        project={project}
                        show = {show}
                        nextProject = {() => nextProject(index)}
                        previousProject = {() => previousProject(index)}
                    />
                )
            }
        </section>
    )
}

export default Projects