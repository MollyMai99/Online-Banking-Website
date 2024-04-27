import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function StockDetailPage() {
  const [stock, setStock] = useState([]);
  const { symbol } = useParams();

  useEffect(() => {
    async function loadStock() {
      const response = await fetch();
      // "https://api.marketdata.app/v1/stocks/quotes/AAPL"
      // "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V"

      // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V`
      // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=JgOAADvWjnurMD8QLuMAkLF5XlL7pD8jQUMCqXlC`
      // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=SQ6IJwKFCd5COSkR2TSgYxA4RCV0fzStMaVwPFSB`
      // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=j6Hi7FQNMB8woaX3JlX1qoUpXAH4lb5cm3zoRYd7`
      // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=HSmh0vNFwQe7kQyxHJwJu3HLZvlOvJ1it02wnLC7`

      const data = await response.json();
      const stockData = data.data[0];
      setStock(stockData);
    }
    loadStock();
  }, [symbol]);

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

  async function lastOne() {
    console.log("click last one");
  }

  async function nextOne() {
    console.log("click next one");
  }

  return (
    <>
      <h2>Stock Detail</h2>
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
      <br />
      <button onClick={() => lastOne()}>Last One</button>
      <button onClick={() => nextOne()}>Next One</button>
      <br />
      <button onClick={() => addSaveList(stock.ticker)}>Click to Save</button>
      <br />
      <button>
        <Link to={`/stocks`}>Back</Link>
      </button>
    </>
  );
}

/* <hr />
      <h1>StockDetailPage</h1>
      <ul>
        <li>Name: {stock.name}</li>
        <li>Symbol: {stock.ticker}</li>
        <li>Currency: {stock.currency}</li>
        <li>Price: {stock.price}</li>
        <li>Day Change: {stock.day_change}</li>
        <li>Day High: {stock.day_high}</li>
        <li>Day Low: {stock.day_low}</li>
        <li>Volume: {stock.volume}</li>
        <li>Last Trade Time: {stock.last_trade_time}</li>
      </ul> */
