/* 
 * Context - Way to share data between components without passing the data down manually
 * Use Cases: Themes(Light vs Dark) -> Authentication -> Language Settings
 */

import { createContext, useState } from 'react'

// Create the Global Context
export const LanguageContext = createContext()

function IntlProvider({children}) {
    const [language, setLanguage] = useState('en')

    const switchLanguage = () => {
        setLanguage((currentLanguage) => currentLanguage === 'en' ? 'de' : 'en')
    }

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default IntlProvider;