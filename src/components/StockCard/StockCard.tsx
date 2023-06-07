import React from "react";
import { useQuery } from "react-query";
import { getQuote } from "~/services/query";

type Props = {
  name: string;
  symbol: string;
};

const StockCard = ({ name, symbol }: Props) => {
  const quote = useQuery(["getQuote", symbol], () => getQuote(symbol));

  return (
    <div className="h-12 w-28 rounded-2xl bg-white px-3 py-1">
      <h2 className="font-semibold">{name}</h2>
      <p>{quote.data?.data["Global Quote"]["05. price"]}</p>
    </div>
  );
};

export default StockCard;
