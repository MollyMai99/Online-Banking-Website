export default function ConvertToSGD({ priceUSD, priceSGD, setPriceSGD }) {
  // const [priceSGD, setPriceSGD] = useState(null);

  const convertToSGD = async () => {
    const response = await fetch(
      "https://openexchangerates.org/api/latest.json?app_id=0927c67d03d44781999f1ffb644c2947"
    );
    const data = await response.json();
    const rateSGD = data.rates.SGD;

    const convertedPrice = priceUSD * rateSGD;
    setPriceSGD(convertedPrice);
    // setPriceUSD(priceUSD);
  };

  return (
    <>
      <button onClick={convertToSGD}>Convert Price to SGD</button>
      {priceSGD && <p>Price in SGD: {priceSGD.toFixed(2)}</p>}
    </>
  );
}
