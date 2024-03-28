import axios from "axios";
import { useState, useEffect } from "react";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";
import Pagination from "../components/Pagination";

const Home = () => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [dataSlice, setDataSlice] = useState();

	const defaultPage = 1;
	const defaultLimit = 8;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://lereacteur-vinted-api.herokuapp.com/offers?sort=price-asc"
				);

				const dataTemp = { ...response.data };
				const offersSlice = dataTemp.offers.slice(0, defaultLimit);

				setData(response.data);
				setDataSlice({ count: dataTemp.count, offers: offersSlice });
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
			<HeaderHome />
			<Hero />
			<OffersHome {...dataSlice} />
			<Pagination page={defaultPage} limit={defaultLimit} {...data} />
		</>
	);
};

export default Home;
