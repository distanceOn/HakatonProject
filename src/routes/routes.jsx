import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Approve from "../pages/Approve/Approve";
import ProtectedRoute from "./ProtectedRoute";
import Catalog from "../pages/Catalog/Catalog";
import Testing from "../pages/Testing/Testing";
import Profile from "../pages/Profile/Profile";

import Credit from "../pages/Credit/Credit";
import Directions from "../pages/Directions/Directions";
import University from "../pages/University/University";
import SomeTests from "../pages/SomeTests/SomeTests";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />

			<Route path="/login" element={<Approve />} />

			<Route element={<ProtectedRoute />}>
				<Route path="/testing" element={<Testing />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/tests" element={<SomeTests />} />
				<Route path="/credit" element={<Credit />} />
			</Route>

			<Route path="/catalog" element={<Catalog />} />

			<Route path="/card/:id" element={<University />} />

			<Route path="/directions" element={<Directions />} />

			{/* <Route path="*" element={<NotFound />} /> */}
		</Routes>
	);
};

export default AppRoutes;
