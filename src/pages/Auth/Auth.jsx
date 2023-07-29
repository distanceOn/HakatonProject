import React, { useState } from "react";
import { Typography, TextField, Button, Container } from "@mui/material";
import s from "./Auth.module.scss";

const PhoneAuthPage = () => {
	const [phoneNumber, setPhoneNumber] = useState("");

	const handlePhoneNumberChange = (e) => {
		// Игнорируем все, кроме цифр
		const value = e.target.value.replace(/[^\d]/g, "");
		setPhoneNumber(value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// Ваша логика обработки отправки номера телефона
		console.log("Отправить номер телефона:", phoneNumber);
	};

	return (
		<div className={s.auth}>
			<Container
				maxWidth="sm"
				sx={{
					bgcolor: "#ffd700",
					padding: "2vw",
					borderRadius: "2vw",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					gap: "1vw",
				}}
			>
				<Typography variant="h4" gutterBottom>
					Вход и регистрация
				</Typography>
				<Typography variant="body1" gutterBottom>
					Введите ваш номер телефона. На него мы отправим СМС с кодом подтверждения
				</Typography>
				<form onSubmit={handleFormSubmit}>
					<TextField
						label="+7"
						variant="outlined"
						value={phoneNumber}
						onChange={handlePhoneNumberChange}
						placeholder="___-___-____" // Скелет номера телефона для России
						inputProps={{
							maxLength: 10, // Ограничение на количество цифр в номере телефона (без кода страны)
						}}
						fullWidth
						sx={{ marginBottom: "1vw" }}
					/>
					<Button type="submit" variant="contained" color="primary" fullWidth>
						Войти
					</Button>
				</form>
			</Container>
		</div>
	);
};

export default PhoneAuthPage;
