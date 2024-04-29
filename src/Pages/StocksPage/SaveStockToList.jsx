export default function SaveStockToList({ symbol }) {
  async function addSaveList(symbol) {
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
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addSymbolObj),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Failed to add symbol to save list");
      }
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.error("Error adding symbol to save list:", error);
    }
  }

  return <button onClick={() => addSaveList(symbol)}>Click to Save</button>;
}
