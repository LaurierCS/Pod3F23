import "./login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="right">
                    <h1>wlgo login</h1>
                    <div>
                        <input type="text" placeholder="username" />
                        <h1></h1>
                    </div>
                    <div>
                        <input type="password" placeholder="password" />
                        <h1></h1>
                    </div>
                    <div>
                        <button className = "button">Login</button>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Login
