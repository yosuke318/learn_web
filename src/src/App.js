import React, { useState, useEffect } from 'react';

export const App = () => {
    const [text, setText] = useState('Button');

    useEffect(() => {
        fetch('/api/string')
            .then(response => response.json())
            .then(data => setText(data.text));
    }, []);

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div>
            {"text" && <button onClick={handleClick}>{text}</button>}
        </div>
    );
}
