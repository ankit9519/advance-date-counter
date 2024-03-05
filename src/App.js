import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div style={{ textAlign: "center", fontSize: "30px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <input
          type='range'
          min='1'
          max='10'
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <p>{step}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          style={{ fontSize: "30px" }}
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <input
          type='number'
          style={{ fontSize: "30px" }}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          onSubmit={handleSubmit}
        />
        <button
          style={{ fontSize: "30px" }}
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>
      <div>
        <h1>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count > 0
            ? `${count} days from today is ${date.toDateString()}`
            : `${Math.abs(count)} days ago was ${date.toDateString()}`}
        </h1>
      </div>
    </div>
  );
}

export default App;
