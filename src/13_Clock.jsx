import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleDateString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Current Time</h1>
      <p>{time}</p>
    </div>
  );
}
