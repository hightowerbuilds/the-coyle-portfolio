import './Contact.css'

export function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-content">
          <div className="contact-image">
            <img 
              src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/chris-pixel.png" 
              alt="Chris Coyle" 
              className="contact-photo"
            />
          </div>
          
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:chris@chriscoyle.com">chris@chriscoyle.com</a>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <span>(555) 123-4567</span>
            </div>
            <div className="contact-item">
              <strong>Location:</strong>
              <span>Sacramento, CA</span>
            </div>
            
            <div className="social-links">
              <h3>Connect with me</h3>
              <a href="https://twitter.com/chriscoyle" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/in/chriscoyle" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/chrisalpertco/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
