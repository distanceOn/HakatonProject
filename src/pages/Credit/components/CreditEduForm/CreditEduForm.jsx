import { useNavigate } from "react-router-dom";
import s from "./CreditEduForm.module.scss";

import Button from "@mui/material/Button";

function CreditEduForm({ handlePreviousStep }) {
	const navigate = useNavigate();
	const handleBudget = () => {
		navigate("/");
		alert("Поздравляем, заявка отправлена!");
	};

	const handleCommercial = () => {
		alert("Хотите кредит?");
		navigate("/creditlist");
	};
	return (
		<div className={s.block}>
			<h2>Желаемая форма обучения</h2>
			<div className={s.list}>
				{/* Buttons for choosing the desired form of education */}
				<Button
					className={s.btn}
					variant="contained"
					color="primary"
					onClick={handleBudget}
				>
					Бюджет
				</Button>
				<Button
					className={s.btn}
					variant="contained"
					color="primary"
					onClick={handleCommercial}
				>
					Коммерция
				</Button>
			</div>
			<Button onClick={handlePreviousStep} variant="contained" color="primary">
				Назад
			</Button>
		</div>
	);
}

export default CreditEduForm;
