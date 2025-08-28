import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import './Home.css'

export function Home() {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState<number>(0)

  const handleAccordionHover = (index: number) => {
    setActiveItem(index)
  }

  const handleAccordionLeave = () => {
    setActiveItem(0) // Return to first item when leaving accordion
  }

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Chris Coyle</h1>
            <h2>Journalist, Author, and Musician</h2>
        
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2 className="about-title">THE WORLD IS YOUR AIOLI!</h2>
          <p className="about-text">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, earum eum laudantium dolorum ipsam similique eius perspiciatis ipsum culpa, unde odit ducimus velit. Delectus sunt sequi quaerat porro autem eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, earum eum laudantium dolorum ipsam similique eius perspiciatis ipsum culpa, unde odit ducimus velit. Delectus sunt sequi quaerat porro autem eius.
          </p>
        
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2 className="services-title">A History of Hardwork and Good Words</h2>
          
          <div 
            className="horizontal-accordion"
            onMouseLeave={handleAccordionLeave}
          >
            <div 
              className={`accordion-item ${activeItem === 0 ? 'active' : ''}`}
              onMouseEnter={() => handleAccordionHover(0)}
            >
              <div className="accordion-header">
                <img 
                  src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/fun-house-1.jpg" 
                  alt="Razing the Bar" 
                  className="accordion-image"
                />
                <h3>Razing the Bar</h3>
              </div>
              <div className="accordion-content">
                <h4>Seattle's Music Community</h4>
                <p>Documenting the closure of The Funhouse and the impact of gentrification on Seattle's DIY music scene. Features interviews with filmmaker Ryan Worsley and venue owner Brian Foss.</p>
                <div className="article-link">
                  <button 
                    onClick={() => navigate({ to: '/catalog', search: { article: '17' } })}
                    className="view-article-btn"
                  >
                    View Article in Catalog
                  </button>
                </div>
              </div>
            </div>

            <div 
              className={`accordion-item ${activeItem === 1 ? 'active' : ''}`}
              onMouseEnter={() => handleAccordionHover(1)}
            >
              <div className="accordion-header">
                <img 
                  src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/oblivians-iamge.png" 
                  alt="The Oblivians" 
                  className="accordion-image"
                />
                <h3>The Oblivians</h3>
              </div>
              <div className="accordion-content">
                <h4>Reunion & New Record</h4>
                <p>Interview with Greg Cartwright about The Oblivians' first full-length album 'Desperation' since 1997, their reunion after a long hiatus, and their connection to the Northwest music scene.</p>
                <div className="article-link">
                  <button 
                    onClick={() => navigate({ to: '/catalog', search: { article: '21' } })}
                    className="view-article-btn"
                  >
                    View Article in Catalog
                  </button>
                </div>
              </div>
            </div>

            <div 
              className={`accordion-item ${activeItem === 2 ? 'active' : ''}`}
              onMouseEnter={() => handleAccordionHover(2)}
            >
              <div className="accordion-header">
                <img 
                  src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/king-khan.jpg" 
                  alt="Arish Khan" 
                  className="accordion-image"
                />
                <h3>Arish Khan</h3>
              </div>
              <div className="accordion-content">
                <h4>The Latest Shrines Album</h4>
                <p>In-depth interview with Arish (King) Khan discussing King Khan & The Shrines' latest album 'Idle No More', which represents a departure from their usual party-focused soul music.</p>
                <div className="article-link">
                  <button 
                    onClick={() => navigate({ to: '/catalog', search: { article: '14' } })}
                    className="view-article-btn"
                  >
                    View Article in Catalog
                  </button>
                </div>
              </div>
            </div>

            <div 
              className={`accordion-item ${activeItem === 3 ? 'active' : ''}`}
              onMouseEnter={() => handleAccordionHover(3)}
            >
              <div className="accordion-header">
                <img 
                  src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/cheap-time.jpg" 
                  alt="Cheap Time" 
                  className="accordion-image"
                />
                <h3>Cheap Time</h3>
              </div>
              <div className="accordion-content">
                <h4>Jeffrey Novak Interview</h4>
                <p>Interview with Jeffrey Novak of Nashville garage rock trio Cheap Time, discussing their evolution from one-man band to full lineup and their unique blend of influences from The Saints to The Cramps.</p>
                <div className="article-link">
                  <button 
                    onClick={() => navigate({ to: '/catalog', search: { article: '8' } })}
                    className="view-article-btn"
                  >
                    View Article in Catalog
                  </button>
                </div>
              </div>
            </div>

            <div 
              className={`accordion-item ${activeItem === 4 ? 'active' : ''}`}
              onMouseEnter={() => handleAccordionHover(4)}
            >
              <div className="accordion-header">
                <img 
                  src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/steve-baseball.jpg" 
                  alt="MLB Nicknames" 
                  className="accordion-image"
                />
                <h3>5 Former MLB Players</h3>
              </div>
              <div className="accordion-content">
                <h4>Whose Nicknames Make No Sense</h4>
                <p>An entertaining examination of former MLB players whose nicknames seem to have no logical connection to their playing style, personality, or background.</p>
                <div className="article-link">
                  <button 
                    onClick={() => navigate({ to: '/catalog', search: { article: '1' } })}
                    className="view-article-btn"
                  >
                    View Article in Catalog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 

  
    </div>
  )
}
