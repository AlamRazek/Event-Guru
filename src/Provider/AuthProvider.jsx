import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signUp/CreateUser

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signIn user

  const userSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userLogOut = () => {
    setLoading(true);

    return signOut(auth);
  };

  const storedAuth = {
    user,
    createUser,
    userSignIn,
    userLogOut,
    loading,
  };

  return (
    <AuthContext.Provider value={storedAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
