import s from "./CreditJob.module.scss";

import Button from "@mui/material/Button";
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";

function CreditJob({ formData, handleChange, handlePreviousStep }) {
	return (
		<div className={s.block}>
			<h2>Занятость и доход</h2>
			<div className={s.list}>
				<FormControl fullWidth margin="normal" variant="outlined" className={s.input}>
					<InputLabel id="employmentTypeLabel">Тип занятости</InputLabel>
					<Select
						labelId="employmentTypeLabel"
						id="employmentType"
						name="employmentType"
						value={formData.employmentType}
						onChange={handleChange}
						label="Тип занятости"
						required
					>
						<MenuItem value="employee">Сотрудник</MenuItem>
						<MenuItem value="entrepreneur">Предприниматель</MenuItem>
						<MenuItem value="freelancer">Фрилансер</MenuItem>
						{/* Add other employment types as needed */}
					</Select>
				</FormControl>
				<FormControl fullWidth margin="normal" variant="outlined" className={s.input}>
					<InputLabel id="totalWorkExperienceLabel">Общий трудовой стаж</InputLabel>
					<Select
						labelId="totalWorkExperienceLabel"
						id="totalWorkExperience"
						name="totalWorkExperience"
						value={formData.totalWorkExperience}
						onChange={handleChange}
						label="Общий трудовой стаж"
						required
					>
						<MenuItem value="lessThan1Year">Менее 1 года</MenuItem>
						<MenuItem value="1To3Years">1-3 года</MenuItem>
						<MenuItem value="3To5Years">3-5 лет</MenuItem>
						<MenuItem value="5To10Years">5-10 лет</MenuItem>
						<MenuItem value="moreThan10Years">Более 10 лет</MenuItem>
						{/* Add other total work experience options as needed */}
					</Select>
				</FormControl>
			</div>
			<div className={s.block}>
				<h2>Текущее место работы</h2>
				<div className={s.list}>
					{/* Render current workplace form fields */}
					<TextField
						label="Начало работы на последнем месте"
						name="startDate"
						value={formData.startDate}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Должность"
						name="position"
						value={formData.position}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Название организации"
						name="organizationName"
						value={formData.organizationName}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Рабочий телефон"
						name="workPhone"
						value={formData.workPhone}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Численность работников"
						name="employeeCount"
						value={formData.employeeCount}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<FormControl fullWidth margin="normal" variant="outlined" className={s.input}>
						<InputLabel id="organizationTypeLabel">Тип организации</InputLabel>
						<Select
							labelId="organizationTypeLabel"
							id="organizationType"
							name="organizationType"
							value={formData.organizationType}
							onChange={handleChange}
							label="Тип организации"
							required
						>
							<MenuItem value="type1">Тип 1</MenuItem>
							<MenuItem value="type2">Тип 2</MenuItem>
							<MenuItem value="type3">Тип 3</MenuItem>
							{/* Add other organization types as needed */}
						</Select>
					</FormControl>
					<FormControl fullWidth margin="normal" variant="outlined" className={s.input}>
						<InputLabel id="activityAreaLabel">Сфера деятельности</InputLabel>
						<Select
							labelId="activityAreaLabel"
							id="activityArea"
							name="activityArea"
							value={formData.activityArea}
							onChange={handleChange}
							label="Сфера деятельности"
							required
						>
							<MenuItem value="area1">Сфера 1</MenuItem>
							<MenuItem value="area2">Сфера 2</MenuItem>
							<MenuItem value="area3">Сфера 3</MenuItem>
							{/* Add other activity areas as needed */}
						</Select>
					</FormControl>
					<TextField
						label="ИНН организации"
						name="organizationINN"
						value={formData.organizationINN}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Адрес организации"
						name="organizationAddress"
						value={formData.organizationAddress}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
				</div>
				<div>
					<Button variant="contained" color="primary" onClick={handlePreviousStep}>
						Назад
					</Button>
					<Button type="submit" variant="contained" color="primary">
						Далее
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CreditJob;
