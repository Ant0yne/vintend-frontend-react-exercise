import axios from "axios";
import { useState, useEffect } from "react";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";
import Loading from "../components/Loading";

const Home = ({
	token,
	setToken,
	priceRange,
	setPriceRange,
	checked,
	setChecked,
	search,
	setSearch,
	isModalLog,
	setIsModalLog,
	preventRoute,
	setPreventRoute,
}) => {
	// data received by the request
	const [data, setData] = useState();
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// reset the search and sort parameters
		setSearch("");
		setChecked(false);
		setPriceRange([0, 1000]);

		const fetchData = async () => {
			// return to the top of screen
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
			try {
				const response = await axios.get(
					import.meta.env.VITE_API_URL + "/offers"
				);

				// assign the data sent by the request to data
				setData(response.data);
				// remove the loading screen
				setIsLoading(false);
			} catch (error) {
				console.log(error.response.data.message);
			}
		};

		fetchData();
	}, [setSearch, setChecked, setPriceRange]);

	return isLoading ? (
		<Loading token={token} setToken={setToken} />
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
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
				preventRoute={preventRoute}
				setPreventRoute={setPreventRoute}
			/>
			<main>
				<Hero
					token={token}
					setIsModalLog={setIsModalLog}
					setPreventRoute={setPreventRoute}
				/>
				<OffersHome {...data} />
			</main>
		</>
	);
};

export default Home;
