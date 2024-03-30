import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import HeaderHome from "../components/HeaderHome";
import OfferDetail from "../components/OfferDetail";

const Offer = ({ token, setToken }) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const offerRoute = true;

	const { id } = useParams();

	useEffect(() => {
		//return to the top of screen
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });

		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
				);

				const data = response.data;

				setData(data);
				setIsLoading(false);
			} catch (error) {
				console.log(error.response);
			}
		};

		fetchData();
	}, [id]);

	return isLoading ? (
		<p>Loading ...</p>
	) : (
		<>
			<HeaderHome token={token} setToken={setToken} offerRoute={offerRoute} />
			<OfferDetail data={data} />
		</>
	);
};

export default Offer;
