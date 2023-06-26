import './styleProfile/profile.css'

function Navbar(){
    return (
        <section id="nav">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="Home.html">Follio</a>
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
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <div className="popover-wrapper">
                                <a href="Profile.html"><img className="user-profile"
                                        src="data:image/jpeg;base64,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"
                                        alt=""/>
                                </a>
                                <div className="popover-content">
                                    <button className="popover-btn">
                                        <div className="popover-icon">
                                            <i className="fa-solid fa-user"></i>
                                            <p>Profile</p>
                                        </div>
                                    </button>
                                    <button className="popover-btn">
                                        <div className="popover-icon">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                            <p>Edit Profile</p>
                                        </div>
                                    </button>
                                <button className="popover-btn">
                                    <div className="popover-icon">
                                        <i className="fa-solid fa-heart"></i>
                                        <p>My Likes</p>
                                    </div>
                                </button>
                                <button className="popover-btn">
                                    <div className="popover-icon">
                                        <i className="fa-sharp fa-solid fa-bookmark"></i>
                                        <p>My Saved</p>
                                    </div>
                                </button>
                                <button className="popover-btn">
                                    <div className="popover-icon">
                                        <i className="fa-solid fa-gear"></i>
                                        <p>Account Setting</p>
                                    </div>
                                </button>
                                <a href="/Before Sign in or up/Home.html">
                                <button className="popover-btn" type="button">
                                    <div className="popover-icon">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        <p>Logout</p>
                                    </div>
                                </button>
                                </a>    
                                </div>
                            </div>
                            <a href="Upload.html" className="upload"><button className="btn btn-success" type="button">Upload</button></a>
                          </form>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
    )
}

export default Navbar;