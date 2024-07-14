import React, { useState, useEffect } from 'react';

export const App = () => {
    const [text, setText] = useState('clickable');

    useEffect(() => {
        setText("This is a ○clickable\n part of the text.")
    }, []);

    const handleClick = (word) => {
        alert(`Button clicked: ${word}`);
    };

    const renderText = () => {
        const regex = /○(.*?)\n/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            const { index } = match;
            parts.push(text.substring(lastIndex, index));
            let match_str = match[1];
            parts.push(
                <button
                    key={index}
                    onClick={() => handleClick(match_str)}
                    style={{ border: 'none', background: 'none', color: 'blue', cursor: 'pointer' }}
                >
                    {match[1]}
                </button>
            );
            lastIndex = regex.lastIndex;
        }

        // Add remaining text after the last match
        parts.push(text.substring(lastIndex));
        return parts;
    };

    return (
        <div>
            {text && (
                <p>
                    {renderText()}
                </p>
            )}
        </div>
    );
}
