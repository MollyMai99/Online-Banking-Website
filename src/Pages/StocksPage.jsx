import { useEffect, useState } from "react";
// import SavedStocksPage from "./StocksPage/SavedStocksPage";
import TopStocksPage from "./StocksPage/TopStocksPage";

export default function StocksPage() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    async function loadStocks() {
      const response = await fetch(
        // "https://api.marketdata.app/v1/stocks/quotes/AAPL"
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"

        "https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=JgOAADvWjnurMD8QLuMAkLF5XlL7pD8jQUMCqXlC"
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=SQ6IJwKFCd5COSkR2TSgYxA4RCV0fzStMaVwPFSB"
      );

      const data = await response.json();
      const stocksData = data.data;
      setStocks(stocksData);
      // console.log("1", stocks);
    }
    loadStocks();
  }, []);

  return (
    <>
      <h1>StocksPage</h1>
      <TopStocksPage stocks={stocks} />
      {/* <SavedStocksPage /> */}
    </>
  );
}
