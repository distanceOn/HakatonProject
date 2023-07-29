import Typography from "@mui/material/Typography";

function H1(props) {
	return (
		<div>
			<Typography
				variant="h1"
				sx={{
					textAlign: "center",
					fontSize: "3vw", // Изменяем размер шрифта в зависимости от ширины вьюпорта
					fontWeight: 700,
					marginTop: "1vh", // Изменяем отступ сверху в зависимости от высоты вьюпорта
					color: "#ffd700",
				}}
			>
				{props.text}
			</Typography>
			{/* Другой контент страницы */}
		</div>
	);
}

export default H1;
