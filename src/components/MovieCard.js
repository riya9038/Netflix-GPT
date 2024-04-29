import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

function MovieCard({ posterPath }) {
  return (
    <div className="w-48">
      <img alt="nowPlaying" src={IMG_CDN_URL + posterPath} />
    </div>
  );
}

export default MovieCard;
