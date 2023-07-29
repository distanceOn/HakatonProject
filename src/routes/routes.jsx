import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Approve from "../pages/Approve/Approve";
import ProtectedRoute from "./ProtectedRoute";
import Catalog from "../pages/Catalog/Catalog";
import Testing from "../pages/Testing/Testing";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />

			<Route path="/login" element={<Approve />} />

			<Route element={<ProtectedRoute />}></Route>

			<Route path="/testing" element={<Testing />}></Route>

			<Route path="/catalog" element={<Catalog />} />

			{/* <Route path="*" element={<NotFound />} /> */}
		</Routes>
	);
};

export default AppRoutes;
