import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import StocksPage from "./Pages/StocksPage";
import StockDetailPage from "./Pages/StocksPage/StockDetailPage";
import Navbar from "./Navbar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/stocks" element={<StocksPage />} />
        <Route path="/stocks/AAPL" element={<StockDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
