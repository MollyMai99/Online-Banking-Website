export default function StockDetailTable({ stock }) {
  const formatLastTradeTime = (dateTimeString) => {
    if (dateTimeString) {
      return dateTimeString
        .replace("T", " ")
        .substring(0, dateTimeString.length - 7);
    } else {
      return "";
    }
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Symbol</th>
            <td>{stock.ticker}</td>
          </tr>
          <tr>
            <th>Name </th>
            <td>{stock.name}</td>
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
            <td>{Number(stock.volume).toLocaleString()}</td>
          </tr>
          <tr>
            <th>Last Trade Time</th>
            <td>{formatLastTradeTime(stock.last_trade_time)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
