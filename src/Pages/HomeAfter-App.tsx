import React, { useState, useEffect } from "react";

import NavBar from  '../HomeAfter/TheNavBar'
import MiniNav from '../HomeAfter/TheMiniNav'
import Cards from '../HomeAfter/TheCards'
import Footer  from '../HomeAfter/TheFooter'
import '../HomeAfter/styles/Style.css'

function App(){
    const [card, setCard] = useState("")

    return(
        <div className="App">
            <NavBar />

            <section style={{backgroundColor: '#f5f5f5'}} id="main-sect">
                <MiniNav/>

                <div className="card-sect">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>

                <div className="another-sign-btn">
                    <a className="load-more">Load More</a>
                </div>

                <Footer />
            </section>
        </div>
    )
}

export default App