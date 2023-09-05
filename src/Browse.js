import React from "react";
import Header from "./Header";

const Browse = () => {
  return (
    <>
      <Header />
      <div className="absolute h-full w-full">
        <img
          className="h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="poster"
        />
      </div>
    </>
  );
};

export default Browse;
