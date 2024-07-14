import React, { useState, useEffect } from 'react';

function App() {
    const [text, setText] = useState('');

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
            {text && <button onClick={handleClick}>{text}</button>}
        </div>
    );
}

export default App;
