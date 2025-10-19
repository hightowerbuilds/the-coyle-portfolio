import './OtherWorks.css'

export function OtherWorks() {
  return (
    <div className="other-works-page">
      <div className="container">
        <h1>Music</h1>

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
