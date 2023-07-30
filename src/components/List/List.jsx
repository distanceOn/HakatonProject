import * as React from "react";
import Grid from "@mui/material/Grid";
import s from "./List.module.scss";
import MyCard from "./Card/Card";
import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useGetAllUniverseQuery } from "../../redux/services/usersApi";

function List() {
	const allUni = useGetAllUniverseQuery();
	const [data, setData] = useState(null);
	const [cardsData, setCardsData] = useState([]);

	useEffect(() => {
		setData(allUni.data);
	}, [allUni]);

	useEffect(() => {
		if (data) {
			const filteredCards = data.data.map((i) => ({
				id: i.id,
				imageUrl: i.photo,
				title: i.name,
				description: i.description,
				city: i.university?.address?.city || "",
				faculty: i.university?.faculty || "",
				specialty: i.university?.specialty || "",
			}));
			setCardsData(filteredCards);
			console.log(cardsData);
		}
	}, [data]);

	const [size, setSize] = useState("small");

	const location = useLocation();

	useEffect(() => {
		setSize(location.pathname === "/" ? "small" : "big");
	}, [location]);

	const [cityFilter, setCityFilter] = React.useState("");
	const [titleFilter, setTitleFilter] = React.useState("");
	const [facultyFilter, setFacultyFilter] = React.useState("");
	const [specialtyFilter, setSpecialtyFilter] = React.useState("");

	const handleCityChange = (event) => {
		setCityFilter(event.target.value);
	};

	const handleTitleChange = (event) => {
		setTitleFilter(event.target.value);
	};

	const handleFacultyChange = (event) => {
		setFacultyFilter(event.target.value);
	};

	const handleSpecialtyChange = (event) => {
		setSpecialtyFilter(event.target.value);
	};

	const filteredCards = cardsData.filter((card) => {
		const isCityMatch =
			cityFilter === "" || card.city.toLowerCase().includes(cityFilter.toLowerCase());
		const isTitleMatch =
			titleFilter === "" ||
			card.title.toLowerCase().includes(titleFilter.toLowerCase());
		const isFacultyMatch =
			facultyFilter === "" ||
			card.faculty.toLowerCase().includes(facultyFilter.toLowerCase());
		const isSpecialtyMatch =
			specialtyFilter === "" ||
			card.specialty.toLowerCase().includes(specialtyFilter.toLowerCase());
		return isCityMatch && isTitleMatch && isFacultyMatch && isSpecialtyMatch;
	});

	return (
		<div>
			<div className={s.filter}>
				<div className={s.filter__faculty}>
					<TextField
						label="Фильтр по направлению факультета"
						variant="outlined"
						value={facultyFilter}
						onChange={handleFacultyChange}
						select
						sx={{ bgcolor: "#000", width: "15vw" }}
						InputLabelProps={{
							style: {
								color: "#ffd700",
								fontWeight: 700,
							},
						}}
					>
						<MenuItem value="">Все</MenuItem>
						{["Факультет 1", "Факультет 2", "Факультет 3"].map((faculty) => (
							<MenuItem key={faculty} value={faculty}>
								{faculty}
							</MenuItem>
						))}
					</TextField>
				</div>
				<div className={s.filter__specialty}>
					<TextField
						label="Фильтр по номеру специальности"
						variant="outlined"
						value={specialtyFilter}
						onChange={handleSpecialtyChange}
						sx={{ bgcolor: "#000", width: "15vw" }}
						InputLabelProps={{
							style: {
								color: "#ffd700",
								fontWeight: 700,
							},
						}}
						InputProps={{
							style: {
								color: "#ffd700",
							},
						}}
					/>
				</div>
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
						{["Москва", "Санкт-Петербург", "Казань", "Екатеринбург", "Новосибирск"].map(
							(city) => (
								<MenuItem key={city} value={city}>
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
							id={card.id}
							imageUrl={card.imageUrl}
							title={card.title}
							description={card.description}
							city={cardsData.city} // Corrected: Access city from the individual card object
							faculty={card.faculty} // Corrected: Access faculty from the individual card object
							specialty={card.specialty} // Corrected: Access specialty from the individual card object
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default List;
