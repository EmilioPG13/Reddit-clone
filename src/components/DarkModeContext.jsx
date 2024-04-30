import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        setDarkMode(!darkMode);
};

return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
}

DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DarkModeProvider;