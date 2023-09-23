import React from "react";
import Header from "./Header";
import { POSTER } from "./utils/constants";

const Browse = () => {
  return (
    <>
      <Header />
      <div className="absolute h-full w-full">
        <img className="h-full w-full" src={POSTER} alt="poster" />
      </div>
    </>
  );
};

export default Browse;
