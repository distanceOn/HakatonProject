import { useState } from "react";
import H1 from "../../../components/H1/H1";
import Question from "../Question/Question";
import s from "./Questions.module.scss";

function Questions({
	questionsList,
	category,
	handleAnswerSelection,
	handleNextCategory,
}) {
	const questions = questionsList[category].questions;
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const currentQuestion = questions[currentQuestionIndex];

	const handleNextQuestion = (selectedAnswer) => {
		handleAnswerSelection(currentQuestion.question, selectedAnswer);

		if (currentQuestionIndex + 1 < questions.length) {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
		} else {
			handleNextCategory();
		}
	};

	return (
		<div className={s.block}>
			<H1 text={category} />
			<Question
				question={currentQuestion.question}
				handleAnswerSelection={handleNextQuestion}
				variants={currentQuestion.variants}
			/>
		</div>
	);
}

export default Questions;
