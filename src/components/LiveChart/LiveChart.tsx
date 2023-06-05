import React from "react";
import { type TimeSeries } from "~/types/types";

type Props = {
  name: string;
  symbol?: string;
  price?: string;
  timeSeries?: TimeSeries;
};

const LiveChart = (props: Props) => {
  return <div>{props.name}</div>;
};

export default LiveChart;
