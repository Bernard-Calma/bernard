import "./AboutMe.css"

const AboutMe = () => {
    return (
        <section className="sectionAboutMe" id="idAboutMe">
            <div className="aboutMe">
                <h1 className = "aboutMeName">Hi! I'm Bernard Calma</h1>
                <h2 className = "aboutMeOccupation">I'm a Software Engineer</h2>
                <p className="introduction">More than 1 year of experience in Full Stack Development (React, Node, Python, Flask, SQL and NoSQL) and 10 years of experience in the IT Industry(Desktop Support, Field Services) in different line of business(Telco, Retail, Media). Expert in hardware/software troubleshooting, analysis, advanced resolution procedures and complex problem solving. Skilled in Six Sigma, Cloud Computing, Team/Project Management and Automation.</p>
            </div>
            <img className="personalImage" src="images/ProfileImage.jpg" alt="Bernard Calma"/>
        </section>
    )
}

export default AboutMe