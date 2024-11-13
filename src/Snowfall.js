// Snowfall.js
import React, { useEffect, useState } from 'react';
import './App.css';

const Snowfall = () => {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const snowflakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${2 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 5}s`,
      },
    }));
    setFlakes(snowflakes);
  }, []);

  return (
    <>
      {flakes.map((flake) => (
        <div key={flake.id} className="snowflake" style={flake.style}>
          ❄️
        </div>
      ))}
    </>
  );
};

export default Snowfall;