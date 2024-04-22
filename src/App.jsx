import { useEffect } from "react";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    async function logMovies() {
      const response = await fetch(
        // "https://api.marketdata.app/v1/stocks/quotes/AAPL"
        "https://api.marketdata.app/v1/stocks/quotes/AAPL/?dateformat=timestamp"
        // "https://api.marketdata.app/v1/stocks/news/AAPL/?dateformat=timestamp&limit=2"
      );
      const movies = await response.json();
      console.log(movies);
    }
    logMovies();
  }, []);

  return <>hi</>;
}

export default App;
