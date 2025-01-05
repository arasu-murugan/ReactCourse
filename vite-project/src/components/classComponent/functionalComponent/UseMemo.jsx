import { useState, useMemo } from "react";

// Simulate a slow function
const slowFunction = (number) => {
  console.log("Calling slow function...");
  for (let i = 0; i < 1000000000; i++); // Simulates a time-consuming process
  return number * 2; // Doubles the number
};

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [theme, updateTheme] = useState(true);

  // Using useMemo to optimize the computation
  const doublingNumber = useMemo(() => slowFunction(num), [num]);

  const darkLight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "1rem",
    borderRadius: "5px",
  };

  return (
    <section>
      <h1>This is UseMemo</h1>
      <div style={darkLight}>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value) || 0)}
        />
        <button onClick={() => updateTheme((prevTheme) => !prevTheme)}>
          Toggle Theme
        </button>
        <h2>Result: {doublingNumber}</h2>
      </div>
    </section>
  );
};

export default UseMemo;
