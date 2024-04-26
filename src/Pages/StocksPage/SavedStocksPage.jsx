import { useEffect } from "react";
import { useState } from "react";

export default function SavedStocksPage() {
  // const fetchAirtable = async () => {
  //   const [savedList, setSavedList] = useState([]);

  //   const url = "https://api.airtable.com/v0/appu6JDxJ0kPqISCM/Table%201";
  //   const key =
  //     "patc1K5wmYJTJIkjP.febf10fd5d52335a34877cd8e8eb742c0d247d1e0e9b86fc70259d7a20c4e076";

  //   const options = {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${key}`,
  //     },
  //   };

  //   const response = await fetch(url, options);
  //   const airtableResponse = await response.json();
  //   // const savedList = airtableResponse;
  //   console.log(airtableResponse);
  //   // setSavedList(airtableResponse);
  // };

  // fetchAirtable();

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
      console.log(savedList);
    }
    loadSavedList();
  }, []);

  return (
    <>
      <p>SavedStocksPage</p>

      {savedList.map((savedStock) => (
        <ul key={savedStock.fields.Symbol}>
          <li>
            {savedStock.fields.Symbol}
            <button>Unsave</button>
          </li>
        </ul>
      ))}
    </>
  );
}
