import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import NetworkPage from "../pages/networkPage/NetworkPage";
import MessagesPage from "../pages/messagesPage/MessagesPage";
import LandingPage from "../pages/landingPage/LandingPage";

const Router = () => {
  const [isUserLoggedIn] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isUserLoggedIn ? <Navigate to="/home" /> : <Navigate to="landing" />
        }
      />
      <Route path="/home" element={<HomePage />} />
      <Route path="/network" element={<NetworkPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  );
};

export default Router;
