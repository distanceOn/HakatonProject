import s from "./CreditPassport.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Checkbox } from "@mui/material";

function CreditPassport({ formData, handleChange, handlePreviousStep }) {
	return (
		<div>
			<div className={s.block}>
				<h2>Паспортные данные</h2>
				<div className={s.list}>
					<TextField
						label="Выбор пола"
						name="gender"
						value={formData.gender}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Код подразделения"
						name="departmentCode"
						value={formData.departmentCode}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Серия и номер паспорта"
						name="passportSeriesAndNumber"
						value={formData.passportSeriesAndNumber}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Дата выдачи"
						name="dateOfIssue"
						value={formData.dateOfIssue}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Кем выдан"
						name="issuedBy"
						value={formData.issuedBy}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Место рождения"
						name="placeOfBirth"
						value={formData.placeOfBirth}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Дата рождения"
						name="dateOfBirth"
						value={formData.dateOfBirth}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
				</div>
			</div>

			<div className={s.block}>
				<h2>Адрес регистрации</h2>
				<div className={s.list}>
					<TextField
						label="Адрес"
						name="address"
						value={formData.address}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<TextField
						label="Дата регистрации"
						name="registrationDate"
						value={formData.registrationDate}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						margin="normal"
						required
						className={s.input}
					/>
					<div>
						<label>
							<Checkbox
								name="isResidentialAddressSame"
								checked={formData.isResidentialAddressSame}
								onChange={handleChange}
							/>
							Адрес фактического проживания совпадает с местом регистрации
						</label>
					</div>
				</div>
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

export default CreditPassport;
