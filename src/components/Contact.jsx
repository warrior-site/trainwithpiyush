// components/Contact.jsx
export default function Contact({ onSubmit, formDone }) {
  return (
    <section id="contact" className="if-cta-sec if-rev">
      <h2 className="if-cta-title">Step Into <span>The Ring</span></h2>
      <p className="if-cta-sub">First class is completely free. No experience required. Just show up.</p>
      
      <form 
        className="if-contact-form" 
        target="hidden_iframe" 
        action="https://docs.google.com/forms/d/e/1FAIpQLSeu5d7QQ2TLgDqrTVJBJafzSddnChN0fGbynpXJepN9_EjXRQ/formResponse" 
        method="POST"
        onSubmit={onSubmit}
      >
        <input type="text" name="entry.326305705" className="if-fi" placeholder="Your Name" required />
        <input type="email" name="entry.1341494617" className="if-fi" placeholder="Email Address" required />
        <input type="tel" name="entry.1532390154" className="if-fi" placeholder="Phone (optional)" />
        
        <select name="entry.991906638" className="if-fi" defaultValue="">
          <option value="" disabled>Select a Program</option>
          <option value="Foundation Boxing (Beginner)">Foundation Boxing (Beginner)</option>
          <option value="Fight Conditioning (Intermediate)">Fight Conditioning (Intermediate)</option>
          <option value="Sparring & Strategy (Advanced)">Sparring & Strategy (Advanced)</option>
          <option value="Junior Champions (Youth)">Junior Champions (Youth)</option>
        </select>
        
        <button type="submit" className="if-fsub" disabled={formDone}>
          {formDone ? "🥊 You're In! See You at the Gym." : 'Book My Free Class'}
        </button>
      </form>

      {/* Hidden iframe captures the native form submission securely */}
      <iframe 
        name="hidden_iframe" 
        id="hidden_iframe" 
        style={{ display: 'none' }} 
      />
    </section>
  );
}