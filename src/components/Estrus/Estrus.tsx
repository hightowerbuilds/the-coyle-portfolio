import { useState } from 'react'
import './Estrus.css'

export function Estrus() {
  const [expandedPage, setExpandedPage] = useState<number | null>(null)

  const togglePage = (index: number) => {
    setExpandedPage(expandedPage === index ? null : index)
  }

  const bookPages = [
    {
      id: 0,
      pdf: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_first_page.pdf",
      thumbnail: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_first_page.pdf",
      title: "Page 1"
    },
    {
      id: 1,
      pdf: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_second_page.pdf",
      thumbnail: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_second_page.pdf",
      title: "Page 2"
    },
    {
      id: 2,
      pdf: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_page_three.pdf",
      thumbnail: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_page_three.pdf",
      title: "Page 3"
    },
    {
      id: 3,
      pdf: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_page_four.pdf",
      thumbnail: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_page_four.pdf",
      title: "Page 4"
    }
  ]

  return (
    <div className="estrus-page">
      <div className="container">
        <h1>ESTRUS Records: Shovelin' The Shit Since '87</h1>
       
        <p className="estrus-excerpt-intro">
          The following is an excerpt from the Estrus Records book by Chris Coyle. Click on each page to expand and read.
        </p>
        
        <section className="work-category">
          <div className="book-pages-accordion">
            {bookPages.map((page, index) => (
              <div key={page.id} className={`book-accordion-item ${expandedPage === index ? 'expanded' : ''}`}>
                <button 
                  className="book-accordion-header-with-thumb"
                  onClick={() => togglePage(index)}
                >
                  <div className="thumbnail-container">
                    <embed 
                      src={page.thumbnail} 
                      type="application/pdf"
                      className="page-thumbnail"
                    />
                  </div>
                  <span className="book-page-title">{page.title}</span>
                  <span className="accordion-icon">{expandedPage === index ? '−' : '+'}</span>
                </button>
                <div className="book-accordion-content">
                  <div className="book-page-wrapper">
                    <embed 
                      src={page.pdf} 
                      type="application/pdf"
                      className="book-page-pdf"
                    />
                  </div>
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
            <p className="price-disclaimer">*price varies, but it's usually around $40*</p>
          </div>
        </section>
      </div>
    </div>
  )
}

