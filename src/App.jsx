// import { useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import CardPage from "./CardPage/CardPage";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   async function logMovies() {
  //     const response = await fetch(
  //       // "https://api.marketdata.app/v1/stocks/quotes/AAPL"
  //       // "https://api.marketdata.app/v1/stocks/quotes/AAPL/?dateformat=timestamp"
  //       "https://api.marketdata.app/v1/stocks/news/AAPL/?dateformat=timestamp&limit=2"
  //     );
  //     const movies = await response.json();
  //     console.log(movies);
  //     return movies;
  //   }
  //   logMovies();
  // }, []);

  return (
    <>
      <h1>BBS</h1>
      <HomePage />
      <CardPage />
      <p>CardPage</p>
      <p>NewsPage</p>
      <p>StocksPage</p>
    </>
  );
}

export default App;
