import React, { useState, useEffect } from 'react';

export const App = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        setText("This is a clickable part of the text.'")
    }, []);

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div>
            {text && (
                <p>
                    {text.split(' ').map((word, index) => (
                        word === 'clickable' ? (
                            <button key={index} onClick={() => handleClick(word)} style={{border: 'none', background: 'none', color: 'blue', cursor: 'pointer'}}>
                                {word}
                            </button>
                        ) : (
                            <span key={index}>{word} </span>
                        )
                    ))}
                </p>
            )}
        </div>
    );
}
