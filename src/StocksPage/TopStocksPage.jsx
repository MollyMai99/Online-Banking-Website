import StockDetailPage from "./StockDetailPage";

export default function TopStocksPage({ stocks }) {
  //   console.log("top", stocks);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Currency</th>
            <th>Price</th>
            <th>Last Tarde Time</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.ticker}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.currency}</td>
              <td>{stock.price}</td>
              <td>{stock.last_trade_time}</td>
              <td>
                <button>Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <StockDetailPage />
    </>
  );
}
