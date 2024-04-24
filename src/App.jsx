import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import StocksPage from "./Pages/StocksPage";
import StockDetailPage from "./Pages/StocksPage/StockDetailPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>BBS</h1>
      <p>Navbar</p>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/stocks" element={<StocksPage />} />
        <Route path="/stocks/AAPL" element={<StockDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
