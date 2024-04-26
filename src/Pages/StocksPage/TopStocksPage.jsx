import { Link } from "react-router-dom";
import popularStocksList from "../../popularStocksList";
import { useState } from "react";
// import StockDetailPage from "./StockDetailPage";

export default function TopStocksPage() {
  //   console.log("top", stocks);
  // console.log("1", popularStocksList[0].symbol);
  const [symbol, setSymbol] = useState("");
  // setSymbol("AAPL");

  async function getSymbol(symbol) {
    setSymbol(symbol);
    console.log(symbol);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {popularStocksList.map((popularStock) => (
            <tr key={popularStock.symbol}>
              <td>
                <Link
                  to={`/stocks/${popularStock.symbol}`}
                  onClick={() => getSymbol(popularStock.symbol)}
                >
                  {popularStock.symbol}
                </Link>
              </td>
              <td>{popularStock.company_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// <table>
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Symbol</th>
//       <th>Currency</th>
//       <th>Price</th>
//       <th>Last Trade Time</th>
//       <th>Save</th>
//     </tr>
//   </thead>
//   <tbody>
//     {stocks.map((stock) => (
//       <tr key={stock.ticker}>
//         <td>{stock.name}</td>
//         <td>
//           <Link to={`/stocks/AAPL`}>{stock.ticker}</Link>
//         </td>
//         <td>{stock.currency}</td>
//         <td>{stock.price}</td>
//         <td>{stock.last_trade_time}</td>
//         <td>❤️</td>
//       </tr>
//     ))}
//   </tbody>
// </table>
// {/* <StockDetailPage /> */}

// {/* <p>{popularStocksList[0].symbol}</p> */}
