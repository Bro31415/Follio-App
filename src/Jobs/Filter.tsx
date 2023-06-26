import './styles/Style.css'

function Filter(){
    return (
        <form className="filter-box" action="">
            <h5>Filter</h5>
            <input className="txt-box" type="text"/>
            <hr/>

            <h5>Specialties</h5>
            <label className="container">Web Developer
                <input type="checkbox" checked={true}/>
                <span className="checkmark"></span>
            </label>
            <label className="container">Web Designer
                <input type="checkbox" checked={true}/>
                <span className="checkmark"></span>
            </label>
            <label className="container">Mobile App Developer
                <input type="checkbox" checked={true}/>
                <span className="checkmark"></span>
            </label>
            <label className="container">Product Design
                <input type="checkbox" checked={true}/>
                <span className="checkmark"></span>
            </label>
            <label className="container">Database Design
                <input type="checkbox" checked={true}/>
                <span className="checkmark"></span>
            </label>
            <hr/>

            <h5>Location</h5>
            <input className="txt-box" type="text"/>
            <label className="container">Remote Available
                <input type="checkbox" checked={true}/>
                <span className="checkmark"></span>
            </label>
            <hr/>

            <h5>Job Type</h5>
            <label className="container">Full-Time
                <input type="checkbox" checked={true}/>
                <span className="checkmark"></span>
            </label>
            <label className="container">Freelance
                <input type="checkbox" checked={true}/>
                <span className="checkmark"></span>
            </label>

            <input className="btn btn-outline-primary" type="button" value="Filter"/>
        </form>
    )
}

export default Filter;