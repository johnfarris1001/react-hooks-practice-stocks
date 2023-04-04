import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, buyStock, sellStock, sort, filter }) {
  const stocksToDisplay = stocks.filter(stock => {
    if (filter === '') return true
    return stock.type === filter
  }).map(stock => {
    return <Stock key={stock.id} stock={stock} buyStock={buyStock} sellStock={sellStock} type='stockContainer' />
  })



  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div >
  );
}

export default StockContainer;
