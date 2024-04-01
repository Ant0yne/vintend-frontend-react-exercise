import HeaderHome from "../components/HeaderHome";
import FormPublish from "../components/FormPublish";

const Publish = ({ token, setToken }) => {
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
