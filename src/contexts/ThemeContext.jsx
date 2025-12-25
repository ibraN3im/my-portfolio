import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false); // Start with light mode

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (isDark) {
            // Switch to light mode
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            document.body.classList.remove('bg-fb-dark');
            document.body.classList.add('bg-fb-whiteBg');
        } else {
            // Switch to dark mode
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            document.body.classList.remove('bg-fb-whiteBg');
            document.body.classList.add('bg-fb-dark');
        }
    };

    useEffect(() => {
        // Initialize with light mode
        document.documentElement.classList.add('light');
        document.body.classList.add('bg-fb-whiteBg');
    }, []);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
