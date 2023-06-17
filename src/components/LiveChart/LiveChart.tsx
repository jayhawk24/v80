/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useCallback, useContext } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { formatData } from "~/utils/utils";
import { getTimeSeriesDaily } from "~/services/query";
import { AppContext } from "~/context/AppContext";
import { api } from "~/utils/api";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});


const options: ApexCharts.ApexOptions = {
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

const LiveChart = () => {

  const appContext = useContext(AppContext)
  options.title = { text: appContext?.liveChart.name };

  const timeSeries = useQuery(
    ["getStock", appContext?.liveChart.symbol],

    () => getTimeSeriesDaily(appContext?.liveChart.symbol),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  const seriesData = useCallback(
    () =>
      timeSeries.data?.data ? formatData(timeSeries.data?.data) : { data: [] },
    [timeSeries]
  );

  const { data } = api.stocks.getAll.useQuery()
  console.log(data)

  return (
    <div id="chart" className="h-full w-1/2 rounded-3xl bg-white">
      {typeof window !== undefined && (
        <ReactApexChart
          options={options}
          series={[seriesData()]}
          type="candlestick"
        />
      )}
    </div>
  );
};

export default LiveChart;
