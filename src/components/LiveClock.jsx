import React, { useEffect, useState } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set interval to update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: "2rem", fontFamily: "monospace" }}>
      🕒 {time.toLocaleTimeString()}
    </div>
  );
};

export default LiveClock;
