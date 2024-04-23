import { useEffect } from "react";

export default function StocksPage() {
  useEffect(() => {
    async function logMovies() {
      const response = await fetch(
        // "https://api.marketdata.app/v1/stocks/quotes/AAPL"
        "https://api.marketdata.app/v1/stocks/quotes/AAPL/?dateformat=timestamp"
        // "https://api.marketdata.app/v1/stocks/news/AAPL/?dateformat=timestamp&limit=1"
        // "https://api.aletheiaapi.com/Crypto?symbol=DOGE&key=CF7704FC00CD4518B2316C46C9DD77B7"
        // "https://api.aletheiaapi.com/Crypto?symbol=BTC&key=CF7704FC00CD4518B2316C46C9DD77B7"
        // "https://api.aletheiaapi.com/Crypto?symbol=XRP&key=CF7704FC00CD4518B2316C46C9DD77B7"
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"
      );
      const movies = await response.json();
      console.log(movies);
      return movies;
    }
    logMovies();
  }, []);

  return (
    <>
      <h1>Latest Stocks Price</h1>
      <p>Navbar</p>
      <ul>
        <li>AAPL</li>
        <li>Price</li>
        <li>Time</li>
      </ul>
    </>
  );
}
