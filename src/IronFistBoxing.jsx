import { useState, useEffect, useRef, useCallback } from "react";
import './styles/boxing-all.css';

// Component Imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Coaches from "./components/Coaches";
import Schedule from "./components/Schedule";
import Timer from "./components/Timer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from './components/Gallery'

const WORDS = ['POW!', 'BAM!', 'KO!', 'HOOK!', 'JAB!', 'CROSS!', 'UPPER!', 'SMASH!', 'HIT!', 'KNOCK!'];
const ROUND_SEC = 180, REST_SEC = 60, TOTAL_ROUNDS = 3;

/* ─── Punch effects ─── */
function spawnPunch(x, y, layer) {
  const fx = document.createElement('div');
  fx.className = 'if-punch-fx';
  fx.style.left = x + 'px';
  fx.style.top = y + 'px';

  const r1 = document.createElement('div'); r1.className = 'if-p-ring if-p-ring-1';
  const r2 = document.createElement('div'); r2.className = 'if-p-ring if-p-ring-2';
  const wv = document.createElement('div'); wv.className = 'if-p-wave';
  const wd = document.createElement('div'); wd.className = 'if-p-word';
  wd.textContent = WORDS[Math.floor(Math.random() * WORDS.length)];
  fx.appendChild(r1); fx.appendChild(r2); fx.appendChild(wv); fx.appendChild(wd);

  const colors = ['#FFD700', '#C8102E', '#FFFFFF', '#FF6644'];
  for (let i = 0; i < 8; i++) {
    const sp = document.createElement('div');
    sp.className = 'if-p-spark';
    const ang = (i / 8) * 360 + Math.random() * 20;
    const d = 28 + Math.random() * 24;
    const rad = ang * Math.PI / 180;
    sp.style.setProperty('--fly', `translate(${Math.cos(rad) * d - 2}px,${Math.sin(rad) * d - 2}px)`);
    sp.style.background = colors[Math.floor(Math.random() * colors.length)];
    sp.style.animationDelay = (Math.random() * .08) + 's';
    fx.appendChild(sp);
  }
  layer.appendChild(fx);
  setTimeout(() => fx.remove(), 900);
}

/* ─── Scroll reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.if-rev').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

//google form filling 
const handleSubmit = async (e) => {
  e.preventDefault();

  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeu5d7QQ2TLgDqrTVJBJafzSddnChN0fGbynpXJepN9_EjXRQ/formResponse";

  // 1. Extract the raw form element data
  const data = new FormData(e.target);
  
  // 2. Convert FormData into URLSearchParams (e.g., entry.123=value&entry.456=value)
  const searchParams = new URLSearchParams();
  for (const [key, value] of data.entries()) {
    searchParams.append(key, value);
  }

  try {
    // 3. Post as a standard urlencoded request
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: searchParams.toString()
    });

    setFormDone(true);
  } catch (error) {
    console.error("Form submission failed:", error);
    alert("Something went wrong. Please try again!");
  }
};

/* ─── Timer logic hook ─── */
function useTimer() {
  const [tSec, setTSec] = useState(ROUND_SEC);
  const [running, setRunning] = useState(false);
  const [round, setRound] = useState(1);
  const [resting, setResting] = useState(false);
  const [done, setDone] = useState(false);
  const stateRef = useRef({ tSec: ROUND_SEC, running: false, round: 1, resting: false, done: false });

  useEffect(() => { stateRef.current = { tSec, running, round, resting, done }; }, [tSec, running, round, resting, done]);

  const intRef = useRef(null);

  const tick = useCallback(() => {
    const s = stateRef.current;
    let sec = s.tSec - 1;
    let r = s.round, rest = s.resting;
    if (sec < 0) {
      if (!rest && r < TOTAL_ROUNDS) { rest = true; sec = REST_SEC; }
      else if (rest) { rest = false; r++; sec = ROUND_SEC; }
      else { clearInterval(intRef.current); setRunning(false); setDone(true); return; }
      setRound(r); setResting(rest);
    }
    setTSec(sec);
  }, []);

  const toggle = useCallback(() => {
    if (done) return;
    if (running) { clearInterval(intRef.current); setRunning(false); }
    else { setRunning(true); intRef.current = setInterval(tick, 1000); }
  }, [running, done, tick]);

  const reset = useCallback(() => {
    clearInterval(intRef.current);
    setRunning(false); setTSec(ROUND_SEC); setRound(1); setResting(false); setDone(false);
  }, []);

  useEffect(() => () => clearInterval(intRef.current), []);

  const m = Math.floor(tSec / 60), s = tSec % 60;
  const display = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  const phase = done ? 'DONE!' : resting ? `Rest · Round ${round} of ${TOTAL_ROUNDS}` : `Round ${round} of ${TOTAL_ROUNDS}`;
  const info = done ? '🏆 All rounds complete!' : resting ? '⏸ Catch your breath' : running ? '🥊 Work!' : '🥊 Ready to go';
  const color = done ? '#FFD700' : resting ? '#4CAF50' : tSec <= 10 ? '#C8102E' : '#FFD700';

  return { display, phase, info, color, running, done, toggle, reset };
}

export default function IronFistBoxing() {
  const punchLayerRef = useRef(null);
  const [comboCount, setComboCount] = useState(0);
  const [comboOn, setComboOn] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const comboTimerRef = useRef(null);
  const [formDone, setFormDone] = useState(false);

  const timer = useTimer();
  useReveal();

  const handleClick = useCallback((e) => {
    const skip = ['INPUT', 'BUTTON', 'SELECT', 'A', 'OPTION'];
    if (skip.includes(e.target.tagName)) return;
    if (punchLayerRef.current) spawnPunch(e.clientX, e.clientY, punchLayerRef.current);
    setComboCount(c => c + 1);
    setComboOn(true);
    setShowHint(false);
    clearTimeout(comboTimerRef.current);
    comboTimerRef.current = setTimeout(() => { setComboCount(0); setComboOn(false); }, 1600);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormDone(true);
  };

  return (
    <div className="if-root">
      {/* Background Frame Layout */}
      <div className="if-ring-frame" aria-hidden="true" />
      <div className="if-cpost tl" aria-hidden="true" />
      <div className="if-cpost tr" aria-hidden="true" />
      <div className="if-cpost bl" aria-hidden="true" />
      <div className="if-cpost br" aria-hidden="true" />

      {/* Heavy Bag Scene */}
      <div className="if-bag-scene" aria-hidden="true">
        <div className="if-bag-chain" />
        <div className="if-bag-pivot">
          <div className="if-bag-hook" />
          <div className="if-bag-body"><div className="if-bag-tape-mid" /></div>
          <div className="if-bag-btm" />
          <div className="if-bag-rope-bottom" />
        </div>
        <div className="if-glove-wrap if-glove-left-w">
          <div className="if-glove-body" />
          <div className="if-glove-wrist" />
        </div>
        <div className="if-glove-wrap if-glove-right-w">
          <div className="if-glove-body" />
          <div className="if-glove-wrist" />
        </div>
      </div>

      {/* Combo Overlay Counter */}
      <div className={`if-combo${comboOn ? ' on' : ''}`} aria-live="polite">
        <div className="if-combo-n">×{comboCount}</div>
        <div className="if-combo-lbl">Combo</div>
      </div>

      {/* Interaction Layers */}
      <div className="if-punch-layer" ref={punchLayerRef} aria-hidden="true" />
      {showHint && <div className="if-click-hint">✦ Click anywhere to punch ✦</div>}

      {/* Main Viewport Content Container */}
      <div className="if-page">
        <Navbar />
        <Hero />
        <hr className="if-rope-div" />
        
        <Programs />
        <hr className="if-rope-div" />
        
        <Coaches />
        <hr className="if-rope-div" />
        
         <Gallery />
        <hr className="if-rope-div" />
        
        <Schedule />
        <hr className="if-rope-div" />
        
        <Timer timer={timer} />
        <hr className="if-rope-div" />
        
        <Testimonials />
        <hr className="if-rope-div" />
        
        <Contact 
          formDone={formDone} 
          onSubmit={() => setFormDone(true)} 
        />
        <Footer />
      </div>
    </div>
  );
}