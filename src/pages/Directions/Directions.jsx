import { useSelector } from "react-redux";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { useGetResultsQuery } from "../../redux/services/usersApi";
import s from "./Directions.module.scss";
import { selectUserTestId } from "../../redux/selectors";
import { useEffect } from "react";

function Directions() {
	const userTestId = useSelector(selectUserTestId);
	const { data, refetch } = useGetResultsQuery(userTestId);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (data?.data?.status === "IN_PROCESS") {
				refetch();
				console.log("Запрос!");
				console.log(data);
			}
		}, 3000);

		return () => {
			clearInterval(intervalId);
		};
	}, [data, refetch]);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div className={s.main}>
			<ResponsiveAppBar />
		</div>
	);
}

export default Directions;
