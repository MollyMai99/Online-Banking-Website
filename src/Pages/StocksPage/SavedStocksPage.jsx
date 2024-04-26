// import { useEffect } from "react";

export default function SavedStocksPage() {
  const fetchAirtable = async () => {
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
    const savedList = airtableResponse;
    console.log(savedList);
    // setFavouritesList(airtableResponse);
  };

  fetchAirtable();

  return (
    <>
      <p>SavedStocksPage</p>
      <ul>
        <li>
          AAPL
          <button>Unsave</button>
        </li>
      </ul>
    </>
  );
}
