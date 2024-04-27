import React  from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies()

  return (
    <>
      <Header />
      {/* <div className="absolute h-full w-full">
        <img className="h-full w-full" src={POSTER} alt="poster" />
      </div> */}
      <MainContainer/>
      <SecondaryContainer/>
    </>
  );
};

export default Browse;
