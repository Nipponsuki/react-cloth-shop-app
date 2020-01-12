import React from "react";
import { auth } from "firebase/firebase.utils";

export function useAuthUser() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // no need for ref here
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return user; // return authenticated user
}
