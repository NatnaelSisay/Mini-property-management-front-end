import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import PropetryDetailPage from "../pages/propertyDetailPage/PropetryDetailPage";
import FavoritesPage from "../pages/favoritesPage/FavoritesPage";
import AdminPage from "../pages/adminPage/AdminPage";
import MyOffersPage from "../pages/myOffersPage/MyOffersPage";
import Login from "../pages/authPage/Login";
import Signup from "../pages/authPage/SignUp";
import CreatePostPage from "../pages/createPostPage/CreatePostPage";

import ProtectedOffers from "./ProtectedOffers";
import ProtectedAdmin from "./ProtectedAdmin";
import ProtectedLanding from "./ProtectedLanding";
import ProtectedCreatePost from "./ProtectedCreatePost";
import ProtectedFavorite from "./ProtectedFavorite";

const PageRouter = () => {
  return (
    <Routes>
      {/* Put your page routes here...  */}
      <Route
        path="/"
        element={
          <ProtectedLanding>
            <LandingPage />
          </ProtectedLanding>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/property/:id" element={<PropetryDetailPage />} />
      <Route
        path="/favorites"
        element={
          <ProtectedFavorite>
            <FavoritesPage />
          </ProtectedFavorite>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedAdmin>
            <AdminPage />
          </ProtectedAdmin>
        }
      />
      <Route
        path="/offers"
        element={
          <ProtectedOffers>
            <MyOffersPage />{" "}
          </ProtectedOffers>
        }
      />
      <Route
        path="/create-post"
        element={
          <ProtectedCreatePost>
            <CreatePostPage />
          </ProtectedCreatePost>
        }
      />
    </Routes>
  );
};

export default PageRouter;
