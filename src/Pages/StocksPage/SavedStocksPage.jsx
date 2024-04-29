import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SavedStocksPage() {
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    async function loadSavedList() {
      const url = "https://api.airtable.com/v0/appu6JDxJ0kPqISCM/Table%201";
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
      const savedList = airtableResponse.records;
      // console.log(airtableResponse);
      setSavedList(savedList);
      // console.log("savedList", savedList);
    }
    loadSavedList();
  }, []);

  async function deleteStock(id) {
    const url = `https://api.airtable.com/v0/appu6JDxJ0kPqISCM/Table%201/${id}`;
    const key =
      "patc1K5wmYJTJIkjP.febf10fd5d52335a34877cd8e8eb742c0d247d1e0e9b86fc70259d7a20c4e076";

    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, options);
    await response.json();

    deleteStockState(id);
  }

  function deleteStockState(id) {
    console.log("deletestate", id);
    const index = savedList.findIndex((stock) => stock.id === id);
    setSavedList([...savedList.slice(0, index), ...savedList.slice(index + 1)]);
  }

  return (
    <>
      <p>SavedStocksPage</p>
      {savedList.map((savedStock) => (
        <ul key={savedStock.fields.Symbol}>
          <li>
            <Link to={`/stocks/${savedStock.fields.Symbol}`}>
              {savedStock.fields.Symbol}
            </Link>
            <button onClick={() => deleteStock(savedStock.id)}>Unsave</button>
          </li>
        </ul>
      ))}
    </>
  );
}
