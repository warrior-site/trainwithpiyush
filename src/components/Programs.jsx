import { Shield, Flame, Trophy, Award } from 'lucide-react';

const PROGRAMS_DATA = [
  { 
    icon: Shield, // Safe, defensive foundation structure
    iconColor: '#FFD700', // Gold accents
    lvl: 'Beginner', 
    name: 'Foundation Boxing', 
    desc: 'Master stance, footwork, and the jab-cross-hook. Build your base before anything else — the right way from day one.', 
    dur: '⏱ 60 min · 3×/week' 
  },
  { 
    icon: Flame, // High intensity conditioning / burn
    iconColor: '#C8102E', // Red accents
    lvl: 'Intermediate', 
    name: 'Fight Conditioning', 
    desc: 'Intense cardio, bag work, and pad drills designed to forge champion-level endurance and explosive power.', 
    dur: '⏱ 75 min · 4×/week' 
  },
  { 
    icon: Trophy, // Championship level sparring
    iconColor: '#FFD700', 
    lvl: 'Advanced', 
    name: 'Sparring & Strategy', 
    desc: 'Live sparring, defensive drills, and fight-IQ development. For those who are ready to compete and win.', 
    dur: '⏱ 90 min · 5×/week' 
  },
  { 
    icon: Award, // Youth developmental badges / stars
    iconColor: '#FFE566', // Light gold
    lvl: 'Youth · Ages 8–16', 
    name: 'Junior Champions', 
    desc: 'Safe, structured, and fun boxing for young athletes. Builds discipline, focus, and confidence for life.', 
    dur: '⏱ 45 min · 3×/week' 
  },
];

export default function Programs() {
  return (
    <section id="programs" className="if-sec if-rev">
      <div className="if-sec-eyebrow">What We Offer</div>
      <h2 className="if-sec-title">Training <span className="acc">Programs</span></h2>
      <div className="if-prog-grid">
        {PROGRAMS_DATA.map(p => {
          // Dynamic component rendering for Lucide components
          const IconComponent = p.icon;
          
          return (
            <div className="if-prog-card" key={p.name}>
              {/* Clean Vector Icon Container instead of standard text emoji */}
              <div className="if-prog-icon" style={{ marginBottom: '14px' }}>
                <IconComponent 
                  size={36} 
                  strokeWidth={1.5} 
                  color={p.iconColor} 
                />
              </div>
              <div className="if-prog-lvl">{p.lvl}</div>
              <div className="if-prog-name">{p.name}</div>
              <p className="if-prog-desc">{p.desc}</p>
              <div className="if-prog-dur">{p.dur}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}