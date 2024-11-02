import React from "react";
import "./MovieCard.css"
import MovieIMG from "../public/err-img.jpg"


const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
          <section className="image">
            <img src={movie.Poster !== "N/A" ? movie.Poster : MovieIMG } alt={movie.title} />
            {/* <h2 className="year">{movie.Year}</h2> */}
          </section>
          <section className="info" key={movie.imdbID}>
            <h3 className="type">{movie.Type}</h3>
            <h2>{movie.Title}</h2>
          </section>
        </div>
    )
}

export default MovieCard