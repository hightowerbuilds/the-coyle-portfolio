import { Outlet, Link } from '@tanstack/react-router'
import './Layout.css'

export function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Chris Coyle
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  )
}
