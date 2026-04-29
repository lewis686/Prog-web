import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(function() {
    const timer = setInterval(function() {
      setTime(new Date());
    }, 1000);
    return function() {
      clearInterval(timer);
    };
  }, []); 

  return (
    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '10px 0' }}>
       {time.toLocaleTimeString()}
    </div>
  );
}

export default Clock;