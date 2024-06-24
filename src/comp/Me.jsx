// src/Me.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Me = ({ apiUrl, interval = 1000, limit = 500 }) => {
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the initial number from the API
    axios.get(apiUrl)
      .then(response => {
        setNumber(response.data.number);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the initial number:', error);
        setLoading(false);
      });
  }, [apiUrl]);

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

  const updateNumber = (newNumber) => {
    axios.post(apiUrl, { number: newNumber })
      .then(response => {
        setNumber(response.data.number);
      })
      .catch(error => {
        console.error('Error updating the number:', error);
      });
  };

  const increment = () => {
    if (number < limit) {
      const newNumber = number + 1;
      updateNumber(newNumber);
    }
  };

  const decrement = () => {
    if (number > 0) {
      const newNumber = number - 1;
      updateNumber(newNumber);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Me;
