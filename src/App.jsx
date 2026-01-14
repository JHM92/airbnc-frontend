import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import ViewProperties from "./components/ViewProperties";
import ViewSingleProperty from "./components/ViewSingleProperty";
import UserProfile from "./components/UserProfile.jsx";
import { getUserById } from "../api.js";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState();
  const userID = 1;
  const fetchUser = async () => {
    const { user } = await getUserById(userID);
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<ViewProperties user={user} />} />
        <Route path="properties/:property_id" element={<ViewSingleProperty user={user} />} />
        <Route path="users/:user_id" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
