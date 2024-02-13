import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    // Validate input
    if (!handleInputErrors(username, password)) {
      return;
    }

    setLoading(true);

    try {
      const apiEndpoint = "/api/auth/login"; // Define API endpoint
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
        toast.success("Login successful!");
      } else {
        // Handle server-side errors
        throw new Error(data.error || "Login failed");
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

function handleInputErrors(username, password) {
  // Validate input fields
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}

export default useLogin;
