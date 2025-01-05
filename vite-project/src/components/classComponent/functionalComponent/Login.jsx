import React, { useState } from "react";


const Login = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Login Email:", email);
        console.log("Login Password:", password);
        alert("Login Successful!");
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Name:", name);
        console.log("Signup Email:", email);
        console.log("Signup Password:", password);
        alert("Signup Successful!");
    };
    var signup = () => {
        var req = axios.post("http://localhost:3001/signup", {
            name: name,
            email: email,
            password: password
        })
        console.log(req);
        Navigate('/login')
    }

    return (

        <div className="form-container">
            <div className="form-toggle">
                <button
                    className={`toggle-button ${isLogin ? "active" : ""}`}
                    onClick={() => setIsLogin(true)}
                >
                    Login
                </button>
                <button
                    className={`toggle-button ${!isLogin ? "active" : ""}`}
                    onClick={() => setIsLogin(false)}
                >
                    Signup
                </button>
            </div>

            {isLogin ? (
                <form onSubmit={handleLoginSubmit} className="form">
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="login-email">Email:</label>
                        <input
                            type="email"
                            id="login-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Password:</label>
                        <input
                            type="password"
                            id="login-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="form-button">
                        Login
                    </button>
                </form>
            ) : (
                <form onSubmit={handleSignupSubmit} className="form">
                    <h1>Signup</h1>
                    <div className="form-group">
                        <label htmlFor="signup-name">Name:</label>
                        <input
                            type="text"
                            id="signup-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="signup-email">Email:</label>
                        <input
                            type="email"
                            id="signup-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="signup-password">Password:</label>
                        <input
                            type="password"
                            id="signup-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="form-button">
                        Signup
                    </button>
                </form>
            )}
        </div>
    );
};

export default Login;
