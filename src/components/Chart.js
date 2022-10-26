import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({ data, currentChart, handleChartChange }) => {
    const [labels, setLabels] = useState([])
    const [values, setValues] = useState([])

    useEffect(() => {
        let valuesList = []
        let labelsList = []
        for (let i of data.prices) {
            let price = i[1]
            let date = i[0]
            let dateObject = new Date(date)
            let dateString = dateObject.toLocaleDateString()
            valuesList.push(price)
            labelsList.push(dateString)
        }
        setValues(valuesList)
        setLabels(labelsList)
    }, [data])

    return (
        <div className='chart'>
            <Line datasetIdKey='id'
                data={{
                    labels: labels,
                    datasets: [
                        {
                            id: 1,
                            label: currentChart.toUpperCase(),
                            data: values,
                            backgroundColor: "red",
                            borderColor: "red",
                            tension: 0.05
                        }
                    ],
                }}
                options={{ responsive: true, }} />
            <div className='coin-select-container'>
                <label><input type="radio" name="coin" value={'bitcoin'} onClick={handleChartChange} /> Bitcoin</label>
                <label><input type="radio" name="coin" value={'ethereum'} onClick={handleChartChange} /> Ethereum</label>
                <label><input type="radio" name="coin" value={'tether'} onClick={handleChartChange} /> Tether</label>
            </div>
        </div>
    )
}

export default Chart