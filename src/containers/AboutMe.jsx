import "./AboutMe.css"

const AboutMe = () => {
    return (
        <section className="sectionAboutMe" id="idAboutMe">
            <div className="aboutMe">
                <h1 className = "aboutMeName">Hi! I'm Bernard Calma</h1>
                <h2 className = "aboutMeOccupation">I'm a Software Engineer</h2>
                <p className="introduction">Highly motivated technology professional with more than 10 years of experience in tech and more than 1 year of experience with Full-Stack Development. Experience completing hardware and software troubleshooting, analysis and resolution procedures. Skilled in Six Sigma, Cloud Computing, Automation and Independent/Team Project Management.</p>
            </div>
            <img className="personalImage" src="images/ProfileImage.jpg" alt="Personal Image"/>
        </section>
    )
}

export default AboutMe