import { Box, Select } from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptView } from "../store/gptSlice";
import { chooseLanguage } from "../store/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const showGptView = useSelector((state) => state.gpt.showGptView);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggleGptView = () => {
    dispatch(toggleGptView());
  };

  const handleSelectedLanguage = (e) => {
    console.log(e.target.value, "vaslue");
    dispatch(chooseLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const name = user.displayName;
        const email = user.email;

        dispatch(addUser(uid, name, email));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-20 flex w-full justify-between">
      <img className="w-48" src={LOGO} alt="logo" />
      {user && (
        <Box className="flex items-center gap-4">
          {showGptView && (
            <select
              className="bg-black text-white px-2 py-2"
              onChange={handleSelectedLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            className="h-10 px-4 bg-green-900 text-white rounded-lg font-semibold"
            onClick={handleToggleGptView}
          >
            {showGptView ? "Home" : "GPT Search"}
          </button>
          <Box class="flex justify-center items-center gap-3">
            <img src={USER_AVATAR} alt="user" width={"40px"} height={"40px"} />
            <button
              onClick={handleSignOut}
              className="text-white font-semibold"
            >
              Sign Out
            </button>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Header;
