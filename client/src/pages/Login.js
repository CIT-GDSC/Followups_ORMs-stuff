


function Login() {
    return (
        <section className="login">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3 className="form-header">Login Here</h3>
                <label htmlFor="name"></label>
                <input className=" input" type="text" name="" id="" placeholder="Email" />
                <label htmlFor="password"></label>
                <input className="input" type="text" placeholder="password" />
                <input type="submit" value="Login" className="button" />
                <div className="social">

                </div>
            </form>
        </section>
    )
}

export default Login