import List from "../../components/List/List";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./Main.module.scss";
import EnterButton from "./components/Button/Button";
import H1 from "../../components/H1/H1";
function Main() {
	return (
		<div className={s.main}>
			<ResponsiveAppBar />
			<H1 text="Подача документов в университет в несколько кликов!" />
			<EnterButton />
			<List />
		</div>
	);
}

export default Main;
