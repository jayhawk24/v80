import React from "react";

type Props = {
  name: string;
  price: number;
};

const StockCard = (props: Props) => {
  return (
    <div className="h-12 w-28 bg-slate-400">
      <h2 className="font-semibold">{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
};

export default StockCard;
