import { Link } from '@tanstack/react-router'
import './Home.css'

export function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Chris Coyle</h1>
            <h2>Freelance Writer & Content Creator</h2>
            <p className="hero-description">
              Crafting compelling stories and content that connects with audiences. 
              Specializing in lifestyle, technology, and creative writing.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">150+</span>
                <span className="stat-label">Articles Published</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a passionate writer with over five years of experience creating content 
            that engages, informs, and inspires. My work has been featured in various 
            publications, and I've helped dozens of brands tell their stories effectively.
          </p>
          <p>
            When I'm not writing, you can find me exploring the beautiful landscapes of Oregon, 
            reading the latest novels, or experimenting with new coffee brewing methods.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>What I Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Blog Writing</h3>
              <p>Engaging blog posts that drive traffic and build your brand's voice.</p>
            </div>
            <div className="service-card">
              <h3>Content Strategy</h3>
              <p>Comprehensive content plans that align with your business goals.</p>
            </div>
            <div className="service-card">
              <h3>Copywriting</h3>
              <p>Persuasive copy that converts readers into customers.</p>
            </div>
            <div className="service-card">
              <h3>Technical Writing</h3>
              <p>Clear, concise documentation and technical content.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-work">
        <div className="container">
          <h2>Recent Work</h2>
          <div className="work-grid">
            <article className="work-item">
              <h3>"The Future of Remote Work"</h3>
              <p className="work-publication">Published in TechCrunch</p>
              <p className="work-description">
                An in-depth analysis of how remote work is reshaping the modern workplace.
              </p>
            </article>
            <article className="work-item">
              <h3>"Sustainable Living in Urban Spaces"</h3>
              <p className="work-publication">Featured in Green Living Magazine</p>
              <p className="work-description">
                Practical tips for maintaining an eco-friendly lifestyle in the city.
              </p>
            </article>
            <article className="work-item">
              <h3>"The Art of Digital Storytelling"</h3>
              <p className="work-publication">Content Marketing Institute</p>
              <p className="work-description">
                How brands can leverage narrative to create meaningful connections.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>Let's create something amazing. I'm always excited to take on new projects.</p>
          <Link to="/contact" className="cta-button">Get In Touch</Link>
        </div>
      </section>
    </div>
  )
}
