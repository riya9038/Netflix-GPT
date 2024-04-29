import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((state) => state?.movies);
  return (
    <div className="bg-black w-screen">
      <div className="-mt-40 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
