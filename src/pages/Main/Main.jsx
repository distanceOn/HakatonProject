import List from "../../components/List/List";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./Main.module.scss";
function Main() {
	return (
		<div className={s.main}>
			<ResponsiveAppBar />
			<List />
		</div>
	);
}

export default Main;
