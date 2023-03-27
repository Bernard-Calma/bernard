import SendEmail from "../components/SendEmail"
import './Contact.css'

const Contact = () => {
    return(
        <section className="sectionContact reveal" id="idContact">
            <h1>Let's Connect</h1>
            <ul className="socialMedia">
                    <li className = "socialMediaItem"><a href="https://www.linkedin.com/in/bernard-calma/" target="_blank"  rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li className = "socialMediaItem"><a href="https://github.com/Bernard-Calma" target="_blank"  rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                    <li className = "socialMediaItem"><a href="https://twitter.com/ryznrd" target="_blank"  rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
                <ul className="contactInformation">
                    <li>Location: Lancaster, CA</li>
                    <li>Email: nard.calma@gmail.com</li>
            </ul>
            <SendEmail />
        </section>
    )
}

export default Contact