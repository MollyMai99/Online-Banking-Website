export default function StockDetailTable({ stock }) {
  // export default function StockDetailTable({ stock, stockPrice, stockCurrency }) {

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name </th>
            <td>{stock.name}</td>
          </tr>
          <tr>
            <th>Symbol</th>
            <td>{stock.ticker}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>{stock.price}</td>
          </tr>
          <tr>
            <th>Currency</th>
            <td>{stock.currency}</td>
          </tr>
          <tr>
            <th>Day High</th>
            <td>{stock.day_high}</td>
          </tr>
          <tr>
            <th>Day Low</th>
            <td>{stock.day_low}</td>
          </tr>
          <tr>
            <th>Day Change</th>
            <td>{stock.day_change}</td>
          </tr>
          <tr>
            <th>Volume</th>
            <td>{stock.volume}</td>
          </tr>
          <tr>
            <th>Last Trade Time</th>
            <td>{stock.last_trade_time}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
