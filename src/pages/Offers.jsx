import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";
import Pagination from "../components/Pagination";

const Offers = ({
	token,
	setToken,
	priceRange,
	setPriceRange,
	checked,
	setChecked,
	search,
	setSearch,
}) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	// retreive the queries and set default value if there is none
	const [queries, setQueries] = useSearchParams();
	const limit = queries.get("limit") || 10;
	const page = queries.get("page") || 1;
	const sort = queries.get("sort") || "price-asc";
	const priceMin = queries.get("priceMin") || 0;
	const priceMax = queries.get("priceMax") || 10000;
	const title = queries.get("title");

	const url = `?sort=${sort}&priceMin=${priceMin}&priceMax=${priceMax}&title=${title}`;

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });

		// Keep the range and switch at the right position and values
		setChecked(checked);
		const temp = [];
		temp.push(Number(priceMin));
		temp.push(Number(priceMax));
		setPriceRange(temp);
		setSearch(title);

		const fetchData = async () => {
			try {
				// send request with the queries
				const response = await axios.get(
					`${
						import.meta.env.VITE_API_URL
					}/offers${url}&page=${page}&limit=${limit}`
				);

				setData(response.data);
				setIsLoading(false);
			} catch (error) {
				console.log(error.response.data.message);
			}
		};

		fetchData();
	}, [
		limit,
		page,
		sort,
		url,
		priceMin,
		priceMax,
		checked,
		setChecked,
		setPriceRange,
		setSearch,
		title,
	]);

	return isLoading ? (
		<p>Loading ...</p>
	) : (
		<>
			<HeaderHome
				token={token}
				setToken={setToken}
				priceRange={priceRange}
				setPriceRange={setPriceRange}
				checked={checked}
				setChecked={setChecked}
				search={search}
				setSearch={setSearch}
			/>
			<Hero />
			{/* if no offer display a message */}
			{data.count > 0 ? <OffersHome {...data} /> : <p>Aucune offre trouvée</p>}
			<Pagination page={page} limit={limit} count={data.count} url={url} />
		</>
	);
};

export default Offers;
