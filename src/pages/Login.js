import React from "react";
import "./style/form.css"

const login = () => {
    return (
        <>
            <div className="user-input">
                <h1>Login</h1>
                <form action="" method="post">
                    <div className="container">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
                <h4>Don't have an account? <a href="/register">Register</a></h4>
            </div>
        </>
    )
}

export default login;