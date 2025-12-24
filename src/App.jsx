import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { TaskProvider } from './store/taskContext'
import Home from './pages/Home'
import Stats from './pages/Stats'
import './App.css'

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <div className="app-shell">
          <nav className="top-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/stats" className="nav-link">Stats</Link>
          </nav>
          <main className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TaskProvider>
  )
}

export default App
