import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import firebaseAuthentication from "../firebase/FirebaseInit";

// call firebase config file
firebaseAuthentication();

const useFirebase = () => {
  // declare user state
  const [user, setUser] = useState({});
  // user state change state
  const [isLoading, setIsLoading] = useState(true);
  // error state
  const [authError, setAuthError] = useState("");

  //declare admin
  const [admin, setAdmin] = useState("false");

  // declare auth
  const auth = getAuth();

  // google auth
  const googleProvider = new GoogleAuthProvider();

  // register new user
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);

        // // save user to the database
        saveUser(email, name, "POST");

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login user
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // google sign in
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // logout user
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // saved user function
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  //   // admin data load
  //   useEffect(() => {
  //     fetch(`https://fathomless-falls-37027.herokuapp.com/users/${user.email}`)
  //       .then((res) => res.json())

  //       .then((data) => setAdmin(data.admin));
  //   }, [user.email]);

  return {
    registerUser,
    authError,
    loginUser,
    signInWithGoogle,
    logout,
    user,
    isLoading,
    admin,
  };
};

export default useFirebase;
