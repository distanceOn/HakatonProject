import s from "./Question.module.scss";

function Question({ question, variants, handleAnswerSelection }) {
	return (
		<div className={s.block}>
			<p className={s.question}>{question}</p>
			<ul className={s.list}>
				{variants.map((variant) => {
					return (
						<li key={variant}>
							<button className={s.variant} onClick={() => handleAnswerSelection(variant)}>
								{variant}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Question;
