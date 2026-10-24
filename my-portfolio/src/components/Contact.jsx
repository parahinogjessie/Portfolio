
import "./Contact.css";

function Contact() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <p className="footer-label">GET IN TOUCH</p>

                <h2>
                    LET'S CONNECT<span>.</span>
                </h2>

                <p className="footer-description">
                    I'm currently practicing web development
                    and always open to connecting with others.
                </p>


                <div className="social-links">
                    <a
                        href="https://web.facebook.com/mutantplayer09"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Facebook ↗
                    </a>

                    <a
                        href="https://www.instagram.com/jxss_ig/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram ↗
                    </a>

                    <a
                        href="https://github.com/parahinogjessie"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github ↗
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Jessie Parahinog</p>
                <p>Designed & built by Jessie&AI</p>
            </div>
        </footer>
    );
}

export default Contact;
