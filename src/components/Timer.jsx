export default function Timer({ timer }) {
  return (
    <section id="timer" className="if-sec if-rev">
      <div className="if-sec-eyebrow">Training Tool</div>
      <h2 className="if-sec-title">Round <span className="acc">Timer</span></h2>
      <div className="if-timer-wrap">
        <div className="if-timer-box">
          <div className="if-timer-phase">{timer.phase}</div>
          <div className="if-timer-display" style={{ color: timer.color }}>
            {timer.done ? '00:00' : timer.display}
          </div>
          <div className="if-timer-round">{timer.info}</div>
          <div className="if-timer-btns">
            <button className="if-tbtn go" onClick={timer.toggle}>
              {timer.done ? 'Start' : timer.running ? 'Pause' : 'Resume'}
            </button>
            <button className="if-tbtn rst" onClick={timer.reset}>Reset</button>
          </div>
        </div>
        <p className="if-timer-note">
          Classic boxing round timer — 3-minute rounds, 1-minute rest, repeated 3 times.
          The standard competition format.<br /><br />
          <strong>The bell rings. No excuses. Just work.</strong>
        </p>
      </div>
    </section>
  );
}