import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo"></div>

            <ul className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </ul>
        </nav>
    );
}

export default Navbar;