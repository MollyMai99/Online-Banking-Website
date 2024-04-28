import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import popularStocksList from "./popularStocksList";
import StockDetailTable from "./StockDetailTable";
// import ConvertToSGD from "./ConvertToSGD";

export default function StockDetailPage() {
  const [stock, setStock] = useState([]);
  const [lastSymbol, setLastSymbol] = useState("AAPL");
  const [nextSymbol, setNextSymbol] = useState("INTC");
  const [priceSGD, setPriceSGD] = useState();
  // const [stockPrice, setStockPrice] = useState();
  // const [stockCurrency, setStockCurrency] = useState();

  const { symbol } = useParams();

  useEffect(() => {
    async function loadStock() {
      const response = await fetch(
        // "https://api.marketdata.app/v1/stocks/quotes/AAPL"
        // "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"

        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V`
        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=JgOAADvWjnurMD8QLuMAkLF5XlL7pD8jQUMCqXlC`
        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=SQ6IJwKFCd5COSkR2TSgYxA4RCV0fzStMaVwPFSB`
        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=j6Hi7FQNMB8woaX3JlX1qoUpXAH4lb5cm3zoRYd7`
        `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=HSmh0vNFwQe7kQyxHJwJu3HLZvlOvJ1it02wnLC7`
      );

      const data = await response.json();
      const stockData = data.data[0];
      // setStockCurrency("USD");
      setStock(stockData);
      // setPriceSGD();
      // setStockPrice(stockData.price);
    }

    async function handelLastNext(symbol) {
      const foundStock = popularStocksList.find(
        (item) => item.symbol === symbol
      );
      const stockRank = foundStock.rank;
      // console.log("rank", stockRank);

      const foundLastStock = popularStocksList.find(
        (item) => item.rank === stockRank - 1
      );
      const last = foundLastStock.symbol;
      setLastSymbol(last);
      // console.log("lastsymbol", lastSymbol);

      const foundNextStock = popularStocksList.find(
        (item) => item.rank === stockRank + 1
      );
      const next = foundNextStock.symbol;
      setNextSymbol(next);
      // console.log("nextsymbol", nextSymbol);

      // setStockRank(stockRank);
      // console.log(stockRank);
    }

    loadStock();
    handelLastNext(symbol);
    setPriceSGD();
  }, [symbol, lastSymbol, nextSymbol]);

  async function addSaveList(symbol) {
    // console.log("addsave", symbol);

    const url = "https://api.airtable.com/v0/appu6JDxJ0kPqISCM/Table%201";
    const key =
      "patc1K5wmYJTJIkjP.febf10fd5d52335a34877cd8e8eb742c0d247d1e0e9b86fc70259d7a20c4e076";
    const addSymbolObj = {
      records: [
        {
          fields: {
            Symbol: symbol,
          },
        },
      ],
    };

    const options = {
      method: "POST", // Change method to POST
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify(addSymbolObj),
    };
    // console.log(addSymbolObj); // Add request body if needed

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Failed to add symbol to save list");
      }
      const data = await response.json();
      console.log("data", data); // Handle response data as needed
    } catch (error) {
      console.error("Error adding symbol to save list:", error);
    }
  }

  async function convertToSGD(priceUSD) {
    const rateSGD = 1.36;
    const convertedPrice = priceUSD * rateSGD;
    setPriceSGD(convertedPrice);
  }

  // async function convertSGD(priceUSD) {
  //   const rateSGD = 1.36;
  //   const priceSGD = priceUSD * rateSGD;
  //   setStockPrice(priceSGD);
  //   setStockCurrency("SGD");
  // }

  return (
    <>
      <h2>Stock Detail</h2>
      <StockDetailTable
        stock={stock}
        // stockPrice={stockPrice}
        // stockCurrency={stockCurrency}
      />
      {/* <ConvertToSGD priceUSD={stock.price} priceSGD={priceSGD} /> */}
      {/* <button onClick={() => convertSGD(stock.price)}>
        Convert Price to SGD
      </button> */}
      <button onClick={() => convertToSGD(stock.price)}>
        Convert Price to SGD
      </button>
      {priceSGD && <p>Price in SGD: {priceSGD.toFixed(2)}</p>}
      <br />
      <button onClick={() => addSaveList(stock.ticker)}>Click to Save</button>
      <hr />
      <button>
        <Link to={`/stocks/${lastSymbol}`}>Last Stock: {lastSymbol}</Link>
      </button>
      <button>
        <Link to={`/stocks/${nextSymbol}`}>Next Stock: {nextSymbol}</Link>
      </button>
      <br />
      <button>
        <Link to={`/stocks`}>Back</Link>
      </button>
    </>
  );
}

/* <table>
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
            <td>{stockPrice}</td>
          </tr>
          <tr>
            <th>Currency</th>
            <td>{stockCurrency}</td>
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
      </table> */
