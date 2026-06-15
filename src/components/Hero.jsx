export default function Hero() {
  // Simple responsive layout check
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section className="if-hero" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* FULLY RESPONSIVE BACKGROUND MONUMENT */}
      <div className="if-hero-monument-bg" style={{
        position: 'absolute',
        // Scales placement dynamically to keep it tucked safely on smaller screens
        right: isMobile ? '-15px' : '-40px',
        top: isMobile ? '4%' : '10%',
        
        // Fluid font-sizing using Viewport Width (vw) units 
        fontSize: isMobile ? '15vw' : '11.5vw',
        
        fontWeight: '900',
        color: 'rgba(255, 215, 0, 0.07)',
        textTransform: 'uppercase',
        letterSpacing: isMobile ? '-2px' : '-4px',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        lineHeight: '0.85',
        fontFamily: 'impact, sans-serif',
        zIndex: 0,
        willChange: 'transform',
        transform: 'translateZ(0)' // Hardware acceleration switch for smoother mobile rendering
      }}>
        JAMMWAL<br />
        WARRIOR<br />
        MINDSET
      </div>

      {/* FOREGROUND CONTENT LAYER */}
      <div className="if-hero-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="if-eyebrow">Championship Boxing Academy · Est. 2026</div>
        <h1 className="if-hero-title">
          Train Hard<br />
          <span className="gold">Fight Smart</span><br />
          <span className="outline">Win Big</span>
        </h1>
        <p className="if-hero-desc">
          Professional coaching for all levels — complete beginners to championship contenders.
          Step into the ring and become unstoppable.
        </p>

        {/* The Golden Pillar Statement */}
        <div className="if-hero-inspiration" style={{
          margin: '32px 0',
          paddingLeft: '20px',
          borderLeft: '4px solid #FFD700',
          maxWidth: '560px'
        }}>
          <p style={{
            color: '#FFD700',
            fontSize: '1.1rem',
            fontWeight: '700',
            letterSpacing: '0.2px',
            lineHeight: '1.45',
            margin: 0
          }}>
            "True strength is not just physical agility; it's the mental discipline to stay calm in the eye of the storm." 
            <span style={{ 
              display: 'block', 
              fontSize: '0.8rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              color: 'rgba(255, 255, 255, 0.6)', 
              marginTop: '8px',
              fontWeight: '500'
            }}>
              — THE VIDYUT JAMMWAL PHILOSOPHY
            </span>
          </p>
        </div>

        <div className="if-hero-actions" style={{ position: 'relative', zIndex: 2 }}>
          <a href="#programs" className="if-btn-primary">Explore Programs</a>
          <a href="#coaches" className="if-btn-outline">Meet the Coaches</a>
        </div>
        
        <div className="if-hero-stats">
          <div className="if-stat"><div className="num">8+</div><div className="lbl">Years Training</div></div>
          <div className="if-stat"><div className="num">10</div><div className="lbl">Active Members</div></div>
          <div className="if-stat"><div className="num">10</div><div className="lbl">Championships</div></div>
          <div className="if-stat"><div className="num">1</div><div className="lbl">Pro Champions</div></div>
        </div>
      </div>
    </section>
  );
}