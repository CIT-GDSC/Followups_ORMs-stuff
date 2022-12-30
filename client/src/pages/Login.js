


function Login() {
    return (
        <section className="login">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Welcome Back, Login Here</h3>
                <label htmlFor="name"></label>
                <input type="text" name="" id="" placeholder="Email" />
                <label htmlFor="password"></label>
                <input type="text" placeholder="password" />
                <button>Log In</button>
                <div className="social">
                    <div className="go"><i className="fab fab-google">Google</i></div>

                </div>
            </form>
        </section>
    )
}

export default Login