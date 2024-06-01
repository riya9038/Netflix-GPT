import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestions() {
  const { movieNames, movieResults } = useSelector((state) => state.gpt);

  return (
    <div className="bg-black text-white p-6 opacity-90 m-4">
      {movieNames?.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
}

export default GptMovieSuggestions;
