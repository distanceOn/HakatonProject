import * as React from "react";
import Grid from "@mui/material/Grid";
import s from "./List.module.scss";
import MyCard from "./Card/Card";

function List() {
	// Здесь можно определить данные для каждой карточки
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

	return (
		<Grid container spacing={2} className={s.list}>
			{cardsData.map((card) => (
				<Grid key={card.id} item xs={12} sm={6} md={4} lg={2}>
					<MyCard
						imageUrl={card.imageUrl}
						title={card.title}
						description={card.description}
					/>
				</Grid>
			))}
		</Grid>
	);
}

export default List;
