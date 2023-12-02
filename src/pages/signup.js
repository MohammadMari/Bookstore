import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file for styling
import { supabase } from './supabase'

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [privacyAgreement, setPrivacyAgreement] = useState(false);

    async function signUp() {
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) {
            // add error handling
            return;
        }
    }

    const handleSignUp = async () => {
        if (privacyAgreement) {
            await signUp();
        } else {
            alert('Please agree to the privacy policy.');
        }
    };

    return (
        <div className="signup-container"> {/* Added a class for styling */}
            <h2>Sign Up</h2>
            <form>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        checked={privacyAgreement}
                        onChange={() => setPrivacyAgreement(!privacyAgreement)}
                    />
                    I agree to the privacy policy
                </label>
                <br />
                <button type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
