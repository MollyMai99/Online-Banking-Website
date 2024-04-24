import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import StocksPage from "./Pages/StocksPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>BBS</h1>
      {/* <HomePage />
      <StocksPage /> */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/stocks/AAPL" element={<StocksPage />} />
      </Routes>
    </>
  );
}

export default App;
