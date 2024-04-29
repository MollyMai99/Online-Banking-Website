import { useEffect, useState } from "react";

export default function WalletPage() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function loadWallet() {
      const url = "https://api.airtable.com/v0/appu6JDxJ0kPqISCM/wallet";
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
      setBalance(parseFloat(balance));
    }
    loadWallet();
  }, []);

  async function handleDeposit() {
    const newBalance = balance + 500;
    setBalance(newBalance);

    const url = `https://api.airtable.com/v0/appu6JDxJ0kPqISCM/wallet`;
    const key =
      "patc1K5wmYJTJIkjP.febf10fd5d52335a34877cd8e8eb742c0d247d1e0e9b86fc70259d7a20c4e076";
    const addSymbolObj = {
      records: [
        {
          id: "rec258SyyTyYDcTUW",
          fields: {
            balance: String(newBalance),
          },
        },
      ],
    };

    const options = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addSymbolObj),
    };
    const response = await fetch(url, options);
    await response.json();
  }

  return (
    <>
      <h1>My Wallet</h1>
      <h3>Current Balance :{balance.toFixed(2)} SGD </h3>
      <hr />
      <button onClick={() => handleDeposit()}>Deposit 500 SGD</button>
    </>
  );
}
