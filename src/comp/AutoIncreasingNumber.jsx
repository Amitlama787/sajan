// src/AutoIncreasingNumber.jsx

import React, { useState, useEffect } from 'react';

const AutoIncreasingNumber = ({ start = 0, interval = 1000, limit = 500 }) => {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    if (number >= limit) return;

    const timer = setInterval(() => {
      setNumber(prevNumber => {
        if (prevNumber < limit) {
          return prevNumber + 1;
        } else {
          clearInterval(timer);
          return prevNumber;
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, [number, interval, limit]);

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
};

export default AutoIncreasingNumber;
