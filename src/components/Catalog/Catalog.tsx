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

const padresArticles: Article[] = [
  {
    id: 1,
    title: "Tony Gwynn: The Art of Hitting Perfection",
    publication: "San Diego Tribune",
    date: "March 2024",
    excerpt: "Examining the legendary career of Mr. Padre and his pursuit of the .400 season.",
    content: "Tony Gwynn's pursuit of baseball perfection defined not just his career, but an entire generation of San Diego baseball. The eight-time batting champion came closer to hitting .400 than anyone since Ted Williams, finishing the strike-shortened 1994 season at .394. Gwynn's meticulous approach to hitting was legendary - he would study hours of video footage, analyzing every at-bat with the precision of a scientist. His 3,141 career hits and .338 lifetime batting average represent more than statistics; they embody a relentless dedication to craft that made him the most beloved figure in Padres history. Beyond the numbers, Gwynn's loyalty to San Diego and his role in the community established him as the gold standard for what it means to be a franchise player.\n\nGwynn's hitting philosophy was revolutionary for its time. While other players relied on raw power or natural instinct, Gwynn approached hitting like a chess master studying his opponent's moves. He would spend hours in the video room, not just watching his own at-bats, but studying the tendencies of opposing pitchers. He knew that Greg Maddux threw his changeup 68% of the time on 2-1 counts, that Randy Johnson's slider broke six inches more on humid nights, and that Pedro Martinez's fastball location patterns changed dramatically when runners were in scoring position. This wasn't just preparation - it was obsession elevated to an art form.\n\nThe numbers tell only part of Gwynn's story. His .394 average in 1994 wasn't just close to .400; it represented the culmination of a decade-long quest to reach baseball's most elusive milestone. When the strike ended the season prematurely, robbing him of 47 games, Gwynn was devastated not for personal glory, but because he genuinely believed he was on the verge of something historic. Former teammates recall finding him in the clubhouse days after the strike was announced, still in uniform, hitting balls off a tee with tears in his eyes.\n\nWhat separated Gwynn from his contemporaries was his understanding of the strike zone as a three-dimensional space rather than a flat rectangle. He could identify the precise location where his bat would make optimal contact and adjust his swing plane accordingly. This spatial awareness, combined with his exceptional hand-eye coordination, allowed him to consistently find the barrel of the bat even on pitches that appeared unhittable. Hall of Fame pitcher Greg Maddux once said that facing Gwynn was like trying to sneak a sunrise past a rooster - nearly impossible and utterly frustrating.\n\nGwynn's influence extended far beyond his personal achievements. As a mentor to younger players, he transformed the Padres' approach to hitting instruction. He introduced video analysis as a standard practice, created detailed scouting reports on opposing pitchers, and established a culture of preparation that became the foundation of the organization's development philosophy. Players like Roberto Alomar, Ken Caminiti, and Steve Finley all credited Gwynn with teaching them how to study the game at a deeper level.\n\nThe community impact of Tony Gwynn cannot be overstated. In an era when superstars frequently changed teams for higher salaries, Gwynn's decision to spend his entire 20-year career with the Padres resonated deeply with San Diego fans. He became more than a baseball player; he was a civic institution. His charitable work included youth baseball programs in underserved neighborhoods, annual Christmas toy drives, and literacy campaigns that reached thousands of children throughout Southern California.\n\nGwynn's post-playing career as the head coach at San Diego State University further cemented his legacy. He transformed the Aztecs baseball program from a middling conference team into a national powerhouse, leading them to multiple College World Series appearances. His coaching philosophy emphasized the same attention to detail that defined his playing career. He would arrive at the ballpark four hours before practice, preparing detailed analyses of opposing teams and creating individualized development plans for each player.\n\nPerhaps most remarkably, Gwynn maintained his excellence throughout different eras of baseball. He began his career during the cocaine scandals of the early 1980s, adapted to the power surge of the 1990s, and continued producing at an elite level as the game evolved around him. His consistency was supernatural - he batted over .300 in 19 of his 20 seasons, won five Gold Glove awards, and never struck out more than 40 times in a single season despite playing in an era of increasing strikeout rates.\n\nThe technical aspects of Gwynn's swing have been studied and imitated by countless players and coaches. His compact stroke, minimal movement, and perfect balance created a repeatable motion that functioned like a Swiss watch. Slow-motion analysis reveals that Gwynn's bat path remained virtually identical on every swing, regardless of pitch type or location. This mechanical consistency, combined with his mental preparation, made him the most difficult out in baseball for nearly two decades.\n\nTony Gwynn's legacy transcends statistics and accolades. He represented an approach to excellence that valued preparation, consistency, and dedication over flashy displays or self-promotion. In today's baseball landscape, where players regularly change teams and prioritize individual achievements, Gwynn's model of franchise loyalty and community engagement seems almost quaint. Yet his impact on San Diego baseball, and baseball in general, continues to influence players, coaches, and fans more than a decade after his retirement. He proved that perfection wasn't just about natural talent - it was about the relentless pursuit of improvement, one at-bat at a time.",
    category: "Hall of Fame"
  },
  {
    id: 2,
    title: "Trevor Hoffman: The Closer's Mentality",
    publication: "Baseball Digest",
    date: "February 2024",
    excerpt: "How Trevor Hoffman revolutionized the closer role with his devastating changeup.",
    content: "Trevor Hoffman didn't just collect saves; he redefined what it meant to be a closer in Major League Baseball. His signature changeup, delivered with the same arm motion as his fastball, baffled hitters for 18 seasons and earned him 601 career saves. But Hoffman's true legacy lies in his mental approach to the game's most pressure-packed role. He treated each save opportunity as a clean slate, never letting previous failures affect his confidence. His entrance to AC/DC's 'Hells Bells' at Qualcomm Stadium became one of baseball's most iconic moments, signaling to 50,000 fans that the game was over. Hoffman's consistency was remarkable - he converted saves at an 88.8% clip, and his leadership in the clubhouse was just as valuable as his performance on the mound.",
    category: "Hall of Fame"
  },
  {
    id: 3,
    title: "Dave Winfield: The Natural",
    publication: "Sports Illustrated",
    date: "January 2024",
    excerpt: "The remarkable journey of Dave Winfield from San Diego State to Cooperstown.",
    content: "Before Dave Winfield became a Yankees icon, he was San Diego's brightest star, drafted directly from San Diego State University without playing a day in the minor leagues. The 6'6\" outfielder's combination of power, speed, and athleticism was unmatched in his era. During his eight seasons in San Diego (1973-1980), Winfield averaged 20 home runs and 75 RBIs while establishing himself as one of the game's premier five-tool players. His ability to impact the game in multiple ways - hitting for average and power, stealing bases, and playing stellar defense - made him the prototype for the modern superstar. Winfield's departure to New York in 1981 marked the end of an era, but his foundation for excellence in San Diego laid the groundwork for future Padres stars.",
    category: "Hall of Fame"
  },
  {
    id: 4,
    title: "Ken Caminiti: The 1996 MVP Season",
    publication: "The Athletic",
    date: "December 2023",
    excerpt: "Remembering Ken Caminiti's magical MVP season that brought San Diego its first division title.",
    content: "Ken Caminiti's 1996 season stands as one of the most dominant individual performances in National League history. The third baseman's .326 batting average, 40 home runs, and 130 RBIs powered the Padres to their first division title and earned him the NL MVP award. But Caminiti's impact went beyond statistics. His fiery leadership and clutch hitting in crucial moments transformed the Padres from perennial underachievers to division champions. His switch-hitting ability gave the Padres lineup incredible depth, and his defensive prowess at third base was among the best of his generation. The 1996 season represented the pinnacle of Caminiti's career and remains a high-water mark in Padres history, proving that individual excellence could elevate an entire franchise.",
    category: "MVP"
  },
  {
    id: 5,
    title: "Fernando Tatis Jr.: The Future is Now",
    publication: "ESPN The Magazine",
    date: "November 2023",
    excerpt: "How Fernando Tatis Jr. became the face of baseball's new generation.",
    content: "Fernando Tatis Jr. represents everything exciting about modern baseball - explosive power, electrifying speed, and a flair for the dramatic that captivates fans worldwide. His $340 million contract extension signaled the Padres' commitment to building around their young superstar, whose combination of 40+ home run power and 25+ stolen base speed puts him in rare company. Tatis Jr.'s approach to the game, from his bat flips to his aggressive base-running, embodies a new generation of players who play with joy and express themselves freely. His influence extends beyond San Diego, as he's become one of MLB's most marketable stars and a symbol of the sport's evolution. Despite facing challenges, his talent and charisma continue to make him the cornerstone of the Padres' championship aspirations.",
    category: "Superstar"
  },
  {
    id: 6,
    title: "Manny Machado: The Complete Player",
    publication: "USA Today Sports",
    date: "October 2023",
    excerpt: "Analyzing Manny Machado's evolution into one of baseball's most complete third basemen.",
    content: "Manny Machado's arrival in San Diego marked a turning point for the franchise, bringing All-Star caliber play and veteran leadership to a young team. The four-time All-Star third baseman's combination of offensive production and defensive excellence has made him one of the game's premier players. His ability to drive in runs in clutch situations, evidenced by multiple 100+ RBI seasons, provides the Padres with the consistent production they've long sought. Defensively, Machado's arm strength and quick reflexes at third base are among the best in baseball. His leadership in the clubhouse has been equally valuable, mentoring younger players while maintaining the competitive fire that has defined his career. Machado's presence has elevated the entire Padres organization and established a winning culture.",
    category: "All-Star"
  },
  {
    id: 7,
    title: "Adrian Gonzalez: The Professional",
    publication: "Baseball Weekly",
    date: "September 2023",
    excerpt: "How Adrian Gonzalez's steady excellence anchored the Padres lineup for six seasons.",
    content: "Adrian Gonzalez exemplified consistency during his tenure with the Padres (2006-2010, 2018-2019), providing the franchise with reliable offensive production and steady leadership. The first baseman's smooth left-handed swing was perfectly suited for Petco Park, and his ability to drive in runs made him the centerpiece of several competitive Padres teams. Gonzalez's 161 home runs and 501 RBIs during his first stint in San Diego established him as one of the franchise's most productive hitters. His defensive skills at first base were equally impressive, earning him Gold Glove consideration multiple times. What set Gonzalez apart was his professionalism and approach to the game - he prepared meticulously, treated every at-bat seriously, and never let success or failure affect his even-keeled demeanor.",
    category: "All-Star"
  },
  {
    id: 8,
    title: "Jake Peavy: Cy Young Excellence",
    publication: "Sporting News",
    date: "August 2023",
    excerpt: "Remembering Jake Peavy's dominant 2007 Cy Young Award season.",
    content: "Jake Peavy's 2007 Cy Young Award season stands as one of the greatest individual pitching performances in Padres history. The right-hander's 19-6 record, 2.54 ERA, and 240 strikeouts led the National League and helped establish him as one of baseball's elite starters. Peavy's four-seam fastball and devastating slider combination was virtually unhittable at its peak, and his competitive fire on the mound made him a fan favorite at Petco Park. His ability to dominate opposing lineups while pitching in a pitcher-friendly ballpark demonstrated his exceptional skill level. The Cy Young Award represented not just individual excellence, but also the Padres' ability to develop homegrown talent into elite performers. Peavy's success helped elevate the franchise's reputation and proved that San Diego could produce Cy Young-caliber pitchers.",
    category: "Cy Young"
  },
  {
    id: 9,
    title: "Steve Garvey: The 1984 NLCS Hero",
    publication: "San Diego Magazine",
    date: "July 2023",
    excerpt: "How Steve Garvey's clutch hitting carried the Padres to their first World Series.",
    content: "Steve Garvey's arrival in San Diego for the 1983 season brought championship credibility to a franchise that had never experienced postseason success. The veteran first baseman's impact was immediate, but it was his performance in the 1984 NLCS that cemented his legacy in Padres lore. Garvey's walk-off home run in Game 4 against the Cubs at Jack Murphy Stadium remains one of the most iconic moments in franchise history, sending San Diego to its first World Series. His .400 batting average and 7 RBIs during the NLCS earned him MVP honors and demonstrated the value of veteran leadership in pressure situations. Garvey's professional approach and clutch hitting helped transform the Padres from lovable losers to legitimate contenders, proving that the right veteran presence could elevate an entire organization.",
    category: "Playoff Hero"
  },
  {
    id: 10,
    title: "Rickey Henderson: The Stolen Base King in San Diego",
    publication: "The Baseball Chronicle",
    date: "June 2023",
    excerpt: "Rickey Henderson's brief but memorable stint with the Padres in 1996-1997.",
    content: "Rickey Henderson's time in San Diego was short but unforgettable, as the greatest base stealer in baseball history brought his unique brand of excitement to Qualcomm Stadium. During his two seasons with the Padres (1996-1997), Henderson provided veteran leadership and spectacular base-running that energized both teammates and fans. His ability to change the complexion of a game with his speed and base-running instincts was on full display, as he swiped 37 bases in his first season in San Diego. Henderson's colorful personality and supreme confidence made him one of baseball's most entertaining figures, and his presence in the Padres lineup added a dynamic element that opposing pitchers had to constantly consider. While his San Diego tenure was brief, Henderson's impact on the organization and his mentorship of younger players left a lasting impression on the franchise.",
    category: "Legend"
  }
]

const snlArticles: Article[] = [
  {
    id: 11,
    title: "Eddie Murphy: The Breakout Star Who Changed Comedy",
    publication: "Rolling Stone",
    date: "March 2024",
    excerpt: "How Eddie Murphy's electric energy and characters revolutionized Saturday Night Live.",
    content: "Eddie Murphy's arrival on Saturday Night Live in 1980 marked a seismic shift in American comedy. At just 19 years old, Murphy brought an infectious energy and fearless comedic timing that transformed the show during its most crucial period. His iconic characters - Mr. Robinson's Neighborhood, the velvet-smooth ladies' man on Weekend Update, and the unforgettable Buckwheat - became cultural touchstones that extended far beyond Saturday nights. Murphy's ability to inhabit multiple personas within a single episode showcased a range that few comedians could match. His impressions, from a manic Stevie Wonder to his pitch-perfect James Brown, weren't just imitations but comedic reimaginings that captured the essence of celebrity culture. Murphy's four-year run established him as the show's first true breakout movie star, proving that SNL could be a launching pad for mainstream success.",
    category: "Cast Members"
  },
  {
    id: 12,
    title: "The Blues Brothers: From SNL Sketch to Cultural Phenomenon",
    publication: "Entertainment Weekly",
    date: "February 2024",
    excerpt: "The unlikely journey of Jake and Elwood from late-night television to movie stardom.",
    content: "What began as a simple musical sketch featuring Dan Aykroyd and John Belushi in black suits and sunglasses evolved into one of the most enduring comedic partnerships in entertainment history. The Blues Brothers first appeared on SNL as the opening act for musical guests, with their deadpan delivery and soulful performances creating an unexpected authenticity. Aykroyd's meticulous research into blues and soul music, combined with Belushi's natural musical instincts, produced performances that honored the genre while maintaining their comedic edge. The characters' popularity led to a bestselling album, sold-out concert tours, and the 1980 film that became a cultural phenomenon. Their mission from God resonated with audiences who craved genuine musical passion wrapped in absurdist humor. The Blues Brothers demonstrated SNL's unique ability to create lasting cultural impact beyond the confines of late-night television.",
    category: "Iconic Sketches"
  },
  {
    id: 13,
    title: "Weekend Update: The Birth of Satirical News",
    publication: "The New York Times",
    date: "January 2024",
    excerpt: "How SNL's news parody segment became a cornerstone of political comedy.",
    content: "Weekend Update's evolution during the 1980s established the template for decades of political satire that followed. Under the anchorship of Jane Curtin and later Dennis Miller, the segment transformed from simple news parody into sharp political commentary that influenced public discourse. The 1980 presidential election coverage, featuring Curtin's dry delivery contrasting with Dan Aykroyd's manic energy, created a new standard for political humor. Dennis Miller's tenure brought a more intellectual edge, with references that challenged audiences while maintaining accessibility. The segment's ability to distill complex political situations into memorable one-liners made it essential viewing for politically engaged viewers. Weekend Update's influence extended beyond comedy, with politicians and pundits regularly referencing jokes and segments in serious political discussions. This period established the show's role as both entertainer and unofficial political commentator.",
    category: "Segments"
  },
  {
    id: 14,
    title: "Bill Murray's Subtle Genius: Master of Understated Comedy",
    publication: "The Atlantic",
    date: "December 2023",
    excerpt: "Analyzing Bill Murray's unique comedic approach that set him apart from his peers.",
    content: "Bill Murray's comedic philosophy on Saturday Night Live represented a masterclass in restraint and timing that contrasted sharply with the more explosive styles of his contemporaries. His characters - the lounge singer Nick Ocean, the perpetually defeated everyman, and his iconic weekend update commentaries - relied on subtle facial expressions and perfectly timed pauses rather than broad physical comedy. Murray's ability to find humor in mundane situations, like his devastating portrayal of a bad lounge singer who remained obliviously confident, showcased a comedic intelligence that audiences found both relatable and hilarious. His deadpan delivery during Weekend Update segments on topics like celebrity deaths or political scandals created moments of dark humor that pushed boundaries while maintaining sophistication. Murray's influence on subsequent SNL performers and comedy in general cannot be overstated - he proved that sometimes the biggest laughs come from the smallest gestures.",
    category: "Cast Members"
  },
  {
    id: 15,
    title: "The Presidential Impersonators: Politics Meets Comedy Gold",
    publication: "Politico Magazine",
    date: "November 2023",
    excerpt: "How SNL's presidential impressions shaped political discourse in the Reagan era.",
    content: "Saturday Night Live's presidential impersonations during the 1980s established a new relationship between comedy and politics that permanently altered American political discourse. Dan Aykroyd's Jimmy Carter portrayed the president as an overly detailed micromanager, while his Ronald Reagan impression initially presented the president as a befuddled grandfather figure. However, the most impactful portrayal came from the show's evolution of the Reagan character into a secret mastermind, subverting public perception and creating cognitive dissonance that highlighted the complexities of political image-making. These impressions went beyond simple mimicry to become political commentary that influenced public opinion. Politicians began to worry about their SNL portrayals, recognizing the show's power to shape narrative. The sketches created a feedback loop where political figures would respond to their SNL characterizations, blurring the lines between entertainment and political reality. This period established SNL as a legitimate force in political discourse.",
    category: "Political Satire"
  },
  {
    id: 16,
    title: "Musical Guests of the 80s: When SNL Broke New Artists",
    publication: "Spin Magazine",
    date: "October 2023",
    excerpt: "The legendary musical performances that launched careers and defined a decade.",
    content: "Saturday Night Live's musical guest bookings during the 1980s demonstrated an uncanny ability to identify and showcase artists on the verge of mainstream breakthrough. From Prince's electrifying 1981 performance that introduced America to Minneapolis funk, to Sinéad O'Connor's controversial 1992 appearance that sparked national debate, SNL's musical segments became cultural events in their own right. The show's willingness to book emerging artists alongside established stars created a platform where musical history was made weekly. Talking Heads' performance of 'Psycho Killer' brought art rock to mainstream America, while early hip-hop performances introduced suburban audiences to a cultural movement that would dominate the following decades. The integration of musical guests into comedy sketches created memorable collaborations that showcased the show's unique format. These performances weren't just entertainment; they were cultural barometers that reflected and influenced America's musical tastes.",
    category: "Musical Moments"
  },
  {
    id: 17,
    title: "The Coneheads: Aliens as the Perfect American Family",
    publication: "The Washington Post",
    date: "September 2023",
    excerpt: "How Dan Aykroyd and Jane Curtin's extraterrestrial family became a mirror of suburbia.",
    content: "The Coneheads represented one of Saturday Night Live's most brilliant comedic conceits: using alien visitors to satirize American suburban normalcy. Dan Aykroyd and Jane Curtin's portrayal of Beldar and Prymaat Conehead, along with Laraine Newman's Connie, created a family dynamic that was simultaneously bizarre and remarkably familiar. The sketches' humor derived from the contrast between the Coneheads' otherworldly origins and their desperate attempts to blend into middle-class American life. Their formal speech patterns and literal interpretations of common phrases highlighted the absurdity of everyday social interactions. The recurring theme of the family's integration into suburbia - complete with barbecues, parent-teacher conferences, and teenage rebellion - used science fiction as a lens to examine conformity and assimilation. The Coneheads' popularity led to a feature film, but their true impact was in demonstrating how effective recurring characters could build audience investment and create lasting cultural references.",
    category: "Recurring Characters"
  },
  {
    id: 18,
    title: "Joe Piscopo: The Impressionist Who Captured an Era",
    publication: "Variety",
    date: "August 2023",
    excerpt: "Examining Joe Piscopo's masterful impressions and his role in SNL's transitional period.",
    content: "Joe Piscopo's tenure on Saturday Night Live coincided with one of the show's most challenging periods, and his exceptional impression skills helped maintain quality during significant cast transitions. His spot-on portrayals of Frank Sinatra, Robert DeNiro, and particularly Ronald Reagan created some of the decade's most memorable moments. Piscopo's Reagan, in collaboration with Phil Hartman's various political figures, developed into sophisticated political commentary that balanced respect with gentle mockery. His ability to capture not just vocal patterns but physical mannerisms and psychological essence made his impressions feel like intimate character studies. The Sinatra impression, complete with the swagger and vocal inflections, was so accurate that it gained recognition from entertainment industry insiders. Piscopo's work demonstrated that impression-based comedy could transcend simple mimicry to become character acting of the highest order. His departure from SNL marked the end of an era of impression-focused comedy that would influence the show's casting decisions for years to come.",
    category: "Cast Members"
  },
  {
    id: 19,
    title: "Behind the Scenes: The Creative Chaos of 80s SNL",
    publication: "The New Yorker",
    date: "July 2023",
    excerpt: "An inside look at the writing room dynamics that produced comedy gold.",
    content: "The creative process behind Saturday Night Live during the 1980s operated on controlled chaos that somehow produced consistent brilliance under impossible deadlines. Writers like Al Franken, Tom Davis, and later Jack Handey created an atmosphere where collaboration and competition coexisted, pushing each other to higher levels of creativity. The legendary all-night writing sessions became the stuff of comedy folklore, with writers consuming vast quantities of coffee and takeout food while crafting sketches that would air just days later. The show's unique structure, where writers also performed and established cast members contributed to script development, created a democratic creative environment rare in television. Guest hosts often brought their own comedic sensibilities, influencing sketch direction and creating memorable one-time collaborations. The pressure-cooker environment, while exhausting, produced a creative urgency that kept the show fresh and unpredictable. This period established many of the creative processes and traditions that continue to define SNL's production approach today.",
    category: "Behind the Scenes"
  },
  {
    id: 20,
    title: "The Cultural Impact: How 80s SNL Changed American Comedy",
    publication: "Harper's Magazine",
    date: "June 2023",
    excerpt: "Analyzing the lasting influence of SNL's golden decade on comedy and culture.",
    content: "Saturday Night Live's impact during the 1980s extended far beyond late-night television, fundamentally altering the landscape of American comedy and popular culture. The show's ability to launch film careers, influence political discourse, and create lasting cultural references established a new model for comedy programming. The period's emphasis on character-driven comedy, as opposed to purely joke-based humor, influenced everything from stand-up comedy to sitcom development. SNL's integration of political satire into mainstream entertainment paved the way for shows like The Daily Show and The Colbert Report, establishing comedy as a legitimate form of political commentary. The show's musical guest integration created a template that influenced music television and award show production. Perhaps most significantly, SNL demonstrated that sketch comedy could serve as both entertainment and cultural commentary, addressing social issues through humor while maintaining broad appeal. The decade established Saturday Night Live as an American institution whose influence on comedy, politics, and popular culture continues to resonate today.",
    category: "Cultural Impact"
  }
]

const seattleGarageArticles: Article[] = [
  {
    id: 21,
    title: "The Velvet Hangover: How Seattle's Central District Became Garage Rock Ground Zero",
    publication: "Pitchfork",
    date: "March 2024",
    excerpt: "Inside the cramped basements and converted warehouses where a new generation redefined Pacific Northwest rock.",
    content: "By 2017, something electric was brewing in Seattle's Central District. While tech money transformed the city around them, a tight-knit community of musicians, artists, and misfits carved out their own sonic territory in the neighborhood's forgotten corners. The Velvet Hangover, a converted auto shop turned venue, became the epicenter of what music historians now call the CD Garage Revival. Bands like Static Bloom, The Midnight Trolleys, and Fuzz Riot weren't trying to recreate the grunge glory days – they were writing their own chapter. The scene's raw energy drew from 60s garage punk, but filtered through the anxiety and restlessness of late-2010s America. Three-chord anthems about gentrification, student debt, and digital alienation resonated with a generation feeling left behind by Seattle's tech boom. What started in basements soon filled legendary venues like The Crocodile and Neumos, proving that authentic rock and roll still had a place in the Emerald City.",
    category: "Scene Overview"
  },
  {
    id: 22,
    title: "Static Bloom: The Band That Sparked the CD Garage Explosion",
    publication: "The Stranger",
    date: "February 2024",
    excerpt: "Meet the quartet whose DIY ethos and blistering live shows ignited Seattle's underground rock renaissance.",
    content: "Maya Chen never intended to become the face of Seattle's garage rock revival. The University of Washington dropout was just looking for a way to channel her frustration with rising rents and dead-end service jobs when she started Static Bloom in her Beacon Hill basement in 2016. With drummer Alex Santos, bassist Jordan Kim, and guitarist Riley Thompson, Static Bloom crafted a sound that was equal parts Stooges-inspired chaos and Sleater-Kinney precision. Their breakout single 'Eviction Notice' – recorded on a four-track in Chen's living room – became an anthem for Seattle's displaced creative class. The band's legendary residency at The Velvet Hangover drew capacity crowds every Tuesday night for six months straight. Chen's snarling vocals and the band's synchronized headbanging created an almost ritualistic atmosphere that transformed sweaty club-goers into true believers. Their 2018 album 'Rental Anxiety' captured lightning in a bottle, documenting the specific angst of being young, broke, and artistically ambitious in one of America's most expensive cities.",
    category: "Key Bands"
  },
  {
    id: 23,
    title: "The Midnight Trolleys: Surf Rock Meets Riot Grrrl in Capitol Hill",
    publication: "Spin Magazine",
    date: "January 2024",
    excerpt: "How three friends from Roosevelt High created the catchiest garage rock anthems of the decade.",
    content: "The Midnight Trolleys shouldn't have worked on paper. Combining surf rock's sun-soaked melodies with riot grrrl's political fury seemed like a recipe for musical whiplash. But sisters Emma and Sophia Martinez, along with their childhood friend Casey Wu, created something magical in their Capitol Hill practice space. Emma's reverb-drenched guitar work nodded to Dick Dale and The Ventures, while Sophia's thunderous bass lines and Casey's explosive drumming brought punk urgency to every track. Their 2019 EP 'Late Night Lines' featured the infectious single 'Metro Meltdown,' which became the unofficial soundtrack to Seattle's public transit struggles. The song's irresistible hook – equal parts Beach Boys harmony and Bikini Kill attitude – proved that garage rock could be both politically conscious and irresistibly fun. The Trolleys' live shows at venues like Chop Suey and The Sunset Tavern became legendary for their synchronized dance moves and Emma's between-song speeches about transit equity and affordable housing.",
    category: "Key Bands"
  },
  {
    id: 24,
    title: "Basement Tapes: The DIY Recording Revolution in the CD",
    publication: "Tape Op",
    date: "December 2023",
    excerpt: "How lo-fi recording techniques became the signature sound of Seattle's garage rock renaissance.",
    content: "The sound of the CD Garage scene wasn't born in professional studios – it emerged from bedrooms, basements, and converted garages across Seattle's Central District. Producer and engineer Sam Chen (Maya's older brother) became the scene's secret weapon, lugging his vintage four-track recorder and collection of analog effects pedals from house to house. Chen's philosophy was simple: capture the energy, not perfection. His technique involved deliberately overdriving cheap microphones, running vocals through guitar amplifiers, and using whatever percussion instruments were lying around – kitchen pots, beer bottles, even radiators became part of the sonic palette. The resulting recordings had a warm, saturated quality that perfectly complemented the bands' raw energy. Chen's home-recorded productions for Static Bloom, Fuzz Riot, and dozen of other acts created a cohesive aesthetic that defined the scene. His 'Basement Tapes Sessions' became so sought after that bands would wait months to record with him, often sleeping on floors and sharing equipment just for a chance to capture that signature CD sound.",
    category: "Production"
  },
  {
    id: 25,
    title: "Fuzz Riot: The All-Female Power Trio That Refused to Be Categorized",
    publication: "She Shreds Magazine",
    date: "November 2023",
    excerpt: "Three friends from different musical backgrounds created the most uncompromising sound in Seattle's garage scene.",
    content: "Drummer Kenji Nakamura, guitarist Isabella Rodriguez, and bassist Zara Ahmed had nothing in common except their love of loud music and their refusal to be told what female musicians should sound like. Fuzz Riot formed in 2017 when the three met at a Kathleen Hanna book reading in Capitol Hill, bonding over their shared frustration with the Seattle music scene's boys' club mentality. Rodriguez's background in classical guitar, Ahmed's jazz training, and Nakamura's punk drumming created an unlikely but explosive combination. Their songs ranged from two-minute garage punk blasts to experimental seven-minute noise freakouts, always anchored by Rodriguez's signature fuzz pedal – a vintage Big Muff she'd modified to sound like 'an airplane crashing into a mountain of amplifiers.' Fuzz Riot's shows at The Velvet Hangover became legendary for their intensity and unpredictability. The band's 2018 album 'Static Worship' pushed the boundaries of what garage rock could be, incorporating elements of krautrock, free jazz, and even ambient music while maintaining the scene's raw DIY aesthetic.",
    category: "Key Bands"
  },
  {
    id: 26,
    title: "The Velvet Hangover: Inside Seattle's Most Important DIY Venue",
    publication: "Maximum Rocknroll",
    date: "October 2023",
    excerpt: "The converted auto shop that became the beating heart of the Central District's music revolution.",
    content: "Marcus Williams never planned to run a music venue. The former Boeing engineer bought the abandoned auto shop on 23rd Avenue in 2015 as a workspace for his furniture-making hobby. But when Static Bloom asked to practice there in exchange for helping with renovations, Williams discovered his true calling. The Velvet Hangover – named for the dizzy feeling Williams got after loud shows – became the unofficial headquarters of the CD Garage scene. The venue's cramped 200-person capacity, concrete floors, and exposed pipes created an intimate atmosphere that forced bands and audiences into close communion. Williams instituted strict policies: all ages shows, sliding scale admission (nobody turned away for lack of funds), and absolute zero tolerance for harassment. The venue's famous Tuesday night residency program launched dozens of bands, while weekend shows regularly featured touring acts sharing bills with local unknowns. By 2019, The Velvet Hangover was booking bands six months in advance, with a waiting list that read like a who's who of underground rock. Williams' commitment to accessibility and community made the venue more than just a place to hear music – it became a cultural institution.",
    category: "Venues"
  },
  {
    id: 27,
    title: "Riot Season: The Compilation That Defined a Movement",
    publication: "Vinyl Me Please",
    date: "September 2023",
    excerpt: "How a grassroots compilation album became the definitive document of Seattle's garage rock explosion.",
    content: "In early 2019, photographer and music lover Diana Reeves had an idea: create a compilation album that would capture the explosive energy of Seattle's Central District garage rock scene. Working with a budget of just $3,000 raised through a GoFundMe campaign, Reeves convinced 15 bands to contribute exclusive tracks to 'Riot Season: The Sound of CD Garage.' The double LP, pressed on recycled vinyl and packaged in screen-printed sleeves made by local artists, became an instant underground classic. The compilation opened with Static Bloom's ferocious 'Landlord Blues' and closed with Fuzz Riot's haunting 'Digital Detox,' showcasing the scene's incredible diversity within its DIY framework. Reeves insisted that all profits be split equally among the participating bands, ensuring that the compilation supported the community it celebrated. 'Riot Season' sold out its initial 1,000-copy pressing in two weeks, with subsequent pressings helping fund tours, equipment, and recording sessions for the featured bands. The album's success attracted attention from national music publications and record labels, though most of the bands chose to remain independent. Today, original copies of 'Riot Season' sell for hundreds of dollars, but its real value lies in its documentation of a unique moment in Seattle music history.",
    category: "Recordings"
  },
  {
    id: 28,
    title: "The Sound Engineers: How Tech Workers Funded Seattle's Garage Rock Scene",
    publication: "The Seattle Times",
    date: "August 2023",
    excerpt: "An unlikely alliance between tech money and DIY music created the infrastructure for Seattle's underground renaissance.",
    content: "By day, Jennifer Liu wrote code for Amazon. By night, she helped fund the Central District's garage rock explosion. Liu was part of a growing network of tech workers who used their high salaries to support Seattle's underground music scene – not through corporate sponsorship or sanitized music festivals, but by directly funding venues, equipment, and recording sessions. The informal collective, known as 'The Sound Engineers,' emerged organically in 2017 when several Amazon and Microsoft employees started attending shows at The Velvet Hangover. Rather than gentrifying the scene, these tech workers became its silent benefactors, purchasing equipment for bands, funding van repairs for tours, and even covering rent for struggling venues. Liu personally loaned $15,000 to help The Velvet Hangover install a professional sound system, asking only that her name not be publicized. The group's philosophy was simple: use tech money to preserve the authentic creative culture that tech development was threatening to erase. Their funding helped launch careers, preserve venues, and document the scene through professional recordings and music videos. The Sound Engineers proved that Seattle's tech boom and artistic underground didn't have to be enemies – they could be allies in creating something beautiful.",
    category: "Industry"
  },
  {
    id: 29,
    title: "Electric Church: The Spiritual Side of Seattle's Garage Revival",
    publication: "Dangerous Minds",
    date: "July 2023",
    excerpt: "How Seattle's garage rock scene became a secular religion for a generation of urban outcasts.",
    content: "Every Sunday at 3 PM, The Velvet Hangover transformed into something resembling a church service. 'Electric Church' – a weekly gathering started by Static Bloom's Maya Chen – brought together musicians, artists, and music lovers for what Chen called 'communion through volume.' The events weren't religious in any traditional sense, but they served a similar function for the CD garage scene's devoted community. Attendees would share new songs, discuss creative projects, and participate in group listening sessions of rare garage rock records from Chen's extensive vinyl collection. The gatherings often ended with spontaneous jam sessions that could last for hours, with participants taking turns on instruments regardless of their skill level. These sessions produced some of the scene's most beloved songs, including The Midnight Trolleys' 'Sunday Amplifier' and Fuzz Riot's experimental epic 'Collective Unconscious.' For many participants, Electric Church provided the sense of community and spiritual connection that traditional institutions had failed to offer. In an era of digital isolation and urban anonymity, the weekly gatherings created lasting bonds between strangers united by their love of loud, honest music. The tradition continued even after Chen moved to Portland in 2020, with other musicians keeping the Sunday sessions alive.",
    category: "Culture"
  },
  {
    id: 30,
    title: "After the Boom: Where Seattle's Garage Heroes Are Now",
    publication: "Consequence of Sound",
    date: "June 2023",
    excerpt: "Five years later, tracking the legacy and evolution of the Central District's legendary music scene.",
    content: "The Central District garage rock scene of the late 2010s burned bright and fast, like all great underground movements. By 2020, rising rents, the pandemic, and natural band evolution had scattered the scene's key players across the country and into new musical projects. Static Bloom's Maya Chen relocated to Portland, where she's developed a more experimental sound incorporating electronic elements and field recordings. The Midnight Trolleys evolved into a full-time touring act, signing with Sub Pop and releasing their debut album to critical acclaim in 2022. Fuzz Riot disbanded in 2019, but guitarist Isabella Rodriguez's solo project has gained a cult following in the post-rock community. The Velvet Hangover closed in 2021 when owner Marcus Williams couldn't keep up with rising commercial rents, but he's planning to reopen in a new location in South Seattle. Many of the scene's supporting players have thrived: producer Sam Chen now works with major-label artists while maintaining his lo-fi aesthetic, and photographer Diana Reeves published a coffee table book documenting the scene's visual culture. The CD Garage scene's influence can be heard in countless bands across the Pacific Northwest and beyond, proving that even brief cultural moments can have lasting impact. As Chen reflected: 'We weren't trying to create a movement – we were just trying to survive and make noise. That it became something bigger than all of us is still pretty amazing.'",
    category: "Legacy"
  }
]

// Directory structure interface
interface DirectoryStructure {
  'coyle-portfolio': {
    'padres-legends': Article[]
    'snl-80s': Article[]
    'central-district-music': Article[]
  }
}

export function Catalog() {
  const [activeArticle, setActiveArticle] = useState<number>(0)
  const [sidebarWidth, setSidebarWidth] = useState<number>(33.333) // Initial width as percentage
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [expandedFolders, setExpandedFolders] = useState<{ [key: string]: boolean }>({
    'coyle-portfolio': true,
    'padres-legends': true,
    'snl-80s': false,
    'central-district-music': false,
    // Initialize all category folders as collapsed
    'padres-legends-hall-of-fame': false,
    'padres-legends-mvp': false,
    'padres-legends-cy-young': false,
    'padres-legends-superstar': false,
    'padres-legends-all-star': false,
    'padres-legends-playoff-hero': false,
    'padres-legends-legend': false,
    'snl-80s-cast-members': false,
    'snl-80s-iconic-sketches': false,
    'snl-80s-segments': false,
    'snl-80s-political-satire': false,
    'snl-80s-musical-moments': false,
    'snl-80s-recurring-characters': false,
    'snl-80s-behind-the-scenes': false,
    'snl-80s-cultural-impact': false,
    'central-district-music-scene-overview': false,
    'central-district-music-key-bands': false,
    'central-district-music-production': false,
    'central-district-music-venues': false,
    'central-district-music-recordings': false,
    'central-district-music-industry': false,
    'central-district-music-culture': false,
    'central-district-music-legacy': false,
  })

  // Combine all articles
  const allArticles = [...padresArticles, ...snlArticles, ...seattleGarageArticles]

  // Create directory structure
  const directoryStructure: DirectoryStructure = {
    'coyle-portfolio': {
      'padres-legends': padresArticles,
      'snl-80s': snlArticles,
      'central-district-music': seattleGarageArticles
    }
  }

  // Get current article info for path display
  const getCurrentArticleInfo = (articleIndex: number) => {
    const article = allArticles[articleIndex]
    if (padresArticles.find(a => a.id === article.id)) {
      return {
        topLevel: 'coyle-portfolio',
        subDirectory: 'padres-legends',
        article
      }
    } else if (snlArticles.find(a => a.id === article.id)) {
      return {
        topLevel: 'coyle-portfolio',
        subDirectory: 'snl-80s',
        article
      }
    } else {
      return {
        topLevel: 'coyle-portfolio',
        subDirectory: 'central-district-music',
        article
      }
    }
  }

  // Group articles by category within their respective collections
  const getPadresByCategory = () => {
    return padresArticles.reduce((acc, article, index) => {
      const category = article.category.toLowerCase().replace(/\s+/g, '-')
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push({ ...article, originalIndex: index })
      return acc
    }, {} as { [key: string]: (Article & { originalIndex: number })[] })
  }

  const getSNLByCategory = () => {
    return snlArticles.reduce((acc, article, index) => {
      const category = article.category.toLowerCase().replace(/\s+/g, '-')
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push({ ...article, originalIndex: index + padresArticles.length })
      return acc
    }, {} as { [key: string]: (Article & { originalIndex: number })[] })
  }

  const getSeattleByCategory = () => {
    return seattleGarageArticles.reduce((acc, article, index) => {
      const category = article.category.toLowerCase().replace(/\s+/g, '-')
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push({ ...article, originalIndex: index + padresArticles.length + snlArticles.length })
      return acc
    }, {} as { [key: string]: (Article & { originalIndex: number })[] })
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
                    {/* Padres Legends Directory */}
                    <div className="folder-group nested">
                      <div 
                        className="folder-item sub-folder"
                        onClick={() => toggleFolder('padres-legends')}
                      >
                        <span className="expand-icon">
                          {expandedFolders['padres-legends'] ? '▼' : '▶'}
                        </span>
                        <span className="folder-icon">📁</span>
                        <span className="folder-name">padres-legends/</span>
                        <span className="item-count">({padresArticles.length})</span>
                      </div>
                      
                      {expandedFolders['padres-legends'] && (
                        <div className="file-list">
                          {Object.entries(getPadresByCategory()).map(([categoryKey, articles]) => {
                            const categoryId = `padres-legends-${categoryKey}`
                            return (
                              <div key={categoryKey} className="category-group">
                                <div 
                                  className="category-folder"
                                  onClick={() => toggleFolder(categoryId)}
                                >
                                  <span className="expand-icon">
                                    {expandedFolders[categoryId] ? '▼' : '▶'}
                                  </span>
                                  <span className="folder-icon">📁</span>
                                  <span className="folder-name">{categoryKey}/</span>
                                  <span className="item-count">({articles.length})</span>
                                </div>
                                {expandedFolders[categoryId] && articles.map((article) => (
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
                            )
                          })}
                        </div>
                      )}
                    </div>

                    {/* SNL 80s Directory */}
                    <div className="folder-group nested">
                      <div 
                        className="folder-item sub-folder"
                        onClick={() => toggleFolder('snl-80s')}
                      >
                        <span className="expand-icon">
                          {expandedFolders['snl-80s'] ? '▼' : '▶'}
                        </span>
                        <span className="folder-icon">📁</span>
                        <span className="folder-name">snl-80s/</span>
                        <span className="item-count">({snlArticles.length})</span>
                      </div>
                      
                      {expandedFolders['snl-80s'] && (
                        <div className="file-list">
                          {Object.entries(getSNLByCategory()).map(([categoryKey, articles]) => {
                            const categoryId = `snl-80s-${categoryKey}`
                            return (
                              <div key={categoryKey} className="category-group">
                                <div 
                                  className="category-folder"
                                  onClick={() => toggleFolder(categoryId)}
                                >
                                  <span className="expand-icon">
                                    {expandedFolders[categoryId] ? '▼' : '▶'}
                                  </span>
                                  <span className="folder-icon">📁</span>
                                  <span className="folder-name">{categoryKey}/</span>
                                  <span className="item-count">({articles.length})</span>
                                </div>
                                {expandedFolders[categoryId] && articles.map((article) => (
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
                            )
                          })}
                        </div>
                      )}
                    </div>

                    {/* Central District Music Directory */}
                    <div className="folder-group nested">
                      <div 
                        className="folder-item sub-folder"
                        onClick={() => toggleFolder('central-district-music')}
                      >
                        <span className="expand-icon">
                          {expandedFolders['central-district-music'] ? '▼' : '▶'}
                        </span>
                        <span className="folder-icon">📁</span>
                        <span className="folder-name">central-district-music/</span>
                        <span className="item-count">({seattleGarageArticles.length})</span>
                      </div>
                      
                      {expandedFolders['central-district-music'] && (
                        <div className="file-list">
                          {Object.entries(getSeattleByCategory()).map(([categoryKey, articles]) => {
                            const categoryId = `central-district-music-${categoryKey}`
                            return (
                              <div key={categoryKey} className="category-group">
                                <div 
                                  className="category-folder"
                                  onClick={() => toggleFolder(categoryId)}
                                >
                                  <span className="expand-icon">
                                    {expandedFolders[categoryId] ? '▼' : '▶'}
                                  </span>
                                  <span className="folder-icon">📁</span>
                                  <span className="folder-name">{categoryKey}/</span>
                                  <span className="item-count">({articles.length})</span>
                                </div>
                                {expandedFolders[categoryId] && articles.map((article) => (
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
                            )
                          })}
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
                <span className="path-segment">
                  {currentInfo.article.category.toLowerCase().replace(/\s+/g, '-')}
                </span>
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
