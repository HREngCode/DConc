import { Link } from 'react-router-dom'
import logo from '../assets/DCHomepage.png'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Main Flex Container */}
        <div className="flex items-center justify-between">
          
          {/* Logo on the Left */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Dingeman Concrete Inc. Logo" className="h-40 w-auto" />
          </Link>

          {/* Navigation on the Right */}
          <nav className="flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
              Home
            </Link>
            <Link to="/commercial" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
              Commercial
            </Link>
            <Link to="/residential" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
              Residential
            </Link>
            <Link to="/decorative" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
              Decorative
            </Link>
          </nav>
          
        </div>
      </div>
    </header>
  )
}

