import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [allStocks, setAllStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState(null)

  function onSortChange(e) {
    setSort(e.target.value)
  }

  function onFilterChange(e) {
    setFilter(e.target.value)
  }

  const API = 'http://localhost:3001/stocks'

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setAllStocks(data))
  }, [])

  function buyStock(stock) {
    if (myStocks.includes(stock)) {
      return
    }
    setMyStocks([...myStocks, stock])
  }

  function sellStock(stock) {
    setMyStocks(myStocks.filter(item => {
      return item !== stock
    }))
  }

  const alphabeticStocks = []

  allStocks.map(stock => {
    return stock.ticker
  }).sort().forEach(ticker => {
    for (const stock of allStocks) {
      if (stock.ticker === ticker) {
        alphabeticStocks.push(stock)
      }
    }
  })

  const priceStocks = []

  allStocks.map(stock => {
    return stock.price
  }).sort(function (a, b) {
    return a - b
  }).forEach(price => {
    for (const stock of allStocks) {
      if (stock.price === price) {
        priceStocks.push(stock)
      }
    }
  })



  return (
    <div>
      <SearchBar onSortChange={onSortChange} sort={sort} onFilterChange={onFilterChange} filter={filter} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            sort={sort}
            filter={filter}
            buyStock={buyStock}
            sellStock={sellStock}
            stocks={sort === 'Alphabetically' ? alphabeticStocks : sort === 'Price' ? priceStocks : allStocks}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer sellStock={sellStock} buyStock={buyStock} stocks={myStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
