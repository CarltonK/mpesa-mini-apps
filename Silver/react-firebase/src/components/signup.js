import React, { useState } from 'react';
import { auth } from './../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            let message = `Account with email ${email} has been created successfully`;
            
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

            // Create user
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            const uid = user.uid;

            await sendEmailVerification(user);

            message = `Account with uid ${uid} has been created successfully`

            alert(message);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <h1>Create your account</h1>
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

            <button onClick={handleSignup}>
                Signup
            </button>
        </div>
    );
}

export default SignUp;