export function Limit() {
  const handleChange = (event) => {
    const text = event.target.value;
    if (text.length > 10) {
      alert("Character limit exceeding!");
    }
  };
  return (
    <>
      <h1>Character Limit</h1>
      <input onChange={handleChange} placeholder="Enter some text" />
    </>
  );
}
