import { useState, useEffect } from 'react'
import { useScreenSize } from '../../hooks/useScreenSize'
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
    id: 7,
    title: "The Coup's Boots Riley Talks Funk, Domestic Espionage",
    publication: "CBS Seattle",
    date: "2013",
    content: "An in-depth interview with Boots Riley, frontman of the hip-hop outfit The Coup, discussing their European tour success, the evolution of their sound from programmed drums to live instrumentation, and their unique fusion of funk, punk, and hip-hop. The interview also covers political topics including the Edward Snowden NSA revelations and the Occupy Movement.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Boots%20Riley.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIEJvb3RzIFJpbGV5LnBkZiIsImlhdCI6MTc1NzIxMzA5NSwiZXhwIjoyMDcyNTczMDk1fQ.zGNPp8vYXbO2E3wKhliUqhxAuMfMx79CfD6En1ZBa0U"
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
  },
  {
    id: 10,
    title: "Girl Trouble",
    publication: "CBS Seattle",
    date: "2014",
    content: "A music journalism piece covering the band Girl Trouble, showcasing your continued coverage of the Seattle music scene and underground bands.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Girl%20Trouble.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIEdpcmwgVHJvdWJsZS5wZGYiLCJpYXQiOjE3NTYyNjkzNTEsImV4cCI6MjA3MTYyOTM1MX0.Nh-2Gmudv0lnLwE1PskJ0v5XfoA5jW0wfmaAWmXc5Pw"
  },
  {
    id: 11,
    title: "Abrasive, Japanese Rock Trio Guitar Wolf Returns With Erratic Vibration",
    publication: "CBS Seattle",
    date: "2013",
    content: "A profile of the Japanese power trio Guitar Wolf, discussing their signature recording technique, their evolution from 1987 to present, and their new album Beast Vibrator. The piece covers their unique blend of 50s rockabilly aesthetics with thrash garage rock, their connection to Seattle label Bag of Hammers, and their upcoming show at Chop Suey.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Guitar%20Wolf.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIEd1aXRhciBXb2xmLnBkZiIsImlhdCI6MTc1NjI2OTU0MywiZXhwIjoyMDcxNjI5NTQzfQ.Od57IJmGGNwi-9u37JxdNw66dcpoqNtjcQ836TZMKBc"
  },
  {
    id: 12,
    title: "Jon Spencer",
    publication: "CBS Seattle",
    date: "2014",
    content: "A music journalism piece covering Jon Spencer, showcasing your continued coverage of the Seattle music scene and influential artists.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Jon%20Spencer%201.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIEpvbiBTcGVuY2VyIDEucGRmIiwiaWF0IjoxNzU2MjY5Njg2LCJleHAiOjIwNzE2Mjk2ODZ9.w3YESDWbHLIFACpTAzmMyd5QruCrtDzqY5NJSvXJpf8"
  },
  {
    id: 13,
    title: "Jon Spencer On The Liberation That Comes With A Stripped-Down Record",
    publication: "CBS Seattle",
    date: "2015",
    content: "An in-depth interview with Jon Spencer discussing the Jon Spencer Blues Explosion's new album Freedom Tower – No Wave Dance Party, their recording process at Daptone Studios, and the New York City themes running through the record. The piece covers their evolution over 25 years and their approach to creating powerful music with limited resources.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Jon%20Spencer%202.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIEpvbiBTcGVuY2VyIDIucGRmIiwiaWF0IjoxNzU2MjY5OTgwLCJleHAiOjIwNzE2Mjk5ODB9.u5F6qdcWZel9Jxwa0A_Wi9u019yT3qSYzlM1iFv9_Xg"
  },
  {
    id: 14,
    title: "Arish Khan On The Preciousness Of The Latest Shrines Album",
    publication: "CBS Seattle",
    date: "2013",
    content: "An in-depth interview with Arish (King) Khan discussing King Khan & The Shrines' latest album 'Idle No More', which represents a departure from their usual party-focused soul music to explore deeper themes of loss, healing, and spiritual transformation. The piece covers Khan's personal struggles, the evolution of their sound with new instrumentation, and his connection to The Spits and other garage rock projects.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20King%20Khan%20and%20the%20Shrines.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIEtpbmcgS2hhbiBhbmQgdGhlIFNocmluZXMucGRmIiwiaWF0IjoxNzU2MzU2MjYyLCJleHAiOjIwNzE3MTYyNjJ9.nxXNcolpYr5FTCmF3ksuDC5GnpV9VxE5mj87D2m6Heo"
  },
  {
    id: 15,
    title: "Bellingham's 'Drunk/Punk' Quartet Mono Men Come Out Of Hibernation",
    publication: "CBS Seattle",
    date: "2013",
    content: "A feature on the Mono Men, Bellingham's legendary garage rock band, emerging from a 7-year hiatus to play shows in 2013. The piece covers their reunion for a friend's birthday party, their evolution from the early 90s garage rock scene, their connection to Estrus Records, and their plans for future shows including a South American tour. Features interviews with band members discussing how their approach to music has changed over time.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Mono%20Men.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIE1vbm8gTWVuLnBkZiIsImlhdCI6MTc1NjM1NjI5MywiZXhwIjoyMDcxNzE2MjkzfQ.4H_XcZDqAVWnGUDGCjBXD-Q61dWVGwRSjuqYKUQ4Plo"
  },
  {
    id: 16,
    title: "Catching Up With Seattle's Favorite Honey, Mark Arm",
    publication: "CBS Seattle",
    date: "2013",
    content: "An interview with Mudhoney frontman Mark Arm discussing the band's upcoming album 'Vanishing Point', their February 2nd show with The Sonics at Showbox Market, and Arm's experience with the New Original Sonics Sound project. The piece covers Arm's guitar playing on the new album, their Northwest tour dates, and includes humorous commentary about KZOK radio's Top 1002 Classic Rock countdown, including mentions of The Wipers and other Northwest bands.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Mudhoney.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIE11ZGhvbmV5LnBkZiIsImlhdCI6MTc1NjM1NjMyMywiZXhwIjoyMDcxNzE2MzIzfQ.SqOvc2t3VxsdEwSlCn9Q5O867F6w7BN-UuDRI-X6XQQ"
  },
  {
    id: 17,
    title: "'Razing The Bar' Celebrates Seattle's Music Community, Warns Of Artless Future",
    publication: "CBS Seattle",
    date: "2014",
    content: "A feature on Ryan Worsley's documentary 'Razing the Bar' about the closure of Seattle's legendary punk venue The Funhouse. The piece covers the venue's demolition to make way for condos, its role as a launching pad for new bands, and the broader implications of gentrification on Seattle's DIY music scene. Features interviews with Worsley and venue owner Brian Foss, plus mentions of local bands like The Spits, Wimps, and The Intelligence.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Razing%20the%20Bar.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIFJhemluZyB0aGUgQmFyLnBkZiIsImlhdCI6MTc1NjM1NjM1MywiZXhwIjoyMDcxNzE2MzUzfQ.E3B4kWdyWtVsR4EcRk8mEriKfg7TI35VE9ld6gYZBeI"
  },
  {
    id: 18,
    title: "Missing Reels And 'Not Touring': Checking In With Rocket From The Crypt",
    publication: "CBS Seattle",
    date: "2014",
    content: "An in-depth interview with Rocket from the Crypt frontman John Reis (Speedo) about the band's reunion and upcoming Pacific Northwest shows. The piece covers Reis's personal discovery of the band through college radio, their 2013 European reunion tour, and their relaxed approach to playing shows. Features discussion of unreleased material, Reis's other projects (Hot Snakes, Drive Like Jehu), and his thoughts on Seattle bands like The Enemy.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Rocket%20from%20the%20Crypt.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIFJvY2tldCBmcm9tIHRoZSBDcnlwdC5wZGYiLCJpYXQiOjE3NTYzNTY0MzEsImV4cCI6MjA3MTcxNjQzMX0.maksRx2gPuO12EPVmiAvseOE1pTwOXARI4hRT980ZFQ"
  },
  {
    id: 19,
    title: "Sonny Vincent's Latest Recording Session Produced A Brilliant Album And A Fight",
    publication: "CBS Seattle",
    date: "2014",
    content: "An interview with punk rock icon Sonny Vincent about his latest album 'Spiteful' recorded with an all-star lineup including Glen Matlock (Sex Pistols), Rat Scabies (The Damned), and Steve Mackay (The Stooges). The piece covers recording in a vintage analog studio in Brussels, a hilarious studio fight between Rat Scabies and Glen Matlock, equipment malfunctions with 1950s gear, and Vincent's long career from The Testors to his current projects.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Sonny%20Vincent.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIFNvbm55IFZpbmNlbnQucGRmIiwiaWF0IjoxNzU2MzU2NDUwLCJleHAiOjIwNzE3MTY0NTB9.SJgQRvcZwlEgqyTjxjvshRpD73u6fQR2nJhgR0z38hQ"
  },
  {
    id: 20,
    title: "The King Khan and BBQ Show",
    publication: "CBS Seattle",
    date: "2014",
    content: "A music journalism piece covering The King Khan and BBQ Show, King Khan's stripped-down duo project with Mark Sultan (BBQ). This piece showcases the continued coverage of King Khan's various musical projects and the underground garage rock scene.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20The%20King%20Khan%20and%20BBQ%20Show.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIFRoZSBLaW5nIEtoYW4gYW5kIEJCUSBTaG93LnBkZiIsImlhdCI6MTc1NjM1NjQ3OSwiZXhwIjoyMDcxNzE2NDc5fQ.RsN6H1KY6bhceQnYM0vm7_Di2lMcGyskkXZUJVxjisA"
  },
  {
    id: 21,
    title: "Oblivians Take New Record To The Road, Make Rare Seattle Stop",
    publication: "CBS Seattle",
    date: "2013",
    content: "An interview with Greg Cartwright of The Oblivians about their first full-length album 'Desperation' since 1997, their reunion after a long hiatus, and their upcoming show at Neumos. The piece covers their recording process, European tour with The Gories, Cartwright's vinyl collecting habits on tour, and their connection to the Northwest music scene through Dave Crider and Estrus Records. Features discussion of how the band balances family life with their various side projects.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20The%20Oblivians.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIFRoZSBPYmxpdmlhbnMucGRmIiwiaWF0IjoxNzU2MzU2NTEwLCJleHAiOjIwNzE3MTY1MTB9.AN_4PFpHGmXlI7R_t4_TAKfa58xb9tU7azkloLR_8g8"
  },
  {
    id: 22,
    title: "Tom Price Not 'Working Out Logarithms On The Blackboard' For Desert Classic Songs",
    publication: "CBS Seattle",
    date: "2014",
    content: "An interview with Tom Price about The Tom Price Desert Classic's debut LP 'Hell' and his long history in the Seattle music scene. The piece covers Price's evolution from U-Men (who planted grunge seeds) to Gas Huffer to Monkeywrench, how he's adapted his playing style after being diagnosed with Parkinson's disease, and his current approach to music with simpler song structures. Features discussion of the changing Seattle music scene, his upcoming show opening for Mudhoney, and his friendship with Tim Kerr.",
    category: "Music Journalism",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CBS%20SEATTLE%20-%20Tom%20Price.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQlMgU0VBVFRMRSAtIFRvbSBQcmljZS5wZGYiLCJpYXQiOjE3NTYzNTY1MzQsImV4cCI6MjA3MTcxNjUzNH0.ygxM115PfBkNUY9RYLS_DkTlANZPhfot6v8on3fy0IQ"
  }
]

export function Catalog() {
  const [activeArticle, setActiveArticle] = useState<number>(0)
  const [sidebarWidth, setSidebarWidth] = useState<number>(33.333) // Initial width as percentage
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [expandedFolders, setExpandedFolders] = useState<{ [key: string]: boolean }>({
    'coyle-portfolio': true,
  })
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'music': true,
  })
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalArticle, setModalArticle] = useState<Article | null>(null)
  const { isMobile } = useScreenSize()

  // Handle URL parameter to open specific article
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const articleId = urlParams.get('article')
    console.log('URL article param:', articleId) // Debug log
    
    if (articleId) {
      const articleIndex = portfolioArticles.findIndex(article => article.id === parseInt(articleId))
      console.log('Found article at index:', articleIndex) // Debug log
      
      if (articleIndex !== -1) {
        setActiveArticle(articleIndex)
        
        // Scroll to the article in the sidebar after a short delay
        setTimeout(() => {
          const activeFileItem = document.querySelector(`.file-item:nth-child(${articleIndex + 1})`)
          if (activeFileItem) {
            activeFileItem.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }, 100)
      }
    }
  }, [])

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

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }))
  }

  const openModal = (article: Article) => {
    setModalArticle(article)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalArticle(null)
  }

  const handleArticleClick = (index: number) => {
    if (isMobile) {
      openModal(portfolioArticles[index])
    } else {
      setActiveArticle(index)
    }
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

  // Mobile layout
  if (isMobile) {
    // Group articles by category
    const musicArticles = portfolioArticles.filter(article => article.category === 'Music Journalism')

    return (
      <div className="catalog-page">
        <div className="mobile-catalog">
          <h1>Catalog</h1>
          <p className="catalog-intro">
            The following articles have been published by CBS Seattle, KEXP, and other outlets.
          </p>
          
          {/* Music Journalism Section */}
          <div className="article-section">
            <div 
              className="section-header music-section"
              onClick={() => toggleSection('music')}
            >
              <span className="section-expand-icon">
                {expandedSections['music'] ? '▼' : '▶'}
              </span>
              <h2 className="section-title music-section">Music Journalism</h2>
              <span className="section-count">({musicArticles.length})</span>
            </div>
            <div className={`mobile-article-list ${expandedSections['music'] ? 'expanded' : 'collapsed'}`}>
              {musicArticles.map((article) => (
                <div
                  key={article.id}
                  className="mobile-article-item"
                  onClick={() => openModal(article)}
                >
                  <h3 className="music-title">{article.title}</h3>
                  <p className="article-meta">
                    {article.publication} • {article.date}
                  </p>
                  <p className="article-excerpt">{article.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Modal */}
        {isModalOpen && modalArticle && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{modalArticle.title}</h2>
                <button className="modal-close" onClick={closeModal}>
                  Done
                </button>
              </div>
              <div className="modal-body">
                {modalArticle.pdfUrl ? (
                  <div className="mobile-pdf-viewer">
                    <iframe
                      src={`https://docs.google.com/viewer?url=${encodeURIComponent(modalArticle.pdfUrl)}&embedded=true`}
                      width="100%"
                      height="100%"
                      style={{
                        border: 'none',
                        borderRadius: '4px',
                        minHeight: '70vh'
                      }}
                      title={modalArticle.title}
                    />
                    <div className="pdf-fallback-mobile">
                      <p><strong>Having trouble viewing?</strong></p>
                      <a 
                        href={modalArticle.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="download-pdf-btn"
                      >
                        Open PDF in New Tab
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="article-content">
                    <p>{modalArticle.content}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Desktop layout
  return (
    <div className="catalog-page">
      <p className="catalog-intro">
        The following articles have been published by CBS Seattle, KEXP, and other outlets.
      </p>
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
                        onClick={() => handleArticleClick(index)}
                      >
                    
                        <span className={`file-name ${article.category === 'Music Journalism' ? 'music-article' : ''}`}>
                          {`${article.title.toLowerCase()}`}
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
                    onError={() => {
                      console.log('PDF failed to load, showing content instead')
                    }}
                  />
                  <div className="pdf-fallback">
                    <p><strong>PDF Viewer</strong></p>
                    <p>If the PDF doesn't load, here's the article summary:</p>
                    <div className="article-body">
                      <p>{currentInfo.article.content}</p>
                    </div>
                  </div>
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
