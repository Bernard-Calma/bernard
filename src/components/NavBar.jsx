import { useEffect, useLayoutEffect } from "react"

const Navbar = () => {

    const changeNavBar = () => {
        console.log(window.innerWidthinnerWidth)
    }

    useLayoutEffect(()=> {
        const windowListener = () => console.log("test")
        window.addEventListener('resize', windowListener)
        return () => window.removeEventListener('resize', windowListener)
    }, [])
    return(
        <div className="sectioNavBar">
            <ul className="containerNavBar">
                <li className="navBarItem"><a href="#idAboutMe">About Me</a></li>
                <li className="navBarItem"><a href="#idExperience">Experience</a></li>
                <li className="navBarItem"><a href="#idProjects">Projects</a></li>
                <li className="navBarItem"><a href="#idContact">Let's Connect!</a></li>
            </ul>
        </div>
    )
}

export default Navbar;