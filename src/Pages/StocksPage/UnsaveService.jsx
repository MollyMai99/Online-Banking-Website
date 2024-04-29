import { Link } from "react-router-dom";

export default function UnsaveService({ savedList, unsaveStockState }) {
  async function unsaveStock(id) {
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

    unsaveStockState(id);
  }

  return (
    <>
      {savedList.map((savedStock) => (
        <ul key={savedStock.fields.Symbol}>
          <li>
            <Link to={`/stocks/${savedStock.fields.Symbol}`}>
              {savedStock.fields.Symbol}
            </Link>
            <button onClick={() => unsaveStock(savedStock.id)}>Unsave</button>
          </li>
        </ul>
      ))}
    </>
  );
}
