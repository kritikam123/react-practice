import { useState } from "react";

export function AdLight() {
  const [mode, setMode] = useState("dark");

  const handleChange = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <button onClick={handleChange}>
        {mode === "dark" ? "Activate Light Mode" : "Activate Dark Mode"}
      </button>
    </div>
  );
}
