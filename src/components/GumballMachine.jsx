import React, { useState } from 'react';
import './GumballMachine.css';

function GumballMachine() {
  // Array of colors for a colorful look
  const colors = ['#FF6347', '#FFD700', '#4CAF50', '#00BFFF', '#FF69B4', '#8A2BE2', '#FF4500', '#48D1CC', '#DA70D6', '#32CD32'];
  const randomPosition = () => ({
    left: `${Math.floor(Math.random() * 120)}px`, // Random horizontal positioning
    top: `${Math.floor(Math.random() * 120)}px`,  // Random vertical positioning
    width: `${Math.floor(Math.random() * 10) + 15}px`, // Random size between 15 and 25px
    height: `${Math.floor(Math.random() * 10) + 15}px`,
  });

  const [dispensedGumballs, setDispensedGumballs] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const dispenseGumball = () => {
    if (isButtonDisabled) return;

    const newGumball = {
      color: colors[Math.floor(Math.random() * colors.length)],
      id: Date.now(),
      position: Math.floor(Math.random() * 60) - 30, // Random horizontal position for dropped gumball
      rotation: Math.floor(Math.random() * 360), // Random rotation angle
    };

    setIsButtonDisabled(true);
    setTimeout(() => {
      setDispensedGumballs([...dispensedGumballs, newGumball]);
      setIsButtonDisabled(false);
    }, 100);
  };

  return (
    <div className="gumball-machine">
      <div className="machine-dome">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="gumball"
            style={{
              backgroundColor: colors[index % colors.length],
              ...randomPosition(),
            }}
          ></div>
        ))}
      </div>
      <button
        className="dispense-button"
        onClick={dispenseGumball}
        disabled={isButtonDisabled}
      >
        Dispense
      </button>
      <div className="dispensed-gumballs-container">
        {dispensedGumballs.map((gumball) => (
          <div
            key={gumball.id}
            className="dispensed-gumball"
            style={{
              backgroundColor: gumball.color,
              left: `calc(50% + ${gumball.position}px)`,
              transform: `rotate(${gumball.rotation}deg)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default GumballMachine;
