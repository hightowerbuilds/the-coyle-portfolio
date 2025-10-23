import { useState } from 'react'
import './Home.css'

export function Home() {
  const [expandedPage, setExpandedPage] = useState<number | null>(null)

  const togglePage = (index: number) => {
    setExpandedPage(expandedPage === index ? null : index)
  }

  const bookPages = [
    {
      id: 0,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_first_page.pdf",
      title: "Page 1"
    },
    {
      id: 1,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_second_page.pdf",
      title: "Page 2"
    },
    {
      id: 2,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_page_three.pdf",
      title: "Page 3"
    },
    {
      id: 3,
      image: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/coyle-portfolio/estrus_book_page_four.pdf",
      title: "Page 4"
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
            The following is an excerpt from the Estrus Records book by Chris Coyle. Click on each page to expand and read.
          </p>
          
          <div className="book-pages-accordion">
            {bookPages.map((page, index) => (
              <div key={page.id} className={`book-accordion-item ${expandedPage === index ? 'expanded' : ''}`}>
                <button 
                  className="book-accordion-header"
                  onClick={() => togglePage(index)}
                >
                  <span className="book-page-title">{page.title}</span>
                  <span className="accordion-icon">{expandedPage === index ? '−' : '+'}</span>
                </button>
                <div className="book-accordion-content">
                  <div className="book-page-wrapper">
                    <embed 
                      src={page.image} 
                      type="application/pdf"
                      className="book-page-pdf"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 

  
    </div>
  )
}
