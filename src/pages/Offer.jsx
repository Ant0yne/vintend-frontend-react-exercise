import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import HeaderHome from "../components/HeaderHome";
import OfferDetail from "../components/OfferDetail";
import Loading from "../components/Loading";

const Offer = ({ token, setToken }) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	// To not display the query components (switch and range)
	const noQueryRoute = true;

	const { id } = useParams();

	useEffect(() => {
		//return to the top of screen
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });

		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_API_URL}/offer/${id}`
				);

				const data = response.data;

				setData(data);
				setIsLoading(false);
			} catch (error) {
				console.log(error.response.data.message);
			}
		};

		fetchData();
	}, [id]);

	return isLoading ? (
		<Loading token={token} setToken={setToken} />
	) : (
		<>
			<HeaderHome
				token={token}
				setToken={setToken}
				noQueryRoute={noQueryRoute}
			/>
			<OfferDetail data={data} />
		</>
	);
};

export default Offer;
