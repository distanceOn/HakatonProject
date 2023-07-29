import H1 from "../../components/H1/H1";
import List from "../../components/List/List";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./Catalog.module.scss";
function Catalog() {
	return (
		<div className={s.catalog}>
			<ResponsiveAppBar />
			<H1 text="Список университетов" />
			<List />
		</div>
	);
}

export default Catalog;
