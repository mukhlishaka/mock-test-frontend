import React from "react";
import "./style/form.css"

const Register = () => {
    return (
        <>
            <div className="user-input">
                <h1>Register</h1>
                <form>
                    <div className="container">
                        <input type="name" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit" className="btn">Register</button>
                    </div>
                </form>
                <h4>Already have account? <a href="/login">Login</a></h4>
            </div>
        </>
    )
}

export default Register