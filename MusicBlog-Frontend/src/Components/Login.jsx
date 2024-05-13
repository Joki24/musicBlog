
export default function Login() {

return (
    <div className="login">
        <div>
            <h1 className="heading">Log in</h1>
                <br />
                <form action="" className="form">
                    <label> Email </label>
                    <br />
                    <input type="email" placeholder="Enter your email here" className="email"/>
                    <br />
                    <br />
                    <label> Password</label>
                    <br />
                    <input type="password" placeholder="Enter your password here" className="password"/>
                    <br />
                    <br />
                    <button type="submit">Log in</button>
                    <br />
                    <br />
                    <span className="link">
                        <a href="/register">No account? Register here.</a>
                    </span>
                </form>
        </div>
    </div>
  );
}