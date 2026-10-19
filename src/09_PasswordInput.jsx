import { useState } from "react";
export function PasswordInput({ minimum = 8 }) {
  const [inputValue, setInputValue] = useState("");
  const [isInputValueVisible, setIsInputValueVisible] = useState(false);
  const thresholdMet = inputValue.length >= minimum;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleToggleVisibility = () => {
    setIsInputValueVisible(!isInputValueVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (thresholdMet) {
      alert("password submitted");
    } else {
      alert("You need longer password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Password:</label>
      <span className={thresholdMet ? "no-error" : "error"}>
        {inputValue.length}
      </span>
      <div>
        <input
          type={isInputValueVisible ? "text" : "password"}
          placeholder="Enter a password"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="button" onClick={handleToggleVisibility}>
          {isInputValueVisible ? "🙊" : "🙈"}
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
