import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./University.module.scss";

function University() {
	const { id, imageUrl, title, description } = JSON.parse(
		localStorage.getItem("card")
	);

	return (
		<div className={s.main}>
			<ResponsiveAppBar />
			<div className={s.card}>
				<img src={imageUrl} alt="Универ" className={s.img} />
				<div className={s.text}>
					<h1>{title}</h1>
					<p className={s.p}>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default University;
