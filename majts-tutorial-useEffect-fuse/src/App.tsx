import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        setData(data); 
    };
    fetchData();
  }, []);

  return (
    <div>
    <h1>データ取得コンポーネント</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
  );
}

export default App;
