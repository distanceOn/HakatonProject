import * as React from "react";
import Grid from "@mui/material/Grid";
import s from "./List.module.scss";
import MyCard from "./Card/Card";
import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function List() {
	const cardsData = [
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},
		{
			id: 1,
			imageUrl:
				"https://ic.pics.livejournal.com/smapse/90291932/215411/215411_original.png",
			title: "Заголовок карточки 1",
			description: "Описание карточки 1",
		},

		// Добавьте другие данные для карточек по аналогии
	];

	const [size, setSize] = useState("small");

	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/") {
			setSize("small");
		} else if (location.pathname === "/catalog") {
			setSize("big");
		}
	}, [location]);

	const [cityFilter, setCityFilter] = React.useState("");
	const [titleFilter, setTitleFilter] = React.useState("");

	const handleCityChange = (event) => {
		setCityFilter(event.target.value);
	};

	const handleTitleChange = (event) => {
		setTitleFilter(event.target.value);
	};

	const filteredCards = cardsData.filter((card) => {
		const isCityMatch =
			cityFilter === "" ||
			(card.city && card.city.toLowerCase().includes(cityFilter.toLowerCase()));
		const isTitleMatch =
			titleFilter === "" ||
			card.title.toLowerCase().includes(titleFilter.toLowerCase());
		return isCityMatch && isTitleMatch;
	});
	// Здесь можно определить данные для каждой карточки

	return (
		<div>
			<div className={s.filter}>
				<div className={s.filter__city}>
					<TextField
						label="Фильтр по городу"
						variant="outlined"
						value={cityFilter}
						onChange={handleCityChange}
						select
						sx={{ bgcolor: "#000", width: "15vw" }}
						InputLabelProps={{
							style: {
								color: "#ffd700", // Customize the color of the label text
								fontWeight: 700, // You can add more styles as needed
							},
						}}
					>
						<MenuItem value="">Все</MenuItem>
						{/* Предположим, что у вас есть массив городов, который можно использовать для выбора */}
						{["Москва", "Санкт-Петербург", "Казань", "Екатеринбург", "Новосибирск"].map(
							(city) => (
								<MenuItem sx={{}} key={city} value={city}>
									{city}
								</MenuItem>
							)
						)}
					</TextField>
				</div>
				<div className={s.filter__name}>
					<TextField
						label="Фильтр по названию"
						variant="outlined"
						value={titleFilter}
						onChange={handleTitleChange}
						sx={{ bgcolor: "#000", width: "15vw" }}
						InputLabelProps={{
							style: {
								color: "#ffd700", // Customize the color of the label text
								fontWeight: 700, // You can add more styles as needed
							},
						}}
						InputProps={{
							style: {
								color: "#ffd700", // Customize the color of the input text
							},
						}}
					/>
				</div>
			</div>
			<Grid
				container
				spacing={2}
				className={size === "small" ? s.list : s.other__list}
			>
				{filteredCards.map((card) => (
					<Grid
						key={card.id}
						item
						{...(size === "small"
							? { xs: 12, sm: 6, md: 4, lg: 2 }
							: { xs: 10, sm: 10, md: 10, lg: 10 })}
					>
						<MyCard
							imageUrl={card.imageUrl}
							title={card.title}
							description={card.description}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default List;
