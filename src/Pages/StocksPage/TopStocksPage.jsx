import { Link } from "react-router-dom";
import popularStocksList from "./popularStocksList";
import { useState } from "react";

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
