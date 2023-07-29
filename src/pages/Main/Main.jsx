import List from "../../components/List/List";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./Main.module.scss";
import EnterButton from "./components/Button/Button";
import H1 from "../../components/H1/H1";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useSelector } from "react-redux";
import { selectUserId } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";

function Main() {
	const user = useSelector(selectUserId);

	const [isOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();

	const handleButton = () => {
		if (!user) {
			navigate("/login");
		}
		setIsOpen(true);
	};

	return (
		<div className={s.main}>
			<ResponsiveAppBar />
			<H1 text="Подача документов в университет в несколько кликов!" />
			<EnterButton handleButton={handleButton} />
			<List />
			<Modal setIsOpen={setIsOpen} isOpen={isOpen} />
		</div>
	);
}

export default Main;
