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
                    <form className="formContactMe" onSubmit={""}>
                        <label for="senderName">Your Name: 
                            <input type="text" name="senderName" id="senderName" />
                        </label>
                        <label for="senderEmail">Your Email: 
                            <input type="text" name="senderEmail" id="senderEmail" />
                        </label>
                        <label for="senderSubject">Subject: 
                            <input type="text" name="senderSubject" id="senderSubject" />
                        </label>
                        <label className="senderMessage">Your Message: </label>
                        <textarea placeholder="enter your message here" name="senderMessage" id="senderMessage"></textarea>
                        <input type="submit" name="submitMessage" id="submitMessage" value="Send" />
                    </form>
            </ul>
        </section>
    )
}

export default Contact