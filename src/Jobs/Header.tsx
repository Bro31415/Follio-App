import './styles/Style.css'

function Header(){
    return (
        <section id="header">
            <div className="nav-btn">
                <a className="job-btn" href="">Full-Time</a>
                <a className="job-btn" href="">Part-Time</a>
                <a className="job-btn" href="">Freelance</a>
            </div>

            <div className="main-title">
                <div className="title">
                    <h1>The Job Board for Developers and Designers With Countless Ideas</h1>
                    <h4>
                        Follio is the heart of the design and develop community and the best resource 
                        to discover and connect with designers, developers and jobs worldwide.
                    </h4>
                    <a href=""><button className="btn btn-primary">Post A Job</button></a>
                </div>

                <div>
                    <img className="title-img" src="https://images.pexels.com/photos/5668863/pexels-photo-5668863.jpeg?cs=srgb&dl=pexels-sora-shimazaki-5668863.jpg&fm=jpg" alt=""/>
                    <div className="stripe1"></div>
                    <div className="stripe2"></div>
                </div>
            </div>
        </section>
    )
}

export default Header;