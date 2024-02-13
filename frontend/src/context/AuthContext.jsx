import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

/*

This code is part of a React application and implements an authentication context using the
 React Context API. It provides a context named AuthContext to manage authentication-related 
 state. The code includes a custom hook useAuthContext for easily consuming this context in 
 functional components. Additionally, it defines a AuthContextProvider component, which 
 wraps the application's components and initializes the authentication state using local storage. 
 The provider makes the authentication state and a corresponding setter function accessible to its
  descendant components through the AuthContext.

  */
