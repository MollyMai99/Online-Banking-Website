import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import popularStocksList from "./popularStocksList";
import StockDetailTable from "./StockDetailTable";
import ConvertToSGD from "./ConvertToSGD";
import SaveStockToList from "./SaveStockToList";
import HandelLastNext from "./HandelLastNext";

export default function StockDetailPage() {
  const [stock, setStock] = useState([]);
  // const [lastSymbol, setLastSymbol] = useState("AAPL");
  // const [nextSymbol, setNextSymbol] = useState("INTC");
  const [priceSGD, setPriceSGD] = useState();
  // const [priceUSD, setPriceUSD] = useState();

  const { symbol } = useParams();

  useEffect(() => {
    async function loadStock() {
      const response = await fetch(
        // "https://api.marketdata.app/v1/stocks/quotes/AAPL"
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"

        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V`
        `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=JgOAADvWjnurMD8QLuMAkLF5XlL7pD8jQUMCqXlC`
        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=SQ6IJwKFCd5COSkR2TSgYxA4RCV0fzStMaVwPFSB`
        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=j6Hi7FQNMB8woaX3JlX1qoUpXAH4lb5cm3zoRYd7`
        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=HSmh0vNFwQe7kQyxHJwJu3HLZvlOvJ1it02wnLC7`
      );

      const data = await response.json();
      const stockData = data.data[0];
      setStock(stockData);
    }

    // async function handelLastNext(symbol) {
    //   const foundStock = popularStocksList.find(
    //     (item) => item.symbol === symbol
    //   );
    //   const stockRank = foundStock.rank;
    //   // console.log("rank", stockRank);

    //   const foundLastStock = popularStocksList.find(
    //     (item) => item.rank === stockRank - 1
    //   );
    //   const last = foundLastStock.symbol;
    //   setLastSymbol(last);
    //   // console.log("lastsymbol", lastSymbol);

    //   const foundNextStock = popularStocksList.find(
    //     (item) => item.rank === stockRank + 1
    //   );
    //   const next = foundNextStock.symbol;
    //   setNextSymbol(next);
    //   // console.log("nextsymbol", nextSymbol);

    //   // setStockRank(stockRank);
    //   // console.log(stockRank);
    // }

    loadStock();
    // handelLastNext(symbol);
    setPriceSGD();
  }, [symbol]);
  // }, [symbol, lastSymbol, nextSymbol]);

  // async function addSaveList(symbol) {
  //   // console.log("addsave", symbol);

  //   const url = "https://api.airtable.com/v0/appu6JDxJ0kPqISCM/Table%201";
  //   const key =
  //     "patc1K5wmYJTJIkjP.febf10fd5d52335a34877cd8e8eb742c0d247d1e0e9b86fc70259d7a20c4e076";
  //   const addSymbolObj = {
  //     records: [
  //       {
  //         fields: {
  //           Symbol: symbol,
  //         },
  //       },
  //     ],
  //   };

  //   const options = {
  //     method: "POST", // Change method to POST
  //     headers: {
  //       Authorization: `Bearer ${key}`,
  //       "Content-Type": "application/json", // Specify the content type
  //     },
  //     body: JSON.stringify(addSymbolObj),
  //   };
  //   // console.log(addSymbolObj); // Add request body if needed

  //   try {
  //     const response = await fetch(url, options);
  //     if (!response.ok) {
  //       throw new Error("Failed to add symbol to save list");
  //     }
  //     const data = await response.json();
  //     console.log("data", data); // Handle response data as needed
  //   } catch (error) {
  //     console.error("Error adding symbol to save list:", error);
  //   }
  // }

  // async function convertToSGD(priceUSD) {
  //   const response = await fetch(
  //     "https://openexchangerates.org/api/latest.json?app_id=0927c67d03d44781999f1ffb644c2947"
  //   );

  //   const data = await response.json();
  //   const rateSGD = data.rates.SGD;
  //   console.log(rateSGD);

  //   // const rateSGD = 1.36;
  //   const convertedPrice = priceUSD * rateSGD;
  //   setPriceSGD(convertedPrice);
  // }

  // const updatePriceUSD = (newPriceUSD) => {
  //   setPriceUSD(newPriceUSD);
  // };

  return (
    <>
      <h2>Stock Detail</h2>
      <StockDetailTable stock={stock} />
      <ConvertToSGD
        priceUSD={stock.price}
        priceSGD={priceSGD}
        setPriceSGD={setPriceSGD}
      />
      <SaveStockToList symbol={stock.ticker} />
      {/* <button onClick={() => convertToSGD(stock.price)}>
        Convert Price to SGD
      </button>
      {priceSGD && <p>Price in SGD: {priceSGD.toFixed(2)}</p>} */}
      {/* <br />
      <button onClick={() => addSaveList(stock.ticker)}>Click to Save</button> */}
      <HandelLastNext
        symbol={symbol}
        // lastSymbol={lastSymbol}
        // setLastSymbol={setLastSymbol}
        // nextSymbol={nextSymbol}
        // setNextSymbol={setNextSymbol}
      />

      {/* <button>
        <Link to={`/stocks/${lastSymbol}`}>Last Stock: {lastSymbol}</Link>
      </button>
      <button>
        <Link to={`/stocks/${nextSymbol}`}>Next Stock: {nextSymbol}</Link>
      </button> */}
      <br />
      <button>
        <Link to={`/stocks`}>Back</Link>
      </button>
    </>
  );
}
