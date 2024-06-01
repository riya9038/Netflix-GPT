import React from "react";
import GptSearchBar from "./GptSearchBar";
import { Box } from "@mui/material";
import { POSTER } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { useSelector } from "react-redux";
import EmptyScreen from "./EmptyScreen";

function GptSearch() {
  const { movieResults } = useSelector((state) => state.gpt);
  return (
    <div>
      <Box className="absolute h-full w-full -z-10">
        <img className="h-full w-full" src={POSTER} alt="poster" />
      </Box>
      <GptSearchBar />
      {movieResults ? <GptMovieSuggestions /> : <EmptyScreen />}
    </div>
  );
}

export default GptSearch;
