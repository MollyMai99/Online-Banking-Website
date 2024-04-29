import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li style={{ display: "inline-block", margin: "20px" }}>
        <Link to={`/`}>BBS</Link>
      </li>
      {/* <li style={{ display: "inline-block", margin: "40px" }}>
          <Link to={`/home`}>Introduction</Link>
        </li> */}
      <li style={{ display: "inline-block", margin: "20px" }}>
        <Link to={`/stocks`}>Popular Stocks</Link>
      </li>
      <li style={{ display: "inline-block", margin: "20px" }}>
        <Link to={`/savedstocks`}>Saved Stocks</Link>
      </li>
      <li style={{ display: "inline-block", margin: "20px" }}>
        <Link to={`/wallet`}>My Wallet</Link>
      </li>
    </ul>
  );
}
