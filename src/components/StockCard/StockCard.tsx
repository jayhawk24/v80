import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AppContext } from "~/context/AppContext";
import { getQuote } from "~/services/query";

type StockCardProps = {
  name: string;
  symbol: string;
};

const StockCard = ({ name, symbol }: StockCardProps) => {
  const quote = useQuery(["getQuote", symbol], () => getQuote(symbol));
  const appContext = useContext(AppContext)

  const handleChange = () => {
    appContext?.setLiveChart({ name, symbol })
  }

  return (
    <div className="h-12 w-28 rounded-2xl bg-white px-3 py-1 cursor-pointer" onClick={handleChange}>
      <h2 className="font-semibold">{name}</h2>
      <p>{quote.data?.data?.["Global Quote"]?.["05. price"]}</p>
    </div>
  );
};

export default StockCard;
