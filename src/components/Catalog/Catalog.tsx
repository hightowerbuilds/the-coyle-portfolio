import { useState } from 'react'
import './Catalog.css'

interface Article {
  id: number
  title: string
  publication: string
  date: string
  content: string
  category: string
  pdfUrl?: string
}

const portfolioArticles: Article[] = [
  {
    id: 1,
    title: "5 Former MLB Players Whose Nicknames Make No Sense At All",
    publication: "CA Coyle",
    date: "2024",
    content: "An entertaining examination of former MLB players whose nicknames seem to have no logical connection to their playing style, personality, or background. This piece explores the curious origins of these monikers and what they reveal about baseball culture and the creative ways fans and teammates come up with player identities.",
    category: "Sports Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Former%20MLB%20Players%20Whose%20Nicknames%20Make%20No%20Sense%20At%20All.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgRm9ybWVyIE1MQiBQbGF5ZXJzIFdob3NlIE5pY2tuYW1lcyBNYWtlIE5vIFNlbnNlIEF0IEFsbC5wZGYiLCJpYXQiOjE3NTYwOTIxOTYsImV4cCI6MjA3MTQ1MjE5Nn0.N5x5sWH2B-_5e_nB-tvAWE0Xb9FfSTZiZU5jJRpLFUI"
  },
  {
    id: 2,
    title: "5 Indications Slugerrr Is Sending The Wrong Message To Kids",
    publication: "CA Coyle",
    date: "2024",
    content: "An analysis of how Slugerrr's messaging and content may be sending inappropriate signals to young audiences. This piece examines the potential negative impacts and suggests ways to address these concerns.",
    category: "Sports Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Indications%20Slugerrr%20Is%20Sending%20The%20Wrong%20Message%20To%20Kids.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgSW5kaWNhdGlvbnMgU2x1Z2VycnIgSXMgU2VuZGluZyBUaGUgV3JvbmcgTWVzc2FnZSBUbyBLaWRzLnBkZiIsImlhdCI6MTc1NjA5NjU3MiwiZXhwIjoyMDcxNDU2NTcyfQ.paFFEZYePzZS2v-u3NJ5ySuXmKbbIx3qoZGm-b3_4Ac"
  },
  {
    id: 3,
    title: "5 NFL Players In The Race For MVP",
    publication: "CA Coyle",
    date: "2014",
    content: "An analysis of the top 5 NFL punters competing for the unofficial Most Valuable Punter award. The article examines statistics like return yards allowed, punts inside the 20-yard line, net yardage, and total punt distance to determine which punter deserves the title.",
    category: "Sports Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20NFL%20Players%20In%20The%20Race%20For%20MVP.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgTkZMIFBsYXllcnMgSW4gVGhlIFJhY2UgRm9yIE1WUC5wZGYiLCJpYXQiOjE3NTYwOTY2MzUsImV4cCI6MjA3MTQ1NjYzNX0.erbFGoxWhtDiZnEGWUjGJwNnAmCeIzGtF2QZbnQ_jZ4"
  },
  {
    id: 4,
    title: "5 Pro Athletes Who Share Names With Famous Rockers",
    publication: "CA Coyle",
    date: "2024",
    content: "An exploration of the amusing coincidences where professional athletes share names with famous rock musicians. This piece examines these name doppelgängers and the entertaining possibilities they present for sports and music fans alike.",
    category: "Sports Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Pro%20Athletes%20Who%20Share%20Names%20With%20Famous%20Rockers.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgUHJvIEF0aGxldGVzIFdobyBTaGFyZSBOYW1lcyBXaXRoIEZhbW91cyBSb2NrZXJzLnBkZiIsImlhdCI6MTc1NjE4NTIxNiwiZXhwIjoyMDcxNTQ1MjE2fQ.sDN7RjzXlaKD9bBEMfoLZo-SAwkQaG0G8-i6eARXv6A"
  },
  {
    id: 5,
    title: "5 Reasons The Oakland Raiders Should Trade The No. 4 Pick For Tom Brady",
    publication: "CA Coyle",
    date: "2015",
    content: "An analysis of why the Oakland Raiders should consider trading their number four overall pick in the NFL Draft for New England Patriots quarterback Tom Brady. The article explores the potential benefits of bringing the hometown hero and proven winner to Oakland to help revitalize the struggling franchise.",
    category: "Sports Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Reasons%20The%20Oakland%20Raiders%20Should%20Trade%20The%20No.%204%20Pick%20For%20Tom%20Brady.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgUmVhc29ucyBUaGUgT2FrbGFuZCBSYWlkZXJzIFNob3VsZCBUcmFkZSBUaGUgTm8uIDQgUGljayBGb3IgVG9tIEJyYWR5LnBkZiIsImlhdCI6MTc1NjE4NTQwOSwiZXhwIjoyMDcxNTQ1NDA5fQ.QUd2UGHmVeuf9JTXztl4VBLoU463MD-FQTwHhzrP2Xw"
  },
  {
    id: 6,
    title: "5 Tweets Proving Russell Wilson Is Even Nicer Than You Think",
    publication: "CA Coyle",
    date: "2014",
    content: "An examination of Russell Wilson's social media presence that demonstrates his exceptional character and humility. The article analyzes five specific tweets that showcase how the Seattle Seahawks quarterback goes above and beyond to show kindness, respect, and genuine care for his fans and community.",
    category: "Sports Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Tweets%20Proving%20Russell%20Wilson%20Is%20Even%20Nicer%20Than%20You%20Think.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgVHdlZXRzIFByb3ZpbmcgUnVzc2VsbCBXaWxzb24gSXMgRXZlbiBOaWNlciBUaGFuIFlvdSBUaGluay5wZGYiLCJpYXQiOjE3NTYxODU1NTIsImV4cCI6MjA3MTU0NTU1Mn0.B8QL6j8GAfyu6zLE5e7PdqncM_0f6VoyKPeQnVUVpY8"
  },
  {
    id: 7,
    title: "The Coup's Boots Riley Talks Funk, Domestic Espionage",
    publication: "CBS Seattle",
    date: "2013",
    content: "An in-depth interview with Boots Riley, frontman of the hip-hop outfit The Coup, discussing their European tour success, the evolution of their sound from programmed drums to live instrumentation, and their unique fusion of funk, punk, and hip-hop. The interview also covers political topics including the Edward Snowden NSA revelations and the Occupy Movement.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Boots%20Riley.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIEJvb3RzIFJpbGV5LnBkZiIsImlhdCI6MTc1NjE4NTcyOSwiZXhwIjoyMDcxNTQ1NzI5fQ.cCYJEBaMHi78aoyFsPICwsCUwsjkQdZIp8XVe_VsHH8"
  },
  {
    id: 8,
    title: "Cheap Time's Jeffrey Novak Digs His Bandmates, Talks Possible Covers Album",
    publication: "CBS Seattle",
    date: "2014",
    content: "An interview with Jeffrey Novak of Nashville garage rock trio Cheap Time, discussing their evolution from one-man band to full lineup, their recording process, and future plans including a potential covers album. The piece also covers their touring experiences with bands like Mudhoney and their unique blend of influences from The Saints to The Cramps.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Cheap%20Time.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIENoZWFwIFRpbWUucGRmIiwiaWF0IjoxNzU2MTg1NzcxLCJleHAiOjIwNzE1NDU3NzF9.SEFY5KdPYnGCmi0O8pJ_UZeZBOaVcb_CXrAa4nL5Ww8"
  },
  {
    id: 9,
    title: "Cheater Slicks Ride Westward After 13 Years",
    publication: "CBS Seattle",
    date: "2013",
    content: "An interview with guitarist and singer Tom Shannon of Cheater Slicks, discussing the band's long-awaited return to the west coast after 13 years, their evolution from clearing bars with loud, screeching music to a more groove-oriented sound, and their upcoming performance at the Portland Bender festival. The piece also covers their recording process and influence on the garage rock scene.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Cheater%20Slicks.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIENoZWF0ZXIgU2xpY2tzLnBkZiIsImlhdCI6MTc1NjE4NjA4NCwiZXhwIjoyMDcxNTQ2MDg0fQ.VJxzMLbIf5ncA9Zl-gasaDLoooDMKguXZlHxBd0gJOo"
  }
]

export function Catalog() {
  const [activeArticle, setActiveArticle] = useState<number>(0)
  const [sidebarWidth, setSidebarWidth] = useState<number>(33.333) // Initial width as percentage
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [expandedFolders, setExpandedFolders] = useState<{ [key: string]: boolean }>({
    'coyle-portfolio': true,
  })

  // Get current article info for path display
  const getCurrentArticleInfo = (articleIndex: number) => {
    const article = portfolioArticles[articleIndex]
    return {
      topLevel: 'coyle-portfolio',
      article
    }
  }

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }))
  }

  // Drag handling for resizable partition
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.querySelector('.directory-layout')
      if (!container) return
      
      const containerRect = container.getBoundingClientRect()
      const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100
      
      // Constrain the width between 20% and 80%
      const constrainedWidth = Math.min(Math.max(newWidth, 20), 80)
      setSidebarWidth(constrainedWidth)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const currentInfo = getCurrentArticleInfo(activeArticle)

  return (
    <div className="catalog-page">
      <div className={`directory-layout ${isDragging ? 'no-select' : ''}`}>
          {/* Left Sidebar - Directory Tree */}
          <div 
            className="directory-sidebar"
            style={{ width: `${sidebarWidth}%` }}
          >
            <div className="directory-header">
             
              <span className="folder-name">portfolio</span>
            </div>
            
            <div className="directory-tree">
              {/* Root Portfolio Directory */}
              <div className="folder-group">
                <div 
                  className="folder-item root-folder"
                  onClick={() => toggleFolder('coyle-portfolio')}
                >
                  <span className="expand-icon">
                    {expandedFolders['coyle-portfolio'] ? '▼' : '▶'}
                  </span>
                 
                  <span className="folder-name">Articles</span>
                  <span className="item-count">({portfolioArticles.length})</span>
                </div>
                
                {expandedFolders['coyle-portfolio'] && (
                  <div className="file-list">
                    {portfolioArticles.map((article, index) => (
                      <div
                        key={article.id}
                        className={`file-item ${activeArticle === index ? 'active' : ''}`}
                        onClick={() => setActiveArticle(index)}
                      >
                    
                        <span className={`file-name ${article.category === 'Music Journalism' ? 'music-article' : ''}`}>
                          {article.title.toLowerCase().replace(/[^a-z0-9]+/g, ' ')}.md
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Resize Handle */}
          <div 
            className={`resize-handle ${isDragging ? 'dragging' : ''}`}
            onMouseDown={handleMouseDown}
          ></div>
          
          {/* Right Content Area */}
          <div 
            className="article-viewer"
            style={{ width: `${100 - sidebarWidth}%` }}
          >
            <div className="article-content">
              <h1 className={currentInfo.article.category === 'Music Journalism' ? 'music-title' : ''}>
                {currentInfo.article.title}
              </h1>
              
              {currentInfo.article.pdfUrl ? (
                <div className="pdf-viewer">
                  <iframe
                    src={currentInfo.article.pdfUrl}
                    width="100%"
                    height="100%"
                    style={{
                      border: 'none',
                      borderRadius: '4px',
                      minHeight: 'calc(100vh - 250px)'
                    }}
                    title={currentInfo.article.title}
                  />
                </div>
              ) : (
                <div className="article-body">
                  <p>{currentInfo.article.content}</p>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}
