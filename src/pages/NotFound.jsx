import HeaderHome from "../components/HeaderHome";

const NotFound = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	isPublishRoute,
	setIsPublishRoute,
}) => {
	const noQueryRoute = true;

	return (
		<>
			<HeaderHome
				token={token}
				setToken={setToken}
				noQueryRoute={noQueryRoute}
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
				isPublishRoute={isPublishRoute}
				setIsPublishRoute={setIsPublishRoute}
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
