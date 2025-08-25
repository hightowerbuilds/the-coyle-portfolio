import { Outlet, Link } from '@tanstack/react-router'
import { Footer } from './Footer'
import './Layout.css'

export function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
         <strong>Chris Coyle </strong>   <em>: Journalist, Author, Musician</em>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/catalog" className="nav-link">
              Catalog
            </Link>
            <Link to="/other-works" className="nav-link">
              Other Works
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
      <Footer />
    </>
  )
}
