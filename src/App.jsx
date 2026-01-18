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
  const [detailsUpdated, setDetailsUpdated] = useState(0);
  const userID = 2;
  const fetchUser = async () => {
    const { user } = await getUserById(userID);
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, [detailsUpdated]);

  const detailsEdited = () => {
    setDetailsUpdated(detailsUpdated + 1);
  };

  return (
    <>
      <Header user={user} detailsUpdated={detailsUpdated} />
      <Routes>
        <Route path="/" element={<ViewProperties user={user} />} />
        <Route path="properties/:property_id" element={<ViewSingleProperty user={user} />} />
        <Route
          path="users/:user_id"
          element={<UserProfile loggedInUser={user} detailsEdited={detailsEdited} />}
        />
      </Routes>
    </>
  );
}

export default App;
