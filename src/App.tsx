import { AuthPage } from "@components/pages";
import { auth } from "@services";
import { setUser } from "@slices";
import { useAppDispatch } from "@store";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const user = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        };
        dispatch(setUser(user));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <AuthPage></AuthPage>;
}

export default App;
