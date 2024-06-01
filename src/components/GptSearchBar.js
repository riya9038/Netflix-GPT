import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../utils/languageConfig";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchResults } from "../store/gptSlice";

function GptSearchBar() {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const selectedLang = useSelector((state) => state?.config?.selectedLanguage);

  const searchGptMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/${movie}?include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGPTSearch = async () => {
    const query =
      "act as a movie recommendation system that match the query " +
      searchText.current.value +
      " and show 5 movies names as shown in the example.Example:abcd,heropanti,gadar,dhoom,boss";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "assistant", content: query }],
      model: "gpt-3.5-turbo",
    });

    const gptResults = chatCompletion.choices[0].message.content.split(",");
    const promiseArr = gptResults.map((movie) => searchGptMovie(movie));
    const gptMovieResults = await Promise.all(promiseArr);
    dispatch(
      addGptSearchResults({
        movieNames: gptResults,
        movieResults: gptMovieResults,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="p-6 bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-10 px-4 py-2 mr-2 rounded-md"
          type="text"
          placeholder={languages[selectedLang]?.placeholder}
        />
        <button
          className="col-span-2 bg-red-700 text-white rounded-lg px-4 py-2"
          onClick={handleGPTSearch}
        >
          {languages[selectedLang]?.search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
