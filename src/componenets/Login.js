import React, { useRef, useState } from "react";
import Header from "./Header";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { BG_URL } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) return;

    //Sign In Sign Up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!

              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              seterrorMessage(errorMessage);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=" w-screen md:h-screen object-cover"
          src={BG_URL}
          alt="netflix_logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0 opacity-90 text-white"
      >
        <button className=" font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Out"}
        </button>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="FullName"
            className=" w-full my-3 p-3 rounded-md bg-gray-600 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className=" w-full my-3 p-3 rounded-md bg-gray-600 "
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" w-full my-3 p-3 rounded-md  bg-gray-600"
        />
        <p className=" text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className=" cursor-pointer bg-red-600 p-3 my-10 rounded-md w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Out"}
        </button>
        <p className=" cursor-pointer py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to  Netflix ? SignUp Now "
            : "Already registered SignIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
