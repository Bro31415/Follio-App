import './styles/Style.css'

function MiniNav(){
    return(
        <div className="filter">
            <div className="dropdown">
                <a className="filter-btn btn btn-outline-dark dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Filter
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Popular</a></li>
                    <li><a className="dropdown-item" href="#">Newest</a></li>
                </ul>
                <div>
                    <ul className="discovery">
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Discover</li></a>
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Animation</li></a>
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Branding and Logos</li></a>
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Product Design</li></a>
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Typography</li></a>
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Web Design</li></a>
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Mobile App Design</li></a>
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Web Application</li></a>
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Mobile App Aplication</li></a>
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Database Design</li></a>
                        <a style={{textDecoration:'none'}} href=""><li className="categories">Artificial Intelligence</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MiniNav;