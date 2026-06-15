import { useState } from 'react';

const SCHEDULE_DATA = [
  { day: 'Mon', fullName: 'Monday', cls: [{ t: '6:00 AM', n: 'Foundation', f: true }, { t: '10:00 AM', n: 'Conditioning', f: false }, { t: '6:00 PM', n: 'Sparring', f: true }] },
  { day: 'Tue', fullName: 'Tuesday', cls: [{ t: '7:00 AM', n: 'Conditioning', f: false }, { t: '4:30 PM', n: 'Junior Champs', f: true }, { t: '7:00 PM', n: 'Foundation', f: false }] },
  { day: 'Wed', fullName: 'Wednesday', cls: [{ t: '6:00 AM', n: 'Sparring', f: true }, { t: '12:00 PM', n: 'Foundation', f: false }, { t: '6:00 PM', n: 'Conditioning', f: true }] },
  { day: 'Thu', fullName: 'Thursday', cls: [{ t: '7:00 AM', n: 'Foundation', f: false }, { t: '4:30 PM', n: 'Junior Champs', f: true }, { t: '7:30 PM', n: 'Sparring', f: false }] },
  { day: 'Fri', fullName: 'Friday', cls: [{ t: '6:00 AM', n: 'Conditioning', f: true }, { t: '12:00 PM', n: 'Foundation', f: false }, { t: '6:00 PM', n: 'Open Gym', f: true }] },
  { day: 'Sat', fullName: 'Saturday', cls: [{ t: '8:00 AM', n: 'All Levels', f: true }, { t: '10:00 AM', n: 'Junior Champs', f: false }, { t: '1:00 PM', n: 'Sparring', f: true }] },
  { day: 'Sun', fullName: 'Sunday', cls: [{ t: '9:00 AM', n: 'Open Gym', f: false }, { t: '', n: '', empty: true }, { t: '3:00 PM', n: 'Fight Team', f: true }] },
];

export default function Schedule() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Track which day is expanded on mobile layout (Defaults to Monday)
  const [activeDay, setActiveDay] = useState('Mon');

  return (
    <section id="schedule" className="if-sec if-rev">
      <div className="if-sec-eyebrow">Weekly Calendar</div>
      <h2 className="if-sec-title">Class <span className="acc">Schedule</span></h2>
      
      {/* 1. MOBILE RESPONSIVE ACCORDION LAYOUT */}
      {isMobile ? (
        <div className="if-sched-mobile-wrapper" style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* Day Selection Tabs for easy phone thumb-taps */}
          <div className="if-mobile-tabs" style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '8px', scrollbarWidth: 'none' }}>
            {SCHEDULE_DATA.map(d => (
              <button 
                key={d.day}
                onClick={() => setActiveDay(d.day)}
                style={{
                  padding: '10px 16px',
                  backgroundColor: activeDay === d.day ? '#FFD700' : '#161616',
                  color: activeDay === d.day ? '#000' : '#888',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {d.day}
              </button>
            ))}
          </div>

          {/* Active Day Content Panel */}
          <div className="if-mobile-content-panel" style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '16px',
            marginTop: '8px'
          }}>
            {SCHEDULE_DATA.find(d => d.day === activeDay).cls.map((c, i) => {
              if (c.empty) return null; // Avoid empty dead space boxes on smaller phone displays
              return (
                <div 
                  key={i} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 0',
                    borderBottom: i === SCHEDULE_DATA.find(d => d.day === activeDay).cls.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: '#888', fontWeight: '500' }}>{c.t}</span>
                  <span style={{ 
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    color: c.f ? '#FFD700' : '#fff' 
                  }}>
                    {c.n} {c.f && '🥊'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        
        /* 2. FULL STANDARD DESKTOP GRID LAYOUT */
        <div className="if-sched-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '12px',
          marginTop: '30px'
        }}>
          {SCHEDULE_DATA.map(d => (
            <div className="if-day-col" key={d.day} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="if-day-head" style={{
                textAlign: 'center',
                fontWeight: '700',
                padding: '10px 0',
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '0.9rem',
                borderBottom: '2px solid rgba(255,255,255,0.1)'
              }}>{d.day}</div>
              
              {d.cls.map((c, i) => c.empty
                ? <div className="if-cls-empty" key={i} style={{ height: '65px', opacity: 0 }} />
                : <div 
                    className={`if-cls${c.f ? ' feat' : ''}`} 
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '10px',
                      background: c.f ? 'rgba(255, 215, 0, 0.05)' : 'rgba(255,255,255,0.01)',
                      border: c.f ? '1px solid rgba(255, 215, 0, 0.2)' : '1px solid rgba(255,255,255,0.03)',
                      borderRadius: '6px',
                      minHeight: '65px',
                      justifyContent: 'center'
                    }}
                  >
                    <span className="if-cls-time" style={{ fontSize: '0.75rem', color: '#666', marginBottom: '2px' }}>{c.t}</span>
                    <span className="if-cls-name" style={{ fontSize: '0.85rem', fontWeight: '700', color: c.f ? '#FFD700' : '#ddd' }}>{c.n}</span>
                  </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}