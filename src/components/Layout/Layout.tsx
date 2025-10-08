import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from '@tanstack/react-router'
import { Footer } from './Footer'
import './Layout.css'

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const location = useLocation()

  const desktopImages = [
    'https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/chris1.png',
    'https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/chris2.png'
  ]

  // Slideshow effect for desktop images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % desktopImages.length
      )
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [desktopImages.length])

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
              <img 
                src={desktopImages[currentImageIndex]} 
                alt="Chris Coyle" 
                className="nav-logo-desktop-image"
              />
              <strong>Chris Coyle </strong> <em>: Journalist, Musician</em>
            </span>
            <span className="nav-logo-mobile">
              <img 
                src={desktopImages[currentImageIndex]} 
                alt="Chris Coyle" 
                className="nav-logo-mobile-image"
              />
              <strong>Chris Coyle</strong>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/catalog" className="nav-link">
            Journalism 
            </Link>
            <Link to="/sports-parodies" className="nav-link">
              Parody
            </Link>
            <Link to="/other-works" className="nav-link">
              Other Publications
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
            Journalism
          </Link>
          <Link to="/sports-parodies" className="mobile-nav-link" onClick={closeMobileMenu}>
            Parody
          </Link>
          <Link to="/other-works" className="mobile-nav-link" onClick={closeMobileMenu}>
          Other Publications
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
      {location.pathname !== '/catalog' && <Footer />}
    </>
  )
}
