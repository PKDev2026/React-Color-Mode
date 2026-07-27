
import { useTheme } from '../../contexts/ThemeContext'
import './App.css'

function App() {
  /* 
    This allows for the app and its downstream components to have access to the 
    theme state and the toggleTheme function to change the theme through click of a button
  */
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h3>Theme: {theme}</h3>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} mode
      </button>
    </div>
  )
}

export default App;
