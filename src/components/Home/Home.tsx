import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import './Home.css'

export function Home() {
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
          <h2 className="about-title">A little about me and about this website</h2>
          <p className="about-text">
            I've been writing for what seems like time. Some time. A long time? I'm not entirely certain but there is indeed time deeply tied to me writing. I love it, my time writing, that is. 
          </p>
          <p className="about-text">
           I like style. Yeah that's cool, that aint. Ya know stuff like that. 
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
                  src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/scab-attack.jpg" 
                  alt="Music Journalism" 
                  className="accordion-image"
                />
                <h3>Music Journalism</h3>
              </div>
              <div className="accordion-content">
                <h4>Covering the Underground Scene</h4>
                <p>From garage rock to experimental noise, I've documented the artists and movements that shape our musical landscape. My work has appeared in publications covering everything from local DIY shows to international festivals.</p>
                <div className="article-stats">
                  <span>15+ Articles</span>
                  <span>3 Publications</span>
                  <span>2019-2024</span>
                </div>
              </div>
            </div>

            <div 
              className={`accordion-item ${activeItem === 1 ? 'active' : ''}`}
              onMouseEnter={() => handleAccordionHover(1)}
            >
              <div className="accordion-header">
                <img 
                  src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/squish-band.jpg" 
                  alt="Sports Analysis" 
                  className="accordion-image"
                />
                <h3>Sports Analysis</h3>
              </div>
              <div className="accordion-content">
                <h4>Beyond the Box Score</h4>
                <p>My sports writing goes deeper than statistics, exploring the human stories behind the games. From MLB nicknames to NFL punter analysis, I find the unique angles that make sports journalism compelling.</p>
                <div className="article-stats">
                  <span>8+ Articles</span>
                  <span>2 Publications</span>
                  <span>2014-2024</span>
                </div>
              </div>
            </div>

            <div 
              className={`accordion-item ${activeItem === 2 ? 'active' : ''}`}
              onMouseEnter={() => handleAccordionHover(2)}
            >
              <div className="accordion-header">
                <img 
                  src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus-shovelin-shit-cover.jpg" 
                  alt="Book Publishing" 
                  className="accordion-image"
                />
                <h3>Book Publishing</h3>
              </div>
              <div className="accordion-content">
                <h4>Estrus Records Legacy</h4>
                <p>Contributing to the documentation of underground music history through book projects. My work on Estrus Records publications captures the raw energy and authenticity of the garage rock movement.</p>
                <div className="article-stats">
                  <span>3+ Publications</span>
                  <span>Estrus Records</span>
                  <span>2010-2015</span>
                </div>
              </div>
            </div>

            <div 
              className={`accordion-item ${activeItem === 3 ? 'active' : ''}`}
              onMouseEnter={() => handleAccordionHover(3)}
            >
              <div className="accordion-header">
                <img 
                  src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/the-mummies-article.png" 
                  alt="Album Liner Notes" 
                  className="accordion-image"
                />
                <h3>Album Liner Notes</h3>
              </div>
              <div className="accordion-content">
                <h4>Stories Behind the Sound</h4>
                <p>Writing liner notes that provide context and depth to musical releases. My work helps listeners connect with the artists and understand the creative process behind their favorite albums.</p>
                <div className="article-stats">
                  <span>12+ Albums</span>
                  <span>Various Labels</span>
                  <span>2015-2024</span>
                </div>
              </div>
            </div>

            <div 
              className={`accordion-item ${activeItem === 4 ? 'active' : ''}`}
              onMouseEnter={() => handleAccordionHover(4)}
            >
              <div className="accordion-header">
                <img 
                  src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/tim-kerr-estrus-book.jpg" 
                  alt="Creative Writing" 
                  className="accordion-image"
                />
                <h3>Creative Writing</h3>
              </div>
              <div className="accordion-content">
                <h4>Beyond Journalism</h4>
                <p>Exploring creative narratives and experimental forms of expression. From short stories to creative non-fiction, I push the boundaries of traditional writing to create engaging, thought-provoking content.</p>
                <div className="article-stats">
                  <span>20+ Pieces</span>
                  <span>Various Formats</span>
                  <span>2010-2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 

  
    </div>
  )
}
