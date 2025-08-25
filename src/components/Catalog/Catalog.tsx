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

const musicJournalismArticles: Article[] = [
  {
    id: 1,
    title: "Music Journalism: Example 1",
    publication: "Sample Publication",
    date: "2024",
    content: "Sample content for music journalism article",
    category: "Music Journalism"
  },
  {
    id: 2,
    title: "Music Journalism: Example 2",
    publication: "Sample Publication",
    date: "2024",
    content: "Sample content for music journalism article",
    category: "Music Journalism"
  },
  {
    id: 3,
    title: "Music Journalism: Example 3",
    publication: "Sample Publication",
    date: "2024",
    content: "Sample content for music journalism article",
    category: "Music Journalism"
  },
  {
    id: 4,
    title: "Music Journalism: Example 4",
    publication: "Sample Publication",
    date: "2024",
    content: "Sample content for music journalism article",
    category: "Music Journalism"
  }
]

const sportsJournalismArticles: Article[] = [
  {
    id: 11,
    title: "5 Former MLB Players Whose Nicknames Make No Sense At All",
    publication: "CA Coyle",
    date: "2024",
    content: "An entertaining examination of former MLB players whose nicknames seem to have no logical connection to their playing style, personality, or background. This piece explores the curious origins of these monikers and what they reveal about baseball culture and the creative ways fans and teammates come up with player identities.",
    category: "Sports Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Former%20MLB%20Players%20Whose%20Nicknames%20Make%20No%20Sense%20At%20All.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgRm9ybWVyIE1MQiBQbGF5ZXJzIFdob3NlIE5pY2tuYW1lcyBNYWtlIE5vIFNlbnNlIEF0IEFsbC5wZGYiLCJpYXQiOjE3NTYwOTIxOTYsImV4cCI6MjA3MTQ1MjE5Nn0.N5x5sWH2B-_5e_nB-tvAWE0Xb9FfSTZiZU5jJRpLFUI"
  },
  {
    id: 12,
    title: "5 Indications Slugerrr Is Sending The Wrong Message To Kids",
    publication: "CA Coyle",
    date: "2024",
    content: "An analysis of how Slugerrr's messaging and content may be sending inappropriate signals to young audiences. This piece examines the potential negative impacts and suggests ways to address these concerns.",
    category: "Sports Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Indications%20Slugerrr%20Is%20Sending%20The%20Wrong%20Message%20To%20Kids.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgSW5kaWNhdGlvbnMgU2x1Z2VycnIgSXMgU2VuZGluZyBUaGUgV3JvbmcgTWVzc2FnZSBUbyBLaWRzLnBkZiIsImlhdCI6MTc1NjA5NjU3MiwiZXhwIjoyMDcxNDU2NTcyfQ.paFFEZYePzZS2v-u3NJ5ySuXmKbbIx3qoZGm-b3_4Ac"
  },
  {
    id: 13,
    title: "5 NFL Players In The Race For MVP",
    publication: "CA Coyle",
    date: "2014",
    content: "An analysis of the top 5 NFL punters competing for the unofficial Most Valuable Punter award. The article examines statistics like return yards allowed, punts inside the 20-yard line, net yardage, and total punt distance to determine which punter deserves the title.",
    category: "Sports Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20NFL%20Players%20In%20The%20Race%20For%20MVP.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgTkZMIFBsYXllcnMgSW4gVGhlIFJhY2UgRm9yIE1WUC5wZGYiLCJpYXQiOjE3NTYwOTY2MzUsImV4cCI6MjA3MTQ1NjYzNX0.erbFGoxWhtDiZnEGWUjGJwNnAmCeIzGtF2QZbnQ_jZ4"
  },
  {
    id: 14,
    title: "Sports Journalism: Example 4",
    publication: "Sample Publication",
    date: "2024",
    content: "Sample content for sports journalism article",
    category: "Sports Journalism"
  }
]

export function Catalog() {
  const [activeArticle, setActiveArticle] = useState<number>(0)
  const [sidebarWidth, setSidebarWidth] = useState<number>(33.333) // Initial width as percentage
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [expandedFolders, setExpandedFolders] = useState<{ [key: string]: boolean }>({
    'coyle-portfolio': true,
    'music-journalism': true,
    'sports-journalism': false,
  })

  // Combine all articles
  const allArticles = [...musicJournalismArticles, ...sportsJournalismArticles]

  // Get current article info for path display
  const getCurrentArticleInfo = (articleIndex: number) => {
    const article = allArticles[articleIndex]
    if (musicJournalismArticles.find(a => a.id === article.id)) {
      return {
        topLevel: 'coyle-portfolio',
        subDirectory: 'music-journalism',
        article
      }
    } else {
      return {
        topLevel: 'coyle-portfolio',
        subDirectory: 'sports-journalism',
        article
      }
    }
  }

  // Get articles with their original indices
  const getMusicJournalismArticles = () => {
    return musicJournalismArticles.map((article, index) => ({ ...article, originalIndex: index }))
  }

  const getSportsJournalismArticles = () => {
    return sportsJournalismArticles.map((article, index) => ({ ...article, originalIndex: index + musicJournalismArticles.length }))
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
              <span className="folder-icon">📁</span>
              <span className="folder-name">coyle-portfolio/</span>
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
                  <span className="folder-icon">📁</span>
                  <span className="folder-name">coyle-portfolio/</span>
                  <span className="item-count">({allArticles.length})</span>
                </div>
                
                {expandedFolders['coyle-portfolio'] && (
                  <div className="subdirectory-list">
                    {/* Music Journalism Directory */}
                    <div className="folder-group nested">
                      <div 
                        className="folder-item sub-folder"
                        onClick={() => toggleFolder('music-journalism')}
                      >
                        <span className="expand-icon">
                          {expandedFolders['music-journalism'] ? '▼' : '▶'}
                        </span>
                        <span className="folder-icon">📁</span>
                        <span className="folder-name">music-journalism/</span>
                        <span className="item-count">({musicJournalismArticles.length})</span>
                      </div>
                      
                      {expandedFolders['music-journalism'] && (
                        <div className="file-list">
                          {getMusicJournalismArticles().map((article) => (
                            <div
                              key={article.id}
                              className={`file-item ${activeArticle === article.originalIndex ? 'active' : ''}`}
                              onClick={() => setActiveArticle(article.originalIndex)}
                            >
                              <span className="file-icon">📄</span>
                              <span className="file-name">
                                {article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Sports Journalism Directory */}
                    <div className="folder-group nested">
                      <div 
                        className="folder-item sub-folder"
                        onClick={() => toggleFolder('sports-journalism')}
                      >
                        <span className="expand-icon">
                          {expandedFolders['sports-journalism'] ? '▼' : '▶'}
                        </span>
                        <span className="folder-icon">📁</span>
                        <span className="folder-name">sports-journalism/</span>
                        <span className="item-count">({sportsJournalismArticles.length})</span>
                      </div>
                      
                      {expandedFolders['sports-journalism'] && (
                        <div className="file-list">
                          {getSportsJournalismArticles().map((article) => (
                            <div
                              key={article.id}
                              className={`file-item ${activeArticle === article.originalIndex ? 'active' : ''}`}
                              onClick={() => setActiveArticle(article.originalIndex)}
                            >
                              <span className="file-icon">📄</span>
                              <span className="file-name">
                                {article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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
            <div className="article-header">
              <div className="file-path">
                <span className="path-segment">{currentInfo.topLevel}</span>
                <span className="path-separator">/</span>
                <span className="path-segment">{currentInfo.subDirectory}</span>
                <span className="path-separator">/</span>
                <span className="path-segment active-file">
                  {currentInfo.article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md
                </span>
              </div>
              
              <div className="article-meta">
                <span className="article-category">{currentInfo.article.category}</span>
                <span className="publication">{currentInfo.article.publication}</span>
                <span className="date">{currentInfo.article.date}</span>
              </div>
            </div>
            
            <div className="article-content">
              <h1>{currentInfo.article.title}</h1>
              
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
