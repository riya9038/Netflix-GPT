import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { Box, TextField, Typography } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { checkValidation } from "./utils/validation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./store/userSlice";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    const message = checkValidation(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(addUser(user.uid, user.email));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser(user.uid, user.email));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box className="absolute h-full w-full">
        <img
          className="h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="poster"
        />
      </Box>
      <Box
        onSubmit={(e) => e.preventDefault()}
        component={"form"}
        className="w-3/12 absolute mx-auto left-0 right-0 top-32 bg-black opacity-90 flex flex-col p-10 gap-5 rounded-lg text-white"
      >
        <Typography variant={"h5"}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </Typography>
        {!isSignIn && (
          <TextField
            className="text-white bg-slate-600"
            name="name"
            type="text"
            inputRef={name}
            placeholder="Enter full name"
          />
        )}
        <TextField
          className="text-white bg-slate-600"
          name="email"
          type="email"
          inputRef={email}
          placeholder="Enter email"
        />
        <TextField
          className="text-white bg-slate-600"
          name="password"
          type="password"
          inputRef={password}
          placeholder="Enter password"
        />
        <Typography component={"p"} className="text-red-500">
          {errorMessage}
        </Typography>
        <button className="bg-red-800 p-2 rounded-md" onClick={handleSubmit}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignIn}
          component={"small"}
          className="cursor-pointer text-xs"
        >
          {isSignIn
            ? "New to Netflix?? Sign Up Now"
            : "Already have an account...Sign In instead"}
        </p>
      </Box>
    </>
  );
}

export default Login;
