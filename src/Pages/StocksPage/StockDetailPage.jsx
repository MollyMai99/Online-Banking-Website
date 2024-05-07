import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import StockDetailTable from "./StockDetailTable";
import SaveStockToList from "./SaveStockToList";
import HandelLastNext from "./HandelLastNext";
// import ConvertToSGD from "./ConvertToSGD";

export default function StockDetailPage() {
  const [stock, setStock] = useState([]);
  const [priceSGD, setPriceSGD] = useState();
  // const [showSGD, setShowSGD] = useState(false);

  const { symbol } = useParams();

  useEffect(() => {
    async function loadStock() {
      const response = await fetch(
        `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=jpqEm77zS2gsDoy1tifSsrgMvvpw3XS2zl6HHf2V`
        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=JgOAADvWjnurMD8QLuMAkLF5XlL7pD8jQUMCqXlC`
        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=SQ6IJwKFCd5COSkR2TSgYxA4RCV0fzStMaVwPFSB`
        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=j6Hi7FQNMB8woaX3JlX1qoUpXAH4lb5cm3zoRYd7`
        // `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=HSmh0vNFwQe7kQyxHJwJu3HLZvlOvJ1it02wnLC7`
      );

      const data = await response.json();
      const stockData = data.data[0];
      setStock(stockData);
    }

    loadStock();
    setPriceSGD(null);
  }, [symbol]);

  const convertToSGD = async () => {
    const response = await fetch(
      "https://openexchangerates.org/api/latest.json?app_id=0927c67d03d44781999f1ffb644c2947"
    );
    const data = await response.json();
    const rateSGD = data.rates.SGD;
    const convertedPrice = stock.price * rateSGD;
    setPriceSGD(convertedPrice);
  };

  return (
    <>
      <h2>Stock Detail</h2>
      <StockDetailTable stock={stock} />
      <br />
      <SaveStockToList symbol={stock.ticker} />
      <button onClick={convertToSGD}>Convert Price to SGD</button>
      {priceSGD && <p>Price in SGD: {priceSGD.toFixed(2)}</p>}
      {/* <ConvertToSGD
        // priceUSD={stock.price}
        convertToSGD={convertToSGD}
        priceSGD={priceSGD}
        setPriceSGD={setPriceSGD}
      /> */}
      <br />
      <HandelLastNext symbol={symbol} />
      <br />
      <button style={{ background: "white" }}>
        <Link to={`/stocks`}>Back</Link>
      </button>
    </>
  );
}
