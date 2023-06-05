/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useState } from "react";
import {
  type TimeSeriesDailyAdjusted,
  type Series,
  type TimeSeries,
} from "~/types/types";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { formatData } from "~/utils/utils";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type Props = {
  name: string;
  symbol?: string;
  price?: string;
  timeSeries?: TimeSeries;
};

const options = {
  chart: {
    type: "candlestick",
  },
  title: {
    text: "CandleStick Chart",
    align: "left",
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};

const BASE_URL =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=RELIANCE.BSE&outputsize=full&apikey=3WONBXU6F6QKQGKD";

const LiveChart = (props: Props) => {
  const [series, setSeries] = useState<Series>({});

  const getStock = async () => {
    return await fetch(BASE_URL)
      .then(async (response) => await response.json())
      .then((data) => setSeries(formatData(data as TimeSeriesDailyAdjusted)));
  };
  useQuery("getStock", getStock, { staleTime: Infinity, cacheTime: Infinity });

  return (
    <div id="chart">
      {typeof window !== undefined && (
        <ReactApexChart
          options={options}
          series={[series]}
          type="candlestick"
          height={350}
        />
      )}
    </div>
  );
};

export default LiveChart;
