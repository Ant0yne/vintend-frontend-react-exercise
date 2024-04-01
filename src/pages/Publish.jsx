import HeaderHome from "../components/HeaderHome";
import FormPublish from "../components/FormPublish";

const Publish = ({ token, setToken }) => {
	// To not display the query components (switch and range)
	const noQueryRoute = true;

	return (
		<>
			<HeaderHome
				token={token}
				setToken={setToken}
				noQueryRoute={noQueryRoute}
			/>
			<FormPublish token={token} />
		</>
	);
};

export default Publish;
