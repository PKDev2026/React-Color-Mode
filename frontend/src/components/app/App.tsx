
import { useTheme } from '../../contexts/ThemeContext'
import './App.css'

function App() {
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
