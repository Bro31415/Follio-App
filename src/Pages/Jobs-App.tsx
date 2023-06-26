import NavBar from "../Jobs/NavBar";
import Header from "../Jobs/Header";
import JobsCard from "../Jobs/JobsCard";
import Filter from "../Jobs/Filter";
import Footer from "../Jobs/Footer";

function App(){
    return(
        <div className="App">
            <NavBar />

            <Header />

            <section id="jobs">
                <div className="job-sect">
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                    <JobsCard />
                </div>

                <Filter />
            </section>

            <Footer />
        </div>
    )
}

export default App;