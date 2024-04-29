import React from "react";
import { useSelector } from "react-redux";
import { languages } from "../utils/languageConfig";

function GptSearchBar() {
  const selectedLang = useSelector((state) => state?.config?.selectedLanguage);
  console.log(selectedLang, "lang");
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="p-6 bg-black w-1/2 grid grid-cols-12">
        <input
          className="col-span-10 px-4 py-2 mr-2 rounded-md"
          type="text"
          placeholder={languages[selectedLang]?.placeholder}
        />
        <button className="col-span-2 bg-red-700 text-white rounded-lg px-4 py-2">
          {languages[selectedLang]?.search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
