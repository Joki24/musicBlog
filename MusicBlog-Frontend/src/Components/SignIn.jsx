export default function Signup() {
    return (
        <div className="signincontainer">
        <div className="sign_in">
            <header>
            <a href="/" data-action="logo">
              <i className="myspace-logo svg">Myspace</i>
            </a> 
        </header>
            <div>
                <h1 className="heading">Sign up page</h1>
                <br />
                <form action="" className="form">
                    <label> First name </label>
                    <br />
                    <input type="text" placeholder=" Enter your first name" className="first_name"/>
                    <br />
                    <br />
                    <label> Last name</label>
                    <br />
                    <input type="text" placeholder="Enter your last name" className="last_name"/>
                    <br />
                    <br />
                    <label> Email</label>
                    <br />
                    <input type="email" placeholder="Enter your email here" className="email"/>
                    <br />
                    <br />
                    <label> Password</label>
                    <br />
                    <input type="password" placeholder="Enter your password here" className="password"/>
                    <br />
                    <br />
                    <button type="submit">Sign in</button>
                    <br />
                    <br />
                    <span className="link">
                        <a href="/login">Already an account? Log in here.</a>
                    </span>
                </form>
            </div>
        </div>
        </div>
    )
}