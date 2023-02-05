import { useState } from "react"

const SendEmail = () => {
    const [emailContent, setEmailContent] = useState({
        senderName: "",
        senderEmail: "",
        senderSubject: "",
        senderSubject: "",
        senderMessage: "",
    })

    const handleChange = (e) => {
        setEmailContent({...emailContent, [e.target.name]: e.target.value})
    }

    const handleSendEmail = (e) => {
        e.preventDefault();
        setEmailContent({
            senderName: "",
            senderEmail: "",
            senderSubject: "",
            senderSubject: "",
            senderMessage: "",
        })
    }
    return (
        <form className="formContactMe" onSubmit={handleSendEmail}>
            <label htmlFor="senderName">Your Name: 
                <input type="text" name="senderName" id="senderName" value={emailContent.senderName} onChange = {handleChange}/>
            </label>
            <label htmlFor="senderEmail">Your Email: 
                <input type="text" name="senderEmail" id="senderEmail" value={emailContent.senderEmail} onChange = {handleChange}/>
            </label>
            <label htmlFor="senderSubject">Subject: 
                <input type="text" name="senderSubject" id="senderSubject" value={emailContent.senderSubject} onChange = {handleChange}/>
            </label>
            <label className="senderMessage">Your Message: </label>
            <textarea placeholder="Enter your message here" name="senderMessage" id="senderMessage" value={emailContent.senderMessage} onChange = {handleChange}></textarea>
            <input type="submit" name="submitMessage" id="submitMessage" value="Send" />
        </form>
    )
}

export default SendEmail