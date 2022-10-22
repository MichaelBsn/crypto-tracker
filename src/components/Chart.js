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


const Chart = ({ data }) => {
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
        console.log("Chart useEffect")
    }, [])


    return (
        <div>

            <Line datasetIdKey='id'
                data={{
                    labels: labels,
                    datasets: [
                        {
                            id: 1,
                            label: 'bitcoin',
                            data: values,
                            backgroundColor: "red",
                            borderColor: "red",
                            tension: 0.15
                        }
                    ],
                }}
                options={{ responsive: true, }} />
        </div>
    )
}

export default Chart