import "./loading.css";

import HeaderHome from "../HeaderHome";

const Loading = ({ token, setToken }) => {
	const noQueryRoute = true;

	return (
		<>
			<HeaderHome
				token={token}
				setToken={setToken}
				noQueryRoute={noQueryRoute}
			/>
			<section id="loading">
				<h2>
					Chargement <span id="dot-1">.</span>
					<span id="dot-2">.</span>
					<span id="dot-3">.</span>
				</h2>
			</section>
		</>
	);
};

export default Loading;
