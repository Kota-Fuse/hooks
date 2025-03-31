import { useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="ここに入力" />
      <button onClick={focusInput}>入力フィールドにフォーカス</button>
    </div>
  );
}

export default App;
