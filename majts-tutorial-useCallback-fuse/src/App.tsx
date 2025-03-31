import { useState, useCallback } from 'react';
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>カウント: {count}</h1>
      <button onClick={increment}>カウントを増やす</button>
    </div>
  );
}

export default App;
