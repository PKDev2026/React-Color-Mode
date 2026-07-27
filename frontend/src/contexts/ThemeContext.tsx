
import { createContext, useContext, useState, type ReactNode } from "react";

// We are telling TypeScript what exact data lives in this Context
// First is a 
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void; // Thi means that this is a function that has no parameters and no return statement attached to it
}

// Creating the context object that child components will use to call upon when changing the app's color theme 
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// This function will hold everything regarding the state of color theme
export function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        // It will wrap around its children components who will have access to the theme state and the toggleTheme function
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// A simple helper hook so that components can read the context easily (like getting a signal from a radio station)
// This will prevent every single child component from writing this individually
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme () {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("use Theme must be used within a ThemeProvider");
    }

    return context;
}