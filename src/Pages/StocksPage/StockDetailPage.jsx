import { useEffect, useState } from "react";

export default function StockDetailPage() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    async function loadStock() {
      const response = await fetch(
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"

        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=JgOAADvWjnurMD8QLuMAkLF5XlL7pD8jQUMCqXlC"
        "https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=SQ6IJwKFCd5COSkR2TSgYxA4RCV0fzStMaVwPFSB"
      );
      const data = await response.json();
      const stockData = data.data[0];
      setStock(stockData);
      // console.log("1", stock);
    }
    loadStock();
  }, []);

  return (
    <>
      <hr />
      <h1>StockDetailPage</h1>
      <ul>
        <li>Name: {stock.name}</li>
        <li>Symbol: {stock.ticker}</li>
        <li>Currency: {stock.currency}</li>
        <li>Price: {stock.price}</li>
        <li>Day Change: {stock.day_change}</li>
        <li>Day High: {stock.day_high}</li>
        <li>Day Low: {stock.day_low}</li>
        <li>Volume: {stock.volume}</li>
        <li>Last Tarde Time: {stock.last_trade_time}</li>
      </ul>
      <button>Save</button>
      <button>back</button>
      <hr />
    </>
  );
}
