import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    getAdvice();
  },[])

  const getAdvice = async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    console.log(data)
    setAdvice(data.activity)
  }
  

  return(
    <div className='App'>
      <p className='advice'>{advice}</p>
      <button className='btn' onClick={getAdvice}>Next advice</button>
    </div>
  )
}

export default App;
