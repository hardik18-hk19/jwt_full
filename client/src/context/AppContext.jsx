import axios from "axios";
import { createContext, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  console.log("🔧 AppContext initialized");
  console.log("🌐 Backend URL from env:", backendUrl);
  console.log("🌐 All env vars:", import.meta.env);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(false);

  const getUserData = useCallback(async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/data", {
        withCredentials: true,
      });
      data.success ? setUserData(data.userData) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }, [backendUrl]);

  const getAuthState = useCallback(async () => {
    try {
      console.log("🔍 Checking auth state...");
      console.log("🌐 Backend URL:", backendUrl);
      const { data } = await axios.get(backendUrl + "/api/auth/is-auth", {
        withCredentials: true,
      });
      console.log("Auth response:", data);
      console.log("Auth response type:", typeof data);
      console.log("Auth response success:", data?.success);

      if (data && data.success) {
        setIsLoggedIn(true);
        getUserData();
      } else {
        console.log("❌ Auth failed - not logged in");
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("❌ Auth check error:", error);
      console.error("Error response:", error.response?.data);
      console.error("Error status:", error.response?.status);
      console.error("Error message:", error.message);

      setIsLoggedIn(false);
      // Only show toast for actual errors, not auth failures
      if (error.response?.status !== 401 && error.response?.status !== 403) {
        toast.error(error.response?.data?.message || error.message);
      }
    }
  }, [backendUrl, getUserData]);

  useEffect(() => {
    getAuthState();
  }, [getAuthState]);

  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserData,
  };

  return (
    <AppContent.Provider value={value}>{props.children}</AppContent.Provider>
  );
};
