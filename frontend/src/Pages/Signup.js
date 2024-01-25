import React, { useState } from 'react'
import '../CSS/Signup.css';
import { Link } from "react-router-dom"
import { useToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Signup = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const toast = useToast();
    const history = useHistory();

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

    const handleSubmit = async () => {
        if (!username || !password || !confirmPassword) {
            toast({
                title: "Please fill all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }

        if (password !== confirmPassword) {
            toast({
                title: "Passwords do not match",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/user",
                { username, email, password },
                config
            );

            toast({
                title: "Registraion Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

            localStorage.setItem("userInfo", JSON.stringify(data));
            history.push('/chats');
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        }

    };

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
                <button onClick={handleSubmit}>Continue</button>
                <p className="loginsignup-login">Already have a account? <Link to="/">Login here</Link></p>

            </div>
        </div>
    )
}



export default Signup

