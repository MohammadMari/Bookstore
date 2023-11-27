import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Login clicked', email, password);
    };

    const handleSignUp = () => {
        // Implement your signup logic here
        console.log('Sign Up clicked', email, password);
        // Navigate to the signup page
        navigate('/signup');
    };

    

    return (
        <div className="login-container"> {/* Added a class for styling */}
            <h2>Login / Sign Up</h2>
            <form>
                <label>
                    Email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
                <button type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Login;
