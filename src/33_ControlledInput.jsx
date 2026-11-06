import { useState } from "react";

export function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name ? `Hello, ${name}!` : `Hello, stranger!`}</p>
    </div>
  );
}
