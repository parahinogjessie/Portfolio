import "./Hero.css";
import jessie from "../assets/Jessie.png";

function Hero() {
    return (
        <section className="hero">
            {/* Large background watermark text */}
            <h1 className="portfolio-title">PORTFOLIO</h1>

            {/* Left text content */}
            <div className="hero-content">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name">JESSIE<br />PARAHINOG</h1>
                <h2 className="role">NEWBIE DEVELOPER</h2>
                
                <p className="hero-description">
                    I’m practicing building user-friendly websites, improving my coding skills, and learning to create clean designs with smooth interactions.
                </p>

                <div className="availability">
                    <span className="status-dot"></span>
                    <span>AVAILABLE FOR HIRE</span>
                </div>
            </div>

            {/* Image Placeholder Area */}
            <div className="hero-img-container">
                <div className="image-placeholder">
                    <img src={jessie} alt="Jessie" />
                </div>
            </div>

            {/* Right side stats/details */}
            <div className="hero-stats">
                <div className="stat-item">
                    <h3>0+</h3>
                    <p>YEARS EXPERIENCE</p>
                </div>
                <div className="stat-item">
                    <h3>0</h3>
                    <p>PROJECTS COMPLETED</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;