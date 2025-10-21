import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useScreenSize } from '../../hooks/useScreenSize'
import './Home.css'

export function Home() {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState<number>(0)
  const { isMobile } = useScreenSize()

  const handleAccordionHover = (index: number) => {
    setActiveItem(index)
  }

  const handleAccordionLeave = () => {
    setActiveItem(0) // Return to first item when leaving accordion
  }

  const articles = [
    {
      id: 0,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/fun-house-1.jpg",
      title: "Razing the Bar",
      subtitle: "Seattle's Music Community",
      description: "Documenting the closure of The Funhouse and the impact of gentrification on Seattle's DIY music scene. Features interviews with filmmaker Ryan Worsley and venue owner Brian Foss.",
      articleId: '17'
    },
    {
      id: 1,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/oblivians-iamge.png",
      title: "The Oblivians",
      subtitle: "Reunion & New Record",
      description: "Interview with Greg Cartwright about The Oblivians' first full-length album 'Desperation' since 1997, their reunion after a long hiatus, and their connection to the Northwest music scene.",
      articleId: '21'
    },
    {
      id: 2,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/king-khan.jpg",
      title: "Arish Khan",
      subtitle: "The Latest Shrines Album",
      description: "In-depth interview with Arish (King) Khan discussing King Khan & The Shrines' latest album 'Idle No More', which represents a departure from their usual party-focused soul music.",
      articleId: '14'
    },
    {
      id: 3,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/cheap-time.jpg",
      title: "Cheap Time",
      subtitle: "Jeffrey Novak Interview",
      description: "Interview with Jeffrey Novak of Nashville garage rock trio Cheap Time, discussing their evolution from one-man band to full lineup and their unique blend of influences from The Saints to The Cramps.",
      articleId: '8'
    },
    {
      id: 4,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/steve-basbell-closeup2.jpg",
      title: "5 Former MLB Players",
      subtitle: "Whose Nicknames Make No Sense",
      description: "An entertaining examination of former MLB players whose nicknames seem to have no logical connection to their playing style, personality, or background.",
      articleId: '1'
    }
  ]

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Chris Alpert Coyle</h1>
            <h2>Author, Journalist, Musician  <h3>And Foole For Hire</h3></h2>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2 className="about-title">AGING HIPSTER SEEKS YOUR ATTENTION!</h2>
          <p className="about-text">
            <span className="symbol-transition"></span>  Hello, my name is Chris. I just celebrated the fourth decade of my life this September. For the fifth, I am putting all of my skills together to create something unique FOR YOU! I've completed projects large and smaller and have worked with superb artists, photographers, and editors. Take a look at some of my work, and <a href="/contact" className="contact-link">GET IN TOUCH</a>  if you're interested!
          </p>
        
        </div>
      </section>

      <section className="services">
        <div className="services-container">
          <h2 className="services-title">A History of Hardwork and Good Words</h2>
          
          {/* Mobile Thumbnails */}
          {isMobile && (
            <div className="mobile-thumbnails">
              {articles.map((article) => (
                <div key={article.id} className="mobile-thumbnail">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="mobile-thumbnail-image"
                  />
                  <div className="mobile-thumbnail-content">
                    <button 
                      onClick={() => navigate({ to: '/catalog', search: { article: article.articleId } })}
                      className="mobile-thumbnail-btn"
                    >
                      {article.title}
                    </button>
                    <p className="mobile-thumbnail-text">{article.title}: {article.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
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
