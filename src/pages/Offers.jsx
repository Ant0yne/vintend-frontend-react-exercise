import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";
import Pagination from "../components/Pagination";

const Offers = ({ token, setToken }) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	// retreive the queries and set default value if there is none
	const [queries, setQueries] = useSearchParams();
	const limit = queries.get("limit") || 8;
	const page = queries.get("page") || 1;
	const sort = queries.get("sort") || "price-asc";
	const priceMin = queries.get("priceMin") || 0;
	const priceMax = queries.get("priceMax") || 10000;

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		const fetchData = async () => {
			try {
				// send request with the queries
				const response = await axios.get(
					`https://lereacteur-vinted-api.herokuapp.com/offers?sort=${sort}&priceMin=${priceMin}&priceMax=${priceMax}&page=${page}&limit=${limit}`
				);

				setData(response.data);
				setIsLoading(false);
			} catch (error) {
				console.log("error.response");
			}
		};

		fetchData();
	}, [limit, page, sort, priceMin, priceMax]);

	return isLoading ? (
		<p>Loading ...</p>
	) : (
		<>
			<HeaderHome token={token} setToken={setToken} />
			<Hero />
			<OffersHome {...data} />
			<Pagination page={page} limit={limit} count={data.count} />
		</>
	);
};

export default Offers;
