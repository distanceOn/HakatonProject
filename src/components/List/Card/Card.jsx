import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import s from "./Card.module.scss"; // Импортируем стили
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const MyCard = ({ id, imageUrl, title, description }) => {
	const [size, setSize] = useState("small");

	const location = useLocation();

	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === "/") {
			setSize("small");
		} else if (location.pathname === "/catalog") {
			setSize("big");
		}
	}, [location]);

	const handleCard = () => {
		navigate(`/card/${id.toString()}`);
		localStorage.setItem(
			"card",
			JSON.stringify({ id, imageUrl, title, description })
		);
	};

	return (
		<Card
			onClick={handleCard}
			className={size === "small" ? s.card : s.card__big}
			sx={{ backgroundColor: "#ffd700" }}
		>
			<CardMedia
				component="img"
				image={imageUrl} // Путь к изображению
				alt="Изображение карточки" // Альтернативный текст для изображения (для доступности)
				sx={{ backgroundColor: "#ffd700", width: size === "small" ? "100%" : "50%" }} // Соотношение сторон (16:9)
				className={size === "small" ? s.cardImage : s.cardImage__big}
			/>
			<CardContent sx={{ backgroundColor: "#ffd700" }}>
				<Typography
					variant="h5"
					component="div"
					sx={{ backgroundColor: "#ffd700" }}
					className={s.cardTitle}
				>
					{title}
				</Typography>
				<Typography
					variant="body1"
					sx={{ backgroundColor: "#ffd700" }}
					className={s.cardDescription}
				>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MyCard;
