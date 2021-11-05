import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ symbol }) => {
    const [data, setData] = useState({});
    const labels = data.timestamp.map((date) =>
        format(new Date(new Date() - new Date(date)), "eee")
    );
    const dataObj = {
        labels,
        datasets: [
            {
                data: data?.indicators?.quote[0]?.close,
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 1)",
                showLine: true,
                pointRadius: 1,
                tension: 0
            }
        ]
    };

    useEffect(() => {
        const getChart = async () => {
            const response = await axios.get(
                `/api/get-chart?symbol=${symbol}&interval=60m&range=5d`
            );
            setData(response.data.chart.result[0]);
        };
        getChart();
    }, []);

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { display: false }
            },
            y: {
                grid: { display: false },
                ticks: { display: false }
            }
        }
    };

    return (
        <div className="chart">
            <Line data={dataObj} options={options} />
        </div>
    );
};

export default Chart;
