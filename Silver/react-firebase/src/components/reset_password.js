import React, { useState } from 'react';
import { auth } from './../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

function ResetPassword() {
    const [email, setEmail] = useState('');

    const handleResetPassword = async () => {
        try {
            let message = `Password reset for user with email ${email} has been initated successfully`;
            
            // Validation
            if (!email) {
                message = 'Please provide an email';
                alert(message);
                return;
            };

            // Initate password reset
            await sendPasswordResetEmail(auth, email);
            alert(message);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <h1>Reset your password</h1>
            <input
                type='email'
                placeholder='Please enter your email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <button onClick={handleResetPassword}>
                Reset
            </button>
        </div>
    );
}

export default ResetPassword;