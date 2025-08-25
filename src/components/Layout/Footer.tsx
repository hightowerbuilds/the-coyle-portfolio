import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Connect with Chris</h3>
            <div className="social-links">
              <a 
                href="https://twitter.com/chriscoyle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                Twitter
              </a>
            
              <a 
                href="https://instagram.com/chriscoyle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>chris@chriscoyle.com</p>
            <p>Sacramento, CA</p>
          </div>
          
          <div className="footer-section">
           
            <p>Website by</p>
            <a 
              href="https://hightowerbuilds.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="credit-link"
            >
              hightowerbuilds.com
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Chris Coyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
