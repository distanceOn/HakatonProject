import s from "./App.module.scss";
import { PhoneNumberProvider } from "./Context/UserContext";
import AppRoutes from "./routes/routes";
function App() {
	return (
		<div className={s.app}>
			<PhoneNumberProvider>
				<AppRoutes />
			</PhoneNumberProvider>
		</div>
	);
}

export default App;
