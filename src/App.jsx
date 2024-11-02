import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Search from "../public/search.svg";
import "./App.css";

// 72e0dce
const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=72e0dce";

const App = () => {
  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const movieData = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
    console.log(data)
    console.log(data.Search);
  };
  useEffect(() => {
    movieData("Doraemon");
    // Prevents form submission and page reload
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      movieData(search);
    }
  };
  return (
    <>
      <div className="header">
        <h1>MovieLand</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Search Your Movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <img
            src={Search}
            alt="This is my Search Image"
            width={25}
            onClick={() => movieData(search)}
          />
        </form>
      </div>
      <div className="app">
        {movies?.length > 0 ? (
          movies.map((mov) => <MovieCard key={mov.imdbID} movie={mov} />)
        ) : (
          <div className="empty">
            <h1>No movies found</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
