import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No auth provider");
  return context;
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    setPersistence(auth, browserLocalPersistence);
  };
  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logout }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
