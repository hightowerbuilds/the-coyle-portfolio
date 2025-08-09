import './Contact.css'

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Get in Touch</h1>
        <p className="contact-intro">
          I'd love to hear from you! Whether you're interested in collaborating on a project, 
          discussing a writing opportunity, or just want to say hello, feel free to reach out.
        </p>
        
        <div className="contact-content">
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
              <span>Portland, Oregon</span>
            </div>
            
            <div className="social-links">
              <h3>Connect with me</h3>
              <a href="https://twitter.com/chriscoyle" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/in/chriscoyle" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com/chriscoyle" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows={6} required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
