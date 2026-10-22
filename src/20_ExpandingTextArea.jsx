import { useRef, useState } from "react";

export function ExpandingTextarea() {
  const [text, setText] = useState(" ");

  const textAreaRef = useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
    textAreaRef.current.style.height = "inherit";
    const scrollHeight = textAreaRef.current.scrollHeight;
    textAreaRef.current.style.height = scrollHeight + "px";
  };
  return (
    <section className="container">
      <h1>Expanding Textarea</h1>
      <label htmlFor="textarea">Enter or paste in some text</label>
      <input
        id="textarea"
        ref={textAreaRef}
        type="text"
        placeholder="Enter some text"
        value={text}
        onChange={handleChange}
        rows={1}
      />
    </section>
  );
}
