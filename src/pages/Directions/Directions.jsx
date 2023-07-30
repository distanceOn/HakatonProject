import { useDispatch, useSelector } from "react-redux";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./Directions.module.scss";
import { selectUserTestResults } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { setUserChoice } from "../../redux/slices/user";

function Directions() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleResult = (result) => {
		dispatch(setUserChoice(result));
		navigate("/catalog");
	};
	const results = useSelector(selectUserTestResults);
	return (
		<div className={s.main}>
			<ResponsiveAppBar />
			<div className={s.block}>
				<h2 className={s.h2}>Ваши результаты:</h2>
				<div className={s.list}>
					{results.map((result) => {
						return (
							<button
								onClick={() => {
									handleResult(result);
								}}
								className={s.name}
							>
								{result.name}
							</button>
						);
					})}
				</div>
				<p className={s.p}>
					Это вам подходит! Посмотрите, куда можно подать документы!
				</p>
			</div>
		</div>
	);
}

export default Directions;
