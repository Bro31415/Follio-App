import NavBar from '../HomeBefore/NavBar'
import Body from '../HomeBefore/Body'
import MiniNav from '../HomeBefore/MiniNav'
import Cards from '../HomeBefore/Cards'
import Footer from '../HomeBefore/Footer'
import ExtraBtn from '../HomeBefore/ExtraBtn'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <MiniNav />

      <div className="card-sect">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <ExtraBtn />

    <Footer />
    </div>
  )
}

export default App
