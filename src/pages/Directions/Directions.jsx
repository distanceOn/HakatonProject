import { useSelector } from "react-redux";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./Directions.module.scss";
import { selectUserTestResults } from "../../redux/selectors";

function Directions() {
	const results = useSelector(selectUserTestResults);
	return (
		<div className={s.main}>
			<ResponsiveAppBar />
			<div className={s.block}>
				<h2 className={s.h2}>Ваши результаты:</h2>
				<div className={s.list}>
					{results.map((result) => {
						return <button className={s.name}>{result.name}</button>;
					})}
				</div>
				<p className={s.p}>Это вам подходит! Посмотрите, куда можно подать документы</p>
			</div>
		</div>
	);
}

export default Directions;
