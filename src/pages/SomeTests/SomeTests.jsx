import { Link, useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./SomeTests.module.scss";

function SomeTests() {
	const navigate = useNavigate();

	const handleTest = () => {
		navigate("/testing");
	};

	return (
		<div className={s.main}>
			<ResponsiveAppBar />
			<div className={s.block}>
				<ul className={s.tests}>
					<li className={s.test}>
						<button className={s.button} onClick={handleTest}>
							Тест от ИЗиВУЗ
						</button>
					</li>
					<li className={s.test}>
						<Link to="https://careertest.ru/tests/opredelenie-professionalnyh-sklonnostej/">
							<button className={s.button}>Определение профессиональных склонностей</button>
						</Link>
					</li>
					<li className={s.test}>
						<Link to="https://careertest.ru/tests/test-hollanda/">
							<button className={s.button}>Тест Холланда</button>
						</Link>
					</li>
					<li className={s.test}>
						<Link to="https://careertest.ru/tests/yakorya-karery/">
							<button className={s.button}>Якоря карьеры</button>
						</Link>
					</li>
					<li className={s.test}>
						<Link to="https://careertest.ru/tests/test-na-psihotip-ivan-karnauh/">
							<button className={s.button}>Тест на психотип от Карнауха Ивана</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SomeTests;
