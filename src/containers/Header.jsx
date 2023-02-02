import Navbar from "../components/NavBar";
import "./Header.css"

const Header = () => {
    return (
        <header>
            <img 
                src="/images/TitleLogo.png" 
                alt="Title Logo"
                width="100"
                className="personalLogo"
            />
            <Navbar />
        </header>
    )
}

export default Header;