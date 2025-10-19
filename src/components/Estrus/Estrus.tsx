import { useState } from 'react'
import './Estrus.css'

export function Estrus() {
  const [activeItem, setActiveItem] = useState<number>(0)

  const handleAccordionHover = (index: number) => {
    setActiveItem(index)
  }

  const handleAccordionLeave = () => {
    setActiveItem(0) // Return to first item when leaving accordion
  }

  const estrusItems = [
    {
      id: 0,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus-shovelin-shit-cover.jpg",
      title: "Book Cover",
      description: "A comprehensive history of ESTRUS Records, the legendary garage rock label that helped define the Pacific Northwest sound from 1987 onwards."
    },
    {
      id: 1,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/the-mummies-article.png",
      title: "The Mummies",
      description: "Inside look at The Mummies and their influence on the garage rock revival, featuring exclusive interviews and rare photos."
    },
    {
      id: 2,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus-jump-page.jpg",
      title: "Inside Pages",
      description: "Deep dive into the label's history with stories from bands, producers, and the Seattle music scene that shaped garage rock."
    },
    {
      id: 3,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/tim-kerr-estrus-book.jpg",
      title: "Tim Kerr Feature",
      description: "Exclusive feature on Tim Kerr and his contributions to the label's iconic visual identity and punk rock aesthetic."
    }
  ]

  return (
    <div className="estrus-page">
      <div className="container">
        <h1>ESTRUS Records: Shovelin' The Shit Since '87</h1>
       
        
        <section className="work-category">
          <div 
            className="estrus-accordion"
            onMouseLeave={handleAccordionLeave}
          >
            {estrusItems.map((item) => (
              <div 
                key={item.id}
                className={`estrus-accordion-item ${activeItem === item.id ? 'active' : ''}`}
                onMouseEnter={() => handleAccordionHover(item.id)}
              >
                <div className="estrus-accordion-header">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="estrus-accordion-image"
                  />
                  <h3>{item.title}</h3>
                </div>
                <div className="estrus-accordion-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="book-link">
            <p className="book-tagline">Dig In! $40*</p>
            
            <div className="book-links-container">
              <a 
                href="https://www.amazon.com/Estrus-Shovelin-Shit-Since-87/dp/1912740362/ref=tmm_pap_swatch_0"
                target="_blank"
                rel="noopener noreferrer"
                className="amazon-link"
              >
                BUY THIS KICK ASS BOOK!
              </a>
              <a 
                href="https://www.instagram.com/estrus_records_book/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                Follow on Instagram
              </a>
            </div>
            <p className="price-disclaimer">*price changes, but it's usually around $40</p>
          </div>
        </section>
      </div>
    </div>
  )
}

