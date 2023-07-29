import { useSelector } from "react-redux";
import H1 from "../../components/H1/H1";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./Profile.module.scss";
import { selectUserId, selectUserRequest } from "../../redux/selectors";

function Profile() {
	const user = useSelector(selectUserId);
	const userRequest = useSelector(selectUserRequest);
	return (
		<div className={s.profile}>
			<ResponsiveAppBar />
			<H1 text={"Мой профиль"} />
			<div className={s.data}>
				<div>
					<span>Номер телефона: </span>
					+7{user}
				</div>
				<div>
					<span>Заявка на поступление: </span>
					{userRequest ? "На рассмотрении" : "Еще не отправлена"}
				</div>
			</div>
		</div>
	);
}

export default Profile;
