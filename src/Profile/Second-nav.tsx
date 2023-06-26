import './styleProfile/profile.css'

function secondNav(){
    return(
        <section id="sec-nav">
            <div className="selection">
                <a style={{textDecoration: 'none'}} href=""><p className="sel-items">Works</p></a> 
                <a style={{textDecoration: 'none'}} href=""><p className="sel-items">Saved</p></a> 
                <a style={{textDecoration: 'none'}} href=""><p className="sel-items">Liked</p></a> 
                <a style={{textDecoration: 'none'}} href=""><p className="sel-items">About</p></a> 
            </div>
        </section>
    )
}

export default secondNav;