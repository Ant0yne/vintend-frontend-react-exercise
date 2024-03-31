import HeaderHome from "../components/HeaderHome";

const NotFound = ({ token, setToken }) => {
	const noQueryRoute = true;

	return (
		<>
			<HeaderHome
				token={token}
				setToken={setToken}
				noQueryRoute={noQueryRoute}
			/>
			<main>
				<h2 style={{ textAlign: "center", marginTop: "30px" }}>
					Désolé, cette page n'existe pas
				</h2>
			</main>
		</>
	);
};

export default NotFound;
