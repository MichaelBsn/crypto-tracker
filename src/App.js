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



  let myList = [['a', '1'], ['b', '2'], ['c', '3'], ['d', '4']]
  let letters = []
  let numbers = []
  for (let pair of myList) {
    letters.push(pair[0])
    numbers.push(pair[1])
  }
  console.log(letters) // desired output: ['a', 'b', 'c', 'd']
  console.log(numbers) // desired output: ['1', '2', '3', '4']








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
