import 'bootstrap/dist/css/bootstrap.css'
import './styles/Style.css'

function NavBar(){
    return (
        <section id="nav">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Follio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Web Design</a></li>
                                <li><a className="dropdown-item" href="#">Mobile App Design</a></li>
                                <li><a className="dropdown-item" href="#">Animation</a></li>
                                <li><a className="dropdown-item" href="#">Branding</a></li>
                                <li><a className="dropdown-item" href="#">Illustration</a></li>
                                <li><a className="dropdown-item" href="#">Web Source Code</a></li>
                                <li><a className="dropdown-item" href="#">Mobile App Source Code</a></li>
                                <li><a className="dropdown-item" href="#">Database Design</a></li>
                                <li><a className="dropdown-item" href="#">Artificial Intelligence</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="jobs.html">Find Work</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Learn
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Learn Design</a></li>
                                <li><a className="dropdown-item" href="#">Learn Development</a></li>
                                <li><a className="dropdown-item" href="#">Learn Animation</a></li>
                            </ul>
                        </li>
                        <form className="d-flex" role="search">
                            <a href="sign-up.html"><button className="btn btn-primary" type="button">Join Now!</button></a>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
    )
}

export default NavBar;