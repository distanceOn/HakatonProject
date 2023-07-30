import React from "react";
import s from "./CreditCard.module.scss";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CreditCard = ({
	key,
	amount,
	photo,
	period,
	precentage,
	payment,
	name,
}) => {
	return (
		<Card className={s.card}>
			<CardMedia component="img" height="140" image={photo} alt={"credit"} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Программа: {name}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Сумма кредита: {amount} руб.
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Срок кредита: {period} мес.
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Процентная ставка: {precentage}%
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Ежемесячный платеж: {payment} руб.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CreditCard;
