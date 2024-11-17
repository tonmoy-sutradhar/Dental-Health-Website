import { createContext, useEffect, useState } from "react";
import auth from "./../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Google AuthProvider--->>
  const provider = new GoogleAuthProvider();

  // UserState----->>>
  const [user, setUser] = useState();

  //OnAuthState ---> Like as a CC camera 😁
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      return () => {
        unSubscribe();
      };
    });
  }, []);

  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  // Google Login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider);
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
