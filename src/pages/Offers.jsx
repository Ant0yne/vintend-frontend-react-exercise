import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";
import Pagination from "../components/Pagination";

const Offers = () => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const location = useLocation();
	const { page, limit, count } = location.state;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://lereacteur-vinted-api.herokuapp.com/offers?sort=price-asc&page=${page}&limit=${limit}`
				);

				setData(response.data);
				setIsLoading(false);
			} catch (error) {
				console.log("error.response");
			}
		};

		fetchData();
	}, [limit, page]);

	return isLoading ? (
		<p>Loading ...</p>
	) : (
		<>
			<HeaderHome />
			<Hero />
			<OffersHome {...data} />
			<Pagination page={page} limit={limit} count={count} />
		</>
	);
};

export default Offers;
