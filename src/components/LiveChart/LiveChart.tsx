/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { formatData } from "~/utils/utils";
import { getTimeSeriesDaily } from "~/services/query";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type Props = {
  name: string;
  symbol: string;
  price?: string;
};

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

const LiveChart = (props: Props) => {
  options.title = { text: props.name };

  const timeSeries = useQuery(
    "getStock",
    () => getTimeSeriesDaily(props.symbol),
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
