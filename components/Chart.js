import { CircularProgress } from "@mui/material";
import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "./redux/actions/stockActions";

const Chart = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const { selectedStock } = useSelector((state) => state.selectedStock);
    const { stockQuote } = useSelector((state) => state.stockQuote);

    const dispatch = useDispatch();

    const labels = data.timestamp?.map((date) =>
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
        if (selectedStock) {
            setLoading(true);
            dispatch(fetchQuote(selectedStock.symbol));
        }
    }, [selectedStock]);

    useEffect(() => {
        if (stockQuote?.chart?.result) {
            setLoading(false);
            setData(stockQuote.chart.result[0]);
        }
    }, [stockQuote]);

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
            {loading ? (
                <div className="loader">
                    <CircularProgress color="inherit" />
                </div>
            ) : (
                <Line data={dataObj} options={options} />
            )}
        </div>
    );
};

export default Chart;
