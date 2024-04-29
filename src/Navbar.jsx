import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <h1>
        <Link to={`/home`}>BBS</Link>
      </h1>
      <ul>
        <li>
          <Link to={`/home`}>Introduction</Link>
        </li>
        <li>
          <Link to={`/stocks`}>Popular Stocks</Link>
        </li>
        <li>
          <Link to={`/savedstocks`}>Saved Stocks</Link>
        </li>
        <li>
          <Link to={`/wallet`}>My Wallet</Link>
        </li>
      </ul>
      <hr />
    </>
  );
}
