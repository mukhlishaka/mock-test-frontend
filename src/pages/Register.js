import React from "react";
import "./style/form.css"

const Register = () => {
    return (
        <>
            <div className="user-input">
                    <div className="container">
                        <form>
                            <h1 className="title">Register</h1>
                            <div className="input">
                                <input type="name" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
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