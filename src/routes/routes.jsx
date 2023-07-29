import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Approve from "../pages/Approve/Approve";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />

			<Route path="/login/approve" element={<Approve />} />
		</Routes>
	);
};

export default AppRoutes;
