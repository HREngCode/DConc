import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Commercial from './pages/Commercial'
import Residential from './pages/Residential'
import Decorative from './pages/Decorative'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[url('./assets/PageBackground.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
        <Header />
        <main>
        <Outlet /> {/* This renders your pages like Home, Commercial, etc. */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/decorative" element={<Decorative />} />
        </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
