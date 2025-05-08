import { auth } from "@services";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User, signOut, UserCredential, sendPasswordResetEmail } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface IAuthContext {
  currentUser: User | null,
  isAuthenticated: () => boolean,
  logIn: (email: string ,password: string) => Promise<User | null>,
  signUp: (email: string, password: string) => Promise<User | null>,
  logOut: () => void,
  resetPassword: (email: string) => Promise<void>,
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const isAuthenticated = () => !!currentUser;

  const logIn = async (email: string, password: string): Promise<User | null> => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Login error: ", error)
      throw error;
    }
  };

  const signUp = async (email: string, password: string): Promise<User | null> => {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Sign up error: ", error)
      throw error;
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    try {
      return await sendPasswordResetEmail(auth, email)
    } catch (error) {
      console.error("Reset password error: ", error)
      throw error;
    }
  };

  const logOut = () => {
    if (!isAuthenticated()) return;
    signOut(auth).then(() => {
      setCurrentUser(null);
    }).catch((error) => {
      console.error(error);
      throw error
    });
  };


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setCurrentUser)

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      currentUser,
      isAuthenticated,
      logIn,
      signUp,
      logOut,
      resetPassword,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };