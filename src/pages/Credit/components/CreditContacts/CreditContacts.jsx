import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from "./CreditContacts.module.scss";

function CreditContacts({ formData, handleChange }) {
	return (
		<div className={s.block}>
			<h2 className={s.formTitle}>Контактные данные</h2>
			<div className={s.list}>
				<TextField
					label="Город получения кредита"
					name="city"
					value={formData.city}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					required
					className={s.input}
				/>
				<TextField
					label="Фамилия"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					required
					className={s.input}
				/>
				<TextField
					label="Имя"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					required
					className={s.input}
				/>
				<TextField
					label="Отчество"
					name="patronymic"
					value={formData.patronymic}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					required
					className={s.input}
				/>
				<TextField
					label="Электронная почта"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					required
					className={s.input}
				/>
				<TextField
					label="Ежемесячный доход (на руки)"
					name="monthlyIncome"
					type="number"
					value={formData.monthlyIncome}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					required
					className={s.input}
				/>
			</div>
			<Button type="submit" variant="contained" color="primary">
				Далее
			</Button>
		</div>
	);
}

export default CreditContacts;
