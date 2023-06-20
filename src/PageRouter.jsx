import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import PropetryDetailPage from "./pages/propertyDetailPage/PropetryDetailPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import AdminPage from "./pages/adminPage/AdminPage";
import MyOffersPage from "./pages/myOffersPage/MyOffersPage";
import CreatePostPage from "./pages/createPostPage/CreatePostPage";
import Signup from "./pages/authPage/SignUp";
import { Login } from "@mui/icons-material";

const PageRouter = () => {
  return (
    <Routes>
      {/* Put your page routes here...  */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/property/:id" element={<PropetryDetailPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/offers" element={<MyOffersPage />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-post" element={<CreatePostPage />} />
    </Routes>
  );
};

export default PageRouter;
