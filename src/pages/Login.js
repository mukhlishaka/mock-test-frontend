import React, { useState } from "react";
import "./style/form.css"
import axios from "axios";
const url = "https://test-binar.herokuapp.com/auth/login"

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(url, { email: email, password: password });
            console.log(res.data, '<=== Nongol nih')
        } catch (error) {
            console.log(error, '<=== error bro!!!');
        }
    }

    return (
        <>
            <div className="user-input">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h1 className="title">Login</h1>
                        <div className="input">
                            <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit"><a href="">Login</a></button>
                        </div>
                        <h4 className="ask">Don't have an account? <a href="/register">Register</a></h4>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;