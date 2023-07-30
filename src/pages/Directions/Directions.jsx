import { useSelector } from "react-redux";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { useGetResultsQuery } from "../../redux/services/usersApi";
import s from "./Directions.module.scss";
import { selectUserTestId } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

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

	const [dotsCount, setDotsCount] = useState(1);
	useEffect(() => {
		const dotsInterval = setInterval(() => {
			setDotsCount((prevCount) => (prevCount % 3) + 1);
		}, 500); // Задайте интервал, через который будут появляться новые точки

		return () => {
			clearInterval(dotsInterval);
		};
	}, []);

	return (
		<div className={s.main}>
			<ResponsiveAppBar className={s.ResponsiveAppBar} />
			{data?.data?.status === "IN_PROCESS" ? (
				<div className={s.CircularProgressContainer}>
					<h2 className={s.h2}>
						Получение результатов{Array(dotsCount).fill(".").join("")}
					</h2>
					<CircularProgress size={40} color="secondary" style={{}} />
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default Directions;
