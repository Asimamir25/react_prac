import React, { useEffect, useRef, useState } from 'react'

const DebounceCounter = () => {
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState(0);

  const debounceRef = useRef(null);
  const firstRender = useRef(true); // 👈 flag to stop first run

  useEffect(() => {
    // Skip debounce on first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 300);

  }, [clicks]);

  return (
    <div>
      <h2>Debounce Counter</h2>
      <p>Debounced Count: {counter}</p>

      <button onClick={() => setClicks((prev) => prev + 1)}>
        Click Fast!
      </button>
    </div>
  );
}

export default DebounceCounter;
