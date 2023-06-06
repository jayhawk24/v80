import axios from "axios";
import { type TimeSeriesDailyAdjusted } from "~/types/types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "demo";

export const getTimeSeriesDaily = async (symbol: string) => {
  const response = await axios
    .get<TimeSeriesDailyAdjusted>(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${API_KEY}&outputsize=compact`
    )
    .catch((err) => console.error(err));

  return response;
};
