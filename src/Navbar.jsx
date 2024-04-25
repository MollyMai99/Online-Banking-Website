import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <h1>
        <Link to={`/home`}>Stocks Info</Link>
      </h1>
      <ul>
        <li>
          <Link to={`/home`}>Company Background</Link>
        </li>
        <li>
          <Link to={`/stocks`}>Top 3 Popular Stocks</Link>
        </li>
        <li>
          <Link to={`/savedstocks`}>Saved Stocks</Link>
        </li>
      </ul>
    </>
  );
}
