import { useState } from "react"
import "./AboutMe.css"
import Skills from "./Skills"

const AboutMe = () => {
    const [scrollBarView, setScrollBarView] = useState(false)
    const toggleScrollBar = () => {
      if (scrollBarView) {
        document.body.classList.add("hideScrollBar")
      } else {
        document.body.classList.remove("hideScrollBar")
      }
      setScrollBarView(!scrollBarView)
    }
    return (
        <section className="sectionAboutMe fadeInLeft reveal" id="idAboutMe">
                <p className='scrollBar' onClick={toggleScrollBar}>Scroll Bar</p>
                <div className="aboutMe">
                    <h1 className = "aboutMeName">Hi! I'm Bernard Calma</h1>
                    <h2 className = "aboutMeOccupation">I'm a Full Stack Developer</h2>
                    <p className="introduction">More than 1 year of experience in Full Stack Development (<span>React</span>, <span>Node</span>, <span>Python</span>, <span>Express</span>, <span>Flask</span>, <span>Django</span>, <span>SQL</span> and <span>NoSQL</span>) and 10 years of experience in the IT Industry in different line of business. Expert in troubleshooting, analysis, advanced resolution procedures and complex problem solving. Skilled in Six Sigma, Cloud Computing, Team/Project Management and Automation.</p>
                    <a href="https://docs.google.com/document/d/1SMeSCKhxjsBJG1urZ6vdavFdLWlSewfA/edit?usp=sharing&ouid=103996762752011902027&rtpof=true&sd=true" id="fileResume" target={"_blank"} rel = {"noreferrer"}>Resume</a> 
                </div>
                <Skills />
                <div className="containerPersonalImage">
                    <img className="personalImage" src="images/ProfileImage.jpg" alt="Bernard Calma"/> 
                </div>             
        </section>
    )
}

export default AboutMe