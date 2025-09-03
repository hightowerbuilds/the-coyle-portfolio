import { useState } from 'react'
import { Outlet, Link } from '@tanstack/react-router'
import { Footer } from './Footer'
import './Layout.css'

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-desktop">
              <strong>Chris Coyle </strong> <em>: Journalist, Author, Musician</em>
            </span>
            <span className="nav-logo-mobile">
              <strong>Chris Coyle</strong>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
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

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-nav-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/catalog" className="mobile-nav-link" onClick={closeMobileMenu}>
            Catalog
          </Link>
          <Link to="/other-works" className="mobile-nav-link" onClick={closeMobileMenu}>
            Other Works
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
