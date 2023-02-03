const SendEmail = () => {
    return (
        <form className="formContactMe" onSubmit={null}>
            <label htmlFor="senderName">Your Name: 
                <input type="text" name="senderName" id="senderName" />
            </label>
            <label htmlFor="senderEmail">Your Email: 
                <input type="text" name="senderEmail" id="senderEmail" />
            </label>
            <label htmlFor="senderSubject">Subject: 
                <input type="text" name="senderSubject" id="senderSubject" />
            </label>
            <label className="senderMessage">Your Message: </label>
            <textarea placeholder="enter your message here" name="senderMessage" id="senderMessage"></textarea>
            <input type="submit" name="submitMessage" id="submitMessage" value="Send" />
        </form>
    )
}

export default SendEmail