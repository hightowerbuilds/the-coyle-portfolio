import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span>&copy; 2025 Chris Alpert Coyle</span>
            <span className="separator">•</span>
            <a href="mailto:chris@alpertcoyle.com" className="footer-link">chris@alpertcoyle.com</a>
          </div>
          
          <div className="footer-right">
          <span>website by </span>
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
