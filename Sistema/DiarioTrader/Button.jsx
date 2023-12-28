// Button.js
import React from 'react';

function Button({ text, onClick, className, ...props }) {
    return (
        <button onClick={onClick} className={`btn ${className}`} {...props}>
            {text}
        </button>
    );
}

export default Button;
