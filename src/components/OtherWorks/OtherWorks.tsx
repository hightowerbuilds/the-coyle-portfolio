import './OtherWorks.css'

export function OtherWorks() {
  return (
    <div className="other-works-page">
      <div className="container">
        <h1>Other Works</h1>
       
        
        <section className="work-category">          <h2>ESTRUS Records: Shovelin' The Shit Since '87</h2>
          <div className="work-items">
            <div className="work-item estrus-cover">
            
            </div>
            <div className="work-item estrus-mummies"></div>
            <div className="work-item estrus-jump"></div>
            <div className="work-item estrus-tim-kerr"></div>
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
                BUY online!
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
            <p className="price-disclaimer">*price may change</p>
          </div>
        </section>

        <section className="work-category">
          <h2>Musician</h2>
          <div className="work-items">
            <a 
              href="https://sircoylerandhisasthmaticband.bandcamp.com/album/dont-shake-w-five-more" 
              target="_blank" 
              rel="noopener noreferrer"
              className="work-item sir-coyler-band clickable-item"
            >
              <h3>Sir Coyler's Asthmatic Band</h3>
            </a>
            <a href="https://squishgrumble.bandcamp.com/album/days-of-the-grumble"
              target="_blank" 
              rel="noopener noreferrer"
             className="work-item album-liner-notes"
            >
              <h3>SQUISH!</h3>
            </a>
        
          </div>
        </section>

 

      </div>
    </div>
  )
}
