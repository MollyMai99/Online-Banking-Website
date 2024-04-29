export default function ConvertToSGD({ priceUSD, priceSGD, setPriceSGD }) {
  const convertToSGD = async () => {
    const response = await fetch(
      "https://openexchangerates.org/api/latest.json?app_id=0927c67d03d44781999f1ffb644c2947"
    );
    const data = await response.json();
    const rateSGD = data.rates.SGD;

    const convertedPrice = priceUSD * rateSGD;
    setPriceSGD(convertedPrice);
  };

  return (
    <>
      <button onClick={convertToSGD}>Convert Price to SGD</button>
      {priceSGD && <p>Price in SGD: {priceSGD.toFixed(2)}</p>}
    </>
  );
}
