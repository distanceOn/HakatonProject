import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Container } from "@mui/material";
import s from "./Approve.module.scss";

import { useNavigate } from "react-router-dom";
import { setLogin } from "../../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../redux/selectors";

const Approve = () => {
	const [phoneNumber, setPhoneNumber] = useState("9187734542");
	const [confirmationCode, setConfirmationCode] = useState("1111");
	const [resendDisabled, setResendDisabled] = useState(false);
	const [timer, setTimer] = useState(60);

	const userId = useSelector(selectUserId);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		let interval;
		if (timer > 0 && resendDisabled) {
			interval = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);
		} else if (timer === 0 && resendDisabled) {
			clearInterval(interval); // Clear the interval to stop the timer
			setResendDisabled(false);
			setTimer(60);
		}
		return () => clearInterval(interval); // Clear the interval when the component unmounts
	}, [timer, resendDisabled]);

	const handlePhoneNumberChange = (e) => {
		// Игнорируем все, кроме цифр
		const value = e.target.value.replace(/[^\d]/g, "");
		setPhoneNumber(value);
	};

	const handleConfirmationCodeChange = (e) => {
		// Игнорируем все, кроме цифр
		const value = e.target.value.replace(/[^\d]/g, "");
		setConfirmationCode(value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// Ваша логика обработки отправки кода подтверждения
		console.log("Код подтверждения:", confirmationCode);
		// Заблокируем кнопку "Запросить повторно" и установим таймер на минуту
		setResendDisabled(true);
		setTimer(60);
		// Симулируем запрос повторной отправки кода через 60 секунд
		setTimeout(() => {
			setResendDisabled(false);
		}, 60000);

		dispatch(
			setLogin({
				userId: phoneNumber, //после регистрации и авторизации
			})
		);

		navigate("/");
	};

	useEffect(() => {
		console.log(userId);
	}, [userId]);

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
					Мы отправим вам СМС с кодом подтверждения
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
					<TextField
						label="Код подтверждения"
						variant="outlined"
						value={confirmationCode}
						onChange={handleConfirmationCodeChange}
						fullWidth
						sx={{ marginBottom: "1vw" }}
					/>
					<Button type="submit" variant="contained" color="primary" fullWidth>
						Войти
					</Button>
				</form>
				<Button variant="outlined" disabled={resendDisabled} fullWidth>
					Запросить повторно ({timer} сек)
				</Button>
			</Container>
		</div>
	);
};

export default Approve;
