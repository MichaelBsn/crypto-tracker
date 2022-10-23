import './App.css';
import { useState, useEffect } from 'react'
import Chart from "./components/Chart"

function App() {
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    const apiUrl = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14&interval=daily"
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, [])

  function handleLog() {
    console.log(apiData)
    console.log(apiData.prices)
  }

  return (
    <div className="App">
      <div>
        <h1>Bitcoin</h1>
      </div>
      {apiData && <Chart data={apiData} />}
      <button onClick={handleLog}>Log</button>
    </div>
  );
}

export default App;
