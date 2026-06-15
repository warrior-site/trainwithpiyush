import { User } from 'lucide-react';

export default function Coaches() {
  // Simple check to toggle layout styles seamlessly between mobile and desktop screen sizes
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section id="coaches" className="if-sec if-rev">
      <div className="if-sec-eyebrow">Head Trainer</div>
      <h2 className="if-sec-title">The <span className="acc">Corner</span></h2>

      {/* Single Coach Main Profile Block */}
      <div className="if-single-coach" style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Stacks elements vertically on mobile
        gap: isMobile ? '20px' : '28px',
        alignItems: isMobile ? 'center' : 'center',
        textAlign: isMobile ? 'center' : 'left', // Centers copy text beautifully on small screens
        background: 'rgba(255,255,255,0.02)',
        padding: isMobile ? '24px 16px' : '32px', // Compact internal padding for phones
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.05)',
        marginTop: '30px'
      }}>

        {/* Left Side: Photo Container */}
        <div className="if-coach-photo-wrapper" style={{ flexShrink: 0 }}>
          <div className="if-coach-photo" style={{
            width: isMobile ? '130px' : '140px', // Slightly scales down profile image contextually
            height: isMobile ? '150px' : '160px',
            backgroundColor: '#181818',
            borderRadius: '12px',
            border: '2px solid #FFD700',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            overflow: 'hidden'
          }}>
            <img
              className="if-coach-img"
              src="/piyush-thakur.webp"
              alt="Piyush Thakur Coach Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', 
                display: 'block' 
              }}
            />
          </div>
        </div>

        {/* Right Side: Details & Stats */}
        <div className="if-coach-details" style={{ 
          flexGrow: 1, 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start' // Visual alignment anchor override
        }}>
          <span className="if-coach-role" style={{
            color: '#FFD700',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            display: 'block',
            marginBottom: '6px',
            fontWeight: '600'
          }}>
            Head Coach · 5 Yrs Experience
          </span>

          <h3 className="if-coach-name" style={{
            margin: '0 0 10px 0',
            fontSize: isMobile ? '1.4rem' : '1.6rem', // Fits longer titles safely on mobile screens
            fontWeight: '800',
            letterSpacing: '-0.5px'
          }}>
            Piyush Thakur
          </h3>

          <p className="if-coach-bio" style={{
            margin: '0 0 20px 0',
            color: '#b3b3b3',
            lineHeight: '1.6',
            fontSize: '0.95rem',
            maxWidth: '600px'
          }}>
            BSc. and PhD in Physical Education. Hard Trained For At Least 10 Years.
            Get A Chance To Be Praised By "VIDYUT JAMWAL", My Inspiration.
          </p>

          {/* Performance Badges Grid */}
          <div className="if-coach-rec" style={{ 
            display: 'flex', 
            gap: isMobile ? '0' : '28px',
            justifyContent: isMobile ? 'space-around' : 'flex-start', // Evenly distributes badge layouts on phones
            width: '100%',
            maxWidth: isMobile ? '340px' : 'none'
          }}>
            <div>
              <div className="if-rec-num" style={{ fontSize: isMobile ? '1.35rem' : '1.5rem', fontWeight: '800', color: '#fff', lineHeight: '1.2' }}>10</div>
              <div className="if-rec-lbl" style={{ fontSize: '0.72rem', color: '#888', textTransform: 'uppercase', marginTop: '2px' }}>Pro Wins</div>
            </div>
            <div>
              <div className="if-rec-num" style={{ fontSize: isMobile ? '1.35rem' : '1.5rem', fontWeight: '800', color: '#fff', lineHeight: '1.2' }}>3</div>
              <div className="if-rec-lbl" style={{ fontSize: '0.72rem', color: '#888', textTransform: 'uppercase', marginTop: '2px' }}>Title Shots</div>
            </div>
            <div>
              <div className="if-rec-num" style={{ fontSize: isMobile ? '1.35rem' : '1.5rem', fontWeight: '800', color: '#fff', lineHeight: '1.2' }}>5</div>
              <div className="if-rec-lbl" style={{ fontSize: '0.72rem', color: '#888', textTransform: 'uppercase', marginTop: '2px' }}>Yrs Coaching</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}