import HomePage from "./HomePage/HomePage";
import CardPage from "./CardPage/CardPage";
import NewsPage from "./NewsPage/NewsPage";
import StocksPage from "./StocksPage/StocksPage";

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
      <StocksPage />
      <CardPage />
      <NewsPage />
    </>
  );
}

export default App;
