import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span>&copy; 2025 Chris Coyle</span>
            <span className="separator">•</span>
            <a href="mailto:chris@chriscoyle.com" className="footer-link">chris@chriscoyle.com</a>
          </div>
          
          <div className="footer-right">
            <a 
              href="https://twitter.com/chriscoyle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Twitter
            </a>
            <span className="separator">•</span>
            <a 
              href="https://www.instagram.com/chrisalpertco/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
            <span className="separator">•</span>
            <a 
              href="https://hightowerbuilds.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link credit"
            >
              hightowerbuilds.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
