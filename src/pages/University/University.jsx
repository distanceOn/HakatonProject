import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./University.module.scss";

function University() {
	const { id, imageUrl, title, description } = JSON.parse(
		localStorage.getItem("card")
	);

	const navigate = useNavigate();

	const handleButton = () => {
		navigate("/credit");
	};
	console.log(id);
	return (
		<div className={s.main}>
			<ResponsiveAppBar />
			<div className={s.card}>
				<img src={imageUrl} alt="Универ" className={s.img} />
				<div className={s.text}>
					<h1>{title}</h1>
					<p className={s.p}>{description}</p>
					<button className={s.btn} onClick={handleButton}>
						Подать заявку
					</button>
				</div>
			</div>
		</div>
	);
}

export default University;
