import { Box, Button } from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, USER_AVATAR } from "./utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
      <div>Logo</div>
      {user && (
        <Box class="flex justify-center items-center">
          <img src={USER_AVATAR} alt="user" width={"20px"} class="h-5" />
          <Button onClick={handleSignOut}>Sign Out</Button>
        </Box>
      )}
    </div>
  );
};

export default Header;
