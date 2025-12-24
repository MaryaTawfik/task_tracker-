import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { TaskProvider, useTasks } from './store/taskContext'
import Home from './pages/Home'
import Stats from './pages/Stats'

export default function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <div className="app-shell">

      
          <nav className="top-nav">
            <NavLink
              to="/"
              end
              className="nav-link"
            >
              Home
            </NavLink>

            <NavLink
              to="/stats"
              className="nav-link"
            >
              Stats
            </NavLink>

           
            <ThemeToggle />
          </nav>

        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>

        </div>
      </BrowserRouter>
    </TaskProvider>
  )
}



function ThemeToggle() {
  const { dark, setDark } = useTasks()

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark((d) => !d)}
      aria-pressed={dark}
    >
      {dark ? '🌞' : '🌚'}
    </button>
  )
}
