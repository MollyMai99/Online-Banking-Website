import StockDetailPage from "./StockDetailPage";

export default function TopStocksPage() {
  return (
    <>
      <p>Top 10 Popular Stocks</p>
      <ul>
        <li>
          AAPL
          <button>Save</button>
          <StockDetailPage />
        </li>
        <li>
          NVDA
          <button>Save</button>
        </li>
        <li>
          TSLA
          <button>Save</button>
        </li>
      </ul>
    </>
  );
}
