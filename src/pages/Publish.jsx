import HeaderHome from "../components/HeaderHome";
import FormPublish from "../components/FormPublish";

const Publish = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	isPublishRoute,
	setIsPublishRoute,
}) => {
	// To not display the query components (switch and range)
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
			<FormPublish token={token} />
		</>
	);
};

export default Publish;
