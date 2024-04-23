import { useEffect } from "react";

export default function NewsPage() {
  useEffect(() => {
    async function logMovies() {
      const response = await fetch(
        // "https://api.marketdata.app/v1/stocks/quotes/AAPL"
        // "https://api.marketdata.app/v1/stocks/quotes/AAPL/?dateformat=timestamp"
        "https://api.marketdata.app/v1/stocks/news/AAPL/?dateformat=timestamp&limit=1"
      );
      const movies = await response.json();
      console.log(movies);
      return movies;
    }
    logMovies();
  }, []);

  return (
    <>
      <h1>Latest News</h1>
      <p>Navbar</p>
      <div>News 1</div>
      <div>News 2</div>
    </>
  );
}
