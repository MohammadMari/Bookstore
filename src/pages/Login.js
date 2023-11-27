import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling
import {supabase} from './supabase'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async () => {
        // Implement your login logic here
        const { user, session, error } = await supabase.auth.signIn({
            email: email,
            password: password,
          })
    };

    const handleSignUp = () => {
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
