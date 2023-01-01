import React from 'react'

function SignUp() {
	return (
		<section className="login">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3 className='form-header'>SignUp here</h3>
                <label htmlFor="name"></label>
				<input className="input" type="text" name="" id="" placeholder="Name" />
                <input className=" input" type="text" name="" id="" placeholder="Email" />
                <label htmlFor="password"></label>
                <input className="input" type="text" placeholder="password" />
                <input className="input" type="text" placeholder="Repeat password" />
                <input type="submit" value="Login" className="button" />
                <div className="social">
                </div>
            </form>
        </section>
	)
}

export default SignUp