import React from 'react';

function Welcome({ sendDataToParent, greeting }) {
    const sendMessage = () => {
        sendDataToParent('Hello from Child');
    }

    return (
        <div>
            <p>{greeting}</p>
            <button onClick={sendMessage}>Send message to parent</button>
        </div>
    );
}

export default Welcome;