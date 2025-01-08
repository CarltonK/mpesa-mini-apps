import React, { useContext } from 'react';
import { LanguageContext } from './intl'

function LanguageContextExample() {
    const { language, switchLanguage } = useContext(LanguageContext)

    return (
        <div>
            <h1>Language Selector</h1>
            <p>This is how we use context to switch Languages globally</p>
            <button
                onClick={switchLanguage}
            >
                {language === 'en' ? 'Hi, How are you?' : 'Hallo, Wie geht es dir?'}
            </button>
        </div>
    );
}

export default LanguageContextExample;