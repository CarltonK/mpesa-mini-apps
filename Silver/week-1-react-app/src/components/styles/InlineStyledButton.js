import React from "react";

function InlineStyledButton() {
    // Inline Styling - Style is added directly to the element

    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '10px'
    };

    return <button style={buttonStyle}>Click Here</button>;
}

export default InlineStyledButton;