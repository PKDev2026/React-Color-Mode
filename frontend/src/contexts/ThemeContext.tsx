
import { createContext, useContext, useState, type ReactNode } from "react";

// We are telling TypeScript what exact data lives in this Context 
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Creating the context object that child components will use to call upon when changing the app's color theme 
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// This function will hold all of real estate on color theme and wrap around its children components aka the components that will call on this info
export function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// A simple helper hook so that components can read the context easily
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme () {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("use Theme must be used within a ThemeProvider");
    }

    return context;
}