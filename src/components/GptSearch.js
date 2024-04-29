import React from "react";
import GptSearchBar from "./GptSearchBar";
import { Box } from "@mui/material";
import { POSTER } from "../utils/constants";

function GptSearch() {
  return (
    <div>
      <Box className="absolute h-full w-full -z-10">
        <img className="h-full w-full" src={POSTER} alt="poster" />
      </Box>
      <GptSearchBar />
    </div>
  );
}

export default GptSearch;
