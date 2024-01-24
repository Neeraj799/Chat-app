import React, { useState } from 'react'
import '../CSS/Homepage.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Homepage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        console.log('Email', email);
        console.log('Password', password);
    }



    return (
        <div className='signup'>
            <div className="signup-container">
                <h1>Login</h1>
                <div className='signup-fields'>
                    <h4>Email</h4>
                    <input type="email" placeholder='Email Address' value={email} onChange={handleEmailChange} />
                    <h4>Password</h4>
                    <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
                </div>
                <button onClick={handleSubmit}>Log in</button>
                <p className="loginsignup-login">Create an account? <Link to="/signup">Sign-Up</Link></p>
            </div>
        </div>
    )
}

export default Homepage
