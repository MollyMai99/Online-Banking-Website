import { useEffect } from "react";
import StockDetailPage from "./StockDetailPage";

export default function TopStocksPage() {
  useEffect(() => {
    async function logStocks() {
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
      const stocks = await response.json();
      console.log(stocks);
      return stocks;
    }
    logStocks();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Currency</th>
            <th>Price</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AAPL</td>
            <td>USD</td>
            <td>123</td>
            <td>
              <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
      <StockDetailPage />
    </>
  );
}
