import { useState } from 'react'
import './Catalog.css'

interface Article {
  id: number
  title: string
  publication: string
  date: string
  excerpt: string
  content: string
  category: string
}

const journalismArticles: Article[] = [
  {
    id: 1,
    title: "Journalism and News: Example 1",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example journalism piece",
    content: "Sample content for journalism article",
    category: "Journalism and News Events"
  },
  {
    id: 2,
    title: "Journalism and News: Example 2",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example journalism piece",
    content: "Sample content for journalism article",
    category: "Journalism and News Events"
  },
  {
    id: 3,
    title: "Journalism and News: Example 3",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example journalism piece",
    content: "Sample content for journalism article",
    category: "Journalism and News Events"
  },
  {
    id: 4,
    title: "Journalism and News: Example 4",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example journalism piece",
    content: "Sample content for journalism article",
    category: "Journalism and News Events"
  }
]

const interviewsArticles: Article[] = [
  {
    id: 11,
    title: "Interviews and Biographies: Example 1",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example interview piece",
    content: "Sample content for interview article",
    category: "Interviews and Biographies"
  },
  {
    id: 12,
    title: "Interviews and Biographies: Example 2",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example interview piece",
    content: "Sample content for interview article",
    category: "Interviews and Biographies"
  },
  {
    id: 13,
    title: "Interviews and Biographies: Example 3",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example interview piece",
    content: "Sample content for interview article",
    category: "Interviews and Biographies"
  },
  {
    id: 14,
    title: "Interviews and Biographies: Example 4",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example interview piece",
    content: "Sample content for interview article",
    category: "Interviews and Biographies"
  }
]

const essaysArticles: Article[] = [
  {
    id: 21,
    title: "Essays: Example 1",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example essay piece",
    content: "Sample content for essay article",
    category: "Essays"
  },
  {
    id: 22,
    title: "Essays: Example 2",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example essay piece",
    content: "Sample content for essay article",
    category: "Essays"
  },
  {
    id: 23,
    title: "Essays: Example 3",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example essay piece",
    content: "Sample content for essay article",
    category: "Essays"
  },
  {
    id: 24,
    title: "Essays: Example 4",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example essay piece",
    content: "Sample content for essay article",
    category: "Essays"
  }
]

const otherProjectsArticles: Article[] = [
  {
    id: 25,
    title: "Other Large Projects: Example 1",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example large project",
    content: "Sample content for large project",
    category: "Other Large Projects"
  },
  {
    id: 26,
    title: "Other Large Projects: Example 2",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example large project",
    content: "Sample content for large project",
    category: "Other Large Projects"
  },
  {
    id: 27,
    title: "Other Large Projects: Example 3",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example large project",
    content: "Sample content for large project",
    category: "Other Large Projects"
  },
  {
    id: 28,
    title: "Other Large Projects: Example 4",
    publication: "Sample Publication",
    date: "2024",
    excerpt: "Example large project",
    content: "Sample content for large project",
    category: "Other Large Projects"
  }
]

export function Catalog() {
  const [activeArticle, setActiveArticle] = useState<number>(0)
  const [sidebarWidth, setSidebarWidth] = useState<number>(33.333) // Initial width as percentage
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [expandedFolders, setExpandedFolders] = useState<{ [key: string]: boolean }>({
    'coyle-portfolio': true,
    'journalism': true,
    'interviews': false,
    'essays': false,
    'other-projects': false,
  })

  // Combine all articles
  const allArticles = [...journalismArticles, ...interviewsArticles, ...essaysArticles, ...otherProjectsArticles]

  // Get current article info for path display
  const getCurrentArticleInfo = (articleIndex: number) => {
    const article = allArticles[articleIndex]
    if (journalismArticles.find(a => a.id === article.id)) {
      return {
        topLevel: 'coyle-portfolio',
        subDirectory: 'journalism',
        article
      }
    } else if (interviewsArticles.find(a => a.id === article.id)) {
      return {
        topLevel: 'coyle-portfolio',
        subDirectory: 'interviews',
        article
      }
    } else if (essaysArticles.find(a => a.id === article.id)) {
      return {
        topLevel: 'coyle-portfolio',
        subDirectory: 'essays',
        article
      }
    } else {
      return {
        topLevel: 'coyle-portfolio',
        subDirectory: 'other-projects',
        article
      }
    }
  }

  // Get articles with their original indices
  const getJournalismArticles = () => {
    return journalismArticles.map((article, index) => ({ ...article, originalIndex: index }))
  }

  const getInterviewsArticles = () => {
    return interviewsArticles.map((article, index) => ({ ...article, originalIndex: index + journalismArticles.length }))
  }

  const getEssaysArticles = () => {
    return essaysArticles.map((article, index) => ({ ...article, originalIndex: index + journalismArticles.length + interviewsArticles.length }))
  }

  const getOtherProjectsArticles = () => {
    return otherProjectsArticles.map((article, index) => ({ ...article, originalIndex: index + journalismArticles.length + interviewsArticles.length + essaysArticles.length }))
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
                    {/* Journalism and News Events Directory */}
                    <div className="folder-group nested">
                      <div 
                        className="folder-item sub-folder"
                        onClick={() => toggleFolder('journalism')}
                      >
                        <span className="expand-icon">
                          {expandedFolders['journalism'] ? '▼' : '▶'}
                        </span>
                        <span className="folder-icon">📁</span>
                        <span className="folder-name">journalism-and-news-events/</span>
                        <span className="item-count">({journalismArticles.length})</span>
                      </div>
                      
                      {expandedFolders['journalism'] && (
                        <div className="file-list">
                          {getJournalismArticles().map((article) => (
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

                    {/* Interviews and Biographies Directory */}
                    <div className="folder-group nested">
                      <div 
                        className="folder-item sub-folder"
                        onClick={() => toggleFolder('interviews')}
                      >
                        <span className="expand-icon">
                          {expandedFolders['interviews'] ? '▼' : '▶'}
                        </span>
                        <span className="folder-icon">📁</span>
                        <span className="folder-name">interviews-and-biographies/</span>
                        <span className="item-count">({interviewsArticles.length})</span>
                      </div>
                      
                      {expandedFolders['interviews'] && (
                        <div className="file-list">
                          {getInterviewsArticles().map((article) => (
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

                    {/* Essays Directory */}
                    <div className="folder-group nested">
                      <div 
                        className="folder-item sub-folder"
                        onClick={() => toggleFolder('essays')}
                      >
                        <span className="expand-icon">
                          {expandedFolders['essays'] ? '▼' : '▶'}
                        </span>
                        <span className="folder-icon">📁</span>
                        <span className="folder-name">essays/</span>
                        <span className="item-count">({essaysArticles.length})</span>
                      </div>
                      
                      {expandedFolders['essays'] && (
                        <div className="file-list">
                          {getEssaysArticles().map((article) => (
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

                    {/* Other Large Projects Directory */}
                    <div className="folder-group nested">
                      <div 
                        className="folder-item sub-folder"
                        onClick={() => toggleFolder('other-projects')}
                      >
                        <span className="expand-icon">
                          {expandedFolders['other-projects'] ? '▼' : '▶'}
                        </span>
                        <span className="folder-icon">📁</span>
                        <span className="folder-name">other-large-projects/</span>
                        <span className="item-count">({otherProjectsArticles.length})</span>
                      </div>
                      
                      {expandedFolders['other-projects'] && (
                        <div className="file-list">
                          {getOtherProjectsArticles().map((article) => (
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
              <p className="excerpt">{currentInfo.article.excerpt}</p>
              <div className="article-body">
                <p>{currentInfo.article.content}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
