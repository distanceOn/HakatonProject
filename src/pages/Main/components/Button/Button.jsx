import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function EnterButton({ handleButton }) {
	return (
		<div
			onClick={handleButton}
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				width: "30vw",
				margin: "2rem auto",
			}}
		>
			{/* Arrow icon pointing to the left */}
			<ArrowForwardIcon
				style={{
					fontSize: "4vw",
					cursor: "pointer",
					color: "#ffd700",
				}}
			/>
			<Button
				variant="contained"
				color="primary"
				size="large"
				sx={{
					width: "100%",
					fontSize: "3vw",
					padding: "1rem",
					backgroundColor: "#ffd700",
					color: "#000",
					borderRadius: "3vw",
				}}
			>
				Поступить
			</Button>
			{/* Arrow icon pointing to the right */}

			<ArrowBackIcon
				style={{
					fontSize: "4vw",
					cursor: "pointer",
					color: "#ffd700",
				}}
			/>
		</div>
	);
}

export default EnterButton;
