import React, { useContext } from 'react';
import { ThemeContext } from './context'

function ThemeContextExample() {
    const { theme, switchTheme } = useContext(ThemeContext)

    return (
        <div>
            <h1>Theme Selector</h1>
            <p>This is how we use context to switch themes globally</p>
            <button
                onClick={switchTheme}
                style={{
                    backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
                    color: theme === 'light' ? '#000000' : '#ffffff'
                }}
            >
                Switch Theme
            </button>
        </div>
    );
}

export default ThemeContextExample;