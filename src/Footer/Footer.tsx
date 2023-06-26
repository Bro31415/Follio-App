import { Outlet, Link } from "react-router-dom";
import "./Footer.css"

function Footer(){
    return (
        <div className="footerbg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#D9DDDC" fill-opacity="1" d="M0,64L30,74.7C60,85,120,107,180,122.7C240,139,300,149,360,138.7C420,128,480,96,540,69.3C600,43,660,21,720,53.3C780,85,840,171,900,176C960,181,1020,107,1080,101.3C1140,96,1200,160,1260,165.3C1320,171,1380,117,1410,90.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            <section id="footer">
                <div className="footer-logo">
                    <h1 className="logo-in-footer">Follio</h1>
                    <p className="footer-subtext">
                        Share to grow.
                        to inspire.
                        to get hired.
                    </p>
                    <div className="sosmed">
                        <Link to=""><i className="fa-brands fa-instagram"></i></Link>
                        <Link to=""><i className="fa-brands fa-twitter"></i></Link>
                        <Link to=""><i className="fa-brands fa-github"></i></Link>
                        <Link to=""><i className="fa-brands fa-linkedin"></i></Link>
                        <Link to=""><i className="fa-brands fa-reddit"></i></Link>
                    </div>
                </div>
            </section>
            <Outlet />
        </div>
    )
}

export default Footer;