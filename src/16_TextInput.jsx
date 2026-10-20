import { useEffect, useRef } from "react";

export function TextInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <h1>Autofocus Input</h1>
      <label htmlFor="focus">Email Address</label>
      <input
        id="focus"
        ref={inputRef}
        type="email"
        placeholder="Enter your email"
      />
    </div>
  );
}
