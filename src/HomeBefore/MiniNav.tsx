import './styles/Style.css'

function MiniNav(){
    return (
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
            </div>
        </div>
    )
}

export default MiniNav;