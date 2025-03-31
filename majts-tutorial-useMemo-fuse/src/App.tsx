import { useState, useMemo } from 'react';
import "./App.css" 
function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const doubledSum = useMemo(() => {
    return numbers.reduce((acc, num) => acc + num * 2, 0);
  }, [numbers]);

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumber + 1]);
  };

  return (
    <div>
      <p>倍にした数の合計: {doubledSum}</p>
      <button onClick={addNumber}>数を増やす</button>
    </div>
  );
}

export default App;
