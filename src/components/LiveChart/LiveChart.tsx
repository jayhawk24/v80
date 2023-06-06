/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useCallback } from "react";
import { type TimeSeries } from "~/types/types";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { formatData } from "~/utils/utils";
import { getTimeSeriesDaily } from "~/services/request-handler";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type Props = {
  name: string;
  symbol: string;
  price?: string;
  timeSeries?: TimeSeries;
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
    <div id="chart">
      {typeof window !== undefined && (
        <ReactApexChart
          options={options}
          series={[seriesData()]}
          type="candlestick"
          height={350}
        />
      )}
    </div>
  );
};

export default LiveChart;
