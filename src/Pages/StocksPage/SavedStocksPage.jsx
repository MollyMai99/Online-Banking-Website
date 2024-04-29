import { useEffect, useState } from "react";
import UnsaveService from "./UnsaveService";

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
      setSavedList(savedList);
    }
    loadSavedList();
  }, []);

  function unsaveStockState(id) {
    console.log("deletestate", id);
    const index = savedList.findIndex((stock) => stock.id === id);
    setSavedList([...savedList.slice(0, index), ...savedList.slice(index + 1)]);
  }

  return (
    <>
      <p>Stocks you saved:</p>
      <UnsaveService
        savedList={savedList}
        unsaveStockState={unsaveStockState}
      />
    </>
  );
}
