const TESTIMONIALS_DATA = [
  { text:'"Iron Fist didn\'t just teach me to box — they rebuilt my confidence. Won my first amateur bout 6 months after joining. Coach Wells is simply the best in the business."', icon:'💪', name:'James R.', rank:'Amateur · 2 wins · 1 loss' },
  { text:'"Sent my 12-year-old for the Junior program. In 4 months, his discipline, focus, and school performance all improved dramatically. The best decision we ever made."', icon:'⭐', name:'Priya M.', rank:'Parent of Junior Member' },
  { text:'"The conditioning program here is unlike anything I\'ve tried. I came in a gym rat — I left a boxer. Sofia\'s S&C sessions are absolutely legendary. Highly recommend."', icon:'🥊', name:'Arjun K.', rank:'Intermediate · 18 months in' },
];

export default function Testimonials() {
  return (
    <section className="if-sec if-rev">
      <div className="if-sec-eyebrow">From the Gym Floor</div>
      <h2 className="if-sec-title">Real <span className="acc">Results</span></h2>
      <div className="if-testi-grid">
        {TESTIMONIALS_DATA.map(t => (
          <div className="if-testi-card" key={t.name}>
            <p className="if-testi-text">{t.text}</p>
            <div className="if-testi-author">
              <div className="if-testi-avatar">{t.icon}</div>
              <div>
                <div className="if-testi-name">{t.name}</div>
                <div className="if-testi-rank">{t.rank}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}