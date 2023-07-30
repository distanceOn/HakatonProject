// CreditPersonalInfo.js
import React from "react";
import s from "./CreditPersonalInfo.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function CreditPersonalInfo({ formData, handleChange, handlePreviousStep }) {
	return (
		<div className={s.block}>
			<h2>Личные данные</h2>
			<div className={s.list}>
				<FormControl fullWidth margin="normal" variant="outlined" className={s.input}>
					<InputLabel id="educationLabel">Образование</InputLabel>
					<Select
						labelId="educationLabel"
						id="education"
						name="education"
						value={formData.education}
						onChange={handleChange}
						label="Образование"
						required
					>
						<MenuItem value="highSchool">Среднее образование</MenuItem>
						<MenuItem value="bachelor">Бакалавр</MenuItem>
						<MenuItem value="master">Магистр</MenuItem>
						{/* Add other education options as needed */}
					</Select>
				</FormControl>
				<FormControl fullWidth margin="normal" variant="outlined" className={s.input}>
					<InputLabel id="maritalStatusLabel">Семейное положение</InputLabel>
					<Select
						labelId="maritalStatusLabel"
						id="maritalStatus"
						name="maritalStatus"
						value={formData.maritalStatus}
						onChange={handleChange}
						label="Семейное положение"
						required
					>
						<MenuItem value="single">Холост/Не замужем</MenuItem>
						<MenuItem value="married">Женат/Замужем</MenuItem>
						<MenuItem value="divorced">Разведен(а)</MenuItem>
						<MenuItem value="widowed">Вдовец/Вдова</MenuItem>
						{/* Add other marital status options as needed */}
					</Select>
				</FormControl>
				<FormControl fullWidth margin="normal" variant="outlined" className={s.input}>
					<InputLabel id="childrenLabel">Дети до 18 лет</InputLabel>
					<Select
						labelId="childrenLabel"
						id="children"
						name="children"
						value={formData.children}
						onChange={handleChange}
						label="Дети до 18 лет"
						required
					>
						<MenuItem value="none">Нет</MenuItem>
						<MenuItem value="one">1 ребенок</MenuItem>
						<MenuItem value="two">2 ребенка</MenuItem>
						<MenuItem value="threeOrMore">3 и более детей</MenuItem>
						{/* Add other children options as needed */}
					</Select>
				</FormControl>
				{/* Add more fields for personal information as needed */}
			</div>

			<h2>Контактное лицо</h2>
			<div className={s.list}>
				<FormControl fullWidth margin="normal" variant="outlined" className={s.input}>
					<InputLabel id="contactTypeLabel">Контактное лицо</InputLabel>
					<Select
						labelId="contactTypeLabel"
						id="contactType"
						name="contactType"
						value={formData.contactType}
						onChange={handleChange}
						label="Контактное лицо"
						required
					>
						<MenuItem value="friend">Друг</MenuItem>
						<MenuItem value="relative">Родственник</MenuItem>
						<MenuItem value="colleague">Коллега</MenuItem>
						{/* Add other contact types as needed */}
					</Select>
				</FormControl>
				<TextField
					label="Телефон контактного лица"
					name="contactPhone"
					value={formData.contactPhone}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					required
					className={s.input}
				/>
				<TextField
					label="Фамилия контактного лица"
					name="contactLastName"
					value={formData.contactLastName}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					required
					className={s.input}
				/>
				<TextField
					label="Имя контактного лица"
					name="contactFirstName"
					value={formData.contactFirstName}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					required
					className={s.input}
				/>
				<TextField
					label="Отчество контактного лица"
					name="contactPatronymic"
					value={formData.contactPatronymic}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					required
					className={s.input}
				/>
			</div>

			<h2>Прочее</h2>
			<div className={s.list}>
				<TextField
					label="Траты по кредитам в месяц (если есть)"
					name="creditExpenses"
					value={formData.creditExpenses}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					className={s.input}
				/>
				<FormControl fullWidth margin="normal" variant="outlined" className={s.input}>
					<InputLabel id="carOwnershipLabel">Наличие автомобиля</InputLabel>
					<Select
						labelId="carOwnershipLabel"
						id="carOwnership"
						name="carOwnership"
						value={formData.carOwnership}
						onChange={handleChange}
						label="Наличие автомобиля"
						required
					>
						<MenuItem value="yes">Да</MenuItem>
						<MenuItem value="no">Нет</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth margin="normal" variant="outlined" className={s.input}>
					<InputLabel id="propertyOwnershipLabel">Наличие недвижимости</InputLabel>
					<Select
						labelId="propertyOwnershipLabel"
						id="propertyOwnership"
						name="propertyOwnership"
						value={formData.propertyOwnership}
						onChange={handleChange}
						label="Наличие недвижимости"
						required
					>
						<MenuItem value="yes">Да</MenuItem>
						<MenuItem value="no">Нет</MenuItem>
					</Select>
				</FormControl>
				<TextField
					label="СНИЛС (необязательно)"
					name="snils"
					value={formData.snils}
					onChange={handleChange}
					variant="outlined"
					fullWidth
					margin="normal"
					className={s.input}
				/>
			</div>

			<Button variant="contained" color="primary" onClick={handlePreviousStep}>
				Назад
			</Button>
			<Button type="submit" variant="contained" color="primary">
				Далее
			</Button>
		</div>
	);
}

export default CreditPersonalInfo;
