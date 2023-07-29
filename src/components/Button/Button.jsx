import { Button } from "@mui/material";

function BaseButton({ handleButton, buttonText }) {
	return (
		<div
			onClick={handleButton}
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				width: "15vw",
			}}
		>
			<Button
				variant="contained"
				color="primary"
				size="large"
				sx={{
					width: "100%",
					fontSize: "1vw",
					backgroundColor: "#ffd700",
					color: "#000",
					borderRadius: "3vw",
				}}
			>
				{buttonText}
			</Button>
			{/* Arrow icon pointing to the right */}
		</div>
	);
}

export default BaseButton;
