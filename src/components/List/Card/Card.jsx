import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import s from "./Card.module.scss"; // Импортируем стили

const MyCard = ({ imageUrl, title, description }) => {
	return (
		<Card className={s.card} sx={{ backgroundColor: "#ffd700" }}>
			<CardMedia
				component="img"
				image={imageUrl} // Путь к изображению
				alt="Изображение карточки" // Альтернативный текст для изображения (для доступности)
				sx={{ backgroundColor: "#ffd700" }} // Соотношение сторон (16:9)
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
