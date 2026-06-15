import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingConnectHUD() {
  const links = {
    instagram: "https://www.instagram.com/_thepiyushthakur_20/",
    whatsapp: "https://wa.me/7078149019?text=I%20want%20to%20train%20with%20Coach%20Piyush!", 
    location: "https://www.google.com/maps/search/?api=1&query=Raghubir+Bal+Mandir+School+Ramghat+Road+Aligarh+Uttar+Pradesh" 
  };

  const blockPunchPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0.15}
      onPointerDown={blockPunchPropagation}
      onClick={blockPunchPropagation}
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '30px', 
        zIndex: 99999,
        touchAction: 'none', 
        cursor: 'grab'
      }}
      whileDrag={{ cursor: 'grabbing', scale: 1.05 }}
    >
      {/* Non-stop Pulsing Energy Aura */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.3, 0.6, 0.3],
          boxShadow: [
            "0 0 15px rgba(255, 215, 0, 0.15)",
            "0 0 35px rgba(255, 215, 0, 0.45)",
            "0 0 15px rgba(255, 215, 0, 0.15)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          inset: '-1px',
          borderRadius: '18px',
          pointerEvents: 'none'
        }}
      />

      {/* Main UI Command Grid Panel */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
          padding: '14px 24px',
          backgroundColor: 'rgba(10, 10, 12, 0.9)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 215, 0, 0.35)',
          borderRadius: '18px',
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.85)',
        }}
      >
        {/* Tactical Move Handle Grabber Drag Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.9 }}>
          {/* Custom Move Icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="5 9 2 12 5 15"></polyline>
            <polyline points="9 5 12 2 15 5"></polyline>
            <polyline points="15 19 12 22 9 19"></polyline>
            <polyline points="19 9 22 12 19 15"></polyline>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="12" y1="2" x2="12" y2="22"></line>
          </svg>
          <span style={{
            fontSize: '12px',
            fontWeight: '900',
            color: '#FFD700',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            borderRight: '1px solid rgba(255, 255, 255, 0.15)',
            paddingRight: '16px',
            userSelect: 'none'
          }}>
            HQ
          </span>
        </div>

        {/* ─── HI-FI VECTOR CTA CHANNELS ─── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          
          {/* Instagram Link */}
          <motion.a 
            href={links.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            title="Launch Instagram Stream"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="if-hud-icon" style={{ transition: 'color 0.2s', color: '#e4e4e7' }} onMouseEnter={(e) => e.target.style.color = '#E1306C'} onMouseLeave={(e) => e.target.style.color = '#e4e4e7'}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </motion.a>

          {/* WhatsApp Direct Line */}
          <motion.a 
            href={links.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            title="Open Secure WhatsApp Gate"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'color 0.2s', color: '#e4e4e7' }} onMouseEnter={(e) => e.target.style.color = '#25D366'} onMouseLeave={(e) => e.target.style.color = '#e4e4e7'}>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </motion.a>

          {/* Google Maps Location */}
          <motion.a 
            href={links.location} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            title="Lock Gym GPS Coordinates"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'color 0.2s', color: '#e4e4e7' }} onMouseEnter={(e) => e.target.style.color = '#FF4444'} onMouseLeave={(e) => e.target.style.color = '#e4e4e7'}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </motion.a>

        </div>
      </div>
    </motion.div>
  );
}