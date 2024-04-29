import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="p-6">
      <h2 className="text-xl mb-4 text-white">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-3">
          {movies?.map((movie) => (
            <MovieCard posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
