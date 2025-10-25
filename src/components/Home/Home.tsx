import { useState } from 'react'
import './Home.css'

export function Home() {
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
        <div className="container">
          <h2 className="services-title">Estrus Records Book</h2>
          
          <p className="book-excerpt-intro">
            The following is an excerpt from the Estrus Records book by Chris Coyle. Click on each page to view.
          </p>
          
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
      </section>

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
