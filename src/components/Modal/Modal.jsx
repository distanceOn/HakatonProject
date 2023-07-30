import s from "./Modal.module.scss";
import { CSSTransition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";
import BaseButton from "../Button/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, setIsOpen }) => {
	const navigate = useNavigate();

	const modalRef = useRef();

	const [modalState, setModalState] = useState("default");

	const [selectedFaculty, setSelectedFaculty] = useState(null);

	const handleChoose = () => {
		setModalState("choose");
	};

	const handleDontKnow = () => {
		setModalState("dontknow");
	};

	const handleFaculty = () => {
		console.log("Выбран факультет", selectedFaculty);
		navigate("/catalog");
	};

	const handleTest = () => {
		console.log("Проходим тест");
		navigate("/testing");
	};

	const handleGoToFaculty = () => {
		navigate("/catalog");
		console.log("Список факультетов");
	};

	useEffect(() => {
		if (isOpen === false) {
			setModalState("default");
		}
	}, [isOpen]);

	const showContent = () => {
		switch (modalState) {
			case "default":
				return (
					<div className={s.modal} onClick={(e) => e.stopPropagation()}>
						<h2 className={s.heading}>Знаете чего хотите?</h2>
						<BaseButton buttonText="Выбрать факультет" handleButton={handleChoose} />{" "}
						<BaseButton buttonText="Не знаю" handleButton={handleDontKnow} />
					</div>
				);
			case "choose":
				return (
					<div className={s.modal} onClick={(e) => e.stopPropagation()}>
						<h2 className={s.heading}>Выберите направление</h2>
						<FormControl sx={{ width: "100%", bgcolor: "#fff" }}>
							<InputLabel
								htmlFor="faculty-select"
								style={{
									color: "#000", // Customize the color of the label text
									fontWeight: 700, // You can add more styles as needed
								}}
							>
								Направление
							</InputLabel>
							<Select
								value={selectedFaculty}
								onChange={(e) => setSelectedFaculty(e.target.value)}
								label="Направление" // Connect the label to the Select component
								labelId="faculty-select"
								inputProps={{
									id: "faculty-select",
									style: {
										color: "#ffd700", // Customize the color of the input text
									},
								}}
							>
								<MenuItem value="Факультет 1">Факультет 1</MenuItem>
								<MenuItem value="Факультет 2">Факультет 2</MenuItem>
								<MenuItem value="Факультет 3">Факультет 3</MenuItem>
								{/* Добавьте другие факультеты как MenuItem */}
							</Select>
						</FormControl>
						<BaseButton buttonText="Хочу сюда!" handleButton={handleFaculty} />
					</div>
				);
			case "dontknow":
				return (
					<div className={s.modal} onClick={(e) => e.stopPropagation()}>
						<h2 className={s.heading}>Хотите пройти тест на профориентацию?</h2>
						<BaseButton buttonText="Хочу!" handleButton={handleTest} />
						<BaseButton
							buttonText="Просто посмотреть факультеты"
							handleButton={handleGoToFaculty}
						/>
					</div>
				);

			default:
				break;
		}
	};

	return (
		<CSSTransition
			in={isOpen}
			timeout={300}
			nodeRef={modalRef}
			classNames={{
				enter: s["alert-enter"],
				enterActive: s["alert-enter-active"],
				exit: s["alert-exit"],
				exitActive: s["alert-exit-active"],
			}}
			unmountOnExit
		>
			<div
				className={s.wrapper}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				ref={modalRef}
			>
				{showContent()}
			</div>
		</CSSTransition>
	);
};

export default Modal;
