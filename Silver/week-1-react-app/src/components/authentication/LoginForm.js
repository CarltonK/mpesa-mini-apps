import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password.length < 6) {
            alert('Password too short');
            return;
        }
        
        console.log('Email: ', email);
        console.log('Password: ', password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='email' 
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input 
            type='password' 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button type='submit'>Login</button>
        </form>
    );
}

export default LoginForm;