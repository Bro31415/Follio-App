import 'bootstrap/dist/css/bootstrap.css'
import './styles/Style.css'

function Body(){
    return (
        <section id="header">
            <div className="img-bg"></div>
            <div className="skew"></div>
            <div className="header-text">
                <h1 className="main-text">Explore Developer's and Designer's Best Portfolio</h1>
            </div>
            <div className="header-subtext">
                <p className="subtext">
                    Millions of designers and developers around the world showcase their portfolio work on Follio -
                    home to the world's best design and development portfolio showcase
                </p>
            </div>

            <img className="main-img1"
                src="https://cdn.dribbble.com/users/3862493/screenshots/15019574/media/21c415cb11a98f13d02bedd1134f834b.png?compress=1&resize=400x300"
                alt="" srcSet=""/>
            <img className="main-img2"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/42426332931093.585a69ba93ab4.png" alt=""
                srcSet=""/>
        </section>
    )
}

export default Body;