/* 
 * Context - Way to share data between components without passing the data down manually
 * Use Cases: Themes(Light vs Dark) -> Authentication -> Language Settings
 */

import { createContext, useState } from 'react'

// Create the Global Context
export const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light')

    const switchTheme = () => {
        setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;