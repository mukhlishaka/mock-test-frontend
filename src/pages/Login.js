import React from "react";
import "./style/form.css"

const login = () => {
    return (
        <>
            <div className="user-input">
                    <div className="container">
                        <form>
                            <h1 className="title">Login</h1>
                            <div className="input">
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit"><a href="/dashboard">Login</a></button>
                            </div>
                            <h4 className="ask">Don't have an account? <a href="/register">Register</a></h4>
                        </form>
                    </div>
            </div>
        </>
    )
}

export default login;