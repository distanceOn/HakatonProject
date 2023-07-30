import ResponsiveAppBar from "../../components/ResponsiveAppBar";

function Help() {
	return (
		<div>
			<ResponsiveAppBar />
			<iframe
				style={{ width: "100%", height: "45vw" }}
				title="help"
				src="https://studentik-chat-o6148gxlt-belyaev-dev.vercel.app/"
			></iframe>
		</div>
	);
}

export default Help;
