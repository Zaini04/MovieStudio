import React, { useContext } from "react";
import "../CSS/Favorites.css";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

const Favorite = () => {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h2>Your Fovorites</h2>
      {favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Favorites Yet </h2>
          <p>Start adding movies and they will display here</p>
        </div>
      )}
    </div>
  );
};

export default Favorite;
