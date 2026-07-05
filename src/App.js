import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const reset = () => setCount(0);

  return (
    <div className="container">
      <div className="card">
        <h1>Counter Application</h1>
        <p className="count">{count}</p>
        <div className="btn-group">
          <button className="btn-increment" onClick={increment}>Increment</button>
          <button 
            className="btn-decrement" 
            onClick={decrement} 
            disabled={count === 0}
          >
            Decrement
          </button>
          <button className="btn-reset" onClick={reset}>Reset</button>
        </div>
        {count === 0 && <p className="error-msg">Minimum limit reached</p>}
      </div>
    </div>
  );
}

export default App;