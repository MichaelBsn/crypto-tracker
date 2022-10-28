import './App.css';
import { useState, useEffect } from 'react'
import Chart from "./components/Chart"

function App() {
  const [apiData, setApiData] = useState(null)
  const [currentChart, setCurrentChart] = useState('bitcoin')

  useEffect(() => {
    getCurrentChart()
  }, [currentChart])

  function getCurrentChart() {
    const apiUrl = "https://api.coingecko.com/api/v3/coins/" + currentChart + "/market_chart?vs_currency=usd&days=14&interval=daily"
    console.log(apiUrl)
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }

  function handleChartChange(e) {
    setCurrentChart(e.target.value)
  }


  return (
    <div className="App">
      <h1>Bitcoin Tracker</h1>
      {apiData && <Chart currentChart={currentChart} handleChartChange={handleChartChange} data={apiData} />}
    </div>
  );
}

export default App;
