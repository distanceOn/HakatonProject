import { useEffect, useState } from "react";
import BaseButton from "../../components/Button/Button";
import H1 from "../../components/H1/H1";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./Testing.module.scss";
import Questions from "./Questions/Questions";
import { useDispatch, useSelector } from "react-redux";
import { selectTestingResults, selectUserId } from "../../redux/selectors";
import { setTesting } from "../../redux/slices/user";
import { v4 as uuidv4 } from "uuid";

function Testing() {
	const [testingState, setTestingState] = useState("default");
	const [answers, setAnswers] = useState([]);
	const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

	const questionsList = {
		categories: {
			Интересы: {
				questions: [
					{
						question: "Какие книги вам нравится читать больше всего?",
						variants: [
							"Научная фантастика или технология",
							"Исторический или биографический",
							"Медицинский или психологический",
							"Деловой или экономический",
							"Литературный или философский",
							"Мне не нравится читать",
						],
					},
					{
						question: "Какой предмет в старшей школе вам понравился больше всего?",
						variants: [
							"Математика",
							"Естественные науки (биология, химия, физика)",
							"Гуманитарные науки (история, география, обществознание)",
							"Искусство (Музыка, драма, изобразительное искусство, дизайн)",
							"Языки (английский, испанский, французский и т.д.)",
							"Бизнес/ Экономика",
						],
					},
				],
			},
			Навыки: {
				questions: [
					{
						question: "Каковы ваши 3 главных навыка?",
						variants: [
							"Решение проблем",
							"Креативность",
							"Коммуникация",
							"Лидерство",
							"Аналитическое мышление",
							"Ориентированный на детали",
						],
					},
					{
						question: "Над какими проектами вам нравится работать?",
						variants: [
							"Строительство или починка чего-либо",
							"Планирование мероприятий или проектов",
							"Создание произведений искусства или дизайнов",
							"Анализ данных или решение проблем",
							"Помогать другим",
						],
					},
				],
			},
			Личность: {
				questions: [
					{
						question: "Что из нижеперечисленного лучше всего описывает вас?",
						variants: [
							"Я более практичен и ориентируюсь на практике",
							"У меня больше воображения и новаторства",
							"Я более аналитичен и логичен",
							"Я более общительный и отзывчивый",
							"Я более чуткий и заботливый",
							"Я более ориентирован на детали и организован",
						],
					},
				],
			},
			Ценности: {
				questions: [
					{
						question: "Что из перечисленного является для вас наиболее важным на работе?",
						variants: [
							"Высокая зарплата",
							"Помогать другим",
							"Творческое самовыражение",
							"Интеллектуальный вызов",
							"Возможность лидерства",
							"Стабильность и безопасность",
						],
					},
					{
						question: "Какую рабочую среду вы предпочитаете?",
						variants: [
							"Стабильная и предсказуемая рутина",
							"Динамичная и непредсказуемая среда",
							"Работа в команде",
							"Работать независимо",
							"Баланс между рутиной и непредсказуемостью",
						],
					},
				],
			},
			"Будущие цели": {
				questions: [
					{
						question: "Каким вы видите себя через 10 лет?",
						variants: [
							"Веду свой собственный бизнес",
							"Работа в крупной корпорации",
							"Работа в академических кругах или исследовательская деятельность",
							"Работа на государственной службе или в некоммерческой организации",
							"Продолжение творческой карьеры (художник, музыкант, писатель и т.д.)",
							"Не уверен",
						],
					},
				],
			},
		},
	};

	const handleStart = () => {
		setTestingState("isTesting");
		setCurrentCategoryIndex(0);
	};

	const handleAnswerSelection = (question, answer) => {
		setAnswers((prevAnswers) => [...prevAnswers, answer]);
	};

	const handleNextCategory = () => {
		if (currentCategoryIndex + 1 < categories.length) {
			setCurrentCategoryIndex((prevIndex) => prevIndex + 1);
		} else {
			// All categories and questions are answered, you can handle completion here.
			setTestingState("completed");
		}
	};

	const results = useSelector(selectTestingResults);
	const dispatch = useDispatch();

	const user = useSelector(selectUserId);

	useEffect(() => {
		if (testingState === "completed") {
			const randomId = uuidv4();
			const readyAnswers = {
				testId: randomId,
				studentId: user,
				responses: [],
			};
			answers.forEach((answer, index) => {
				readyAnswers.responses.push({ questionId: index + 1, response: answer });
			});

			dispatch(setTesting(readyAnswers));
		}
	}, [testingState, answers, dispatch, user]);

	useEffect(() => {
		console.log(results);
	}, [results]);

	const categories = Object.keys(questionsList.categories);

	const currentCategory = categories[currentCategoryIndex];

	const showContent = () => {
		switch (testingState) {
			case "default":
				return (
					<div className={s.block}>
						<H1 text="Начинаем тест!" />
						<h2 className={s.h2}>
							Будет предложено несколько вариантов ответа, выберите один
						</h2>
						<BaseButton buttonText="Поехали!" handleButton={handleStart} />
					</div>
				);

			case "isTesting":
				return (
					<Questions
						key={currentCategory}
						questionsList={questionsList.categories}
						category={currentCategory}
						handleAnswerSelection={handleAnswerSelection}
						handleNextCategory={handleNextCategory}
					/>
				);

			case "completed":
				return <div>Тестирование завершено! Можете обработать результаты.</div>;

			default:
				break;
		}
	};

	return (
		<div className={s.testing}>
			<ResponsiveAppBar />
			{showContent()}
		</div>
	);
}

export default Testing;
