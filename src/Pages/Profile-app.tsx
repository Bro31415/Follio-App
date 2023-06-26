import Navbar from '../HomeAfter/TheNavBar'
import MainSect from '../Profile/Main-sect'
import SecondNav from '../Profile/Second-nav'
import MainProfile from '../Profile/Main-profile'
import Footer from '../Profile/Footer'
import '../Profile/styleProfile/profile.css'

function App(){
    return(
        <div className='App'>
            <Navbar />

            <MainProfile />

            <SecondNav />
            <hr style={{marginLeft: '10%'}}/>
            <MainSect />

            <Footer />
        </div>
    )
}

export default App