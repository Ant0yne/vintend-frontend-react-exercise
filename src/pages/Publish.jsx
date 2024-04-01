import axios from "axios";

import HeaderHome from "../components/HeaderHome";

const Publish = ({ token, setToken }) => {
	// To not display the query components (switch and range)
	const noQueryRoute = true;
	let publishMissingToken;
	token ? (publishMissingToken = false) : (publishMissingToken = true);
	console.log(publishMissingToken);

	return (
		<HeaderHome
			token={token}
			setToken={setToken}
			noQueryRoute={noQueryRoute}
			publishMissingToken={publishMissingToken}
		/>
	);
};

export default Publish;
