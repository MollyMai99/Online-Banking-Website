import { useEffect, useState } from "react";
import SavedStocksPage from "./StocksPage/SavedStocksPage";
import TopStocksPage from "./StocksPage/TopStocksPage";

export default function StocksPage() {
  const [stocks, setStock] = useState([]);

  useEffect(() => {
    async function loadStocks() {
      const response = await fetch(
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"

        "https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=JgOAADvWjnurMD8QLuMAkLF5XlL7pD8jQUMCqXlC"
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=SQ6IJwKFCd5COSkR2TSgYxA4RCV0fzStMaVwPFSB"
      );
      const data = await response.json();
      const stocksData = data.data;
      setStock(stocksData);
      console.log("1", stocks);
    }
    loadStocks();
  }, []);

  return (
    <>
      <h1>StocksPage</h1>
      <p>Navbar</p>
      <TopStocksPage stocks={stocks} />
      <SavedStocksPage />
    </>
  );
}
