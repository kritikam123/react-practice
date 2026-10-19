import { useState } from "react";
export function LimitedTextInput({ characterLimit = 20 }) {
  const [input, setInput] = useState("");
  const remainingCharacters = characterLimit - input.length;
  const limitExceeded = remainingCharacters < 0;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (limitExceeded) {
      alert("The input exceeds the character limit. Please shorten your text");
    } else {
      setInput("");
      alert("Thanks for your submission");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-imput"> Limited Text Input:</label>
        <span className={limitExceeded ? "error" : "no-error"}>
          Characters remaining: {remainingCharacters}
        </span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
