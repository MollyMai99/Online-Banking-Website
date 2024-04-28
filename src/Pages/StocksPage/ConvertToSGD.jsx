import { useState } from "react";

export default function ConvertToSGD({ priceUSD }) {
  const [priceSGD, setPriceSGD] = useState();

  const convertToSGD = () => {
    const rateSGD = 1.36;
    const convertedPrice = priceUSD * rateSGD;
    setPriceSGD(convertedPrice);
  };

  return (
    <div>
      <button onClick={convertToSGD}>Convert Price to SGD</button>
      {priceSGD && <p>Price in SGD: {priceSGD.toFixed(2)}</p>}
    </div>
  );
}
