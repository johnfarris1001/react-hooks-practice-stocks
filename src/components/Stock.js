import React from "react";

function Stock({ stock, buyStock, sellStock, type }) {
  function tradeStock() {
    if (type === 'stockContainer') {
      buyStock(stock)
    } else {
      sellStock(stock)
    }
  }

  return (
    <div>
      <div className="card">
        <div onClick={tradeStock} className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
