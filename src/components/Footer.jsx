import {motion } from "framer-motion"
import {Swords} from "lucide-react"

export default function Footer() {
  return (
    <footer className="if-footer">
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
      <div className="if-foot-copy">© 2026 Iron Fist Boxing Academy. All rights reserved.</div>
      <ul className="if-foot-links">
        <li><a href="https://www.instagram.com/_thepiyushthakur_20/">Instagram</a></li>
        <li><a href="#">YouTube</a></li>
        <li><a href="#">Facebook</a></li>
      </ul>
    </footer>
  );
}