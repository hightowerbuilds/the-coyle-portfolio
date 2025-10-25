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
              <a href="mailto:chris@alpertcoyle.com">chris@alpertcoyle.com</a>
            </div>
          
            <div className="contact-item">
              <strong>Location:</strong>
              <span>Sacramento, CA</span>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  )
}
