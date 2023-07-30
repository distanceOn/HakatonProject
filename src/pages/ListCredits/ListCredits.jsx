import { useEffect } from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { useGetCreditsQuery } from "../../redux/services/usersApi";
import s from "./ListCredits.module.scss";
import CreditCard from "./CreditCard/CreditCard";

function ListCredits() {
	const { data } = useGetCreditsQuery();

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div className={s.main}>
			<ResponsiveAppBar />
			{data?.data?.map((credit) => (
				<CreditCard
					className={s.card}
					key={credit.id}
					amount={credit.amount}
					photo={credit.bank.photo}
					period={credit.period}
					precentage={credit.precentage}
					payment={credit.payment}
					name={credit.name}
				/>
			))}
		</div>
	);
}

export default ListCredits;
