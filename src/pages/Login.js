import React, { useState } from 'react';
import { useNavigate, Navigate  } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling
import {supabase} from './supabase'
import { useAuth } from './auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Hook for navigation
    const user = useAuth();


    const handleLogin = async () => {
        // Implement your login logic here
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })

          console.log(data);
          console.log(error);
    };

    const handleSignUp = () => {
        navigate('/signup');
    };


    if (user.user != null) {
        return (<Navigate to={{pathname: "/",}}/>);    
    }

    return (
        <div className='page-container'>
            <div className="login-container"> {/* Added a class for styling */}
                <h2>Login / Sign Up</h2>
                <form>
                    <label>
                        Email:
                        <input className='login-input' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input className='login-input'
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
        </div>

    );
};

export default Login;
