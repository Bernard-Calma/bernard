import SendEmail from "../components/SendEmail"

const Contact = () => {
    return(
        <section className="sectionContact">
            <h1>Let's Connect</h1>
            <ul class="socialMedia">
                    <li class = "socialMediaItem"><a href="https://www.linkedin.com/in/bernard-calma/" target="_blank"  rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li class = "socialMediaItem"><a href="https://github.com/Bernard-Calma" target="_blank"  rel="noreferrer"><i class="fa-brands fa-github"></i></a></li>
                    <li class = "socialMediaItem"><a href="https://twitter.com/ryznrd" target="_blank"  rel="noreferrer"><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
                <ul class="contactInformation">
                    <li>Location: Lancaster, CA</li>
                    <li>Email: <a class="mailTo" href="mailto:nard.calma@gmail.com">nard.calma@gmail.com</a></li>
            </ul>
            <SendEmail />
        </section>
    )
}

export default Contact