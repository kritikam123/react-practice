import { useState } from "react";

export function Light() {
  const [mode, setMode] = useState("dark");

  const handleDarkMode = () => {
    setMode("dark");
  };

  const handleLightMode = () => {
    setMode("light");
  };

  return (
    <div>
      {mode === "light" ? (
        <button onClick={handleDarkMode}> Activate Dark Mode</button>
      ) : (
        <button onClick={handleLightMode}> Activate Light Mode </button>
      )}
    </div>
  );
}
