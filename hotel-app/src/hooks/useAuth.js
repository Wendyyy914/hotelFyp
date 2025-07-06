import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

//components can easily access and update the authentication state 
// (e.g., check if the user is logged in, or update user data).
const useAuth = () => {
  return useContext(AuthContext);
};
//Hooks help in keeping the component code clean and reusable, 
// making it easy to update or modify logic without touching the components.
export default useAuth;

//example to use
// import { useAuth } from "../context/AuthContext"; // Custom hook to access AuthContext

// const useAuth = () => {
//   const { user, login, logout } = useAuth();

//   const isAuthenticated = () => {
//     return !!user; // Returns true if user is logged in, otherwise false
//   };

//   return { user, isAuthenticated, login, logout };
// };
