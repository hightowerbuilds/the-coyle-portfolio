import { useState } from 'react'
import './Estrus.css'

export function Estrus() {
  const [selectedPage, setSelectedPage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedPage(index)
  }

  const closeModal = () => {
    setSelectedPage(null)
  }

  const goToPreviousPage = () => {
    if (selectedPage !== null && selectedPage > 0) {
      setSelectedPage(selectedPage - 1)
    }
  }

  const goToNextPage = () => {
    if (selectedPage !== null && selectedPage < bookPages.length - 1) {
      setSelectedPage(selectedPage + 1)
    }
  }

  const bookPages = [
    {
      id: 0,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_first_page.pdf",
      thumbnail: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_first_page.jpg",
      title: "Preview 1"
    },
    {
      id: 1,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_second_page.pdf",
      thumbnail: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_second_page.jpg",
      title: "Preview 2"
    },
    {
      id: 2,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_page_three.pdf",
      thumbnail: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_page_three.jpg",
      title: "Preview 3"
    },
    {
      id: 3,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_page_four.pdf",
      thumbnail: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_page_four.jpg",
      title: "Preview 4"
    }
  ]

  return (
    <div className="estrus-page">
      <div className="container">
        <h1>ESTRUS Records <h1>Shovelin' The Shit Since '87</h1></h1>
       
        <p className="estrus-excerpt-intro">
          The following is an excerpt from the Estrus Records book by Chris Coyle. Click on each page to view.
        </p>
        
        <div className="book-cover-section">
          <div className="book-cover-image-wrapper">
            <img 
              src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus-shovelin-shit-cover.jpg"
              alt="Estrus Records - Shovelin' Shit Cover"
              className="book-cover-image"
            />
          </div>
          <div className="book-purchase-info">
            <a 
              href="https://www.amazon.com/Estrus-Shovelin-Shit-Since-87/dp/1912740362/ref=tmm_pap_swatch_0"
              target="_blank"
              rel="noopener noreferrer"
              className="read-this-book-link"
            >
              <img 
                src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/read-this-book.png"
                alt="Read This Book"
                className="read-this-book-image"
              />
            </a>
            <a 
              href="https://www.amazon.com/Estrus-Shovelin-Shit-Since-87/dp/1912740362/ref=tmm_pap_swatch_0"
              target="_blank"
              rel="noopener noreferrer"
              className="amazon-buy-button"
            >
              KICK ASS BOOK! only $40*
            </a>
            <p className="price-disclaimer">*price varies, but it's usually around $40*</p>
          </div>
        </div>

        <div className="book-pages-accordion">
          {bookPages.map((page, index) => (
            <div key={page.id} className="book-accordion-item">
              <button 
                className="book-accordion-header"
                onClick={() => openModal(index)}
              >
                <img 
                  src={page.thumbnail} 
                  alt={page.title}
                  className="book-page-thumbnail"
                />
                <span className="book-page-label">{page.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedPage !== null && (
        <div className="book-modal-overlay" onClick={closeModal}>
          <div className="book-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="book-modal-close" onClick={closeModal}>×</button>
            
            {selectedPage > 0 && (
              <button className="book-modal-nav book-modal-nav-prev" onClick={goToPreviousPage}>
                ‹
              </button>
            )}
            
            {selectedPage < bookPages.length - 1 && (
              <button className="book-modal-nav book-modal-nav-next" onClick={goToNextPage}>
                ›
              </button>
            )}
            
            <div className="book-modal-header">
              <h3>{bookPages[selectedPage].title}</h3>
            </div>
            <div className="book-modal-body">
              <embed 
                src={bookPages[selectedPage].image} 
                type="application/pdf"
                className="book-modal-pdf"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

