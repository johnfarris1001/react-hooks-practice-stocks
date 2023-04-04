import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, sellStock, buyStock }) {
  const stocksToDisplay = stocks.map(stock => {
    return <Stock key={stock.id} stock={stock} buyStock={buyStock} sellStock={sellStock} type='portfolioContainer' />
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksToDisplay}
    </div>
  );
}

export default PortfolioContainer;
