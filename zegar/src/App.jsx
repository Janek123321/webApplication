import React, { useState, useRef, useEffect } from 'react';

const TimerWithStep = () => {
  const [seconds, setSeconds] = useState(0);
  const [step, setStep] = useState(1); // Domyślny krok: 1 sekunda
  const intervalRef = useRef(null);

  const startTimer = () => {
    // Jeśli już działa, nie rób nic
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + Number(step));
    }, 1000);
  };

  // Czyszczenie interwału przy odmontowaniu komponentu
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <form>
      <p>{seconds} sekund</p>
      
        Krok (sekundy):&nbsp;
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          min="1"
        />
      <br /><br />
      <button onClick={startTimer}>Start</button>
      </form>
    </div>
  );
};

export default TimerWithStep;
