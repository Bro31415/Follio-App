import './style/signup-style.css'

function SignUp(){
    return(
        <>
            <div id="sign-up">
                <div className="left-side">
                    <h1 className="logo"><a href="/" className="red-home">Follio</a></h1>
                    <h4 className="subtext">
                        Developer's and Designer's finest creation are here
                    </h4>
                </div>

                <div className="right-side">
                    <h1 className="main-text">Join Now To FOLLIO</h1>

                    <h3 className="sub-text">Sign In using</h3>

                    <div className="buttons">
                        <a href="/homePage.html"><button className="google"><i className="fa-brands fa-google"></i>Sign In With Google</button></a>
                        <button className="github"><i className="fa-brands fa-github"></i>Sign In With Github</button>
                        <button className="linkedin"><i className="fa-brands fa-linkedin"></i>Sign In With Linkedin</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp