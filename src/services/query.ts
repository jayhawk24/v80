import axios from "axios";
import { type QuoteResult, type SymbolSearchResult } from "~/types/types";
import { type TimeSeriesDailyAdjusted } from "~/types/types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "demo";

const AV_BASE_URL = `https://www.alphavantage.co/query?apikey=${API_KEY}&`;

export const getTimeSeriesDaily = async (symbol: string) => {
  const response = await axios
    .get<TimeSeriesDailyAdjusted>(
      `${AV_BASE_URL}function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&outputsize=compact`
    )
    .catch((err) => console.error(err));

  return response;
};

type SymbolSearchArgs = {
  name: string;
  symbol: string;
};

export const symbolSearch = async (args: SymbolSearchArgs) => {
  const response = await axios
    .get<SymbolSearchResult>(
      `${AV_BASE_URL}function=SYMBOL_SEARCH&keywords=${
        args.symbol ? args.symbol : args.name
      }`
    )
    .catch((err) => console.error(err));

  return response;
};

export const getQuote = async (symbol: string) => {
  const response = await axios
    .get<QuoteResult>(`${AV_BASE_URL}function=GLOBAL_QUOTE&symbol=${symbol}`)
    .catch((err) => console.error(err));

  return response;
};
