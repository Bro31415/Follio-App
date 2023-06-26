import './styleProfile/profile.css'

function mainSect(){
    return(
        <section id="main-sect">
            <div className="card-sect">
                <div className="upload-card">
                    <h3>Upload your first EVER portfolio</h3>
                    <p>Show off your best work. Get feedback, likes and be a part of a growing community.</p>
                    <button className="btn btn-info">Upload you first shot</button>
                </div>
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>
            </div>
        </section>
    )
}

export default mainSect;