import React, { useState } from 'react'
import '../CSS/Signup.css';
import { Link } from "react-router-dom"

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        if (password != confirmPassword) {
            setError("Password do not match");
            return;
        }

        setError("");






        console.log(username);
        console.log(email);
        console.log(password);
        console.log(confirmPassword);
    }

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign-Up</h1>
                <div className='loginsignup-fields'>
                    <h4>Username</h4>
                    <input type="text" placeholder='Your Name' value={username} onChange={handleUsername} />
                    <h4>Email</h4>
                    <input type="email" placeholder='Email Address' value={email} onChange={handleEmailChange} />
                    <h4>Password</h4>
                    <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
                    <h4>Confirm Password</h4>
                    <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </div>
                {error && <p>{error}</p>}
                <button onClick={handleSubmit}>Continue</button>
                <p className="loginsignup-login">Already have a account? <Link to="/">Login here</Link></p>

            </div>
        </div>
    )
}



export default Signup

