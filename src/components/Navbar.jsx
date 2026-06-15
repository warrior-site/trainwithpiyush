import { motion } from 'framer-motion';
import { Swords } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="if-nav" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      background: 'rgba(10, 10, 10, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      
      {/* BRAND LOGO WITH Snappy CONTROLS */}
      <a href="#" className="if-logo" style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '10px', 
        textDecoration: 'none',
        color: '#fff',
        fontWeight: '800',
        fontSize: '1.4rem',
        letterSpacing: '-0.5px',
        textTransform: 'uppercase'
      }}>
        {/* Animated Vector Icon Wrapper */}
        <motion.span 
          className="if-logo-icon"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          whileHover={{ 
            scale: [1, 1.25, 1.1],
            rotate: [0, -15, 10, 0],
            transition: { duration: 0.35, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Swords 
            size={24} 
            color="#FFD700" 
            strokeWidth={2} 
            style={{ filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.3))' }}
          />
        </motion.span>
        
        {/* Brand Name Text Block */}
        <span style={{ letterSpacing: '0.5px' }}>
          Iron <span style={{ color: '#FFD700' }}>Fist</span>
        </span>
      </a>

      {/* CENTRAL NAVIGATION SYSTEM */}
      <ul className="if-nav-links" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        {[
          { name: 'Programs', target: '#programs' },
          { name: 'Coaches', target: '#coaches' },
          { name: 'Schedule', target: '#schedule' },
          { name: 'Timer', target: '#timer' },
          { name: 'Gallery', target: '#gallery' },
          { name: 'Contact', target: '#contact' },
        ].map((link) => (
          <li key={link.name}>
            <motion.a 
              href={link.target}
              style={{
                textDecoration: 'none',
                color: '#aaa',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              whileHover={{ 
                color: '#fff',
                y: -1
              }}
            >
              {link.name}
            </motion.a>
          </li>
        ))}
      </ul>

      {/* HIGH VISIBILITY ACTION BUTTON */}
      <motion.a 
        href="#contact" 
        className="if-nav-cta"
        style={{
          textDecoration: 'none',
          backgroundColor: '#FFD700',
          color: '#000',
          padding: '8px 20px',
          borderRadius: '6px',
          fontWeight: '700',
          fontSize: '0.9rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 0 15px rgba(255, 215, 0, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        Join Free
      </motion.a>

    </nav>
  );
}