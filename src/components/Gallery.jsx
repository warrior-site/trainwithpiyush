import { Camera, Flame, Dumbbell, Target } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="gallery" className="if-sec if-rev">
      <div className="if-sec-eyebrow">Inside The Gym</div>
      <h2 className="if-sec-title">Our <span className="acc">Facility</span></h2>
      
      {/* 4-Card Photo Placeholder Grid */}
      <div className="if-gallery-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        
        {/* Placeholder 1: Main Ring */}
        <div className="if-gallery-item" style={{
          aspectRatio: '4 / 3',
          backgroundColor: '#161616',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justify: 'center',
          gap: '12px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.2s ease'
        }}>
          <Camera size={32} color="#FFD700" strokeWidth={1.2} />
          <span style={{ fontSize: '0.8rem', color: '#666', uppercase: 'true', letterSpacing: '1px' }}>The Main Ring</span>
        </div>

        {/* Placeholder 2: Heavy Bag Area */}
        <div className="if-gallery-item" style={{
          aspectRatio: '4 / 3',
          backgroundColor: '#161616',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justify: 'center',
          gap: '12px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Flame size={32} color="#C8102E" strokeWidth={1.2} />
          <span style={{ fontSize: '0.8rem', color: '#666', uppercase: 'true', letterSpacing: '1px' }}>Heavy Bag Zone</span>
        </div>

        {/* Placeholder 3: Strength & Conditioning */}
        <div className="if-gallery-item" style={{
          aspectRatio: '4 / 3',
          backgroundColor: '#161616',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justify: 'center',
          gap: '12px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Dumbbell size={32} color="#fff" strokeWidth={1.2} />
          <span style={{ fontSize: '0.8rem', color: '#666', uppercase: 'true', letterSpacing: '1px' }}>Weight & Cardio Deck</span>
        </div>

        {/* Placeholder 4: Speed Bags / Pad Work */}
        <div className="if-gallery-item" style={{
          aspectRatio: '4 / 3',
          backgroundColor: '#161616',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justify: 'center',
          gap: '12px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Target size={32} color="#FFE566" strokeWidth={1.2} />
          <span style={{ fontSize: '0.8rem', color: '#666', uppercase: 'true', letterSpacing: '1px' }}>Technical Corner</span>
        </div>

      </div>
    </section>
  );
}