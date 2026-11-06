import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <span>{count}</span>
      <button type="button" onClick={handleDecrement}>
        -
      </button>

      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
