import axios from "axios";
import { useState, useEffect } from "react";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";

const Home = ({
	token,
	setToken,
	priceRange,
	setPriceRange,
	checked,
	setChecked,
	search,
	setSearch,
}) => {
	// data received by the request
	const [data, setData] = useState();
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			// return to the top of screen
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
			try {
				const response = await axios.get(
					"https://lereacteur-vinted-api.herokuapp.com/offers"
				);

				// assign the data sent by the request to data
				setData(response.data);
				// remove the loading screen
				setIsLoading(false);
			} catch (error) {
				console.log(error.response);
			}
		};

		fetchData();
	}, []);

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
			<OffersHome {...data} />
		</>
	);
};

export default Home;
