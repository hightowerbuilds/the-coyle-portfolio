import { useState } from 'react'
import { useScreenSize } from '../../hooks/useScreenSize'
import './SportsParodies.css'

interface SportsParody {
  id: number
  title: string
  publication: string
  date: string
  pdfUrl?: string
  pseudoName: string
}

const sportsParodies: SportsParody[] = [
  {
    id: 1,
    title: "5 Former MLB Players Whose Nicknames Make No Sense At All",
    publication: "CA Coyle",
    date: "2024",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Former%20MLB%20Players%20Whose%20Nicknames%20Make%20No%20Sense%20At%20All.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgRm9ybWVyIE1MQiBQbGF5ZXJzIFdob3NlIE5pY2tuYW1lcyBNYWtlIE5vIFNlbnNlIEF0IEFsbC5wZGYiLCJpYXQiOjE3NTYwOTIxOTYsImV4cCI6MjA3MTQ1MjE5Nn0.N5x5sWH2B-_5e_nB-tvAWE0Xb9FfSTZiZU5jJRpLFUI",
    pseudoName: "Pauline Allendorf"
  },
  {
    id: 2,
    title: "5 Indications Slugerrr Is Sending The Wrong Message To Kids",
    publication: "CA Coyle",
    date: "2024",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Indications%20Slugerrr%20Is%20Sending%20The%20Wrong%20Message%20To%20Kids.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgSW5kaWNhdGlvbnMgU2x1Z2VycnIgSXMgU2VuZGluZyBUaGUgV3JvbmcgTWVzc2FnZSBUbyBLaWRzLnBkZiIsImlhdCI6MTc1NjA5NjU3MiwiZXhwIjoyMDcxNDU2NTcyfQ.paFFEZYePzZS2v-u3NJ5ySuXmKbbIx3qoZGm-b3_4Ac",
    pseudoName: "Alvin Monroe"
  },
  {
    id: 3,
    title: "5 NFL Players In The Race For MVP",
    publication: "CA Coyle",
    date: "2014",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20NFL%20Players%20In%20The%20Race%20For%20MVP.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgTkZMIFBsYXllcnMgSW4gVGhlIFJhY2UgRm9yIE1WUC5wZGYiLCJpYXQiOjE3NTYwOTY2MzUsImV4cCI6MjA3MTQ1NjYzNX0.erbFGoxWhtDiZnEGWUjGJwNnAmCeIzGtF2QZbnQ_jZ4",
    pseudoName: "Aaron Gibbons"
  },
  {
    id: 4,
    title: "5 Pro Athletes Who Share Names With Famous Rockers",
    publication: "CA Coyle",
    date: "2024",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Pro%20Athletes%20Who%20Share%20Names%20With%20Famous%20Rockers.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgUHJvIEF0aGxldGVzIFdobyBTaGFyZSBOYW1lcyBXaXRoIEZhbW91cyBSb2NrZXJzLnBkZiIsImlhdCI6MTc1NjE4NTIxNiwiZXhwIjoyMDcxNTQ1MjE2fQ.sDN7RjzXlaKD9bBEMfoLZo-SAwkQaG0G8-i6eARXv6A",
    pseudoName: "Alvin Monroe"
  },
  {
    id: 5,
    title: "5 Reasons The Oakland Raiders Should Trade The No. 4 Pick For Tom Brady",
    publication: "CA Coyle",
    date: "2015",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Reasons%20The%20Oakland%20Raiders%20Should%20Trade%20The%20No.%204%20Pick%20For%20Tom%20Brady.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgUmVhc29ucyBUaGUgT2FrbGFuZCBSYWlkZXJzIFNob3VsZCBUcmFkZSBUaGUgTm8uIDQgUGljayBGb3IgVG9tIEJyYWR5LnBkZiIsImlhdCI6MTc1NjE4NTQwOSwiZXhwIjoyMDcxNTQ1NDA5fQ.QUd2UGHmVeuf9JTXztl4VBLoU463MD-FQTwHhzrP2Xw",
    pseudoName: "Alvin Monroe"
  },
  {
    id: 6,
    title: "5 Tweets Proving Russell Wilson Is Even Nicer Than You Think",
    publication: "CA Coyle",
    date: "2014",
    pdfUrl: "https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/sign/pdfs/coyle-portfolio/CA%20Coyle%20-%205%20Tweets%20Proving%20Russell%20Wilson%20Is%20Even%20Nicer%20Than%20You%20Think.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81M2U0NjZkNi1jMDhjLTQzMDEtYjYxMy01OTU4NGMyMGM0NTkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL2NveWxlLXBvcnRmb2xpby9DQSBDb3lsZSAtIDUgVHdlZXRzIFByb3ZpbmcgUnVzc2VsbCBXaWxzb24gSXMgRXZlbiBOaWNlciBUaGFuIFlvdSBUaGluay5wZGYiLCJpYXQiOjE3NTYxODU1NTIsImV4cCI6MjA3MTU0NTU1Mn0.B8QL6j8GAfyu6zLE5e7PdqncM_0f6VoyKPeQnVUVpY8",
    pseudoName: "Pepper Wilson"
  }
]

export function SportsParodies() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const { isMobile } = useScreenSize()

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  const currentParody = sportsParodies[activeTab]

  return (
    <div className="sports-parodies-page">
      <div className="container">
        <h1>Sports Parodies</h1>
        
        <section className="parodies-intro">
          <div className="backstory-section">
            <p>
              <em>Introduction to these articles is on the way.</em>
            </p>
          </div>
        </section>

        <section className="parodies-content">
          {/* Mini Tabs */}
          <div className="mini-tabs-container">
            <div className="mini-tabs">
              {sportsParodies.map((parody, index) => (
                <button
                  key={parody.id}
                  className={`mini-tab ${activeTab === index ? 'active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  <span className="tab-number">{index + 1}</span>
                  <div className="tab-content">
                    <span className="tab-title">{parody.title}</span>
                    <span className="tab-pseudo-name">by {parody.pseudoName}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="parody-content-area">
            <div className="parody-header">
              <h2>{currentParody.title}</h2>
              <div className="parody-meta">
                <span className="publication">{currentParody.publication}</span>
                <span className="date">{currentParody.date}</span>
              </div>
            </div>

            <div className="parody-body">
              <div className="pdf-viewer">
                <iframe
                  src={currentParody.pdfUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 'none',
                    borderRadius: '4px',
                    minHeight: isMobile ? '60vh' : '70vh'
                  }}
                  title={currentParody.title}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}