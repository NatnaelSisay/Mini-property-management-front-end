import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import PropetryDetailPage from "../pages/propertyDetailPage/PropetryDetailPage";
import FavoritesPage from "../pages/favoritesPage/FavoritesPage";
import AdminPage from "../pages/adminPage/AdminPage";
import MyOffersPage from "../pages/myOffersPage/MyOffersPage";
import Login from "../pages/authPage/Login";
import Signup from "../pages/authPage/Signup";

import Protected from "./Protected";
import ProtectedAdmin from "./ProtectedAdmin";
import ProtectedLanding from "./ProtectedLanding";

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

			<Route
				path="/property/:id"
				element={
					<Protected>
						<PropetryDetailPage />
					</Protected>
				}
			/>
			<Route
				path="/favorites"
				element={
					<Protected>
						<FavoritesPage />
					</Protected>
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
					<Protected>
						<MyOffersPage />{" "}
					</Protected>
				}
			/>
		</Routes>
	);
};

export default PageRouter;
