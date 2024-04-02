import HeaderHome from "../components/HeaderHome";
import FormPublish from "../components/FormPublish";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Publish = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	preventRoute,
	setPreventRoute,
}) => {
	// To not display the query components (switch and range)
	const noQueryRoute = true;

	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			setIsModalLog(true);
			setPreventRoute(true);
			navigate("/");
		}
	}, [token, setIsModalLog, setPreventRoute, navigate]);

	return (
		<>
			<HeaderHome
				token={token}
				setToken={setToken}
				noQueryRoute={noQueryRoute}
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
				preventRoute={preventRoute}
				setPreventRoute={setPreventRoute}
			/>
			<FormPublish token={token} />
		</>
	);
};

export default Publish;
