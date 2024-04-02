import HeaderHome from "../components/HeaderHome";
import FormPublish from "../components/FormPublish";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			setIsModalLog(true);
			setIsPublishRoute(true);
			navigate("/");
		}
	}, [token, setIsModalLog, setIsPublishRoute, navigate]);

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
