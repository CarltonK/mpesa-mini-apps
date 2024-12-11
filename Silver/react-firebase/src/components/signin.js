import React, { useState } from 'react';
import { auth } from './../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            let message = `Account with email ${email} has been signed in successfully`;
            
            // Validation
            if (!email) {
                message = 'Please provide an email';
                alert(message);
                return;
            };

            if (!password) {
                message = 'Please provide a password';
                alert(message);
                return;
            };

            // Login user
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            const isVerified = user.emailVerified;
            const uid = user.uid;

            if (!isVerified) {
                alert('Please verify your email to proceed');
                return;
            }

            alert(message);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <h1>Login to your account</h1>
            <input
                type='email'
                placeholder='Please enter your email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            
            <input
                type='password'
                placeholder='Please enter a secure password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <button onClick={handleSignIn}>
                Login
            </button>
        </div>
    );
}

export default SignIn;