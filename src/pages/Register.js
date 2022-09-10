import React, { useState } from "react";
import "./style/form.css"
import axios from "axios";
const url = "https://test-binar.herokuapp.com/auth/signup"

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(url, { name: name, email: email, password: password });
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
                            <h1 className="title">Register</h1>
                            <div className="input">
                            <input type="name" placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <button type="submit">Register</button>
                            </div>
                            <h4 className="ask">Already have account? <a href="/login">Login</a></h4>
                        </form>
                    </div>
            </div>
        </>
    )
}

export default Register