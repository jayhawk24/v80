import {
  type Series,
  type SeriesData,
  type TimeSeriesDailyAdjusted,
} from "~/types/types";

export const formatData = (stockData: TimeSeriesDailyAdjusted): Series => {
  const solution: SeriesData[] = [];

  Object.entries(stockData["Time Series (Daily)"]).forEach(
    ([month, monthlyPrices]) => {
      const obj: SeriesData = { x: new Date(month), y: [] };
      const prices = [];

      prices.push(Number(monthlyPrices["1. open"]));
      prices.push(Number(monthlyPrices["2. high"]));
      prices.push(Number(monthlyPrices["3. low"]));
      prices.push(Number(monthlyPrices["4. close"]));
      obj.y = prices;

      solution.push(obj);
    }
  );
  return { data: solution };
};
