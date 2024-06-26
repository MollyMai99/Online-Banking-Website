// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import popularStocksList from "./popularStocksList";

export default function HandelLastNext({ symbol }) {
  // const [lastSymbol, setLastSymbol] = useState("AAPL");
  // const [nextSymbol, setNextSymbol] = useState("INTC");
  let lastSymbol = "AAPL";
  let nextSymbol = "INTC";

  // useEffect(() => {
  // async function handelLastNext(symbol) {
  function handelLastNext(symbol) {
    const foundStock = popularStocksList.find((item) => item.symbol === symbol);
    const stockRank = foundStock.rank;

    const foundLastStock = popularStocksList.find(
      (item) => item.rank === stockRank - 1
    );
    // const last = foundLastStock.symbol;
    // setLastSymbol(last);
    lastSymbol = foundLastStock.symbol;

    const foundNextStock = popularStocksList.find(
      (item) => item.rank === stockRank + 1
    );
    // const next = foundNextStock.symbol;
    // setNextSymbol(next);
    nextSymbol = foundNextStock.symbol;
    return lastSymbol, nextSymbol;
  }

  handelLastNext(symbol);
  // }, [symbol]);

  return (
    <>
      <button style={{ background: "white" }}>
        <Link to={`/stocks/${lastSymbol}`}>Last Stock: {lastSymbol}</Link>
      </button>
      <button style={{ background: "white" }}>
        <Link to={`/stocks/${nextSymbol}`}>Next Stock: {nextSymbol}</Link>
      </button>
    </>
  );
}
