import { useEffect, useState } from "react";

export default function WalletPage() {
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    async function loadWallet() {
      const url =
        "https://api.airtable.com/v0/appu6JDxJ0kPqISCM/wallet?maxRecords=3&view=Grid%20view";
      const key =
        "patc1K5wmYJTJIkjP.febf10fd5d52335a34877cd8e8eb742c0d247d1e0e9b86fc70259d7a20c4e076";

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${key}`,
        },
      };

      const response = await fetch(url, options);
      const airtableResponse = await response.json();
      const balance = airtableResponse.records[0].fields.balance;
      console.log(balance);
      setBalance(balance);
      // console.log("savedList", savedList);
    }
    loadWallet();
  }, []);

  function handleDeposit() {
    console.log("deposit");
  }

  return (
    <>
      <h1>My Wallet</h1>
      <p>Balance: {balance}</p>
      <hr />
      {/* <p>Deposit Funds</p> */}
      <button onClick={handleDeposit(500)}>Deposit 500 SGD</button>
    </>
  );
}
